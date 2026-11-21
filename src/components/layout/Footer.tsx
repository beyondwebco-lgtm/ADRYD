import Link from 'next/link';
import BrandLogo from '@/components/ui/BrandLogo';
import { SITE_CONFIG } from '@/config/site';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#F6FAFC] border-t border-[#DCECF2] text-[#172B3A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#DCECF2]">
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block" aria-label="ADRYD Home">
              <BrandLogo size="md" showTagline={true} theme="light" />
            </Link>
            <p className="text-sm text-[#637786] leading-relaxed max-w-sm">
              Electric mobility-powered mobile advertising, product showcase, commerce and hyperlocal delivery platform. Bringing brands and local audiences together.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCECF2] text-xs font-semibold text-[#00A8C8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A8C8]" />
              Hyderabad Pilot Phase
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B3A]">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#637786] hover:text-[#00A8C8] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#637786] hover:text-[#00A8C8] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-[#637786] hover:text-[#00A8C8] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[#637786] hover:text-[#00A8C8] transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/campaign-plans" className="text-[#637786] hover:text-[#00A8C8] transition-colors">Campaign Plans</Link>
              </li>
              <li>
                <Link href="/become-a-rider" className="text-[#637786] hover:text-[#00A8C8] transition-colors">Become a Partner</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#637786] hover:text-[#00A8C8] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Legal */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B3A]">Get in Touch</h4>
            <div className="space-y-2.5 text-sm text-[#637786]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A8C8] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1756C1] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#00A8C8] transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#58C9EF] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-[#00A8C8] transition-colors">
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/book-campaign"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8C8] hover:text-[#0093AF] transition-colors"
              >
                <span>Launch Your Campaign</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#637786]">
          <p>© {currentYear} ADRYD Mobility Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#00A8C8] transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-[#00A8C8] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/adryd-upgrade" className="hover:text-[#1756C1] transition-colors">V3.0 Overview</Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="mt-6 pt-4 border-t border-[#DCECF2]/60 text-[11px] text-[#637786] text-center leading-relaxed">
          Pilot Phase Notice: ADRYD is currently operating in controlled validation pilot corridors in Hyderabad. Platform features, metrics and commercial booking terms are subject to route allocation, vehicle availability and partner verification.
        </div>
      </div>
    </footer>
  );
}
