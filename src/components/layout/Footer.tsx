import Link from 'next/link';
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function Footer() {
  const currentYear = 2026;
  const getWhatsAppUrl = (text: string) => {
    const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  };

  return (
    <footer className="bg-carbon-dark border-t border-graphite-border/70 text-soft-ivory relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-electric-yellow/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-graphite-border">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-burgundy/40 border border-burgundy-light/60">
                <span className="font-heading font-black text-xl italic text-electric-yellow tracking-tighter">
                  &gt;&gt;
                </span>
              </div>
              <span className="font-heading font-black text-3xl tracking-tight text-white group-hover:text-electric-yellow transition-colors italic">
                ADRYD
              </span>
              <span className="text-xs font-bold text-electric-yellow bg-electric-yellow/10 px-1.5 py-0.5 rounded border border-electric-yellow/30">
                EV
              </span>
            </Link>

            <p className="font-tech text-xs tracking-widest text-electric-yellow uppercase font-semibold">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-sm text-muted-grey max-w-sm leading-relaxed">
              India&apos;s futuristic electric mobility-powered mobile advertising platform.
              We transform daily EV transit into hyper-targeted, high-impact brand visibility
              and on-the-go product discovery across Hyderabad.
            </p>

            {/* Launch Market Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-graphite/50 border border-graphite-border w-fit text-xs text-soft-ivory/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Pilot Launch Market: </span>
              <span className="text-electric-yellow font-semibold">Hyderabad, Telangana</span>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 hover:text-white transition-all text-xs font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-electric-yellow pl-2.5">
              Campaigns
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-grey">
              {SITE_CONFIG.footerSolutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-electric-yellow transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-electric-yellow text-xs">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Partners */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-burgundy pl-2.5">
              Platform
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-grey">
              {SITE_CONFIG.footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-electric-yellow transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-electric-yellow text-xs">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-electric-yellow pl-2.5">
              Connect
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-grey">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  HITEC City &amp; Madhapur Hub, Hyderabad, Telangana 500081
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-electric-yellow shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-electric-yellow shrink-0" />
                <span className="text-xs">{SITE_CONFIG.contact.phone}</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/book-campaign"
                  className="inline-block w-full text-center py-2 px-3 rounded-lg bg-burgundy hover:bg-burgundy-light text-white text-xs font-heading font-bold transition-colors"
                >
                  Request Campaign Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Regulatory Notice */}
        <div className="py-6 border-b border-graphite-border/50 text-[11px] text-muted-grey/80 leading-relaxed">
          <p>
            <strong className="text-soft-ivory">Regulatory &amp; Operational Notice:</strong> ADRYD is an
            electric mobility advertising marketplace currently operating in pilot validation in Hyderabad,
            Telangana. Vehicle-mounted advertising panels and promotional activations adhere to applicable municipal
            transport guidelines and safety standards. Proposed GPS reporting and analytics reflect upcoming
            technology capabilities on our platform roadmap. Brand visuals shown for ADRYD Upgrade represent promotional concepts.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-grey">
          <p>
            © {currentYear} {SITE_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-electric-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-electric-yellow transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-muted-grey/40">|</span>
            <span className="font-tech text-electric-yellow tracking-widest uppercase">
              HYDERABAD PILOT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
