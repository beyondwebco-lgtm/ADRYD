import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Sparkles,
  Camera,
  Share2,
  Palette,
  ArrowRight,
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
    bg: 'bg-[#092D19]/80',
    border: 'border-[#B4F000]/30',
    color: 'text-[#B4F000]',
  },
  {
    title: 'Vehicle Wrap Design',
    desc: 'High-contrast automotive livery layouts engineered specifically for moving two-wheelers and high legibility at distance.',
    icon: Palette,
    bg: 'bg-[#005522]/60',
    border: 'border-[#65B32E]/30',
    color: 'text-[#65B32E]',
  },
  {
    title: 'Campaign Cinematics & B-Roll',
    desc: 'High-resolution drone footage and moving convoy tracking shots capturing your fleet moving through Hyderabad landmarks.',
    icon: Camera,
    bg: 'bg-[#092D19]/80',
    border: 'border-[#F4DE26]/30',
    color: 'text-[#F4DE26]',
  },
  {
    title: 'Social Amplification Packages',
    desc: 'Packaged content assets optimized for Instagram, YouTube Shorts and digital ad placements.',
    icon: Share2,
    bg: 'bg-[#005522]/60',
    border: 'border-[#B4F000]/30',
    color: 'text-[#B4F000]',
  },
];

export default function CreativeServicesPage() {
  return (
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 rounded-full bg-[#005522]/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ADRYD Viral &amp; Studio</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            From the street{' '}
            <br />
            <span className="text-[#B4F000] text-glow-lime">to the screen.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E4EBE5] leading-relaxed font-normal">
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
                className={`rounded-3xl ${svc.bg} backdrop-blur-xl border ${svc.border} p-8 lg:p-10 card-hover-lift flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.35)]`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-[#061C12]/80 border border-[#B4F000]/30 shadow-sm flex items-center justify-center ${svc.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-heading font-black text-2xl text-white">
                      {svc.title}
                    </h2>
                    <p className="text-sm text-[#E4EBE5] leading-relaxed mt-2">
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
        <div className="rounded-3xl bg-[#092D19]/75 backdrop-blur-xl border border-[#B4F000]/25 p-8 lg:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
            Need Print-Ready Vehicle Artwork?
          </h3>
          <p className="text-sm text-[#E4EBE5] max-w-xl mx-auto">
            Our creative designers will adapt your existing brand assets into compliant, aerodynamically fitted scooter wrap graphics.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#092D19] font-black text-xs shadow-[0_4px_20px_rgba(180,240,0,0.35)] transition-all"
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