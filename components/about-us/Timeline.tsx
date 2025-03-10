"use client";

import { motion } from "framer-motion";

const historyTimeline = [
  {
    year: "2010",
    title: "Fundación",
    description:
      "Grupo Ases fue fundado con la misión de proporcionar consultoría estratégica de primer nivel a empresas en crecimiento.",
  },
  {
    year: "2013",
    title: "Expansión de Servicios",
    description:
      "Ampliamos nuestra oferta para incluir gestión financiera y optimización de procesos.",
  },
  {
    year: "2016",
    title: "Reconocimiento Nacional",
    description:
      "Fuimos reconocidos como una de las consultoras de más rápido crecimiento en el país.",
  },
  {
    year: "2018",
    title: "Transformación Digital",
    description:
      "Incorporamos servicios especializados en transformación digital para ayudar a nuestros clientes a adaptarse al entorno cambiante.",
  },
  {
    year: "2020",
    title: "Presencia Internacional",
    description:
      "Iniciamos operaciones en mercados internacionales, ampliando nuestra presencia a 5 países.",
  },
  {
    year: "2023",
    title: "Innovación Continua",
    description:
      "Implementamos nuevas metodologías y herramientas tecnológicas para ofrecer soluciones cada vez más efectivas a nuestros clientes.",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

function Timeline() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          Nuestra Trayectoria
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {historyTimeline.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Línea vertical */}
              {index < historyTimeline.length - 1 && (
                <motion.div
                  className="absolute left-11 top-12 bottom-0 w-0.5 bg-blue-200"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
              )}

              {/* Círculo año */}
              <motion.div
                className="w-24 h-24 rounded-full bg-blue-100 text-blue-800 font-bold text-xl flex items-center justify-center flex-shrink-0 z-10"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#3B82F6",
                  color: "#FFFFFF",
                  transition: { duration: 0.3 },
                }}
              >
                {item.year}
              </motion.div>

              {/* Contenido */}
              <div className="ml-8 pt-3">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
