'use client';

import { useState } from 'react';
import {
  Megaphone,
  ShoppingBag,
  Video,
  Smartphone,
  Sparkles,
  Camera,
  Flame,
  Briefcase,
  Users,
  Compass,
  Share2,
  ArrowRight,
  Plus,
} from 'lucide-react';
import { RIDERPRENEUR_OPPORTUNITIES, Opportunity } from '@/data/riderpreneurData';
import OpportunityModal from './OpportunityModal';

const ICON_MAP: Record<string, React.ElementType> = {
  Megaphone,
  ShoppingBag,
  Video,
  Smartphone,
  Sparkles,
  Camera,
  Flame,
  Briefcase,
  Users,
  Compass,
  Share2,
};

export default function OpportunityGrid() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);

  const handleApply = () => {
    const el = document.getElementById('join-options');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="opportunities" className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0A9BE0]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider text-[#B4F000]">
            The 11 Opportunity Spectrum
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            11 OPPORTUNITIES.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              ONE RIDER.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No two days have to look the same. Tap into 11 distinct marketing and revenue opportunities tailored to your riding style, skills, and schedule.
          </p>
        </div>

        {/* 11 Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RIDERPRENEUR_OPPORTUNITIES.map((opp) => {
            const Icon = ICON_MAP[opp.iconName] || Sparkles;
            return (
              <div
                key={opp.id}
                onClick={() => setSelectedOpportunity(opp)}
                className="group relative rounded-3xl p-6 sm:p-7 bg-[#030d17]/85 border border-[#0A9BE0]/25 hover:border-[#B4F000]/60 transition-all duration-300 cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_35px_rgba(10,155,224,0.3)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number & Action Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      #{opp.number}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider transition-colors"
                      style={{
                        backgroundColor: `${opp.color}15`,
                        color: opp.color,
                        border: `1px solid ${opp.color}35`,
                      }}
                    >
                      {opp.action}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: `${opp.color}15`,
                        borderColor: `${opp.color}30`,
                        color: opp.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white group-hover:text-[#B4F000] transition-colors leading-snug">
                        {opp.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tagline & Short Description */}
                  <p className="text-xs font-semibold text-[#0A9BE0] mb-2">
                    {opp.tagline}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {opp.description}
                  </p>
                </div>

                {/* Bottom Earning Snippet & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div className="text-[11px] text-slate-400 font-medium">
                    <span className="text-[#B4F000] font-bold">Earning: </span>
                    <span className="line-clamp-1">{opp.earningModel.split('+')[0]}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-[#B4F000] transition-colors shrink-0 ml-2">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <OpportunityModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onApply={handleApply}
        />
      </div>
    </section>
  );
}
