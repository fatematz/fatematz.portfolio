"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "techstack", "projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            const match = links.find((l) => l.href === `#${id}`);
            if (match) setActive(match.name);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50
      border-b border-[#2a0a0a] dark:border-[#2a0a0a]
      bg-white/90 dark:bg-[#0d0d0d]/90
      backdrop-blur-md transition-colors duration-300">

      <div className="flex items-center justify-between px-5 md:px-10 py-4 w-full max-w-6xl mx-auto">

        <div
          className="font-mono font-bold text-xl tracking-[3px] text-[#e63946] dark:text-[#e63946] cursor-pointer"
          onClick={() => {
            scrollToSection("#home");
            setActive("Home");
          }}
        >
          FTz<span className="text-gray-800 dark:text-[#f1f1f1]">.</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActive(link.name);
                scrollToSection(link.href);
              }}
              className={`text-[13px] px-4 py-[6px] rounded-full border transition-all duration-200 cursor-pointer
                ${active === link.name
                  ? "bg-[#e63946]/10 dark:bg-[#e63946]/10 text-[#e63946] dark:text-[#e63946] border-[#e63946]/30 dark:border-[#e63946]/30"
                  : "text-gray-500 dark:text-[#a0a0a0] border-transparent hover:bg-[#e63946]/07 dark:hover:bg-[#e63946]/07 hover:text-[#e63946] dark:hover:text-[#e63946]"
                }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:block text-[12px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-5 py-2 rounded-full transition-all duration-200 hover:-translate-y-px cursor-pointer">
            Hire Me
          </button>

          <button
            className="md:hidden text-[#e63946] dark:text-[#e63946] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-5 pb-4 border-t border-gray-200 dark:border-[#2a0a0a] bg-white dark:bg-[#0d0d0d]">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActive(link.name);
                setMenuOpen(false);
                scrollToSection(link.href);
              }}
              className={`text-[13px] text-left px-4 py-[10px] rounded-xl border transition-all duration-200
                ${active === link.name
                  ? "bg-[#e63946]/10 dark:bg-[#e63946]/10 text-[#e63946] dark:text-[#e63946] border-[#e63946]/30 dark:border-[#e63946]/30"
                  : "text-gray-500 dark:text-[#a0a0a0] border-transparent hover:bg-[#e63946]/07 dark:hover:bg-[#e63946]/07"
                }`}
            >
              {link.name}
            </button>
          ))}
          <button className="mt-2 text-[12px] font-semibold text-white bg-[#e63946] px-5 py-2 rounded-full w-fit">
            Hire Me
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;