"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function CallToAction() {
  const path = usePathname();

  if (path === "/contacto") return null;

  return (
    <section className="py-16 md:py-20 bg-gray-dark">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            ¿Listo para llevar tu empresa al siguiente nivel?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-light max-w-2xl mx-auto mb-8">
            Contacta con nosotros hoy mismo y recibe una asesoría gratuita.
          </p>
          <Link
            href={"/contacto"}
            className="inline-block bg-red-primary text-white px-8 py-4 rounded-md text-lg font-semibold shadow-lg hover:opacity-95 transition-all-300 animate-pulse"
          >
            Hablar con un asesor
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
