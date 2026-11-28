import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import SolutionsList from '@/components/solutions/SolutionsList';

export const metadata: Metadata = {
  title: 'Campaign Formats & Solutions | ADRYD',
  description:
    'Explore ADRYD mobile advertising campaign formats in Hyderabad: Single Rider, Dual Rider, Multi-Rider Fleet and Location Targeting.',
};

export default function SolutionsHubPage() {
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
            <span>Campaign Formats</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            Tailored solutions for{' '}
            <br />
            <span className="text-[#B4F000] text-glow-chartreuse">every campaign goal.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed font-normal">
            From focused single-neighborhood brand visibility to citywide synchronized multi-rider activations. Click any format to inspect comprehensive operational blueprints.
          </p>
        </div>

        {/* 4 Solutions Interactive Clickable Cards Grid */}
        <SolutionsList />

        {/* Enterprise Fleet Consultation Banner */}
        <div className="rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#0A9BE0]/40 p-8 lg:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
            Need a Custom Multi-Corridor Fleet Deployment?
          </h3>
          <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-normal max-w-xl mx-auto">
            We build customized multi-month route schedules, brand convoy formations and specialized event activations across Greater Hyderabad.
          </p>
          <div className="pt-2">
            <Link
              href="/book-campaign"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B4F000] text-[#000000] hover:bg-[#c3fc18] font-black text-xs shadow-md transition-all"
            >
              <span>Speak With Operations Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
