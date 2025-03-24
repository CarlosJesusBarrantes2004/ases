"use client";

import React, { useEffect, useRef } from "react";
import {
  Calculator,
  Scale,
  Smartphone,
  Megaphone,
  Monitor,
  Settings,
  ChevronRight,
  Star,
} from "lucide-react";
import Link from "next/link";

function ListServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElements = document.querySelectorAll(".service-card");
    cardElements.forEach((el) => observer.observe(el));

    return () => {
      cardElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: "Contabilidad Empresarial",
      description:
        "Optimiza la gestión financiera de tu empresa con asesoría contable experta.",
      icon: <Calculator size={30} />,
      link: "/servicios/contabilidad",
      delayClass: "delay-0",
    },
    {
      title: "Asesoría Jurídica",
      description:
        "Protege tu negocio con estrategias legales seguras y confiables.",
      icon: <Scale size={30} />,
      link: "/servicios/asesoria-juridica",
      delayClass: "delay-100",
    },
    {
      title: "Servicios Digitales",
      description:
        "Transforma tu negocio con herramientas digitales innovadoras.",
      icon: <Smartphone size={30} />,
      link: "/servicios/digitales",
      subservices: [
        {
          title: "Marketing Digital",
          description: "Estrategias para aumentar tu presencia online.",
          icon: <Megaphone size={24} />,
        },
        {
          title: "Diseño Web",
          description: "Páginas atractivas y funcionales para tu negocio",
          icon: <Monitor size={24} />,
        },
        {
          title: "Desarrollo de Sistemas",
          description: "Soluciones a medida para optimizar tus procesos.",
          icon: <Settings size={24} />,
        },
      ],
      delayClass: "delay-200",
    },
  ];

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]"
    >
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16 opacity-0 animate-slide-up"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          <div className="inline-block bg-[#d32f2f12] px-4 py-2 rounded-full mb-4">
            <span className="text-red-primary font-semibold flex items-center">
              <Star size={16} className="mr-2" /> Lo que ofrecemos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black-soft mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-dark max-w-2xl mx-auto">
            Soluciones integrales diseñadas para impulsar el crecimiento de tu
            empresa con un enfoque moderno y eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card opacity-0 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${service.delayClass}`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
                transformOrigin: "center",
              }}
            >
              <div className="p-8">
                <div className="bg-red-primary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md transform transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-black-soft">
                  {service.title}
                </h3>
                <p className="text-gray-dark text-center mb-6">
                  {service.description}
                </p>

                {service.subservices && (
                  <div className="space-y-4 mb-6">
                    {service.subservices.map((subservice, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center p-4 bg-[#f5f5f5] rounded-lg hover:bg-[#f0f0f0] transition-all duration-300"
                      >
                        <div className="bg-white p-2 rounded-full shadow-sm text-red-primary mr-3">
                          {subservice.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-black-soft">
                            {subservice.title}
                          </h4>
                          <p className="text-sm text-gray-dark">
                            {subservice.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="text-center">
                  <Link
                    href={service.link}
                    className="group inline-flex items-center bg-white border-2 border-red-primary text-red-primary hover:bg-red-primary hover:text-white px-6 py-3 rounded-full transition-colors duration-300 font-medium"
                  >
                    Más Información
                    <ChevronRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListServices;
