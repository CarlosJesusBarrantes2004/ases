import { Calendar, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";

interface CardProjectProps {
  project: {
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
  };
}

export default function CardProject({ project }: CardProjectProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imagen}
          alt={project.nombre}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wide ${
              project.estado === "Completado"
                ? "bg-white/95 text-[#E1251B] shadow-sm"
                : "bg-[#E1251B] text-white shadow-sm"
            }`}
          >
            {project.estado}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-[#E1251B] bg-[#E1251B]/10 px-3 py-1.5 rounded-md uppercase tracking-wide">
            {project.categoria}
          </span>
          <div className="flex items-center gap-0.5">
            {renderStars(project.rating)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E1251B] transition-colors duration-300 leading-tight">
          {project.nombre}
        </h3>

        <p className="text-[#CDCFD0] mb-4 line-clamp-2 text-sm leading-relaxed">{project.descripcion}</p>

        {/* Info del project */}
        <div className="space-y-2.5 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users size={14} className="mr-3 text-[#CDCFD0]" />
            <span className="font-medium">{project.cliente}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={14} className="mr-3 text-[#CDCFD0]" />
            <span className="font-medium">{project.ubicacion}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={14} className="mr-3 text-[#CDCFD0]" />
            <span className="font-medium">{project.fecha}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#CDCFD0]/20 text-gray-700 text-xs rounded-full font-medium hover:bg-[#CDCFD0]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botón */}
        <button className="w-full bg-[#E1251B] text-white py-3 px-4 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-[#E1251B]/90 hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}
