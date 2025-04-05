"use client";

import Reveal from "@/components/ui/Reveal";
import { MoveDown } from "lucide-react";

function Hero() {
  const scrollToServices = () => {
    document
      .getElementById("servicios")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black-soft to-gray-dark text-white transition-opacity duration-1000">
      <div className="absolute inset-0 bg-black-soft opacity-70"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <Reveal direction="left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-red-primary">📢</span> Soluciones
            Empresariales para Impulsar tu Negocio
          </h1>
        </Reveal>
        <Reveal direction="right">
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 text-gray-light">
            <em>
              En Grupo ASES ofrecemos servicios especializados en contabilidad,
              asesoría jurídica y transformación digital. Nuestro equipo de
              expertos te ayudará a optimizar la gestión de tu empresa con
              soluciones personalizadas y eficaces.
            </em>
          </p>
        </Reveal>
        <button
          onClick={scrollToServices}
          className="bg-red-primary hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md text-lg font-bold transition-all-300 transform hover:scale-105 shadow-lg cursor-pointer"
        >
          Descubre nuestros servicios
        </button>
      </div>
      <div className="absolute bottom-3 md:bottom-10 w-full text-center animate-bounce">
        <button onClick={scrollToServices} className="text-[#ffffff]">
          <MoveDown className="w-10 h-10 md:w-20 md:h-20 lg:w-10 lg:h-10 mx-auto"></MoveDown>
        </button>
      </div>
    </section>
  );
}

export default Hero;
