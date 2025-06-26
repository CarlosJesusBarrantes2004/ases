// app/(private)/dashboard/projects/[id]/edit/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Image as ImageIcon, XCircle } from "lucide-react";
import { Project } from "../../types/project"; // Ajusta la ruta de importación si es necesario

// Esquema de validación para la edición (similar a la creación)
const editProjectSchema = z.object({
  title: z.string().min(1, "El título es requerido."),
  description: z.string().min(1, "La descripción es requerida."),
  // `newImages` es para los nuevos archivos de imagen que se van a subir
  newImages: z
    .instanceof(FileList) // <--- CAMBIO CLAVE AQUÍ: Usamos instanceof FileList
    .refine((files) => {
      if (files.length === 0) return true; // Si no hay archivos, es válido
      // Ahora 'files' es reconocido como FileList, y sus elementos como File
      return Array.from(files).every((file) => file.size <= 5 * 1024 * 1024);
    }, `Cada nueva imagen no debe exceder 5MB.`)
    .refine((files) => {
      if (files.length === 0) return true;
      return Array.from(files).every((file) =>
        ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
          file.type
        )
      );
    }, "Solo se permiten imágenes JPEG, PNG, WebP o GIF para nuevas subidas.")
    .optional(), // Hacemos que sea opcional, ya que tu lógica ya lo considera.
  // `existingImageUrlsToKeep` es un array de URLs de las imágenes que ya existen y el usuario NO ha borrado
  // Zod no valida el tamaño de un array directamente si no está en el refina de `newImages`
  // La validación de la cantidad total de imágenes (existentes + nuevas) se hará en el `onSubmit` o en el backend.
});

type EditProjectFormInputs = z.infer<typeof editProjectSchema>;

