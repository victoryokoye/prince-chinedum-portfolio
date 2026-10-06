/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ScheduleModal } from './components/ScheduleModal';
import { ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState<boolean>(false);
  const [preselectedArea, setPreselectedArea] = useState<string>(
    'Business Strategy & Problem Solving'
  );

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'philosophy', 'interests', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
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
      'Business Strategy': 'Business Strategy & Problem Solving',
      'Business Development': 'Business Development & Partnerships',
      'Marketing Strategy': 'Marketing & Value Communication',
      'Brand Strategy': 'Brand Strategy',
      'Public Speaking & Keynotes': 'Public Speaking & Keynote',
    };

    const targetArea = mapping[serviceTitle] || 'Business Strategy & Problem Solving';
    setPreselectedArea(targetArea);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#030712] text-[#d7e3fa] min-h-screen antialiased selection:bg-[#e9c176] selection:text-[#071424] overflow-x-hidden relative">
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
        <Services onSelectService={(service) => setSelectedService(service)} />
        <Philosophy />
        <Interests />
        <Contact
          preselectedService={preselectedArea}
          onOpenSchedule={() => setScheduleModalOpen(true)}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireFromService}
      />

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </div>
  );
}
