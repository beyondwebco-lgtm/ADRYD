'use client';

import { ArrowRight, GraduationCap, Briefcase, Sparkles, TrendingUp } from 'lucide-react';
import { SKILL_CAREER_PATHWAYS } from '@/data/riderpreneurData';

export default function SkillsCareerSection() {
  return (
    <section className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0A9BE0]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider text-[#B4F000]">
            Career Pathways
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            SKILLS & FUTURE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              CAREER OPPORTUNITIES
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every shift trains you in high-value commercial capabilities. ADRYD transforms street-level experience into accredited skills prized by major employers.
          </p>
        </div>

        {/* 6 Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CAREER_PATHWAYS.map((path, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-[#030d17]/85 border border-[#0A9BE0]/25 hover:border-[#B4F000]/60 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Pathway 0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0A9BE0]/15 text-[#0A9BE0] text-[10px] font-bold border border-[#0A9BE0]/30">
                    {path.industry}
                  </span>
                </div>

                {/* Skill Learned */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#B4F000] mb-1">
                    Capability Built on Street
                  </div>
                  <h3 className="text-lg font-black text-white group-hover:text-[#B4F000] transition-colors">
                    {path.skillLearned}
                  </h3>
                  <div className="text-xs text-slate-300 mt-1 font-normal">
                    {path.riderActivity}
                  </div>
                </div>

                {/* Arrow Transition */}
                <div className="py-3 flex items-center gap-2 text-slate-500">
                  <div className="h-px bg-white/10 flex-1" />
                  <ArrowRight className="w-4 h-4 text-[#0A9BE0]" />
                  <div className="h-px bg-white/10 flex-1" />
                </div>

                {/* Future Career Role */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#0A9BE0] mb-1">
                    Future Corporate Role
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    {path.futureCareerRole}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-[#B4F000]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Verified Experience</span>
                </span>
                <span className="font-mono text-slate-400">Corporate Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
