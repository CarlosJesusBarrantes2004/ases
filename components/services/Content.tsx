import { Service } from "@/lib/data";
import Link from "next/link";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import ServiceDetail from "./ServiceDetail";

interface ContentProps {
  service: Service;
}

function Content({ service }: ContentProps) {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Columna principal */}
          <ServiceDetail service={service}></ServiceDetail>

          {/* Columna lateral */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Necesita ayuda con {service.title.toLowerCase()}?
              </h3>
              <p className="text-gray-700 mb-6">
                Nuestros especialistas están listos para resolver sus dudas y
                ofrecerle una solución personalizada.
              </p>
              <div className="space-y-4">
                <Link
                  href="#contacto"
                  className="w-full block text-center bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Solicitar información
                </Link>
                <Link
                  href="tel:+51944668448"
                  className="w-full block text-center border border-blue-600 text-blue-600 font-medium px-6 py-3 rounded-md hover:bg-blue-50 transition-colors duration-300"
                >
                  Llamar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
