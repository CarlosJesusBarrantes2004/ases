"use client"
// ProjectManagement.tsx

import React, { useState } from 'react';
import { Project, FormData, SortBy } from './types';
import { mockProjects } from './data/mockData';
import { filterAndSortProjects } from './utils/helpers';
import ProjectListView from './components/ProjectListView';
import ProjectFormView from './components/ProjectFormView';
import ProjectDetailView from './components/ProjectDetailView';

type ViewMode = 'list' | 'form' | 'detail';

function Page() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
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
    setViewingProject(null);
    setViewMode('list');
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      images: []
    });
    setViewMode('form');
  };

  const handleView = (project: Project) => {
    setViewingProject(project);
    setViewMode('detail');
  };

  const handleDelete = (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      setProjects(projects.filter(p => p.id !== id));
      // Si estamos viendo el proyecto que se elimina, volver a la lista
      if (viewingProject?.id === id) {
        setViewMode('list');
        setViewingProject(null);
      }
    }
  };

  const handleNewProject = () => {
    setEditingProject(null);
    setFormData({ title: '', description: '', images: [] });
    setViewMode('form');
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

  const handleBackToList = () => {
    setViewMode('list');
    setEditingProject(null);
    setViewingProject(null);
  };

  // Manejar edición desde la vista de detalle
  const handleEditFromDetail = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      images: []
    });
    setViewMode('form');
  };

  // Manejar eliminación desde la vista de detalle
  const handleDeleteFromDetail = (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      setProjects(projects.filter(p => p.id !== id));
      setViewMode('list');
      setViewingProject(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Renderizar vista según el modo actual */}
        {viewMode === 'list' && (
          <ProjectListView
            projects={filteredAndSortedProjects}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onNewProject={handleNewProject}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        )}

        {viewMode === 'form' && (
          <ProjectFormView
            editingProject={editingProject}
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onCancel={handleBackToList}
            onImageUpload={handleImageUpload}
            onRemoveImage={removeImage}
          />
        )}

        {viewMode === 'detail' && (
          <ProjectDetailView
            project={viewingProject}
            onBack={handleBackToList}
            onEdit={handleEditFromDetail}
            onDelete={handleDeleteFromDetail}
          />
        )}
      </div>
    </div>
  );
}

export default Page;