import React from 'react';
import { HERO_PORTRAIT_IMG, PILLARS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14 lg:gap-16">
        {/* Main Hero Composition: Typography Left + Unboxed Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 z-10 text-left">
            {/* Micro Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] w-fit shadow-sm">
              <span className="material-symbols-outlined text-[#e9c176] text-[16px]">
                insights
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300">
                Prince Chinedum • Business Strategist
              </span>
            </div>

            {/* Editorial Tagline Headline */}
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.25rem] sm:leading-[1.14] lg:leading-[1.08] font-bold tracking-tight text-white">
              Solving complex business challenges through{' '}
              <span className="text-[#c5a059] italic font-serif font-normal">
                strategy
              </span>
              , <span className="text-[#38bdf8]">innovation</span> &amp; clarity.
            </h1>

            {/* Supporting Text */}
            <p className="font-['Manrope'] text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Advising entrepreneurs, startups, and growing enterprises on high-impact strategic
              decisions, technology alignment, and sustainable value realization.
            </p>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center min-h-[50px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c9a054] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_30px_rgba(233,193,118,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group text-center"
              >
                <span>Let's Work Together</span>
                <span className="material-symbols-outlined text-[18px] ml-2 group-hover:translate-x-1.5 transition-transform duration-200">
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Highlight Pills / Key Differentiators */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 border-t border-white/[0.06]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e9c176]/10 border border-[#e9c176]/20 text-[#e9c176] font-['JetBrains_Mono'] text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                Computer Science Background
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 font-['JetBrains_Mono'] text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                Technology × Business Strategy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 font-['JetBrains_Mono'] text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                <span className="material-symbols-outlined text-[14px]">target</span>
                Purpose-Driven Growth
              </span>
            </div>
          </div>

          {/* Right Column: Unboxed Floating Portrait Seamlessly Blending into Midnight Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Subtle Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e9c176]/15 via-sky-500/10 to-transparent rounded-full filter blur-[80px] sm:blur-[100px] pointer-events-none"></div>

            {/* Floating Status Badge */}
            <div className="absolute -top-3 left-2 sm:-top-4 sm:left-4 z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#091322]/90 backdrop-blur-md border border-white/10 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-200 font-medium">
                Available for Strategy Advisory
              </span>
            </div>

            {/* Floating Metric Card */}
            <div className="absolute bottom-6 right-2 sm:bottom-8 sm:right-2 z-20 flex flex-col gap-1 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#071220]/90 backdrop-blur-xl border border-[#e9c176]/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e9c176] text-[16px] sm:text-[18px]">
                  verified
                </span>
                <span className="font-['Space_Grotesk'] text-base sm:text-xl font-bold text-white tracking-tight">
                  100% Bespoke
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400">
                Strategic Problem-Solving
              </span>
            </div>

            {/* Seamless Unboxed Portrait */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[490px] select-none pointer-events-auto group">
              <img
                src={HERO_PORTRAIT_IMG}
                alt="Prince Chinedum, Business Strategist"
                className="w-full h-auto object-cover object-top portrait-unboxed filter contrast-[1.06] brightness-105 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                loading="eager"
              />
              {/* Bottom gradient fader for 100% seamless transition into midnight page background */}
              <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Pillar Highlights Row (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 sm:pt-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel glass-card-hover p-5 sm:p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group border border-white/[0.06] hover:border-[#e9c176]/30"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-xl transition-all duration-300 ${
                  pillar.glowColor === 'sky'
                    ? 'bg-sky-400/5 group-hover:bg-sky-400/15'
                    : pillar.glowColor === 'indigo'
                    ? 'bg-indigo-500/5 group-hover:bg-indigo-500/15'
                    : 'bg-[#e9c176]/5 group-hover:bg-[#e9c176]/15'
                }`}
              ></div>
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider">
                  {pillar.category}
                </span>
                <span className="material-symbols-outlined text-[#e9c176] text-[20px]">
                  {pillar.iconName}
                </span>
              </div>
              <div className="font-['Space_Grotesk'] text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight pt-1">
                {pillar.title}
              </div>
              <div className="font-['Manrope'] text-xs text-slate-400">{pillar.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
