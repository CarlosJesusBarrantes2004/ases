"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaGlobeAmericas, FaHandshake } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

function MissionVisionValues() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Misión, Visión y Valores
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Estos son los principios que guían nuestro trabajo y definen quiénes
            somos como organización.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full"
            variants={scaleIn}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <FaGlobeAmericas className="text-blue-600 text-4xl mb-4"></FaGlobeAmericas>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-700 flex-grow">
              Brindar soluciones empresariales innovadoras y efectivas que
              potencien el crecimiento sostenible de nuestros clientes, mediante
              un enfoque personalizado y un equipo altamente capacitado.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full"
            variants={scaleIn}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <FaBuilding className="text-blue-600 text-4xl mb-4"></FaBuilding>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-700 flex-grow">
              Ser reconocidos como el referente en consultoría empresarial,
              destacando por la excelencia en el servicio, el compromiso con
              nuestros clientes y el impacto positivo que generamos en sus
              negocios.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full"
            variants={scaleIn}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <FaHandshake className="text-blue-600 text-4xl mb-4"></FaHandshake>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
            <ul className="text-gray-700 space-y-2 flex-grow">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Confianza y transparencia</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Excelencia y mejora continua</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Innovación y adaptabilidad</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Compromiso con los resultados</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Colaboración y trabajo en equipo</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default MissionVisionValues;
