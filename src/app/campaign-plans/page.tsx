import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layers,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
} from 'lucide-react';
import CampaignPlansGrid from '@/components/campaigns/CampaignPlansGrid';

export const metadata: Metadata = {
  title: 'Campaign Plans & Monthly Subscriptions | ADRYD',
  description:
    'Explore ADRYD’s five campaign activation formats and four monthly subscription retainers designed for brands of all sizes across Hyderabad.',
};

const subscriptions = [
  {
    id: 'sub_micro',
    name: 'Micro-Brand Presence',
    riders: '1 Rider • Part-Time',
    hours: '40–50 Active Hours / Month',
    desc: 'Consistent monthly street visibility for local cafes, boutiques, handmade creators and neighborhood stores.',
    features: ['1 Designated Brand EV', 'Weekend Peak Hours', 'Local Corridor Focus', 'Monthly Activity Summary'],
    bg: 'bg-[#041220]/75',
    border: 'border-white/20 hover:border-[#B4F000]',
    color: 'text-[#E2E8F0]',
  },
  {
    id: 'sub_growth',
    name: 'Growth Retainer',
    riders: '2–3 Riders • Regular',
    hours: '80–120 Active Hours / Month',
    desc: 'Steady multi-neighborhood presence for growing retail labels, D2C brands and multi-location businesses.',
    features: ['2–3 Branded EVs', 'Weekday & Weekend Split', 'Rotating Corridor Routes', 'Bi-Weekly Progress Logs'],
    bg: 'bg-[#051C33]/65',
    border: 'border-[#0A9BE0]/40 hover:border-[#B4F000]',
    color: 'text-[#0A9BE0]',
  },
  {
    id: 'sub_dominance',
    name: 'Commercial Dominance',
    riders: '4–6 Riders • Daily',
    hours: '160–240 Active Hours / Month',
    desc: 'Continuous high-recall street and storefront presence across Hyderabad’s busiest shopping and tech hubs.',
    features: ['4–6 Branded EVs', 'Daily Peak Transit Hours', 'Full Corridor Saturation', 'Dedicated Operations Lead'],
    bg: 'bg-[#041B33]/85',
    border: 'border-[#B4F000]/40 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
    image: '/images/campaigns/retainer-commercial-dominance.jpg',
  },
  {
    id: 'sub_enterprise',
    name: 'Enterprise Fleet',
    riders: '8+ Riders • Dedicated',
    hours: 'Custom Fleet Hours / Month',
    desc: 'Fully dedicated mobile marketplace fleet operating as an exclusive mobile retail and promotional arm.',
    features: ['Custom Dedicated Fleet', 'Bespoke Display Designs', 'Full Delivery & Pre-Order Sync', 'Custom SLA & Telemetry'],
    bg: 'bg-[#041220]/80',
    border: 'border-[#0A9BE0]/35 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
    image: '/images/campaigns/retainer-enterprise-fleet.jpg',
  },
];

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

          {/* Interactive Client Component Grid with Framer Motion LayoutId Expansion */}
          <CampaignPlansGrid />
        </div>

        {/* SECTION 2: 4 MONTHLY SUBSCRIPTIONS */}
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
              Sustained monthly visibility designed to keep your brand top-of-mind across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className={`rounded-3xl p-7 border ${sub.border} ${sub.bg} backdrop-blur-2xl card-hover-lift flex flex-col justify-between shadow-xl transition-all duration-300`}
              >
                <div className="space-y-4">
                  {sub.image && (
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-3 border border-white/10 group-hover:border-[#0A9BE0]/40 transition-all bg-[#000000]/50 shadow-inner">
                      <Image
                        src={sub.image}
                        alt={sub.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">
                      {sub.name}
                    </h3>
                    <div className={`text-xs font-bold mt-1 ${sub.color}`}>
                      {sub.riders}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#E2E8F0]/70 font-medium mt-1">
                      <Clock className="w-3 h-3 text-[#B4F000]" />
                      <span>{sub.hours}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#E2E8F0]/85 leading-relaxed font-normal">
                    {sub.desc}
                  </p>

                  <div className="pt-2 border-t border-white/10 space-y-2">
                    {sub.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${sub.color} shrink-0`} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/book-campaign?plan=${sub.id}`}
                    className="w-full py-3 rounded-full text-xs font-black bg-[#B4F000] text-[#000000] hover:bg-[#c3fc18] flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Enquire for Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#000000]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
