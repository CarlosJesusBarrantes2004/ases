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

function Map() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-8 text-center"
            variants={fadeIn}
            custom={0}
          >
            Nuestra ubicación
          </motion.h2>

          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-24 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.001147208791!2d-79.84372742623135!3d-6.769712366198448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceed821990009%3A0x43c254479e444279!2sLora%20y%20Cordero%20610%2C%20Chiclayo%2014001!5e0!3m2!1sen!2spe!4v1741632330855!5m2!1sen!2spe"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-6 text-gray-600 text-center"
            variants={fadeIn}
            custom={1}
          >
            <p className="mb-2 font-medium">
              Lora y Cordero 610, Chiclayo 14001, Perú
            </p>
            <p>Abierto de lunes a viernes: 9:00 AM - 6:00 PM</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Map;
