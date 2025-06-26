import Reveal from "@/components/ui/Reveal";
import { values } from "@/data";

function CompanyValues() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold mb-4 text-black-soft">
              Nuestros <span className="text-red-primary">Valores</span>{" "}
              Fundamentales
            </h2>
          </Reveal>
          <div className="w-24 h-1 xl:w-32 bg-red-primary mx-auto mb-6"></div>
        </div>
        {/* Valores de la empresa */}
        <Reveal className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="relative border border-gray-light bg-white shadow-md rounded-lg overflow-hidden transition-all-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-light/20 text-3xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-primary">
                  {value.title}
                </h3>
                <p className="text-gray-dark">{value.description}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default CompanyValues;
