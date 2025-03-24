"use client";

import {
  ArrowRight,
  Briefcase,
  Building,
  Calculator,
  ClipboardList,
  Clock,
  DollarSign,
  FileCheck,
  Scale,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { useEffect } from "react";

function UseCasesSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      title: "Contabilidad",
      icon: <Briefcase size={32}></Briefcase>,
      tagline: "Mantén tus Finanzas en Orden sin Estrés",
      color: "bg-red-primary",
      cases: [
        {
          icon: <FileCheck size={20}></FileCheck>,
          text: "Mi negocio está creciendo y no quiero problemas con la SUNAT.",
          solution:
            "Te ayudamos a manejar tus impuestos y llevar la contabilidad de forma eficiente para evitar sanciones.",
        },
        {
          icon: <Clock size={20}></Clock>,
          text: "No tengo tiempo para llevar mi contabilidad.",
          solution: "Olvídate del papeleo y déjalo en manos de expertos.",
        },
        {
          icon: <Calculator size={20}></Calculator>,
          text: "Quiero optimizar mis costos y pagar menos impuestos legalmente.",
          solution:
            "Te asesoramos para que aproveches beneficios tributarios sin riesgos.",
        },
      ],
    },
    {
      title: "Asesoría Jurídica",
      icon: <Scale size={32}></Scale>,
      tagline: "Protege tu Negocio y Evita Problemas Legales",
      color: "bg-gray-dark",
      cases: [
        {
          icon: <Building size={20}></Building>,
          text: "Quiero formalizar mi empresa, pero no sé cómo hacerlo.",
          solution:
            "Desde la inscripción hasta los permisos legales, te guiamos paso a paso.",
        },
        {
          icon: <DollarSign size={20}></DollarSign>,
          text: "Tengo problemas con un cliente que no me paga.",
          solution:
            "Te ayudamos con cobranzas legales y soluciones jurídicas efectivas.",
        },
        {
          icon: <ClipboardList size={20}></ClipboardList>,
          text: "Voy a firmar un contrato importante, pero no sé si es seguro para mí.",
          solution: "Revisamos y redactamos contratos para protegerte.",
        },
      ],
    },
    {
      title: "Servicios Digitales",
      icon: <Smartphone size={32}></Smartphone>,
      tagline: "Lleva tu Negocio al Mundo Digital",
      color: "bg-black-soft",
      cases: [
        {
          icon: <Users size={20}></Users>,
          text: "Mi negocio necesita más clientes y no sé cómo hacer publicidad.",
          solution:
            "Implementamos estrategias de marketing digital para atraer más clientes.",
        },
        {
          icon: <Zap size={20}></Zap>,
          text: "Quiero tener presencia en internet, pero no tengo página web.",
          solution:
            "Diseñamos y desarrollamos un sitio web profesional adaptado a tu negocio.",
        },
        {
          icon: <Calculator size={20}></Calculator>,
          text: "Me gustaría automatizar algunas tareas de mi empresa.",
          solution:
            "Creamos sistemas personalizados para mejorar la gestión de tu negocio.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-dark bg-opacity-95 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-primary opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-primary opacity-10 rounded-full -ml-40 -mb-40"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Casos de Uso
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6 animate-expand"></div>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">
            Soluciones personalizadas para las necesidades reales de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 transition-all-300"
              style={{
                transform: "translateY(30px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="bg-black-soft rounded-lg shadow-xl overflow-hidden h-full flex flex-col hover:translate-y-[-8px] transition-all-300">
                <div className={`${service.color} px-6 py-5 flex items-center`}>
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm opacity-90">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  {service.cases.map((useCase, index) => (
                    <div
                      key={index}
                      className="mb-6 last:mb-0 bg-gray-dark bg-opacity-40 p-4 rounded-lg hover:bg-opacity-60 transition-all-300"
                    >
                      <div className="flex items-start mb-2">
                        <div className="text-red-primary mr-2 mt-1">
                          {useCase.icon}
                        </div>
                        <p className="text-white font-medium">
                          "{useCase.text}"
                        </p>
                      </div>
                      <div className="flex pl-6 ml-1 border-l-2 border-red-primary">
                        <ArrowRight
                          size={16}
                          className="text-red-primary mr-2 mt-1 flex-shrink-0"
                        ></ArrowRight>
                        <p className="text-gray-light text-sm">
                          {useCase.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}

export default UseCasesSection;
