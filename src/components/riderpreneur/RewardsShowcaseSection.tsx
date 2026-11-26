'use client';

import Image from 'next/image';
import { Gift, Award, Shield, Watch, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

export default function RewardsShowcaseSection() {
  const rewards = [
    {
      title: 'Official ADRYD Gear Kit',
      category: 'Milestone 01',
      desc: 'High-visibility aerodynamic windbreaker jacket, safety-certified helmet, and weatherproof display bag.',
      icon: Shield,
      points: 'Unlocked on Sign-Up',
      color: '#B4F000',
    },
    {
      title: 'Smart Health & Telemetry Watch',
      category: 'Level 4 Gold',
      desc: 'Smart fitness tracker monitoring daily commute stamina, heart rate, hydration, and GPS route logs.',
      icon: Watch,
      points: '3,000 Pts / Level 4',
      color: '#0A9BE0',
    },
    {
      title: 'Creator Gimbal & Microphone Set',
      category: 'Creator Badge',
      desc: '3-axis smartphone gimbal stabilizer plus dual wireless clip-on lapel microphones for crisp reel production.',
      icon: Camera,
      points: '5,000 Pts / Creator Program',
      color: '#B4F000',
    },
    {
      title: 'Founder Gold Plaque & Trophy',
      category: 'Level 9 Legend',
      desc: 'Commemorative engraved 24K gold-plated fleet distinction plaque celebrating veteran mentorship milestones.',
      icon: Award,
      points: 'Lifetime Distinction',
      color: '#F4DE26',
    },
  ];

  return (
    <section id="rewards" className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-[#B4F000]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider text-[#B4F000]">
            Milestones & Recognition
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            REWARDS &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              RECOGNITION
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Hard work deserves tangible appreciation. Earn premium branded apparel, smart tech accessories, creator gear, and annual distinction trophies.
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="rounded-3xl p-6 bg-[#030d17]/90 border border-[#0A9BE0]/30 hover:border-[#B4F000]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {r.category}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${r.color}15`,
                        borderColor: `${r.color}35`,
                        color: r.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-[#B4F000] transition-colors mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#B4F000]">
                    {r.points}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#0A9BE0]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
