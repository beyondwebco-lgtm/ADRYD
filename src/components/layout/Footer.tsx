'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BrandLogo from '@/components/ui/BrandLogo';
import { SITE_CONFIG } from '@/config/site';
import { LEGAL_CONFIG } from '@/config/legal';
import { Mail, Phone, MapPin, ArrowUpRight, Shield, ChevronDown, ChevronUp, Sliders, HelpCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);

  const openCookiePreferences = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
    }
  };

  const openGrievanceModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-grievance-modal'));
    }
  };

  return (
    <footer className="bg-[#000000]/95 backdrop-blur-3xl border-t border-[#0A9BE0]/20 text-[#E2E8F0] pt-20 pb-12 relative overflow-hidden z-10">
      {/* Sinuous Ambient Footer Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0A9BE0]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#B4F000]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#0A9BE0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="ADRYD Home">
              <BrandLogo size="md" showTagline={true} theme="dark" />
            </Link>
            <p className="text-sm text-[#E2E8F0]/80 leading-relaxed max-w-sm font-normal">
              Electric mobility-powered brand advertising, dynamic product showcases, QR commerce and hyperlocal promotion ecosystem.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#041220]/80 border border-[#0A9BE0]/30 text-xs font-semibold text-[#0A9BE0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4F000] animate-pulse" />
              <span>Hyderabad Pilot Phase • Commercial Corridors</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-[#E2E8F0]/80 hover:text-[#B4F000] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#E2E8F0]/80 hover:text-[#B4F000] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-[#E2E8F0]/80 hover:text-[#B4F000] transition-colors">7 Capabilities</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[#E2E8F0]/80 hover:text-[#B4F000] transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/campaign-plans" className="text-[#E2E8F0]/80 hover:text-[#B4F000] transition-colors">Campaign Plans</Link>
              </li>
              <li>
                <Link href="/brand-activation" className="text-[#B4F000] hover:text-[#0A9BE0] transition-colors font-semibold flex items-center gap-1.5">
                  <span>Brand Activation</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 uppercase font-mono">New</span>
                </Link>
              </li>
              <li>
                <Link href="/riderpreneur" className="text-[#B4F000] hover:text-[#0A9BE0] transition-colors font-semibold">Riderpreneur Program</Link>
              </li>
              <li>
                <Link href="/become-a-rider" className="text-[#E2E8F0]/80 hover:text-[#B4F000] transition-colors">Partner Network</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#E2E8F0]/80 hover:text-[#B4F000] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Operational Policies (3.5 cols desktop / accordion mobile) */}
          <div className="md:col-span-3 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#0A9BE0]" />
                <span>Legal &amp; Policies</span>
              </h4>
              {/* Mobile accordion toggle */}
              <button
                type="button"
                onClick={() => setMobileLegalOpen(!mobileLegalOpen)}
                className="md:hidden text-xs text-[#0A9BE0] flex items-center gap-1 p-1"
                aria-expanded={mobileLegalOpen}
              >
                <span>{mobileLegalOpen ? 'Hide' : 'View All (10)'}</span>
                {mobileLegalOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className={`${mobileLegalOpen ? 'block' : 'hidden md:block'} space-y-2`}>
              <ul className="space-y-1.5 text-xs">
                {LEGAL_CONFIG.policies.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={p.href}
                      className="text-[#94A3B8] hover:text-[#B4F000] transition-colors block py-0.5"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Interactive Policy Utilities */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="inline-flex items-center gap-1 text-[#0A9BE0] hover:text-[#B4F000] transition-colors py-1"
                >
                  <Sliders className="w-3 h-3" />
                  <span>Cookie Preferences</span>
                </button>
                <span className="text-[#94A3B8]">•</span>
                <button
                  type="button"
                  onClick={openGrievanceModal}
                  className="inline-flex items-center gap-1 text-[#0A9BE0] hover:text-[#B4F000] transition-colors py-1"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>Privacy &amp; Grievances</span>
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Operations Hub (2.5 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Operations Hub</h4>
            <div className="space-y-3 text-xs text-[#E2E8F0]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A9BE0] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0A9BE0] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#B4F000] transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B4F000] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-[#B4F000] transition-colors">
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/book-campaign"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B4F000] hover:text-[#0A9BE0] transition-colors"
              >
                <span>Launch Your Campaign</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Operational Disclaimer & Bottom Legal Strip */}
        <div className="pt-8 space-y-4 text-xs text-[#94A3B8]">
          <p className="text-center sm:text-left text-[11px] text-[#94A3B8]/90 leading-relaxed">
            ADRYD&apos;s services, Riderpreneur opportunities, affiliate programmes and technology features are subject to availability, eligibility and applicable programme terms. Certain features may be under development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/5 text-[11px]">
            <p>© {currentYear} ADRYD. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[#94A3B8]">
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
              <span>•</span>
              <Link href="/rider-terms" className="hover:text-white transition-colors">Riderpreneur</Link>
              <span>•</span>
              <Link href="/safety-guidelines" className="hover:text-white transition-colors">Safety</Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
