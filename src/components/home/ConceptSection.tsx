import Link from 'next/link';
import { ArrowRight, Megaphone, Sparkles, ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function ConceptSection() {
  const pillars = [
    {
      num: '01',
      title: 'PROMOTE',
      subtitle: 'Brand Visibility on the Move',
      description:
        'Bring brand messages into selected local environments. High-recall electric scooter branding and uniformed riders deliver eye-level visual frequency across Hyderabad’s prime arterial corridors.',
      icon: Megaphone,
      highlights: [
        'Eye-level pedestrian & commuter visibility',
        'Targeted local commercial corridor deployment',
        'Zero-emission, clean electric fleet presence',
      ],
      link: '/services#adryd-promote',
      cta: 'Explore Promotion',
    },
    {
      num: '02',
      title: 'SHOWCASE',
      subtitle: 'Live Product Discovery',
      description:
        'Give customers opportunities to discover products through approved mobile displays and demonstrations. Custom illuminated enclosures let people touch, inspect, and experience your craft in real life.',
      icon: Sparkles,
      highlights: [
        'Secure illuminated mobile display cases',
        'Sampling stops at tech parks & commercial hubs',
        'Trained promotional rider product assistance',
      ],
      link: '/services#adryd-showcase',
      cta: 'Explore Showcase',
    },
    {
      num: '03',
      title: 'CONNECT TO COMMERCE',
      subtitle: 'Instant Pre-Orders & Fulfilment',
      description:
        'Link customer interest to catalogues, enquiries, pre-orders and fulfilment options. Seamless on-vehicle QR codes turn street curiosity into immediate leads, orders, and scheduled deliveries.',
      icon: ShoppingBag,
      highlights: [
        'Direct scan-to-order QR catalogues',
        'Bulk demand capture for teams & hostels',
        'Hyperlocal last-mile delivery concepts',
      ],
      link: '/adryd-upgrade',
      cta: 'Explore Commerce',
    },
  ];

  return (
    <section id="concept" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            THE ADRYD CONCEPT
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            MORE THAN ADVERTISING.{' '}
            <span className="text-[#E7FF39]">A MARKETPLACE IN MOTION.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#A5A8B3] leading-relaxed font-normal">
            ADRYD brings together mobile brand visibility, real-world product discovery and digital commerce.
            Through electric vehicles and trained promotional partners, brands can explore new ways to
            showcase products, engage customers, generate enquiries and support local fulfilment.
          </p>
        </div>

        {/* 3 Editorial Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative bg-[#17191F] p-8 rounded-2xl border border-[#353740] hover:border-[#E7FF39]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(231,255,57,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#353740]">
                    <span className="font-heading font-black text-4xl text-[#353740] group-hover:text-[#E7FF39] transition-colors">
                      {item.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] group-hover:bg-[#E7FF39] group-hover:text-[#0C0D12] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Subtitle & Title */}
                  <div className="text-xs font-tech font-bold uppercase tracking-wider text-[#E7FF39] mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A5A8B3] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2.5 mb-6 text-xs text-[#F2F3F5] font-medium">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#353740]">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#E7FF39] hover:underline group/link"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Concept */}
        <div className="rounded-2xl bg-[#17191F] border border-[#353740] text-[#F2F3F5] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-tech font-bold text-[#E7FF39] uppercase tracking-widest">
              Moving Marketplace Architecture
            </div>
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Connecting Brands with Local Shoppers via Electric Mobility
            </h4>
            <p className="text-xs sm:text-sm text-[#A5A8B3] max-w-xl">
              We coordinate route feasibility, vehicle-compliant branding installation, sample showcase
              boxes, and customer purchase pathways across Hyderabad.
            </p>
          </div>
          <Link
            href="/adryd-upgrade"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.25)]"
          >
            Discover ADRYD Upgrade
          </Link>
        </div>
      </div>
    </section>
  );
}
