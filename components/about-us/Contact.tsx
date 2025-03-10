"use client";

import ContactForm from "../contact/form/ContactForm";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Contact() {
  return (
    <div id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Trabajemos juntos
          </h2>
          <p className="text-gray-700 text-lg mb-8 text-center">
            Cuéntanos sobre tu empresa y tus desafíos. Estamos aquí para
            ayudarte a encontrar las mejores soluciones.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm></ContactForm>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
