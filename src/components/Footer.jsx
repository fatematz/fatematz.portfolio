"use client";

import Link from "next/link";
import { ArrowUp, Download } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/[0.06]">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className=" font-bold text-xl text-[#e63946] mb-1">
              FTz<span className="text-[#f1f1f1]">.</span>
            </div>
            <p className="text-[14px] text-[#555]">MERN Stack Developer</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[14px] text-[#555] hover:text-[#e63946] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right — CV + Socials */}
          <div className="flex items-center gap-3">
            <a
              href="/Fatema_Tuj_Zohura_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-px"
            >
              <Download size={16} />
              Resume
            </a>

            <Link
              href="https://github.com/fatematz"
              target="_blank"
              className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-[#a0a0a0] hover:text-[#e63946] hover:border-[#e63946]/50 transition-all"
            >
              <GithubIcon />
            </Link>

            <Link
              href="https://www.linkedin.com/in/fatema-tuj-zohura07"
              target="_blank"
              className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-[#a0a0a0] hover:text-[#e63946] hover:border-[#e63946]/50 transition-all"
            >
              <LinkedInIcon />
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-white/[0.06]">
          <p className="text-[13px] text-[#555]">
            © 2026 <span className="text-[#a0a0a0]">Fatema Tuj Zohura</span>. All rights reserved.
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/[0.06] flex items-center justify-center text-[#e63946] hover:bg-[#e63946] hover:text-white hover:border-[#e63946] transition-all cursor-pointer"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;