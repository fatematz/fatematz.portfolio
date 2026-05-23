import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Banner from "@/components/Banner";
// import TechStack from "@/components/Skills";
// import AboutMe from "@/components/AboutMe";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Education from "@/components/Education";
// import CursorTrail from "@/components/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Fatema Tuj Zohura | MERN Stack Developer",
  description: "Portfolio of Fatema Tuj Zohura — MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0F1E]">
        {/* <CursorTrail /> 
        <Navbar />
        <Banner />
        <AboutMe/>
        <TechStack/>
        <Education/>
        <Projects/>
        <Contact/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}