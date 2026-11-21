import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Layers,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campaign Plans & Monthly Subscriptions | ADRYD',
  description:
    'Explore ADRYD’s five campaign activation formats and four monthly subscription retainers designed for brands of all sizes across Hyderabad.',
};

const packages = [
  {
    id: 'starter',
    name: 'Starter',
    riders: '1 Rider',
    duration: '3 Days / 1 Corridor',
    desc: 'Perfect for local business pilots, product sampling runs or single-neighborhood promotions.',
    features: ['1 Branded Electric Vehicle', 'Dedicated Single Corridor', 'Handout & Flyer Distribution', 'Basic Activity Log'],
    popular: false,
    bg: 'bg-white',
    border: 'border-[#DCECF2]',
    color: 'text-[#00A8C8]',
  },
  {
    id: 'local_reach',
    name: 'Local Reach',
    riders: '2–3 Riders',
    duration: '1 Week / Multi-Area',
    desc: 'Designed for store openings, weekend buzz and focused commercial district activations.',
    features: ['2–3 Branded Electric Vehicles', 'Cross-Corridor Street Routes', 'Illuminated Product Showcasing', 'QR Code Scan Reports'],
    popular: false,
    bg: 'bg-white',
    border: 'border-[#DCECF2]',
    color: 'text-[#1756C1]',
  },
  {
    id: 'community',
    name: 'Community',
    riders: '4–5 Riders',
    duration: '2 Weeks / Prime Hubs',
    desc: 'High-frequency street presence across IT corridors, universities and prime retail avenues.',
    features: ['4–5 Branded Electric Vehicles', 'Dual-Cluster Corridor Routing', 'QR Ordering & Pre-Orders', 'Visual Verification Reports'],
    popular: true,
    bg: 'bg-gradient-to-b from-[#EAF9FD]/60 to-white',
    border: 'border-[#00A8C8]',
    color: 'text-[#00A8C8]',
  },
  {
    id: 'city_activation',
    name: 'City Activation',
    riders: '6–10 Riders',
    duration: '1 Month Strategic',
    desc: 'Sustained citywide brand recall across Hyderabad’s top high-street commercial hubs.',
    features: ['6–10 Branded Electric Vehicles', 'Citywide Coordinated Routes', 'Full Showcase & Delivery Sync', 'Dedicated Campaign Lead'],
    popular: false,
    bg: 'bg-white',
    border: 'border-[#DCECF2]',
    color: 'text-[#58C9EF]',
  },
  {
    id: 'bulk_activation',
    name: 'Bulk Activation',
    riders: '10+ Riders',
    duration: 'Custom Scope / Enterprise',
    desc: 'Large-scale fleet mobilizations, major brand launches, festival sponsorships and PR activations.',
    features: ['10+ Custom Electric Fleet', 'Multi-Corridor Synchronized Convoys', 'Full Media & Reel Coverage', 'Custom Reporting Analytics'],
    popular: false,
    bg: 'bg-white',
    border: 'border-[#DCECF2]',
    color: 'text-[#123C83]',
  },
];

