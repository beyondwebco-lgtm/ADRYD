import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Layers,
  Calendar,
  Sparkles,
} from 'lucide-react';
import CampaignPlansGrid from '@/components/campaigns/CampaignPlansGrid';
import SubscriptionPlansGrid from '@/components/campaigns/SubscriptionPlansGrid';

export const metadata: Metadata = {
  title: 'Campaign Plans & Monthly Subscriptions | ADRYD',
  description:
    'Explore ADRYD’s five campaign activation formats and four monthly subscription retainers designed for brands of all sizes across Hyderabad.',
};

export default function CampaignPlansPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-28 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#041220]/80 backdrop-blur-md text-[#0A9BE0] text-xs font-bold uppercase tracking-wider border border-[#0A9BE0]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Flexible Formats</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            Campaign plans.{' '}
            <br />
            <span className="text-[#B4F000] text-glow-chartreuse">Measurable impact.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed font-normal">
            Choose from five concise campaign activation tiers or structured monthly subscription retainers.
          </p>
        </div>

        {/* SECTION 1: 5 INTERACTIVE CAMPAIGN PACKAGES WITH ANIMATED EXPANDABLE POPUP */}
        <div className="mb-24">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B4F000]">
              <Layers className="w-3.5 h-3.5" />
              <span>Deployment Tiers</span>
            </div>
            <h2 className="font-heading font-black text-3xl text-white uppercase">
              Campaign Packages
            </h2>
            <p className="text-sm text-[#E2E8F0]/80">
              Designed for product drops, grand openings and focused promotional blitzes. Click any package card to view complete specifications and campaign deliverables.
            </p>
          </div>

          {/* Interactive Client Component Grid */}
          <CampaignPlansGrid />
        </div>

        {/* SECTION 2: 4 MONTHLY SUBSCRIPTIONS WITH ANIMATED EXPANDABLE POPUP */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Continuous Coverage</span>
            </div>
            <h2 className="font-heading font-black text-3xl text-white uppercase">
              Monthly Subscription Plans
            </h2>
            <p className="text-sm text-[#E2E8F0]/80">
              Sustained monthly visibility designed to keep your brand top-of-mind across Hyderabad. Click any retainer card to explore detailed scope and deliverables.
            </p>
          </div>

          <SubscriptionPlansGrid />
        </div>

      </div>
    </div>
  );
}
