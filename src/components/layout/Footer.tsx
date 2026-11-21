import Link from 'next/link';
import BrandLogo from '@/components/ui/BrandLogo';
import { SITE_CONFIG } from '@/config/site';
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#142238] border-t border-slate-800 text-slate-300 pt-20 pb-14 relative overflow-hidden">
      {/* Subtle Ambient Footer Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#7856FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block" aria-label="ADRYD Home">
              <BrandLogo size="md" showTagline={true} theme="dark" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Electric mobility-powered mobile advertising, product showcase, QR commerce and hyperlocal delivery network.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#38BDF8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>Hyderabad Pilot Phase • Commercial Corridors</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#38BDF8] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#38BDF8] transition-colors">7 Capabilities</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-slate-400 hover:text-[#38BDF8] transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/campaign-plans" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Campaign Plans</Link>
              </li>
              <li>
                <Link href="/become-a-rider" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Partner Network</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Legal */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Operations Hub</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7856FF] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#38BDF8] transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-[#38BDF8] transition-colors">
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/book-campaign"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors"
              >
                <span>Launch Your Campaign</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} ADRYD Mobility Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/adryd-upgrade" className="hover:text-[#38BDF8] transition-colors">Platform Architecture</Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 text-center leading-relaxed">
          Pilot Phase Notice: ADRYD operates controlled validation pilot routes across designated commercial corridors in Hyderabad. Platform features, routes and service bookings are subject to vehicle availability, route allocation and partner verification.
        </div>
      </div>
    </footer>
  );
}
