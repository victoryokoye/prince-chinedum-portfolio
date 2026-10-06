import React from 'react';
import { ABOUT_PORTRAIT_IMG } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-[#030712] via-[#060e1d] to-[#030712]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#e9c176]"></span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
              [ 01 / PROFILE &amp; PERSPECTIVE ]
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl tracking-tight leading-tight">
            About Me
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Framed Portrait & Identity Strip */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl group border border-white/10 hover:border-[#e9c176]/30 transition-all max-w-md mx-auto lg:max-w-none w-full">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#060b14]">
                <img
                  src={ABOUT_PORTRAIT_IMG}
                  alt="Prince Chinedum, Business Strategist"
                  className="w-full h-full object-cover object-top filter contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1d] via-transparent to-transparent opacity-85"></div>

                {/* Floating Identification Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-[#030712]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-['Space_Grotesk'] text-sm sm:text-base font-semibold text-white">
                      Prince Chinedum
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] text-[#e9c176] uppercase tracking-wider">
                      Business Strategist
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-400/20 uppercase tracking-wider shrink-0 font-medium">
                    STRATEGY &amp; TECH
                  </span>
                </div>
              </div>
            </div>

            {/* Core Foundation Strip */}
            <div className="glass-panel p-5 rounded-2xl flex flex-col gap-3 relative overflow-hidden max-w-md mx-auto lg:max-w-none w-full border border-white/10">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#e9c176] font-semibold">
                Core Foundation
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 font-['JetBrains_Mono'] text-xs text-slate-300">
                  Computer Science Background
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#e9c176]/10 border border-[#e9c176]/30 font-['JetBrains_Mono'] text-xs text-[#e9c176]">
                  Technology &amp; Business Fusion
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-400/20 font-['JetBrains_Mono'] text-xs text-sky-400">
                  Purpose-Led Innovation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Capability Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-6">
              <p className="font-['Manrope'] text-lg sm:text-xl text-white font-medium leading-relaxed">
                I'm Prince Chinedum, a Business Strategist passionate about helping businesses
                identify opportunities, solve complex challenges, and build sustainable growth.
              </p>
              <p className="font-['Manrope'] text-sm sm:text-base text-slate-300 leading-relaxed">
                With a background in Computer Science, I bring a unique perspective that combines
                technology, business thinking, and strategic problem solving. My experience has
                shown me that businesses don't succeed simply because they have great products, they
                succeed because they have the right strategy, communicate their value effectively,
                and make informed decisions.
              </p>
              <p className="font-['Manrope'] text-sm sm:text-base text-slate-300 leading-relaxed">
                I enjoy working with entrepreneurs, startups, and organizations to uncover
                challenges, develop practical solutions, and create strategies that drive
                meaningful results.
              </p>
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border-l-2 border-[#e9c176]">
                <p className="font-['Manrope'] text-sm sm:text-base text-[#e9c176] font-normal italic">
                  “I believe every business has the potential to grow when innovation is guided by
                  purpose and strategy.”
                </p>
              </div>
            </div>

            {/* Capability Alignment Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-1.5 hover:border-[#e9c176]/30 transition-colors">
                <span className="material-symbols-outlined text-[#e9c176] text-[22px]">
                  memory
                </span>
                <span className="font-['Space_Grotesk'] text-sm text-white font-semibold">
                  Analytical Rigor
                </span>
                <span className="font-['Manrope'] text-xs text-slate-400">
                  Deconstructing root causes systematically
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-1.5 hover:border-sky-400/30 transition-colors">
                <span className="material-symbols-outlined text-sky-400 text-[22px]">
                  schema
                </span>
                <span className="font-['Space_Grotesk'] text-sm text-white font-semibold">
                  Practical Solutions
                </span>
                <span className="font-['Manrope'] text-xs text-slate-400">
                  Actionable plans over abstract theories
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-1.5 hover:border-indigo-400/30 transition-colors">
                <span className="material-symbols-outlined text-indigo-400 text-[22px]">
                  flag
                </span>
                <span className="font-['Space_Grotesk'] text-sm text-white font-semibold">
                  Purpose &amp; Outcome
                </span>
                <span className="font-['Manrope'] text-xs text-slate-400">
                  Driving measurable, lasting transformation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
