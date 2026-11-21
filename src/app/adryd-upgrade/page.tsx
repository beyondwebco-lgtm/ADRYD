import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  QrCode,
  ShoppingBag,
  PackageCheck,
  ArrowRight,
  Truck,
  Eye,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADRYD Upgrade V3.0 | The Moving Marketplace Platform',
  description:
    'Discover ADRYD Upgrade: turning electric vehicle movement into moving product showcases, QR pre-orders, and hyperlocal fulfillment across Hyderabad.',
};

const stages = [
  {
    num: '01',
    title: 'Brand Promotion',
    desc: 'High-recall electric scooter wrapping and branded rider apparel moving along planned commercial routes.',
    icon: Eye,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#00A8C8]',
  },
  {
    num: '02',
    title: 'Product Showcase',
    desc: 'Illuminated, weather-sealed display compartments bringing real products directly to urban pedestrian hubs.',
    icon: Sparkles,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#1756C1]',
  },
  {
    num: '03',
    title: 'QR Commerce',
    desc: 'Pedestrians scan high-contrast on-scooter QR codes to view mobile catalogues and place instant orders.',
    icon: QrCode,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#123C83]',
  },
  {
    num: '04',
    title: 'Customer Purchase',
    desc: 'Direct ordering assistance and promo code redemption through frictionless mobile checkout.',
    icon: ShoppingBag,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#58C9EF]',
  },
  {
    num: '05',
    title: 'Pre-Order Capture',
    desc: 'Scheduled showcase stops at corporate tech parks and gated communities collecting advance orders.',
    icon: PackageCheck,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#00A8C8]',
  },
  {
    num: '06',
    title: 'Hyperlocal Fulfilment',
    desc: 'Same-day delivery and neighborhood order dispatch powered by the electric mobility fleet.',
    icon: Truck,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#1756C1]',
  },
];

export default function AdrydUpgradePage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Platform Evolution V3.0
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            From visibility to{' '}
            <br />
            <span className="text-[#00A8C8]">product commerce.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            ADRYD Upgrade transforms electric vehicle transit from passive mobile billboards into interactive moving retail and promotional showrooms.
          </p>
        </div>

        {/* 6 Stages Grid */}
        <div className="mb-24">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="font-heading font-black text-3xl text-[#172B3A] uppercase">
              The 6-Stage Customer Journey
            </h2>
            <p className="text-sm text-[#637786]">
              How awareness converts into discovery and real-world purchase intent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.num}
                  className={`rounded-3xl ${stage.bg} border border-[#DCECF2] p-8 card-hover-lift flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${stage.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`font-heading font-black text-3xl ${stage.color}`}>
                        {stage.num}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#172B3A]">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#637786] leading-relaxed mt-2">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Callout Card */}
        <div className="rounded-3xl bg-[#F6FAFC] border border-[#DCECF2] p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#172B3A] uppercase">
              Ready to Upgrade Your Brand&apos;s Street Presence?
            </h3>
            <p className="text-sm text-[#637786]">
              Explore customized campaign packages and showcase stops tailored to your products.
            </p>
          </div>

          <Link
            href="/book-campaign"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] text-white font-bold text-sm shadow-md transition-all shrink-0"
          >
            <span>Launch a Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
