"use client";

import Reveal from "@/components/ui/Reveal";
import { faqData } from "@/data";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";

function Faq() {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>(
    {}
  );

  const toggleQuestion = (id: string) => {
    setOpenQuestions({
      ...openQuestions,
      [id]: !openQuestions[id],
    });
  };

  const categoryColors: Record<string, string> = {
    0: "from-blue-500 to-cyan-500",
    1: "from-indigo-500 to-purple-500",
    2: "from-emerald-500 to-teal-500",
    3: "from-rose-500 to-pink-500",
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Encabezado renovado */}
        <Reveal className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-rose-100 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-800 font-medium">Centro de Ayuda</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              Preguntas
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encuentra respuestas rápidas a las dudas más comunes sobre nuestros
            servicios y procesos.
          </p>
        </Reveal>

        {/* Grid de categorías FAQ */}
        <div className="space-y-8 lg:space-y-12">
          {faqData.map((category, categoryIndex) => (
            <Reveal key={categoryIndex} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative">
                {/* Fondo decorativo */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${
                    categoryColors[categoryIndex] || categoryColors[0]
                  } opacity-5 rounded-full blur-3xl`}
                ></div>

                {/* Título de categoría */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div
                      className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${
                        categoryColors[categoryIndex] || categoryColors[0]
                      } text-white shadow-lg`}
                    >
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  <div
                    className={`w-20 h-1 bg-gradient-to-r ${
                      categoryColors[categoryIndex] || categoryColors[0]
                    } rounded-full`}
                  ></div>
                </div>

                {/* Preguntas de la categoría */}
                <div className="relative z-10 space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.id}
                      className="group bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                      {/* Pregunta */}
                      <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-all duration-300"
                      >
                        <span className="flex-grow text-lg font-semibold text-gray-900 pr-4 group-hover:text-gray-700">
                          {item.question}
                        </span>
                        <div className="flex-shrink-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300 hover:cursor-pointer">
                            <ChevronDown
                              className={`w-5 h-5 text-gray-600 group-hover:text-red-600 transform transition-all duration-300 ${
                                openQuestions[item.id] ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </button>

                      {/* Respuesta */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          openQuestions[item.id]
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Barra indicadora activa */}
                      <div
                        className={`h-1 bg-gradient-to-r ${
                          categoryColors[categoryIndex] || categoryColors[0]
                        } transform transition-all duration-500 origin-left ${
                          openQuestions[item.id] ? "scale-x-100" : "scale-x-0"
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA adicional */}
        <Reveal className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-3xl p-8 md:p-12 border border-red-100/50 relative overflow-hidden">
            {/* Elemento decorativo de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500 to-rose-500 opacity-10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ¿Tienes alguna otra pregunta?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Nuestro equipo está aquí para ayudarte. No dudes en contactarnos
                si necesitas información adicional o tienes consultas
                específicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Contáctanos</span>
                  <HelpCircle className="w-5 h-5" />
                </a>
                <span className="text-gray-500 text-sm">
                  Respuesta garantizada en 24 horas
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Faq;