const subscriptions = [
  {
    id: 'sub_micro',
    name: 'Micro-Brand Presence',
    riders: '1 Rider • Part-Time',
    hours: '40–50 Active Hours / Month',
    desc: 'Consistent monthly street visibility for local cafes, boutiques, handmade creators and neighborhood stores.',
    features: ['1 Designated Brand EV', 'Weekend Peak Hours', 'Local Corridor Focus', 'Monthly Activity Summary'],
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#D5EFF7]',
    color: 'text-[#00A8C8]',
  },
  {
    id: 'sub_growth',
    name: 'Growth Retainer',
    riders: '2–3 Riders • Regular',
    hours: '80–120 Active Hours / Month',
    desc: 'Steady multi-neighborhood presence for growing retail labels, D2C brands and multi-location businesses.',
    features: ['2–3 Branded EVs', 'Weekday & Weekend Split', 'Rotating Corridor Routes', 'Bi-Weekly Progress Logs'],
    bg: 'bg-white',
    border: 'border-[#DCECF2]',
    color: 'text-[#1756C1]',
  },
  {
    id: 'sub_dominance',
    name: 'Commercial Dominance',
    riders: '4–6 Riders • Daily',
    hours: '160–240 Active Hours / Month',
    desc: 'Continuous high-recall street and storefront presence across Hyderabad’s busiest shopping and tech hubs.',
    features: ['4–6 Branded EVs', 'Daily Peak Transit Hours', 'Full Corridor Saturation', 'Dedicated Operations Lead'],
    bg: 'bg-[#F6FAFC]',
    border: 'border-[#DCECF2]',
    color: 'text-[#00A8C8]',
  },
  {
    id: 'sub_enterprise',
    name: 'Enterprise Fleet',
    riders: '8+ Riders • Dedicated',
    hours: 'Custom Fleet Hours / Month',
    desc: 'Fully dedicated mobile marketplace fleet operating as an exclusive mobile retail and promotional arm.',
    features: ['Custom Dedicated Fleet', 'Bespoke Display Designs', 'Full Delivery & Pre-Order Sync', 'Custom SLA & Telemetry'],
    bg: 'bg-white',
    border: 'border-[#DCECF2]',
    color: 'text-[#123C83]',
  },
];

export default function CampaignPlansPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flexible Formats</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Campaign plans.{' '}
            <br />
            <span className="text-[#00A8C8]">Measurable impact.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            Choose from five concise campaign activation tiers or structured monthly subscription retainers.
          </p>
        </div>

        {/* SECTION 1: 5 CAMPAIGN PACKAGES */}
        <div className="mb-24">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00A8C8]">
              <Layers className="w-3.5 h-3.5" />
              <span>Deployment Tiers</span>
            </div>
            <h2 className="font-heading font-black text-3xl text-[#172B3A] uppercase">
              Campaign Packages
            </h2>
            <p className="text-sm text-[#637786]">
              Designed for product drops, grand openings and focused promotional blitzes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 border ${pkg.border} ${pkg.bg} card-hover-lift flex flex-col justify-between relative shadow-sm`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#00A8C8] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-black text-2xl text-[#172B3A]">
                      {pkg.name}
                    </h3>
                    <div className="text-sm font-bold text-[#00A8C8] mt-1">
                      {pkg.riders}
                    </div>
                    <div className="text-xs text-[#637786] font-medium mt-0.5">
                      {pkg.duration}
                    </div>
                  </div>

                  <p className="text-xs text-[#637786] leading-relaxed font-normal">
                    {pkg.desc}
                  </p>

                  <div className="pt-2 border-t border-[#DCECF2] space-y-2">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#172B3A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8C8] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/book-campaign?package=${pkg.id}`}
                    className={`w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      pkg.popular
                        ? 'bg-[#00A8C8] text-white hover:bg-[#0093AF] shadow-md'
                        : 'bg-[#F6FAFC] text-[#172B3A] hover:bg-[#EAF9FD] border border-[#DCECF2]'
                    }`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: 4 MONTHLY SUBSCRIPTIONS */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1756C1]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Continuous Coverage</span>
            </div>
            <h2 className="font-heading font-black text-3xl text-[#172B3A] uppercase">
              Monthly Subscription Plans
            </h2>
            <p className="text-sm text-[#637786]">
              Sustained monthly visibility designed to keep your brand top-of-mind across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className={`rounded-3xl p-7 border ${sub.border} ${sub.bg} card-hover-lift flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#172B3A]">
                      {sub.name}
                    </h3>
                    <div className={`text-xs font-bold mt-1 ${sub.color}`}>
                      {sub.riders}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#637786] font-medium mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{sub.hours}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#637786] leading-relaxed font-normal">
                    {sub.desc}
                  </p>

                  <div className="pt-2 border-t border-[#DCECF2] space-y-2">
                    {sub.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#172B3A]">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${sub.color} shrink-0`} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/book-campaign?plan=${sub.id}`}
                    className="w-full py-3 rounded-full text-xs font-bold bg-white text-[#172B3A] border border-[#DCECF2] hover:border-[#00A8C8] hover:text-[#00A8C8] flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Enquire for Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
