"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Soluciones empresariales que impulsan resultados",
      description:
        "En Grupo Ases, transformamos desafíos en oportunidades para el crecimiento de su empresa",
      cta: "Conoce nuestros servicios",
      link: "/servicios",
      bgColor: "from-blue-900 to-blue-700",
    },
    {
      title: "Experiencia y profesionalismo a su servicio",
      description:
        "Nuestro equipo de expertos está listo para ayudarle a alcanzar sus objetivos de negocio",
      cta: "Contáctanos hoy",
      link: "/contacto",
      bgColor: "from-indigo-900 to-indigo-700",
    },
    {
      title: "Estrategias personalizadas para cada cliente",
      description:
        "Desarrollamos soluciones adaptadas a las necesidades específicas de su empresa",
      cta: "Descubre cómo",
      link: "/sobre-nosotros",
      bgColor: "from-blue-800 to-blue-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`w-full h-full bg-gradient-to-r ${slide.bgColor}`}
          ></div>

          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white mb-10"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href={slide.link}
                  className="inline-block bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
                >
                  {slide.cta}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer ${
              currentSlide === index ? "bg-white w-8" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HomeBanner;
