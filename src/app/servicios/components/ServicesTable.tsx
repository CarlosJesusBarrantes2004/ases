import { services } from "../index";
import { FileSpreadsheet, Globe, Scale } from "lucide-react";

function ServicesTable() {
  const serviceIcon: Record<string, React.ReactNode> = {
    contabilidad: (
      <FileSpreadsheet className="w-10 h-10 text-red-primary group-hover:text-white transition-all-300"></FileSpreadsheet>
    ),
    "asesoria-juridica": (
      <Scale className="w-10 h-10 text-red-primary group-hover:text-white transition-all-300"></Scale>
    ),
    digitales: (
      <Globe className="w-10 h-10 text-red-primary group-hover:text-white transition-all-300"></Globe>
    ),
  };

  return (
    <section className="py-16 md:py-20 bg-black-soft">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Comparación de Servicios
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
            Soluciones profesionales adaptadas a tus necesidades
          </p>
        </div>
        {/* Tabla */}
        <div className="rounded-lg overflow-hidden shadow-lg overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-red-primary text-white">
                <th className="p-4 text-left font-bold whitespace-nowrap">
                  <div className="flex items-center">
                    <span>Servicio</span>
                  </div>
                </th>
                <th className="p-4 text-left font-bold whitespace-nowrap">
                  Objetivo principal
                </th>
                <th className="p-4 text-left font-bold whitespace-nowrap">
                  ¿Para quién es?
                </th>
                <th className="p-4 text-left font-bold whitespace-nowrap">
                  Características destacadas
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-dark hover:bg-gray-dark/70 transition-all-300 ${
                    index % 2 === 0 ? "bg-black-soft" : "bg-gray-dark/30"
                  }`}
                >
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      {serviceIcon[service.slug]}
                      <span className="font-semibold text-white">
                        {service.title}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-light whitespace-nowrap">
                    {service.objective}
                  </td>
                  <td className="p-4 text-gray-light whitespace-nowrap">
                    {service.audience}
                  </td>
                  <td className="p-4 text-gray-light whitespace-nowrap">
                    {service.features}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ServicesTable;
