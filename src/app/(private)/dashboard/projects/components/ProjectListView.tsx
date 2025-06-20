// components/ProjectListView.tsx
import React from 'react';
import { Project, SortBy } from '../types';
import SearchControls from './SearchControls';
import ProjectsGrid from './ProjectsGrid';

interface ProjectListViewProps {
  projects: Project[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: SortBy;
  setSortBy: (sort: SortBy) => void;
  onNewProject: () => void;
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
  onView: (project: Project) => void;
}

const ProjectListView: React.FC<ProjectListViewProps> = ({
  projects,
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  onNewProject,
  onEdit,
  onDelete,
  onView
}) => {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestión de Proyectos</h1>
        <p className="text-gray-600">Administra todos tus proyectos en un solo lugar</p>
      </div>

      {/* Search Controls */}
      <SearchControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onNewProject={onNewProject}
      />

      {/* Projects Grid */}
      <ProjectsGrid
        projects={projects}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </>
  );
};

export default ProjectListView;