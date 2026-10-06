import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
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
                [ 02 / SERVICES &amp; EXPERTISE ]
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              WHAT I DO
            </h2>
          </div>
          <p className="font-['Manrope'] text-sm text-slate-400 max-w-md">
            Strategic advisory and execution capabilities tailored to solve complex challenges,
            accelerate growth, and amplify enterprise value.
          </p>
        </div>

        {/* What I Do Bento Grid (5 Core Capabilities) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service) => {
            const isWide = service.id === 'public-speaking';

            // Color configs
            const themeClasses = {
              secondary: {
                tag: 'text-[#e9c176]',
                iconBg: 'bg-[#e9c176]/10 text-[#e9c176] border-[#e9c176]/30 group-hover:bg-[#e9c176] group-hover:text-[#071424]',
                border: 'border-[#e9c176]/20',
                dot: 'bg-[#e9c176]',
              },
              sky: {
                tag: 'text-sky-400',
                iconBg: 'bg-sky-500/10 text-sky-400 border-sky-400/20 group-hover:bg-sky-400 group-hover:text-[#071424]',
                border: 'border-white/[0.08]',
                dot: 'bg-sky-400',
              },
              indigo: {
                tag: 'text-indigo-400',
                iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-400 group-hover:text-[#071424]',
                border: 'border-white/[0.08]',
                dot: 'bg-indigo-400',
              },
              amber: {
                tag: 'text-amber-300',
                iconBg: 'bg-amber-400/10 text-amber-300 border-amber-400/20 group-hover:bg-amber-300 group-hover:text-[#071424]',
                border: 'border-white/[0.08]',
                dot: 'bg-amber-300',
              },
              emerald: {
                tag: 'text-emerald-400',
                iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20 group-hover:bg-emerald-400 group-hover:text-[#071424]',
                border: 'border-white/[0.08]',
                dot: 'bg-emerald-400',
              },
            }[service.colorTheme];

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className={`glass-panel glass-card-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 relative group cursor-pointer transition-all duration-300 border ${themeClasses.border} ${
                  isWide ? 'md:col-span-2' : ''
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

                {isWide ? (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-['JetBrains_Mono'] text-xs text-slate-300 group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-slate-400">
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${themeClasses.dot}`}
                    ></span>
                    <span className="truncate">{service.tags.join(' • ')}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
