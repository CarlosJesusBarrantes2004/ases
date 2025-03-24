"use client";

import { ArrowRight, ChevronRight, Laptop, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  imagePath?: string;
}

function HeroSection({
  name,
  title,
  description,
  imagePath,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">
      <header className="bg-white px-6 md:px-8 pt-6 pb-1 relative z-10">
        <div className="container mx-auto">
          <p className="text-gray-dark text-base md:text-lg flex items-center">
            <Link
              href={"/servicios"}
              className="flex items-center group hover:text-red-primary transition-all duration-300"
            >
              <span>Servicios</span>
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-all"></ChevronRight>
            </Link>
            <span className="text-gray-light mx-2">/</span>
            <span
              className={`font-medium ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              {name}
            </span>
          </p>
        </div>
      </header>

      <section className="bg-white py-16 md:py-20 lg:py-24 relative">
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-5">
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-red-primary rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/3 w-48 h-48 bg-gray-dark rounded-full blur-3xl"></div>
        </div>

        <Laptop className="absolute bottom-4 left-1.5 sm:bottom-1/4 sm:left-3/4 w-6 h-6 sm:w-8 sm:h-8 text-red-primary"></Laptop>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12">
            <div className="flex flex-col justify-start w-full md:w-3/5 lg:w-1/2">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black-soft mb-6 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                <span className="text-red-primary inline-flex items-center">
                  {title}
                  <Sparkles className="w-16 h-16 md:w-24 md:h-24 ml-2 text-red-primary md:inline"></Sparkles>
                </span>
              </h1>

              <div
                className={`w-24 md:w-32 h-2 rounded-sm bg-red-primary mb-8 ${
                  isVisible ? "animate-expand" : "scale-0 opacity-0"
                }`}
                style={{ animationDelay: "0.4s", transformOrigin: "left" }}
              ></div>

              <p
                className={`text-lg md:text-xl lg:text-2xl text-gray-dark max-w-3xl ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "0.5s" }}
              >
                {description}
              </p>

              <div
                className={`mt-10 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "0.7s" }}
              >
                <Link
                  href={`/servicios/${name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/contacto`}
                  className="inline-flex items-center gap-2 bg-red-primary text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Solicitar información</span>
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </Link>
              </div>
            </div>

            {imagePath && (
              <div
                className={`w-full md:w-2/5 lg:w-1/2 mt-8 md:mt-0 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: "0.6s" }}
              >
                <div className="relative w-full h-full aspect-square md:aspect-auto md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500">
                  <Image
                    src={imagePath}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  ></Image>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
