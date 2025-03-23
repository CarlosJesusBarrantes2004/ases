import {
  Calculator,
  Scale,
  Smartphone,
  Megaphone,
  Monitor,
  Settings,
} from "lucide-react";
import Link from "next/link";

function ListServices() {
  return (
    <section id="servicios" className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black-soft">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio de Contabilidad Empresarial */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6">
              <div className="bg-red-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Calculator size={30}></Calculator>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-black-soft">
                Contabilidad Empresarial
              </h3>
              <p className="text-gray-dark text-center mb-6">
                Optimiza la gestión financiera de tu empresa con asesoría
                contable experta.
              </p>
              <div className="text-center">
                <Link
                  href={"/servicios/contabilidad"}
                  className="inline-block bg-white border-2 border-red-primary text-red-primary hover:bg-red-primary hover:text-white px-6 py-2 rounded transition-colors duration-300 font-medium"
                >
                  Más Información
                </Link>
              </div>
            </div>
          </div>

          {/* Servicio de Asesoría Jurídica */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6">
              <div className="bg-red-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Scale size={30}></Scale>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-black-soft">
                Asesoría Jurídica
              </h3>
              <p className="text-gray-dark text-center mb-6">
                Protege tu negocio con estrategias legales seguras y confiables.
              </p>
              <div className="text-center">
                <Link
                  href={"/servicios/asesoria-juridica"}
                  className="inline-block bg-white border-2 border-red-primary text-red-primary hover:bg-red-primary hover:text-white px-6 py-2 rounded transition-colors duration-300 font-medium"
                >
                  Más Información
                </Link>
              </div>
            </div>
          </div>

          {/* Servicios Digitales */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6">
              <div className="bg-red-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Smartphone size={30}></Smartphone>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-black-soft">
                Servicios Digitales
              </h3>
              <p className="text-gray-dark text-center mb-6">
                Transforma tu negocio con herramientas digitales innovadoras.
              </p>

              {/* Subcategorías de Servicios Digitales */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center p-3 bg-[#f5f5f5] rounded">
                  <Megaphone
                    className="text-red-primary mr-3"
                    size={24}
                  ></Megaphone>
                  <div>
                    <h4 className="font-semibold text-black-soft">
                      Marketing Digital
                    </h4>
                    <p className="text-sm text-gray-dark">
                      Estrategias para aumentar tu presencia online.
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-[#f5f5f5] rounded">
                  <Monitor
                    className="text-red-primary mr-3"
                    size={24}
                  ></Monitor>
                  <div>
                    <h4 className="font-semibold text-black-soft">
                      Diseño Web
                    </h4>
                    <p className="text-sm text-gray-dark">
                      Páginas atractivas y funcionales para tu negocio
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-[#f5f5f5] rounded">
                  <Settings
                    className="text-red-primary mr-3"
                    size={24}
                  ></Settings>
                  <div>
                    <h4 className="font-semibold text-black-soft">
                      Desarrollo de Sistemas
                    </h4>
                    <p className="text-sm text-gray-dark">
                      Soluciones a medida para optimizar tus procesos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={"/servicios/digitales"}
                  className="inline-block bg-white border-2 border-red-primary text-red-primary hover:bg-red-primary hover:text-white px-6 py-2 rounded transition-colors duration-300 font-medium"
                >
                  Mas Información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListServices;
