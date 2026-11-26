'use client';

import { Award, Briefcase, Camera, ShieldCheck, Compass, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';
import { SPECIAL_PROGRAMMES } from '@/data/riderpreneurData';

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  Briefcase,
  Camera,
  ShieldCheck,
  Compass,
  TrendingUp,
};

export default function SpecialProgrammesSection() {
  return (
    <section className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[#0A9BE0]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
            Targeted Development
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            SIX SPECIAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              DEVELOPMENT PROGRAMMES
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Beyond standard daily routes, qualify for specialized academies that match your creative talents, leadership instincts, or entrepreneurial drive.
          </p>
        </div>

        {/* 6 Special Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIAL_PROGRAMMES.map((prog, idx) => {
            const Icon = ICON_MAP[prog.iconName] || Award;
            return (
              <div
                key={prog.id}
                className="rounded-3xl p-7 bg-[#030d17]/90 border border-[#0A9BE0]/30 hover:border-[#B4F000]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Programme 0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 flex items-center justify-center text-[#B4F000]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-[#B4F000] transition-colors mb-1.5">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0A9BE0] mb-3">
                    {prog.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/10 mb-5">
                    {prog.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400">
                  <strong className="text-white">Target Profile: </strong>
                  <span>{prog.whoItIsFor}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
