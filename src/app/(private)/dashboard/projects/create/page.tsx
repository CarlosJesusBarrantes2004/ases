// app/(private)/dashboard/projects/create/page.tsx
"use client";

import { useEffect, useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Image as ImageIcon, XCircle } from "lucide-react"; // Iconos
import Image from "next/image";

// Definimos el límite de imágenes
const MIN_IMAGES = 1;
const MAX_IMAGES = 4;
const MAX_FILE_SIZE_MB = 5; // MB

// Esquema de validación con Zod
// El campo 'images' aquí solo valida si existe el campo en el formulario,
// la validación real de los archivos se hará sobre el estado 'selectedFiles'
// que manejaremos manualmente antes del submit, o en un refine más complejo.
// Simplificamos este schema ya que 'selectedFiles' llevará el peso de la validación.
const createProjectSchema = z.object({
  title: z.string().min(1, "El título es requerido."),
  description: z.string().min(1, "La descripción es requerida."),
  // 'images' en el schema solo existe para el register, pero su validación detallada
  // la haremos sobre 'selectedFiles' para un control acumulativo.
  images: z.any().optional(), // No validamos aquí la FileList directamente.
});

type CreateProjectFormInputs = z.infer<typeof createProjectSchema>;

export default function CreateProjectPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null); // Referencia al input de archivo

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  // Estado para almacenar los objetos File seleccionados (acumulativos)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // Estado para las URLs de previsualización
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError, // Para establecer errores manuales de react-hook-form
    clearErrors, // Para limpiar errores manuales
  } = useForm<CreateProjectFormInputs>({
    resolver: zodResolver(createProjectSchema),
  });

  // Efecto para generar previsualizaciones y limpiar URLs al desmontar
  useEffect(() => {
    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(urls);

    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [selectedFiles]);

  // Manejador de cambio para el input de archivo
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const newFiles = Array.from(event.target.files);

    // Filtra los archivos duplicados por nombre y tamaño (simple deduplicación)
    const uniqueNewFiles = newFiles.filter(
      (newFile) =>
        !selectedFiles.some(
          (existingFile) =>
            existingFile.name === newFile.name &&
            existingFile.size === newFile.size
        )
    );

    const updatedFiles = [...selectedFiles, ...uniqueNewFiles];

    // Validar el número total de imágenes
    if (updatedFiles.length > MAX_IMAGES) {
      setError("images", {
        type: "manual",
        message: `Puedes seleccionar un máximo de ${MAX_IMAGES} imágenes.`,
      });
      return;
    } else {
      clearErrors("images"); // Limpia el error si la cantidad es válida
    }

    // Validar tipo y tamaño de cada archivo
    const invalidFiles = uniqueNewFiles.filter(
      (file) =>
        !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
          file.type
        ) || file.size > MAX_FILE_SIZE_MB * 1024 * 1024
    );

    if (invalidFiles.length > 0) {
      setError("images", {
        type: "manual",
        message: `Algunas imágenes no son válidas. Asegúrate de que sean JPEG, PNG, WebP o GIF y menores de ${MAX_FILE_SIZE_MB}MB.`,
      });
      // Opcional: Filtra las inválidas y procede con las válidas
      setSelectedFiles(
        updatedFiles.filter((file) => !invalidFiles.includes(file))
      );
      return;
    } else {
      clearErrors("images");
    }

    setSelectedFiles(updatedFiles);
    // Limpiar el valor del input para permitir seleccionar los mismos archivos de nuevo (si es necesario)
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Manejador para quitar una imagen de la previsualización
  const handleRemoveImage = (fileToRemove: File) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file !== fileToRemove)
    );
    // Vuelve a validar la cantidad si se quita una imagen y estaba por debajo del mínimo
    if (selectedFiles.length - 1 < MIN_IMAGES) {
      setError("images", {
        type: "manual",
        message: `Se requiere al menos ${MIN_IMAGES} imagen.`,
      });
    } else {
      clearErrors("images");
    }
  };

  const onSubmit = async (data: CreateProjectFormInputs) => {
    setLoading(true);
    setSuccessMessage(null);
    setApiError(null);
    clearErrors("images"); // Limpia errores antes del submit final

    // Validaciones finales antes de enviar
    if (selectedFiles.length < MIN_IMAGES) {
      setApiError(
        `Se requiere al menos ${MIN_IMAGES} imagen para el proyecto.`
      );
      setLoading(false);
      return;
    }
    if (selectedFiles.length > MAX_IMAGES) {
      setApiError(
        `Se permite un máximo de ${MAX_IMAGES} imágenes por proyecto.`
      );
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        body: formData,
      });

      const responseData = await res.json();

      if (res.ok) {
        setSuccessMessage(
          responseData.message || "Proyecto creado exitosamente."
        );
        reset(); // Limpiar el formulario
        setSelectedFiles([]); // Limpiar archivos seleccionados
        setImagePreviews([]); // Limpiar previsualizaciones
        setTimeout(() => router.push("/dashboard/projects"), 2000);
      } else {
        setApiError(responseData.message || "Error al crear el proyecto.");
      }
    } catch (err: unknown) {
      console.error("Error de red o desconocido:", err);
      setApiError("Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Crear Nuevo Proyecto
        </h1>
        <Link href="/dashboard/projects" passHref>
          <button className="flex items-center hover:cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver a Proyectos
          </button>
        </Link>
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

        <div>
          <label
            htmlFor="file-upload" // Etiqueta para el botón de selección
            className="block text-sm font-medium text-gray-700"
          >
            Imágenes del Proyecto ({MIN_IMAGES}-{MAX_IMAGES} imágenes
            requeridas)
          </label>
          <div className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-indigo-500 transition-colors duration-200">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <input
                id="file-upload"
                type="file"
                multiple // Permitir múltiples archivos
                className="sr-only" // Ocultar el input real
                accept="image/jpeg,image/png,image/webp,image/gif" // Tipos de archivo aceptados
                // Ya no usamos register para onChange para control manual
                onChange={handleFileChange}
                ref={fileInputRef} // Asignar la referencia
              />
              <span className="flex items-center">
                <ImageIcon className="h-6 w-6 mr-2" />
                <span>Haz clic para seleccionar imágenes</span>
              </span>
            </label>
            <p className="pl-1 text-sm text-gray-500">o arrastra y suelta</p>
          </div>
          {/* Mostrar errores manuales o de Zod para las imágenes */}
          {errors.images && (
            <p className="mt-1 text-sm text-red-600">
              {errors.images.message as string}
            </p>
          )}

          {/* Previsualización de imágenes con botón de eliminar */}
          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {imagePreviews.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-32 rounded-md overflow-hidden shadow-sm border border-gray-200 group"
                >
                  <Image
                    src={src}
                    alt={`Preview ${index}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* Botón para eliminar imagen de la previsualización */}
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(selectedFiles[index])} // Pasa el objeto File
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-label="Eliminar imagen"
                  >
                    <XCircle className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex hover:cursor-pointer justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? "Creando Proyecto..." : "Crear Proyecto"}
        </button>
      </form>
    </div>
  );
}
