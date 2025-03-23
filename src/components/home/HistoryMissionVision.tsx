function HistoryMissionVision() {
  return (
    <section className="py-16 bg-gray-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título de la sección */}
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Nuestra Compañía
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6 animate-expand"></div>
        </div>

        {/* Historia */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 transform transition-transform duration-300 hover:scale-[1.01] animate-slide-in">
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

        {/* Contenedor para Misión y Visión en modo responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.01] animate-slide-in">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-3 bg-gray-light mr-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-black-soft text-3xl font-bold">Misión</h3>
            </div>
            <div className="w-24 h-1 bg-red-primary mb-6"></div>
            <p className="text-gray-dark text-lg leading-relaxed">
              Brindar asesoría confiable e innovadora para que las empresas
              optimicen sus procesos y logren sus objetivos.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-[1.01] animate-slide-in">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-3 bg-gray-light mr-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-black-soft text-3xl font-bold">Visión</h3>
            </div>
            <div className="w-24 h-1 bg-red-primary mb-6"></div>
            <p className="text-gray-dark text-lg leading-relaxed">
              Ser la empresa líder en asesoría empresarial, reconocida por su
              excelencia y compromiso con el crecimiento de sus clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryMissionVision;
