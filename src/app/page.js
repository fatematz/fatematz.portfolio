import Image from "next/image";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import TechStack from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import GithubContributions from "@/components/GithubContributions";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <div className="relative">
        {/* Fixed page-wide background — stays put while the page scrolls */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "radial-gradient(ellipse 80% 65% at 50% 40%, #000 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 65% at 50% 40%, #000 40%, transparent 100%)",
            }}
          />
          <div className="absolute -top-40 -left-40 w-105 h-105 bg-[#e63946]/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-105 h-105 bg-[#e63946]/10 rounded-full blur-[120px]" />
        </div>

        <CursorTrail />
        <Navbar />
        <Banner />
        <AboutMe/>
        <TechStack/>
        {/* <Education/> */}
        <Projects/>
        <GithubContributions/>
        <Contact/>
        <Footer/>
    </div>
  );
}
