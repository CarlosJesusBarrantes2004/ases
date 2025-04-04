import Hero from "@/app/servicios/components/Hero";
import ListServices from "@/app/servicios/components/ListServices";
import ServicesTable from "@/app/servicios/components/ServicesTable";
import UseCases from "@/app/servicios/components/UseCases";
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
