import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="py-16 md:py-20 lg:py-24 mt-11 md:mt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Contenido */}
          <div className="mx-auto md:mx-0 text-center lg:text-left lg:w-1/2 text-black-soft">
            <Reveal direction="left">
              <h1 className="text-5xl md:text-8xl lg:text-[4.2rem] font-bold mb-6 leading-tight xl:leading-16">
                Impulsamos tu negocio con soluciones integrales
              </h1>
            </Reveal>
            <Reveal direction="right">
              <p className="text-xl md:text-3xl md:font-semibold lg:font-normal mb-8">
                Expertos en Contabilidad, Asesoría Jurídica y Servicios
                Digitales para que tu empresa crezca con confianza.
              </p>
            </Reveal>
            <Reveal>
              <Link
                href={"/contacto"}
                className="inline-block bg-white text-black-soft px-8 md:px-10 lg:px-8 py-4 md:py-6 lg:py-4 border border-gray-light rounded-md md:rounded-xl lg:rounded-md text-lg md:text-2xl lg:text-lg font-semibold shadow-md hover:bg-red-primary hover:text-white hover:-translate-y-2 transition-all-300"
              >
                Contáctanos ahora
              </Link>
            </Reveal>
          </div>
          {/* Imagen */}
          <div className="mt-10 md:mt-0 lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl w-[330px] md:w-[725px] lg:w-full h-[200px] md:h-[375px]">
              <Image
                src={"/images/home.jpg"}
                alt="Fondo de inicio"
                fill
                className="w-full h-auto object-center transition-transform duration-500 hover:scale-105"
              ></Image>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
