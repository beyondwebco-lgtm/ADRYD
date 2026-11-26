import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ADRYD Platform',
  description:
    'Terms of service governing advertiser campaign briefs, EV rider partner participation, and platform operations for ADRYD Mobility Technologies in Hyderabad.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 rounded-full bg-[#005522]/30 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-10 space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B4F000] hover:underline mb-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase leading-tight">
            Terms &amp; <span className="text-[#B4F000] text-glow-lime">Conditions</span>
          </h1>

          <p className="text-xs text-[#E4EBE5]">
            Effective: November 2026 • ADRYD Mobility Technologies, Hyderabad, India
          </p>
        </div>

        <div className="bg-[#092D19]/75 backdrop-blur-xl border border-[#B4F000]/25 rounded-3xl p-8 sm:p-12 space-y-8 text-sm text-[#E4EBE5] leading-relaxed shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">1. Platform Scope &amp; Role</h2>
            <p>
              ADRYD operates as a managed technology and advertising marketplace connecting commercial advertisers with independent electric vehicle owners and partner riders. Website submissions constitute requests for quotation and feasibility review, and do not constitute binding advertising execution contracts until formalized via an executed Statement of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">2. Pilot Stage Operations</h2>
            <p>
              ADRYD currently operates in controlled pilot validation within designated commercial and IT corridors in Hyderabad, Telangana. Proposed live tracking dashboards and automated routing algorithms represent roadmap milestones. Pilot campaigns are monitored via photographic check-ins and operational route audits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">3. Advertising Standards &amp; Content Review</h2>
            <p>
              All advertiser artwork and promotional merchandise must comply with the Advertising Standards Council of India (ASCI) codes and municipal motor vehicle livery guidelines. ADRYD reserves the right to reject advertising content that is misleading, legally restricted, or inappropriate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">4. Rider Partner Engagement</h2>
            <p>
              Registration as an EV rider partner or commercial fleet operator expresses interest in participating in planned campaigns. Selection is subject to driving licence verification, vehicle fitness checks, and corridor demand. ADRYD does not promise fixed employment or guaranteed minimum earnings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">5. Contact &amp; Legal Notices</h2>
            <p>
              For legal inquiries regarding these terms, reach our administrative desk at{' '}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-[#B4F000] underline font-bold"
              >
                {SITE_CONFIG.contact.email}
              </a>
              .
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}