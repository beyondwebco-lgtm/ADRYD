'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MessageCircle,
  MapPin,
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWhatsAppUrl = (text: string) => {
    const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  };

  const serviceIcons = [
    Megaphone,
    ShoppingBag,
    QrCode,
    PackageCheck,
    Truck,
    Video,
    BarChart3,
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#000000]/95 backdrop-blur-2xl border-b border-[#222222] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.95)] py-2.5 sm:py-3'
            : 'bg-[#000000]/80 backdrop-blur-md border-b border-[#222222]/80 py-3 sm:py-4'
        }`}
      >
        {/* Subtle top ambient neon glow line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E7FF39]/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Authentic ADRYD Brand Logo */}
            <Link
              href="/"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7FF39] rounded-lg transition-transform"
              aria-label="ADRYD Upgrade - Your Brand. Your Products. Our Moving Marketplace."
            >
              <BrandLogo size="md" showTagline={true} />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#101010]/90 border border-[#222222] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
              <Link
                href="/"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/'
                    ? 'text-[#000000] bg-[#E7FF39] font-bold shadow-[0_0_16px_rgba(231,255,57,0.35)]'
                    : 'text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/about'
                    ? 'text-[#000000] bg-[#E7FF39] font-bold shadow-[0_0_16px_rgba(231,255,57,0.35)]'
                    : 'text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`}
              >
                About
              </Link>

              {/* Our Services Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                    pathname.startsWith('/services') || pathname.startsWith('/solutions')
                      ? 'text-[#000000] bg-[#E7FF39] font-bold shadow-[0_0_16px_rgba(231,255,57,0.35)]'
                      : 'text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#181818]'
                  }`}
                  aria-expanded={servicesOpen}
                >
                  <span>Our Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-[#E7FF39]' : ''
                    }`}
                  />
                </Link>

                {/* Dropdown Menu Modal Card */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-3 w-[420px] z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                    <div className="p-3.5 rounded-2xl bg-[#101010] border border-[#222222] shadow-[0_24px_60px_rgba(0,0,0,0.98)]">
                      <div className="flex items-center justify-between px-3 py-2 border-b border-[#222222] mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#03F2FF] animate-pulse" />
                          <span className="font-tech text-xs font-bold uppercase tracking-wider text-[#03F2FF]">
                            Seven Connected Verticals
                          </span>
                        </div>
                        <span className="text-[10px] text-[#03F2FF] font-tech uppercase tracking-wider px-2 py-0.5 rounded bg-[#03F2FF]/10 border border-[#03F2FF]/20">
                          Version 3.0
                        </span>
                      </div>

                      <div className="space-y-1">
                        {SITE_CONFIG.services.map((item, index) => {
                          const Icon = serviceIcons[index] || Megaphone;
                          return (
                            <Link
                              key={item.id}
                              href={`/services#${item.slug}`}
                              className="flex items-start gap-3 p-2.5 rounded-xl transition-all hover:bg-[#181818] group/item text-[#B8B8B8]"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#000000] border border-[#222222] flex items-center justify-center shrink-0 text-[#E7FF39] group-hover/item:border-[#E7FF39]/60 group-hover/item:scale-105 transition-all">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-heading font-bold text-white group-hover/item:text-[#E7FF39] flex items-center justify-between">
                                  <span>{item.name}</span>
                                  {item.isFutureCapability ? (
                                    <span className="text-[9px] font-tech uppercase px-1.5 py-0.5 rounded bg-[#151515] text-[#03F2FF] border border-[#222222]">
                                      Roadmap
                                    </span>
                                  ) : (
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#E7FF39]" />
                                  )}
                                </div>
                                <p className="text-[11px] text-[#888888] mt-0.5 line-clamp-1 leading-snug">
                                  {item.shortDesc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-2.5 pt-2.5 border-t border-[#222222] px-3 py-1 flex items-center justify-between">
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-[#03F2FF] hover:underline flex items-center gap-1.5"
                        >
                          <span>Explore All 7 Services</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-[10px] text-[#888888] font-tech">
                          Hyderabad Pilot 2026
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ADRYD Upgrade */}
              <Link
                href="/adryd-upgrade"
                className={`relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/adryd-upgrade'
                    ? 'text-[#000000] bg-[#E7FF39] font-bold shadow-[0_0_16px_rgba(231,255,57,0.35)]'
                    : 'text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#E7FF39]" />
                <span>ADRYD Upgrade</span>
                <span className="text-[9px] font-tech font-bold uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-[#03F2FF]/15 text-[#03F2FF] border border-[#03F2FF]/30">
                  V3.0
                </span>
              </Link>

              <Link
                href="/how-it-works"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/how-it-works'
                    ? 'text-[#000000] bg-[#E7FF39] font-bold shadow-[0_0_16px_rgba(231,255,57,0.35)]'
                    : 'text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`}
              >
                How It Works
              </Link>

              <Link
                href="/campaign-plans"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/campaign-plans'
                    ? 'text-[#000000] bg-[#E7FF39] font-bold shadow-[0_0_16px_rgba(231,255,57,0.35)]'
                    : 'text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`}
              >
                Campaign Plans
              </Link>

              <Link
                href="/become-a-rider"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/become-a-rider'
                    ? 'text-[#000000] bg-[#E7FF39] font-bold shadow-[0_0_16px_rgba(231,255,57,0.35)]'
                    : 'text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`}
              >
                Become a Partner
              </Link>
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                href="/contact"
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all ${
                  pathname === '/contact'
                    ? 'text-[#E7FF39]'
                    : 'text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`}
              >
                Contact
              </Link>

              {/* WhatsApp Quick Link */}
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.campaign)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#101010] hover:bg-[#181818] text-white hover:text-[#03F2FF] transition-all border border-[#222222] hover:border-[#03F2FF]/50 group/wa"
                title="Chat with ADRYD team on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#03F2FF] group-hover/wa:scale-110 transition-transform" />
              </a>

              {/* Primary CTA: Launch a Campaign */}
              <Link
                href="/book-campaign"
                className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E7FF39] hover:bg-[#D4FF00] text-[#000000] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] hover:shadow-[0_0_28px_rgba(231,255,57,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Launch a Campaign</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.campaign)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#101010] text-white border border-[#222222]"
                title="Chat with ADRYD team on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#03F2FF]" />
              </a>
              <Link
                href="/book-campaign"
                className="px-3.5 py-1.5 text-xs font-heading font-black uppercase tracking-wider rounded-full bg-[#E7FF39] text-[#000000] shadow-[0_0_15px_rgba(231,255,57,0.3)] hover:brightness-105 transition-all"
              >
                Launch
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#101010] border border-[#222222] text-[#B8B8B8] hover:text-[#E7FF39] hover:border-[#E7FF39]/40 focus:outline-none transition-colors"
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000000]/98 backdrop-blur-2xl flex flex-col pt-20 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200 xl:hidden">
          {/* Top Brand inside Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
            <BrandLogo size="sm" showTagline={true} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-[#101010] text-[#B8B8B8] hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links inside Drawer */}
          <div className="flex flex-col gap-1 py-4 border-b border-[#222222]">
            <Link
              href="/"
              className={`text-base font-heading font-bold py-2.5 px-3 rounded-lg transition-colors ${
                pathname === '/' ? 'text-[#000000] bg-[#E7FF39]' : 'text-[#FFFFFF] hover:text-[#E7FF39]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-base font-heading font-bold py-2.5 px-3 rounded-lg transition-colors ${
                pathname === '/about' ? 'text-[#000000] bg-[#E7FF39]' : 'text-[#FFFFFF] hover:text-[#E7FF39]'
              }`}
            >
              About ADRYD
            </Link>

            {/* Our Services in Mobile */}
            <div className="py-2">
              <Link
                href="/services"
                className={`text-base font-heading font-bold px-3 py-2 flex items-center justify-between rounded-lg ${
                  pathname.startsWith('/services') ? 'text-[#E7FF39] bg-[#101010]' : 'text-[#FFFFFF]'
                }`}
              >
                <span>Our Services</span>
                <span className="text-xs text-[#03F2FF] font-normal font-sans">View All 7</span>
              </Link>
              <div className="pl-4 mt-1 space-y-1 border-l-2 border-[#E7FF39]/40 ml-3">
                {SITE_CONFIG.services.map((svc) => (
                  <Link
                    key={svc.id}
                    href={`/services#${svc.slug}`}
                    className="block text-xs text-[#B8B8B8] hover:text-[#E7FF39] py-1.5 px-2"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/adryd-upgrade"
              className={`text-base font-heading font-bold py-2.5 px-3 rounded-lg flex items-center justify-between ${
                pathname === '/adryd-upgrade' ? 'text-[#000000] bg-[#E7FF39]' : 'text-[#FFFFFF] hover:text-[#E7FF39]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E7FF39]" />
                <span>ADRYD Upgrade</span>
              </span>
              <span className="text-[10px] font-tech font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#03F2FF]/15 text-[#03F2FF] border border-[#03F2FF]/30">
                Commerce
              </span>
            </Link>

            <Link
              href="/how-it-works"
              className={`text-base font-heading font-bold py-2.5 px-3 rounded-lg transition-colors ${
                pathname === '/how-it-works' ? 'text-[#000000] bg-[#E7FF39]' : 'text-[#FFFFFF] hover:text-[#E7FF39]'
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/campaign-plans"
              className={`text-base font-heading font-bold py-2.5 px-3 rounded-lg transition-colors ${
                pathname === '/campaign-plans' ? 'text-[#000000] bg-[#E7FF39]' : 'text-[#FFFFFF] hover:text-[#E7FF39]'
              }`}
            >
              Campaign Plans
            </Link>

            <Link
              href="/become-a-rider"
              className={`text-base font-heading font-bold py-2.5 px-3 rounded-lg transition-colors ${
                pathname === '/become-a-rider' ? 'text-[#000000] bg-[#E7FF39]' : 'text-[#FFFFFF] hover:text-[#E7FF39]'
              }`}
            >
              Become a Partner
            </Link>

            <Link
              href="/contact"
              className={`text-base font-heading font-bold py-2.5 px-3 rounded-lg transition-colors ${
                pathname === '/contact' ? 'text-[#000000] bg-[#E7FF39]' : 'text-[#FFFFFF] hover:text-[#E7FF39]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-6 space-y-3 mt-auto">
            <Link
              href="/book-campaign"
              className="w-full py-3.5 rounded-xl bg-[#E7FF39] text-[#000000] font-heading font-black text-center text-sm uppercase tracking-wider shadow-[0_0_24px_rgba(231,255,57,0.3)] flex items-center justify-center gap-2"
            >
              <span>Launch a Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.campaign)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#101010] border border-[#222222] text-white font-medium text-center text-xs flex items-center justify-center gap-2 hover:border-[#03F2FF]/50"
            >
              <MessageCircle className="w-4 h-4 text-[#03F2FF]" />
              <span>Direct WhatsApp Desk</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#888888] pt-2 font-tech">
              <MapPin className="w-3.5 h-3.5 text-[#03F2FF]" />
              <span>PROPOSED HYDERABAD PILOT • 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
