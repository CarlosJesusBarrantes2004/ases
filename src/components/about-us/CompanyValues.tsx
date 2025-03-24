"use client";

import { useEffect, useState } from "react";

function CompanyValues() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("valores");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const values = [
    {
      icon: "💡",
      title: "Compromiso con la Excelencia",
      description:
        "Nos esforzamos por ofrecer soluciones de alta calidad, con un enfoque en la innovación y la mejora continua.",
    },
    {
      icon: "🤝",
      title: "Confianza y Transparencia",
      description:
        "Creemos en la honestidad y la comunicación abierta. Generamos relaciones de confianza con nuestros clientes, brindando asesoría clara y ética.",
    },
    {
      icon: "📈",
      title: "Orientación a Resultados",
      description:
        "Trabajamos con estrategias efectivas que garantizan el crecimiento y la estabilidad de los negocios que asesoramos.",
    },
    {
      icon: "💼",
      title: "Profesionalismo y Responsabilidad",
      description:
        "Cada cliente es único y merece un servicio a la altura de sus necesidades. Actuamos con responsabilidad y compromiso en cada tarea que realizamos.",
    },
    {
      icon: "🚀",
      title: "Adaptabilidad e Innovación",
      description:
        "El mundo cambia constantemente y nosotros evolucionamos con él. Nos mantenemos a la vanguardia para ofrecer soluciones modernas y eficientes.",
    },
  ];

  return (
    <section id="valores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 text-black-soft ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            Nuestros <span className="text-red-primary">Valores</span>{" "}
            Fundamentales
          </h2>
          <div
            className={`w-24 h-1 bg-red-primary mx-auto mb-6 ${
              isVisible ? "animate-expand" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className={`relative border bg-white shadow-lg rounded-lg overflow-hidden transition-all-300 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `0.7s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyValues;
