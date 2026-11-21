import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Navigation,
  QrCode,
  Smartphone,
  BarChart3,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology & Roadmap | ADRYD',
  description:
    'Explore ADRYD’s planned technology architecture: GPS corridor tracking, QR telemetry, mobile rider coordination and transparent campaign analytics.',
};

const techModules = [
  {
    stage: 'Stage 1 • Pilot Phase',
    title: 'Corridor Route Verification',
    desc: 'Structured GPS trip logging to record planned campaign hours, corridor completion and geographical street coverage across Hyderabad.',
    icon: Navigation,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#00A8C8]',
  },
  {
    stage: 'Stage 2 • In Progress',
    title: 'QR Scan Telemetry',
    desc: 'Time-stamped QR scan analytics recording consumer interactions, digital catalogue views and product lead conversions.',
    icon: QrCode,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#1756C1]',
  },
  {
    stage: 'Stage 3 • Architecture',
    title: 'Rider Partner App',
    desc: 'Mobile application designed for riders to check in for shifts, view assigned corridor routes, verify vehicle livery and submit daily run logs.',
    icon: Smartphone,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#123C83]',
  },
  {
    stage: 'Stage 4 • Roadmap',
    title: 'Brand Analytics Portal',
    desc: 'Planned dashboard for brand partners to inspect heatmaps, view daily vehicle active hours, review photo verification and download performance summaries.',
    icon: BarChart3,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#58C9EF]',
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Platform Architecture
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Connected mobility.{' '}
            <br />
            <span className="text-[#00A8C8]">Measurable data.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            ADRYD is developing verified verification and reporting systems to bring accountability and digital precision to physical out-of-home advertising.
          </p>
        </div>

        {/* 4 Tech Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {techModules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl ${mod.bg} border border-[#DCECF2] p-8 lg:p-10 card-hover-lift flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${mod.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider bg-white px-3 py-1 rounded-full text-[#172B3A] shadow-sm">
                      {mod.stage}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-heading font-black text-2xl text-[#172B3A]">
                      {mod.title}
                    </h2>
                    <p className="text-sm text-[#637786] leading-relaxed mt-2">
                      {mod.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#DCECF2] text-xs text-[#637786] flex items-center gap-2">
                  <ShieldCheck className={`w-4 h-4 ${mod.color}`} />
                  <span>Privacy-compliant anonymous telemetry</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pilot Disclosure */}
        <div className="rounded-3xl bg-[#F6FAFC] border border-[#DCECF2] p-8 text-center max-w-3xl mx-auto space-y-3">
          <h3 className="font-heading font-bold text-lg text-[#172B3A]">
            Pilot Roadmap Disclosure
          </h3>
          <p className="text-xs sm:text-sm text-[#637786] leading-relaxed">
            ADRYD is actively validating these capabilities during its current Hyderabad pilot. Real-time customer tracking and automated billing portals represent planned platform developments rolling out progressively.
          </p>
          <div className="pt-2">
            <Link
              href="/book-campaign"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#00A8C8] hover:underline"
            >
              <span>Explore Active Pilot Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
