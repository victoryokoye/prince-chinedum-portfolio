import React from "react";

export const MyApproach: React.FC = () => {
  const steps = [
    {
      phase: "01",
      tag: "DISCOVER & DIAGNOSE",
      title: "Discover",
      desc: "I begin by understanding your business, uncovering hidden operational bottlenecks, and identifying core opportunities.",
      icon: "search",
      color: "secondary",
      themeClasses: {
        border: "hover:border-[#e9c176]/40",
        badge: "text-[#e9c176] bg-[#e9c176]/10 border-[#e9c176]/20",
        iconText: "text-[#e9c176]",
        glow: "from-[#e9c176]/10 to-transparent",
      },
    },
    {
      phase: "02",
      tag: "ARCHITECT & FORMULATE",
      title: "Strategize",
      desc: "I develop practical, high-conviction strategies aligned with your revenue goals, unit economics, and competitive edge.",
      icon: "chess_pawn",
      color: "sky",
      themeClasses: {
        border: "hover:border-sky-400/40",
        badge: "text-sky-400 bg-sky-500/10 border-sky-400/20",
        iconText: "text-sky-400",
        glow: "from-sky-500/10 to-transparent",
      },
    },
    {
      phase: "03",
      tag: "EXECUTE & EXPAND",
      title: "Grow",
      desc: "I help position your business for sustainable growth, scalable execution, and long-term enterprise value realization.",
      icon: "monitoring",
      color: "indigo",
      themeClasses: {
        border: "hover:border-indigo-400/40",
        badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        iconText: "text-indigo-400",
        glow: "from-indigo-500/10 to-transparent",
      },
    },
  ];

  return (
    <section
      id="my_approach"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#030712] border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#e9c176]"></span>
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
                [ 02 / STRATEGIC METHODOLOGY ]
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              My Approach
            </h2>
          </div>
          <p className="font-['Manrope'] text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            A structured, analytical discipline designed to turn ambiguity into execution-ready business clarity.
          </p>
        </div>

        {/* Connected Strategic Progression Pipeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {/* Subtle Horizontal Progression Track for Desktop */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#e9c176]/30 via-sky-400/30 to-indigo-500/30 -z-0 pointer-events-none"></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`glass-panel glass-card-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 relative border border-white/[0.08] ${step.themeClasses.border} transition-all duration-300 z-10 group overflow-hidden`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${step.themeClasses.glow} rounded-full blur-2xl pointer-events-none transition-opacity opacity-50 group-hover:opacity-100`}
              ></div>

              <div className="flex items-center justify-between">
                <span
                  className={`font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border font-semibold ${step.themeClasses.badge}`}
                >
                  Phase // {step.phase}
                </span>

                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span
                    className={`material-symbols-outlined text-[24px] ${step.themeClasses.iconText}`}
                  >
                    {step.icon}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                  {step.tag}
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white group-hover:text-[#e9c176] transition-colors">
                  {step.title}
                </h3>
                <p className="font-['Manrope'] text-sm text-slate-300 leading-relaxed mt-1">
                  {step.desc}
                </p>
              </div>

              {/* Progress step bar indicator */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-slate-500 font-['JetBrains_Mono'] text-[10px]">
                <span>STAGE 0{idx + 1} OF 03</span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:translate-x-1 transition-transform">
                  trending_flat
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
