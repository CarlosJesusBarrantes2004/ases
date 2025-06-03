"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  alt: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Impulsamos tu negocio",
    subtitle: "con soluciones integrales",
    description:
      "Expertos en Contabilidad, Asesoría Jurídica y Servicios Digitales para que tu empresa crezca con confianza.",
    ctaText: "Contáctanos ahora",
    ctaLink: "/contacto",
    image: "/images/digital-service-bg.jpg",
    alt: "Equipo profesional de Grupo Ases",
  },
  {
    id: 2,
    title: "Asesoría Contable",
    subtitle: "profesional y confiable",
    description:
      "Gestiona tus finanzas con transparencia y precisión. Nuestros expertos contables optimizan tu gestión financiera.",
    ctaText: "Ver servicios",
    ctaLink: "/servicios/contabilidad",
    image: "/images/marketing-digital.jpg",
    alt: "Servicios de contabilidad profesional",
  },
  {
    id: 3,
    title: "Asesoría Jurídica",
    subtitle: "para proteger tu empresa",
    description:
      "Protege tu negocio con asesoría legal especializada. Te acompañamos en cada decisión empresarial importante.",
    ctaText: "Consultar ahora",
    ctaLink: "/servicios/asesoria-juridica",
    image: "/images/legal-service-bg.jpg",
    alt: "Asesoría jurídica empresarial",
  },
  {
    id: 4,
    title: "Soluciones Digitales",
    subtitle: "para el futuro de tu negocio",
    description:
      "Digitaliza tu empresa con tecnología de vanguardia. Desarrollo web, marketing digital y más.",
    ctaText: "Descubrir más",
    ctaLink: "/servicios/digitales",
    image: "/images/financial-audit.jpg",
    alt: "Servicios digitales y tecnología",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-play del carrusel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Marcar como cargado para animaciones
  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/90"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Contenido del slide */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <Reveal direction="left" className="space-y-4">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 text-slate-700 text-sm font-medium border border-emerald-200/50">
                    ✨ Soluciones empresariales de calidad
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
              </Reveal>

              <Reveal direction="right" delay={0.2}>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {slides[currentSlide].description}
                </p>
              </Reveal>

              <Reveal
                delay={0.4}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href={slides[currentSlide].ctaLink}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {slides[currentSlide].ctaText}
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <Link
                  href="/conocenos"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 text-lg font-semibold rounded-2xl border border-slate-200 hover:bg-white hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
                >
                  Conócenos más
                </Link>
              </Reveal>
            </div>

            {/* Carrusel de imágenes */}
            <div className="relative order-first lg:order-last">
              <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20">
                {/* Imágenes del carrusel */}
                <div className="relative w-full h-full">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSlide
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        {/* Placeholder para la imagen - reemplazar con Image component */}
                        <div className="text-center text-slate-400">
                          <div className="w-20 h-20 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center">
                            <svg
                              className="w-10 h-10"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">
                            Imagen {index + 1}
                          </p>
                          <p className="text-xs mt-1">{slide.alt}</p>
                        </div>
                        Descomenta y ajusta cuando tengas las imágenes:
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Controles del carrusel */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="p-3 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Control play/pause */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={togglePlayPause}
                    className="p-2 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                    aria-label={
                      isPlaying ? "Pausar carrusel" : "Reproducir carrusel"
                    }
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Indicadores de slides */}
              <div className="flex justify-center mt-6 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-12 h-3 bg-gradient-to-r from-emerald-500 to-blue-500"
                        : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}

export default Hero;
