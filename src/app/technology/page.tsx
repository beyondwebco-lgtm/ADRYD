import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Cpu,
  Smartphone,
  QrCode,
  LayoutDashboard,
  BarChart3,
  Layers,
  Shield,
  Activity,
  ArrowRight,
  CheckCircle2,
  Lock,
  Server,
  Zap,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology & Roadmap | Planned Platform Capabilities',
  description:
    'Explore the proposed technology roadmap of ADRYD Upgrade: Brand Owner Portal, Rider Mobile Application, QR Storefronts, Admin Operations Console, Campaign Insights, and Fleet Partner Portals.',
};

const modules = [
  {
    title: 'Brand Owner Portal',
    icon: LayoutDashboard,
    stage: 'Phase 2 Architecture',
    desc: 'Self-serve web portal for brand owners to configure corridor campaigns, approve digital 3D vehicle wrap proofs, customize QR promotional landing pages, and track campaign summaries.',
    features: [
      'Interactive corridor selection & PIN-code targeting',
      'Automotive wrap template & visual asset uploads',
      'QR catalogue builder & discount voucher configuration',
      'Consolidated campaign execution reports & photo proofs',
    ],
  },
  {
    title: 'Rider Application',
    icon: Smartphone,
    stage: 'Phase 2 Architecture',
    desc: 'Dedicated mobile companion app providing promotional partner riders with route corridor guidance, scheduled showcase stop countdowns, daily checklist verifications, and earnings logs.',
    features: [
      'Turn-by-turn navigation along approved commercial corridors',
      'Stationary showcase stop arrival & departure logging',
      'Digital checklist for vehicle cleanliness & wrap neatness',
      'Daily campaign session confirmation & support desk',
    ],
  },
  {
    title: 'QR-Enabled Customer Storefront',
    icon: QrCode,
    stage: 'Pilot Web Prototype',
    desc: 'Fast, mobile-optimized lightweight storefront triggered instantly by scanning on-scooter QR badges, enabling seamless product discovery, launch offers, pre-orders, and WhatsApp ordering.',
    features: [
      'Zero-app installation: launches instantly in any mobile browser',
      'Direct-to-consumer launch offer & voucher code activation',
      'Pre-order demand capture & corporate gifting enquiries',
      'Integrated WhatsApp click-to-chat purchase assistance',
    ],
  },
  {
    title: 'ADRYD Admin Console',
    icon: Cpu,
    stage: 'Internal Architecture',
    desc: 'Central command engine for ADRYD campaign managers to oversee route feasibility, rider allocations, vinyl fabrication inspections, client approvals, and schedule management.',
    features: [
      'Corridor dispatch & fleet allocation matching engine',
      'Pre-deployment vinyl wrap quality control checklists',
      'Real-time rider session tracking & coordination desk',
      'Client reporting generator & performance auditing',
    ],
  },
  {
    title: 'Campaign Insights',
    icon: BarChart3,
    stage: 'Telemetry Roadmap',
    desc: 'Proposed campaign reporting module providing verified evidence of route transit, QR interaction rates, customer lead volumes, and overall promotional campaign health.',
    features: [
      'GPS corridor transit evidence & waypoint confirmations',
      'QR scan engagement metrics & unique visitor analytics',
      'Customer lead counts, enquiry types & pre-order demand',
      'Post-campaign executive PDF summaries for marketing teams',
    ],
  },
  {
    title: 'Fleet Partner Portal (Later Phase)',
    icon: Layers,
    stage: 'Later Phase Roadmap',
    desc: 'Specialized enterprise platform for commercial electric two-wheeler fleet aggregators and rental companies to register vehicles, view batch campaign opportunities, and track fleet utilization.',
    features: [
      'Multi-vehicle registration & battery health tracking',
      'Batch corridor allocation across Hyderabad zones',
      'Automated fleet payout management & invoice generation',
      'Vehicle cosmetic maintenance & wrap inspection records',
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#24212C]/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Designed for a Connected Future
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            PLANNED PLATFORM{' '}
            <br />
            <span className="text-[#E7FF39]">CAPABILITIES &amp; ROADMAP.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A5A8B3] max-w-2xl leading-relaxed">
            ADRYD Upgrade is designing a multi-stakeholder technology ecosystem to bridge physical electric
            mobility with digital commerce, campaign verification, and transparent reporting.
          </p>
        </div>

        {/* Futuristic Interactive Dashboard Mockup Preview */}
        <div className="rounded-3xl bg-[#17191F] border border-[#353740] shadow-2xl p-6 sm:p-10 relative overflow-hidden mb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#353740]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#353740]" />
                <span className="w-3 h-3 rounded-full bg-[#353740]" />
                <span className="w-3 h-3 rounded-full bg-[#E7FF39]" />
              </div>
              <span className="text-xs font-tech text-[#A5A8B3] uppercase tracking-wider pl-2 border-l border-[#353740]">
                ADRYD Telemetry &amp; Campaign Console — Conceptual Interface Preview
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24212C] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              Technology Roadmap Preview
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            {/* Mock Telemetry Metrics */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740]">
                <div className="text-[10px] font-tech text-[#A5A8B3] uppercase">Simulated Campaign ID</div>
                <div className="font-heading font-black text-xl text-white mt-0.5">HYD-PILOT-CORR-04</div>
                <div className="text-xs text-[#E7FF39] font-tech mt-1">HITEC City × Madhapur Corridor</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740]">
                  <div className="text-[10px] font-tech text-[#A5A8B3] uppercase">Planned Fleet</div>
                  <div className="font-heading font-black text-2xl text-white mt-0.5">05 EVs</div>
                  <div className="text-[10px] text-emerald-400 font-tech">Synchronized</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740]">
                  <div className="text-[10px] font-tech text-[#A5A8B3] uppercase">Corridor Hours</div>
                  <div className="font-heading font-black text-2xl text-[#E7FF39] mt-0.5">25.0 hrs</div>
                  <div className="text-[10px] text-emerald-400 font-tech">Peak Windows</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740] space-y-2">
                <div className="text-[10px] font-tech text-[#A5A8B3] uppercase">Verified Milestones</div>
                <div className="space-y-1.5 text-xs text-[#F2F3F5]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E7FF39]" />
                      Vehicle Wrap Quality Inspection
                    </span>
                    <span className="text-[#A5A8B3] font-tech">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E7FF39]" />
                      Illuminated Showcase Mounting Lock
                    </span>
                    <span className="text-[#A5A8B3] font-tech">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E7FF39]" />
                      QR Catalogue Link Resolution
                    </span>
                    <span className="text-[#A5A8B3] font-tech">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Vector Graph Canvas */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#0C0D12] border border-[#353740] space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#353740]">
                <span className="font-heading font-bold text-white">
                  Corridor Density &amp; QR Engagement Curve (Illustrative)
                </span>
                <span className="text-[10px] font-tech text-[#E7FF39] uppercase">
                  Telemetry Concept
                </span>
              </div>

              {/* Vector Bar Chart */}
              <div className="relative aspect-[16/8] flex items-end justify-between gap-3 px-4 pt-8 pb-2">
                {[35, 65, 85, 45, 95, 70, 55, 90].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-[#24212C] hover:bg-[#E7FF39] transition-all rounded-t-lg relative group"
                      style={{ height: `${h}%` }}
                    >
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-[#17191F] border border-[#353740] text-[9px] font-tech text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Slot {i + 1}
                      </div>
                    </div>
                    <span className="text-[10px] font-tech text-[#A5A8B3]">W{i + 1}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#353740] flex items-center justify-between text-xs text-[#A5A8B3] font-tech">
                <span>SIMULATED PILOT TELEMETRY</span>
                <span className="text-[#E7FF39] uppercase font-bold">Concept Interface</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Planned Platform Modules */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="font-tech text-xs text-[#E7FF39] uppercase font-bold">
              Technology Roadmap
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
              Six Core Platform Components
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#17191F] border border-[#353740] flex flex-col justify-between hover:border-[#E7FF39]/40 transition-all shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-tech uppercase text-[#A5A8B3] px-2 py-0.5 rounded bg-[#0C0D12] border border-[#353740]">
                        {m.stage}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-white mb-2">
                      {m.title}
                    </h3>

                    <p className="text-xs text-[#A5A8B3] leading-relaxed mb-5">
                      {m.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-[#353740]/60 mb-4">
                      {m.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-[#F2F3F5]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E7FF39] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#353740] text-[10px] font-tech text-[#E7FF39] uppercase font-bold">
                    Planned Capability
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roadmap Statement & Disclaimer */}
        <div className="p-6 rounded-3xl bg-[#17191F] border border-[#353740] flex items-start gap-4 text-xs text-[#A5A8B3] mb-12">
          <Info className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Platform Scope Disclosure:</strong> The dashboard previews,
            mobile app interfaces, and telemetry models shown on this page represent planned future platform
            features currently in engineering specification. The basic website does not provide functional
            logins, real-time vehicle telemetry, or automated GPS tracking dashboards. Current pilot operations
            are managed through rigorous manual verification, photographic proofs, and scheduled route plans.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#17191F] border border-[#353740] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-2xl text-white uppercase">
              Want to Discuss Campaign Logistics?
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A8B3] mt-1 max-w-xl">
              Connect with our operations team to evaluate route corridor feasibility and showcase mounting specs.
            </p>
          </div>
          <Link
            href="/book-campaign"
            className="shrink-0 px-8 py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.3)]"
          >
            Launch a Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
