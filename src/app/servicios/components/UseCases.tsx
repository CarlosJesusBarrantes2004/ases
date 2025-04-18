import Reveal from "@/components/ui/Reveal";
import { services } from "../index";
import { ArrowRight } from "lucide-react";

function UseCases() {
  return (
    <section className="py-16 md:py-20 bg-gray-dark bg-opacity-95 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-primary opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-primary opacity-10 rounded-full -ml-40 -mb-40"></div>

      <div className="relative container mx-auto px-4 z-10">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Casos de Uso
          </Reveal>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
          <Reveal className="text-gray-light text-base md:text-lg mx-auto max-w-2xl">
            Soluciones personalizadas para las necesidades reales de tu negocio
          </Reveal>
        </div>
        {/* Contenido */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="hover:translate-y-[-8px] transition-all-300"
            >
              <div className="bg-black-soft border border-black-soft/10 rounded-lg shadow-2xl overflow-hidden h-full flex flex-col">
                <div
                  className={`${
                    index % 2 !== 0 ? "bg-gray-dark" : "bg-black-soft"
                  } px-6 py-5 flex items-center`}
                >
                  <div className="bg-white text-black-soft bg-opacity-20 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm opacity-90">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                {/* Use Cases */}
                <div className="p-6 flex-grow">
                  {service.cases &&
                    service.cases.map((useCase, index) => (
                      <div
                        key={index}
                        className="mb-6 last:mb-0 bg-gray-dark bg-opacity-40 p-4 rounded-lg hover:bg-opacity-60 transition-all-300"
                      >
                        <div className="flex items-start mb-2">
                          <div className="text-red-primary mr-2 mt-1">
                            {useCase.icon}
                          </div>
                          <p className="text-white font-medium">
                            &quot;{useCase.text}&quot;
                          </p>
                        </div>
                        <div className="flex pl-6 ml-1 border-l-2 border-red-primary">
                          <ArrowRight
                            size={16}
                            className="text-red-primary mr-2 mt-1 flex-shrink-0"
                          ></ArrowRight>
                          <p className="text-gray-light text-sm">
                            {useCase.solution}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default UseCases;
