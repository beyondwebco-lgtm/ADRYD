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
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 rounded-full bg-[#051C33]/55 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Enterprise Fleet Activation</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            Multi-Rider Fleet <span className="text-[#B4F000] text-glow-chartreuse">Advertising</span>
          </h1>
          <p className="text-base sm:text-lg text-[#E2E8F0] max-w-2xl leading-relaxed">
            Deploy a coordinated fleet of 4 to 10+ branded electric vehicles blanketing Hyderabad’s key commercial arteries. Designed for high-impact city launches, consumer app downloads, and enterprise retail brand recall.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-7 rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#B4F000]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="text-xs font-bold uppercase text-[#B4F000] mb-1">Fleet Capacity</div>
            <div className="font-heading font-black text-2xl text-white">4 to 10+ Vehicles</div>
            <p className="text-xs text-[#E2E8F0] mt-2">
              Scalable multi-rider fleet with dedicated operations leadership and dispatch coordination.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#051C33]/75 backdrop-blur-xl border border-[#0A9BE0]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="text-xs font-bold uppercase text-[#0A9BE0] mb-1">Citywide Saturation</div>
            <div className="font-heading font-black text-2xl text-white">Simultaneous Corridors</div>
            <p className="text-xs text-[#E2E8F0] mt-2">
              Simultaneous coverage across HITEC City, Gachibowli, Jubilee Hills, Kukatpally, and Secunderabad.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#0A9BE0]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="text-xs font-bold uppercase text-[#0A9BE0] mb-1">Comprehensive Lead</div>
            <div className="font-heading font-black text-2xl text-white">Dedicated Account Lead</div>
            <p className="text-xs text-[#E2E8F0] mt-2">
              Full route logistics, daily deployment verification, and consolidated post-campaign analytics.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#041220]/80 backdrop-blur-xl border border-[#B4F000]/25 rounded-3xl p-8 sm:p-10 mb-12 space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <h2 className="font-heading font-black text-2xl text-white">
            Enterprise-Grade Outdoor Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#E2E8F0]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
              <span>Dominant visual presence during morning and evening rush hour commute bottlenecks.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
              <span>Full branding integration across vehicle body panels, rider apparel, and showcase boxes.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
              <span>Direct sampling and QR ordering operations across major tech parks and commercial avenues.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
              <span>Daily visual proof-of-play reports and coordinated corridor GPS summary logs.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/book-campaign?format=fleet-advertising"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-xs shadow-[0_4px_20px_rgba(180,240,0,0.35)] transition-all"
          >
            <span>Plan an Enterprise Fleet Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#041220]/75 border border-[#B4F000]/30 text-white text-xs font-bold hover:bg-[#051C33]/60 transition-all"
          >
            <span>View All Solutions</span>
          </Link>
        </div>

      </div>
    </div>
  );
}