import Breadcrumb from "@/components/ui/Breadcrumb";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  items: { label: string; href: string }[];
  name: string;
  title: string;
  description: string;
  imagePath?: string;
}

function Hero({ items, name, title, description, imagePath }: HeroProps) {
  return (
    <div className="overflow-hidden">
      <header className="bg-white px-6 md:px-8 pt-28 pb-1 relative z-10">
        <Breadcrumb items={items} currentPage={name}></Breadcrumb>
      </header>

      <section className="bg-white py-16 md:py-20 relative">
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-5">
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-red-primary rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/3 w-48 h-48 bg-gray-dark rounded-full blur-3xl"></div>
        </div>
        {/* Contenido */}
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12">
            <div className="flex flex-col justify-start w-full md:w-3/5 lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black-soft mb-6">
                <span className="text-red-primary inline-flex items-center">
                  {title}
                  <Sparkles className="w-16 h-16 md:w-24 md:h-24 ml-2 text-red-primary md:inline"></Sparkles>
                </span>
              </h1>
              <div className="w-24 md:w-32 h-2 bg-red-primary mb-8"></div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-dark max-w-3xl">
                {description}
              </p>

              <div className="mt-10">
                <Link
                  href={`/servicios/${name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/contacto`}
                  className="inline-flex items-center gap-2 bg-black-soft text-white px-6 py-3 rounded-md font-medium hover:bg-red-primary transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Solicitar información</span>
                  <ArrowRight className="w-4 h-4"></ArrowRight>
                </Link>
              </div>
            </div>

            {imagePath && (
              <div className="w-full md:w-2/5 lg:w-1/2 mt-8 md:mt-0">
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

export default Hero;
