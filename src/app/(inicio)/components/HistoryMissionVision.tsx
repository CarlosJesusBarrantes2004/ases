import Reveal from "@/components/ui/Reveal";

function HistoryMissionVision() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 text-slate-700 text-sm font-medium border border-emerald-200/50">
              🏢 Acerca de nosotros
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Nuestra
            </span>{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Compañía
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
        </Reveal>

        {/* History */}
        <Reveal className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 lg:p-12 shadow-lg shadow-slate-900/5 mb-8 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white mr-6 shadow-lg">
              <span className="text-3xl">📖</span>
            </div>
            <h3 className="text-slate-800 text-3xl font-bold">
              Nuestra Historia
            </h3>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mb-6"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Grupo Ases nació con el objetivo de ofrecer soluciones integrales en
            contabilidad, asesoría jurídica y servicios digitales. Con un equipo
            de expertos, ayudamos a las empresas a optimizar su gestión y crecer
            con confianza en un mundo empresarial en constante evolución.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default HistoryMissionVision;
