"use client";

import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

function HistoryMission() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-700 text-lg mb-6">
              Grupo Ases nació en 2010 con una visión clara: transformar la
              consultoría empresarial tradicional en un enfoque más ágil,
              personalizado y orientado a resultados tangibles.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              A lo largo de los años, hemos evolucionado y ampliado nuestros
              servicios para adaptarnos a las necesidades cambiantes del
              mercado, incorporando nuevas metodologías, tecnologías y áreas de
              especialización.
            </p>
            <p className="text-gray-700 text-lg">
              Hoy, con presencia en varios países y un equipo multidisciplinario
              de expertos, seguimos fieles a nuestra misión original: ser el
              aliado estratégico que impulsa el crecimiento sostenible de
              nuestros clientes.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            {/* Reemplazar con imagen real */}
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-xl font-light italic p-8 text-center">
                "Nuestra historia es un reflejo de nuestro compromiso con la
                excelencia y la mejora continua"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HistoryMission;
