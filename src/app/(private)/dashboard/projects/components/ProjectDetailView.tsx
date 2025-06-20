// components/ProjectDetailView.tsx
import React from 'react';
import { ArrowLeft, Edit2, Trash2, Calendar, User, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';
import { formatDate } from '../utils/helpers';

interface ProjectDetailViewProps {
  project: Project | null;
  onBack: () => void;
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  onEdit,
  onDelete
}) => {
  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Proyecto no encontrado</h2>
        <button
          onClick={onBack}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver a proyectos
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a proyectos
        </button>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Creado el {formatDate(project.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Por {project.userId}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => onEdit(project)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <Edit2 className="w-5 h-5" />
              Editar
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
            >
              <Trash2 className="w-5 h-5" />
              Eliminar
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Descripción del Proyecto</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
          </div>

          {/* Images */}
          {project.images.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Galería de Imágenes ({project.images.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.images.map((image) => (
                  <div key={image.id} className="group relative">
                    <img
                      src={image.url}
                      alt={`Imagen del proyecto ${project.title}`}
                      className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del Proyecto</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">ID del Proyecto</span>
                <span className="font-medium text-gray-900">#{project.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Creado por</span>
                <span className="font-medium text-gray-900">{project.userId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Fecha de creación</span>
                <span className="font-medium text-gray-900">{formatDate(project.createdAt)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Imágenes</span>
                <span className="font-medium text-gray-900 flex items-center gap-1">
                  <ImageIcon className="w-4 h-4" />
                  {project.images.length}
                </span>
              </div>
            </div>
          </div>

          {/* Empty state for future features */}
          {project.images.length === 0 && (
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sin imágenes</h3>
              <p className="text-gray-600 mb-4">Este proyecto aún no tiene imágenes asociadas.</p>
              <button
                onClick={() => onEdit(project)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Agregar imágenes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;