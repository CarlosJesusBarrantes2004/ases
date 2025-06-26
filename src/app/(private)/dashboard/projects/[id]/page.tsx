"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { Project } from "./../types/project"; // Ajusta la ruta de importación si es necesario

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      fetchProjectDetails(id);
    }
  }, [id]);

  const fetchProjectDetails = async (projectId: string) => {
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
    } catch (err: unknown) {
      console.error("Error al cargar detalles del proyecto:", err);
      setError(
        (err instanceof Error ? err.message : String(err)) ||
          "No se pudieron cargar los detalles del proyecto."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setShowDeleteConfirm(false);
    setLoading(true);

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(
          errData.message || `Error ${res.status}: ${res.statusText}`
        );
      }

      router.push("/dashboard/projects");
    } catch (err: unknown) {
      console.error("Error al eliminar proyecto:", err);
      alert(
        (err instanceof Error ? err.message : String(err)) ||
          "Error al eliminar el proyecto. Intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  // --- REORDENAMIENTO CLAVE AQUÍ ---

  // 1. Mostrar estado de carga
  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Cargando detalles del proyecto...</p>
      </div>
    );
  }

  // 2. Mostrar estado de error (después de la carga, si ocurrió un error)
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

  // 3. Mostrar "Proyecto no encontrado" si `project` es null DESPUÉS de que la carga finalizó y no hubo error.
  // En este punto, 'loading' es false y 'error' es null. Si 'project' sigue siendo null, es que no se encontró.
  if (!project) {
    return (
      <div className="text-center py-8 text-gray-600">
        <p>Proyecto no encontrado.</p>
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

  // 4. ¡Ahora, y solo ahora, `project` está garantizado como tipo `Project` (no `null`)!
  // El resto de tu JSX puede usar `project.title`, `project.description`, etc., de forma segura.
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Detalles del Proyecto
        </h1>
        <div className="flex space-x-3">
          <Link href="/dashboard/projects" passHref>
            <button className="flex hover:cursor-pointer items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver a Proyectos
            </button>
          </Link>
          <Link href={`/dashboard/projects/${project.id}/edit`} passHref>
            <button className="flex hover:cursor-pointer items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
              <Edit className="mr-2 h-5 w-5" />
              Editar
            </button>
          </Link>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="flex hover:cursor-pointer items-center px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
          >
            <Trash2 className="mr-2 h-5 w-5" />
            Eliminar
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {project.title}
        </h2>
        <p className="text-gray-700 mb-4 text-lg">{project.description}</p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <strong>Creado por:</strong>{" "}
            {project.user?.name || project.user?.email || "Desconocido"}
          </p>
          <p>
            <strong>Fecha de Creación:</strong>{" "}
            {new Date(project.createdAt).toLocaleDateString()} a las{" "}
            {new Date(project.createdAt).toLocaleTimeString()}
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Imágenes del Proyecto ({project.images.length})
      </h3>
      {project.images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image) => (
            <div
              key={image.id}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-md border border-gray-200"
            >
              <Image
                src={image.url}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Este proyecto no tiene imágenes.</p>
      )}

      {/* Modal de Confirmación de Eliminación */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-gray-900/45 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Confirmar Eliminación
            </h3>
            <p className="text-gray-700 mb-6">
              ¿Estás seguro de que quieres eliminar el proyecto &quot;
              {project.title}
              &quot;? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 hover:cursor-pointer bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 hover:cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700"
                disabled={loading}
              >
                {loading ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
