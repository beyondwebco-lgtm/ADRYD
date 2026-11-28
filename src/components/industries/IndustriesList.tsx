'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shirt,
  Utensils,
  Sparkles,
  Heart,
  Compass,
  Store,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { CATEGORY_CARD_DETAILS, DetailCardItem } from '@/data/websiteCardsData';
import CardDetailsModal from '@/components/ui/CardDetailsModal';

interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  icon: React.ElementType;
  bg: string;
  border: string;
  color: string;
}

const industries: IndustrySector[] = [
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    tagline: 'Designer Sarees, Casuals & Handloom Collections',
    desc: 'Showcase fabric textures, embroidery details and festive collections directly in high-footfall shopping areas.',
    icon: Shirt,
    bg: 'bg-[#041220]/80',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
  },
  {
    id: 'food',
    name: 'Food & Bakery',
    tagline: 'Artisanal Chocolates, Snacks & Specialty Foods',
    desc: 'Deploy temperature-protected sample units with instant QR ordering for sweet treats and gourmet foods.',
    icon: Utensils,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
  },
  {
    id: 'handmade',
    name: 'Handmade Crafts',
    tagline: 'Artisan Goods, Candles & Home Accents',
    desc: 'Connect independent makers with urban consumers through tactile showcases in front of cafes and lifestyle parks.',
    icon: Sparkles,
    bg: 'bg-[#041220]/80',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    tagline: 'Skincare, Fragrances & Personal Care',
    desc: 'Distribute tester samples, promote pre-orders and demonstrate premium beauty products at eye level.',
    icon: Heart,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Electronics',
    tagline: 'Gadgets, Accessories & Home Living',
    desc: 'Drive curiosity for consumer tech, wearables and daily innovations with illuminated vehicle enclosures.',
    icon: Compass,
    bg: 'bg-[#041220]/80',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
  },
  {
    id: 'local',
    name: 'Local Businesses & Cafés',
    tagline: 'Neighborhood Outlets & Dining Hubs',
    desc: 'Create immediate neighborhood buzz for new store openings, weekend specials and seasonal discounts.',
    icon: Store,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
  },
];

export default function IndustriesList() {
  const [selectedIndustry, setSelectedIndustry] = useState<DetailCardItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {industries.map((ind) => {
          const Icon = ind.icon;
          const detailItem = CATEGORY_CARD_DETAILS[ind.id] || null;

          return (
            <div
              key={ind.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIndustry(detailItem)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndustry(detailItem);
                }
              }}
              className={`group rounded-3xl ${ind.bg} backdrop-blur-xl border ${ind.border} p-8 card-hover-lift flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.35)] cursor-pointer relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B4F000]`}
            >
              {/* Top right click badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-white/70 group-hover:text-white group-hover:bg-[#0A9BE0]/20 group-hover:border-[#0A9BE0]/40 transition-all">
                <Maximize2 className="w-3.5 h-3.5 text-[#B4F000]" />
                <span>Click for Details</span>
              </div>

              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/30 shadow-sm flex items-center justify-center ${ind.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-white">
                    {ind.name}
                  </h2>
                  <p className={`text-xs font-bold mt-1 ${ind.color}`}>
                    {ind.tagline}
                  </p>
                  <p className="text-sm text-[#E2E8F0] leading-relaxed mt-2.5">
                    {ind.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#B4F000] transition-colors">
                  <span>View Category Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium Smooth Animated Details Modal */}
      <CardDetailsModal
        item={selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
      />
    </>
  );
}
