"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ProjectCard = ({ project, imageHeight = 200, titleSize = "text-[20px]" }) => {
  const cardRef = useRef(null);
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const interactive = !coarsePointer && !reduceMotion;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    card.style.setProperty("--spot-x", `${px * 100}%`);
    card.style.setProperty("--spot-y", `${py * 100}%`);
    card.style.setProperty("--ry", `${(px - 0.5) * 16}deg`);
    card.style.setProperty("--rx", `${(0.5 - py) * 16}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
      style={
        interactive
          ? {
              transform:
                "perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-[border-color,transform] duration-300 will-change-transform
        ${
          project.featured
            ? "border-[#e63946]/25 bg-[#111111] hover:border-[#e63946]/60"
            : "border-white/[0.06] bg-[#111111] hover:border-[#e63946]/40"
        }`}
    >
      {interactive && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(230,57,70,0.15), transparent 70%)",
          }}
        />
      )}

      <div
        className="relative w-full overflow-hidden"
        style={{ height: imageHeight }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectPosition: project.imagePosition || "center" }}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <span className="absolute top-3 right-3 z-20 text-[11px] font-mono text-[#e63946] bg-[#0d0d0d]/80 border border-[#e63946]/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>

      <div className="relative z-10 flex flex-col gap-4 p-6 flex-1">
        <h3
          className={`${titleSize} font-bold text-[#f1f1f1] group-hover:text-[#e63946] transition-colors`}
        >
          {project.title}
        </h3>

        <p className="text-[14px] text-[#707070] leading-relaxed flex-1">
          {project.description}
        </p>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-[#a0a0a0] bg-white/[0.04] border border-white/[0.08] px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-2 border-t border-white/[0.06]">
          <Link
            href={`/projects/${project.id}`}
            className="block w-full text-center text-[13px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-4 py-2 rounded-full transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
