import Hero from "@/app/(public)/(public-layout)/servicios/components/Hero";
import ListServices from "@/app/(public)/(public-layout)/servicios/components/ListServices";
import ServicesTable from "@/app/(public)/(public-layout)/servicios/components/ServicesTable";
import UseCases from "@/app/(public)/(public-layout)/servicios/components/UseCases";
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
