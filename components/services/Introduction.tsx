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

function Introduction() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-6"
            variants={fadeIn}
            custom={0}
          >
            Soluciones a medida para cada necesidad
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: 96,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                },
              },
            }}
          ></motion.div>

          <motion.p
            className="text-gray-700 text-lg mb-8"
            variants={fadeIn}
            custom={1}
          >
            En Grupo Ases entendemos que cada empresa es única, con sus propios
            desafíos y objetivos. Nuestro equipo de expertos trabaja
            estrechamente con usted para desarrollar estrategias personalizadas
            que impulsen su crecimiento y maximicen su rendimiento.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg"
            variants={fadeIn}
            custom={2}
          >
            Explore nuestra gama completa de servicios y descubra cómo podemos
            ayudarle a transformar los desafíos en oportunidades de crecimiento.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Introduction;
