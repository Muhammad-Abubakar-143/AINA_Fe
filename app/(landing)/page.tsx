import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import LandingFooter from "@/components/LandingFooter";

const LandingPage = () => {
  return ( 
    <>
      <LandingNavbar />
      <LandingHero />
      <Benefits />
      <Collaboration />
      <Services />
      <Roadmap />
      <LandingFooter />
    </>
   );
}
 
export default LandingPage;
