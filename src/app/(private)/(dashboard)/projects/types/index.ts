// types/index.ts
export interface ProjectImage {
  id: number;
  url: string;
  projectId: number;
  createdAt: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  userId: string;
  images: ProjectImage[];
}

export type SortBy = 'newest' | 'oldest' | 'title';

export interface FormData {
  title: string;
  description: string;
  images: string[];
}