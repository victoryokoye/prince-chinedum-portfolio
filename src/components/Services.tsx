import React from "react";
import { SERVICES } from "../data/portfolioData";
import { ServiceItem } from "../types";

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#e9c176]"></span>
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
                [ 03 / SERVICES &amp; EXPERTISE ]
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              WHAT I DO
            </h2>
          </div>
          <p className="font-['Manrope'] text-sm text-slate-400 max-w-md">
            {/* Strategic advisory and execution capabilities tailored to solve
            complex challenges, accelerate growth, and amplify enterprise value. */}
            Helping entrepreneurs, startups, and growing businesses solve
            complex challenges, make strategic decisions, and achieve
            sustainable growth
          </p>
        </div>

        {/* What I Do Bento Grid (5 Core Capabilities) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service) => {
            const isWide = service.id === "";

            // Color configs
            const themeClasses = {
              secondary: {
                tag: "text-[#e9c176]",
                iconBg:
                  "bg-[#e9c176]/10 text-[#e9c176] border-[#e9c176]/30 group-hover:bg-[#e9c176] group-hover:text-[#071424]",
                border: "border-[#e9c176]/20",
                dot: "bg-[#e9c176]",
              },
              sky: {
                tag: "text-sky-400",
                iconBg:
                  "bg-sky-500/10 text-sky-400 border-sky-400/20 group-hover:bg-sky-400 group-hover:text-[#071424]",
                border: "border-white/[0.08]",
                dot: "bg-sky-400",
              },
              indigo: {
                tag: "text-indigo-400",
                iconBg:
                  "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-400 group-hover:text-[#071424]",
                border: "border-white/[0.08]",
                dot: "bg-indigo-400",
              },
              amber: {
                tag: "text-amber-300",
                iconBg:
                  "bg-amber-400/10 text-amber-300 border-amber-400/20 group-hover:bg-amber-300 group-hover:text-[#071424]",
                border: "border-white/[0.08]",
                dot: "bg-amber-300",
              },
              emerald: {
                tag: "text-emerald-400",
                iconBg:
                  "bg-emerald-500/10 text-emerald-400 border-emerald-400/20 group-hover:bg-emerald-400 group-hover:text-[#071424]",
                border: "border-white/[0.08]",
                dot: "bg-emerald-400",
              },
              blue: {
                tag: "text-blue-400",
                iconBg:
                  "bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-400 group-hover:text-[#071424]",
                border: "border-white/[0.08]",
                dot: "bg-blue-400",
              },
            }[service.colorTheme];

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className={`glass-panel glass-card-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 relative group cursor-pointer transition-all duration-300 border ${themeClasses.border} ${
                  isWide ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span
                      className={`font-['JetBrains_Mono'] text-xs font-mono tracking-widest uppercase ${themeClasses.tag}`}
                    >
                      Service // {service.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${themeClasses.iconBg}`}
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        {service.iconName}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-white font-medium leading-snug group-hover:text-[#e9c176] transition-colors">
                      {service.title}
                    </h3>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-[#e9c176] group-hover:translate-x-1 transition-all text-[18px]">
                      open_in_new
                    </span>
                  </div>

                  <p className="font-['Manrope'] text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 font-['JetBrains_Mono'] text-[11px] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 2 && (
                      <span className="px-2 py-1 rounded-md bg-white/[0.02] border border-white/5 font-['JetBrains_Mono'] text-[11px] text-slate-400">
                        +{service.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#e9c176] uppercase tracking-wider group-hover:underline flex items-center gap-1 shrink-0">
                    Scope <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Partner Callout Card - Fully Mobile Responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl glass-panel border border-[#e9c176]/25 bg-gradient-to-br from-[#071424] via-[#0d1f38] to-[#040914] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e9c176]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-1.5 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e9c176]"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
                Strategic Alliance
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white tracking-tight">
              Need a strategic partner?
            </h3>
            <p className="font-['Manrope'] text-sm text-slate-300 leading-relaxed max-w-xl">
              Whether you're solving a business challenge, exploring new opportunities, or preparing for your next stage of growth, I'd be glad to help.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="relative inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-gradient-to-r from-[#e9c176] via-[#f3c77c] to-[#c59d53] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_25px_rgba(233,193,118,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shrink-0 text-center z-10"
          >
            <span>Let's Work Together</span>
            <span className="material-symbols-outlined text-[16px] ml-2">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
