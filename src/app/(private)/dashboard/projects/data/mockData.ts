// data/mockData.ts
import { Project } from '../types';

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Sistema de E-commerce",
    description: "Desarrollo de plataforma de comercio electrónico con React y Node.js",
    createdAt: "2024-01-15T10:30:00Z",
    userId: "user1",
    images: [
      { id: 1, url: "/api/placeholder/300/200", projectId: 1, createdAt: "2024-01-15T10:30:00Z" },
      { id: 2, url: "/api/placeholder/300/200", projectId: 1, createdAt: "2024-01-16T10:30:00Z" }
    ]
  },
  {
    id: 2,
    title: "App Móvil de Delivery",
    description: "Aplicación móvil para delivery de comida con geolocalización y pagos integrados",
    createdAt: "2024-02-20T14:00:00Z",
    userId: "user1",
    images: [
      { id: 3, url: "/api/placeholder/300/200", projectId: 2, createdAt: "2024-02-20T14:00:00Z" }
    ]
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Panel de control para análisis de datos con gráficos interactivos y reportes en tiempo real",
    createdAt: "2024-03-10T09:15:00Z",
    userId: "user1",
    images: []
  }
];