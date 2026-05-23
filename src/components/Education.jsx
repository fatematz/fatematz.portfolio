const education = [
  {
    level: "HSC",
    institution: "Joypurhat Government Women's College",
    session: "2022 – 2023",
  },
  {
    level: "SSC",
    institution: "Dogachhi High School, Joypurhat",
    session: "2019 – 2020",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-10  bg-[#0d0d0d]">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#f1f1f1] mb-3">
            Educational <span className="text-[#e63946]">Qualification</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#e63946] mx-auto" />
        </div>

        <div className="relative max-w-2xl mx-auto pl-10">

          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-[#e63946]/20" />

          {education.map((edu) => (
            <div key={edu.level} className="relative mb-8">

              {/* dot */}
              <div className="absolute -left-6 top-3 w-3.5 h-3.5 rounded-full bg-[#e63946] border-[3px] border-[#0d0d0d] ring-2 ring-[#e63946]/30" />

              {/* card */}
              <div className="border-l-[3px] border-l-[#e63946] border border-white/[0.06] bg-[#111111] hover:bg-[#e63946]/[0.04] hover:border-[#e63946]/30 rounded-r-xl p-5 transition-all duration-200">
                <span className="text-[11px] font-mono text-[#e63946] tracking-widest bg-[#e63946]/10 border border-[#e63946]/20 px-2 py-0.5 rounded">
                  {edu.level}
                </span>
                <h3 className="text-[16px] font-semibold text-[#f1f1f1] mt-2 mb-1">
                  {edu.institution}
                </h3>
                <p className="text-[13px] text-[#555] flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full border border-[#555] flex items-center justify-center text-[9px]">✓</span>
                  {edu.session}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;