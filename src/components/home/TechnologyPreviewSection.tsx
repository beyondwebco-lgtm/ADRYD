import Link from 'next/link';
import {
  Cpu,
  Smartphone,
  QrCode,
  LayoutDashboard,
  BarChart3,
  Layers,
  ArrowRight,
  Shield,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const roadmapModules = [
  {
    title: 'Brand Owner Portal',
    icon: LayoutDashboard,
    stage: 'Phase 2 Concept',
    desc: 'Self-serve interface for booking corridor campaigns, reviewing digital wrap mockups, configuring QR catalogues, and viewing campaign summaries.',
  },
  {
    title: 'Rider Application',
    icon: Smartphone,
    stage: 'Phase 2 Concept',
    desc: 'Dedicated mobile app providing turn-by-turn corridor guidance, scheduled stationary stop timers, briefing checklists, and photo verification uploads.',
  },
  {
    title: 'QR Customer Storefront',
    icon: QrCode,
    stage: 'Pilot Web Prototype',
    desc: 'Lightweight mobile web pages triggered by on-vehicle QR scans for product discovery, launch discounts, pre-order registrations, and purchase assistance.',
  },
  {
    title: 'ADRYD Admin Console',
    icon: Cpu,
    stage: 'Internal Architecture',
    desc: 'Central operations engine managing route feasibility, rider allocations, wrap inspection approvals, inventory verification, and client communications.',
  },
  {
    title: 'Campaign Insights',
    icon: BarChart3,
    stage: 'Telemetry Roadmap',
    desc: 'Reporting analytics aggregating planned corridor logs, QR scan engagement volumes, lead counts, and verified pre-order demand metrics.',
  },
  {
    title: 'Fleet Partner Portal',
    icon: Layers,
    stage: 'Later Phase Roadmap',
    desc: 'Specialized enterprise dashboard for third-party commercial EV fleet owners to register vehicles, view route opportunities, and manage fleet payouts.',
  },
];

export default function TechnologyPreviewSection() {
  return (
    <section id="technology-preview" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            Designed for a Connected Future
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            PLANNED PLATFORM{' '}
            <span className="text-[#E7FF39]">CAPABILITIES.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#A5A8B3] leading-relaxed">
            A comprehensive technology roadmap designed to unite advertisers, promotional riders,
            customers and fleet owners across a transparent, connected moving marketplace.
          </p>
        </div>

        {/* Futuristic Dashboard Mockup (Preview Only) */}
        <div className="rounded-3xl bg-[#17191F] border border-[#353740] shadow-2xl p-6 sm:p-8 relative overflow-hidden mb-12">
          {/* Header Bar */}
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

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24212C] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                Technology Roadmap Preview
              </span>
            </div>
          </div>

          {/* Grid of 6 Planned Platform Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {roadmapModules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0C0D12] border border-[#353740] flex flex-col justify-between hover:border-[#E7FF39]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#17191F] border border-[#353740] flex items-center justify-center text-[#E7FF39]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-tech text-[#A5A8B3] uppercase px-2 py-0.5 rounded bg-[#17191F] border border-[#353740]">
                        {m.stage}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-base text-white mb-2">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[#A5A8B3] leading-relaxed mb-4">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#353740] flex items-center justify-between text-[11px] text-[#A5A8B3] font-tech">
                    <span>Planned Milestone</span>
                    <span className="text-[#E7FF39] uppercase font-bold">Concept Preview</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Roadmap Disclosure */}
        <div className="p-4 rounded-xl bg-[#17191F] border border-[#353740] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A5A8B3]">
          <div className="flex items-start gap-2.5 max-w-3xl">
            <Shield className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Roadmap Disclosure:</strong> Dashboard previews and application interfaces shown above represent planned platform capabilities currently under engineering definition. The basic live website serves as an informational and enquiry portal and does not provide active client logins, operational telemetry dashboards or automatic dispatch engines.
            </p>
          </div>
          <Link
            href="/technology"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#E7FF39] hover:underline"
          >
            <span>Read Technology Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
