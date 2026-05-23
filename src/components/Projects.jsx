"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import skillsphere from "@/assets/skillsphere.png";
import keenkeeper from "@/assets/keenkeeper.png";
import digitools from "@/assets/digitools.png";
import issuetracker from "@/assets/issuetracker.png";

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

export const projects = [
  {
    id: "skillsphere",
    title: "SkillSphere",
    description:
      "A full-stack online course platform where learners can discover courses, learn from top instructors, and manage their accounts with secure authentication.",
    image: skillsphere,
    live: "https://skills-phere.vercel.app",
    github: "https://github.com/fatematz/skills-phere",
    tags: ["Next.js", "MongoDB", "Better Auth", "Tailwind CSS", "DaisyUI"],
    featured: true,
    challenges:
      "Implementing secure session management with Better Auth was complex, especially handling token refresh flows and protecting server-side routes. Structuring the MongoDB schema to efficiently relate courses, instructors, and enrolled users also required careful planning to avoid deeply nested queries.",
    futurePlans:
      "Add a real-time progress tracker for learners, integrate a payment gateway for paid courses, and introduce an instructor dashboard with analytics. A mobile app version using React Native is also on the roadmap.",
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    description:
      "A relationship management app that helps you stay connected with people who matter most — tracks interactions, reminds you to reconnect, and logs every check-in.",
    image: keenkeeper,
    live: "https://keen-keeper-3icm.vercel.app",
    github: "https://github.com/fatematz/keen-keeper",
    tags: ["Next.js", "React", "Recharts", "Tailwind CSS"],
    featured: true,
    challenges:
      "Designing an intuitive UX for logging interactions without making it feel like a chore was a core challenge. Building the Recharts visualizations to accurately reflect relationship frequency over dynamic time ranges also took several iterations to get right.",
    futurePlans:
      "Integrate calendar sync (Google Calendar) for automatic check-in reminders, add AI-generated conversation starters based on past interaction history, and introduce a shared mode for teams to manage client relationships collaboratively.",
  },
  {
    id: "digitools",
    title: "DigiTools Platform",
    description:
      "A tab-based digital marketplace web app where users can browse premium digital tools, add to cart, and manage purchases with a dynamic real-time interface.",
    image: digitools,
    live: "https://a-6-digitools-platform.netlify.app",
    github: "https://github.com/fatematz/DigiTools-Platform",
    tags: ["React", "Vite", "Tailwind CSS", "DaisyUI"],
    featured: false,
    challenges:
      "Managing cart state across multiple tabs and categories without a global state library required careful prop drilling and local state design. Keeping the UI responsive and performant while filtering large product lists was another hurdle solved through memoization.",
    futurePlans:
      "Migrate state management to Zustand or Redux for scalability, add a user authentication flow with purchase history, and connect to a real backend with Stripe for actual transactions.",
  },
  {
    id: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    description:
      "A GitHub-themed issues tracker web app with login authentication, allowing users to manage and track GitHub issues through a clean dashboard interface.",
    image: issuetracker,
    live: "https://fatematz.github.io/Assignment-5/",
    github: "https://github.com/fatematz/Assignment-5",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    challenges:
      "Building a fully functional auth flow and dynamic issue management using only vanilla JavaScript — without any framework — required careful DOM manipulation and state tracking using localStorage. Replicating GitHub's UI fidelity with pure CSS was also time-intensive.",
    futurePlans:
      "Rebuild with React for better component architecture, integrate the real GitHub REST API to pull live issues, and add label filtering, priority sorting, and drag-and-drop issue reordering.",
  },
];

const Projects = () => {
  const router = useRouter();

  return (
    <section id="projects" className="py-10 md:py-10 bg-[#0d0d0d]">
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
              key={project.id}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 group
                ${
                  project.featured
                    ? "border-[#e63946]/25 bg-[#111111] hover:border-[#e63946]/50"
                    : "border-white/[0.06] bg-[#111111] hover:border-[#e63946]/30"
                }`}
            >
              {/* Project Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 text-[11px] font-mono text-[#e63946] bg-[#0d0d0d]/80 border border-[#e63946]/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    Featured
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <h3 className="text-[20px] font-bold text-[#f1f1f1] group-hover:text-[#e63946] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[15px] text-[#707070] leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="pt-2 border-t border-white/[0.06]">
                  {/* ✅ Modal নেই — সরাসরি নতুন page-এ যাবে */}
                  <button
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="w-full text-center text-[13px] font-semibold text-white bg-[#e63946] hover:bg-[#c1121f] px-4 py-2 rounded-full transition-all duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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