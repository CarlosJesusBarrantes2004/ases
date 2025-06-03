import Reveal from "@/components/ui/Reveal";
import { benefits } from "../index";
import { Sparkles, ArrowRight } from "lucide-react";

function Benefits() {
  const benefitColors = [
    "from-rose-400 to-pink-500",
    "from-violet-400 to-purple-500",
    "from-cyan-400 to-blue-500",
  ];

  const benefitBackgrounds = [
    "from-rose-50 to-pink-50",
    "from-violet-50 to-purple-50",
    "from-cyan-50 to-blue-50",
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Encabezado renovado */}
        <Reveal className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">
              ¿Por qué elegirnos?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
              La diferencia que
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              nos distingue
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinamos experiencia, innovación y atención personalizada para
            garantizar el éxito de tu empresa.
          </p>
        </Reveal>

        {/* Grid de beneficios renovado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <Reveal key={index} direction="up" delay={index * 200}>
              <article className="group relative h-full">
                {/* Contenedor principal */}
                <div
                  className={`relative bg-gradient-to-br ${benefitBackgrounds[index]} border border-white/50 rounded-3xl p-8 lg:p-10 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden backdrop-blur-sm`}
                >
                  {/* Elementos decorativos */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                  <div
                    className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${benefitColors[index]} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  {/* Icono destacado */}
                  <div className="relative z-10 mb-8">
                    <div
                      className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${benefitColors[index]} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                    {/* Indicador visual */}
                    <div className="flex justify-center">
                      <div
                        className={`w-12 h-1 bg-gradient-to-r ${benefitColors[index]} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                      ></div>
                    </div>
                  </div>

                  {/* Brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-shimmer"></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Sección de estadísticas */}
        <Reveal className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Números que hablan por nosotros
                </h3>
                <p className="text-blue-100 text-lg">
                  La confianza de nuestros clientes respalda nuestro trabajo
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    6+
                  </div>
                  <div className="text-blue-100">Años de experiencia</div>
                </div>

                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    100+
                  </div>
                  <div className="text-blue-100">Empresas asesoradas</div>
                </div>

                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    98%
                  </div>
                  <div className="text-blue-100">Satisfacción del cliente</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA final */}
        <Reveal className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para hacer crecer tu empresa?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Únete a las empresas que ya confían en nosotros para su
              crecimiento sostenible.
            </p>
            <a
              href="/contacto"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span>Comienza hoy mismo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Benefits;
