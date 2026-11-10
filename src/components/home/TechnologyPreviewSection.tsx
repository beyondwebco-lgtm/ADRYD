import Link from 'next/link';
import {
  Cpu,
  Navigation,
  Clock,
  MapPin,
  CheckCircle2,
  Shield,
  ArrowRight,
  Activity,
  Layers,
} from 'lucide-react';

export default function TechnologyPreviewSection() {
  return (
    <section className="py-24 bg-carbon-black text-soft-ivory relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-graphite border border-graphite-border text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-electric-yellow" />
            Engineering &amp; Platform Architecture
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            Smarter Campaigns.{' '}
            <span className="text-electric-yellow">Clearer Execution.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-grey leading-relaxed">
            Eliminating opacity in physical outdoor advertising. Our planned technology stack
            combines GPS route verification, mobile partner workflows, and consolidated post-campaign
            reporting.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="rounded-2xl bg-carbon-card border border-graphite-border shadow-2xl p-6 sm:p-8 relative overflow-hidden mb-12">
          {/* Mockup Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-graphite-border">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-tech text-muted-grey uppercase tracking-wider pl-2 border-l border-graphite-border">
                ADRYD Campaign Intelligence Console — Platform Preview
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-tech font-bold uppercase">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                Execution Roadmap Preview
              </span>
            </div>
          </div>

          {/* Mockup Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            {/* Left Metrics (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border">
                <div className="text-[11px] font-tech text-muted-grey uppercase tracking-wider mb-1">
                  Campaign Identifier
                </div>
                <div className="font-heading font-bold text-lg text-white">
                  HYD-CORR-2026-084
                </div>
                <div className="text-xs text-electric-yellow mt-0.5 font-medium">
                  Dual-Rider Corridor Promotion
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-graphite/40 border border-graphite-border">
                  <div className="flex items-center gap-1 text-[10px] font-tech text-muted-grey uppercase mb-1">
                    <Navigation className="w-3 h-3 text-electric-yellow" />
                    Distance Target
                  </div>
                  <div className="font-heading font-black text-xl text-white">
                    142.8 <span className="text-xs font-normal text-muted-grey">km</span>
                  </div>
                  <div className="text-[10px] text-emerald-400">Verified Path</div>
                </div>

                <div className="p-3.5 rounded-xl bg-graphite/40 border border-graphite-border">
                  <div className="flex items-center gap-1 text-[10px] font-tech text-muted-grey uppercase mb-1">
                    <Clock className="w-3 h-3 text-electric-yellow" />
                    Active Window
                  </div>
                  <div className="font-heading font-black text-xl text-white">
                    06:45 <span className="text-xs font-normal text-muted-grey">hrs</span>
                  </div>
                  <div className="text-[10px] text-emerald-400">Peak Corridors</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-2.5">
                <div className="text-[11px] font-tech text-muted-grey uppercase tracking-wider">
                  Verification Milestones
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-soft-ivory">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Artwork Digital Proof Approval
                    </span>
                    <span className="text-muted-grey font-tech">Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-soft-ivory">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Vehicle Panel Installation Inspection
                    </span>
                    <span className="text-muted-grey font-tech">Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-soft-ivory">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Rider Route &amp; Safety Briefing
                    </span>
                    <span className="text-muted-grey font-tech">Completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map Visualisation (8 cols) */}
            <div className="lg:col-span-8 bg-carbon-black rounded-xl border border-graphite-border p-5 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-graphite-border">
                <span className="font-heading font-semibold text-soft-ivory flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-electric-yellow" />
                  Corridor Path Visualisation — Hyderabad HITEC &amp; Madhapur
                </span>
                <span className="text-[10px] font-tech text-electric-yellow uppercase">
                  Roadmap Concept
                </span>
              </div>

              {/* Vector Corridor Simulation */}
              <div className="relative aspect-[16/8] my-4 rounded-lg bg-graphite/30 border border-white/5 flex items-center justify-center overflow-hidden">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#730018" />
                      <stop offset="50%" stopColor="#FFE500" />
                      <stop offset="100%" stopColor="#FFE500" />
                    </linearGradient>
                  </defs>

                  {/* Faded Road Grid */}
                  <line x1="0" y1="80" x2="1000" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                  <line x1="0" y1="160" x2="1000" y2="160" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                  <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                  <line x1="500" y1="0" x2="500" y2="400" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                  <line x1="750" y1="0" x2="750" y2="400" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />

                  {/* Animated Active Route */}
                  <path
                    d="M60,180 C180,60 350,140 520,90 S780,180 920,110"
                    fill="none"
                    stroke="url(#routeGrad)"
                    strokeWidth="4"
                    className="animate-route-dash"
                  />

                  {/* Waypoint Markers */}
                  <circle cx="60" cy="180" r="5" fill="#FFE500" />
                  <circle cx="350" cy="120" r="5" fill="#FFE500" />
                  <circle cx="520" cy="90" r="5" fill="#FFE500" />
                  <circle cx="920" cy="110" r="5" fill="#FFE500" />
                </svg>

                <div className="absolute top-4 left-4 bg-carbon-black/80 px-2.5 py-1 rounded text-[10px] font-tech text-white border border-white/10">
                  Rider A • In Orbit Mall Transit
                </div>
                <div className="absolute bottom-4 right-4 bg-carbon-black/80 px-2.5 py-1 rounded text-[10px] font-tech text-electric-yellow border border-white/10">
                  Rider B • Mindspace IT Corridor
                </div>
              </div>

              {/* Technology Pillars Under Dashboard */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-graphite-border text-[11px] text-muted-grey">
                <div>
                  <span className="text-white font-medium block">GPS Telemetry</span>
                  <span>Location interval logs</span>
                </div>
                <div>
                  <span className="text-white font-medium block">Post-Run Digest</span>
                  <span>Distance &amp; time breakdown</span>
                </div>
                <div>
                  <span className="text-white font-medium block">Privacy By Design</span>
                  <span>Strict data compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Statement */}
        <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-grey">
          <div className="flex items-start gap-2.5 max-w-3xl">
            <Shield className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
            <p>
              <strong className="text-soft-ivory">Platform Roadmap Disclosure:</strong> In line with our
              business requirements, live GPS tracking and automated real-time dispatch represent upcoming
              milestones. Current pilot campaigns utilize rigorous manual verification, photographic proofs,
              and coordinated route schedules.
            </p>
          </div>
          <Link
            href="/technology"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-heading font-bold text-electric-yellow hover:underline"
          >
            <span>Explore Technical Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
