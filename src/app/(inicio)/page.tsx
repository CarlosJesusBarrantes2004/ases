import Benefits from "@/app/(inicio)/components/Benefits";
import Contact from "@/app/(inicio)/components/Contact";
import Faq from "@/app/(inicio)/components/Faq";
import Hero from "@/app/(inicio)/components/Hero";
import HistoryMissionVision from "@/app/(inicio)/components/HistoryMissionVision";
import Services from "@/app/(inicio)/components/Services";

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
