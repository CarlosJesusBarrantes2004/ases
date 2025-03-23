"use client";

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

  const faqData = [
    {
      category: "Preguntas Generales",
      questions: [
        {
          id: "q1",
          question: "¿Qué servicios ofrece Grupo Ases?",
          answer:
            "Grupo Ases brinda asesoría en contabilidad, asistencia legal y servicios digitales para potenciar el crecimiento de tu empresa.",
        },
        {
          id: "q2",
          question: "¿Cómo puedo solicitar un servicio?",
          answer:
            "Puedes contactarnos a través del formulario en nuestra página o llamarnos directamente para agendar una consulta.",
        },
      ],
    },
    {
      category: "Sobre los Servicios",
      questions: [
        {
          id: "q3",
          question: "¿Qué incluye la asesoría contable?",
          answer:
            "Ofrecemos declaración de impuestos, gestión de nóminas y asesoramiento financiero adaptado a tu negocio.",
        },
        {
          id: "q4",
          question: "¿Qué tipo de asesoría jurídica brindan?",
          answer:
            "Brindamos asesoría en constitución de empresas, contratos y resolución de conflictos legales.",
        },
        {
          id: "q5",
          question: "¿En qué consisten los servicios digitales?",
          answer:
            "Incluyen diseño web, marketing digital y desarrollo de software a medida.",
        },
      ],
    },
    {
      category: "Otras Preguntas",
      questions: [
        {
          id: "q6",
          question: "¿Grupo Ases trabaja con empresas de cualquier tamaño?",
          answer:
            "Sí, trabajamos con pequeñas, medianas y grandes empresas adaptando nuestros servicios a sus necesidades.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6 animate-expand"></div>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        {/* Contenedor de FAQs */}
        <div className="space-y-8">
          {faqData.map((category, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-xl p-6">
              {/* Título de categoría */}
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📌</span>
                <h3 className="text-black-soft text-2xl font-bold">
                  {category.category}
                </h3>
              </div>

              {/* Preguntas de esta categoría */}
              <div className="space-y-4">
                {category.questions.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg border shadow-md overflow-hidden transition-all-300"
                  >
                    {/* Pregunta (cabecera del acordeón) */}
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full flex gap-11 items-center justify-between p-4 text-left font-medium text-black-soft hover:bg-gray-50 hover:bg-opacity-10 transition-colors cursor-pointer"
                    >
                      <span className="text-lg">{item.question}</span>
                      <ChevronDown
                        className={`text-red-primary transform transition-transform duration-300 ${
                          openQuestions[item.id] ? "rotate-180" : ""
                        }`}
                        size={20}
                      ></ChevronDown>
                    </button>

                    {/* Respuesta (contenido del acordeón) */}
                    <div
                      className={`overflow-hidden transition-all-300 ${
                        openQuestions[item.id] ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="p-4 text-gray-dark">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
