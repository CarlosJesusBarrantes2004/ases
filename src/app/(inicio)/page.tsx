import Benefits from "@/components/home/Benefits";
import Contact from "@/components/home/Contact";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import HistoryMissionVision from "@/components/home/HistoryMissionVision";
import Services from "@/components/home/Services";

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
