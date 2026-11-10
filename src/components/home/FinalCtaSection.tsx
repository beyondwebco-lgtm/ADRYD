import Link from 'next/link';
import { ArrowRight, MessageCircle, MapPin, Zap } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function FinalCtaSection() {
  const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${num}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessages.campaign
  )}`;

  return (
    <section className="py-24 bg-gradient-to-br from-burgundy-900 via-burgundy to-burgundy-900 text-soft-ivory relative overflow-hidden">
      {/* Decorative SVG Animated Route Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100,200 C300,100 600,400 1200,150 S1800,300 2100,200"
          fill="none"
          stroke="#FFE500"
          strokeWidth="3"
          className="animate-route-dash"
        />
        <path
          d="M-50,450 C400,350 800,600 1400,350 S1900,450 2200,400"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 text-electric-yellow" />
          Hyderabad Pilot Campaign Bookings Open
        </div>

        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95] mb-6">
          Ready To Put Your Brand{' '}
          <span className="text-electric-yellow drop-shadow-[0_0_35px_rgba(255,229,0,0.4)]">
            In Motion?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-soft-ivory/85 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us where you want your brand to go. Our campaign strategists will help you explore
          the ideal route corridors, fleet size, and mobile showcases for your launch.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/book-campaign"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-black text-base uppercase tracking-wider shadow-2xl hover:shadow-electric-yellow/30 hover:-translate-y-0.5 transition-all"
          >
            <span>Launch Your Campaign</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-graphite/70 hover:bg-graphite border border-white/20 text-white font-heading font-bold text-sm tracking-wide backdrop-blur-sm transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-soft-ivory/70 font-tech">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-electric-yellow" /> Hyderabad, Telangana
          </span>
          <span>•</span>
          <span>Fast 24-Hour Turnaround On Campaign Briefs</span>
          <span>•</span>
          <span>Zero Obligation Quotes</span>
        </div>
      </div>
    </section>
  );
}
