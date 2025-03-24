import HeroSection from "@/components/services/HeroSection";
import ListServices from "@/components/services/ListServices";
import ServicesTable from "@/components/services/ServicesTable";
import UseCasesSection from "@/components/services/UseCasesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupo Ases - Soluciones Integrales para tu Negocio",
  description:
    "Soluciones empresariales especializadas en contabilidad, asesoría jurídica y transformación digital para impulsar tu negocio.",
  keywords:
    "contabilidad, asesoría jurídica, servicios digitales, consultoría empresarial",
};

function ServicesPage() {
  return (
    <>
      <HeroSection></HeroSection>
      <ListServices></ListServices>
      <ServicesTable></ServicesTable>
      <UseCasesSection></UseCasesSection>
    </>
  );
}

export default ServicesPage;
