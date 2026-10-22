import React from "react";
import { CASE_STUDIES } from "../data/portfolioData";
import { CaseStudyItem } from "../types";

interface CaseStudiesProps {
  onSelectCaseStudy: (case_study: CaseStudyItem) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({
  onSelectCaseStudy,
}) => {
  return (
    <section
      id="case_studies"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#030712] border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#e9c176]"></span>
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
                [ 04 / SELECTED CASE STUDIES ]
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Case Studies
            </h2>
          </div>
          <p className="font-['Manrope'] text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            Real engagements. Strategic thinking. Measurable organizational outcomes.
          </p>
        </div>

        {/* Case Studies Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CASE_STUDIES.map((case_study) => {
            // Theme classes
            const themeClasses = {
              secondary: {
                tag: "text-[#e9c176]",
                iconBg:
                  "bg-[#e9c176]/10 text-[#e9c176] border-[#e9c176]/30 group-hover:bg-[#e9c176] group-hover:text-[#071424]",
                border: "border-[#e9c176]/20",
                glow: "from-[#e9c176]/10",
              },
              sky: {
                tag: "text-sky-400",
                iconBg:
                  "bg-sky-500/10 text-sky-400 border-sky-400/20 group-hover:bg-sky-400 group-hover:text-[#071424]",
                border: "border-sky-400/20",
                glow: "from-sky-500/10",
              },
              indigo: {
                tag: "text-indigo-400",
                iconBg:
                  "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-400 group-hover:text-[#071424]",
                border: "border-indigo-500/20",
                glow: "from-indigo-500/10",
              },
              amber: {
                tag: "text-amber-300",
                iconBg:
                  "bg-amber-400/10 text-amber-300 border-amber-400/20 group-hover:bg-amber-300 group-hover:text-[#071424]",
                border: "border-amber-400/20",
                glow: "from-amber-400/10",
              },
              emerald: {
                tag: "text-emerald-400",
                iconBg:
                  "bg-emerald-500/10 text-emerald-400 border-emerald-400/20 group-hover:bg-emerald-400 group-hover:text-[#071424]",
                border: "border-emerald-400/20",
                glow: "from-emerald-500/10",
              },
              blue: {
                tag: "text-blue-400",
                iconBg:
                  "bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-400 group-hover:text-[#071424]",
                border: "border-blue-500/20",
                glow: "from-blue-500/10",
              },
            }[case_study.colorTheme];

            return (
              <div
                key={case_study.id}
                onClick={() => onSelectCaseStudy(case_study)}
                className={`glass-panel glass-card-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between gap-6 relative group cursor-pointer transition-all duration-300 border ${themeClasses.border} overflow-hidden`}
              >
                {/* Subtle Ambient Hover Glow */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${themeClasses.glow} to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity`}
                ></div>

                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span
                      className={`font-['JetBrains_Mono'] text-xs font-mono tracking-widest uppercase ${themeClasses.tag}`}
                    >
                      Case Study // {case_study.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 ${themeClasses.iconBg}`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {case_study.iconName}
                      </span>
                    </div>
                  </div>

                  {/* Strategic Debrief Preview Tag */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-slate-400 uppercase tracking-wider">
                      Strategic Focus
                    </span>
                    <span className={`font-['JetBrains_Mono'] text-[10px] uppercase font-semibold ${themeClasses.tag}`}>
                      Verified Outcome
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-white font-bold leading-snug group-hover:text-[#e9c176] transition-colors">
                      {case_study.title}
                    </h3>
                    <p className="font-['Manrope'] text-sm text-slate-300 leading-relaxed mt-2.5">
                      {case_study.description}
                    </p>
                  </div>
                </div>

                {/* Bottom trigger row */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-['JetBrains_Mono'] relative z-10">
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider">
                    Executive Briefing
                  </span>
                  <span className="text-[#e9c176] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Study</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
