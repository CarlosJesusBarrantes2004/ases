import BenefitsSection from "@/components/home/BenefitsSection";
import Contact from "@/components/home/Contact";
import Faq from "@/components/home/Faq";
import HeroSection from "@/components/home/HeroSection";
import HistoryMissionVision from "@/components/home/HistoryMissionVision";
import ServicesSection from "@/components/home/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupo Ases - Soluciones Integrales para tu Negocio",
  description:
    "Expertos en Contabilidad, Asesoría Jurídica y Servicios Digitales para que tu empresa crezca con confianza.",
  keywords:
    "contabilidad, asesoría jurídica, servicios digitales, consultoría empresarial",
};

function HomePage() {
  return (
    <>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <HistoryMissionVision></HistoryMissionVision>
      <BenefitsSection></BenefitsSection>
      <Faq></Faq>
      <Contact></Contact>
    </>
  );
}

export default HomePage;
