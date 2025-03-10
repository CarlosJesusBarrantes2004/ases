"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

function Cta() {
  return (
    <div className="py-12 bg-blue-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
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
            className="text-2xl md:text-3xl font-bold mb-4"
            variants={fadeIn}
            custom={0}
          >
            Impulse el crecimiento de su empresa hoy mismo
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto"
            variants={fadeIn}
            custom={1}
          >
            Nuestro equipo de expertos está listo para ayudarle a alcanzar sus
            objetivos empresariales a través de soluciones personalizadas y
            estratégicas.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/servicios"
                className="bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                Explorar nuestros servicios
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cta;
