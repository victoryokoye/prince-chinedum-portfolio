import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactProps {
  preselectedService?: string;
  onOpenSchedule?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService, onOpenSchedule }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    organization: '',
    collaborationArea: preselectedService || 'Business Strategy & Problem Solving',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, collaborationArea: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      collaborationArea: 'Business Strategy & Problem Solving',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#e9c176]"></span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-[#e9c176] font-medium">
              [ 05 / GET IN TOUCH ]
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl tracking-tight leading-tight">
            Let's Work Together
          </h2>
          <div className="space-y-2 max-w-2xl">
            <p className="font-['Manrope'] text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you're building a new business, growing an existing one, or looking for
              fresh strategic insights, I'd love to connect and explore how we can create
              meaningful impact together.
            </p>
            <p className="font-['Manrope'] text-sm sm:text-base text-[#e9c176] font-medium">
              Let's turn ideas into opportunities and challenges into growth.
            </p>
          </div>
        </div>

        {/* Two-Column Inquiry Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 md:p-10 rounded-3xl flex flex-col gap-6 relative shadow-2xl border border-white/10 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
              <span className="font-['JetBrains_Mono'] text-sm text-white uppercase tracking-wider font-semibold">
                Direct Inquiry
              </span>
              <span className="font-['JetBrains_Mono'] text-xs text-[#e9c176] font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                ACTIVE • DIRECT RECEPTION
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#e9c176]/10 border border-[#e9c176]/30 text-slate-200 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e9c176]/20 flex items-center justify-center text-[#e9c176]">
                    <span className="material-symbols-outlined text-[24px]">task_alt</span>
                  </div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                      Inquiry Dispatched Successfully
                    </h4>
                    <p className="font-['JetBrains_Mono'] text-xs text-[#e9c176]">
                      Sent to Prince Chinedum's Executive Desk
                    </p>
                  </div>
                </div>

                <p className="font-['Manrope'] text-sm text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your
                  inquiry regarding{' '}
                  <span className="text-[#e9c176]">{formData.collaborationArea}</span> has been
                  received. Prince Chinedum or an advisory lead will review your scope and follow
                  up directly at <strong className="text-white">{formData.email}</strong> within
                  24–48 hours.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                  {onOpenSchedule && (
                    <button
                      type="button"
                      onClick={onOpenSchedule}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c9a054] text-[#071424] text-xs font-['JetBrains_Mono'] uppercase tracking-wider font-semibold hover:shadow-lg transition-all"
                    >
                      Schedule Discovery Call
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block">
                      Full Name <span className="text-[#e9c176]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className="w-full min-h-[44px] bg-[#030712]/70 border border-white/10 rounded-xl px-4 py-3 text-white font-['Manrope'] text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block">
                      Email Address <span className="text-[#e9c176]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full min-h-[44px] bg-[#030712]/70 border border-white/10 rounded-xl px-4 py-3 text-white font-['Manrope'] text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block">
                      Organization / Venture
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      placeholder="Company or Startup Name"
                      className="w-full min-h-[44px] bg-[#030712]/70 border border-white/10 rounded-xl px-4 py-3 text-white font-['Manrope'] text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block">
                      Area of Collaboration
                    </label>
                    <select
                      value={formData.collaborationArea}
                      onChange={(e) =>
                        setFormData({ ...formData, collaborationArea: e.target.value })
                      }
                      className="w-full min-h-[44px] bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-white font-['Manrope'] text-sm focus:outline-none focus:border-[#e9c176] transition-colors"
                    >
                      <option value="Business Strategy & Problem Solving">
                        Business Strategy &amp; Problem Solving
                      </option>
                      <option value="Business Development & Partnerships">
                        Business Development &amp; Partnerships
                      </option>
                      <option value="Marketing & Value Communication">
                        Marketing &amp; Value Communication
                      </option>
                      <option value="Brand Strategy">Brand Strategy</option>
                      <option value="Public Speaking & Keynote">
                        Public Speaking &amp; Keynote
                      </option>
                      <option value="General Strategic Advisory">
                        General Strategic Advisory
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 block">
                    Message / Project Scope <span className="text-[#e9c176]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your business, current challenge, or the opportunity you are exploring..."
                    className="w-full min-h-[120px] bg-[#030712]/70 border border-white/10 rounded-xl p-4 text-white font-['Manrope'] text-sm focus:outline-none focus:border-[#e9c176] transition-colors placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] py-4 rounded-xl bg-gradient-to-r from-[#e9c176] to-[#c9a054] text-[#071424] font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_25px_rgba(233,193,118,0.4)] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#071424] border-t-transparent rounded-full animate-spin"></span>
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Advisory Access */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Direct Professional Channels Module */}
            <div className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col gap-4 border border-white/10 shadow-xl">
              <span className="font-['JetBrains_Mono'] text-xs text-[#e9c176] uppercase tracking-widest font-medium">
                Connect Directly
              </span>
              <div className="space-y-2.5 font-['Manrope'] text-sm">
                {/* Email with copy-to-clipboard action */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#e9c176]/40 transition-colors group min-h-[44px]">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0">
                      mail
                    </span>
                    <span className="text-white text-xs group-hover:text-[#e9c176] transition-colors truncate">
                      Email Inquiries
                    </span>
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="font-['JetBrains_Mono'] text-xs text-slate-400 font-mono break-all text-right">
                      {CONTACT_INFO.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-[#e9c176] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {copiedEmail ? 'check' : 'content_copy'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#e9c176]/40 transition-colors group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e9c176] text-[18px]">
                      link
                    </span>
                    <span className="text-white text-xs group-hover:text-[#e9c176] transition-colors">
                      LinkedIn Profile
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-slate-400 font-mono flex items-center gap-1">
                    {CONTACT_INFO.linkedinHandle}
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </span>
                </a>

                {/* X / Twitter */}
                <a
                  href={CONTACT_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#e9c176]/40 transition-colors group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e9c176] text-[18px]">
                      alternate_email
                    </span>
                    <span className="text-white text-xs group-hover:text-[#e9c176] transition-colors">
                      X / Twitter
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-slate-400 font-mono flex items-center gap-1">
                    {CONTACT_INFO.twitterHandle}
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Strategy Discovery Session Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col gap-4 border border-[#e9c176]/25 bg-gradient-to-br from-[#071424] to-[#040914] shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#e9c176]">
                  Advisory Protocol
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 font-['JetBrains_Mono'] text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Q4 Availability Open
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-['Space_Grotesk'] text-base font-semibold text-white">
                  30-Minute Executive Strategy Discovery
                </h4>
                <p className="font-['Manrope'] text-xs text-slate-300 leading-relaxed">
                  Confidential briefing to diagnose strategic bottlenecks, examine technology
                  leverage, and evaluate advisory fit.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenSchedule}
                className="w-full py-3 rounded-xl border border-[#e9c176]/40 bg-white/[0.02] hover:bg-[#e9c176]/10 text-[#e9c176] font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                <span>Select Advisory Consultation Slot</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
