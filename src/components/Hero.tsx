import React from "react";
import { HERO_PORTRAIT_IMG, PILLARS } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const handleCtaClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const contactElem = document.querySelector(targetId);
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      {/* Subtle Blueprint Grid Pattern Behind Hero */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14 lg:gap-16">
        {/* Main Hero Composition: Typography Left + Unboxed Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          {/* Left Column: Editorial Headline & Value Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-7 z-10 text-left">
            {/* Top Micro-Tag Strip with Coordinates */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-200 font-medium">
                  Available for Strategy Advisory
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-widest hidden sm:inline-block">
                // EXECUTIVE ADVISORY
              </span>
            </div>
            {/* Mobile View hero image */}
            <div className="lg:col-span-5 relative flex md:hidden items-center justify-center lg:justify-end mt-4 lg:mt-0">
              {/* Ambient Strategic Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e9c176]/20 via-sky-500/15 to-transparent rounded-full filter blur-[90px] sm:blur-[120px] pointer-events-none"></div>

              {/* Floating Top Status Badge */}
              <div className="absolute top-2 left-2 sm:top-0 sm:left-4 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#071220]/90 backdrop-blur-md border border-white/10 shadow-2xl">
                <span className="material-symbols-outlined text-[#e9c176] text-[15px]">
                  verified_user
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-200 font-medium">
                  Executive Fit // Q4 Active
                </span>
              </div>

              {/* Floating Metric Card */}
              <div className="absolute bottom-4 right-2 sm:bottom-6 sm:right-2 z-20 flex flex-col gap-0.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#071220]/95 backdrop-blur-xl border border-[#e9c176]/35 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px]">
                    verified
                  </span>
                  <span className="font-['Space_Grotesk'] text-base sm:text-xl font-bold text-white tracking-tight">
                    100% Bespoke
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[9px] sm:text-[10px] uppercase tracking-widest text-[#e9c176]/80 font-mono">
                  Strategic Problem-Solving
                </span>
              </div>

              {/* Seamless Unboxed Portrait */}
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] select-none pointer-events-auto group">
                <img
                  src={HERO_PORTRAIT_IMG}
                  alt="Prince Chinedum, Business Strategist"
                  className="w-full h-auto object-cover object-top portrait-unboxed filter contrast-[1.08] brightness-105 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
                  loading="eager"
                />
                {/* Bottom gradient fader for 100% seamless transition into midnight page background */}
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Editorial Tagline Headline */}
            <h1 className="font-['Space_Grotesk'] text-[2.1rem] xs:text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.25rem] leading-[1.12] sm:leading-[1.1] font-bold tracking-tight text-white">
              Solving complex business challenges through{" "}
              <span className="text-[#e9c176] italic font-serif font-bold">
                strategy
              </span>
              , <span className="text-sky-400">innovation</span> &amp;{" "}
              <span className="text-white underline decoration-[#e9c176]/40 underline-offset-4 decoration-2">
                clarity
              </span>
              .
            </h1>

            {/* Supporting Text */}
            <p className="font-['Manrope'] text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Helping entrepreneurs, startups, and growing businesses solve
              complex challenges, make strategic decisions, and achieve
              sustainable growth.
            </p>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contact"
                onClick={(e) => handleCtaClick(e, "#contact")}
                className="inline-flex items-center justify-center min-h-[50px] px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#e9c176] via-[#f3c77c] to-[#c9a054] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_30px_rgba(233,193,118,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group text-center"
              >
                <span>Let's Work Together</span>
                <span className="material-symbols-outlined text-[18px] ml-2 group-hover:translate-x-1.5 transition-transform duration-200">
                  arrow_forward
                </span>
              </a>

              <a
                href="#services"
                onClick={(e) => handleCtaClick(e, "#services")}
                className="inline-flex items-center justify-center min-h-[50px] px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#e9c176]/40 hover:bg-white/[0.07] text-slate-200 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-medium transition-all duration-200 text-center"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>

            {/* Highlight Strategic Markers */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-4 border-t border-white/[0.08]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e9c176]/10 border border-[#e9c176]/25 text-[#e9c176] font-['JetBrains_Mono'] text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  terminal
                </span>
                Purpose Driven Growth
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-400 font-['JetBrains_Mono'] text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  bolt
                </span>
                Strategy &amp; Innovation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 font-['JetBrains_Mono'] text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  target
                </span>
                Analytical Thinker
              </span>
            </div>
          </div>

          {/* Right Column: Unified Unboxed Portrait with Floating Telemetry Badges */}
          <div className="lg:col-span-5 relative hidden md:flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Ambient Strategic Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e9c176]/20 via-sky-500/15 to-transparent rounded-full filter blur-[90px] sm:blur-[120px] pointer-events-none"></div>

            {/* Floating Top Status Badge */}
            <div className="absolute top-2 left-2 sm:top-0 sm:left-4 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#071220]/90 backdrop-blur-md border border-white/10 shadow-2xl">
              <span className="material-symbols-outlined text-[#e9c176] text-[15px]">
                verified_user
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-200 font-medium">
                Executive Fit // Q4 Active
              </span>
            </div>

            {/* Floating Metric Card */}
            <div className="absolute bottom-4 right-2 sm:bottom-6 sm:right-2 z-20 flex flex-col gap-0.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#071220]/95 backdrop-blur-xl border border-[#e9c176]/35 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e9c176] text-[18px]">
                  verified
                </span>
                <span className="font-['Space_Grotesk'] text-base sm:text-xl font-bold text-white tracking-tight">
                  100% Bespoke
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[9px] sm:text-[10px] uppercase tracking-widest text-[#e9c176]/80 font-mono">
                Strategic Problem-Solving
              </span>
            </div>

            {/* Seamless Unboxed Portrait */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] select-none pointer-events-auto group">
              <img
                src={HERO_PORTRAIT_IMG}
                alt="Prince Chinedum, Business Strategist"
                className="w-full h-auto object-cover object-top portrait-unboxed filter contrast-[1.08] brightness-105 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
                loading="eager"
              />
              {/* Bottom gradient fader for 100% seamless transition into midnight page background */}
              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Pillar Highlights Row (4 Cards) with Coordinates and Elevated Glass Polish */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 sm:pt-4">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel glass-card-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between gap-3 relative overflow-hidden group border border-white/[0.08] hover:border-[#e9c176]/35"
            >
              <div
                className={`absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl transition-all duration-300 pointer-events-none ${
                  pillar.glowColor === "sky"
                    ? "bg-sky-400/5 group-hover:bg-sky-400/15"
                    : pillar.glowColor === "indigo"
                      ? "bg-indigo-500/5 group-hover:bg-indigo-500/15"
                      : "bg-[#e9c176]/5 group-hover:bg-[#e9c176]/15"
                }`}
              ></div>

              <div className="flex items-center justify-between text-slate-400">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#e9c176]/90 font-semibold">
                  [0{idx + 1}] // {pillar.category}
                </span>
                <span className="material-symbols-outlined text-[#e9c176] text-[20px] group-hover:scale-110 transition-transform">
                  {pillar.iconName}
                </span>
              </div>

              <div>
                <div className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {pillar.title}
                </div>
                <div className="font-['Manrope'] text-xs text-slate-400 mt-1">
                  {pillar.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
