export interface Service {
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imagePath?: string;
  objective: string;
  tagline: string;
  audience: string;
  features: string;
  subServices?: SubService[];
  cases?: Case[];
  slug: string;
}

export interface SubService {
  name: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  slug: string;
}

interface Case {
  text: string;
  solution: string;
  slug: string;
}
