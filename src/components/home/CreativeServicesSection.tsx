import Link from 'next/link';
import {
  Camera,
  Film,
  Sparkles,
  Palette,
  Share2,
  Brush,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    title: 'EV Vehicle Branding Design',
    icon: Palette,
    desc: 'Custom artwork adapted precisely to electric scooter body panels, rear boxes, and front aprons for maximum legibility at street speeds.',
  },
  {
    title: 'Product & Street Photography',
    icon: Camera,
    desc: 'High-resolution commercial photography capturing your merchandise inside our illuminated mobile showcases amidst urban environments.',
  },
  {
    title: 'Promotional Videos & B-Roll',
    icon: Film,
    desc: 'Cinematic video production documenting your mobile fleet cruising through landmark corridors, creating compelling founder stories.',
  },
  {
    title: 'Reels, Shorts & Social Clips',
    icon: Share2,
    desc: 'Vertical 9:16 high-energy short-form edits optimized for Instagram Reels and YouTube Shorts to amplify your real-world street campaign.',
  },
  {
    title: 'QR Landing Pages & Creatives',
    icon: Sparkles,
    desc: 'High-converting mobile landing pages and instant pre-order digital forms linked to your on-vehicle QR codes.',
  },
  {
    title: 'Custom Showcase Fabrication',
    icon: Brush,
    desc: 'Bespoke transparent acrylic or illuminated metal display enclosures tailored to fragile or luxury brand merchandise.',
  },
];

export default function CreativeServicesSection() {
  return (
    <section className="py-24 bg-carbon-black text-soft-ivory relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-graphite border border-graphite-border text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <Camera className="w-3.5 h-3.5 text-electric-yellow" />
              Content &amp; Design Studio
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white uppercase leading-tight">
              Every Campaign Deserves{' '}
              <span className="text-electric-yellow">Great Creative.</span>
            </h2>
            <p className="mt-4 text-base text-muted-grey leading-relaxed">
              Outdoor advertising succeeds or fails on creative clarity. Our in-house creative
              specialists ensure your brand visuals pop on the street and convert on mobile screens.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/creative-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-graphite hover:bg-graphite-light border border-graphite-border text-soft-ivory text-xs font-heading font-bold uppercase tracking-wider transition-colors"
            >
              <span>Explore Creative Studio</span>
              <ArrowRight className="w-4 h-4 text-electric-yellow" />
            </Link>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-carbon-card border border-graphite-border hover:border-electric-yellow/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow mb-5 group-hover:bg-electric-yellow group-hover:text-carbon-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-grey leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-graphite-border/70 flex items-center text-[11px] font-heading font-semibold text-electric-yellow/90 group-hover:text-electric-yellow">
                  <span>Available as Campaign Add-on</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 to-carbon-card border border-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white mb-1">
              Have an Existing Agency or Artwork Files?
            </h4>
            <p className="text-xs sm:text-sm text-soft-ivory/80">
              We provide precise vehicle dimension templates, print bleeds, and review checks for
              seamless production.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
          >
            Request Specs Template
          </Link>
        </div>
      </div>
    </section>
  );
}
