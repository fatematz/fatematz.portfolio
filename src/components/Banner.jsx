"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/assets/img8.png";

const TYPING_TEXTS = [
  "MERN Stack Developer",
  "Frontend Developer",
  
];

const useTypewriter = (texts, speed = 80, pause = 1500) => {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return displayed;
};

const Banner = () => {
  const typedText = useTypewriter(TYPING_TEXTS);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100vh] flex items-center px-6 md:px-16 py-5 md:py-20 bg-[#0d0d0d] overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-9">

        {/* Left — slides in from left */}
        <div
          className="flex-1 z-10 text-center md:text-left transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-60px)",
          }}
        >
          <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-[16px] text-[#e63946] tracking-[2px] mb-4">
            <span className="w-6 h-px bg-[#e63946]" />
            Hello, World!
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#f1f1f1] leading-tight tracking-tight mb-3">
            Fatema Tuj
            <br />
            <span className="text-[#e63946]">Zohura</span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-[15px] md:text-[17px] text-[#a0a0a0] mb-5 min-h-[28px]">
            <span className="w-2 h-2 rounded-full bg-[#e63946] flex-shrink-0" />
            <span>
              {typedText}
              <span className="animate-pulse text-[#e63946]">|</span>
            </span>
          </div>

          <div className="w-12 h-0.5 bg-[#e63946] mb-7 mx-auto md:mx-0" />

          <p className="text-[16px] text-[#707070] leading-relaxed mb-9 max-w-md mx-auto md:mx-0">
            Passionate about building modern, scalable web applications with
            clean code and great user experiences.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="/Fatema_Tuj_Zohura_CV.pdf"
              download
              className="text-[13px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-7 py-3 rounded-full transition-all duration-200"
            >
              Download CV
            </a>
         <button
  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
  className="text-[13px] font-medium text-[#e63946] border border-[#e63946] hover:bg-[#e63946]/10 px-7 py-3 rounded-full transition-all duration-200 cursor-pointer"
>
  Contact Me
</button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-10">
            <span className="font-mono text-[14px] text-[#555] tracking-widest">
              find me
            </span>
            <div className="w-5 h-px bg-[#333]" />

            <Link
              href="https://github.com/fatematz"
              target="_blank"
              className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-[#a0a0a0] hover:text-[#e63946] hover:border-[#e63946]/50 hover:bg-[#e63946]/10 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/in/fatema-tuj-zohura07"
              target="_blank"
              className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-[#a0a0a0] hover:text-[#e63946] hover:border-[#e63946]/50 hover:bg-[#e63946]/10 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right — slides in from right */}
        <div
          className="flex-shrink-0 relative p-6 transition-all duration-700 ease-out delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(60px)",
          }}
        >
          <span className="absolute -top-3 -right-2 -translate-x-1/2 text-[10px] font-mono text-[#e63946] bg-[#0d0d0d] border border-[#e63946]/30 px-3 py-1 rounded-full z-20 whitespace-nowrap">
            available for work
          </span>

          <div className="absolute inset-0 border border-[#e63946]/10 rounded-[18px] pointer-events-none" />

          <div className="relative w-[260px] h-[320px] md:w-[300px] md:h-[380px] rounded-xl border border-[#e63946]/25 overflow-hidden">
            <Image
              src={img}
              alt="Fatema Tuj Zohura"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;