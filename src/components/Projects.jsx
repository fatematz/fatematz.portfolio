import Link from "next/link";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
);

const projects = [
  {
    title: "SkillSphere",
    description: "A full-stack online course platform where learners can discover courses, learn from top instructors, and manage their accounts with secure authentication.",
    live: "https://skills-phere.vercel.app",
    github: "https://github.com/fatematz/skills-phere",
    tags: ["Next.js", "MongoDB", "Better Auth", "Tailwind CSS", "DaisyUI"],
    featured: true,
  },
  {
    title: "KeenKeeper",
    description: "A relationship management app that helps you stay connected with people who matter most — tracks interactions, reminds you to reconnect, and logs every check-in.",
    live: "https://keen-keeper-3icm.vercel.app",
    github: "https://github.com/fatematz/keen-keeper",
    tags: ["Next.js", "React", "Recharts", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "DigiTools Platform",
    description: "A tab-based digital marketplace web app where users can browse premium digital tools, add to cart, and manage purchases with a dynamic real-time interface.",
    live: "https://lnkd.in/gHrDTRhA",
    github: "https://github.com/fatematz/DigiTools-Platform",
    tags: ["React", "Vite", "Tailwind CSS", "DaisyUI"],
    featured: false,
  },
  {
    title: "GitHub Issues Tracker",
    description: "A GitHub-themed issues tracker web app with login authentication, allowing users to manage and track GitHub issues through a clean dashboard interface.",
    live: "https://fatematz.github.io/Assignment-5/",
    github: "https://github.com/fatematz/Assignment-5",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 md:py-24 bg-[#0d0d0d]">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f1f1f1] mb-3">
            My <span className="text-[#e63946]">Projects</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#e63946] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 group
                ${project.featured
                  ? "border-[#e63946]/25 bg-[#111111] hover:border-[#e63946]/50"
                  : "border-white/[0.06] bg-[#111111] hover:border-[#e63946]/30"
                }`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 text-[11px] font-mono text-[#e63946] border border-[#e63946]/30 px-2 py-0.5 rounded-full">
                  Featured
                </span>
              )}

              <h3 className="text-[20px] font-bold text-[#f1f1f1] group-hover:text-[#e63946] transition-colors pr-16">
                {project.title}
              </h3>

              <p className="text-[16px] text-[#707070] leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-mono text-[#a0a0a0] bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06]">
                <Link
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-1.5 text-[14px] font-medium text-[#e63946] hover:text-white transition-colors"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1.5 text-[14px] font-medium text-[#a0a0a0] hover:text-white transition-colors"
                >
                  <GithubIcon />
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/fatematz"
            target="_blank"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#e63946] border border-[#e63946]/40 hover:bg-[#e63946]/10 px-7 py-3 rounded-full transition-all duration-200"
          >
            <GithubIcon />
            View All on GitHub
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;