"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

export default function ProjectDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#707070] text-xl mb-5">Project not found.</p>
          <button
            onClick={() => router.push("/")}
            className="text-[#e63946] border border-[#e63946]/40 px-6 py-3 rounded-full hover:bg-[#e63946]/10 transition-all text-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f1f1f1]">

      {/* ── Sticky Topbar ── */}
      <div className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0d0d0d]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[13px] font-mono text-[#505050]">
            <button onClick={() => router.push("/")} className="hover:text-[#e63946] transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => router.push("/projects")} className="hover:text-[#e63946] transition-colors">Projects</button>
            <span>/</span>
            <span className="text-[#a0a0a0]">{project.title}</span>
          </div>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[13px] font-medium text-[#707070] hover:text-white border border-white/[0.08] hover:border-white/20 px-4 py-2 rounded-full transition-all"
          >
            <ArrowLeft size={15} />
            Back
          </button>
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div className="max-w-5xl mx-auto px-5 md:px-10 pt-8">
        <div className="relative w-full h-[240px] sm:h-[340px] md:h-[460px] rounded-2xl overflow-hidden border border-white/[0.06]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectPosition: project.heroImagePosition || project.imagePosition || "center" }}
            className="object-cover"
            priority
          />
          {project.featured && (
            <span className="absolute top-4 right-4 text-[13px] font-mono text-[#e63946] bg-[#0d0d0d]/80 border border-[#e63946]/30 px-3 py-1 rounded-full backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-5xl mx-auto px-5 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── Left: Main Info ── */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Title */}
            <div>
              <p className="text-[13px] font-mono text-[#e63946] uppercase tracking-widest mb-3">Project</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#f1f1f1] leading-tight">{project.title}</h1>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.06]" />

            {/* Description */}
            <div>
              <p className="text-[13px] font-mono text-[#e63946] uppercase tracking-widest mb-4">Brief Description</p>
              <p className="text-[18px] text-[#a0a0a0] leading-relaxed">{project.description}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.06]" />

            {/* Challenges */}
            <div>
              <p className="text-[13px] font-mono text-[#e63946] uppercase tracking-widest mb-4">Challenges Faced</p>
              <p className="text-[18px] text-[#a0a0a0] leading-relaxed">{project.challenges}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.06]" />

            {/* Future Plans */}
            <div>
              <p className="text-[13px] font-mono text-[#e63946] uppercase tracking-widest mb-4">Future Plans & Improvements</p>
              <p className="text-[18px] text-[#a0a0a0] leading-relaxed">{project.futurePlans}</p>
            </div>

          </div>

          {/* ── Right: Sidebar ── */}
          <div className="flex flex-col gap-6">

            {/* Tech Stack */}
            <div className="border border-white/[0.06] rounded-2xl p-6">
              <p className="text-[13px] font-mono text-[#e63946] uppercase tracking-widest mb-5">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[14px] font-mono text-[#a0a0a0] bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-3">
              <p className="text-[13px] font-mono text-[#e63946] uppercase tracking-widest mb-2">Links</p>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[15px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-5 py-3 rounded-full transition-all duration-200"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[15px] font-medium text-[#a0a0a0] hover:text-white border border-white/[0.08] hover:border-white/20 px-5 py-3 rounded-full transition-all duration-200"
              >
                <GithubIcon />
                Client Repository
              </a>
              {project.githubServer && (
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[15px] font-medium text-[#a0a0a0] hover:text-white border border-white/[0.08] hover:border-white/20 px-5 py-3 rounded-full transition-all duration-200"
                >
                  <GithubIcon />
                  Server Repository
                </a>
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}