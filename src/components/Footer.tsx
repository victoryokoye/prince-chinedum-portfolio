import React from "react";
import { MONOGRAM_IMG, CONTACT_INFO } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#02050c] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Brand & Bio */}
          <div className="space-y-4 sm:col-span-2">
            <div className="flex items-center gap-3">
              <div className="font-['Space_Grotesk'] text-base sm:text-lg text-white font-semibold">
                Prince Chinedum • Business Strategist
              </div>
            </div>

            <p className="font-['Manrope'] text-sm text-slate-400 leading-relaxed max-w-md">
              Helping businesses solve complex challenges through strategy,
              innovation, and effective communication. Turning ideas into
              opportunities and challenges into sustainable growth.
            </p>
          </div>

          {/* Capabilities Quick Links */}
          <div className="space-y-3">
            <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e9c176] font-medium">
              Capabilities
            </div>
            <div className="flex flex-col space-y-2 font-['Manrope'] text-xs text-slate-400">
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="hover:text-[#e9c176] transition-colors text-left"
              >
                Business Strategy
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="hover:text-[#e9c176] transition-colors text-left"
              >
                Business Development
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="hover:text-[#e9c176] transition-colors text-left"
              >
                Marketing Strategy
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="hover:text-[#e9c176] transition-colors text-left"
              >
                Brand Strategy
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="hover:text-[#e9c176] transition-colors text-left"
              >
                Public Speaking
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="hover:text-[#e9c176] transition-colors text-left"
              >
                Technology Strategy
              </button>
            </div>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e9c176] font-medium">
              Connect
            </div>
            <div className="space-y-2 font-['Manrope'] text-xs text-slate-400">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-white font-mono break-all hover:text-[#e9c176] transition-colors block"
              >
                {CONTACT_INFO.email}
              </a>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-xs text-slate-400 hover:text-[#e9c176] transition-colors uppercase"
                >
                  LinkedIn
                </a>
                <a
                  href={CONTACT_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-xs text-slate-400 hover:text-[#e9c176] transition-colors uppercase"
                >
                  Twitter / X
                </a>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-xs text-slate-400 hover:text-[#e9c176] transition-colors uppercase"
                >
                  Instagram
                </a>
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-xs text-slate-400 hover:text-[#e9c176] transition-colors uppercase"
                >
                  Facebook
                </a>
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="font-['JetBrains_Mono'] text-xs text-slate-400 hover:text-[#e9c176] transition-colors uppercase cursor-pointer"
                >
                  Work Together
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 font-['JetBrains_Mono'] text-xs text-slate-500 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} Prince Chinedum. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => scrollTo("#about")}
              className="hover:text-[#e9c176] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#services")}
              className="hover:text-[#e9c176] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#case_studies")}
              className="hover:text-[#e9c176] transition-colors cursor-pointer"
            >
              Case Studies
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#speaking")}
              className="hover:text-[#e9c176] transition-colors cursor-pointer"
            >
              Speaking
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="hover:text-[#e9c176] transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              title="Return to top"
              className="hover:text-[#e9c176] flex items-center gap-1 transition-colors"
            >
              <span>Top</span>
              <span className="material-symbols-outlined text-[14px]">
                arrow_upward
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
