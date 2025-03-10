"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function AboutUsBanner() {
  return (
    <motion.div
      className="pt-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Conoce al equipo detrás de Grupo Ases y nuestra trayectoria ayudando
            a empresas a alcanzar su máximo potencial
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              href="#equipo"
              className="inline-block bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Conocer al equipo
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUsBanner;
