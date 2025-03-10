import ContactForm from "@/components/contact/form/ContactForm";
import Cta from "@/components/services/Cta";
import Differentiators from "@/components/services/Differentiators";
import Introduction from "@/components/services/Introduction";
import ServicesBanner from "@/components/services/ServicesBanner";
import ServicesContact from "@/components/services/ServicesContact";
import ServicesSection from "@/components/services/ServicesSection";
import Testimonials from "@/components/services/Testimonials";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestros Servicios | Grupo Ases",
  description:
    "Descubra nuestra amplia gama de servicios de consultoría y asesoría empresrial que ayudarán a su empresa a alcanzar su máximo potencial.",
};

function ServiciosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesBanner></ServicesBanner>

      {/* Introducción a los servicios */}
      <Introduction></Introduction>

      {/* Listado de servicios */}
      <ServicesSection></ServicesSection>

      {/* Sección de diferenciadores */}
      <Differentiators></Differentiators>

      {/* Testimonios */}
      <Testimonials></Testimonials>

      {/* Formulario de contacto */}
      <ServicesContact></ServicesContact>

      {/* CTA final */}
      <Cta></Cta>
    </div>
  );
}

export default ServiciosPage;
