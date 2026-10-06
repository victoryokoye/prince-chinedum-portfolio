import React, { useState } from 'react';
import { INTERESTS } from '../data/portfolioData';
import { InterestItem } from '../types';

interface InterestsProps {
  onSelectInterest?: (interest: InterestItem) => void;
}

export const Interests: React.FC<InterestsProps> = ({ onSelectInterest }) => {
  const [activeInterest, setActiveInterest] = useState<InterestItem | null>(null);

  const handleInterestClick = (item: InterestItem) => {
    setActiveInterest(activeInterest?.id === item.id ? null : item);
    if (onSelectInterest) {
      onSelectInterest(item);
    }
  };

  return (
    <section
      id="interests"
      className="relative w-full pt-8 sm:pt-12 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/[0.08] pb-6">
          <div className="flex flex-col gap-2">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
              [ 04 / FOCUS AREAS ]
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Areas of Interest
            </h3>
          </div>
          <p className="font-['Manrope'] text-xs sm:text-sm text-slate-400 max-w-md">
            Key strategic domains where research, practice, and continuous learning converge to
            create asymmetric advantage.
          </p>
        </div>

        {/* Interactive Interest Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {INTERESTS.map((item) => {
            const isSelected = activeInterest?.id === item.id;

            const iconColors = {
              secondary: 'bg-[#e9c176]/10 text-[#e9c176] group-hover:bg-[#e9c176] group-hover:text-[#071424]',
              sky: 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-400 group-hover:text-[#071424]',
              indigo: 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-400 group-hover:text-[#071424]',
              amber: 'bg-amber-400/10 text-amber-300 group-hover:bg-amber-300 group-hover:text-[#071424]',
              emerald: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#071424]',
            }[item.colorTheme];

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => handleInterestClick(item)}
                className={`glass-panel glass-card-hover p-4 sm:p-5 rounded-2xl flex items-center gap-2.5 sm:gap-3 group border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-[#e9c176] bg-[#13233c]/80 shadow-[0_0_20px_rgba(233,193,118,0.2)]'
                    : 'border-white/[0.06] hover:border-[#e9c176]/40'
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${iconColors}`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {item.iconName}
                  </span>
                </span>
                <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-white font-medium truncate">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Context Card when interest is clicked */}
        {activeInterest && (
          <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-[#e9c176]/40 bg-[#0d1b2e]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-start sm:items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#e9c176]/15 flex items-center justify-center text-[#e9c176] shrink-0 border border-[#e9c176]/30">
                <span className="material-symbols-outlined text-[20px]">
                  {activeInterest.iconName}
                </span>
              </span>
              <div>
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#e9c176] block">
                  Domain Insight // {activeInterest.name}
                </span>
                <p className="font-['Manrope'] text-sm sm:text-base text-slate-200 mt-0.5">
                  {activeInterest.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveInterest(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg text-xs font-['JetBrains_Mono'] uppercase tracking-wider shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
