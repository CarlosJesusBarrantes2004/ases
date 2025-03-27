import Hero from "@/components/services/Hero";
import ListServices from "@/components/services/ListServices";
import ServicesTable from "@/components/services/ServicesTable";
import UseCases from "@/components/services/UseCases";
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
      <Hero></Hero>
      <ListServices></ListServices>
      <ServicesTable></ServicesTable>
      <UseCases></UseCases>
    </>
  );
}

export default ServicesPage;
