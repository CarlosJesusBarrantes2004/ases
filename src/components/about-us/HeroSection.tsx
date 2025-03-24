"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/aboutus-bg.jpg"}
          alt="Fondo moderno de empresa"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-70"
        ></Image>
        {/* Overlay gradiente para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-soft via-black-soft/80 to-transparent z-10"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Descubre Quiénes Somos y Cómo Podemos{" "}
            <span className="text-red-primary">Impulsar Tu Negocio</span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-light mb-8 ${
              isLoaded ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            Un equipo de expertos a tu servicio. Te acompañamos en cada paso
            para optimizar tu negocio.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.7s" }}
          >
            <Link
              href={"#history"}
              className="inline-block bg-transparent border-2 border-red-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-red-primary transition-all-300"
            >
              Descubre nuestra historia
            </Link>

            <Link
              href={"/contacto"}
              className="inline-block bg-red-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-red-primary/90 hover:scale-105 transition-all-300"
            >
              Hablemos sobre tu empresa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
