'use client';

import { useState } from 'react';
import { Award, CheckCircle2, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';
import { CAREER_GROWTH_LADDER, CareerLevel } from '@/data/riderpreneurData';

export default function CareerLadderSection() {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const current = CAREER_GROWTH_LADDER.find((l) => l.level === selectedLevel) || CAREER_GROWTH_LADDER[0];

  return (
    <section id="career" className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[#0A9BE0]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
            Compounding Elevation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            THE 10-TIER{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              CAREER LADDER
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Say goodbye to gig dead-ends. Every kilometer, positive review, and campaign hour compounds toward higher ranks, exclusive brand retainers, and leadership status.
          </p>
        </div>

        {/* 10 Level Selector Bar (horizontal scrollable on mobile) */}
        <div className="mb-12">
          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar p-2 rounded-2xl bg-[#030d17] border border-[#0A9BE0]/30">
            {CAREER_GROWTH_LADDER.map((lvl) => {
              const isSelected = lvl.level === selectedLevel;
              return (
                <button
                  key={lvl.level}
                  onClick={() => setSelectedLevel(lvl.level)}
                  className={`flex-1 min-w-[90px] py-3 px-2 rounded-xl text-center transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#0A9BE0]/20 border-[#B4F000] shadow-[0_0_15px_rgba(180,240,0,0.3)] scale-[1.02]'
                      : 'bg-white/5 border-transparent hover:bg-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div
                    className="text-[10px] font-mono font-bold"
                    style={{ color: isSelected ? '#B4F000' : '#94A3B8' }}
                  >
                    LVL {lvl.level}
                  </div>
                  <div
                    className={`text-xs font-black truncate mt-0.5 ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {lvl.badge}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Level Feature Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#03111f]/95 border-2 border-[#0A9BE0]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Top highlight bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{ backgroundColor: current.color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Badge & Level Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span
                  className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider"
                  style={{
                    backgroundColor: `${current.color}20`,
                    color: current.color,
                    border: `1px solid ${current.color}40`,
                  }}
                >
                  Tier {current.level} of 10
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {current.experience}
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {current.badge}
                </h3>
                <div className="text-sm font-bold text-[#0A9BE0] mt-1">
                  {current.title}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {current.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#001426] border border-white/10 space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Target Activity Requirement
                </div>
                <div className="text-sm font-black text-[#B4F000]">
                  {current.monthlyTarget}
                </div>
              </div>
            </div>

            {/* Right Col: Unlocked Perks & Privileges */}
            <div className="lg:col-span-7 bg-[#010810]/70 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#B4F000]" />
                  <h4 className="text-sm font-black uppercase tracking-wider text-white">
                    Unlocked Perks & Privileges
                  </h4>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Level {current.level} Benefits
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {current.perks.map((perk, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                    <span className="leading-snug">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
