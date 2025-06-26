import CardProject from "./CardProject";

interface ProjectsPageProps {
  filteredProjects: {
    id: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    fecha: string;
    cliente: string;
    descripcion: string;
    imagen: string;
    tags: string[];
    rating: number;
    estado: string;
  }[];
}

export default function ProjectsPage({ filteredProjects }: ProjectsPageProps) {
  return (
    <div className="transform scale-90 origin-top">
    <section className="py-12">
      <div className="container mx-auto px-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No se encontraron proyectos
            </h3>
            <p className="text-gray-500">
              Intenta ajustar tus filtros de búsqueda
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProjects.map(
              (project: {
                id: number;
                nombre: string;
                categoria: string;
                ubicacion: string;
                fecha: string;
                cliente: string;
                descripcion: string;
                imagen: string;
                tags: string[];
                rating: number;
                estado: string;
              }) => (
                <CardProject key={project.id} project={project}></CardProject>
              )
            )}
          </div>
        )}
      </div>
    </section>
    </div>
  );
}
