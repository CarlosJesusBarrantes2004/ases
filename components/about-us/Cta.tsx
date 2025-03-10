"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Cta() {
  return (
    <motion.div
      className="py-12 bg-blue-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Listo para impulsar tu empresa?
        </motion.h2>
        <motion.p
          className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          En Grupo Ases contamos con la experiencia y el conocimiento para
          ayudarte a alcanzar tus objetivos empresariales.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/servicios"
              className="inline-block bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Explorar servicios
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contacto"
              className="inline-block border border-white text-white font-medium px-8 py-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
            >
              Solicitar una consulta
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Cta;
