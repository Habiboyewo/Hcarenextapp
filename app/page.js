import Image from "next/image";
import ServiceComponent from "./components/ServiceComponent";
import OurConsultantComp from "./components/OurConsultantsComp";
import HomeAboutusComp from "./components/HomeAboutusComp";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";
import Partners from "./components/Partners";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceComponent />
      <OurConsultantComp />
      <HomeAboutusComp />
      <Testimonials />
      <Locations />
      <Partners />
    </div>
  );
}
