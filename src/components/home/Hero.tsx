import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-black-soft py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Contenido */}
          <div className="mx-auto md:mx-0 text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Impulsamos tu negocio con soluciones integrales
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Expertos en Contabilidad, Asesoría Jurídica y Servicios Digitales
              para que tu empresa crezca con confianza.
            </p>
            <Link
              href={"/contacto"}
              className="inline-block bg-white text-black-soft px-8 py-4 rounded-md text-lg font-semibold shadow-sm hover:bg-red-primary hover:text-white hover:-translate-y-2 transition-all-300"
            >
              Contáctanos ahora
            </Link>
          </div>
          {/* Imagen */}
          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={"/images/home-bg.jpg"}
                alt="Fondo de inicio"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
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
