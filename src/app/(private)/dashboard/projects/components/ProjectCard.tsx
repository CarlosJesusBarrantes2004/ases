"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "../types/project"; // Importa el tipo Project

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
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
          <span>{new Date(project.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="mt-4 text-right">
          <Link href={`/dashboard/projects/${project.id}`} passHref>
            <button className="text-indigo-600 hover:text-indigo-900 font-medium hover:cursor-pointer">
              Ver Detalles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
