'use client';

import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Shirt,
  Cookie,
  Apple,
  Palette,
  Heart,
  Cpu,
  Flower2,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function ProductCategoriesSection() {
  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    fashion: Shirt,
    bakery: Cookie,
    'food-agri': Apple,
    handmade: Palette,
    lifestyle: Heart,
    'tech-edu': Cpu,
    'home-garden': Flower2,
    startups: Rocket,
  };

  const pilotPriorityCategories = SITE_CONFIG.productCategories.filter(
    (c) => c.isPilotPriority
  );
  const secondaryCategories = SITE_CONFIG.productCategories.filter(
    (c) => !c.isPilotPriority
  );

  return (
    <section id="categories" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            Target Retail Verticals
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            PRODUCTS THAT MOVE{' '}
            <span className="text-[#E7FF39]">WITH YOUR BRAND.</span>
          </h2>
          <p className="mt-4 text-base text-[#A5A8B3] leading-relaxed">
            Tailored showcase enclosures, sample stops, and QR pre-order workflows across eight diverse
            consumer product sectors—with five priority categories leading our Hyderabad pilot.
          </p>
        </div>

        {/* Priority 5 Pilot Categories Banner */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E7FF39] animate-pulse" />
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-white">
              Recommended Pilot Categories (Phase 1 Validation)
            </h3>
          </div>
          <span className="text-[10px] font-tech text-[#E7FF39] uppercase tracking-wider hidden sm:inline-block">
            High Street Recall &amp; Direct Engagement
          </span>
        </div>

        {/* 5 Pilot Priority Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pilotPriorityCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            return (
              <div
                key={cat.id}
                className="group p-6 rounded-2xl bg-[#17191F] border border-[#353740] hover:border-[#E7FF39]/70 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E7FF39]/15 text-[#E7FF39] border border-[#E7FF39]/30">
                      Pilot Priority
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] group-hover:bg-[#E7FF39] group-hover:text-[#0C0D12] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-[#E7FF39] transition-colors">
                    {cat.title}
                  </h4>
                  <div className="text-xs font-tech text-[#E7FF39]/90 mb-3 uppercase">
                    {cat.subtitle}
                  </div>
                  <p className="text-xs text-[#A5A8B3] leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Examples */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.examples.map((ex, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-tech px-2 py-0.5 rounded bg-[#0C0D12] text-[#F2F3F5] border border-[#353740]"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#353740] flex items-center justify-between">
                  <Link
                    href={`/book-campaign?category=${encodeURIComponent(cat.title)}`}
                    className="text-xs font-semibold text-[#E7FF39] hover:underline inline-flex items-center gap-1 group/btn"
                  >
                    <span>Enquire for {cat.title.split('&')[0].trim()}</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary 3 Categories */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-white">
            Additional Planned Categories (Phase 2 Expansion)
          </h3>
          <span className="text-[10px] font-tech text-[#A5A8B3] uppercase tracking-wider">
            Subject to Operational Feasibility
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {secondaryCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            return (
              <div
                key={cat.id}
                className="group p-6 rounded-2xl bg-[#17191F]/70 border border-[#353740] hover:border-[#E7FF39]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-tech font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#24212C] text-[#A5A8B3] border border-[#353740]">
                      Phase 2 Expansion
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#A5A8B3] group-hover:text-[#E7FF39] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-[#E7FF39] transition-colors">
                    {cat.title}
                  </h4>
                  <div className="text-xs font-tech text-[#A5A8B3] mb-2 uppercase">
                    {cat.subtitle}
                  </div>
                  <p className="text-xs text-[#A5A8B3] leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.examples.map((ex, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-tech px-2 py-0.5 rounded bg-[#0C0D12] text-[#A5A8B3] border border-[#353740]"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#353740]">
                  <Link
                    href={`/book-campaign?category=${encodeURIComponent(cat.title)}`}
                    className="text-xs font-semibold text-[#A5A8B3] hover:text-[#E7FF39] inline-flex items-center gap-1"
                  >
                    <span>Request Category Pilot</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Operational Disclosure */}
        <div className="p-4 rounded-xl bg-[#17191F] border border-[#353740] text-xs text-[#A5A8B3]">
          <strong className="text-white">Validation Notice:</strong> Product category classifications represent proposed retail applications. Physical product displaying and sampling are evaluated on a case-by-case basis depending on weight, handling safety, and location permissions.
        </div>
      </div>
    </section>
  );
}

