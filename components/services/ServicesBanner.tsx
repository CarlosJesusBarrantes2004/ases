import Link from "next/link";

function ServicesBanner() {
  return (
    <div className="pt-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
            Soluciones empresariales integrales y personalizadas para impulsar
            el crecimiento de su negocio
          </p>
          <Link
            href="#servicios"
            className="inline-block bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Explorar servicios
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesBanner;
