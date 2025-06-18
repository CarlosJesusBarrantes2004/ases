
// components/ProjectViewModal.tsx
import React from 'react';
import { X } from 'lucide-react';
import { Project } from '../types';
import { formatDate } from '../utils/helpers';

interface ProjectViewModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectViewModal: React.FC<ProjectViewModalProps> = ({
  project,
  onClose
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Fecha de creación:</span>
                <p className="text-gray-600">{formatDate(project.createdAt)}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Usuario:</span>
                <p className="text-gray-600">{project.userId}</p>
              </div>
            </div>
          </div>

          {project.images.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Imágenes del Proyecto</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images.map((image) => (
                  <div key={image.id} className="rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={image.url}
                      alt={`Imagen del proyecto ${project.title}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectViewModal;