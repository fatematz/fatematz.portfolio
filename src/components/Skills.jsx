"use client";

import { useState } from "react";

const skills = {
  Frontend: [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    { name: "HeroUI", icon: null, customIcon: "HeroUI" },
    {
      name: "daisyUI",
      icon: "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
 
    {
      name: "Better Auth",
      icon: "https://github.com/better-auth.png",
      customIcon: null,
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "Netlify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],
};

const CustomIcon = ({ type }) => {
  if (type === "HeroUI")
    return (
      <div className="w-12 h-12 rounded-xl bg-black border border-white/20 flex items-center justify-center">
        <span className="text-white font-bold text-[18px] tracking-tight">
          UI
        </span>
      </div>
    );

  if (type === "BetterAuth")
    return (
      <div className="w-12 h-12 rounded-xl bg-black border border-white/20 flex items-center justify-center">
        <span className="text-white font-bold text-[13px] tracking-tight text-center leading-tight">
          BA
        </span>
      </div>
    );

  return null;
};

const TechStack = () => {
  const [active, setActive] = useState("Frontend");

  return (
    <section id="techstack" className="pb-10 md:pb-20 scroll-mt-24">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
        <div className="text-center mb-12">
        
          <h2 className="text-4xl font-bold text-[#f1f1f1] mb-3">
            Tech <span className="text-[#e63946]">Stack</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#e63946] mx-auto" />
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-1 bg-[#1a1a1a] border border-white/[0.06] rounded-2xl p-1">
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`text-[16px] font-medium px-6 py-2 rounded-full transition-all duration-200 cursor-pointer
                  ${
                    active === tab
                      ? "bg-[#e63946] text-white"
                      : "text-[#a0a0a0] hover:text-[#f1f1f1]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills[active].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl border border-white/[0.06] bg-[#111111] hover:border-[#e63946]/30 hover:bg-[#e63946]/[0.04] transition-all duration-200 group cursor-default"
            >
              {skill.icon ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              ) : (
                <div className="group-hover:scale-110 transition-transform duration-200">
                  <CustomIcon type={skill.customIcon} />
                </div>
              )}
              <span className="text-[16px] font-medium text-[#a0a0a0] group-hover:text-[#f1f1f1] transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
