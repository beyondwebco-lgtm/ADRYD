'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, Bike, Users2, ShieldCheck, Layers, Building2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function CampaignPackagesSection() {
  const [viewMode, setViewMode] = useState<'packages' | 'subscriptions'>('packages');
  const showPrices = SITE_CONFIG.approvedForPublicDisplay;

  return (
    <section id="campaign-plans" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
              Campaign Architecture
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
              {viewMode === 'packages' ? (
                <>
                  FLEXIBLE CAMPAIGNS.{' '}
                  <span className="text-[#E7FF39]">MEASURABLE MOVEMENT.</span>
                </>
              ) : (
                <>
                  KEEP YOUR BRAND{' '}
                  <span className="text-[#E7FF39]">MOVING.</span>
                </>
              )}
            </h2>
            <p className="mt-4 text-base text-[#A5A8B3] leading-relaxed">
              {viewMode === 'packages'
                ? 'Five illustrative campaign deployment tiers designed for local businesses, product launches, and citywide fleet activations across Hyderabad.'
                : 'Sustained monthly visibility plans designed to keep your products, catalogues, and brand top-of-mind across prime commercial corridors.'}
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="p-1 rounded-xl bg-[#17191F] border border-[#353740] flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('packages')}
              className={`px-5 py-2.5 rounded-lg text-xs font-heading font-bold transition-all ${
                viewMode === 'packages'
                  ? 'bg-[#E7FF39] text-[#0C0D12] shadow-[0_0_15px_rgba(231,255,57,0.3)]'
                  : 'text-[#A5A8B3] hover:text-white'
              }`}
            >
              Campaign Packages
            </button>
            <button
              type="button"
              onClick={() => setViewMode('subscriptions')}
              className={`px-5 py-2.5 rounded-lg text-xs font-heading font-bold transition-all ${
                viewMode === 'subscriptions'
                  ? 'bg-[#E7FF39] text-[#0C0D12] shadow-[0_0_15px_rgba(231,255,57,0.3)]'
                  : 'text-[#A5A8B3] hover:text-white'
              }`}
            >
              Monthly Plans
            </button>
          </div>
        </div>

        {/* View Mode 1: 5 Campaign Packages */}
        {viewMode === 'packages' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {SITE_CONFIG.campaignPackages.map((pkg, idx) => (
                <div
                  key={pkg.id}
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                    pkg.id === 'local-reach'
                      ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_30px_rgba(231,255,57,0.12)] ring-1 ring-[#E7FF39]'
                      : 'bg-[#17191F] border-[#353740] hover:border-[#E7FF39]/40'
                  }`}
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-tech font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#24212C] text-[#E7FF39] border border-[#353740]">
                        {pkg.badge}
                      </span>
                      <span className="text-xs font-tech text-[#A5A8B3]">
                        {pkg.riders} {pkg.riders === 1 ? 'Rider' : 'Riders'}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-xl text-white mb-1">
                      {pkg.name}
                    </h3>

                    <div className="text-xs font-tech text-[#E7FF39] mb-3">
                      {pkg.durationLabel} • {pkg.tagline}
                    </div>

                    {/* Price Block (Controlled by central config) */}
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
                            Indicative Plan
                          </div>
                          <span className="text-[10px] text-[#A5A8B3] font-tech">
                            Custom route quotation
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-[#A5A8B3] leading-relaxed mb-4">
                      {pkg.description}
                    </p>

                    {/* Features */}
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

            <div className="p-4 rounded-xl bg-[#17191F] border border-[#353740] flex items-start gap-3 text-xs text-[#A5A8B3]">
              <ShieldCheck className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
              <p>
                <strong className="text-white">Planning Assumption Notice:</strong> All campaign packages, durations, and rider configurations represent planning examples from the ADRYD Version 3.0 BRD. Exact commercial quotations are calculated based on route feasibility, vehicle wrapping requirements, and active campaign durations in Hyderabad.
              </p>
            </div>
          </div>
        )}

        {/* View Mode 2: 4 Monthly Subscription Plans */}
        {viewMode === 'subscriptions' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SITE_CONFIG.subscriptionPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                    plan.id === 'sub-growth'
                      ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_30px_rgba(231,255,57,0.12)] ring-1 ring-[#E7FF39]'
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

                    {/* Fee display controlled by config */}
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
                            Monthly Subscription Concept
                          </div>
                          <span className="text-[10px] text-[#A5A8B3] font-tech">
                            Structured retainer scheduling
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

            <div className="p-4 rounded-xl bg-[#17191F] border border-[#353740] text-xs text-[#A5A8B3]">
              <strong className="text-white">Subscription Architecture Note:</strong> ADRYD does not charge recurring automatic payments or direct debit transactions on this website. Monthly plans represent structured promotional agreements subject to commercial contracts and operational feasibility.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

