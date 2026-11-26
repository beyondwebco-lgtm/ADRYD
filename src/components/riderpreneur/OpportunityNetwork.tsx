'use client';

import { useState } from 'react';
import {
  Sparkles,
  Zap,
  Megaphone,
  ShoppingBag,
  Video,
  Smartphone,
  Camera,
  Flame,
  Briefcase,
  Users,
  Compass,
  Share2,
} from 'lucide-react';
import { RIDERPRENEUR_OPPORTUNITIES } from '@/data/riderpreneurData';

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

export default function OpportunityNetwork() {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const activeOpp = RIDERPRENEUR_OPPORTUNITIES[activeNodeIndex];
  const ActiveIcon = ICON_MAP[activeOpp.iconName] || Sparkles;

  return (
    <section className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0A9BE0]/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
            The Connected Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ONE RIDER ID.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              CONNECTED OPPORTUNITIES.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every opportunity branches from a single unified digital identity. One rider profile unlocks 11 dynamic revenue streams across Hyderabad.
          </p>
        </div>

        {/* Interactive Radial / Network Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center: Interactive Node Selector */}
          <div className="lg:col-span-7 relative">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#030d17]/90 border border-[#0A9BE0]/30 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              {/* Central Identity Pill */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#001426] border border-[#0A9BE0]/40 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B4F000] text-black font-black flex items-center justify-center text-sm shadow-[0_0_15px_rgba(180,240,0,0.5)]">
                    ID
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#B4F000]">
                      ADRYD-R10025 • LIFETIME IDENTITY
                    </div>
                    <div className="text-sm font-extrabold text-white">
                      Unified Multi-Stream Hub
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] text-xs font-bold border border-[#0A9BE0]/30">
                  <span className="w-2 h-2 rounded-full bg-[#B4F000] animate-pulse" />
                  <span>11 Streams Synced</span>
                </div>
              </div>

              {/* 11 Opportunity Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {RIDERPRENEUR_OPPORTUNITIES.map((opp, index) => {
                  const NodeIcon = ICON_MAP[opp.iconName] || Sparkles;
                  const isSelected = activeNodeIndex === index;
                  return (
                    <button
                      key={opp.id}
                      onClick={() => setActiveNodeIndex(index)}
                      className={`p-3 rounded-2xl text-left transition-all duration-200 border flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-[#0A9BE0]/20 border-[#B4F000] shadow-[0_0_20px_rgba(180,240,0,0.25)] scale-[1.02]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#0A9BE0]/40'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-[#B4F000] text-black border-[#B4F000]'
                            : 'bg-white/5 text-[#0A9BE0] border-white/10'
                        }`}
                      >
                        <NodeIcon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-mono font-bold text-slate-400">
                          #{opp.number}
                        </div>
                        <div
                          className={`text-xs font-bold truncate ${
                            isSelected ? 'text-[#B4F000]' : 'text-white'
                          }`}
                        >
                          {opp.action}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Active Node Detail Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#03111f] border-2 border-[#0A9BE0]/40 shadow-[0_15px_45px_rgba(10,155,224,0.25)] relative overflow-hidden">
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: activeOpp.color }}
              />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400">
                  Node #{activeOpp.number} of 11
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider"
                  style={{
                    backgroundColor: `${activeOpp.color}20`,
                    color: activeOpp.color,
                    border: `1px solid ${activeOpp.color}40`,
                  }}
                >
                  {activeOpp.action}
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${activeOpp.color}15`,
                    borderColor: `${activeOpp.color}35`,
                    color: activeOpp.color,
                  }}
                >
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {activeOpp.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {activeOpp.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 mb-6">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[11px] font-bold uppercase text-[#B4F000] mb-0.5">
                    Revenue Stream
                  </div>
                  <div className="text-xs text-slate-200">
                    {activeOpp.earningModel}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[11px] font-bold uppercase text-[#0A9BE0] mb-0.5">
                    Live Field Scenario
                  </div>
                  <div className="text-xs text-slate-300">
                    {activeOpp.exampleScenario}
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
                <span>Eligibility: {activeOpp.eligibility}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
