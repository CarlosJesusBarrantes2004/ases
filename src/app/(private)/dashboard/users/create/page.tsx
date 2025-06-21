// app/(private)/dashboard/users/create/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft } from "lucide-react"; // Icono para volver

// Esquema de validación con Zod
const createUserSchema = z.object({
  name: z.string().min(1, "El nombre es requerido."),
  email: z.string().email("Ingresa un correo electrónico válido."),
});

type CreateUserFormInputs = z.infer<typeof createUserSchema>;

export default function CreateUserPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Función para resetear el formulario
  } = useForm<CreateUserFormInputs>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async (data: CreateUserFormInputs) => {
    setLoading(true);
    setSuccessMessage(null);
    setApiError(null);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok) {
        setSuccessMessage(
          responseData.message || "Usuario creado exitosamente."
        );
        reset(); // Limpiar el formulario después del éxito
        // Puedes redirigir después de un tiempo o dejar que el usuario cree más
        setTimeout(() => router.push("/dashboard/users"), 2000);
      } else {
        setApiError(responseData.message || "Error al crear el usuario.");
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
          Crear Nuevo Usuario
        </h1>
        <Link href="/dashboard/users" passHref>
          <button className="flex items-center px-4 py-2 hover:cursor-pointer bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver a Usuarios
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
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex hover:cursor-pointer justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? "Creando..." : "Crear Usuario"}
        </button>
      </form>
    </div>
  );
}
