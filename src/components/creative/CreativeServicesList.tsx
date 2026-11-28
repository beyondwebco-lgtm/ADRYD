'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Video,
  Palette,
  Camera,
  Share2,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { CREATIVE_CARD_DETAILS, DetailCardItem } from '@/data/websiteCardsData';
import CardDetailsModal from '@/components/ui/CardDetailsModal';

interface CreativeServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  bg: string;
  border: string;
  color: string;
}

const services: CreativeServiceItem[] = [
  {
    id: 'reels',
    title: 'Street Interaction Reels',
    desc: 'Short-form vertical video capturing authentic consumer reactions, unboxings and live product sampling moments.',
    icon: Video,
    bg: 'bg-[#041220]/80',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
  },
  {
    id: 'wrap',
    title: 'Vehicle Wrap Design',
    desc: 'High-contrast automotive livery layouts engineered specifically for moving two-wheelers and high legibility at distance.',
    icon: Palette,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
  },
  {
    id: 'cinematics',
    title: 'Campaign Cinematics & B-Roll',
    desc: 'High-resolution drone footage and moving convoy tracking shots capturing your fleet moving through Hyderabad landmarks.',
    icon: Camera,
    bg: 'bg-[#041220]/80',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
  },
  {
    id: 'social',
    title: 'Social Amplification Packages',
    desc: 'Packaged content assets optimized for Instagram, YouTube Shorts and digital ad placements.',
    icon: Share2,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
  },
];

export default function CreativeServicesList() {
  const [selectedCreative, setSelectedCreative] = useState<DetailCardItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {services.map((svc) => {
          const Icon = svc.icon;
          const detailItem = CREATIVE_CARD_DETAILS[svc.id] || null;

          return (
            <div
              key={svc.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedCreative(detailItem)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCreative(detailItem);
                }
              }}
              className={`group rounded-3xl ${svc.bg} backdrop-blur-xl border ${svc.border} p-8 lg:p-10 card-hover-lift flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.35)] cursor-pointer relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B4F000]`}
            >
              {/* Subtle top indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-white/70 group-hover:text-white group-hover:bg-[#0A9BE0]/20 group-hover:border-[#0A9BE0]/40 transition-all">
                <Maximize2 className="w-3.5 h-3.5 text-[#B4F000]" />
                <span>Click for Details</span>
              </div>

              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/30 shadow-sm flex items-center justify-center ${svc.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading font-black text-2xl text-white">
                    {svc.title}
                  </h2>
                  <p className="text-sm text-[#E2E8F0] leading-relaxed mt-2">
                    {svc.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#B4F000] transition-colors">
                  <span>View Package Inclusions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium Smooth Animated Details Modal */}
      <CardDetailsModal
        item={selectedCreative}
        onClose={() => setSelectedCreative(null)}
      />
    </>
  );
}
