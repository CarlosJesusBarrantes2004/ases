// app/(private)/dashboard/projects/page.tsx
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

// Importa los componentes y tipos
import ProjectCard from "./components/ProjectCard";
import ProjectsFilterBar from "./components/ProjectsFilterBar";
import { Project, SortByOption, SortOrder } from "./types/project";

const PROJECTS_PER_LOAD = 6; // Cuántos proyectos cargar con el botón "Cargar más"

export default function ProjectsPage() {
  // Estados para filtros y ordenamiento
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortByOption>("createdAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  // Estado para la cantidad de proyectos visibles (para "Cargar más")
  const [visibleProjectsCount, setVisibleProjectsCount] =
    useState(PROJECTS_PER_LOAD);

  // Estados para datos y UI
  const [allProjects, setAllProjects] = useState<Project[]>([]); // Todos los proyectos sin filtrar/ordenar
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener todos los proyectos (se llama solo una vez al inicio)
  const fetchAllProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/projects"); // Llama a la API sin filtros
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      const data: Project[] = await res.json();
      setAllProjects(data); // Guarda todos los proyectos
    } catch (err: unknown) {
      // Ya estaba bien tipado aquí, solo para referencia
      console.error("Error al cargar todos los proyectos:", err);
      setError("No se pudieron cargar los proyectos. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllProjects();
  }, [fetchAllProjects]);

  // Lógica de filtrado y ordenamiento del lado del cliente
  const filteredAndSortedProjects = useMemo(() => {
    let result = [...allProjects]; // Trabaja con una copia

    // 1. Filtrado por búsqueda
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(lowerCaseQuery) ||
          project.description.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // 2. Ordenamiento
    result.sort((a, b): number => {
      // CAMBIO: Añadir el tipo de retorno 'number'
      let valA: number | string; // CAMBIO: Usar unión de tipos
      let valB: number | string; // CAMBIO: Usar unión de tipos

      if (sortBy === "createdAt") {
        valA = new Date(a.createdAt).getTime();
        valB = new Date(b.createdAt).getTime();
      } else if (sortBy === "title") {
        valA = a.title.toLowerCase();
        valB = b.title.toLowerCase();
      } else {
        // Manejar caso por defecto o un tipo de ordenamiento no esperado
        // Aunque tus `SortByOption` son explícitos, siempre es bueno tener un fallback
        return 0;
      }

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }, [allProjects, searchQuery, sortBy, sortOrder]);

  // Proyectos a mostrar en la interfaz (considerando "Cargar más")
  const projectsToDisplay = useMemo(() => {
    return filteredAndSortedProjects.slice(0, visibleProjectsCount);
  }, [filteredAndSortedProjects, visibleProjectsCount]);

  const hasMoreProjects =
    filteredAndSortedProjects.length > visibleProjectsCount;

  const handleLoadMore = () => {
    setVisibleProjectsCount((prevCount) => prevCount + PROJECTS_PER_LOAD);
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

      {/* Barra de Filtro y Ordenamiento */}
      <ProjectsFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

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

      {!loading && !error && projectsToDisplay.length === 0 && (
        <div className="text-center py-8 text-gray-600">
          <p>No hay proyectos registrados que coincidan con los criterios.</p>
        </div>
      )}

      {!loading && !error && projectsToDisplay.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToDisplay.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {!loading && !error && hasMoreProjects && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 hover:cursor-pointer bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out"
          >
            Cargar más proyectos (
            {filteredAndSortedProjects.length - visibleProjectsCount} restantes)
          </button>
        </div>
      )}
    </div>
  );
}
