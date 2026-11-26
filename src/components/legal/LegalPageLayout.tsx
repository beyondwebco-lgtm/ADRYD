'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PolicyDocument } from '@/data/legal/types';
import { LEGAL_CONFIG } from '@/config/legal';
import {
  FileText,
  Shield,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  ExternalLink,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface LegalPageLayoutProps {
  policy: PolicyDocument;
}

export default function LegalPageLayout({ policy }: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(policy.sections[0]?.id || '');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionElements = policy.sections
        .map((s) => ({
          id: s.id,
          el: document.getElementById(s.id),
        }))
        .filter((item) => item.el !== null);

      const scrollPos = window.scrollY + 160;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [policy.sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const otherPolicies = LEGAL_CONFIG.policies.filter((p) => p.slug !== policy.slug);

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-28 pb-24 relative overflow-hidden">
      {/* Subdued Sinuous Background Ambiance (Ensures complete legal text legibility) */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#0A9BE0]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#B4F000]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Breadcrumbs & Title */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#94A3B8] uppercase font-bold tracking-wider mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0A9BE0]">Legal Centre</span>
            <span>/</span>
            <span className="text-[#B4F000]">{policy.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#041220] border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#B4F000]" />
                <span>ADRYD LEGAL FRAMEWORK</span>
              </div>
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
                {policy.title}
              </h1>
              <p className="text-base sm:text-lg text-[#E2E8F0] font-normal leading-relaxed">
                {policy.leadSummary}
              </p>
            </div>

            <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs text-[#94A3B8] font-semibold">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#0A9BE0]" />
                <span>Effective: {policy.effectiveDate}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <FileText className="w-3.5 h-3.5 text-[#B4F000]" />
                <span>Version {policy.version}</span>
              </div>
            </div>
          </div>

          {/* Legal Status Notice Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-[#041220]/70 border border-[#0A9BE0]/30 backdrop-blur-md flex items-start gap-3 text-xs sm:text-sm text-[#E2E8F0]/90">
            <AlertCircle className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Statutory & Operational Note:</strong> ADRYD Mobility Technologies operates electric mobility brand promotional activities in Hyderabad, Telangana. This policy document governs user interactions, campaign commitments, and participation terms. Final formal policies are subject to ongoing legal review under Indian statutory law.
            </p>
          </div>
        </div>

        {/* Mobile Table of Contents Accordion */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#041220] border border-[#0A9BE0]/30 text-left font-bold text-sm text-white"
            aria-expanded={mobileTocOpen}
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#B4F000]" />
              <span>Table of Contents ({policy.sections.length} Sections)</span>
            </span>
            {mobileTocOpen ? <ChevronUp className="w-4 h-4 text-[#0A9BE0]" /> : <ChevronDown className="w-4 h-4 text-[#0A9BE0]" />}
          </button>

          {mobileTocOpen && (
            <div className="mt-2 p-4 rounded-2xl bg-[#000000]/90 border border-white/10 space-y-1.5 text-xs max-h-80 overflow-y-auto">
              {policy.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setMobileTocOpen(false)}
                  className={`block py-1.5 px-3 rounded-lg transition-colors ${
                    activeSection === sec.id
                      ? 'bg-[#0A9BE0]/20 text-[#B4F000] font-bold border-l-2 border-[#B4F000]'
                      : 'text-[#E2E8F0]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {sec.number && <span className="opacity-60 mr-2">{sec.number}</span>}
                  {sec.title}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Main 2-Column Grid (Desktop Sticky Sidebar + Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Sticky Sidebar (Desktop TOC + Policy Switcher + Grievance Card) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="sticky top-32 space-y-6">
              
              {/* Document TOC Navigation */}
              <div className="p-6 rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#0A9BE0]/25 shadow-xl max-h-[50vh] flex flex-col">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#0A9BE0] mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#B4F000]" />
                  <span>On This Page</span>
                </h3>
                <nav className="space-y-1 overflow-y-auto pr-1 text-xs">
                  {policy.sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={`flex items-start gap-2 py-2 px-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-[#0A9BE0]/20 text-[#B4F000] font-bold shadow-[0_0_15px_rgba(10,155,224,0.15)] border-l-2 border-[#B4F000]'
                            : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {sec.number && <span className="opacity-70 shrink-0">{sec.number}</span>}
                        <span className="leading-snug">{sec.title}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Other Legal Policies Quick Switcher */}
              <div className="p-5 rounded-3xl bg-[#000000]/60 border border-white/10 text-xs space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider flex items-center justify-between">
                  <span>Other Policies</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8]" />
                </h4>
                <div className="grid grid-cols-1 gap-1.5 max-h-40 overflow-y-auto pr-1">
                  {otherPolicies.map((op) => (
                    <Link
                      key={op.id}
                      href={op.href}
                      className="text-[#94A3B8] hover:text-[#B4F000] py-1 px-2 rounded-lg hover:bg-white/5 transition-colors truncate block"
                    >
                      {op.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Privacy & Grievance Request Trigger Card */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#041220] to-[#000000] border border-[#0A9BE0]/30 space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-[#B4F000] font-bold">
                  <HelpCircle className="w-4 h-4" />
                  <span>Need Grievance Redressal?</span>
                </div>
                <p className="text-[#94A3B8] leading-relaxed">
                  Have a question, data correction request, campaign dispute, or privacy concern? Submit a formal ticket to our Compliance Desk.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('open-grievance-modal'));
                    }
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0A9BE0]/20 hover:bg-[#0A9BE0]/30 text-[#0A9BE0] hover:text-white font-bold transition-all text-center border border-[#0A9BE0]/40"
                >
                  Submit Grievance / Privacy Request
                </button>
              </div>

            </div>
          </aside>

          {/* Right Column: Policy Content */}
          <main className="lg:col-span-8 space-y-12">
            {policy.sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-36 p-6 sm:p-8 rounded-3xl bg-[#041220]/40 backdrop-blur-xl border border-white/10 hover:border-[#0A9BE0]/30 transition-colors space-y-5"
              >
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    {section.number && (
                      <span className="text-xs font-bold text-[#0A9BE0] uppercase tracking-wider">
                        Section {section.number}
                      </span>
                    )}
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                      {section.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 shrink-0">
                    #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                {/* Paragraph Content */}
                <div className="space-y-3.5 text-sm sm:text-base text-[#E2E8F0]/90 leading-relaxed font-normal">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Bullet Points (if any) */}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2.5 pt-2">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-[#E2E8F0] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B4F000] shrink-0 mt-2 shadow-[0_0_8px_#B4F000]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subsections (if any) */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    {section.subsections.map((sub) => (
                      <div key={sub.id} id={sub.id} className="p-4 rounded-2xl bg-[#000000]/60 border border-white/5 space-y-2">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-[#0A9BE0]">
                          {sub.title}
                        </h3>
                        <div className="space-y-2 text-xs sm:text-sm text-[#E2E8F0]/80 leading-relaxed">
                          {sub.content.map((sp, spIdx) => (
                            <p key={spIdx}>{sp}</p>
                          ))}
                        </div>
                        {sub.bullets && sub.bullets.length > 0 && (
                          <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-[#E2E8F0]/80">
                            {sub.bullets.map((sb, sbIdx) => (
                              <li key={sbIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0A9BE0] shrink-0 mt-1.5" />
                                <span>{sb}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Bottom Section: Official Grievance Contact Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#041220] via-[#000000] to-[#041220] border border-[#0A9BE0]/40 space-y-4 text-sm">
              <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-[#B4F000]" />
                <span>Grievance Redressal & Official Correspondence</span>
              </h3>
              <p className="text-[#E2E8F0]/80 leading-relaxed">
                For questions regarding this policy, dispute reconciliation, privacy rights, or incident notifications under the Information Technology Act and DPDP Act, contact:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-[#E2E8F0]">
                <div>
                  <span className="text-[#94A3B8] block">Officer Designation:</span>
                  <strong className="text-white">{LEGAL_CONFIG.grievanceOfficer.title}</strong>
                </div>
                <div>
                  <span className="text-[#94A3B8] block">Corporate Entity:</span>
                  <strong className="text-white">{LEGAL_CONFIG.entityName}</strong>
                </div>
                <div>
                  <span className="text-[#94A3B8] block">Official Email:</span>
                  <a href={`mailto:${LEGAL_CONFIG.grievanceEmail}`} className="text-[#0A9BE0] hover:text-[#B4F000] transition-colors font-bold">
                    {LEGAL_CONFIG.grievanceEmail}
                  </a>
                </div>
                <div>
                  <span className="text-[#94A3B8] block">Registered Address:</span>
                  <span className="text-white">{LEGAL_CONFIG.registeredOffice}</span>
                </div>
              </div>
            </div>

            {/* Related Policies Footer Strip */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Related Legal & Operational Policies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {otherPolicies.slice(0, 4).map((rp) => (
                  <Link
                    key={rp.id}
                    href={rp.href}
                    className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0A9BE0]/40 transition-all group flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-[#B4F000] transition-colors">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8] line-clamp-1">{rp.shortDescription}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#0A9BE0] group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

          </main>
        </div>

        {/* Floating Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-24 right-6 z-30 p-3.5 rounded-full bg-[#041220]/90 backdrop-blur-md border border-[#0A9BE0]/40 text-[#B4F000] hover:bg-[#B4F000] hover:text-black shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-200 focus:outline-none"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>
    </div>
  );
}
