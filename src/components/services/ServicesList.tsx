'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { SERVICES_CARD_DETAILS, DetailCardItem } from '@/data/websiteCardsData';
import CardDetailsModal from '@/components/ui/CardDetailsModal';

interface ServiceVertical {
  id: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  bg: string;
  border: string;
  color: string;
  btnColor: string;
  description: string;
  features: string[];
  image: string;
}

const serviceVerticals: ServiceVertical[] = [
  {
    id: 'promote',
    title: 'Promote',
    tagline: 'Take brands onto the streets.',
    icon: Megaphone,
    bg: 'bg-[#041220]/75',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
    btnColor: 'bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000]',
    description: 'High-impact mobile advertising using electric scooter fleets wrapped in vibrant, approved brand livery moving along high-footfall commercial corridors.',
    features: ['High-recall street visibility', 'Targeted urban corridors', 'Uniformed brand ambassadors', 'Eco-friendly electric fleet'],
    image: '/images/campaigns/service-adryd-promote.jpg',
  },
  {
    id: 'showcase',
    title: 'Showcase',
    tagline: 'Bring products closer to customers.',
    icon: ShoppingBag,
    bg: 'bg-[#051C33]/65',
    border: 'border-[#0A9BE0]/40 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
    btnColor: 'bg-[#0A9BE0] hover:bg-[#0889c7] text-white',
    description: 'Specialized vehicle-mounted illuminated display boxes and product sampling trays that allow potential buyers to examine, touch and experience your items.',
    features: ['Illuminated showcase display', 'Curated sampling trays', 'Live product demos', 'Secure weather-resistant boxes'],
    image: '/images/campaigns/service-adryd-showcase.jpg',
  },
  {
    id: 'sell',
    title: 'Sell',
    tagline: 'Create opportunities to purchase.',
    icon: QrCode,
    bg: 'bg-[#041220]/75',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
    btnColor: 'bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000]',
    description: 'Direct QR-driven mobile commerce enabling pedestrians and commuters to scan and immediately purchase featured items through mobile-optimized checkout pages.',
    features: ['Instant QR catalogue access', 'Frictionless mobile checkout', 'Digital payment integration', 'Campaign-specific promo codes'],
    image: '/images/campaigns/service-adryd-sell.jpg',
  },
  {
    id: 'preorder',
    title: 'Pre-Order',
    tagline: 'Capture customer interest.',
    icon: PackageCheck,
    bg: 'bg-[#051C33]/65',
    border: 'border-[#0A9BE0]/40 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
    btnColor: 'bg-[#0A9BE0] hover:bg-[#0889c7] text-white',
    description: 'Capture advance orders, test consumer interest for new product launches, and gather committed purchase intent prior to broad market rollout.',
    features: ['Demand validation testing', 'Exclusive pre-launch reservations', 'Community & office group orders', 'Early-bird customer capture'],
    image: '/images/campaigns/service-adryd-preorder.jpg',
  },
  {
    id: 'deliver',
    title: 'Deliver',
    tagline: 'Support local fulfilment.',
    icon: Truck,
    bg: 'bg-[#041220]/75',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
    btnColor: 'bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000]',
    description: 'Same-day hyperlocal delivery and fast restocking for local retailers, supporting immediate promotional fulfilment within designated delivery corridors.',
    features: ['Same-day neighborhood drop', 'Boutique retail replenishment', 'Sample pack distribution', 'Sustainable zero-emission transit'],
    image: '/images/campaigns/service-adryd-deliver.jpg',
  },
  {
    id: 'viral',
    title: 'Viral',
    tagline: 'Extend reach through social content.',
    icon: Video,
    bg: 'bg-[#051C33]/65',
    border: 'border-[#0A9BE0]/40 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
    btnColor: 'bg-[#0A9BE0] hover:bg-[#0889c7] text-white',
    description: 'Creative social media capture, street reaction videos, influencer collaborations and high-energy content translating real-world buzz into digital reach.',
    features: ['Street interaction reels', 'High-res campaign B-roll', 'Micro-influencer meetups', 'Multi-platform social content'],
    image: '/images/campaigns/service-adryd-viral.jpg',
  },
  {
    id: 'insights',
    title: 'Insights',
    tagline: 'Explore future reporting capabilities.',
    icon: BarChart3,
    bg: 'bg-[#041220]/80',
    border: 'border-[#0A9BE0]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
    btnColor: 'bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000]',
    description: 'Planned telemetry and verification systems designed to log campaign operating hours, route tracking, QR engagement scans and audience reach metrics.',
    features: ['Corridor route logs', 'Daily active hours tracking', 'QR scan interaction logs', 'Campaign post-run summaries'],
    image: '/images/campaigns/service-adryd-insights.jpg',
  },
];

export default function ServicesList() {
  const [selectedService, setSelectedService] = useState<DetailCardItem | null>(null);

  return (
    <>
      <div className="space-y-8">
        {serviceVerticals.map((svc) => {
          const Icon = svc.icon;
          const detailData = SERVICES_CARD_DETAILS[svc.id] || null;

          return (
            <div
              key={svc.id}
              id={svc.id}
              onClick={() => setSelectedService(detailData)}
              className={`group rounded-3xl ${svc.bg} backdrop-blur-2xl border ${svc.border} p-8 lg:p-10 card-hover-lift scroll-mt-32 transition-all duration-300 shadow-xl cursor-pointer relative overflow-hidden`}
            >
              {/* Subtle top indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-white/70 group-hover:text-white group-hover:bg-[#0A9BE0]/20 group-hover:border-[#0A9BE0]/40 transition-all">
                <Maximize2 className="w-3.5 h-3.5 text-[#B4F000]" />
                <span>Click for Details</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Icon & Title & Image */}
                <div className="lg:col-span-4 space-y-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-[#000000]/80 shadow-sm flex items-center justify-center ${svc.color} border border-white/10`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-heading font-black text-3xl text-white">
                      {svc.title}
                    </h2>
                    <p className={`text-sm font-bold mt-1 ${svc.color}`}>
                      {svc.tagline}
                    </p>
                  </div>

                  {svc.image && (
                    <div className="relative w-full max-w-sm aspect-[16/10] rounded-2xl overflow-hidden mt-3 border border-white/10 group-hover:border-[#0A9BE0]/40 transition-all bg-[#000000]/50 shadow-inner">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}
                </div>

                {/* Middle: Description & Features */}
                <div className="lg:col-span-5 space-y-5">
                  <p className="text-sm sm:text-base text-[#E2E8F0]/85 leading-relaxed font-normal">
                    {svc.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {svc.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${svc.color} shrink-0`} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-start">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(detailData);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-[1.02]"
                  >
                    <span>View Specifications</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
                  </button>

                  <Link
                    href={`/book-campaign?service=${svc.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-black text-xs shadow-sm transition-all hover:scale-[1.02] ${svc.btnColor}`}
                  >
                    <span>Plan This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Details Modal */}
      <CardDetailsModal
        item={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
