"use client"
// ProjectManagement.tsx
import React, { useState } from 'react';
import { Project, FormData, SortBy } from './types';
import { mockProjects } from './data/mockData';
import { filterAndSortProjects } from './utils/helpers';
import SearchControls from './components/SearchControls';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectFormModal from './components/ProjectFormModal';
import ProjectViewModal from './components/ProjectViewModal';

function Page() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('newest');
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    images: []
  });

  // Filtrar y ordenar proyectos
  const filteredAndSortedProjects = filterAndSortProjects(projects, searchTerm, sortBy);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject) {
      // Actualizar proyecto existente
      const updatedProject: Project = {
        ...editingProject,
        title: formData.title,
        description: formData.description,
        images: [
          ...editingProject.images,
          ...formData.images.map((url, index) => ({
            id: Date.now() + index,
            url,
            projectId: editingProject.id,
            createdAt: new Date().toISOString()
          }))
        ]
      };
      
      setProjects(projects.map(p => p.id === editingProject.id ? updatedProject : p));
    } else {
      // Crear nuevo proyecto
      const newProject: Project = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        createdAt: new Date().toISOString(),
        userId: "user1",
        images: formData.images.map((url, index) => ({
          id: Date.now() + index,
          url,
          projectId: Date.now(),
          createdAt: new Date().toISOString()
        }))
      };
      
      setProjects([newProject, ...projects]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', images: [] });
    setEditingProject(null);
    setIsModalOpen(false);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      images: []
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
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
          onNewProject={() => setIsModalOpen(true)}
        />

        {/* Projects Grid */}
        <ProjectsGrid
          projects={filteredAndSortedProjects}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={setViewingProject}
        />

        {/* Project Form Modal */}
        <ProjectFormModal
          isOpen={isModalOpen}
          editingProject={editingProject}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onClose={resetForm}
          onImageUpload={handleImageUpload}
          onRemoveImage={removeImage}
        />

        {/* Project View Modal */}
        <ProjectViewModal
          project={viewingProject}
          onClose={() => setViewingProject(null)}
        />
      </div>
    </div>
  );
}

export default Page;