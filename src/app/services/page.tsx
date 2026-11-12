import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
  Info,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Our Services | Seven Connected Moving Marketplace Verticals',
  description:
    'Explore the 7 connected service verticals of ADRYD Upgrade: Promote, Showcase, Sell, Pre-Order, Deliver, Viral, and Insights.',
};

export default function ServicesPage() {
  const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    promote: Megaphone,
    showcase: ShoppingBag,
    sell: QrCode,
    'pre-order': PackageCheck,
    deliver: Truck,
    viral: Video,
    insights: BarChart3,
  };

  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-[#24212C]/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            SEVEN SERVICES • ONE MOVING MARKETPLACE
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-[0.98] mb-6">
            SEVEN SERVICES.{' '}
            <br />
            <span className="text-[#E7FF39]">ONE CONNECTED BRAND EXPERIENCE.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A5A8B3] leading-relaxed font-normal">
            ADRYD expands out-of-home advertising into a complete promotional and commerce ecosystem.
            From high-recall electric scooter branding to live product showcases, QR commerce, pre-orders,
            hyperlocal delivery, viral digital content, and verified campaign insights.
          </p>
        </div>

        {/* 7 Services Detailed Vertical Stack */}
        <div className="space-y-12 mb-20">
          {SITE_CONFIG.services.map((svc) => {
            const Icon = serviceIcons[svc.id] || Megaphone;
            return (
              <div
                key={svc.id}
                id={svc.slug}
                className="p-8 sm:p-12 rounded-3xl bg-[#17191F] border border-[#353740] hover:border-[#E7FF39]/50 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title & Copy (8 cols) */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-tech text-xs font-bold text-[#E7FF39] bg-[#E7FF39]/15 px-3 py-1 rounded border border-[#E7FF39]/30 uppercase">
                        Service {svc.number}
                      </span>
                      <span className="text-xs font-tech text-[#A5A8B3] uppercase tracking-wider">
                        {svc.tagline}
                      </span>
                      {svc.isFutureCapability && (
                        <span className="text-[10px] font-tech uppercase px-2 py-0.5 rounded bg-[#24212C] text-[#E7FF39] border border-[#353740]">
                          Proposed Platform Capability
                        </span>
                      )}
                    </div>

                    <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase group-hover:text-[#E7FF39] transition-colors">
                      {svc.name}
                    </h2>

                    <p className="text-base sm:text-lg text-[#F2F3F5] font-medium leading-relaxed">
                      {svc.shortDesc}
                    </p>

                    <p className="text-sm text-[#A5A8B3] leading-relaxed">
                      {svc.longDesc}
                    </p>

                    {/* Highlights */}
                    <div className="pt-3">
                      <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#E7FF39] mb-3">
                        Key Service Highlights:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#F2F3F5]">
                        {svc.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/book-campaign?service=${encodeURIComponent(svc.name)}`}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] transition-all"
                      >
                        <span>{svc.ctaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/campaign-plans"
                        className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl bg-[#24212C] hover:bg-[#2D2A37] border border-[#353740] text-white text-xs font-heading font-semibold transition-all"
                      >
                        <span>View Campaign Plans</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Box (4 cols) */}
                  <div className="lg:col-span-4 relative">
                    <div className="p-6 rounded-2xl bg-[#0C0D12] border border-[#353740] flex flex-col justify-between min-h-[280px]">
                      <div className="flex items-center justify-between pb-4 border-b border-[#353740]">
                        <div className="w-12 h-12 rounded-xl bg-[#17191F] border border-[#353740] flex items-center justify-center text-[#E7FF39]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-heading font-black text-3xl text-[#353740]">
                          {svc.number}
                        </span>
                      </div>

                      <div className="my-4 space-y-2">
                        <div className="text-[10px] font-tech text-[#A5A8B3] uppercase">
                          Operational Scope
                        </div>
                        <div className="text-sm font-heading font-bold text-white">
                          Hyderabad Pilot Network
                        </div>
                        <p className="text-xs text-[#A5A8B3] leading-relaxed">
                          {svc.isFutureCapability
                            ? 'Reporting telemetry and campaign dashboards represent upcoming platform milestones.'
                            : 'Executed across designated corridors with trained EV promotional riders.'}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#353740] flex items-center justify-between text-xs text-[#A5A8B3] font-tech">
                        <span>100% ELECTRIC</span>
                        <span className="text-[#E7FF39] uppercase font-bold">Verified Fleet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational & Regulatory Disclosure */}
        <div className="p-6 rounded-2xl bg-[#17191F] border border-[#353740] flex items-start gap-3.5 text-xs text-[#A5A8B3] mb-12">
          <Info className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Service Availability &amp; Pilot Readiness:</strong> All seven
            services reflect ADRYD Upgrade Version 3.0 platform architecture. Services are introduced in
            structured pilot validation phases across Hyderabad. Vehicle modifications, illuminated display
            structures, on-street sampling, and commercial selling follow applicable transport regulations and
            local location approvals.
          </p>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#17191F] border border-[#353740] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-2xl text-white uppercase">
              Ready to Plan a Multi-Service Campaign?
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A8B3] mt-1 max-w-xl">
              Combine promotion, product showcasing, QR pre-orders, and viral content capture into one
              tailored campaign brief.
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

