import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Cpu,
  Layers,
  Database,
  Smartphone,
  Navigation,
  Shield,
  ArrowRight,
  Lock,
  Server,
  Activity,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology & Architecture | ADRYD Platform Roadmap',
  description:
    'Explore the proposed technology architecture of ADRYD: GPS location ingestion, Flutter mobile apps, PostgreSQL records, and campaign execution verification.',
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-burgundy/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-electric-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Engineering &amp; Platform Architecture
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            Technology Stack &amp; Roadmap
          </h1>
          <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
            ADRYD is engineered to bridge physical mobility with digital accountability.
            Explore our proposed multi-tier architecture, GPS telemetry pipeline, and security
            framework.
          </p>
        </div>

        {/* 4 Architectural Layers from BRD Section 12 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="text-xs font-tech uppercase text-electric-yellow font-bold">
              Layer 01 • Client Apps
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Flutter Mobile Apps</h3>
            <p className="text-xs text-muted-grey leading-relaxed">
              Cross-platform mobile applications for riders and advertisers, enabling campaign
              creation, digital proof approval, and active route logs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
              <Server className="w-6 h-6" />
            </div>
            <div className="text-xs font-tech uppercase text-electric-yellow font-bold">
              Layer 02 • Core Backend
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Node.js Microservices</h3>
            <p className="text-xs text-muted-grey leading-relaxed">
              Modular service layer governing advertiser accounts, rider allocation algorithms,
              pricing engines, and transactional workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
              <Navigation className="w-6 h-6" />
            </div>
            <div className="text-xs font-tech uppercase text-electric-yellow font-bold">
              Layer 03 • Telemetry
            </div>
            <h3 className="font-heading font-bold text-xl text-white">GPS Location Pipeline</h3>
            <p className="text-xs text-muted-grey leading-relaxed">
              Event queueing and geospatial calculation engine to record campaign distance, corridor
              match rates, and transit time windows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border space-y-4">
            <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
              <Database className="w-6 h-6" />
            </div>
            <div className="text-xs font-tech uppercase text-electric-yellow font-bold">
              Layer 04 • Data Storage
            </div>
            <h3 className="font-heading font-bold text-xl text-white">PostgreSQL &amp; Audit</h3>
            <p className="text-xs text-muted-grey leading-relaxed">
              Relational PostgreSQL database managing campaign parameters, verified route
              waypoints, rider documentation records, and financial logs.
            </p>
          </div>
        </div>

        {/* Security & Privacy by Design */}
        <div className="bg-carbon-card border border-graphite-border rounded-2xl p-8 sm:p-12 mb-16 shadow-2xl space-y-6">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-electric-yellow" />
            <h3 className="font-heading font-bold text-2xl text-white">
              Data Privacy &amp; Location Security Standards
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
            In compliance with our business requirements document, ADRYD adopts strict privacy-by-design
            principles across all mobile applications:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-muted-grey">
            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-1.5">
              <strong className="text-white text-sm block">Consent-Driven Tracking</strong>
              <p>
                Rider location coordinates are captured exclusively during active, accepted campaign
                hours. Private off-duty transit is never tracked or logged.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-1.5">
              <strong className="text-white text-sm block">Data Minimisation</strong>
              <p>
                Advertisers receive aggregated corridor logs and verified distance summaries rather
                than granular personal device identifiers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-1.5">
              <strong className="text-white text-sm block">Encrypted Document Vault</strong>
              <p>
                Rider driving licences and vehicle registration papers are stored in secure, encrypted
                cloud storage accessible only to vetted operations staff.
              </p>
            </div>
          </div>
        </div>

        {/* Development Phases Roadmap */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-tech font-bold uppercase tracking-widest text-electric-yellow mb-2">
              Implementation Roadmap
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
              Technology Phasing Strategy
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-carbon-card border-l-4 border-electric-yellow border-y border-r border-graphite-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-tech text-electric-yellow font-bold uppercase">
                  Phase 1 • Current Pilot Stage
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  Controlled Urban Pilot &amp; Manual Verification
                </h4>
                <p className="text-xs text-muted-grey mt-1">
                  Manual route scheduling, photographic vehicle proof, physical rider briefings, and
                  customer discovery interviews in Hyderabad.
                </p>
              </div>
              <span className="shrink-0 text-xs font-tech font-bold uppercase px-3 py-1 rounded bg-electric-yellow text-carbon-black">
                Active
              </span>
            </div>

            <div className="p-6 rounded-xl bg-carbon-card border-l-4 border-burgundy border-y border-r border-graphite-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-tech text-burgundy-light font-bold uppercase">
                  Phase 2 • Upcoming Milestone
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  MVP Applications &amp; Automated Route Telemetry
                </h4>
                <p className="text-xs text-muted-grey mt-1">
                  Rider app beta launch with automated GPS start/end timestamps, location interval logs,
                  and client web dashboard digest.
                </p>
              </div>
              <span className="shrink-0 text-xs font-tech font-bold uppercase px-3 py-1 rounded bg-graphite text-muted-grey border border-graphite-border">
                In Development
              </span>
            </div>

            <div className="p-6 rounded-xl bg-carbon-card border-l-4 border-graphite border-y border-r border-graphite-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-tech text-muted-grey font-bold uppercase">
                  Phase 3 • Platform Scale
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  Algorithmic Fleet Allocation &amp; Dynamic Corridors
                </h4>
                <p className="text-xs text-muted-grey mt-1">
                  Automated rider matching based on commute coordinates, multi-city deployment, and
                  predictive street impression indexing.
                </p>
              </div>
              <span className="shrink-0 text-xs font-tech font-bold uppercase px-3 py-1 rounded bg-graphite text-muted-grey border border-graphite-border">
                Roadmap
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Interested in Technical Discovery or Pilot Trials?
            </h4>
            <p className="text-xs text-soft-ivory/80 mt-1">
              Contact our engineering and campaign product leads in Hyderabad.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Connect With Engineering
          </Link>
        </div>
      </div>
    </div>
  );
}
