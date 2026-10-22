/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { MyApproach } from "./components/MyApproach";
import { CaseStudies } from "./components/CaseStudies";
import { Services } from "./components/Services";
import { Philosophy } from "./components/Philosophy";
import { Speaking } from "./components/Speaking";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ServiceModal } from "./components/ServiceModal";
import { ScheduleModal } from "./components/ScheduleModal";
import { ServiceItem } from "./types";
import { CaseStudyItem } from "./types";
import { CaseStudiesModal } from "./components/CaseStudiesModal";
import Testimonials from "./components/Testimonial";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<CaseStudyItem | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState<boolean>(false);
  const [preselectedArea, setPreselectedArea] = useState<string>(
    "Business Strategy & Problem Solving",
  );
  const [showFloatingMobileBar, setShowFloatingMobileBar] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Mouse spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll listener for floating mobile dock
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingMobileBar(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "my_approach",
      "services",
      "case_studies",
      "speaking",
      "testimonials",
      "contact",
    ];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleInquireFromService = (serviceTitle: string) => {
    // Map service title to form dropdown value
    const mapping: Record<string, string> = {
      "Business Strategy": "Business Strategy & Problem Solving",
      "Business Development": "Business Development & Partnerships",
      "Marketing Strategy": "Marketing & Value Communication",
      "Brand Strategy": "Brand Strategy",
      "Public Speaking & Keynotes": "Public Speaking & Keynote",
      "Public Speaking": "Public Speaking & Keynote",
    };

    const targetArea =
      mapping[serviceTitle] || "Business Strategy & Problem Solving";
    setPreselectedArea(targetArea);

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#030712] text-[#d7e3fa] min-h-screen antialiased selection:bg-[#e9c176] selection:text-[#071424] overflow-x-hidden relative">
      {/* Dynamic Cursor Ambient Spotlight (Desktop only, subtle avant-garde glow) */}
      <div
        className="fixed w-[450px] h-[450px] rounded-full pointer-events-none -z-0 opacity-25 blur-[120px] bg-gradient-to-tr from-[#e9c176]/10 via-sky-500/10 to-transparent transition-transform duration-300 ease-out hidden md:block"
        style={{
          transform: `translate(${mousePos.x - 225}px, ${mousePos.y - 225}px)`,
        }}
      />

      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-0 right-1/4 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-sky-500/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -z-0"></div>
      <div className="absolute top-48 left-0 w-[260px] sm:w-[520px] h-[260px] sm:h-[520px] bg-[#e9c176]/8 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -z-0"></div>
      <div className="absolute top-[1600px] right-0 w-[360px] sm:w-[720px] h-[360px] sm:h-[720px] bg-indigo-600/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none -z-0"></div>

      {/* Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#030712] relative">
        <Hero />
        <About />
        <MyApproach />
        <Services onSelectService={(service) => setSelectedService(service)} />
        <CaseStudies
          onSelectCaseStudy={(case_study) => setSelectedCaseStudy(case_study)}
        />
        <Speaking />
        <Philosophy />
        <Testimonials />
        <Contact
          preselectedService={preselectedArea}
          onOpenSchedule={() => setScheduleModalOpen(true)}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Mobile Executive Quick Action Dock */}
      {showFloatingMobileBar && (
        <div className="sm:hidden fixed bottom-4 inset-x-4 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="glass-panel p-2 rounded-2xl border border-[#e9c176]/35 bg-[#071220]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 pl-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-slate-200 font-medium truncate">
                Advisory Open
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setScheduleModalOpen(true)}
                className="px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-slate-200 font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider font-semibold active:scale-95 transition-transform"
              >
                Book Call
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c9a054] text-[#071424] font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest font-bold shadow-md active:scale-95 transition-transform"
              >
                Inquire
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireFromService}
      />

      <CaseStudiesModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onInquire={handleInquireFromService}
      />

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </div>
  );
}
