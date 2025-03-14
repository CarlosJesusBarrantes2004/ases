"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function ServicesBanner() {
  return (
    <div className="pt-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Soluciones empresariales integrales y personalizadas para impulsar
            el crecimiento de su negocio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#servicios"
              className="inline-block bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Explorar servicios
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBanner;
