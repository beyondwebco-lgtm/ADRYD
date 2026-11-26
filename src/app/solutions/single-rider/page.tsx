import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Bike, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Single Rider Advertising Campaign | ADRYD Hyderabad',
  description:
    'Dedicated single electric scooter advertising in Hyderabad. Hyper-local brand presence for retail stores, clinics, cafes, and neighbourhood services.',
};

export default function SingleRiderPage() {
  return (
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 rounded-full bg-[#051C33]/55 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <Bike className="w-3.5 h-3.5" />
            <span>Hyper-Local Mobility Format</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            Single Rider <span className="text-[#B4F000] text-glow-chartreuse">Campaign</span>
          </h1>
          <p className="text-base sm:text-lg text-[#E2E8F0] max-w-2xl leading-relaxed">
            One dedicated electric scooter and rider operating within a defined neighborhood corridor. Ideal for local businesses seeking high-frequency street exposure without enterprise budgets.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-7 rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#B4F000]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="text-xs font-bold uppercase text-[#B4F000] mb-1">Fleet Scale</div>
            <div className="font-heading font-black text-2xl text-white">1 EV + 1 Rider</div>
            <p className="text-xs text-[#E2E8F0] mt-2">
              Dedicated vehicle operating in your chosen 3–5 km commercial corridor radius.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#051C33]/75 backdrop-blur-xl border border-[#0A9BE0]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="text-xs font-bold uppercase text-[#0A9BE0] mb-1">Branding Surface</div>
            <div className="font-heading font-black text-2xl text-white">Side &amp; Rear Panels</div>
            <p className="text-xs text-[#E2E8F0] mt-2">
              High-visibility weather-resistant vehicle body wrap decals and branded rider apparel.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#0A9BE0]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="text-xs font-bold uppercase text-[#0A9BE0] mb-1">Flexible Duration</div>
            <div className="font-heading font-black text-2xl text-white">3 to 30 Days</div>
            <p className="text-xs text-[#E2E8F0] mt-2">
              Hourly, daily or multi-week booking options to fit your local promotional timeline.
            </p>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="mb-12 rounded-3xl bg-[#041220]/80 backdrop-blur-2xl border border-[#B4F000]/30 overflow-hidden shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-inner">
              <Image
                src="/images/campaigns/package-starter.jpg"
                alt="Single Rider Campaign Format"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
                <span>Starter Activation Tier</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                1 Rider • 3 Days / 1 Corridor Pilot
              </h2>
              <p className="text-sm text-[#E2E8F0]/85 leading-relaxed font-normal">
                Perfect for local business pilots, product sampling runs or single-neighborhood promotions. Includes branded electric scooter decals, dedicated rider ambassador and flyer distribution.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-campaign?format=single-rider"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B4F000] text-[#000000] hover:bg-[#c3fc18] font-black text-xs shadow-md transition-all"
                >
                  <span>Enquire for Single Rider</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#000000]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#041220]/80 backdrop-blur-xl border border-[#B4F000]/25 rounded-3xl p-8 sm:p-10 mb-12 space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <h2 className="font-heading font-black text-2xl text-white">
            Why Single Rider Works for Local Brands
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#E2E8F0]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
              <span>Cost-effective local buzz without billboard lease commitments.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
              <span>Concentrated repeated impressions along target neighborhood high-streets.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
              <span>Rider flyer distribution and direct sample hand-outs at key traffic spots.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
              <span>Full compliance with municipal motor vehicle branding guidelines.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/book-campaign?format=single-rider"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-xs shadow-[0_4px_20px_rgba(180,240,0,0.35)] transition-all"
          >
            <span>Plan a Single Rider Campaign</span>
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