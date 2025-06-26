import Reveal from "@/components/ui/Reveal";
import { benefits } from "../index";

function Benefits() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <Reveal className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold mb-4 text-black-soft">
            Por qué elegirnos
          </h2>
          <div className="w-24 h-1 xl:w-32 bg-red-primary mx-auto mb-6"></div>
        </Reveal>
        {/* Beneficios */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="text-center p-6 transition-all-300 hover:translate-y-[-4px] border border-gray-light shadow-md rounded-lg"
            >
              <div className="text-red-primary mb-4 text-4xl mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black-soft">
                {benefit.title}
              </h3>
              <p className="text-gray-dark">{benefit.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Benefits;
