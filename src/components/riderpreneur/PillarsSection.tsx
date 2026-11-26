'use client';

import { DollarSign, TrendingUp, Award, Check } from 'lucide-react';

export default function PillarsSection() {
  const pillars = [
    {
      action: 'EARN',
      title: 'Multiple Income Streams',
      subtitle: 'Beyond piece-rate delivery',
      accentColor: '#B4F000',
      description:
        'Delivery riders typically trade hours for flat drop fees. ADRYD unlocks transit visibility retainers, sampling commissions, digital affiliate residuals, and video bounties on top of your riding time.',
      highlights: [
        'Hourly corridor brand visibility retainers',
        'Direct product sales commissions (8%–18%)',
        'Lifetime digital affiliate attribution on purchases',
        'On-ground content creation & stunt bonuses',
      ],
    },
    {
      action: 'GROW',
      title: 'Professional Up-skilling',
      subtitle: 'From logistics to brand marketing',
      accentColor: '#0A9BE0',
      description:
        'Transform your daily presence into verified professional capital. Build real-world expertise in consumer engagement, field sales pitching, short-form digital media, and fleet operations.',
      highlights: [
        'ADRYD Street Ambassador Masterclasses',
        'Hands-on training in product pitching & sampling',
        'Smartphone content capture and pacing workshops',
        'Direct mentorship from startup founders & managers',
      ],
    },
    {
      action: 'RISE',
      title: 'A 10-Tier Career Progression',
      subtitle: 'Long-term equity & leadership',
      accentColor: '#FFFFFF',
      description:
        'No dead-end gig loops. Climb through 10 clear career growth milestones from Starter to Antique. Unlock leadership council seats, sponsored holiday vacations, and lifetime royalty shares.',
      highlights: [
        'Clear milestone metrics for every level tier',
        'Corridor Captaincy and Road Marshal positions',
        'Sponsored brand vacation getaways (Goa & Coorg)',
        'Pathways to launch your own independent micro-fleet',
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-[#0A9BE0]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
            The Riderpreneur Ethos
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            WHAT IS AN ADRYD{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              RIDERPRENEUR?
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We are redefining urban two-wheeler mobility. You are not an anonymous delivery courier. You are a mobile brand partner, a street-level influencer, and an entrepreneurial force.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.action}
              className="relative rounded-3xl p-8 bg-[#030d17]/90 border border-[#0A9BE0]/30 hover:border-[#B4F000]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Action Glow Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-2xl font-black tracking-widest px-3.5 py-1 rounded-xl"
                    style={{
                      backgroundColor: `${pillar.accentColor}18`,
                      color: pillar.accentColor,
                      border: `1px solid ${pillar.accentColor}40`,
                    }}
                  >
                    {pillar.action}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">
                    Pillar
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#B4F000] transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0A9BE0] mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {pillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <div className="mt-0.5 rounded-full p-0.5 bg-[#B4F000]/20 text-[#B4F000] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
