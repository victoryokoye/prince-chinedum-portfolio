import { useState } from "react";

import { TESTIMONIALS } from "../data/portfolioData";

/* ---------- Types ---------- */

type Accent = "gold" | "blue" | "green";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string; // optional image URL; initials are used when omitted
  accent: Accent;
  outcome?: string; // short, concrete result shown under the quote
}

/* ---------- Accent styles ---------- */
/* Tailwind needs full class names, so each accent is spelled out. */

const ACCENT: Record<
  Accent,
  { text: string; border: string; bg: string; ring: string; bar: string }
> = {
  gold: {
    text: "text-amber-400",
    border: "border-amber-400/40",
    bg: "bg-amber-400/10",
    ring: "ring-amber-400/60",
    bar: "bg-amber-400",
  },
  blue: {
    text: "text-sky-400",
    border: "border-sky-400/40",
    bg: "bg-sky-400/10",
    ring: "ring-sky-400/60",
    bar: "bg-sky-400",
  },
  green: {
    text: "text-emerald-400",
    border: "border-emerald-400/40",
    bg: "bg-emerald-400/10",
    ring: "ring-emerald-400/60",
    bar: "bg-emerald-400",
  },
};

/* ---------- Small pieces ---------- */

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Avatar = ({ t, size = "md" }: { t: Testimonial; size?: "md" | "lg" }) => {
  const dims = size === "lg" ? "h-14 w-14 text-base" : "h-10 w-10 text-sm";
  const a = ACCENT[t.accent];

  return t.avatar ? (
    <img
      src={t.avatar}
      alt={t.name}
      className={`${dims} shrink-0 rounded-full object-cover ring-2 ${a.ring}`}
    />
  ) : (
    <span
      aria-hidden="true"
      className={`${dims} ${a.bg} ${a.text} flex shrink-0 items-center justify-center rounded-full border ${a.border} font-semibold`}
    >
      {initials(t.name)}
    </span>
  );
};

const QuoteMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M0 24V14.4C0 6.2 4.4 1.2 12 0l1.2 3.6C9 5 7 7.6 6.8 11H13v13H0Zm19 0V14.4C19 6.2 23.4 1.2 31 0l1.2 3.6C28 5 26 7.6 25.8 11H32v13H19Z" />
  </svg>
);

/* ---------- Section ---------- */

export default function Testimonials() {
  const [activeId, setActiveId] = useState<string>(TESTIMONIALS[0].id);

  const featured =
    TESTIMONIALS.find((t) => t.id === activeId) ?? TESTIMONIALS[0];
  const others = TESTIMONIALS.filter((t) => t.id !== featured.id);
  const fa = ACCENT[featured.accent];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#030712] border-t border-white/[0.04]"
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-8 sm:gap-12">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/[0.08] pb-6">
          <div className="flex flex-col gap-2">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
              [ 06 / CLIENT VOICES &amp; TESTIMONIALS ]
            </span>
            <h3
              id="testimonials-heading"
              className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              Testimonials
            </h3>
          </div>
          <p className="font-['Manrope'] text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            What executives, founders, and leaders say about strategic collaboration.
          </p>
        </div>

        {/* Featured testimonial */}
        <figure
          key={featured.id}
          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#071424] via-[#09172c] to-[#040914] p-6 sm:p-10 md:p-12 shadow-2xl animate-[fadeIn_.35s_ease-out]`}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#e9c176]/5 rounded-full blur-3xl pointer-events-none"></div>
          <span
            aria-hidden="true"
            className={`absolute inset-y-0 left-0 w-1.5 ${fa.bar}`}
          />
          <QuoteMark className={`mb-4 sm:mb-6 h-6 w-8 ${fa.text} opacity-80`} />

          <blockquote className="max-w-3xl text-lg sm:text-xl md:text-2xl font-['Space_Grotesk'] leading-relaxed text-slate-100">
            "{featured.quote}"
          </blockquote>

          {featured.outcome && (
            <p
              className={`mt-6 inline-flex items-center gap-2 rounded-full border ${fa.border} ${fa.bg} px-4 py-1.5 font-['JetBrains_Mono'] text-xs font-semibold ${fa.text}`}
            >
              <span className="material-symbols-outlined text-[15px]">verified</span>
              <span>{featured.outcome}</span>
            </p>
          )}

          <figcaption className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
            <Avatar t={featured} size="lg" />
            <div>
              <p className="font-['Space_Grotesk'] font-bold text-white text-base sm:text-lg">
                {featured.name}
              </p>
              <p className="font-['Manrope'] text-xs sm:text-sm text-slate-400">
                {featured.role}, <span className="text-[#e9c176]">{featured.company}</span>
              </p>
            </div>
          </figcaption>
        </figure>

        {/* Other testimonials: click to feature */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-slate-400 uppercase tracking-wider">
            <span>More Perspectives (Click to Feature)</span>
            <span className="text-[#e9c176]">{others.length} Additional Reviews</span>
          </div>
          <ul className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {others.map((t) => {
              const a = ACCENT[t.accent];
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(t.id)}
                    aria-label={`Show testimonial from ${t.name}`}
                    className="group flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 text-left transition-all duration-300 hover:border-[#e9c176]/40 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
                  >
                    <div>
                      <QuoteMark className={`mb-3 h-4 w-5 ${a.text} opacity-70`} />
                      <p className="line-clamp-4 font-['Manrope'] text-xs sm:text-sm leading-relaxed text-slate-300">
                        "{t.quote}"
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-4 w-full">
                      <Avatar t={t} />
                      <div className="min-w-0">
                        <p className="truncate font-['Space_Grotesk'] text-sm font-semibold text-white group-hover:text-[#e9c176] transition-colors">
                          {t.name}
                        </p>
                        <p className="truncate font-['Manrope'] text-xs text-slate-400">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Keyframes for the featured-quote swap. Move into tailwind.config if you prefer. */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[fadeIn"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
