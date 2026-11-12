import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Info,
  Layers,
  Calendar,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Campaign Packages & Monthly Plans | ADRYD Upgrade',
  description:
    'Explore flexible electric mobility campaign packages and monthly brand movement subscription plans across Hyderabad with ADRYD Upgrade.',
};

export default function CampaignPlansPage() {
  const showPrices = SITE_CONFIG.approvedForPublicDisplay;

  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-[#24212C]/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            CAMPAIGN ARCHITECTURE &amp; PLANS
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-[0.98] mb-6">
            CAMPAIGN PLANS.{' '}
            <br />
            <span className="text-[#E7FF39]">MEASURABLE IMPACT.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A5A8B3] leading-relaxed font-normal">
            Whether you are testing hyper-local customer response with a single rider or orchestrating a
            citywide multi-rider blitz across Hyderabad, explore our illustrative campaign packages and
            structured monthly plans.
          </p>
        </div>

        {/* SECTION 1: 5 CAMPAIGN PACKAGES */}
        <div id="packages" className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#353740]">
            <div>
              <span className="font-tech text-xs text-[#E7FF39] uppercase tracking-wider font-bold">
                Illustrative Campaign Tiers
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
                Five Campaign Packages
              </h2>
            </div>
            <span className="text-xs text-[#A5A8B3] font-tech uppercase">
              Single-Day to Multi-Day Activations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {SITE_CONFIG.campaignPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                  pkg.id === 'local-reach'
                    ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_30px_rgba(231,255,57,0.15)] ring-1 ring-[#E7FF39]'
                    : 'bg-[#17191F] border-[#353740] hover:border-[#E7FF39]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-tech font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#24212C] text-[#E7FF39] border border-[#353740]">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-tech text-[#A5A8B3]">
                      {pkg.riders} {pkg.riders === 1 ? 'Rider' : 'Riders'}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white mb-1">
                    {pkg.name}
                  </h3>

                  <div className="text-xs font-tech text-[#E7FF39] mb-4">
                    {pkg.durationLabel} • {pkg.tagline}
                  </div>

                  {/* Price display controlled by config */}
                  <div className="mb-4 pb-4 border-b border-[#353740]">
                    {showPrices ? (
                      <div>
                        <div className="text-2xl font-heading font-black text-white">
                          ₹{pkg.indicativePrice.toLocaleString('en-IN')}
                        </div>
                        <span className="text-[10px] text-[#A5A8B3] font-tech uppercase block">
                          Indicative — subject to confirmation
                        </span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-sm font-heading font-bold text-white uppercase">
                          Custom Quotation
                        </div>
                        <span className="text-[10px] text-[#A5A8B3] font-tech">
                          Route feasibility assessment
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-[#A5A8B3] leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  <div className="mb-4 p-3 rounded-xl bg-[#0C0D12] border border-[#353740] text-[11px]">
                    <span className="text-[#E7FF39] font-semibold block mb-0.5">Ideal For:</span>
                    <span className="text-[#A5A8B3] leading-normal">{pkg.idealFor}</span>
                  </div>

                  <ul className="space-y-2 mb-6 text-xs text-[#F2F3F5]">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#E7FF39] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/book-campaign?package=${pkg.id}`}
                    className={`w-full py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all ${
                      pkg.id === 'local-reach'
                        ? 'bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] shadow-[0_0_20px_rgba(231,255,57,0.3)]'
                        : 'bg-[#24212C] hover:bg-[#2D2A37] border border-[#353740] text-white hover:border-[#E7FF39]/40'
                    }`}
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#17191F] border border-[#353740] text-xs text-[#A5A8B3] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Planning Note:</strong> Package configurations represent
              illustrative planning models from the ADRYD Version 3.0 BRD. Exact commercial quotations
              incorporate vehicle livery fabrication, showcase mounting requirements, and specific corridor timings.
            </p>
          </div>
        </div>

        {/* SECTION 2: 4 MONTHLY SUBSCRIPTION PLANS */}
        <div id="subscriptions" className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#353740]">
            <div>
              <span className="font-tech text-xs text-[#E7FF39] uppercase tracking-wider font-bold">
                Recurring Brand Retainers
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
                Monthly Subscription Plans
              </h2>
            </div>
            <span className="text-xs text-[#A5A8B3] font-tech uppercase">
              Sustained Street Frequency
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {SITE_CONFIG.subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                  plan.id === 'sub-growth'
                    ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_30px_rgba(231,255,57,0.15)] ring-1 ring-[#E7FF39]'
                    : 'bg-[#17191F] border-[#353740] hover:border-[#E7FF39]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-tech font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#24212C] text-[#E7FF39] border border-[#353740]">
                      {plan.badge}
                    </span>
                    <span className="text-xs font-tech text-[#A5A8B3]">Monthly Retainer</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white mb-1">
                    {plan.name}
                  </h3>

                  <div className="text-xs font-tech text-[#E7FF39] mb-4">
                    {plan.tagline}
                  </div>

                  <div className="mb-5 pb-5 border-b border-[#353740]">
                    {showPrices ? (
                      <div>
                        <div className="text-2xl font-heading font-black text-white">
                          {plan.displayFee}
                        </div>
                        <span className="text-[10px] text-[#A5A8B3] font-tech uppercase block">
                          Indicative monthly fee — subject to confirmation
                        </span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-sm font-heading font-bold text-white uppercase">
                          Retainer Agreement
                        </div>
                        <span className="text-[10px] text-[#A5A8B3] font-tech">
                          Scheduled corridor activations
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-[#A5A8B3] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 text-xs text-[#F2F3F5]">
                    {plan.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#E7FF39] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href={`/book-campaign?objective=${encodeURIComponent(`Monthly Plan: ${plan.name}`)}`}
                    className={`w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all ${
                      plan.id === 'sub-growth'
                        ? 'bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] shadow-[0_0_20px_rgba(231,255,57,0.3)]'
                        : 'bg-[#24212C] hover:bg-[#2D2A37] border border-[#353740] text-white hover:border-[#E7FF39]/40'
                    }`}
                  >
                    <span>Enquire About Monthly Plans</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#17191F] border border-[#353740] text-xs text-[#A5A8B3] flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Subscription Governance:</strong> ADRYD does not charge
              recurring credit card transactions or auto-debits on this website. Monthly plans represent
              scheduled commercial agreements executed after route confirmation and partner rider briefing.
            </p>
          </div>
        </div>

        {/* SECTION 3: COMPARISON MATRIX */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#17191F] border border-[#353740] shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="font-tech text-xs text-[#E7FF39] uppercase font-bold">
              Deployment Comparison
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-1">
              Campaign Packages vs. Monthly Retainers
            </h3>
            <p className="text-xs text-[#A5A8B3] mt-2 leading-relaxed">
              Choose short-term tactical bursts for store launches and flash offers, or sustained monthly
              retainers for ongoing retail discovery and corporate pre-orders.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#353740] text-[#A5A8B3] font-tech uppercase">
                  <th className="pb-3 font-bold">Feature / Parameter</th>
                  <th className="pb-3 font-bold text-white">Campaign Packages (Burst)</th>
                  <th className="pb-3 font-bold text-[#E7FF39]">Monthly Subscription Plans</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#353740]/60 text-[#F2F3F5]">
                <tr>
                  <td className="py-3 font-semibold text-white">Objective</td>
                  <td className="py-3 text-[#A5A8B3]">Store launches, events, sales &amp; product introductions</td>
                  <td className="py-3 text-[#A5A8B3]">Ongoing market presence, pre-orders &amp; brand recall</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-white">Duration</td>
                  <td className="py-3 text-[#A5A8B3]">3 Hours to Custom Day Blasts</td>
                  <td className="py-3 text-[#A5A8B3]">Monthly sustained weekly schedules</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-white">Fleet Scale</td>
                  <td className="py-3 text-[#A5A8B3]">1 to 20+ Electric Scooters</td>
                  <td className="py-3 text-[#A5A8B3]">Dedicated monthly fleet allocation</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-white">Showcase Enclosures</td>
                  <td className="py-3 text-[#A5A8B3]">Available as campaign add-on</td>
                  <td className="py-3 text-[#A5A8B3]">Integrated with Growth &amp; Premium tiers</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-white">Corridor Flexibility</td>
                  <td className="py-3 text-[#A5A8B3]">Fixed pre-planned routes</td>
                  <td className="py-3 text-[#A5A8B3]">Bi-weekly route adjustments across zones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

