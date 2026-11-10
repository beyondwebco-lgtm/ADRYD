'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  MapPin,
  Layers,
  Palette,
  FileCheck,
  ArrowRight,
  Info,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Share Your Campaign Brief',
    short: 'Brief',
    icon: FileText,
    desc: 'Submit your brand goals, target audience, preferred dates, and campaign budget through our straightforward enquiry workflow.',
    detail: 'Our campaign managers review your brand requirements to tailor the ideal EV deployment strategy in Hyderabad.',
  },
  {
    step: '02',
    title: 'Choose Target Areas & Corridors',
    short: 'Targeting',
    icon: MapPin,
    desc: 'Select from key commercial zones, tech clusters, arterial road corridors, or specific PIN-code clusters for focused reach.',
    detail: 'Target IT corridors like HITEC City & Gachibowli, shopping hubs like Jubilee Hills, or residential community sectors.',
  },
  {
    step: '03',
    title: 'Select Campaign Package',
    short: 'Package',
    icon: Layers,
    desc: 'Choose single rider for hyper-local focus, dual riders for coordinated impact, or a multi-vehicle fleet for citywide buzz.',
    detail: 'Flexible duration choices from single-day launch events to multi-week sustained brand presence.',
  },
  {
    step: '04',
    title: 'Approve Branding & Briefing',
    short: 'Branding',
    icon: Palette,
    desc: 'Review digital design mockups for EV panels, promotional boxes, or rider apparel before physical fabrication and installation.',
    detail: 'All materials strictly adhere to vehicle safety guidelines and high-resolution print specifications.',
  },
  {
    step: '05',
    title: 'Execution & Campaign Reporting',
    short: 'Execution',
    icon: FileCheck,
    desc: 'Verified EV partners execute approved routes. Receive photographic installation proof, logs, and a campaign summary.',
    detail: 'Planned GPS route logs and tracking summaries provide transparent accountability of street presence.',
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-carbon-dark text-soft-ivory relative overflow-hidden border-t border-b border-graphite-border">
      {/* Background Subtle Route Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-yellow/10 border border-electric-yellow/30 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
              Step-by-Step Campaign Process
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white uppercase leading-tight">
              How ADRYD Works
            </h2>
            <p className="mt-4 text-base text-muted-grey">
              From brief to street deployment: a structured, transparent process designed to give
              your brand effortless outdoor visibility.
            </p>
          </div>

          {/* Quotation Notice */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-graphite/40 border border-graphite-border max-w-md text-xs text-muted-grey">
            <Info className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Note:</strong> Website submissions initiate a custom
              campaign quotation and discovery process with our planning team.
            </p>
          </div>
        </div>

        {/* Step Navigation Tabs (Desktop) */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-burgundy/40 border-electric-yellow text-white shadow-lg'
                    : 'bg-carbon-card border-graphite-border text-muted-grey hover:bg-graphite/50 hover:text-soft-ivory'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-1 left-4 right-4 h-1 bg-electric-yellow rounded-full" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-heading font-black text-xl ${
                      isActive ? 'text-electric-yellow' : 'text-muted-grey/60'
                    }`}
                  >
                    {s.step}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'text-electric-yellow' : 'text-muted-grey'
                    }`}
                  />
                </div>
                <div className="font-heading font-bold text-sm text-soft-ivory line-clamp-1">
                  {s.short}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase (Desktop Detail Card) */}
        <div className="hidden lg:block bg-carbon-card border border-graphite-border rounded-2xl p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-12 gap-8 items-center relative z-10">
            <div className="col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-heading font-black text-4xl text-electric-yellow">
                  Step {steps[activeStep].step}
                </span>
                <span className="h-4 w-[1px] bg-white/20" />
                <span className="font-tech text-xs uppercase tracking-widest text-muted-grey">
                  Execution Milestone
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                {steps[activeStep].title}
              </h3>
              <p className="text-base text-soft-ivory/85 leading-relaxed">
                {steps[activeStep].desc}
              </p>
              <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border text-sm text-muted-grey">
                <span className="text-electric-yellow font-semibold">How it operates: </span>
                {steps[activeStep].detail}
              </div>
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center p-8 rounded-xl bg-graphite/30 border border-graphite-border text-center">
              <div className="w-20 h-20 rounded-2xl bg-burgundy/50 border border-burgundy-light flex items-center justify-center text-electric-yellow mb-4">
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="w-10 h-10" />;
                })()}
              </div>
              <div className="text-xs font-tech uppercase tracking-wider text-muted-grey mb-3">
                Ready to Proceed?
              </div>
              <Link
                href="/book-campaign"
                className="w-full py-2.5 px-4 rounded-lg bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
              >
                Start Campaign Brief
              </Link>
            </div>
          </div>
        </div>

        {/* Vertical Timeline on Mobile / Tablet */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-carbon-card border border-graphite-border rounded-xl p-6 relative flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-2xl text-electric-yellow">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-burgundy/30 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-white">{s.title}</h3>
                <p className="text-sm text-muted-grey leading-relaxed">{s.desc}</p>
                <p className="text-xs text-soft-ivory/70 pt-2 border-t border-graphite-border">
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
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-electric-yellow hover:underline"
          >
            <span>Read Complete Workflow &amp; Campaign Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
