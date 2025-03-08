"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaChartLine, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const values = [
    {
      icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />,
      title: "Confianza",
      description:
        "Construimos relaciones sólidas basadas en la honestidad y transparencia.",
    },
    {
      icon: <FaLightbulb className="text-blue-600 text-4xl mb-4" />,
      title: "Innovación",
      description:
        "Buscamos constantemente nuevas formas de resolver desafíos empresariales.",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
      title: "Excelencia",
      description:
        "Nos comprometemos con los más altos estándares de calidad en todos nuestros servicios.",
    },
    {
      icon: <FaUsers className="text-blue-600 text-4xl mb-4" />,
      title: "Colaboración",
      description:
        "Trabajamos en estrecha colaboración con nuestros clientes para lograr resultados óptimos.",
    },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Grupo Ases
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Somos una empresa líder en consultoría y asesoría empresarial con un
            enfoque integral para ayudar a las organizaciones a alcanzar su
            máximo potencial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 mb-6">
              Brindar soluciones empresariales innovadoras y efectivas que
              potencien el crecimiento sostenible de nuestros clientes, mediante
              un enfoque personalizado y un equipo altamente capacitado.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Nuestra Visión
            </h3>
            <p className="text-gray-600">
              Ser reconocidos como el referente en consultoría empresarial,
              destacando por la excelencia en el servicio, el compromiso con
              nuestros clientes y el impacto positivo que generamos en sus
              negocios.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Placeholder for image - replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
              <p className="text-white text-xl font-light italic">
                "Transformamos los desafíos empresariales en oportunidades de
                crecimiento"
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              {value.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
