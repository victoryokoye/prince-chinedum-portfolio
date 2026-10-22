import React, { useState, useEffect } from 'react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState<string>('Tue, Oct 14 • 10:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [company, setCompany] = useState('');
  const [scheduled, setScheduled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slots = [
    'Tue, Oct 14 • 10:00 AM',
    'Tue, Oct 14 • 2:30 PM',
    'Wed, Oct 15 • 11:00 AM',
    'Wed, Oct 15 • 4:00 PM',
    'Thu, Oct 16 • 1:00 PM',
    'Fri, Oct 17 • 3:30 PM',
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduled(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#030712]/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl bg-[#071220]/95 relative text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close scheduling modal"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {scheduled ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[32px]">event_available</span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
              Discovery Briefing Reserved
            </h3>
            <p className="font-['Manrope'] text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              A calendar reservation request for <strong className="text-[#e9c176]">{selectedSlot}</strong> has been created. A briefing agenda and video conference invitation will be dispatched to <strong className="text-white">{clientEmail}</strong> shortly.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#e9c176]">
                Executive Advisory
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white mt-1">
                Schedule Strategic Consultation
              </h3>
              <p className="font-['Manrope'] text-xs sm:text-sm text-slate-400 mt-1">
                30-Minute Confidential Discovery Session with Prince Chinedum
              </p>
            </div>

            <form onSubmit={handleBook} className="space-y-4">
              <div>
                <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block mb-2">
                  Select Preferred Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {slots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded-xl text-xs font-['JetBrains_Mono'] border text-left transition-all min-h-[44px] cursor-pointer ${
                        selectedSlot === slot
                          ? 'border-[#e9c176] bg-[#e9c176]/15 text-[#e9c176] font-medium shadow-[0_0_12px_rgba(233,193,118,0.2)]'
                          : 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block mb-1">
                    Your Name <span className="text-[#e9c176]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full min-h-[44px] bg-[#030712]/70 border border-white/10 rounded-xl px-3.5 py-2.5 text-white font-['Manrope'] text-base sm:text-xs focus:outline-none focus:border-[#e9c176] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block mb-1">
                    Work Email <span className="text-[#e9c176]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full min-h-[44px] bg-[#030712]/70 border border-white/10 rounded-xl px-3.5 py-2.5 text-white font-['Manrope'] text-base sm:text-xs focus:outline-none focus:border-[#e9c176] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Enterprise or Startup Name"
                  className="w-full min-h-[44px] bg-[#030712]/70 border border-white/10 rounded-xl px-3.5 py-2.5 text-white font-['Manrope'] text-base sm:text-xs focus:outline-none focus:border-[#e9c176] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c9a054] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold hover:shadow-lg transition-all cursor-pointer"
              >
                Confirm Discovery Slot ({selectedSlot})
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
