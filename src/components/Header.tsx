import React, { useState, useEffect } from "react";
import { MONOGRAM_IMG } from "../data/portfolioData";

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "What I Do", href: "#services", id: "services" },
    { label: "Philosophy", href: "#philosophy", id: "philosophy" },
    { label: "Interests", href: "#interests", id: "interests" },
    { label: "Let's Work Together", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl"
          : "bg-[#030712]/75 backdrop-blur-md border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-secondary"
        >
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] tracking-wider text-sm sm:text-base font-semibold text-white group-hover:text-[#e9c176] transition-colors leading-tight">
              PRINCE CHINEDUM
            </span>
            <span className="font-['JetBrains_Mono'] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#909098]">
              Business Strategist
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-['JetBrains_Mono'] text-xs uppercase tracking-wider transition-colors duration-200 py-1 ${
                  isActive
                    ? "text-[#e9c176] border-b-2 border-[#e9c176]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="relative inline-flex items-center justify-center min-h-[44px] px-3.5 sm:px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#e9c176] to-[#c59d53] text-[#071424] font-['JetBrains_Mono'] text-[11px] sm:text-xs uppercase tracking-wider font-semibold hover:shadow-[0_0_20px_rgba(233,193,118,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Let's Work Together</span>
            <span className="material-symbols-outlined text-[16px] ml-1.5 hidden xs:inline-block">
              arrow_forward
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/10 text-white hover:text-[#e9c176] transition-colors focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071424]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-['JetBrains_Mono'] text-sm uppercase tracking-wider py-2.5 border-b border-white/[0.05] flex items-center justify-between ${
                    isActive
                      ? "text-[#e9c176] font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]"></span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
