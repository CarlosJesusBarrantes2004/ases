import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden mt-11">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/sobre-nosotros.jpg"}
          alt="Fondo de nosotros"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-70"
        ></Image>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-soft via-black-soft/80 to-transparent z-10"></div>
      </div>
      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <Reveal direction="left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-16">
              Descubre Quiénes Somos y Cómo Podemos{" "}
              <span className="text-red-primary">Impulsar Tu Negocio</span>
            </h1>
          </Reveal>
          <Reveal direction="right">
            <p className="text-xl md:text-2xl text-gray-light mb-8">
              Un equipo de expertos a tu servicio. Te acompañamos en cada paso
              para optimizar tu negocio.
            </p>
          </Reveal>
          <Reveal className="flex flex-col sm:flex-row gap-4">
            <Link
              href={"#history"}
              className="inline-block text-center bg-transparent border-2 border-red-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-red-primary transition-all-300"
            >
              Descubre nuestra historia
            </Link>

            <Link
              href={"/contacto"}
              className="inline-block text-center bg-red-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-red-primary/90 hover:scale-105 transition-all-300"
            >
              Hablemos sobre tu empresa
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
