import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL;

  // Obtener los datos del proyecto desde la API
  const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);

  // --- Manejo de Errores Inicial: Verificar si la respuesta de la API fue exitosa ---

  // --- Si la respuesta fue exitosa (response.ok es true), entonces parseamos el JSON ---
  const project = await response.json();

  // --- Manejo de Error Adicional: Si la respuesta fue 200 OK pero el objeto project está vacío/nulo ---
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#CDCFD0]">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-[#E1251B] mb-4">
            Datos de proyecto no disponibles
          </h1>
          <p className="text-gray-700">
            La solicitud fue exitosa, pero no se recibieron datos válidos para
            el proyecto.
          </p>
        </div>
      </div>
    );
  }

  // Formatear números para mostrar
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen bg-[#CDCFD0] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {project.title}
            </h1>
            <p className="text-gray-600 mb-4">
              Creado por: {project.user.name}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-[#E1251B] text-white rounded-full text-sm font-medium">
                Inversión mínima:{" "}
                {formatCurrency(project.minimumInvestmentAmount)}
              </span>
              {project.tir && (
                <span className="px-3 py-1 bg-[#CDCFD0] text-gray-800 rounded-full text-sm font-medium">
                  TIR: {formatPercentage(project.tir)}
                </span>
              )}
              {project.van && (
                <span className="px-3 py-1 bg-[#CDCFD0] text-gray-800 rounded-full text-sm font-medium">
                  VAN: {formatCurrency(project.van)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sección izquierda - Imágenes y descripción */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galería de imágenes */}
            {project.images && project.images.length > 0 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b border-[#CDCFD0]">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Galería
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                  {project.images.map((image: { id: number; url: string }) => (
                    <div
                      key={image.id}
                      className="relative aspect-video rounded-md overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        alt={`Imagen del proyecto ${project.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Descripción del proyecto */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-[#CDCFD0]">
                <h2 className="text-xl font-semibold text-gray-800">
                  Descripción del Proyecto
                </h2>
              </div>
              <div className="p-4">
                <p className="text-gray-700 whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Resumen ejecutivo */}
            {project.executiveSummary && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b border-[#CDCFD0]">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Resumen Ejecutivo
                  </h2>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 whitespace-pre-line">
                    {project.executiveSummary}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sección derecha - Datos financieros */}
          <div className="space-y-8">
            {/* Datos de inversión */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-[#CDCFD0]">
                <h2 className="text-xl font-semibold text-gray-800">
                  Datos de Inversión
                </h2>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Inversión total requerida
                  </p>
                  <p className="text-lg font-semibold text-[#E1251B]">
                    {formatCurrency(project.totalInvestment)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ingresos proyectados</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatCurrency(project.projectedRevenue)}
                  </p>
                </div>
                {project.payback && (
                  <div>
                    <p className="text-sm text-gray-500">
                      Periodo de recuperación (payback)
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {project.payback} años
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Información del creador */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-[#CDCFD0]">
                <h2 className="text-xl font-semibold text-gray-800">
                  Creador del Proyecto
                </h2>
              </div>
              <div className="p-4 space-y-2">
                <p className="font-medium text-gray-800">{project.user.name}</p>
                <p className="text-sm text-gray-600">{project.user.email}</p>
              </div>
            </div>

            {/* Botón de inversión */}
            <button className="w-full py-3 px-4 bg-[#E1251B] hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Invertir en este proyecto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
