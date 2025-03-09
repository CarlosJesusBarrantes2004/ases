"use client";

import { services } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";
import { usePathname } from "next/navigation";

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const pathname = usePathname();

  return (
    <section id="servicios" className="py-20 bg-gray-50" ref={ref}>
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
            <ServiceCard
              service={service}
              key={service.id}
              index={index}
              isInView={isInView}
            ></ServiceCard>
          ))}
        </div>

        {pathname === "/servicios" ? null : (
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
        )}
      </div>
    </section>
  );
}

export default ServicesSection;
