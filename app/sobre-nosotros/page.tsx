import { Metadata } from "next";
import AboutUsBanner from "@/components/about-us/AboutUsBanner";
import HistoryMission from "../../components/about-us/HistoryMission";
import MissionVisionValues from "../../components/about-us/MissionVisionValues";
import Achievements from "../../components/about-us/Achievements";
import Timeline from "../../components/about-us/Timeline";
import Team from "@/components/about-us/Team";
import Contact from "@/components/about-us/Contact";
import Cta from "@/components/about-us/Cta";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Grupo Ases",
  description: "Conozca más sobre Grupo Ases, nuestra",
};

function SobreNosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner "Sobre Nosotros" */}
      <AboutUsBanner></AboutUsBanner>

      {/* Historia y misión */}
      <HistoryMission></HistoryMission>

      {/* Misión, Visión y Valores */}
      <MissionVisionValues></MissionVisionValues>

      {/* Logros */}
      <Achievements></Achievements>

      {/* Línea de tiempo */}
      <Timeline></Timeline>

      {/* Equipo */}
      <Team></Team>

      {/* Formulario de contacto */}
      <Contact></Contact>

      {/* CTA final */}
      <Cta></Cta>
    </div>
  );
}

export default SobreNosotrosPage;
