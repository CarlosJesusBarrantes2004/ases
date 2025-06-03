import Reveal from "@/components/ui/Reveal";
import { services } from "../../servicios/index";
import { ArrowRight, BarChart3, Globe, Scale, Sparkles } from "lucide-react";
import Link from "next/link";

function Services() {
  const serviceIcon: Record<string, React.ReactNode> = {
    contabilidad: <BarChart3 size={48} />,
    "asesoria-juridica": <Scale size={48} />,
    digitales: <Globe size={48} />,
  };

  const serviceColors: Record<string, string> = {
    contabilidad: "from-blue-500 to-cyan-500",
    "asesoria-juridica": "from-indigo-500 to-purple-500",
    digitales: "from-emerald-500 to-teal-500",
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Encabezado renovado */}
        <Reveal className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">
              Nuestros Servicios
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
              Soluciones que impulsan
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              tu crecimiento
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Servicios integrales diseñados para potenciar tu empresa con la
            confianza y experiencia que necesitas.
          </p>
        </Reveal>

        {/* Grid de servicios renovado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Reveal key={index} direction="up" delay={index * 200}>
              <article className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Fondo decorativo */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                    serviceColors[service.slug]
                  } opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                {/* Icono con gradiente */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${
                      serviceColors[service.slug]
                    } text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {serviceIcon[service.slug]}
                  </div>
                </div>

                {/* Contenido */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.shortDescription}
                  </p>

                  {/* CTA mejorado */}
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="group/link inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300"
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:scale-110" />
                  </Link>
                </div>

                {/* Elemento decorativo inferior */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${
                    serviceColors[service.slug]
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA adicional */}
        <Reveal className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ofrecemos soluciones personalizadas para cada tipo de empresa.
              Cuéntanos tus necesidades y crearemos el plan perfecto para ti.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span>Consulta personalizada</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
