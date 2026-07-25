"use client";

import { useEffect, useState } from "react";
import { RotateCcw, GitFork, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const GITHUB_USERNAME = "fatematz";

const LEVEL_COLORS = [
  "bg-white/[0.04] border border-white/[0.06]",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353]",
];

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function buildWeeks(contributions) {
  const weeks = [];
  let week = [];

  const firstDay = new Date(contributions[0].date).getDay();
  for (let i = 0; i < firstDay; i++) week.push(null);

  contributions.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function getMonthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const firstValid = week.find(Boolean);
    if (!firstValid) return;
    const month = new Date(firstValid.date).getMonth();
    if (month !== lastMonth) {
      labels.push({ index: i, name: MONTH_NAMES[month] });
      lastMonth = month;
    }
  });
  return labels;
}

const GithubContributions = () => {
  const [data, setData] = useState(null);
  const [repoCount, setRepoCount] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`).then((r) => r.json()),
    ])
      .then(([contribData, userData]) => {
        if (cancelled) return;
        setData(contribData);
        setRepoCount(userData.public_repos ?? null);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (failed) return null;

  const weeks = data ? buildWeeks(data.contributions) : [];
  const monthLabels = data ? getMonthLabels(weeks) : [];
  const totalContributions = data?.total?.lastYear ?? 0;

  return (
    <section id="github" className="pb-10 md:pb-20">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#f1f1f1] mb-3">
            GitHub <span className="text-[#e63946]">Contributions</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#e63946] mx-auto mb-4" />
          <p className="text-[16px] text-[#a0a0a0] max-w-xl mx-auto">
            My daily coding activity on GitHub. Every commit tells a story of learning and growth.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-white/[0.06] bg-[#111111] p-6 md:p-10">
          {!data ? (
            <div className="text-center text-[#a0a0a0] py-16">Loading contributions…</div>
          ) : (
            <>
              <div className="overflow-x-auto pb-2">
                <div className="inline-flex flex-col gap-2 min-w-[720px]">
                  <div className="flex gap-1 pl-8">
                    {weeks.map((_, i) => (
                      <div key={i} className="w-3 text-[11px] text-[#a0a0a0]">
                        {monthLabels.find((m) => m.index === i)?.name ?? ""}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    <div className="flex flex-col gap-1 pr-2 text-[11px] text-[#a0a0a0] justify-between h-[88px]">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                    </div>
                    <div className="flex gap-1">
                      {weeks.map((week, wi) => (
                        <div key={wi} className="flex flex-col gap-1">
                          {week.map((day, di) => (
                            <div
                              key={di}
                              title={day ? `${day.count} contributions on ${day.date}` : undefined}
                              className={`w-3 h-3 rounded-sm ${
                                day ? LEVEL_COLORS[day.level] : "bg-transparent"
                              }`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-white/[0.06] text-[14px] text-[#a0a0a0]">
                <span>{totalContributions.toLocaleString()} contributions in the last year</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  {LEVEL_COLORS.map((c, i) => (
                    <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="rounded-xl border border-white/[0.06] bg-[#1a1a1a] p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#e63946]/10 flex items-center justify-center flex-shrink-0">
                    <RotateCcw size={20} className="text-[#e63946]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#f1f1f1]">{totalContributions.toLocaleString()}+</div>
                    <div className="text-[11px] text-[#a0a0a0] uppercase tracking-wide">Total Contributions</div>
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-[#1a1a1a] p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#e63946]/10 flex items-center justify-center flex-shrink-0">
                    <GitFork size={20} className="text-[#e63946]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#f1f1f1]">{repoCount ?? "—"}</div>
                    <div className="text-[11px] text-[#a0a0a0] uppercase tracking-wide">Repositories</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#f1f1f1] border border-white/[0.12] hover:border-[#e63946]/40 hover:bg-[#e63946]/[0.06] px-6 py-3 rounded-full transition-all duration-200"
                >
                  View Full Profile
                  <ExternalLink size={16} />
                </a>
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default GithubContributions;
