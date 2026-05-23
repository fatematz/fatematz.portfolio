import Image from "next/image";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import TechStack from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <div className="bg-[#0d0d0d]">
        <CursorTrail /> 
        <Navbar />
        <Banner />
        <AboutMe/>
        <TechStack/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}
