"use client";

import { services } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Ofrecemos soluciones integrales adaptadas a las necesidades
            específicas de su empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-blue-800 to-blue-600 relative flex items-center justify-center p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  <span>Saber más</span>
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link
            href="/servicios"
            className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Ver todos nuestros servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
