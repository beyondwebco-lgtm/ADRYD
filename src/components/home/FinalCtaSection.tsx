import Link from 'next/link';
import { ArrowRight, MessageCircle, MapPin, Zap, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function FinalCtaSection() {
  const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${num}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessages.campaign
  )}`;

  return (
    <section className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#24212C]/70 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative SVG Animated Route Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100,200 C300,100 600,400 1200,150 S1800,300 2100,200"
          fill="none"
          stroke="#E7FF39"
          strokeWidth="2.5"
          className="animate-route-dash"
        />
        <path
          d="M-50,450 C400,350 800,600 1400,350 S1900,450 2200,400"
          fill="none"
          stroke="#353740"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E7FF39]" />
          HYDERABAD PILOT CAMPAIGN PLANNING OPEN
        </div>

        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95] mb-6">
          READY TO PUT YOUR BRAND{' '}
          <span className="text-[#E7FF39] drop-shadow-[0_0_35px_rgba(231,255,57,0.35)]">
            IN MOTION?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-[#A5A8B3] max-w-2xl mx-auto leading-relaxed mb-10">
          Take your brand and products directly to local audiences through electric mobility-powered
          advertising, product showcases, QR-enabled shopping experiences, pre-orders and delivery solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/book-campaign"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(231,255,57,0.35)] hover:shadow-[0_0_35px_rgba(231,255,57,0.5)] hover:-translate-y-0.5 transition-all"
          >
            <span>Launch Your Campaign</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#17191F] hover:bg-[#24212C] border border-[#353740] text-white font-heading font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#A5A8B3] font-tech uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#E7FF39]" /> Hyderabad, Telangana
          </span>
          <span className="text-[#353740]">•</span>
          <span>Fast 24-Hour Campaign Brief Turnaround</span>
          <span className="text-[#353740]">•</span>
          <span>Zero Obligation Quotes</span>
        </div>
      </div>
    </section>
  );
}
