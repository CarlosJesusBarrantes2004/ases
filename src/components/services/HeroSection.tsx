"use client";

import { useEffect, useState } from "react";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document
      .getElementById("servicios")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`relative h-screen flex items-center justify-center bg-gradient-to-r from-black-soft to-gray-dark text-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-black-soft opacity-70"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="text-red-primary">📢</span> Soluciones Empresariales
          para Impulsar tu Negocio
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 text-gray-light">
          <em>
            En Grupo ASES ofrecemos servicios especializados en contabilidad,
            asesoría jurídica y transformación digital. Nuestro equipo de
            expertos te ayudará a optimizar la gestión de tu empresa con
            soluciones personalizadas y eficaces.
          </em>
        </p>
        <button
          onClick={scrollToServices}
          className="bg-red-primary hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md text-lg font-bold transition-all-300 transform hover:scale-105 shadow-lg cursor-pointer"
        >
          Descubre nuestros servicios
        </button>
      </div>
      <div className="absolute bottom-10 w-full text-center animate-bounce">
        <button onClick={scrollToServices} className="text-[#ffffff]">
          <svg
            className="w-10 h-10 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
