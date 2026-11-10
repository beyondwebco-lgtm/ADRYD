import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldAlert, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ADRYD Platform',
  description:
    'Terms of service governing advertiser campaign briefs, EV rider partner participation, and platform operations for ADRYD Mobility Technologies in Hyderabad.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-electric-yellow hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5" />
            Commercial Agreement Framework
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-muted-grey">
            Effective: November 2026 • ADRYD Mobility Technologies, Hyderabad, India
          </p>
        </div>

        <div className="bg-carbon-card border border-graphite-border rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8 text-xs sm:text-sm text-muted-grey leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">1. Platform Scope &amp; Role</h2>
            <p>
              ADRYD operates as a managed technology and advertising marketplace connecting commercial
              advertisers with independent electric vehicle owners and partner riders. Website submissions
              constitute requests for quotation and feasibility review, and do not constitute binding
              advertising execution contracts until formalized via an executed Statement of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">2. Pilot Stage Operations</h2>
            <p>
              ADRYD currently operates in controlled pilot validation within designated commercial and
              IT corridors in Hyderabad, Telangana. Proposed live tracking dashboards and automated
              routing algorithms represent roadmap milestones. Pilot campaigns are monitored via
              rigorous photographic check-ins and operational route audits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">3. Advertising Standards &amp; Content Review</h2>
            <p>
              All advertiser artwork and promotional merchandise must comply with the Advertising
              Standards Council of India (ASCI) guidelines, local municipal outdoor advertising
              regulations, and motor vehicle safety norms. ADRYD reserves the right to reject artwork
              containing prohibited, defamatory, politically partisan, or safety-obstructing visuals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">4. Partner Rider Eligibility</h2>
            <p>
              Partner riders must hold a valid Indian driving licence, active vehicle registration
              certificate (RC), and statutory third-party vehicle insurance. Registration via this website
              signifies an expression of interest. Actual campaign assignments depend on vehicle
              condition inspections and advertiser brief matching.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">5. Limitation of Liability</h2>
            <p>
              ADRYD makes no representations or warranties regarding specific sales volume, conversion
              rates, or guaranteed impressions resulting from street advertising. Street traffic flows,
              weather incidents, and temporary road closures by law enforcement may necessitate route
              adjustments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">6. Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising in connection with
              these terms or platform services shall be subject to the exclusive jurisdiction of the
              courts in Hyderabad, Telangana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
