import React, { useEffect } from "react";
import { CaseStudyItem } from "../types";

interface CaseStudiesModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
  onInquire?: (caseStudyTitle: string) => void;
}

export const CaseStudiesModal: React.FC<CaseStudiesModalProps> = ({
  caseStudy,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#030712]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl bg-[#071220]/95 relative text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-6 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#e9c176]/15 flex items-center justify-center text-[#e9c176] border border-[#e9c176]/30 shrink-0">
            <span className="material-symbols-outlined text-[26px]">
              {caseStudy.iconName}
            </span>
          </div>
          <div>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#e9c176]">
              Case Study // {caseStudy.number}
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white leading-tight">
              {caseStudy.title}
            </h3>
          </div>
        </div>

        {/* Narrative Description & Strategic Debrief */}
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              01 // The Core Challenge
            </h4>
            <p className="font-['Manrope'] text-slate-200 text-sm sm:text-base leading-relaxed">
              {caseStudy.details?.challenge || caseStudy.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e9c176] mb-1.5 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176]"></span>
              02 // Strategic Diagnosis &amp; Approach
            </h4>
            <p className="font-['Manrope'] text-slate-200 text-sm sm:text-base leading-relaxed">
              {caseStudy.details?.approach || caseStudy.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-sky-400 mb-1.5 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              03 // Solution &amp; Recommendations
            </h4>
            <p className="font-['Manrope'] text-slate-200 text-sm sm:text-base leading-relaxed">
              {caseStudy.details?.solution || caseStudy.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-400/20">
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-emerald-400 mb-1.5 font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              04 // Measurable Organizational Impact
            </h4>
            <p className="font-['Manrope'] text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
              {caseStudy.details?.impact || caseStudy.description}
            </p>
          </div>

          {/* Action Footer */}
          {onInquire && (
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-['JetBrains_Mono'] text-xs text-slate-400">
                Facing a similar organizational bottleneck?
              </span>
              <button
                type="button"
                onClick={() => {
                  onInquire(caseStudy.title);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c9a054] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-semibold hover:shadow-[0_0_20px_rgba(233,193,118,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Similar Mandate</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
