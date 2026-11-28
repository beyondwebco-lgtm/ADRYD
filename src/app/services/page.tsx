import type { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import ServicesList from '@/components/services/ServicesList';

export const metadata: Metadata = {
  title: 'Services | ADRYD The Moving Marketplace',
  description:
    'Discover ADRYD’s seven service verticals: Mobile Advertising, Product Showcases, QR Selling, Pre-Orders, Hyperlocal Delivery, Viral Content and Campaign Insights.',
};

export default function ServicesPage() {
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
            <span>Service Verticals</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            More than ads.{' '}
            <br />
            <span className="text-[#B4F000] text-glow-chartreuse">More possibilities.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed font-normal">
            ADRYD connects physical brand movement with product discovery, digital commerce and local delivery. Click any card to explore full specifications, vehicle display formats, and package inclusions.
          </p>
        </div>

        {/* 7 Services Interactive Clickable Cards List */}
        <ServicesList />

      </div>
    </div>
  );
}
