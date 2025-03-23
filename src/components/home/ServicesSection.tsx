import { BarChart3, Globe, Scale } from "lucide-react";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
    {
      icon: <BarChart3 size={48}></BarChart3>,
      title: "Contabilidad",
      description:
        "Gestión contable y tributaria eficiente para que tu empresa cumpla con la normativa y optimice sus recursos.",
      slug: "contabilidad",
    },
    {
      icon: <Scale size={48}></Scale>,
      title: "Asesoría Jurídica",
      description:
        "Soluciones legales estratégicas para proteger y fortalecer tu negocio en cada paso.",
      slug: "asesoria-juridica",
    },
    {
      icon: <Globe size={48}></Globe>,
      title: "Servicios Digitales",
      description:
        "Desarrollo web, marketing digital y tecnología para posicionar tu empresa en el mundo digital.",
      slug: "digitales",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black-soft">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6 animate-expand"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              slug={service.slug}
            ></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
