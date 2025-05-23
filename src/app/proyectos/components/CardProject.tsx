import { Calendar, MapPin, Star, Users } from "lucide-react";

interface CardProjectProps {
  project: any;
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imagen}
          alt={project.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.estado === "Completado"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {project.estado}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-red-primary bg-red-50 px-2 py-1 rounded">
            {project.categoria}
          </span>
          <div className="flex items-center gap-1">
            {renderStars(project.rating)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-primary transition-colors">
          {project.nombre}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{project.descripcion}</p>

        {/* Info del project */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Users size={16} className="mr-2" />
            <span>{project.cliente}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin size={16} className="mr-2" />
            <span>{project.ubicacion}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-2" />
            <span>{project.fecha}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botón */}
        <button className="w-full bg-red-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 group-hover:bg-gray-dark">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}
