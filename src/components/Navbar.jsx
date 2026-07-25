"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Me", href: "#contact" },
];

const CONTACT_LINK = { name: "Contact Me", href: "#contact" };

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleButtonRef = useRef(null);
  const menuRef = useRef(null);

  const reduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();

  // Only re-renders when the boolean actually flips, not on every scroll tick
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled((prev) => (prev === latest > 80 ? prev : latest > 80));
  });

  // Scroll spy — IntersectionObserver instead of scroll-position math
  useEffect(() => {
    const sections = LINKS.map((l) =>
      document.getElementById(l.href.slice(1))
    ).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = LINKS.find((l) => l.href === `#${entry.target.id}`);
            if (match) setActive(match.name);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Focus trap + Escape-to-close for the mobile overlay menu
  useEffect(() => {
    if (!menuOpen) return undefined;

    const focusables = menuRef.current
      ? Array.from(menuRef.current.querySelectorAll(FOCUSABLE_SELECTOR))
      : [];
    focusables[0]?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const goTo = (link) => {
    setActive(link.name);
    setMenuOpen(false);
    scrollToSection(link.href);
  };

  return (
    <>
    <motion.nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      animate={{
        paddingTop: scrolled ? 10 : 18,
        paddingBottom: scrolled ? 10 : 18,
        backgroundColor: scrolled ? "rgba(13,13,13,0.85)" : "rgba(13,13,13,0)",
        borderColor: scrolled
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0)",
      }}
      transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-[#e63946] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="flex items-center justify-between px-5 md:px-10 w-full max-w-6xl mx-auto">
        <button
          className="font-mono font-bold text-xl tracking-[3px] text-[#e63946] cursor-pointer"
          onClick={() => goTo(LINKS[0])}
        >
          FTz<span className="text-[#f1f1f1]">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => goTo(link)}
              className={`text-[13px] px-4 py-[6px] rounded-full border transition-all duration-200 cursor-pointer
                ${
                  active === link.name
                    ? "bg-[#e63946]/10 text-[#e63946] border-[#e63946]/30"
                    : "text-[#a0a0a0] border-transparent hover:bg-[#e63946]/[0.07] hover:text-[#e63946]"
                }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => goTo(CONTACT_LINK)}
            className="hidden md:block text-[12px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-5 py-2 rounded-full transition-all duration-200 hover:-translate-y-px cursor-pointer"
          >
            Hire Me
          </button>

          <button
            ref={toggleButtonRef}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-[#e63946] cursor-pointer rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-[#e63946]/50"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </motion.nav>

    {/* Rendered as a sibling, not a nav child — backdrop-blur on the nav
        would otherwise become the containing block for this fixed overlay
        and break full-viewport positioning. */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-[#0d0d0d]"
        >
          {LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => goTo(link)}
              className={`text-[20px] px-6 py-3 rounded-full border transition-all duration-200
                ${
                  active === link.name
                    ? "bg-[#e63946]/10 text-[#e63946] border-[#e63946]/30"
                    : "text-[#a0a0a0] border-transparent hover:text-[#e63946]"
                }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => goTo(CONTACT_LINK)}
            className="mt-4 text-[14px] font-semibold text-white bg-[#e63946] px-7 py-3 rounded-full"
          >
            Hire Me
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
