"use client";

import { motion } from "framer-motion";

function ContactBanner() {
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
            Contacto
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Estamos listos para ayudarle a impulsar el crecimiento y éxito de su
            empresa
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
