"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function CallToAction() {
  const path = usePathname();

  if (path === "/contacto") return null;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 text-slate-700 text-sm font-medium border border-emerald-200/50">
              💼 Impulsa tu negocio
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              ¿Listo para llevar tu empresa
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              al siguiente nivel?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Contacta con nosotros hoy mismo y recibe una asesoría gratuita
            personalizada para tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Hablar con un asesor
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
              href="/servicios"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 text-lg font-semibold rounded-2xl border border-slate-200 hover:bg-white hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
            >
              Ver nuestros servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
