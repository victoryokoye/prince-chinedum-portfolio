import React, { useState, useEffect } from "react";

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(
          Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)),
        );
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about", id: "about", num: "01" },
    { label: "Services", href: "#services", id: "services", num: "02" },
    {
      label: "Case Studies",
      href: "#case_studies",
      id: "case_studies",
      num: "03",
    },
    { label: "Speaking", href: "#speaking", id: "speaking", num: "04" },
    {
      label: "Testimonials",
      href: "#testimonials",
      id: "testimonials",
      num: "05",
    },
    { label: "Contact", href: "#contact", id: "contact", num: "06" },
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
          ? "bg-[#030712]/92 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#030712]/75 backdrop-blur-md border-b border-white/[0.05]"
      }`}
    >
      {/* Laser-thin Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#e9c176] via-[#f3c77c] to-sky-400 transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-secondary"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#e9c176]/20 via-[#071424] to-[#071424] border border-[#e9c176]/30 flex items-center justify-center text-[#e9c176] font-['Space_Grotesk'] font-bold text-sm group-hover:border-[#e9c176] transition-all duration-300 group-hover:scale-105">
            PC
          </div>
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
                className={`font-['JetBrains_Mono'] text-xs uppercase tracking-wider transition-all duration-200 py-1 relative group ${
                  isActive
                    ? "text-[#e9c176] font-medium"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e9c176] shadow-[0_0_8px_#e9c176]"></span>
                )}
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

      {/* Avant-Garde Mobile Dropdown & Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#030712]/98 backdrop-blur-3xl border-b border-white/[0.1] px-6 py-6 overflow-y-auto flex flex-col justify-between z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-[0.25em] text-[#e9c176] mb-2 px-1">
              Navigation Index
            </div>
            <nav className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-['Space_Grotesk'] text-xl py-3.5 border-b border-white/[0.06] flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-[#e9c176] font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-['JetBrains_Mono'] text-xs text-slate-500 font-normal">
                        [{link.num}]
                      </span>
                      <span>{link.label}</span>
                    </div>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#e9c176] shadow-[0_0_8px_#e9c176]"></span>
                    ) : (
                      <span className="material-symbols-outlined text-slate-600 text-[18px]">
                        arrow_forward
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Quick Consultation Trigger on Mobile */}
          <div className="pt-8 pb-4 flex flex-col gap-3">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-slate-300 uppercase tracking-wider">
                  Direct Strategy Desk
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#e9c176] uppercase">
                Open
              </span>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full min-h-[48px] py-3.5 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c59d53] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
            >
              <span>Initiate Strategic Inquiry</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
