import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Camera,
  Film,
  Sparkles,
  Palette,
  Share2,
  Brush,
  ArrowRight,
  CheckCircle2,
  Zap,
  QrCode,
  Users2,
  ShieldAlert,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADRYD Viral | From the Street to the Screen',
  description:
    'Extend physical brand movement into digital reach: vertical reels, commercial photography, campaign videos, and social storytelling across Hyderabad.',
};

const STUDIO_SERVICES = [
  {
    title: 'Vehicle Branding & Vinyl Adaptation',
    icon: Palette,
    summary: 'Transform your brand identity into high-impact, street-speed automotive vinyl graphics and box decals.',
    deliverables: [
      'Side body wrap artwork with exact vehicle curvature',
      'Front apron brand crest and high-contrast wordmark',
      'Illuminated rear showcase box vinyl decals',
      'Print-ready vector CMYK production files',
    ],
  },
  {
    title: 'Product & Street Photography',
    icon: Camera,
    summary: 'Commercial photography showcasing your physical merchandise mounted inside our illuminated mobile display units.',
    deliverables: [
      'High-resolution edited product stills in natural lighting',
      'Street-level contextual shots against urban architecture',
      'Close-up tactile detail shots of fabrics and craftsmanship',
      'Full commercial usage rights for social and web',
    ],
  },
  {
    title: 'Cinematic Campaign Videos & B-Roll',
    icon: Film,
    summary: '4K video documenting your branded electric fleet cruising through premier Hyderabad commercial corridors.',
    deliverables: [
      '60-90 second cinematic brand hero film',
      'Aerial & street transit b-roll along iconic landmarks',
      'Founder / artisan soundbites and store arrival scenes',
      'Color graded in modern cinematic automotive tones',
    ],
  },
  {
    title: 'Vertical Product Reels & Shorts',
    icon: Share2,
    summary: 'High-energy 9:16 vertical edits tailored for Instagram Reels, YouTube Shorts, and viral social reach.',
    deliverables: [
      '3 to 5 vertical video cuts (15-30 seconds each)',
      'Trending pacing, audio sync, and subtitle typography',
      'Optimized hooks highlighting tactile product discovery',
      'Ready-to-post exports for Instagram and LinkedIn',
    ],
  },
  {
    title: 'QR Landing Pages & Digital Portals',
    icon: QrCode,
    summary: 'Frictionless, lightweight mobile landing pages linked directly to your on-vehicle glowing QR badges.',
    deliverables: [
      'High-contrast scan-to-order mobile landing pages',
      'Exclusive launch discount voucher mechanics',
      'Direct WhatsApp chat integration for customer ordering',
      'Analytics pixel tracking for QR engagement attribution',
    ],
  },
  {
    title: 'Custom Showcase Fabrication',
    icon: Brush,
    summary: 'Bespoke transparent acrylic or illuminated metal display enclosures tailored to fragile or luxury merchandise.',
    deliverables: [
      'Weather-sealed acrylic casing with tamper-proof locks',
      'Interior 360° warm LED showcase illumination',
      'Compliant bracket mounting engineered for EV balance',
      'Quick-swap merchandise trays for multi-item displays',
    ],
  },
];

export default function CreativeServicesPage() {
  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#24212C]/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E7FF39]" />
            ADRYD VIRAL • CONTENT &amp; PRODUCTION STUDIO
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-[0.98] mb-6">
            FROM THE STREET{' '}
            <br />
            <span className="text-[#E7FF39]">TO THE SCREEN.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A5A8B3] leading-relaxed font-normal">
            Outdoor advertising achieves its full potential when physical visibility triggers digital
            conversations. Our content studio produces cinematic videos, vertical product reels, and
            social creatives that turn real-world movement into digital reach.
          </p>
        </div>

        {/* 6 Studio Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {STUDIO_SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#17191F] border border-[#353740] hover:border-[#E7FF39]/60 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] mb-6 group-hover:bg-[#E7FF39] group-hover:text-[#0C0D12] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-black text-xl text-white mb-2 group-hover:text-[#E7FF39] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-[#A5A8B3] leading-relaxed mb-6">
                    {s.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#353740]/60 mb-6">
                    <span className="text-[10px] font-tech text-[#E7FF39] uppercase font-bold block mb-1">
                      Deliverables:
                    </span>
                    {s.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[#F2F3F5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E7FF39] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/book-campaign?service=ADRYD%20Viral&objective=${encodeURIComponent(s.title)}`}
                    className="w-full py-3 rounded-xl bg-[#0C0D12] hover:bg-[#24212C] border border-[#353740] text-white hover:text-[#E7FF39] font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Include in Campaign Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer: No guaranteed viral metrics */}
        <div className="p-6 rounded-3xl bg-[#17191F] border border-[#353740] flex items-start gap-3.5 text-xs text-[#A5A8B3] mb-12">
          <ShieldAlert className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Editorial Notice:</strong> ADRYD Viral services create
            professional social media content and digital assets documenting your campaign. We do not
            claim guaranteed viral performance, artificial view metrics, or automated follower thresholds.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#17191F] border border-[#353740] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-2xl text-white uppercase">
              Need Custom Showcase Fabrication or Video Production?
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A8B3] mt-1 max-w-xl">
              Our creative director will evaluate your merchandise and recommend vehicle wrap templates.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.3)]"
          >
            Connect with Studio
          </Link>
        </div>
      </div>
    </div>
  );
}
