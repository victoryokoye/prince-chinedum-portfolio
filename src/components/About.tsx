import React from "react";
import { ABOUT_PORTRAIT_IMG } from "../data/portfolioData";

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
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-white/10 flex items-center justify-between flex-wrap gap-2">
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
                  Analytical Thinking
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#e9c176]/10 border border-[#e9c176]/30 font-['JetBrains_Mono'] text-xs text-[#e9c176]">
                  Business & Technology
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
                I'm Prince Chinedum, a Business Strategist passionate about
                helping businesses solve complex challenges, uncover new
                opportunities, and achieve sustainable growth.
              </p>
              <p className="font-['Manrope'] text-sm sm:text-base text-slate-300 leading-relaxed">
                I believe every business has the potential to grow, but growth
                rarely happens by chance. It comes from making better decisions,
                solving the right problems, and building strategies that create
                lasting value. That's the perspective I bring to every
                conversation, project, and opportunity.
              </p>
              <p className="font-['Manrope'] text-sm sm:text-base text-slate-300 leading-relaxed">
                My journey began in Computer Science, where I developed a strong
                foundation in analytical thinking and technology. Over time, I
                discovered that my greatest strength wasn't simply building
                technology, it was understanding business challenges,
                communicating ideas, and developing strategies that help
                organizations move forward with clarity and confidence.
              </p>
              <p className="font-['Manrope'] text-sm sm:text-base text-slate-300 leading-relaxed">
                Today, I work with entrepreneurs, startups, and growing
                businesses to transform challenges into opportunities through
                strategic thinking, innovation, and practical solutions. Whether
                it's refining a business strategy, identifying new
                opportunities, or helping leaders think differently about
                growth, my goal is always the same: to create meaningful impact.
              </p>
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border-l-2 border-[#e9c176]">
                <p className="font-['Manrope'] text-sm sm:text-base text-[#e9c176] font-normal italic">
                  “I believe every business has the potential to grow when
                  innovation is guided by purpose and strategy.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
