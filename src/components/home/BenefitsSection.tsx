import { Award, Search, Zap } from "lucide-react";
import BenefitCard from "./BenefitCard";

function BenefitsSection() {
  const benefits = [
    {
      icon: <Award size={48}></Award>,
      title: "Experiencia Comprobada",
      description:
        "Más de 6 años ayudando a empresas a crecer con soluciones eficientes.",
    },
    {
      icon: <Search size={48}></Search>,
      title: "Atención Personalizada",
      description:
        "Brindamos asesoría adaptada a las necesidades de cada cliente",
    },
    {
      icon: <Zap size={48}></Zap>,
      title: "Resultados Garantizados",
      description:
        "Optimizamos procesos y mejoramos la rentabilidad de tu negocio.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black-soft">
            Por qué elegirnos
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6 animate-expand"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            ></BenefitCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
