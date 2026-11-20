import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shirt,
  Cookie,
  Apple,
  Palette,
  Heart,
  Cpu,
  Flower2,
  Rocket,
  ArrowRight,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Product Categories | Products That Move With Your Brand',
  description:
    'Discover the eight consumer product categories of ADRYD Upgrade: fashion, artisanal foods, organic agriculture, handmade crafts, personal care, education, home & garden, and emerging startups.',
};

export default function IndustriesPage() {
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
    <div className="min-h-screen bg-[#000000] text-[#B8B8B8] pt-32 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#03F2FF]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101010] border border-[#03F2FF]/30 text-[#03F2FF] text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#03F2FF]" />
            RETAIL VERTICALS &amp; PRODUCTS
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-[#FFFFFF] uppercase leading-[0.98] mb-6">
            PRODUCTS THAT MOVE{' '}
            <br />
            <span className="text-[#E7FF39]">WITH YOUR BRAND.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B8B8B8] leading-relaxed font-normal">
            ADRYD Upgrade is designed around eight core consumer product sectors. We pair tailored
            merchandise display enclosures, planned corridor schedules, and contactless QR pre-order
            workflows to bring your craft directly to consumers.
          </p>
        </div>

        {/* Phase 1 Priority Categories */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#222222]">
            <div>
              <span className="font-tech text-xs text-[#03F2FF] uppercase font-bold">
                Phase 1 Pilot Validation
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#FFFFFF] uppercase mt-1">
                Five Recommended Pilot Categories
              </h2>
            </div>
            <span className="text-xs text-[#888888] font-tech uppercase">
              High Visual Contrast &amp; Tactile Discovery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilotPriorityCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Sparkles;
              return (
                <div
                  key={cat.id}
                  className="p-8 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#03F2FF]/60 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#000000] text-[#03F2FF] border border-[#03F2FF]/30">
                        Pilot Priority
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#222222] flex items-center justify-center text-[#E7FF39] group-hover:bg-[#E7FF39] group-hover:text-[#000000] transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-black text-2xl text-[#FFFFFF] mb-1 group-hover:text-[#E7FF39] transition-colors">
                      {cat.title}
                    </h3>
                    <div className="text-xs font-tech text-[#E7FF39] mb-3 uppercase">
                      {cat.subtitle}
                    </div>

                    <p className="text-xs text-[#888888] leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="space-y-1.5 pt-4 border-t border-[#222222] mb-6">
                      <span className="text-[10px] font-tech uppercase text-[#888888] block">
                        Example Merchandise:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.examples.map((ex, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-tech px-2.5 py-0.5 rounded bg-[#000000] text-[#B8B8B8] border border-[#222222]"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/book-campaign?category=${encodeURIComponent(cat.title)}`}
                      className="w-full py-3 rounded-xl bg-[#000000] hover:bg-[#E7FF39] text-[#FFFFFF] hover:text-[#000000] border border-[#222222] font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(3,242,255,0.15)]"
                    >
                      <span>Plan {cat.title.split('&')[0].trim()} Campaign</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase 2 Expansion Categories */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#222222]">
            <div>
              <span className="font-tech text-xs text-[#03F2FF] uppercase font-bold">
                Phase 2 Expansion
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#FFFFFF] uppercase mt-1">
                Additional Planned Product Sectors
              </h2>
            </div>
            <span className="text-xs text-[#888888] font-tech uppercase">
              Subject to Operational Feasibility
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Sparkles;
              return (
                <div
                  key={cat.id}
                  className="p-8 rounded-3xl bg-[#101010]/70 border border-[#222222] hover:border-[#03F2FF]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#000000] text-[#888888] border border-[#222222]">
                        Phase 2 Expansion
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#222222] flex items-center justify-center text-[#888888]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-black text-2xl text-[#FFFFFF] mb-1">
                      {cat.title}
                    </h3>
                    <div className="text-xs font-tech text-[#888888] mb-3 uppercase">
                      {cat.subtitle}
                    </div>

                    <p className="text-xs text-[#888888] leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="space-y-1.5 pt-4 border-t border-[#222222] mb-6">
                      <span className="text-[10px] font-tech uppercase text-[#888888] block">
                        Example Merchandise:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.examples.map((ex, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-tech px-2.5 py-0.5 rounded bg-[#000000] text-[#888888] border border-[#222222]"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/book-campaign?category=${encodeURIComponent(cat.title)}`}
                      className="w-full py-3 rounded-xl bg-[#000000] hover:bg-[#151515] border border-[#222222] text-[#B8B8B8] hover:text-[#03F2FF] font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Enquire Category Pilot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operational Safety Notice */}
        <div className="p-6 rounded-3xl bg-[#101010] border border-[#222222] flex items-start gap-4 text-xs text-[#888888] mb-12">
          <ShieldAlert className="w-4 h-4 text-[#03F2FF] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#FFFFFF]">Merchandise Qualification Notice:</strong> Product categories
            represent planned retail applications. Operational approval for live on-vehicle display or sampling
            requires physical inspection of dimensions, structural weight distribution, and non-hazardous compliance
            before campaign confirmation.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#101010] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-2xl text-[#FFFFFF] uppercase">
              Do You Sell a Product in These Categories?
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] mt-1 max-w-xl">
              Tell us about your merchandise to explore mobile showcase enclosures and scheduled Hyderabad corridor stops.
            </p>
          </div>
          <Link
            href="/book-campaign"
            className="shrink-0 px-8 py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#000000] font-heading font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.3)]"
          >
            Launch a Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
