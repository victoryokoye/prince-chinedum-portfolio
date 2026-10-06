import React, { useEffect } from 'react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#030712]/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl bg-[#071220]/95 relative text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-6 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#e9c176]/15 flex items-center justify-center text-[#e9c176] border border-[#e9c176]/30 shrink-0">
            <span className="material-symbols-outlined text-[26px]">
              {service.iconName}
            </span>
          </div>
          <div>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#e9c176]">
              Service // {service.number}
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Narrative Description */}
        <div className="space-y-6">
          <div>
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Strategic Scope &amp; Focus
            </h4>
            <p className="font-['Manrope'] text-slate-200 text-sm sm:text-base leading-relaxed">
              {service.details?.overview || service.description}
            </p>
          </div>

          {/* Deliverables */}
          {service.details?.deliverables && (
            <div className="space-y-3">
              <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e9c176] font-semibold">
                Core Deliverables
              </h4>
              <ul className="space-y-2">
                {service.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-['Manrope'] text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176] mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Measurable Outcomes */}
          {service.details?.outcomes && (
            <div className="space-y-3 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Tangible Business Impact
              </h4>
              <ul className="space-y-2">
                {service.details.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-['Manrope'] text-xs sm:text-sm text-slate-300">
                    <span className="material-symbols-outlined text-emerald-400 text-[16px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-['JetBrains_Mono'] text-xs text-slate-400">
              Custom Advisory Engagement Available
            </span>
            <button
              type="button"
              onClick={() => {
                onInquire(service.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c9a054] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-semibold hover:shadow-[0_0_20px_rgba(233,193,118,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Inquire About This Service</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
