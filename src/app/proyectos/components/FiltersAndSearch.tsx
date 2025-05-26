"use client";

import { ChevronDown, Filter, Search } from "lucide-react";
import { categories, cities, projectsData } from "..";
import { useState } from "react";

interface FiltersAndSearchProps {
  filteredProjects: {
    id: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    fecha: string;
    cliente: string;
    descripcion: string;
    imagen: string;
    tags: string[];
    rating: number;
    estado: string;
  }[];
  search: string;
  setSearch: (val: string) => void;
  categoriesSelected: string;
  setCategoriesSelected: (val: string) => void;
  citiesSelected: string;
  setCitiesSelected: (val: string) => void;
}

export default function FiltersAndSearch({
  filteredProjects,
  search,
  setSearch,
  categoriesSelected,
  setCategoriesSelected,
  citiesSelected,
  setCitiesSelected,
}: FiltersAndSearchProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section className="py-8 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Barra de búsqueda */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Botón de filtros móvil */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-3 bg-red-primary text-white rounded-lg hover:opacity-90 transition-all duration-300"
          >
            <Filter size={20} />
            Filtros
            <ChevronDown
              className={`transform transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
              size={16}
            />
          </button>

          {/* Filtros desktop */}
          <div className="hidden lg:flex gap-4">
            <select
              value={categoriesSelected}
              onChange={(e) => setCategoriesSelected(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
            >
              {categories.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>

            <select
              value={citiesSelected}
              onChange={(e) => setCitiesSelected(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
            >
              {cities.map((ubicacion) => (
                <option key={ubicacion} value={ubicacion}>
                  {ubicacion}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtros móvil */}
        {showFilters && (
          <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select
                value={categoriesSelected}
                onChange={(e) => setCategoriesSelected(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
              >
                {categories.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ubicación
              </label>
              <select
                value={citiesSelected}
                onChange={(e) => setCitiesSelected(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
              >
                {cities.map((ubicacion) => (
                  <option key={ubicacion} value={ubicacion}>
                    {ubicacion}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Resultados */}
        <div className="mt-6 flex justify-between items-center text-gray-600">
          <p>
            Mostrando {filteredProjects.length} de {projectsData.length}{" "}
            proyectos
          </p>
        </div>
      </div>
    </section>
  );
}
