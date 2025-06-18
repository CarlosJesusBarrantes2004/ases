// components/ProjectsGrid.tsx
import React from 'react';
import { Search } from 'lucide-react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
  onView: (project: Project) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  onEdit,
  onDelete,
  onView
}) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <Search className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">No se encontraron proyectos</h3>
        <p className="text-gray-600">Intenta con otros términos de búsqueda o crea un nuevo proyecto</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;