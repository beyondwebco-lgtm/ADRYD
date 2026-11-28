import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import IndustriesList from '@/components/industries/IndustriesList';

export const metadata: Metadata = {
  title: 'Product Categories | ADRYD The Moving Marketplace',
  description:
    'Explore how ADRYD empowers Fashion, Food, Handmade Crafts, Beauty, D2C Startups and Local Businesses with mobile advertising and product showcases in Hyderabad.',
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 rounded-full bg-[#051C33]/55 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Sectors</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            Made for every{' '}
            <br />
            <span className="text-[#B4F000] text-glow-chartreuse">kind of brand.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed font-normal">
            Whether you craft boutique sarees, bake artisanal treats, or operate a neighborhood retail store, take your products to the streets. Click any card to explore full specifications and activation blueprints.
          </p>
        </div>

        {/* 6 Category Interactive Clickable Cards Grid */}
        <IndustriesList />

        {/* CTA */}
        <div className="rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#B4F000]/25 p-8 lg:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
            Have a Unique Product Format?
          </h3>
          <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-normal max-w-xl mx-auto">
            Our custom fabrication and operations team can configure vehicle wraps, acrylic displays and product dispensers for nearly any retail category.
          </p>
          <div className="pt-2">
            <Link
              href="/book-campaign"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B4F000] text-[#000000] hover:bg-[#c3fc18] font-black text-xs shadow-md transition-all"
            >
              <span>Consult With Campaign Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
