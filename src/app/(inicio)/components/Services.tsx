import { services } from "@/data";
import { ArrowRight, BarChart3, Globe, Scale } from "lucide-react";
import Link from "next/link";

function Services() {
  const serviceIcon: Record<string, React.ReactNode> = {
    contabilidad: <BarChart3 size={48}></BarChart3>,
    "asesoria-juridica": <Scale size={48}></Scale>,
    digitales: <Globe size={48}></Globe>,
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black-soft">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
        </div>
        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white border rounded-lg shadow-sm p-6 h-full flex flex-col transition-all-300 hover:translate-y-[-8px]"
            >
              <div className="text-red-primary mb-4 text-4xl">
                {serviceIcon[service.slug]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black-soft">
                {service.name}
              </h3>
              <p className="text-gray-dark flex-grow mb-1.5">
                {service.shortDescription}
              </p>
              <Link
                href={`/servicios/${service.slug}`}
                className="flex gap-1.5 items-center text-sm text-red-primary font-medium hover:opacity-80 transition-all-300 group"
              >
                <span>Conocer más</span>
                <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1"></ArrowRight>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
