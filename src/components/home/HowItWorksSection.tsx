'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Sliders,
  MapPin,
  CalendarCheck,
  CheckCircle2,
  BarChart3,
  ArrowRight,
  Info,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Tell Us About Your Brand',
    short: 'Brand Discovery',
    icon: FileText,
    desc: 'Share your business, products and promotional objectives through our interactive campaign brief.',
    detail: 'Whether you are an artisanal handloom label, D2C fashion startup, gourmet bakery or regional consumer brand, we understand your audience and goals.',
  },
  {
    step: '02',
    title: 'Choose Your Campaign',
    short: 'Service Selection',
    icon: Sliders,
    desc: 'Select promotion, showcase, pre-order, delivery or combined service interests tailored to your product type.',
    detail: 'Choose between pure vehicle promotion, tactile illuminated showcase boxes, on-ground QR mobile selling, pre-orders or last-mile delivery combinations.',
  },
  {
    step: '03',
    title: 'Select Your Audience',
    short: 'Zone Targeting',
    icon: MapPin,
    desc: 'Choose proposed target areas, PIN codes, landmarks and preferred dates across Hyderabad.',
    detail: 'Pick prime locations like HITEC City, Madhapur, Kukatpally, Kompally, or Gachibowli to align with where your buyers work, live, and shop.',
  },
  {
    step: '04',
    title: 'Plan Your Activation',
    short: 'Route & Wrap Feasibility',
    icon: CalendarCheck,
    desc: 'Review campaign requirements, branding, fleet size and operational feasibility with the ADRYD team.',
    detail: 'Our operations team checks vehicle availability, wrap fabrication specs, corridor timing, and location permissions for scheduled showcase stops.',
  },
  {
    step: '05',
    title: 'Campaign Execution',
    short: 'Street Deployment',
    icon: CheckCircle2,
    desc: 'Following approval and operational readiness, campaigns may be coordinated with eligible riders and vehicles.',
    detail: 'Trained EV partner riders deploy along agreed corridors, ensuring pristine vehicle presentation and on-ground customer interaction assistance.',
  },
  {
    step: '06',
    title: 'Review Outcomes',
    short: 'Metrics & Telemetry',
    icon: BarChart3,
    desc: 'Campaign reporting may include route evidence, QR engagement, enquiries and order-related metrics where supported.',
    detail: 'Transparent post-campaign summaries consolidate verified route logs, photo proof, digital catalogue visits, and qualified customer leads.',
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[400px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
              HOW ADRYD WORKS
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
              FROM YOUR IDEA{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#E7FF39]">TO A MOVING CAMPAIGN.</span>
            </h2>
            <p className="mt-4 text-base text-[#A5A8B3] leading-relaxed">
              A clear, transparent step-by-step journey connecting your brand objectives to verified
              electric mobility deployment across Hyderabad.
            </p>
          </div>

          {/* Quotation Notice */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#17191F] border border-[#353740] max-w-md text-xs text-[#A5A8B3]">
            <Info className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Enquiry Notice:</strong> The current website accepts
              campaign briefs and custom quotation requests, not instant automated bookings.
            </p>
          </div>
        </div>

        {/* 6 Step Navigation Tabs (Desktop) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 relative ${
                  isActive
                    ? 'bg-[#17191F] border-[#E7FF39] text-white shadow-[0_0_20px_rgba(231,255,57,0.15)] ring-1 ring-[#E7FF39]'
                    : 'bg-[#17191F]/70 border-[#353740] text-[#A5A8B3] hover:border-[#E7FF39]/40 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-heading font-black text-xl ${
                      isActive ? 'text-[#E7FF39]' : 'text-[#353740]'
                    }`}
                  >
                    {s.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-[#E7FF39]' : 'text-[#A5A8B3]'
                    }`}
                  />
                </div>
                <div className="font-heading font-bold text-xs text-white line-clamp-1">
                  {s.short}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase (Desktop Detail Card) */}
        <div className="hidden lg:block bg-[#17191F] border border-[#353740] rounded-3xl p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#24212C]/60 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-12 gap-8 items-center relative z-10">
            <div className="col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-heading font-black text-4xl text-[#E7FF39]">
                  Step {steps[activeStep].step}
                </span>
                <span className="h-4 w-[1px] bg-[#353740]" />
                <span className="font-tech text-xs uppercase tracking-widest text-[#A5A8B3]">
                  Campaign Phase
                </span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                {steps[activeStep].title}
              </h3>
              <p className="text-base text-[#F2F3F5] leading-relaxed">
                {steps[activeStep].desc}
              </p>
              <div className="p-4 rounded-xl bg-[#0C0D12] border border-[#353740] text-xs text-[#A5A8B3] leading-relaxed">
                <span className="text-[#E7FF39] font-semibold">How it operates: </span>
                {steps[activeStep].detail}
              </div>
            </div>

            <div className="col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0C0D12] border border-[#353740] text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] mb-4">
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="w-8 h-8" />;
                })()}
              </div>
              <div className="text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-3">
                Ready to plan?
              </div>
              <Link
                href="/book-campaign"
                className="w-full py-3 px-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.25)]"
              >
                Start Campaign Brief
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-[#17191F] border border-[#353740] rounded-2xl p-6 relative flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-2xl text-[#E7FF39]">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-white uppercase">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#F2F3F5] leading-relaxed">{s.desc}</p>
                <p className="text-xs text-[#A5A8B3] pt-2 border-t border-[#353740]">
                  {s.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#E7FF39] hover:underline"
          >
            <span>Explore Complete Operational Guidelines &amp; Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
