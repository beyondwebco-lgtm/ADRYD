import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import CreativeServicesList from '@/components/creative/CreativeServicesList';

export const metadata: Metadata = {
  title: 'Creative Services & ADRYD Viral | Studio',
  description:
    'Discover ADRYD Creative Services: street-to-screen social reels, vehicle wrap design, influencer activations and high-energy video production in Hyderabad.',
};

export default function CreativeServicesPage() {
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
            <span>ADRYD Viral &amp; Studio</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            From the street{' '}
            <br />
            <span className="text-[#B4F000] text-glow-chartreuse">to the screen.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed font-normal">
            We bridge physical outdoor impressions with digital social momentum through custom reels, professional B-roll and high-impact livery design. Click any card to explore studio specifications and deliverables.
          </p>
        </div>

        {/* Featured Viral Showcase Poster */}
        <div className="mb-16 rounded-3xl bg-[#041220]/80 backdrop-blur-2xl border border-[#0A9BE0]/40 overflow-hidden shadow-[0_12px_50px_rgba(10,155,224,0.25)] p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/images/campaigns/service-adryd-viral.jpg"
                alt="ADRYD Viral - Street to Screen"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
                <span>1.2M+ Viral Social Reach</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
                Street Interaction Reels &amp; Creator Collaborations
              </h2>
              <p className="text-sm sm:text-base text-[#E2E8F0]/85 leading-relaxed font-normal">
                Capture organic moments where customers touch products, scan QR codes and react to your mobile campaign on Hyderabad streets. Our creative crew records, edits and distributes high-res vertical video formats ready for Instagram and YouTube.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-campaign?service=ADRYD%20Viral"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#B4F000] text-[#000000] hover:bg-[#c3fc18] font-black text-xs shadow-md transition-all"
                >
                  <span>Book Viral Content Package</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Creative Interactive Clickable Offerings */}
        <CreativeServicesList />

        {/* CTA */}
        <div className="rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#B4F000]/25 p-8 lg:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
            Need Print-Ready Vehicle Artwork?
          </h3>
          <p className="text-sm text-[#E2E8F0] max-w-xl mx-auto">
            Our creative designers will adapt your existing brand assets into compliant, aerodynamically fitted scooter wrap graphics.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-xs shadow-[0_4px_20px_rgba(180,240,0,0.35)] transition-all"
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
