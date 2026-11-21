import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Rider Fleet Advertising | ADRYD Hyderabad',
  description:
    'Deploy coordinated fleets of 4 to 10+ branded electric vehicles across Hyderabad. High-impact citywide coverage for enterprises, FMCG, and major product launches.',
};

export default function FleetAdvertisingPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            Enterprise Fleet Activation
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Multi-Rider Fleet Advertising
          </h1>
          <p className="text-base sm:text-lg text-[#637786] max-w-2xl leading-relaxed">
            Deploy a coordinated fleet of 4 to 10+ branded electric vehicles blanketing Hyderabad’s key commercial arteries. Designed for high-impact city launches, consumer app downloads, and enterprise retail brand recall.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#00A8C8] mb-1">Fleet Capacity</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">4 to 10+ Vehicles</div>
            <p className="text-xs text-[#637786] mt-2">
              Scalable multi-rider fleet with dedicated operations leadership and dispatch coordination.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#1756C1] mb-1">Citywide Saturation</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">Simultaneous Corridors</div>
            <p className="text-xs text-[#637786] mt-2">
              Simultaneous coverage across HITEC City, Gachibowli, Jubilee Hills, Kukatpally, and Secunderabad.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#123C83] mb-1">Comprehensive Lead</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">Dedicated Account Lead</div>
            <p className="text-xs text-[#637786] mt-2">
              Full route logistics, daily deployment verification, and consolidated post-campaign analytics.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#EAF9FD] border border-[#DCECF2] rounded-3xl p-8 sm:p-10 mb-12 space-y-6">
          <h2 className="font-heading font-black text-2xl text-[#172B3A]">
            Enterprise-Grade Outdoor Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#637786]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
              <span>Dominant visual presence during morning and evening rush hour commute bottlenecks.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
              <span>Full branding integration across vehicle body panels, rider apparel, and showcase boxes.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
              <span>Direct sampling and QR ordering operations across major tech parks and commercial avenues.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
              <span>Daily visual proof-of-play reports and coordinated corridor GPS summary logs.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/book-campaign?format=fleet-advertising"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] text-white font-bold text-xs shadow-md transition-all"
          >
            <span>Plan an Enterprise Fleet Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-[#DCECF2] text-[#172B3A] text-xs font-bold hover:bg-[#F6FAFC] transition-all"
          >
            <span>View All Solutions</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
