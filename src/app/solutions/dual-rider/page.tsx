import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dual Rider Advertising Campaign | ADRYD Hyderabad',
  description:
    'Synchronized twin electric scooter advertising in Hyderabad. Double visual frequency and tandem corridor coverage for grand openings and brand launches.',
};

export default function DualRiderPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Tandem Mobility Format
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Dual Rider Campaign
          </h1>
          <p className="text-base sm:text-lg text-[#637786] max-w-2xl leading-relaxed">
            Two branded electric scooters moving in synchronized tandem or covering adjacent commercial arteries simultaneously. Delivers double the street visibility and memorable commuter recall.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#1756C1] mb-1">Fleet Scale</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">2 EVs + 2 Riders</div>
            <p className="text-xs text-[#637786] mt-2">
              Synchronized tandem runs or dual-zone split coverage across high-traffic corridors.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#00A8C8] mb-1">Visual Punch</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">2× Street Frequency</div>
            <p className="text-xs text-[#637786] mt-2">
              Twin branded vehicles moving together create an unmistakable, premium convoy effect.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#123C83] mb-1">Best For</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">Launches &amp; Openings</div>
            <p className="text-xs text-[#637786] mt-2">
              Ideal for new retail store openings, weekend buzz campaigns and festive retail promotions.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#EAF9FD] border border-[#DCECF2] rounded-3xl p-8 sm:p-10 mb-12 space-y-6">
          <h2 className="font-heading font-black text-2xl text-[#172B3A]">
            Why Dual Rider Multiplies Brand Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#637786]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#1756C1] shrink-0 mt-0.5" />
              <span>Convoys naturally command attention from drivers, pedestrians and transit passengers.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#1756C1] shrink-0 mt-0.5" />
              <span>Double the rider sampling capacity and catalogue distribution footprint.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#1756C1] shrink-0 mt-0.5" />
              <span>Flexibility to cover parallel arterial corridors or pin-point shopping clusters.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#1756C1] shrink-0 mt-0.5" />
              <span>Comprehensive route execution logs and photographic proof-of-performance.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/book-campaign?format=dual-rider"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] text-white font-bold text-xs shadow-md transition-all"
          >
            <span>Plan a Dual Rider Campaign</span>
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
