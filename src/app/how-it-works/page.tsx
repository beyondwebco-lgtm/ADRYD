import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  MapPin,
  Layers,
  Palette,
  FileCheck,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | ADRYD Campaign Execution Workflow',
  description:
    'Learn how ADRYD manages electric scooter advertising campaigns in Hyderabad: from brief submission and artwork proofing to verified road execution and reporting.',
};

const FAQS = [
  {
    q: 'How are campaign routes planned and approved in Hyderabad?',
    a: 'Routes are planned based on your target demographic catchments (e.g., HITEC City tech parks, Jubilee Hills high streets, or residential colonies). Our operations team maps approved arterial roads that comply with local municipal traffic guidelines and optimal pedestrian visibility.',
  },
  {
    q: 'What branding surfaces are available on the electric scooters?',
    a: 'Depending on the package, branding includes side body panel wraps, front apron decals, custom-branded top boxes, illuminated transparent showcase enclosures, and compliant rider apparel (jackets, caps, and helmets).',
  },
  {
    q: 'How does ADRYD verify that my campaign was actually executed?',
    a: 'We provide photographic proof of vehicle branding installation prior to deployment, daily rider check-in confirmations, and route logs. As part of our technology roadmap, automated GPS tracking summaries will provide transparent distance and time-window accountability.',
  },
  {
    q: 'Can we change routes or campaign durations midway?',
    a: 'Yes, multi-day campaigns can adjust corridor focuses with 48 hours notice to accommodate weekend events, exhibition launches, or specific flash sale requirements.',
  },
  {
    q: 'How do you ensure safe driving and vehicle compliance?',
    a: 'All EV partner riders undergo identity and driving licence verification, vehicle fitness checks, and road safety briefings. Vehicle branding materials are tested to ensure they do not obstruct rider vision, mirrors, or lighting.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-burgundy/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            End-to-End Operational Lifecycle
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            How ADRYD Works
          </h1>
          <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
            From initial creative brief to physical vehicle fabrication, route deployment, and
            transparent reporting. A reliable, professional framework for urban brand mobility.
          </p>
        </div>

        {/* Artwork & Fabrication Workflow Section */}
        <div className="bg-carbon-card border border-graphite-border rounded-2xl p-8 sm:p-10 mb-16 shadow-2xl">
          <h2 className="font-heading font-bold text-2xl text-white mb-2">
            The Artwork &amp; Fabrication Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-muted-grey mb-8">
            Our quality control lifecycle ensures your brand is represented with crisp color
            accuracy, automotive-grade vinyl, and zero damage to host vehicles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-2">
              <span className="font-tech text-xs text-electric-yellow font-bold uppercase">
                Stage 01
              </span>
              <strong className="text-white block text-sm">Brief &amp; Specs</strong>
              <p className="text-muted-grey text-[11px]">
                Submit brand assets, vector logos, and preferred messaging guidelines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-2">
              <span className="font-tech text-xs text-electric-yellow font-bold uppercase">
                Stage 02
              </span>
              <strong className="text-white block text-sm">Digital 3D Proof</strong>
              <p className="text-muted-grey text-[11px]">
                Our studio prepares vehicle mockup previews for your team&apos;s written approval.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-2">
              <span className="font-tech text-xs text-electric-yellow font-bold uppercase">
                Stage 03
              </span>
              <strong className="text-white block text-sm">Print &amp; Install</strong>
              <p className="text-muted-grey text-[11px]">
                High-grade removable vinyl printed and applied by certified automotive wrappers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-2">
              <span className="font-tech text-xs text-electric-yellow font-bold uppercase">
                Stage 04
              </span>
              <strong className="text-white block text-sm">QC Photo Inspection</strong>
              <p className="text-muted-grey text-[11px]">
                High-res installation photos sent to advertiser before road deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing & Commercial Dimensions */}
        <div className="bg-carbon-card border border-graphite-border rounded-2xl p-8 sm:p-10 mb-16 shadow-2xl">
          <h2 className="font-heading font-bold text-2xl text-white mb-2">
            Transparent Commercial Dimensions
          </h2>
          <p className="text-xs sm:text-sm text-muted-grey mb-8">
            We structure transparent campaign quotes based on your specific requirements rather than
            opaque lump sums.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-graphite/40 border border-graphite-border">
              <div className="font-heading font-bold text-base text-electric-yellow mb-1.5">
                Time &amp; Duration
              </div>
              <p className="text-muted-grey leading-relaxed">
                Choose hourly morning/evening rush hour windows, full 6-8 hour daily runs, or multi-week
                brand presence.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-graphite/40 border border-graphite-border">
              <div className="font-heading font-bold text-base text-electric-yellow mb-1.5">
                Fleet Capacity
              </div>
              <p className="text-muted-grey leading-relaxed">
                From a single pilot vehicle to a coordinated 10+ scooter fleet deployed across multiple
                corridors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-graphite/40 border border-graphite-border">
              <div className="font-heading font-bold text-base text-electric-yellow mb-1.5">
                Add-on Services
              </div>
              <p className="text-muted-grey leading-relaxed">
                Optional creative production, social video reels, illuminated showcase box fabrication,
                or QR landing pages.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mb-8 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-electric-yellow" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-carbon-card border border-graphite-border space-y-2"
              >
                <h3 className="font-heading font-bold text-base text-white">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Ready to Plan Your First Campaign?
            </h4>
            <p className="text-xs text-soft-ivory/80 mt-1">
              Submit your brief to receive an itemised Hyderabad campaign quotation.
            </p>
          </div>
          <Link
            href="/book-campaign"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Start Campaign Brief
          </Link>
        </div>
      </div>
    </div>
  );
}
