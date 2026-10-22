import React, { useState } from "react";
import { SPEAKING } from "../data/portfolioData";
import { SpeakingItem } from "../types";

interface SpeakingProps {
  onSelectInterest?: (interest: SpeakingItem) => void;
}

export const Speaking: React.FC<SpeakingProps> = ({ onSelectInterest }) => {
  const [activeSpeakingItem, setActiveSpeakingItem] =
    useState<SpeakingItem | null>(null);

  const handleSpeakingClick = (item: SpeakingItem) => {
    const nextItem = activeSpeakingItem?.id === item.id ? null : item;
    setActiveSpeakingItem(nextItem);
    if (onSelectInterest && nextItem) {
      onSelectInterest(nextItem);
    }
  };

  const handleBookKeynote = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.querySelector("#contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="speaking"
      className="relative w-full pt-8 sm:pt-12 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#030712] border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/[0.08] pb-6">
          <div className="flex flex-col gap-2">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
              [ 05 / KEYNOTES &amp; SPEAKING ]
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Public Speaking &amp; Masterclasses
            </h3>
          </div>
          <p className="font-['Manrope'] text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            Inspiring better thinking. Equipping leaders. Driving transformative business conversations.
          </p>
        </div>

        {/* Featured Keynote Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 group shadow-2xl">
          <div className="relative w-full h-[18rem] sm:h-[22rem] md:h-[26rem] overflow-hidden">
            <img
              src="/images/public-speaking-image.jpg"
              alt="Prince Chinedum delivering keynote presentation"
              className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-transparent to-transparent"></div>

            {/* In-Image Strategic Badges */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#071220]/80 backdrop-blur-md border border-white/10 font-['JetBrains_Mono'] text-[10px] sm:text-xs text-[#e9c176] uppercase tracking-wider font-medium">
                Keynotes • Panels • Executive Offsites
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] text-[#e9c176] uppercase tracking-widest font-semibold block mb-1">
                  Stage &amp; Executive War-Room
                </span>
                <p className="font-['Space_Grotesk'] text-lg sm:text-2xl font-bold text-white leading-snug">
                  "Great talks don't just inspire—they equip leaders with the clarity to take immediate action."
                </p>
              </div>

              <a
                href="#contact"
                onClick={handleBookKeynote}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c59d53] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-semibold hover:shadow-lg transition-all shrink-0 self-start sm:self-auto cursor-pointer"
              >
                <span>Book for Speaking</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Speaking Pills Grid */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400">
              Select a Keynote Topic to Inspect Scope
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#e9c176]">
              {SPEAKING.length} Core Themes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {SPEAKING.map((item) => {
              const isSelected = activeSpeakingItem?.id === item.id;

              const iconColors = {
                secondary:
                  "bg-[#e9c176]/10 text-[#e9c176] group-hover:bg-[#e9c176] group-hover:text-[#071424]",
                sky: "bg-sky-500/10 text-sky-400 group-hover:bg-sky-400 group-hover:text-[#071424]",
                indigo:
                  "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-400 group-hover:text-[#071424]",
                amber:
                  "bg-amber-400/10 text-amber-300 group-hover:bg-amber-300 group-hover:text-[#071424]",
                emerald:
                  "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#071424]",
              }[item.colorTheme];

              return (
                <div
                  key={item.id}
                  onClick={() => handleSpeakingClick(item)}
                  className={`glass-panel glass-card-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between gap-4 group border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#e9c176] bg-[#13233c]/90 shadow-[0_0_25px_rgba(233,193,118,0.25)] ring-1 ring-[#e9c176]/50"
                      : "border-white/[0.08] hover:border-[#e9c176]/40"
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${iconColors}`}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {item.iconName}
                        </span>
                      </span>

                      <span
                        className={`font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${
                          isSelected
                            ? "bg-[#e9c176] text-[#071424] border-[#e9c176] font-semibold"
                            : "border-white/10 text-slate-400 group-hover:border-[#e9c176]/30 group-hover:text-[#e9c176]"
                        }`}
                      >
                        {isSelected ? "Active Topic" : "Inspect"}
                      </span>
                    </div>

                    <h4 className="font-['Space_Grotesk'] text-lg sm:text-xl text-white font-bold leading-snug group-hover:text-[#e9c176] transition-colors">
                      {item.name}
                    </h4>

                    <p className="font-['Manrope'] text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-['JetBrains_Mono'] text-slate-400">
                    <span>Keynote / Seminar</span>
                    <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#e9c176]">
                      {isSelected ? "check" : "add"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Context Card when interest is clicked */}
        {activeSpeakingItem && (
          <div className="p-6 rounded-2xl glass-panel border border-[#e9c176]/50 bg-gradient-to-r from-[#0d1b2e] to-[#071220] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 animate-in fade-in slide-in-from-top-2 duration-300 shadow-2xl">
            <div className="flex items-start sm:items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-[#e9c176]/20 flex items-center justify-center text-[#e9c176] shrink-0 border border-[#e9c176]/40">
                <span className="material-symbols-outlined text-[24px]">
                  {activeSpeakingItem.iconName}
                </span>
              </span>
              <div>
                <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#e9c176] font-semibold block">
                  Featured Keynote Track // {activeSpeakingItem.name}
                </span>
                <p className="font-['Manrope'] text-sm sm:text-base text-slate-200 mt-1 leading-relaxed">
                  {activeSpeakingItem.description} Available as a 45-minute keynote address, a half-day executive war-room, or an interactive founder masterclass.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
              <a
                href="#contact"
                onClick={handleBookKeynote}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c59d53] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-semibold hover:shadow-md transition-all cursor-pointer"
              >
                Inquire For This Topic
              </a>
              <button
                type="button"
                onClick={() => setActiveSpeakingItem(null)}
                className="text-slate-400 hover:text-white px-3 py-2 rounded-lg text-xs font-['JetBrains_Mono'] uppercase tracking-wider border border-white/10 hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
