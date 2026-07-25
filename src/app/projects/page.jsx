"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Reveal, StaggerGroup } from "@/components/Reveal";

export default function AllProjectsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f1f1f1]">
      {/* Sticky Topbar */}
      <div className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0d0d0d]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[13px] font-mono text-[#505050]">
            <button onClick={() => router.push("/")} className="hover:text-[#e63946] transition-colors">Home</button>
            <span>/</span>
            <span className="text-[#a0a0a0]">All Projects</span>
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

      <div className="w-full max-w-6xl mx-auto px-6 md:px-16 py-16">
        <Reveal className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#f1f1f1] mb-3">
            All <span className="text-[#e63946]">Projects</span>
          </h1>
          <div className="w-16 h-[2px] bg-[#e63946] mx-auto" />
        </Reveal>

        <StaggerGroup gap={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              imageHeight={180}
              titleSize="text-[18px]"
            />
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
}
