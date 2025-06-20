"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Image as ImageIcon } from "lucide-react"; // Iconos
import Image from "next/image";

// Esquema de validación con Zod
const createProjectSchema = z.object({
  title: z.string().min(1, "El título es requerido."),
  description: z.string().min(1, "La descripción es requerida."),
  images: z
    .any() // Para manejar el FileList de los input file
    .refine((files) => files?.length > 0, "Se requiere al menos una imagen.")
    .refine(
      (files) =>
        files &&
        Array.from(files).every((file) => file.size <= 5 * 1024 * 1024),
      `El tamaño máximo de imagen es 5MB.`
    ) // 5MB por imagen
    .refine(
      (files) =>
        files &&
        Array.from(files).every((file) =>
          ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
            file.type
          )
        ),
      "Solo se permiten imágenes JPEG, PNG, WebP o GIF."
    ),
});

type CreateProjectFormInputs = z.infer<typeof createProjectSchema>;

export default function CreateProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, // Para observar cambios en el campo de archivos
  } = useForm<CreateProjectFormInputs>({
    resolver: zodResolver(createProjectSchema),
  });

  const watchedFiles = watch("images");

  // Generar previsualizaciones de imágenes
  useEffect(() => {
    if (watchedFiles && watchedFiles.length > 0) {
      const filesArray = Array.from(watchedFiles) as File[];
      const urls = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews(urls);

      // Limpiar URLs de objetos cuando el componente se desmonte o las imágenes cambien
      return () => urls.forEach((url) => URL.revokeObjectURL(url));
    } else {
      setImagePreviews([]);
    }
  }, [watchedFiles]);

  const onSubmit = async (data: CreateProjectFormInputs) => {
    setLoading(true);
    setSuccessMessage(null);
    setApiError(null);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    // Asegurarse de que 'images' sea un FileList y añadir cada archivo
    if (data.images instanceof FileList) {
      for (let i = 0; i < data.images.length; i++) {
        formData.append("images", data.images[i]);
      }
    }

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        // No establecer 'Content-Type': 'application/json' cuando se usa FormData
        // El navegador lo establecerá automáticamente como 'multipart/form-data' con el boundary correcto
        body: formData,
      });

      const responseData = await res.json();

      if (res.ok) {
        setSuccessMessage(
          responseData.message || "Proyecto creado exitosamente."
        );
        reset(); // Limpiar el formulario
        setImagePreviews([]); // Limpiar previsualizaciones
        // Puedes redirigir a la lista de proyectos después de un tiempo
        // setTimeout(() => router.push('/dashboard/projects'), 2000);
      } else {
        setApiError(responseData.message || "Error al crear el proyecto.");
      }
    } catch (err: any) {
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
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Imágenes del Proyecto
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
                {...register("images")}
              />
              <span className="flex items-center">
                <ImageIcon className="h-6 w-6 mr-2" />
                <span>Haz clic para seleccionar imágenes</span>
              </span>
            </label>
            <p className="pl-1 text-sm text-gray-500">o arrastra y suelta</p>
          </div>
          {errors.images && (
            <p className="mt-1 text-sm text-red-600">
              {errors.images.message as string}
            </p>
          )}

          {/* Previsualización de imágenes */}
          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {imagePreviews.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-32 rounded-md overflow-hidden shadow-sm border border-gray-200"
                >
                  <Image
                    src={src}
                    alt={`Preview ${index}`}
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
          className="w-full flex hover:cursor-pointer justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? "Creando Proyecto..." : "Crear Proyecto"}
        </button>
      </form>
    </div>
  );
}
