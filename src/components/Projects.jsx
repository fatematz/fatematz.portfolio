"use client";

import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Reveal, StaggerGroup } from "./Reveal";

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const featuredProjects = projects.filter((p) => p.featured);

const Projects = () => {
  const router = useRouter();

  return (
    <section id="projects" className="pt-10 md:pt-10 pb-10 md:pb-30 scroll-mt-24">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">

        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f1f1f1] mb-3">
            My <span className="text-[#e63946]">Projects</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#e63946] mx-auto" />
        </Reveal>

        <StaggerGroup gap={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerGroup>

        <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => router.push("/projects")}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-7 py-3 rounded-full transition-all duration-200"
          >
            View All Projects
          </button>
          <a
            href="https://github.com/fatematz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#e63946] border border-[#e63946]/40 hover:bg-[#e63946]/10 px-7 py-3 rounded-full transition-all duration-200"
          >
            <GithubIcon />
            View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
