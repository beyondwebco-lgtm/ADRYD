import type { Metadata } from 'next';
import Link from 'next/link';
import { Bike, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Single Rider Advertising Campaign | ADRYD Hyderabad',
  description:
    'Dedicated single electric scooter advertising in Hyderabad. Hyper-local brand presence for retail stores, clinics, cafes, and neighbourhood services.',
};

export default function SingleRiderPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Bike className="w-3.5 h-3.5" />
            Hyper-Local Mobility Format
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Single Rider Campaign
          </h1>
          <p className="text-base sm:text-lg text-[#637786] max-w-2xl leading-relaxed">
            One dedicated electric scooter and rider operating within a defined neighborhood corridor. Ideal for local businesses seeking high-frequency street exposure without enterprise budgets.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#00A8C8] mb-1">Fleet Scale</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">1 EV + 1 Rider</div>
            <p className="text-xs text-[#637786] mt-2">
              Dedicated vehicle operating in your chosen 3–5 km commercial corridor radius.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#1756C1] mb-1">Branding Surface</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">Side &amp; Rear Panels</div>
            <p className="text-xs text-[#637786] mt-2">
              High-visibility weather-resistant vehicle body wrap decals and branded rider apparel.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase text-[#123C83] mb-1">Flexible Duration</div>
            <div className="font-heading font-black text-2xl text-[#172B3A]">3 to 30 Days</div>
            <p className="text-xs text-[#637786] mt-2">
              Hourly, daily or multi-week booking options to fit your local promotional timeline.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#EAF9FD] border border-[#DCECF2] rounded-3xl p-8 sm:p-10 mb-12 space-y-6">
          <h2 className="font-heading font-black text-2xl text-[#172B3A]">
            Why Single Rider Works for Local Brands
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#637786]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
              <span>Cost-effective local buzz without billboard lease commitments.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
              <span>Concentrated repeated impressions along target neighborhood high-streets.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
              <span>Rider flyer distribution and direct sample hand-outs at key traffic spots.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
              <span>Full compliance with municipal motor vehicle branding guidelines.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/book-campaign?format=single-rider"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] text-white font-bold text-xs shadow-md transition-all"
          >
            <span>Plan a Single Rider Campaign</span>
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
