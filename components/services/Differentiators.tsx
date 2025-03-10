"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Differentiators() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            variants={fadeIn}
            custom={0}
          >
            ¿Por qué elegir Grupo Ases?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              variants={cardVariant}
              custom={0}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enfoque personalizado
              </h3>
              <p className="text-gray-700">
                Adaptamos nuestras soluciones a las necesidades específicas de
                cada cliente, considerando su industria, tamaño y objetivos
                particulares.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              variants={cardVariant}
              custom={1}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Equipo experimentado
              </h3>
              <p className="text-gray-700">
                Contamos con profesionales altamente calificados y con amplia
                experiencia en diversas industrias y disciplinas empresariales.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              variants={cardVariant}
              custom={2}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Resultados medibles
              </h3>
              <p className="text-gray-700">
                Nos enfocamos en generar impacto real y cuantificable en el
                rendimiento y crecimiento de su empresa.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              variants={cardVariant}
              custom={3}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Relaciones a largo plazo
              </h3>
              <p className="text-gray-700">
                Construimos relaciones duraderas con nuestros clientes,
                proporcionando soporte continuo más allá de los proyectos
                iniciales.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Differentiators;
