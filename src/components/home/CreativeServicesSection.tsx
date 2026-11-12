import Link from 'next/link';
import {
  Film,
  Camera,
  Share2,
  Sparkles,
  QrCode,
  Users2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

const viralFeatures = [
  {
    title: 'Product Reels',
    icon: Film,
    desc: 'High-energy vertical short-form reels capturing product unboxings, tactile textures, and live reactions at scheduled street stops.',
    tag: '9:16 Video Formats',
  },
  {
    title: 'Campaign Videos',
    icon: Film,
    desc: 'Cinematic B-roll documenting branded electric vehicles navigating high-density metro corridors, capturing moving brand recall.',
    tag: 'Cinematic B-Roll',
  },
  {
    title: 'Brand Photography',
    icon: Camera,
    desc: 'High-resolution lifestyle and commercial photography showcasing your products inside illuminated mobile display units.',
    tag: 'High-Res Stills',
  },
  {
    title: 'Social Media Creatives',
    icon: Share2,
    desc: 'Digital social assets and teaser stories tailored for multi-channel amplification during launch weeks and festive activations.',
    tag: 'Multi-Channel Assets',
  },
  {
    title: 'QR-Linked Promotions',
    icon: QrCode,
    desc: 'Interactive landing pages and voucher codes linked directly to vehicle QR badges to drive digital traffic from real-world movement.',
    tag: 'Direct Digital Traffic',
  },
  {
    title: 'Referral Campaign Concepts',
    icon: Users2,
    desc: 'Creative referral and customer-sharing incentives encouraging on-ground commuters to photograph, tag, and share brand sightings.',
    tag: 'Organic Sharing Concepts',
  },
];

export default function CreativeServicesSection() {
  return (
    <section id="viral-marketing" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
              ADRYD VIRAL • DIGITAL AMPLIFICATION
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
              FROM THE STREET{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#E7FF39]">TO THE SCREEN.</span>
            </h2>
            <p className="mt-4 text-base text-[#A5A8B3] leading-relaxed">
              Extend physical brand experiences through product videos, campaign reels, digital
              storytelling and customer-led sharing across social media.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/book-campaign?service=ADRYD%20Viral"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.25)]"
            >
              <span>Explore Digital Promotion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {viralFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#17191F] border border-[#353740] hover:border-[#E7FF39]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-tech text-[#E7FF39] uppercase font-bold px-2 py-0.5 rounded bg-[#24212C] border border-[#353740]">
                      {item.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] group-hover:bg-[#E7FF39] group-hover:text-[#0C0D12] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#E7FF39] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A5A8B3] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#353740] flex items-center justify-between text-[11px] text-[#A5A8B3]">
                  <span>Campaign Add-on</span>
                  <span className="text-[#E7FF39] font-tech font-bold uppercase">ADRYD Viral</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer: No guaranteed viral metrics */}
        <div className="p-4 rounded-xl bg-[#17191F] border border-[#353740] flex items-start gap-3 text-xs text-[#A5A8B3]">
          <ShieldAlert className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Marketing Notice:</strong> Content capture and digital assets extend physical brand activations through structured creative production. ADRYD does not promise guaranteed viral performance, specific view thresholds, or artificial follower metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
