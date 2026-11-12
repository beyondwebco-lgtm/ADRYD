'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  QrCode,
  ShoppingBag,
  PackageCheck,
  Truck,
  ArrowRight,
  Eye,
  CheckCircle2,
  Users2,
  ShieldCheck,
} from 'lucide-react';

export default function AdrydUpgradeSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const sixSteps = [
    {
      num: '01',
      title: 'Brand Promotion',
      short: 'Vehicle & Apparel Branding',
      desc: 'Eye-level electric scooter livery and uniformed promotional rider transit along planned corridors.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'Product Showcase',
      short: 'Live Tactile Displays',
      desc: 'Secure illuminated acrylic showcase units allow customers to inspect real products up close.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'QR Product Discovery',
      short: 'Contactless Digital Portal',
      desc: 'High-contrast QR codes link directly to interactive catalogues, launch videos, and special offers.',
      icon: QrCode,
    },
    {
      num: '04',
      title: 'Customer Enquiry / Order',
      short: 'Purchase Assistance',
      desc: 'Immediate customer lead capture, WhatsApp chat assistance, or direct online cart checkouts.',
      icon: ShoppingBag,
    },
    {
      num: '05',
      title: 'Pre-Order & Group Demand',
      short: 'Batch & Bulk Bookings',
      desc: 'Pre-booking demand generation from corporate campuses, gated societies, and student hostels.',
      icon: PackageCheck,
    },
    {
      num: '06',
      title: 'Local Fulfilment',
      short: 'Hyperlocal Deliveries',
      desc: 'Promotional movement paired with local batch fulfillment, scheduled drops, or store replenishment.',
      icon: Truck,
    },
  ];

  const sampleConcepts = [
    {
      title: 'Handcrafted Woollen & Crochet Wear',
      archetype: 'Artisan & Apparel Concept',
      brand: 'CrochetNest Demonstration',
      desc: 'Direct physical exposure outside women’s hostels, universities, and tech parks during winter and festive shopping seasons.',
      tags: ['Tactile Knitwear', 'Illuminated Showcase', 'Hostel Pre-Orders'],
      image: '/images/posters/crochet-nest.jpg',
    },
    {
      title: 'Authentic Handloom Sarees & Silk Heritage',
      archetype: 'Ethnic Heritage Concept',
      brand: 'IkatVastra Demonstration',
      desc: 'Exquisite silk weaves brought to upscale shopping streets and wedding community centers, bridging tradition with mobile discovery.',
      tags: ['GI-Tagged Silks', 'Warm LED Lighting', 'Wedding Pre-Orders'],
      image: '/images/posters/ikat-vastra.jpg',
    },
    {
      title: 'Pure Linen & Menswear Collections',
      archetype: 'D2C Apparel Concept',
      brand: 'LinenNest Demonstration',
      desc: 'D2C fashion labels execute lunch-hour blitzes across business districts, offering 50% launch vouchers via glowing QR codes.',
      tags: ['D2C Launch Blitz', 'Corporate Lunch Stops', 'Bulk Uniforms'],
      image: '/images/posters/linen-nest.jpg',
    },
  ];

  return (
    <section className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#E7FF39]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E7FF39]" />
              ADRYD UPGRADE PLATFORM
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-[1.05]">
              FROM BRAND VISIBILITY{' '}
              <br />
              TO PRODUCT DISCOVERY{' '}
              <br />
              <span className="text-[#E7FF39]">TO COMMERCE.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#A5A8B3] leading-relaxed font-normal">
              ADRYD Upgrade explores a connected mobile commerce model where electric vehicles become brand
              touchpoints, product showcases and gateways to local shopping experiences.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/adryd-upgrade"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] transition-all"
            >
              <span>Explore ADRYD Upgrade</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Visual Steps Horizontal Stepper */}
        <div className="mb-16">
          <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#E7FF39] mb-4">
            The 6-Step Connected Mobile Commerce Architecture:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {sixSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = activeStep === idx + 1;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx + 1)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_20px_rgba(231,255,57,0.15)] ring-1 ring-[#E7FF39]'
                      : 'bg-[#17191F]/60 border-[#353740] hover:border-[#E7FF39]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-tech text-xs font-black ${isSelected ? 'text-[#E7FF39]' : 'text-[#A5A8B3]'}`}>
                        {step.num}
                      </span>
                      <StepIcon className={`w-4 h-4 ${isSelected ? 'text-[#E7FF39]' : 'text-[#A5A8B3]'}`} />
                    </div>
                    <div className="font-heading font-bold text-xs text-white line-clamp-1">
                      {step.title}
                    </div>
                  </div>
                  <div className="text-[11px] text-[#A5A8B3] mt-2 line-clamp-2">
                    {step.short}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Conceptual Customer Journey Simulation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#17191F] border border-[#353740] shadow-2xl mb-16 relative">
          <div className="flex items-center justify-between pb-4 border-b border-[#353740] mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#E7FF39] animate-pulse" />
              <span className="font-tech text-xs font-bold text-[#E7FF39] uppercase tracking-wider">
                Interactive Conceptual Journey
              </span>
            </div>
            <span className="text-[10px] text-[#A5A8B3] font-tech uppercase">
              Illustrative Customer Flow
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#353740] shadow-xl">
                <Image
                  src="/images/adryd-mobile-showcase.jpg"
                  alt="ADRYD Mobile Showcase Prototype"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0C0D12]/90 backdrop-blur-md border border-[#353740]">
                  <div className="text-[10px] font-tech font-bold text-[#E7FF39] uppercase">
                    Stage {sixSteps[activeStep - 1].num} • {sixSteps[activeStep - 1].title}
                  </div>
                  <div className="text-xs font-heading font-bold text-white mt-0.5">
                    {sixSteps[activeStep - 1].short}
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation & Steps */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                {sixSteps[activeStep - 1].title}
              </h3>
              <p className="text-sm sm:text-base text-[#F2F3F5] leading-relaxed">
                {sixSteps[activeStep - 1].desc}
              </p>
              <div className="p-4 rounded-xl bg-[#0C0D12] border border-[#353740] space-y-2 text-xs text-[#A5A8B3]">
                <div className="text-white font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E7FF39]" />
                  <span>How it works in practice:</span>
                </div>
                <p>
                  A commuter in HITEC City spots the branded electric vehicle, approaches the illuminated showcase at a planned stationary stop, scans the integrated QR code, browses the digital product catalogue, and submits a confirmed pre-order for scheduled delivery.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev % 6) + 1)}
                  className="px-4 py-2.5 rounded-lg bg-[#24212C] hover:bg-[#2D2A37] border border-[#353740] text-xs font-heading font-bold text-[#F2F3F5] flex items-center gap-1.5 transition-all"
                >
                  <span>Next Step in Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E7FF39]" />
                </button>
                <span className="text-[11px] text-[#A5A8B3] font-tech">
                  Step {activeStep} of 6
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Campaign Concepts (Clearly labeled as concepts) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs font-tech font-bold uppercase tracking-widest text-[#E7FF39]">
                Strategic Archetype References
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-1">
                Sample Campaign Concepts (Illustrative Only)
              </h3>
            </div>
            <span className="text-[10px] font-tech uppercase px-2.5 py-1 rounded bg-[#17191F] text-[#A5A8B3] border border-[#353740]">
              Concept Blueprints
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {sampleConcepts.map((sc, idx) => (
              <div
                key={idx}
                className="bg-[#17191F] border border-[#353740] rounded-2xl p-6 flex flex-col justify-between hover:border-[#E7FF39]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-tech text-[#E7FF39] uppercase font-bold px-2 py-0.5 rounded bg-[#24212C] border border-[#353740]">
                      {sc.archetype}
                    </span>
                    <span className="text-[10px] text-[#A5A8B3] font-tech">• {sc.brand}</span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-[#E7FF39] transition-colors">
                    {sc.title}
                  </h4>
                  <p className="text-xs text-[#A5A8B3] leading-relaxed mb-4">
                    {sc.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#353740] mb-4">
                    {sc.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-tech px-2 py-0.5 rounded bg-[#0C0D12] text-[#F2F3F5] border border-[#353740]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-[10px] font-tech text-[#A5A8B3] italic text-center">
                    Sample campaign concept — subject to pilot validation
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory & Safety Notice */}
        <div className="p-4 rounded-xl bg-[#17191F] border border-[#353740] flex items-start gap-3 text-xs text-[#A5A8B3]">
          <ShieldCheck className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Conceptual Notice:</strong> ADRYD Upgrade visual blueprints, sample campaign posters and product journeys illustrate proposed platform capabilities. Commercial deployment of illuminated display cases and mobile selling is subject to local transport approvals, structural safety testing, and municipal retail guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
