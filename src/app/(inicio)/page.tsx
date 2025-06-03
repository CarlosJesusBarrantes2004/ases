import Benefits from "@/app/(inicio)/components/Benefits";
import Contact from "@/app/(inicio)/components/Contact";
import Faq from "@/app/(inicio)/components/Faq";
import Services from "@/app/(inicio)/components/Services";
import Hero from "./components/Hero";
import HistoryMissionVision from "./components/HistoryMissionVision";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <HistoryMissionVision></HistoryMissionVision>
      <Benefits></Benefits>
      <Faq></Faq>
      <Contact></Contact>
    </>
  );
}

export default HomePage;
