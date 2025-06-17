import Benefits from "@/app/(public)/(inicio)/components/Benefits";
import Contact from "@/app/(public)/(inicio)/components/Contact";
import Faq from "@/app/(public)/(inicio)/components/Faq";
import Hero from "@/app/(public)/(inicio)/components/Hero";
import HistoryMissionVision from "@/app/(public)/(inicio)/components/HistoryMissionVision";
// import Services from "@/app/(public)/(inicio)/components/Services";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      {/*<Services></Services>*/}
      <HistoryMissionVision></HistoryMissionVision>
      <Benefits></Benefits>
      <Faq></Faq>
      <Contact></Contact>
    </>
  );
}

export default HomePage;
