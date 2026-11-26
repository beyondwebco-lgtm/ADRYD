import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Location & Corridor Targeting | ADRYD Hyderabad',
  description:
    'Surgical geographic targeting across Hyderabad’s top arterial routes: HITEC City, Gachibowli, Jubilee Hills, Banjara Hills, and Kukatpally.',
};

const corridors = [
  {
    name: 'HITEC City & Madhapur Corridor',
    profile: 'Tech workforce, startup founders, young professionals & retail shoppers.',
    spots: ['Cyber Towers Junction', 'Inorbit Mall Area', 'Madhapur 100ft Road', 'Durgam Cheruvu'],
  },
  {
    name: 'Gachibowli & Financial District',
    profile: 'Corporate executives, global tech employees & premium residential communities.',
    spots: ['Gachibowli Junction', 'Financial District Loop', 'Nanakramguda Hub', 'Wipro Circle'],
  },
  {
    name: 'Jubilee Hills & Banjara Hills',
    profile: 'Affluent homeowners, luxury shoppers, dining enthusiasts & lifestyle consumers.',
    spots: ['Road No. 36', 'Road No. 45', 'Banjara Hills Road No. 1', 'Film Nagar Entrance'],
  },
  {
    name: 'Kukatpally & KPHB Commercial Belt',
    profile: 'Densely populated families, students, retail shoppers & high transit volumes.',
    spots: ['JNTU Commercial Strip', 'KPHB Main Road', 'Y-Junction', 'Kukatpally Metro Zone'],
  },
];

export default function LocationTargetingPage() {
  return (
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 rounded-full bg-[#051C33]/55 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Corridor Precision</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            Location &amp; <span className="text-[#B4F000] text-glow-chartreuse">Corridor Targeting</span>
          </h1>
          <p className="text-base sm:text-lg text-[#E2E8F0] max-w-2xl leading-relaxed">
            Concentrate your campaign along specific commercial roads, high-density residential catchments, and metro corridors in Hyderabad for maximum local relevance.
          </p>
        </div>

        {/* 4 Corridors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {corridors.map((c, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#B4F000]/25 shadow-[0_12px_40px_rgba(0,0,0,0.35)] card-hover-lift space-y-4">
              <h2 className="font-heading font-black text-xl text-white">
                {c.name}
              </h2>
              <p className="text-xs text-[#E2E8F0] leading-relaxed">
                {c.profile}
              </p>
              <div className="pt-2 border-t border-[#B4F000]/15 space-y-1.5">
                {c.spots.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/book-campaign"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-xs shadow-[0_4px_20px_rgba(180,240,0,0.35)] transition-all"
          >
            <span>Plan Route Targeting</span>
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