import { services } from "../index";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

function ListServices() {
  return (
    <section
      id="servicios"
      className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d32f2f12] px-4 py-2 rounded-full mb-4">
            <span className="text-red-primary font-semibold flex items-center">
              <Star size={16} className="mr-2"></Star> Lo que ofrecemos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-soft mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-dark max-w-2xl mx-auto">
            Soluciones integrales diseñadas para impulsar el crecimiento de tu
            empresa con un enfoque moderno y eficiente.
          </p>
        </div>
        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white border rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="bg-red-primary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md transform transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-black-soft">
                  {service.name}
                </h3>
                <p className="text-gray-dark text-center mb-6">
                  {service.shortDescription}
                </p>
                {service.subServices && (
                  <div className="space-y-4 mb-6">
                    {service.subServices.map((subservice, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center p-4 bg-[#f5f5f5] rounded-lg hover:bg-[#f0f0f0] transition-all duration-300"
                      >
                        <div className="bg-white p-2 rounded-full shadow-sm text-red-primary mr-3">
                          {subservice.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-black-soft">
                            {subservice.name}
                          </h4>
                          <p className="text-sm text-gray-dark">
                            {subservice.shortDescription}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="text-center">
                  <Link
                    href={`servicios/${service.slug}`}
                    className="group inline-flex items-center bg-white border-2 border-red-primary text-red-primary hover:bg-red-primary hover:text-white px-6 py-3 rounded-full transition-colors duration-300 font-medium"
                  >
                    Más Información
                    <ChevronRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListServices;
