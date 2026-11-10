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
  Bike,
  Users2,
  Layers,
  Palette,
  Compass,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  const getWhatsAppUrl = (text: string) => {
    const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  };

  const solutionItems = [
    {
      title: 'Single Rider Campaign',
      href: '/solutions/single-rider',
      description: 'Focused promotional mobility for targeted local business areas.',
      icon: Bike,
    },
    {
      title: 'Dual Rider Campaign',
      href: '/solutions/dual-rider',
      description: 'Two branded EVs in synchronized tandem along arterial corridors.',
      icon: Users2,
    },
    {
      title: 'Multi-Rider Fleet',
      href: '/solutions/fleet-advertising',
      description: 'Multi-vehicle saturation across high-density commercial zones.',
      icon: Layers,
    },
    {
      title: 'Location & Corridor Targeting',
      href: '/solutions/location-targeting',
      description: 'Strategic time-of-day and PIN-code route corridor selection.',
      icon: Compass,
    },
    {
      title: 'Creative & Wrap Studio',
      href: '/creative-services',
      description: 'Commercial wrap design, promotional video, and social content.',
      icon: Palette,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-carbon-black/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.85)] py-2.5 sm:py-3'
            : 'bg-carbon-black/35 backdrop-blur-md border-b border-white/[0.04] py-3 sm:py-4'
        }`}
      >
        {/* Subtle top ambient edge glow line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-electric-yellow/25 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Authentic ADRYD Brand Logo - Clean, Neat & Bold */}
            <Link
              href="/"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-yellow rounded-lg transition-transform"
              aria-label="ADRYD - Ride. Promote. Sell. Grow."
            >
              <BrandLogo size="md" showTagline={true} />
            </Link>

            {/* Desktop Navigation Links - Floating Glassmorphic Capsule */}
            <nav className="hidden xl:flex items-center gap-1 px-2 py-1 rounded-full bg-white/[0.035] border border-white/[0.07] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <Link
                href="/"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/'
                    ? 'text-carbon-black bg-electric-yellow shadow-[0_0_14px_rgba(255,229,0,0.35)]'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/about'
                    ? 'text-carbon-black bg-electric-yellow shadow-[0_0_14px_rgba(255,229,0,0.35)]'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                About
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  href="/solutions"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                    pathname.startsWith('/solutions')
                      ? 'text-carbon-black bg-electric-yellow shadow-[0_0_14px_rgba(255,229,0,0.35)]'
                      : 'text-soft-ivory/80 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  aria-expanded={solutionsOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      solutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Link>

                {/* Dropdown Menu Modal Card */}
                {solutionsOpen && (
                  <div className="absolute top-full left-0 pt-3 w-96 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                    <div className="p-3 rounded-2xl bg-carbon-black/95 backdrop-blur-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
                      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] mb-1">
                        <span className="font-tech text-[11px] font-bold uppercase tracking-wider text-electric-yellow">
                          Campaign Solutions
                        </span>
                        <span className="text-[10px] text-muted-grey font-tech">
                          HYDERABAD PILOT
                        </span>
                      </div>
                      <div className="space-y-1">
                        {solutionItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group/item ${
                                isActive
                                  ? 'bg-burgundy/40 border border-burgundy-light/40 text-electric-yellow'
                                  : 'hover:bg-white/[0.06] text-soft-ivory'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center shrink-0 text-electric-yellow group-hover/item:border-electric-yellow/60 group-hover/item:scale-105 transition-all">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-heading font-bold text-white group-hover/item:text-electric-yellow flex items-center justify-between">
                                  <span>{item.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-electric-yellow" />
                                </div>
                                <p className="text-[11px] text-muted-grey mt-0.5 line-clamp-1 leading-snug">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-2 pt-2 border-t border-white/[0.08] px-3 py-1 flex items-center justify-between">
                        <Link
                          href="/solutions"
                          className="text-xs font-semibold text-electric-yellow hover:underline flex items-center gap-1"
                        >
                          <span>Compare All Packages</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-[10px] text-muted-grey">Zero static blindspots</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ADRYD Upgrade with glowing pill */}
              <Link
                href="/adryd-upgrade"
                className={`relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/adryd-upgrade'
                    ? 'text-carbon-black bg-electric-yellow shadow-[0_0_14px_rgba(255,229,0,0.35)]'
                    : 'text-soft-ivory/90 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-electric-yellow animate-pulse" />
                <span>ADRYD Upgrade</span>
                <span className="text-[9px] font-tech font-bold uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-burgundy text-white border border-burgundy-light">
                  New
                </span>
              </Link>

              <Link
                href="/how-it-works"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/how-it-works'
                    ? 'text-carbon-black bg-electric-yellow shadow-[0_0_14px_rgba(255,229,0,0.35)]'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                How It Works
              </Link>

              <Link
                href="/industries"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/industries'
                    ? 'text-carbon-black bg-electric-yellow shadow-[0_0_14px_rgba(255,229,0,0.35)]'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                Industries
              </Link>

              <Link
                href="/become-a-rider"
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  pathname === '/become-a-rider'
                    ? 'text-carbon-black bg-electric-yellow shadow-[0_0_14px_rgba(255,229,0,0.35)]'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                Become a Rider
              </Link>
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-semibold tracking-wide text-soft-ivory/80 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
              >
                Contact
              </Link>

              {/* WhatsApp Quick Link */}
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.campaign)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-graphite/80 hover:bg-burgundy text-white hover:text-electric-yellow transition-all border border-white/10 hover:border-emerald-500/50 group/wa"
                title="Chat with ADRYD team on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/wa:scale-110 transition-transform" />
              </a>

              {/* Primary CTA: Launch Campaign */}
              <Link
                href="/book-campaign"
                className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,229,0,0.25)] hover:shadow-[0_0_28px_rgba(255,229,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Launch Campaign</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <Link
                href="/book-campaign"
                className="px-3.5 py-1.5 text-xs font-heading font-black uppercase tracking-wider rounded-full bg-electric-yellow text-carbon-black shadow-[0_0_15px_rgba(255,229,0,0.3)]"
              >
                Launch
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-graphite/60 border border-white/10 text-soft-ivory hover:text-electric-yellow hover:border-electric-yellow/40 focus:outline-none transition-colors"
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
        <div className="fixed inset-0 z-40 bg-carbon-black/95 backdrop-blur-2xl flex flex-col pt-20 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200 xl:hidden">
          {/* Top Brand inside Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <BrandLogo size="sm" showTagline={true} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/[0.05] text-muted-grey hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links inside Drawer */}
          <div className="flex flex-col gap-1 py-4 border-b border-white/[0.08]">
            <Link
              href="/"
              className={`text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors ${
                pathname === '/' ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory hover:text-electric-yellow'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors ${
                pathname === '/about' ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory hover:text-electric-yellow'
              }`}
            >
              About ADRYD
            </Link>

            {/* Solutions Sublinks */}
            <div className="py-2">
              <Link
                href="/solutions"
                className={`text-lg font-heading font-bold px-3 py-2 flex items-center justify-between rounded-lg ${
                  pathname.startsWith('/solutions') ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory'
                }`}
              >
                <span>Advertising Solutions</span>
                <span className="text-xs text-muted-grey font-normal font-sans">View All</span>
              </Link>
              <div className="pl-4 mt-1 space-y-1 border-l-2 border-burgundy ml-3">
                {solutionItems.map((sol) => (
                  <Link
                    key={sol.href}
                    href={sol.href}
                    className="block text-sm text-soft-ivory/80 hover:text-electric-yellow py-1.5 px-2"
                  >
                    {sol.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/adryd-upgrade"
              className={`text-lg font-heading font-bold py-2 px-3 rounded-lg flex items-center gap-2 ${
                pathname === '/adryd-upgrade' ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory hover:text-electric-yellow'
              }`}
            >
              <Sparkles className="w-4 h-4 text-electric-yellow" />
              <span>ADRYD Upgrade</span>
              <span className="text-[10px] font-tech font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-burgundy text-white">
                Commerce
              </span>
            </Link>

            <Link
              href="/how-it-works"
              className={`text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors ${
                pathname === '/how-it-works' ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory hover:text-electric-yellow'
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/industries"
              className={`text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors ${
                pathname === '/industries' ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory hover:text-electric-yellow'
              }`}
            >
              Industries
            </Link>

            <Link
              href="/technology"
              className={`text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors ${
                pathname === '/technology' ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory hover:text-electric-yellow'
              }`}
            >
              Platform Telemetry
            </Link>

            <Link
              href="/become-a-rider"
              className={`text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors ${
                pathname === '/become-a-rider' ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory hover:text-electric-yellow'
              }`}
            >
              Become an EV Partner
            </Link>

            <Link
              href="/contact"
              className={`text-lg font-heading font-bold py-2 px-3 rounded-lg transition-colors ${
                pathname === '/contact' ? 'text-electric-yellow bg-white/[0.05]' : 'text-soft-ivory hover:text-electric-yellow'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-6 space-y-3 mt-auto">
            <Link
              href="/book-campaign"
              className="w-full py-3.5 rounded-xl bg-electric-yellow text-carbon-black font-heading font-black text-center text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,229,0,0.3)] flex items-center justify-center gap-2"
            >
              <span>Launch a Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.campaign)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-graphite border border-white/10 text-white font-medium text-center text-xs flex items-center justify-center gap-2 hover:border-emerald-500/50"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Desk</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-[11px] text-muted-grey pt-2 font-tech">
              <MapPin className="w-3.5 h-3.5 text-burgundy" />
              <span>HYDERABAD PILOT NETWORK • 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
