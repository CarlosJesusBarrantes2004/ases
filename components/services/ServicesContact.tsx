"use client";

import { motion } from "framer-motion";
import ContactForm from "../contact/form/ContactForm";

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

function ServicesContact() {
  return (
    <div id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto"
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
            className="text-3xl font-bold text-gray-900 mb-3 text-center"
            variants={fadeIn}
            custom={0}
          >
            ¿Listo para potenciar su empresa?
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg mb-8 text-center"
            variants={fadeIn}
            custom={1}
          >
            Complete el formulario y un asesor especializado se pondrá en
            contacto con usted para analizar sus necesidades y ofrecerle la
            mejor solución.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.7,
                },
              },
            }}
          >
            <ContactForm></ContactForm>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesContact;
