import Reveal from "@/components/ui/Reveal";
import { timelineItems } from "@/data";
import Image from "next/image";

function DetailedHistory() {
  return (
    <section
      id="history"
      className="py-16 md:py-20 bg-gray-dark relative overflow-hidden"
    >
      {/* Imagen de fondo en blanco y negro */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/office-history.jpg"
          alt="Historia de nuestra empresa"
          layout="fill"
          objectFit="cover"
          className="grayscale"
          priority
        ></Image>
        <div className="absolute inset-0 bg-black-soft/70"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold mb-4 text-white">
              Nuestra Historia{" "}
              <span className="text-red-primary">creciendo contigo</span>
            </h2>
          </Reveal>
          <div className="w-24 h-1 xl:w-32 bg-red-primary mx-auto mb-6"></div>
          <Reveal className="mx-auto text-base md:text-lg text-gray-light max-w-2xl">
            Desde nuestros inicios, en Grupo ASES hemos trabajado con un
            propósito claro: brindar soluciones empresariales integrales que
            impulsen el crecimiento y la estabilidad de negocios de todos los
            tamaños.
          </Reveal>
        </div>
        {/* Cronología */}
        <div className="relative">
          {/* Línea central para pantallas medianas y grandes */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-primary"></div>
          {/* Línea izquierda para móviles */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-red-primary"></div>
          {timelineItems.map((item, index) => (
            <div key={index} className="relative mb-16">
              {/* Versión móvil (apilado) */}
              <div className="md:hidden flex flex-col relative pl-16">
                {/* Punto en la línea vertical */}
                <div className="absolute left-8 transform -translate-x-1/2 w-8 h-8 rounded-full bg-red-primary flex items-center justify-center z-20 shadow-lg">
                  <span className="text-lg">{item.icon}</span>
                </div>
                {/* Año */}
                <div className="mb-3">
                  <span className="inline-block py-1 px-4 bg-red-primary text-white font-bold rounded-full shadow-md">
                    {item.year}
                  </span>
                </div>
                {/* Contenido */}
                <div className="bg-black-soft/60 p-6 rounded-lg shadow-xl border-l-4 border-red-primary transition-all-300 hover:translate-x-1">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-light">{item.content}</p>
                </div>
              </div>
              {/* Versión desktop (alternando lados) */}
              <div
                className={`hidden md:flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Punto en la línea central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-red-primary flex items-center justify-center z-20 shadow-lg">
                  <span className="text-xl">{item.icon}</span>
                </div>
                {/* Contenido (lado izquierdo o derecho) */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                >
                  <div
                    className={`bg-black-soft/60 p-6 rounded-lg shadow-xl ${
                      index % 2 === 0 ? "border-r-4" : "border-l-4"
                    } border-red-primary transition-all-300 hover:translate-y-1`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-light">{item.content}</p>
                  </div>
                </div>
                {/* Espacio central */}
                <div className="w-2/12 flex justify-center">
                  <div
                    className={`py-1 px-4 bg-red-primary text-white font-bold rounded-full shadow-md ${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    {item.year}
                  </div>
                </div>
                {/* Espacio vacío (lado contrario) */}
                <div className="w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailedHistory;
