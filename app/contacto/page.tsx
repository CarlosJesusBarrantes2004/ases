import ContactBanner from "@/components/contact/ContactBanner";
import Content from "@/components/contact/Content";
import Cta from "@/components/contact/Cta";
import Map from "@/components/contact/Map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Grupo Ases",
  description:
    "Póngase en contacto con nosotros para una asesoría personalizada que impulse el crecimiento de su empresa.",
};

function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner de contacto */}
      <ContactBanner></ContactBanner>

      {/* Sección principal con formulario e información de contacto */}
      <Content></Content>

      {/* Mapa de ubicación */}
      <Map></Map>

      {/* CTA final */}
      <Cta></Cta>
    </div>
  );
}

export default ContactoPage;
