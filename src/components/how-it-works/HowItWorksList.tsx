'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Target,
  Compass,
  Rocket,
  ArrowRight,
  ShoppingBag,
  Users,
  Bike,
  Maximize2,
} from 'lucide-react';
import { HOW_IT_WORKS_CARD_DETAILS, DetailCardItem } from '@/data/websiteCardsData';
import CardDetailsModal from '@/components/ui/CardDetailsModal';

interface MainStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  bg: string;
  border: string;
  color: string;
  key: string;
}

interface StakeholderJourney {
  key: string;
  title: string;
  role: string;
  desc: string;
  icon: React.ElementType;
  bg: string;
  border: string;
  color: string;
  href: string;
  cta: string;
}

const mainSteps: MainStep[] = [
  {
    step: '01',
    key: 'plan',
    title: 'Tell Us Your Goal',
    subtitle: 'Share your brand, products and campaign needs.',
    desc: 'Submit your campaign requirements: objective, target city corridor (e.g. Hitec City, Jubilee Hills), desired duration, rider count, and whether you require vehicle wrap branding, live product showcases, or QR-driven sampling.',
    icon: Target,
    bg: 'bg-[#041220]/80',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
  },
  {
    step: '02',
    key: 'move',
    title: 'We Plan Your Campaign',
    subtitle: 'We help explore suitable riders, routes and promotion formats.',
    desc: 'Our operations team plans optimized corridor routing, coordinates approved vehicle branding wraps, prepares illuminated product display enclosures, and briefs verified riders on safety and route protocols.',
    icon: Compass,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
  },
  {
    step: '03',
    key: 'connect',
    title: 'Take Your Brand Further',
    subtitle: "Bring your campaign concept to life through ADRYD's planned mobility network.",
    desc: 'Your branded fleet takes to prime streets, creating high-recall impressions at eye level, showcasing products directly to interested customers, facilitating QR purchases, and generating viral street reaction content.',
    icon: Rocket,
    bg: 'bg-[#041220]/80',
    border: 'border-[#0A9BE0]/30 hover:border-[#B4F000]',
    color: 'text-[#0A9BE0]',
  },
];

const stakeholderJourneys: StakeholderJourney[] = [
  {
    key: 'brand_owner',
    title: 'Brand Owner Journey',
    role: 'Brands, Retailers & Makers',
    desc: 'From initial briefing to active street deployment, track your mobile presence and engage shoppers directly in their daily environments.',
    icon: ShoppingBag,
    bg: 'bg-[#041220]/80',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
    href: '/book-campaign',
    cta: 'Book Campaign',
  },
  {
    key: 'customer',
    title: 'Customer Experience',
    role: 'Pedestrians, Commuters & Shoppers',
    desc: 'Encounter eye-level brand vehicles in prime commercial hubs, view illuminated products in transit, scan instant QR codes and order on the spot.',
    icon: Users,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
    href: '/services',
    cta: 'Explore Experience',
  },
  {
    key: 'rider_partner',
    title: 'Rider Partner Experience',
    role: 'EV Riders & Fleet Operators',
    desc: 'Monetize daily rides on approved electric scooters by participating in coordinated promotional runs with zero commissions taken from your earnings.',
    icon: Bike,
    bg: 'bg-[#041220]/80',
    border: 'border-[#0A9BE0]/30 hover:border-[#B4F000]',
    color: 'text-[#0A9BE0]',
    href: '/become-a-rider',
    cta: 'Join as Rider',
  },
];

export default function HowItWorksList() {
  const [selectedDetail, setSelectedDetail] = useState<DetailCardItem | null>(null);

  return (
    <>
      {/* 3 Main Steps */}
      <div className="space-y-8 mb-24">
        {mainSteps.map((s) => {
          const Icon = s.icon;
          const detailItem =
            HOW_IT_WORKS_CARD_DETAILS[s.key] ||
            HOW_IT_WORKS_CARD_DETAILS[s.step] ||
            null;

          return (
            <div
              key={s.step}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedDetail(detailItem)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedDetail(detailItem);
                }
              }}
              className={`group rounded-3xl ${s.bg} backdrop-blur-xl border ${s.border} p-8 lg:p-10 card-hover-lift shadow-[0_12px_40px_rgba(0,0,0,0.35)] cursor-pointer relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B4F000]`}
            >
              {/* Subtle top indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-white/70 group-hover:text-white group-hover:bg-[#0A9BE0]/20 group-hover:border-[#0A9BE0]/40 transition-all">
                <Maximize2 className="w-3.5 h-3.5 text-[#B4F000]" />
                <span>Click for Details</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`font-heading font-black text-4xl ${s.color}`}>
                      {s.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-[#041220]/80 border border-[#B4F000]/30 shadow-sm flex items-center justify-center ${s.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h2 className="font-heading font-black text-2xl text-white">
                    {s.title}
                  </h2>
                  <p className={`text-sm font-bold ${s.color}`}>
                    {s.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-normal">
                    {s.desc}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#B4F000]">
                    <span>Inspect Step {s.step} Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3 Stakeholder Journeys */}
      <div className="mb-20">
        <div className="max-w-2xl mb-10 space-y-2">
          <h2 className="font-heading font-black text-3xl text-white uppercase">
            The Moving Ecosystem
          </h2>
          <p className="text-sm text-[#E2E8F0]">
            Connecting three key participants across our mobility network. Click any card to explore the full journey blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stakeholderJourneys.map((j) => {
            const Icon = j.icon;
            const detailItem = HOW_IT_WORKS_CARD_DETAILS[j.key] || null;

            return (
              <div
                key={j.key}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedDetail(detailItem)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedDetail(detailItem);
                  }
                }}
                className={`group rounded-3xl ${j.bg} backdrop-blur-xl border ${j.border} p-8 card-hover-lift flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.3)] cursor-pointer relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B4F000]`}
              >
                {/* Subtle top indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/70 group-hover:text-white group-hover:bg-[#0A9BE0]/20 group-hover:border-[#0A9BE0]/40 transition-all">
                  <Maximize2 className="w-3 h-3 text-[#B4F000]" />
                  <span>Details</span>
                </div>

                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/30 shadow-sm flex items-center justify-center ${j.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${j.color}`}>
                      {j.role}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white mt-1">
                      {j.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal mt-2">
                      {j.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#B4F000] transition-colors">
                    <span>Explore {j.role}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Smooth Animated Details Modal */}
      <CardDetailsModal
        item={selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />
    </>
  );
}
