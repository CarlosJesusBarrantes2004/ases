"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Impulsa tu negocio con soluciones integrales",
    subtitle:
      "Expertos en Contabilidad, Asesoría Jurídica y Servicios Digitales",
    description:
      "Transformamos tu empresa con estrategias innovadoras y tecnología de vanguardia",
    image: "/images/carrusel_1.jpg", // Oficina moderna
    icon: TrendingUp,
    gradient: "from-[#CDCFD0]/10 via-[#CDCFD0]/80 to-[#CDCFD0]/5",
  },
  {
    id: 2,
    title: "Tu éxito es nuestro compromiso",
    subtitle: "Asesoría personalizada para cada etapa de tu crecimiento",
    description:
      "Acompañamos tu empresa desde la idea inicial hasta la expansión internacional",
    image: "/images/carrusel_2.jpg", // Equipo trabajando
    icon: Users,
    gradient: "from-[#E1251B]/90 via-[#E1251B]/80 to-[#E1251B]/70",
  },
  {
    id: 3,
    title: "Protección y crecimiento garantizado",
    subtitle: "Seguridad jurídica y financiera para tu tranquilidad",
    description:
      "Blindamos tu empresa con las mejores prácticas legales y contables del mercado",
    image: "/images/carrusel_3.jpg", // Profesional seguro
    icon: Shield,
    gradient: "from-[#CDCFD0]/90 via-[#E1251B]/80 to-[#CDCFD0]/70",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carrusel de imágenes */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Overlay con gradiente  
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
              ></div> */}

              {/* Contenido */}
              <div className="relative z-10 h-full flex items-end">
                <div className="container mx-auto px-4 md:py-10">
                  <div className="max-w-4xl">
                    {/* Icono animado 
                    <div className="md:mt-20 mb-2 transform animate-bounce">
                      <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white/90" />
                    </div> */}

                    {/* Título principal 
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
                      <span className="bg-gradient-to-r from-white to-[#CDCFD0] bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1> */}

                    {/* Subtítulo 
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-2 font-medium">
                      {slide.subtitle}
                    </h2> */}

                    {/* Descripción 
                    <p className="text-lg md:text-xl text-white/80 mb-4 max-w-2xl">
                      {slide.description}
                    </p> */}

                    {/* Botones de acción */}
                    <div className="flex flex-row md:flex-col lg:flex-row gap-4">
                      <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center bg-[#E1251B] text-white px-4 py-1.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-xl hover:bg-[#CDCFD0] hover:text-[#E1251B] hover:scale-105 transform transition-all duration-300"
                      >
                        Empezar ahora
                      </Link>
                      <Link
                        href="/servicios"
                        className="inline-flex items-center justify-center border-2 border-white text-white px-4 py-1.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold backdrop-blur-sm hover:bg-white hover:text-[#E1251B] hover:scale-105 transform transition-all duration-300"
                      >
                        Conocer servicios
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controles del carrusel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Indicadores */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#E1251B] scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Botón play/pause */}
          <button
            onClick={togglePlayPause}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-[#E1251B]/80 hover:cursor-pointer transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#E1251B]/80 transition-all duration-300 hover:cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#E1251B]/80 transition-all duration-300 hover:cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Estadísticas flotantes */}
      <div className="absolute bottom-20 right-8 z-20 hidden lg:block">
        <div className="bg-[#E1251B]/90 backdrop-blur-md rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-white/90">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-white/90">Años</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-white/90">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
