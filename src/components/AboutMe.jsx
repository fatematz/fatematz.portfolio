import Image from "next/image";
import img from "@/assets/img8.png";
import { Download, CheckCircle2 } from "lucide-react";

const checklist = [
  "Clean & Maintainable Code",
  "Responsive Design",
  "Problem Solver",
  "Group Work & Collaboration",
];

const AboutMe = () => {
  return (
    <section id="about" className="pb-20 md:pb-30 md:pt-10 bg-[#0d0d0d]">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#f1f1f1] mb-3">
            About <span className="text-[#e63946]">Me</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#e63946] mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="flex-shrink-0 relative">
            <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border border-[#e63946]/20 pointer-events-none" />
            <div className="relative w-[260px] h-[320px] md:w-[300px] md:h-[380px] rounded-2xl border border-[#e63946]/25 overflow-hidden">
              <Image
                src={img}
                alt="Fatema Tuj Zohura"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 font-mono text-[13px] text-[#e63946] tracking-[2px] mb-3">
              <span className="w-6 h-px bg-[#e63946]" />
              WHO I AM
            </div>

            <p className="text-[16px] text-[#707070] leading-relaxed mb-8 max-w-lg">
              I&apos;m Fatema Tuj Zohura, a passionate MERN Stack Developer who loves building
              modern, scalable web applications. I enjoy turning complex problems into
              simple, beautiful, and intuitive digital experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#e63946] flex-shrink-0" />
                  <span className="text-[16px] text-[#a0a0a0]">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              download
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-px"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;