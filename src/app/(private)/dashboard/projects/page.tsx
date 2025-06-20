// app/(private)/dashboard/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Para optimizar imágenes
import { PlusCircle } from "lucide-react"; // Icono para añadir

interface ProjectImage {
  id: number;
  url: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  images: ProjectImage[];
  user?: {
    // El usuario que lo creó (opcional)
    id: string;
    name: string | null;
    email: string;
  };
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/projects");
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      const data: Project[] = await res.json();
      setProjects(data);
    } catch (err: any) {
      console.error("Error al cargar proyectos:", err);
      setError("No se pudieron cargar los proyectos. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Gestión de Proyectos
        </h1>
        <Link href="/dashboard/projects/create" passHref>
          <button className="flex items-center hover:cursor-pointer px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
            <PlusCircle className="mr-2 h-5 w-5" />
            Crear Nuevo Proyecto
          </button>
        </Link>
      </div>

      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-600">Cargando proyectos...</p>
          {/* Spinner o indicador de carga */}
        </div>
      )}

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <div className="text-center py-8 text-gray-600">
          <p>No hay proyectos registrados aún.</p>
        </div>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              {project.images.length > 0 ? (
                <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.images[0].url} // Muestra la primera imagen
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  Sin Imagen
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>
                    Creado por:{" "}
                    {project.user?.name || project.user?.email || "Desconocido"}
                  </span>
                  <span>
                    {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-4 text-right">
                  {/* Aquí puedes añadir botones para ver detalles, editar, eliminar */}
                  <Link href={`/dashboard/projects/${project.id}`} passHref>
                    <button className="text-indigo-600 hover:text-indigo-900 font-medium">
                      Ver Detalles
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
