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
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  const currentYear = 2026;
  const getWhatsAppUrl = (text: string) => {
    const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  };

  return (
    <footer className="bg-[#0C0D12] border-t border-[#353740] text-[#F2F3F5] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#24212C]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#E7FF39]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#353740]">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <BrandLogo size="lg" showTagline={false} />
            </Link>

            <div className="space-y-1">
              <p className="font-tech text-xs tracking-widest text-[#E7FF39] uppercase font-bold">
                {SITE_CONFIG.platformName}
              </p>
              <p className="font-heading font-black text-sm text-white tracking-tight uppercase">
                {SITE_CONFIG.tagline}
              </p>
            </div>

            <p className="text-xs text-[#A5A8B3] max-w-sm leading-relaxed">
              Electric mobility-powered mobile advertising, product showcase, commerce, pre-orders
              and hyperlocal delivery platform. Connecting brands and local customers across Hyderabad.
            </p>

            {/* Extended Brand Line */}
            <div className="font-tech text-[11px] tracking-wider text-[#E7FF39]/90 font-semibold uppercase">
              {SITE_CONFIG.extendedBrandLine}
            </div>

            {/* Launch Market Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#17191F] border border-[#353740] w-fit text-xs text-[#F2F3F5]">
              <span className="w-2 h-2 rounded-full bg-[#E7FF39] animate-pulse" />
              <span>Pilot Launch Market: </span>
              <span className="text-[#E7FF39] font-semibold">Hyderabad, Telangana</span>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#17191F] border border-emerald-500/40 text-emerald-400 hover:bg-[#24212C] hover:text-white transition-all text-xs font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-[#E7FF39] pl-2.5">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#A5A8B3]">
              {SITE_CONFIG.footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#E7FF39] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#E7FF39] text-xs">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Platform & Programs */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-[#E7FF39] pl-2.5">
              Platform
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#A5A8B3]">
              {SITE_CONFIG.footerLinks.platform.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#E7FF39] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#E7FF39] text-xs">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-[#E7FF39] pl-2.5">
              Connect
            </h4>
            <div className="flex flex-col gap-3 text-xs text-[#A5A8B3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Knowledge City &amp; Madhapur Hub, Hyderabad, Telangana 500081
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E7FF39] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E7FF39] shrink-0" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/book-campaign"
                  className="inline-block w-full text-center py-2.5 px-3 rounded-lg bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] text-xs font-heading font-black uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(231,255,57,0.25)]"
                >
                  Launch a Campaign
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Operational Notice */}
        <div className="py-6 border-b border-[#353740] text-[11px] text-[#A5A8B3] leading-relaxed">
          <p>
            <strong className="text-white">Operational &amp; Regulatory Notice:</strong> ADRYD is a
            proposed electric mobility-powered mobile advertising and commerce platform currently in
            pilot planning in Hyderabad, Telangana. All services, vehicle branding, product showcases,
            mobile selling, pre-orders, and hyperlocal delivery concepts are subject to pilot feasibility,
            applicable municipal transport approvals, and operational readiness. Visual campaign concepts,
            sample product references, simulated routes, and platform telemetry represent planned future
            capabilities.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A8B3]">
          <p>
            © {currentYear} {SITE_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#E7FF39] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#E7FF39] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-[#353740]">|</span>
            <span className="font-tech text-[#E7FF39] tracking-widest uppercase">
              HYDERABAD PILOT 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
