'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
  Check,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>('promote');

  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    promote: Megaphone,
    showcase: ShoppingBag,
    sell: QrCode,
    'pre-order': PackageCheck,
    deliver: Truck,
    viral: Video,
    insights: BarChart3,
  };

  const activeService =
    SITE_CONFIG.services.find((s) => s.id === activeTab) || SITE_CONFIG.services[0];
  const ActiveIcon = icons[activeService.id] || Megaphone;

  return (
    <section id="services" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            Core Capabilities
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            SEVEN SERVICES.{' '}
            <span className="text-[#E7FF39]">ONE CONNECTED BRAND EXPERIENCE.</span>
          </h2>
          <p className="mt-4 text-base text-[#A5A8B3] leading-relaxed">
            From mobile street visibility to live product discovery, contactless sales, pre-order demand
            generation, local delivery and digital amplification across Hyderabad.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {SITE_CONFIG.services.map((svc) => {
            const Icon = icons[svc.id] || Megaphone;
            const isSelected = activeTab === svc.id;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveTab(svc.id)}
                className={`shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-heading font-bold transition-all ${
                  isSelected
                    ? 'bg-[#E7FF39] text-[#0C0D12] border-[#E7FF39] shadow-[0_0_20px_rgba(231,255,57,0.3)]'
                    : 'bg-[#17191F] text-[#A5A8B3] border-[#353740] hover:text-white hover:border-[#E7FF39]/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{svc.name}</span>
                {svc.isFutureCapability && (
                  <span
                    className={`text-[9px] font-tech uppercase px-1.5 py-0.2 rounded ${
                      isSelected
                        ? 'bg-[#0C0D12]/20 text-[#0C0D12]'
                        : 'bg-[#24212C] text-[#A5A8B3]'
                    }`}
                  >
                    Future
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Service Spotlight Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#17191F] border border-[#353740] shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E7FF39]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-tech text-xs font-bold text-[#E7FF39] bg-[#E7FF39]/10 px-2.5 py-1 rounded border border-[#E7FF39]/20 uppercase">
                  Service {activeService.number}
                </span>
                <span className="text-xs font-tech text-[#A5A8B3] uppercase tracking-wider">
                  {activeService.tagline}
                </span>
                {activeService.isFutureCapability && (
                  <span className="text-[10px] font-tech uppercase px-2 py-0.5 rounded bg-[#24212C] text-[#E7FF39] border border-[#353740]">
                    Proposed Telemetry
                  </span>
                )}
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase">
                {activeService.name}
              </h3>

              <p className="text-base text-[#F2F3F5] font-medium leading-relaxed">
                {activeService.shortDesc}
              </p>

              <p className="text-xs sm:text-sm text-[#A5A8B3] leading-relaxed">
                {activeService.longDesc}
              </p>

              {/* Highlights */}
              <div className="pt-2">
                <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#E7FF39] mb-3">
                  Key Capabilities &amp; Highlights:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#F2F3F5]">
                  {activeService.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/book-campaign?service=${encodeURIComponent(activeService.name)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] transition-all"
                >
                  <span>{activeService.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/services#${activeService.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl bg-[#24212C] hover:bg-[#2D2A37] border border-[#353740] text-[#F2F3F5] text-xs font-heading font-semibold transition-all"
                >
                  <span>Full Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E7FF39]" />
                </Link>
              </div>
            </div>

            {/* Right Illustrative Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-8 rounded-2xl bg-[#0C0D12] border border-[#353740] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[320px]">
                {/* Tech Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#353740]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39]">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-white">{activeService.name}</div>
                      <div className="text-[10px] text-[#A5A8B3] font-tech uppercase">Moving Marketplace Vertical</div>
                    </div>
                  </div>
                  <span className="font-heading font-black text-2xl text-[#353740]">{activeService.number}</span>
                </div>

                {/* Conceptual Preview Box */}
                <div className="my-6 p-4 rounded-xl bg-[#17191F] border border-[#353740]/60 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[#A5A8B3]">
                    <span>Deployment Status</span>
                    <span className="text-[#E7FF39] font-tech font-bold uppercase">
                      {activeService.isFutureCapability ? 'Technology Roadmap' : 'Pilot Validation'}
                    </span>
                  </div>
                  <div className="w-full bg-[#0C0D12] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#E7FF39] h-full"
                      style={{ width: activeService.isFutureCapability ? '45%' : '85%' }}
                    />
                  </div>
                  <p className="text-[11px] text-[#A5A8B3] leading-relaxed pt-1">
                    {activeService.isFutureCapability
                      ? 'Reporting telemetry and analytics dashboards represent upcoming platform milestones.'
                      : 'Planned promotional routes and showcase deployments scheduled across Hyderabad test zones.'}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#353740] flex items-center justify-between text-xs text-[#A5A8B3]">
                  <span>Launch Market: Hyderabad</span>
                  <span className="text-[#E7FF39] font-tech">100% ELECTRIC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Services Grid Quick View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SITE_CONFIG.services.slice(0, 4).map((svc) => {
            const Icon = icons[svc.id] || Megaphone;
            return (
              <Link
                key={svc.id}
                href={`/services#${svc.slug}`}
                className="group p-5 rounded-2xl bg-[#17191F] border border-[#353740] hover:border-[#E7FF39]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-tech font-bold text-[#E7FF39] uppercase">
                      {svc.number}
                    </span>
                    <Icon className="w-4 h-4 text-[#A5A8B3] group-hover:text-[#E7FF39] transition-colors" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-white group-hover:text-[#E7FF39] transition-colors mb-1">
                    {svc.name}
                  </h4>
                  <p className="text-xs text-[#A5A8B3] line-clamp-2 leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#353740] flex items-center justify-between text-[11px] text-[#E7FF39] font-semibold">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {SITE_CONFIG.services.slice(4).map((svc) => {
            const Icon = icons[svc.id] || Megaphone;
            return (
              <Link
                key={svc.id}
                href={`/services#${svc.slug}`}
                className="group p-5 rounded-2xl bg-[#17191F] border border-[#353740] hover:border-[#E7FF39]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-tech font-bold text-[#E7FF39] uppercase">
                      {svc.number}
                    </span>
                    <Icon className="w-4 h-4 text-[#A5A8B3] group-hover:text-[#E7FF39] transition-colors" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-white group-hover:text-[#E7FF39] transition-colors mb-1">
                    {svc.name}
                  </h4>
                  <p className="text-xs text-[#A5A8B3] line-clamp-2 leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#353740] flex items-center justify-between text-[11px] text-[#E7FF39] font-semibold">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

