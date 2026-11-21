import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Sparkles,
  Camera,
  Share2,
  Palette,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Creative Services & ADRYD Viral | Studio',
  description:
    'Discover ADRYD Creative Services: street-to-screen social reels, vehicle wrap design, influencer activations and high-energy video production in Hyderabad.',
};

const services = [
  {
    title: 'Street Interaction Reels',
    desc: 'Short-form vertical video capturing authentic consumer reactions, unboxings and live product sampling moments.',
    icon: Video,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#00A8C8]',
  },
  {
    title: 'Vehicle Wrap Design',
    desc: 'High-contrast automotive livery layouts engineered specifically for moving two-wheelers and high legibility at distance.',
    icon: Palette,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#1756C1]',
  },
  {
    title: 'Campaign Cinematics & B-Roll',
    desc: 'High-resolution drone footage and moving convoy tracking shots capturing your fleet moving through Hyderabad landmarks.',
    icon: Camera,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#123C83]',
  },
  {
    title: 'Social Amplification Packages',
    desc: 'Packaged content assets optimized for Instagram, YouTube Shorts and digital ad placements.',
    icon: Share2,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#58C9EF]',
  },
];

export default function CreativeServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            ADRYD Viral &amp; Studio
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            From the street{' '}
            <br />
            <span className="text-[#00A8C8]">to the screen.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            We bridge physical outdoor impressions with digital social momentum through custom reels, professional B-roll and high-impact livery design.
          </p>
        </div>

        {/* 4 Creative Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl ${svc.bg} border border-[#DCECF2] p-8 lg:p-10 card-hover-lift flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${svc.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-heading font-black text-2xl text-[#172B3A]">
                      {svc.title}
                    </h2>
                    <p className="text-sm text-[#637786] leading-relaxed mt-2">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/book-campaign?service=ADRYD%20Viral"
                    className={`inline-flex items-center gap-2 text-xs font-bold ${svc.color} hover:underline`}
                  >
                    <span>Include in Campaign Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-[#F6FAFC] border border-[#DCECF2] p-8 lg:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#172B3A] uppercase">
            Need Print-Ready Vehicle Artwork?
          </h3>
          <p className="text-sm text-[#637786] max-w-xl mx-auto">
            Our creative designers will adapt your existing brand assets into compliant, aerodynamically fitted scooter wrap graphics.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] text-white font-bold text-xs shadow-md transition-all"
            >
              <span>Contact Creative Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
