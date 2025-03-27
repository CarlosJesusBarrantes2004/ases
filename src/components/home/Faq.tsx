"use client";

import { faqData } from "@/data";
import { ChevronDown } from "lucide-react";
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

  return (
    <section className="py-16 md:py-20 bg-gray-dark">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
          <p className="text-white text-base md:text-lg mx-auto max-w-2xl">
            Respuestas a las dudas más comunes sobre nuestros servicios
          </p>
        </div>
        {/* Preguntas */}
        <div className="space-y-8">
          {faqData.map((category, index) => (
            <article
              key={index}
              className="bg-white bg-opacity-20 rounded-xl p-6"
            >
              {/* Título de la categoría */}
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📌</span>
                <h3 className="text-black-soft text-2xl font-bold">
                  {category.category}
                </h3>
              </div>
              {/* Preguntas por categoría */}
              <div className="space-y-4">
                {category.questions.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg border shadow-md overflow-hidden transition-all-300"
                  >
                    {/* Pregunta */}
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full flex items-center justify-between p-3 md:p-4 text-left font-medium text-black-soft hover:bg-gray-50 hover:bg-opacity-10 transition-colors cursor-pointer"
                    >
                      <span className="flex-grow text-sm sm:text-base md:text-lg pr-2">
                        {item.question}
                      </span>
                      <div className="flex-shrink-0 flex items-center justify-center w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                        <ChevronDown
                          className={`w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-red-primary transform transition-transform duration-300 ${
                            openQuestions[item.id] ? "rotate-180" : ""
                          }`}
                        ></ChevronDown>
                      </div>
                    </button>
                    {/* Respuesta */}
                    <div
                      className={`overflow-hidden transition-all-300 ${
                        openQuestions[item.id] ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="p-4 text-gray-dark text-sm md:text-lg">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
