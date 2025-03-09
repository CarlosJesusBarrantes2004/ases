import { Service } from "@/lib/data";
import Link from "next/link";
import { FaCheck, FaChevronRight } from "react-icons/fa";

interface ServiceDetailProps {
  service: Service;
}

function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Descripción del servicio
      </h2>
      <p className="text-gray-700 text-lg mb-8">{service.fullDescription}</p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">Características</h3>
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
              <FaCheck className="w-4 h-4"></FaCheck>
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">Beneficios</h3>
      <ul className="space-y-3 mb-10">
        {service.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-3 mt-0.5">
              <FaCheck className="w-4 h-4"></FaCheck>
            </span>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          ¿Por qué elegir Grupo Ases?
        </h3>
        <p className="text-gray-700 mb-4">
          En Grupo Ases contamos con un equipo de profesionales altamente
          calificados y con amplia experiencia en
          {service.title.toLowerCase()}. Nuestro enfoque personalizado garantiza
          soluciones adaptadas a las necesidades específicas de su empresa.
        </p>
        <Link
          href="/sobre-nosotros"
          className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
        >
          Conozca más sobre nosotros
          <FaChevronRight className="h-4 w-4 ml-1"></FaChevronRight>
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetail;
