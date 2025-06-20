export interface ProjectImage {
  id: number;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  images: ProjectImage[];
  user?: {
    id: string;
    name: string | null;
    email: string;
  };
}

export type SortByOption = "createdAt" | "title";
export type SortOrder = "asc" | "desc";
