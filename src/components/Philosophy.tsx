import React from 'react';
import { PHILOSOPHY_QUOTE } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-[#030712] via-[#050e1c] to-[#030712]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#e9c176]"></span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
              [ 03 / CORE PRINCIPLE ]
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            My Philosophy
          </h2>
        </div>

        {/* Standalone Bold Quote Card */}
        <div className="glass-panel p-6 sm:p-10 md:p-14 rounded-3xl relative overflow-hidden border border-[#e9c176]/30 bg-gradient-to-tr from-[#0b132b] via-[#071220] to-[#030712] shadow-2xl">
          <div className="absolute -top-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#e9c176]/10 rounded-full blur-3xl pointer-events-none"></div>

          <span className="material-symbols-outlined text-[#e9c176]/40 text-4xl sm:text-6xl mb-3 sm:mb-4 select-none block">
            format_quote
          </span>

          <blockquote className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug tracking-tight max-w-4xl">
            {PHILOSOPHY_QUOTE.quote}
          </blockquote>

          <div className="mt-6 sm:mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#e9c176] shadow-[0_0_8px_#e9c176]"></div>
              <span className="font-['Space_Grotesk'] text-sm sm:text-base text-[#e9c176] font-semibold">
                {PHILOSOPHY_QUOTE.author}
              </span>
              <span className="text-slate-500">•</span>
              <span className="font-['JetBrains_Mono'] text-[11px] sm:text-xs uppercase tracking-wider text-slate-400">
                {PHILOSOPHY_QUOTE.role}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>First-Principles Strategic Axiom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
