import { Service } from "@/lib/data";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface ServiceBannerProps {
  service: Service;
}

function ServiceBanner({ service }: ServiceBannerProps) {
  return (
    <div className="pt-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <Link
              href="/servicios"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors duration-300"
            >
              <span>Servicios</span>
              <FaChevronRight className="h-4 w-4 mx-2"></FaChevronRight>
              <span>{service.title}</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
            {service.shortDescription}
          </p>
          <Link
            href="#contacto"
            className="inline-block bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Solicitar información
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceBanner;
