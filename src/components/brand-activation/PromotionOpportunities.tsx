'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Eye,
  Users,
  QrCode,
  ShoppingBag,
  Clock,
  Video,
  Share2,
  MapPin,
  Car,
  Tv,
  Globe2,
  Compass,
} from 'lucide-react';
import { PROMOTION_OPPORTUNITIES, PromotionOpportunity } from '@/data/brandActivationData';

interface PromotionOpportunitiesProps {
  onSelectOpportunity: (opportunity: PromotionOpportunity) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  QrCode: <QrCode className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  Tv: <Tv className="w-5 h-5" />,
  Globe2: <Globe2 className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
};

export default function PromotionOpportunities({ onSelectOpportunity }: PromotionOpportunitiesProps) {
  return (
    <section id="opportunities" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expansive Activation Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            12 WAYS TO GROW YOUR BRAND.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Click any promotion vector below to explore operational blueprints, business benefits, real-world use cases, and deployment specifications.
          </p>
        </div>

        {/* 12 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMOTION_OPPORTUNITIES.map((opp) => {
            const icon = ICON_MAP[opp.iconName] || <Sparkles className="w-5 h-5" />;
            return (
              <div
                key={opp.id}
                onClick={() => onSelectOpportunity(opp)}
                className="group relative p-6 rounded-2xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/50 hover:bg-[#041222] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(10,155,224,0.15)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${opp.color}15`,
                        borderColor: `${opp.color}40`,
                        color: opp.color,
                      }}
                    >
                      {icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-white/50">{opp.number}</span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                        style={{
                          backgroundColor: `${opp.color}10`,
                          borderColor: `${opp.color}30`,
                          color: opp.color,
                        }}
                      >
                        {opp.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#B4F000] transition-colors">
                    {opp.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0A9BE0] mt-0.5">
                    {opp.tagline}
                  </p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {opp.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#B4F000] transition-colors">
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
