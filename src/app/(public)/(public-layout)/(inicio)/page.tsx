import Benefits from "@/app/(public)/(public-layout)/(inicio)/components/Benefits";
import Contact from "@/app/(public)/(public-layout)/(inicio)/components/Contact";
import Faq from "@/app/(public)/(public-layout)/(inicio)/components/Faq";
import Hero from "@/app/(public)/(public-layout)/(inicio)/components/Hero";
import HistoryMissionVision from "@/app/(public)/(public-layout)/(inicio)/components/HistoryMissionVision";
import Services from "@/app/(public)/(public-layout)/(inicio)/components/Services";

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
