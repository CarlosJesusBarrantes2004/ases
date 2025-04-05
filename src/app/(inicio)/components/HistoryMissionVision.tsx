import Reveal from "@/components/ui/Reveal";

function HistoryMissionVision() {
  return (
    <section className="py-16 md:py-20 bg-gray-dark">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Nuestra Compañía
            </h2>
          </Reveal>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
        </div>
        {/* History */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 transform transition-transform duration-300 hover:scale-[1.01]">
          <div className="flex items-center mb-4">
            <div className="rounded-full p-3 bg-gray-light mr-4 flex items-center justify-center">
              <span className="text-2xl">🔴</span>
            </div>
            <h3 className="text-black-soft text-3xl font-bold">
              Nuestra Historia
            </h3>
          </div>
          <div className="w-32 h-1 bg-red-primary mb-6"></div>
          <p className="text-gray-dark text-lg leading-relaxed">
            Grupo Ases nació con el objetivo de ofrecer soluciones integrales en
            contabilidad, asesoría jurídica y servicios digitales. Con un equipo
            de expertos, ayudamos a las empresas a optimizar su gestión y crecer
            con confianza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-3 bg-gray-light mr-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-black-soft text-3xl font-bold">Misión</h3>
            </div>
            <div className="w-24 h-1 bg-red-primary mb-6"></div>
            <p className="text-gray-dark text-lg leading-relaxed">
              En grupo ases, somos aliados estratégicos de las mypes y pymes en
              su crecimiento, brindándoles asesoría integral de alto nivel para
              potenciar su crecimiento. nos comprometemos a ofrecer soluciones
              estratégicas que optimizan su gestión, fortalecen su estructura
              organizativa y garantizan su desarrollo sostenible en un entorno
              competitivo.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-3 bg-gray-light mr-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-black-soft text-3xl font-bold">Visión</h3>
            </div>
            <div className="w-24 h-1 bg-red-primary mb-6"></div>
            <p className="text-gray-dark text-lg leading-relaxed">
              Ser reconocidas como la firma de asesoría empresarial más
              influyente, destacándose por la excelencia, innovación y
              compromiso con el crecimiento de las mypes y pymes. buscamos ser
              un referente en soluciones estratégicas que impulsen el desarrollo
              de los negocios y contribuyan al progreso y fortalecimiento del
              sector empresarial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryMissionVision;
