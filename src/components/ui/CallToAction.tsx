"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket, ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";

function CallToAction() {
  const path = usePathname();

  if (path === "/contacto") return null;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Fondos decorativos abstractos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-red-50/20 to-white"></div>
        <div className="absolute top-20 -left-20 w-64 h-64 bg-red-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Encabezado con icono */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full mb-8">
              <Rocket className="w-5 h-5 text-red-600 animate-pulse" />
              <span className="text-red-600 font-medium tracking-wide">
                TRANSFORMACIÓN EMPRESARIAL
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Soluciones a medida para</span>{" "}
              <span className="text-red-600">tu negocio</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Más de 500 empresas confían en nuestra experiencia. Descubre cómo
              podemos llevar tu empresa al siguiente nivel.
            </p>
          </div>

          {/* Contenedor principal */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Lado izquierdo - Texto */}
              <div className="p-12 bg-gradient-to-br from-white to-gray-50">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Asesoría gratuita sin compromiso
                    </h3>
                    <p className="text-gray-600">
                      Nuestros expertos analizarán tu caso y te propondrán la
                      mejor solución para tus necesidades específicas.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Expertos certificados
                        </h4>
                        <p className="text-gray-500 text-sm">
                          Profesionales con más de 10 años de experiencia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <Zap className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Resultados rápidos
                        </h4>
                        <p className="text-gray-500 text-sm">
                          Implementación ágil con impacto inmediato
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <Clock className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Soporte continuo
                        </h4>
                        <p className="text-gray-500 text-sm">
                          Acompañamiento durante todo el proceso
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado derecho - Formulario/CTA */}
              <div className="p-12 bg-gradient-to-br from-gray-900 to-gray-800 relative">
                <div className="absolute inset-0 opacity-5 pattern-dots pattern-gray-500 pattern-size-4"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¡Hablemos hoy mismo!
                    </h3>
                    <p className="text-gray-300">
                      Agenda una consulta sin costo con nuestro equipo
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="/contacto"
                      className="group flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>Solicitar asesoría gratuita</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/servicios"
                      className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 px-6 py-4 rounded-lg font-medium transition-all duration-300"
                    >
                      <span>Explorar servicios</span>
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-white/80">
                          Sin compromiso
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-white/80">
                          Respuesta en 24h
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-white/80">
                          Confidencial
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
