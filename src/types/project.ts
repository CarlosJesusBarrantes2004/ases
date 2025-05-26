export interface Project {
  id: number;
  name: string;
  category: "software" | "web" | "mobile" | "design";
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
  status: "completado" | "en-progreso" | "pausado";
  client: string;
  year: number;
  tags: string[];
  rating: number;
  slug: string;
  technologies?: string[];
  duration?: string;
  teamSize?: number;
}
