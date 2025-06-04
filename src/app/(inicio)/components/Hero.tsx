"use client";

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Datos temporales del carrusel - reemplaza con las imágenes reales
const carouselData = [
  {
    id: 1,
    image: "/images/digital-service-bg.jpg",
    title: "Impulsa tu negocio con confianza",
    subtitle: "Soluciones integrales en contabilidad y asesoría jurídica",
    cta: "Descubre nuestros servicios",
  },
  {
    id: 2,
    image: "/images/marketing-digital.jpg",
    title: "Transformación digital para tu empresa",
    subtitle: "Moderniza tus procesos con nuestros servicios digitales",
    cta: "Conoce más",
  },
  {
    id: 3,
    image: "/images/legal-service-bg.jpg",
    title: "Más de 6 años de experiencia",
    subtitle: "Ayudando a empresas a crecer de manera sostenible",
    cta: "Únete a nosotros",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play del carrusel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Overlay gradiente fresco */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-blue-50/80 to-cyan-100/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Contenido del slide actual */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido textual */}
            <div className="text-center lg:text-left space-y-8">
              <Reveal direction="up" className="space-y-6">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    ✨ Nuevo diseño fresco
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
                    {carouselData[currentSlide].title}
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {carouselData[currentSlide].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contacto"
                    className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <span className="relative z-10">
                      {carouselData[currentSlide].cta}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  <Link
                    href="/servicios"
                    className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Ver servicios
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Espacio para contenido adicional o gráficos */}
            <div className="hidden lg:block">
              <Reveal direction="right" className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">GA</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Grupo Ases
                    </h3>
                    <p className="text-gray-600">
                      Tu socio estratégico en crecimiento
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Controles del carrusel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
          {/* Botón anterior */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Indicadores */}
          <div className="flex space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110"
            aria-label="Siguiente slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      </div>

      {/* Elementos decorativos frescos */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-xl"></div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-600 animate-bounce">
          <span className="text-sm mb-1">Desliza hacia abajo</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
