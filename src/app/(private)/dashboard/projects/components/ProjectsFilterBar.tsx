"use client";

import React from "react";
import { SortByOption, SortOrder } from "../types/project"; // Importa los tipos

interface ProjectsFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: SortByOption;
  setSortBy: (option: SortByOption) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

export default function ProjectsFilterBar({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: ProjectsFilterBarProps) {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-center">
      {/* Input de Búsqueda */}
      <div className="flex-1 w-full md:w-auto">
        <label htmlFor="search" className="sr-only">
          Buscar proyectos
        </label>
        <input
          id="search"
          type="text"
          placeholder="Buscar por título o descripción..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Selector de Ordenamiento */}
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <label htmlFor="sortBy" className="sr-only">
          Ordenar por
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortByOption)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="createdAt">Fecha de Creación</option>
          <option value="title">Título</option>
        </select>

        {/* Selector de Orden (Asc/Desc) */}
        <label htmlFor="sortOrder" className="sr-only">
          Orden
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="desc">Descendente</option>
          <option value="asc">Ascendente</option>
        </select>
      </div>
    </div>
  );
}
