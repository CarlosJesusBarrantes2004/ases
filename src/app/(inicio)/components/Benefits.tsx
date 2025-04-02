import { benefits } from "../index";

function Benefits() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black-soft">
            Por qué elegirnos
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
        </div>
        {/* Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="text-center p-6 transition-all-300 hover:translate-y-[-4px] border rounded-lg shadow-sm"
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
        </div>
      </div>
    </section>
  );
}

export default Benefits;