export default function EditProjectPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Estado para las URLs de las imágenes que ya existen en el proyecto
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>([]);
  // Estado para las URLs de previsualización de las NUEVAS imágenes seleccionadas
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, // Para establecer valores programáticamente
  } = useForm<EditProjectFormInputs>({
    resolver: zodResolver(editProjectSchema),
  });

  const watchedNewFiles = watch("newImages"); // Observar cambios en el input de nuevas imágenes

  const fetchProjectToEdit = useCallback(
    async (projectId: string) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/projects/${projectId}`);
        if (!res.ok) {
          const errData = await res.json();
          throw new Error(
            errData.message || `Error ${res.status}: ${res.statusText}`
          );
        }
        const data: Project = await res.json();
        setProject(data);
        reset({
          title: data.title,
          description: data.description,
        });
        setExistingImageUrls(data.images.map((img) => img.url));
      } catch (err: unknown) {
        console.error("Error al cargar proyecto para edición:", err);
        setError(
          (err instanceof Error ? err.message : String(err)) ||
            "No se pudieron cargar los detalles del proyecto para editar."
        );
      } finally {
        setLoading(false);
      }
    },
    [reset, setError, setProject, setExistingImageUrls] // Dependencias para useCallback
  );

  useEffect(() => {
    if (id) {
      fetchProjectToEdit(id);
    }
  }, [id, fetchProjectToEdit]);

  // Generar previsualizaciones de NUEVAS imágenes
  useEffect(() => {
    if (watchedNewFiles && watchedNewFiles.length > 0) {
      const filesArray = Array.from(watchedNewFiles) as File[]; // Ya es FileList, pero un cast aquí es seguro
      const urls = filesArray.map((file) => URL.createObjectURL(file));
      setNewImagePreviews(urls);

      // Limpiar URLs de objetos cuando el componente se desmonte o las imágenes cambien
      return () => urls.forEach((url) => URL.revokeObjectURL(url));
    } else {
      setNewImagePreviews([]);
    }
  }, [watchedNewFiles]);

  // Manejar la eliminación de una imagen existente (solo del estado, se confirmará en el submit)
  const handleRemoveExistingImage = useCallback((urlToRemove: string) => {
    setExistingImageUrls((prevUrls) =>
      prevUrls.filter((url) => url !== urlToRemove)
    );
  }, []);

  const onSubmit = async (data: EditProjectFormInputs) => {
    setLoading(true);
    setSuccessMessage(null);
    setApiError(null);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    // 1. Añadir URLs de imágenes existentes que queremos conservar
    formData.append(
      "existing_images_to_keep",
      JSON.stringify(existingImageUrls)
    );

    // 2. Añadir nuevas imágenes (si las hay)
    // El tipo de data.newImages ya es FileList | undefined gracias a Zod.instanceof
    const newFilesArray = data.newImages ? Array.from(data.newImages) : [];
    if (newFilesArray.length > 0) {
      newFilesArray.forEach((file) => {
        formData.append("new_images", file);
      });
    }

    // 3. Validar cantidad total de imágenes (existentes + nuevas)
    const totalImagesCount = existingImageUrls.length + newFilesArray.length;
    if (totalImagesCount === 0) {
      setApiError("Se requiere al menos una imagen para el proyecto.");
      setLoading(false);
      return;
    }
    if (totalImagesCount > 4) {
      setApiError(
        "Se permite un máximo de 4 imágenes por proyecto (entre existentes y nuevas)."
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        body: formData, // FormData se envía directamente
      });

      const responseData = await res.json();

      if (res.ok) {
        setSuccessMessage(
          responseData.message || "Proyecto actualizado exitosamente."
        );
        // Después de la actualización, refrescar la página o redirigir
        router.push(`/dashboard/projects/${id}`); // Redirigir a la página de detalles
      } else {
        setApiError(responseData.message || "Error al actualizar el proyecto.");
      }
    } catch (err: unknown) {
      console.error("Error de red o desconocido al actualizar:", err);
      setApiError(
        (err instanceof Error ? err.message : String(err)) ||
          "Error al conectar con el servidor."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading && !project) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Cargando proyecto para edición...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
        <div className="mt-4 text-center">
          <Link href="/dashboard/projects" passHref>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300">
              Volver a Proyectos
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-8 text-gray-600">
        <p>Proyecto no encontrado para edición.</p>
        <div className="mt-4 text-center">
          <Link href="/dashboard/projects" passHref>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300">
              Volver a Proyectos
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Editar Proyecto</h1>
        <div className="flex space-x-3">
          <Link href={`/dashboard/projects/${id}`} passHref>
            <button className="flex hover:cursor-pointer items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Ver Detalles
            </button>
          </Link>
          <Link href="/dashboard/projects" passHref>
            <button className="flex hover:cursor-pointer items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver a Proyectos
            </button>
          </Link>
        </div>
      </div>

      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Éxito: </strong>
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      {apiError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{apiError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Título
          </label>
          <input
            id="title"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("title")}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <textarea
            id="description"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("description")}
          ></textarea>
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Sección de Imágenes Existentes */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Imágenes Actuales
          </h3>
          {existingImageUrls.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {existingImageUrls.map((url, index) => (
                <div
                  key={url}
                  className="relative w-full h-32 rounded-md overflow-hidden shadow-sm border border-gray-200 group"
                >
                  <Image
                    src={url}
                    alt={`Existing image ${index}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* Botón para eliminar imagen existente */}
                  <button
                    type="button"
                    onClick={() => handleRemoveExistingImage(url)}
                    className="absolute hover:cursor-pointer top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-label="Eliminar imagen"
                  >
                    <XCircle className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              No hay imágenes existentes para este proyecto.
            </p>
          )}
        </div>

        {/* Sección de Nuevas Imágenes */}
        <div className="mt-6">
          <label
            htmlFor="newImages"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Añadir Nuevas Imágenes (máximo {4 - existingImageUrls.length} más)
          </label>
          <div className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-indigo-500 transition-colors duration-200">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <input
                id="file-upload"
                type="file"
                multiple
                className="sr-only"
                accept="image/jpeg,image/png,image/webp,image/gif"
                {...register("newImages")}
              />
              <span className="flex items-center">
                <ImageIcon className="h-6 w-6 mr-2" />
                <span>Haz clic para seleccionar imágenes</span>
              </span>
            </label>
            <p className="pl-1 text-sm text-gray-500">o arrastra y suelta</p>
          </div>
          {errors.newImages && (
            <p className="mt-1 text-sm text-red-600">
              {errors.newImages.message as string}
            </p>
          )}
          {existingImageUrls.length + (watchedNewFiles?.length || 0) > 4 && (
            <p className="mt-1 text-sm text-red-600">
              Se excedió el límite de 4 imágenes en total.
            </p>
          )}

          {/* Previsualización de NUEVAS imágenes */}
          {newImagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {newImagePreviews.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-32 rounded-md overflow-hidden shadow-sm border border-gray-200"
                >
                  <Image
                    src={src}
                    alt={`New image preview ${index}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full hover:cursor-pointer flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? "Actualizando Proyecto..." : "Actualizar Proyecto"}
        </button>
      </form>
    </div>
  );
}
