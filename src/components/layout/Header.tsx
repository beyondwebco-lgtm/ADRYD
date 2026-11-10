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
  PhoneCall,
  MapPin,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  const solutions = SITE_CONFIG.navLinks.find((l) => l.label === 'Solutions')?.children || [];

  const getWhatsAppUrl = (text: string) => {
    const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-carbon-black/90 backdrop-blur-md border-b border-graphite-border shadow-2xl py-3'
            : 'bg-gradient-to-b from-carbon-black/80 via-carbon-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="ADRYD Home"
            >
              <div className="relative flex items-center">
                {/* Custom Brand Logo */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-burgundy/40 border border-burgundy-light/60 group-hover:border-electric-yellow/80 transition-colors">
                    <span className="font-heading font-black text-xl italic text-electric-yellow tracking-tighter">
                      &gt;&gt;
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-heading font-black text-2xl tracking-tight text-white group-hover:text-electric-yellow transition-colors italic">
                        ADRYD
                      </span>
                      <span className="text-[10px] font-bold text-electric-yellow bg-electric-yellow/10 px-1 py-0.5 rounded border border-electric-yellow/30 leading-none">
                        EV
                      </span>
                    </div>
                    <span className="font-tech text-[9px] tracking-widest text-muted-grey uppercase hidden sm:block">
                      RIDE • PROMOTE • GROW
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all relative ${
                  pathname === '/'
                    ? 'text-electric-yellow'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
                {pathname === '/' && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric-yellow rounded-full" />
                )}
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all relative ${
                  pathname === '/about'
                    ? 'text-electric-yellow'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/5'
                }`}
              >
                About
                {pathname === '/about' && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric-yellow rounded-full" />
                )}
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <Link
                  href="/solutions"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all ${
                    pathname.startsWith('/solutions')
                      ? 'text-electric-yellow'
                      : 'text-soft-ivory/80 hover:text-white hover:bg-white/5'
                  }`}
                  aria-expanded={solutionsDropdownOpen}
                >
                  Solutions
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      solutionsDropdownOpen ? 'rotate-180 text-electric-yellow' : ''
                    }`}
                  />
                </Link>

                {/* Dropdown Menu */}
                {solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="bg-carbon-card/95 backdrop-blur-xl border border-graphite-border rounded-xl p-2 shadow-2xl ring-1 ring-white/10 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3 py-2 text-[11px] font-tech font-bold uppercase tracking-wider text-muted-grey border-b border-graphite-border/50">
                        Advertising Capabilities
                      </div>
                      <div className="py-1">
                        {solutions.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col px-3 py-2.5 rounded-lg transition-colors group/item ${
                              pathname === item.href
                                ? 'bg-burgundy/40 text-electric-yellow'
                                : 'hover:bg-white/5 text-soft-ivory/90'
                            }`}
                          >
                            <span className="text-sm font-heading font-semibold group-hover/item:text-electric-yellow flex items-center justify-between">
                              {item.label}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                            </span>
                            <span className="text-xs text-muted-grey mt-0.5 line-clamp-1">
                              {item.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ADRYD Upgrade with Badge */}
              <Link
                href="/adryd-upgrade"
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1.5 ${
                  pathname === '/adryd-upgrade'
                    ? 'text-electric-yellow font-bold'
                    : 'text-soft-ivory/90 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-electric-yellow animate-pulse" />
                <span>ADRYD Upgrade</span>
                <span className="text-[10px] font-tech font-bold bg-burgundy text-white px-1.5 py-0.5 rounded-full border border-burgundy-light uppercase tracking-wider">
                  New
                </span>
                {pathname === '/adryd-upgrade' && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric-yellow rounded-full" />
                )}
              </Link>

              <Link
                href="/how-it-works"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all relative ${
                  pathname === '/how-it-works'
                    ? 'text-electric-yellow'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/5'
                }`}
              >
                How It Works
                {pathname === '/how-it-works' && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric-yellow rounded-full" />
                )}
              </Link>

              <Link
                href="/industries"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all relative ${
                  pathname === '/industries'
                    ? 'text-electric-yellow'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Industries
                {pathname === '/industries' && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric-yellow rounded-full" />
                )}
              </Link>

              <Link
                href="/become-a-rider"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all relative ${
                  pathname === '/become-a-rider'
                    ? 'text-electric-yellow'
                    : 'text-soft-ivory/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Become a Rider
                {pathname === '/become-a-rider' && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric-yellow rounded-full" />
                )}
              </Link>
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-3.5 py-2 text-sm font-medium text-soft-ivory/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Contact
              </Link>

              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.campaign)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-graphite hover:bg-burgundy text-white hover:text-electric-yellow transition-all border border-graphite-border"
                title="Chat on WhatsApp"
                aria-label="Chat with ADRYD on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>

              <Link
                href="/book-campaign"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-sm tracking-wide shadow-lg hover:shadow-electric-yellow/20 transition-all active:scale-[0.98]"
              >
                <span>Launch Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <Link
                href="/book-campaign"
                className="px-3 py-1.5 text-xs font-heading font-bold rounded-md bg-electric-yellow text-carbon-black"
              >
                Launch
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-graphite/60 border border-graphite-border text-soft-ivory hover:text-electric-yellow focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen / Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-carbon-black/95 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-1 pb-6 border-b border-graphite-border">
            <span className="font-tech text-xs tracking-widest text-electric-yellow uppercase">
              Navigation Menu
            </span>
            <div className="flex flex-col gap-2 mt-2">
              <Link
                href="/"
                className="text-xl font-heading font-bold text-soft-ivory hover:text-electric-yellow py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-xl font-heading font-bold text-soft-ivory hover:text-electric-yellow py-2"
              >
                About ADRYD
              </Link>
              <Link
                href="/solutions"
                className="text-xl font-heading font-bold text-soft-ivory hover:text-electric-yellow py-2 flex items-center justify-between"
              >
                Advertising Solutions
                <span className="text-xs font-normal text-muted-grey">Explore</span>
              </Link>
              <div className="pl-4 flex flex-col gap-2 py-1 border-l-2 border-burgundy">
                <Link
                  href="/solutions/single-rider"
                  className="text-sm text-soft-ivory/80 hover:text-electric-yellow"
                >
                  Single Rider Campaign
                </Link>
                <Link
                  href="/solutions/dual-rider"
                  className="text-sm text-soft-ivory/80 hover:text-electric-yellow"
                >
                  Dual Rider Campaign
                </Link>
                <Link
                  href="/solutions/fleet-advertising"
                  className="text-sm text-soft-ivory/80 hover:text-electric-yellow"
                >
                  Multi-Rider Fleet
                </Link>
                <Link
                  href="/solutions/location-targeting"
                  className="text-sm text-soft-ivory/80 hover:text-electric-yellow"
                >
                  Location &amp; Corridor Targeting
                </Link>
                <Link
                  href="/creative-services"
                  className="text-sm text-soft-ivory/80 hover:text-electric-yellow"
                >
                  Creative &amp; Content Services
                </Link>
              </div>

              <Link
                href="/adryd-upgrade"
                className="text-xl font-heading font-bold text-electric-yellow py-2 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                ADRYD Upgrade
                <span className="text-[10px] bg-burgundy text-white px-2 py-0.5 rounded-full font-tech font-bold uppercase">
                  Commerce
                </span>
              </Link>
              <Link
                href="/how-it-works"
                className="text-xl font-heading font-bold text-soft-ivory hover:text-electric-yellow py-2"
              >
                How It Works
              </Link>
              <Link
                href="/industries"
                className="text-xl font-heading font-bold text-soft-ivory hover:text-electric-yellow py-2"
              >
                Industries We Serve
              </Link>
              <Link
                href="/technology"
                className="text-xl font-heading font-bold text-soft-ivory hover:text-electric-yellow py-2"
              >
                Platform Technology
              </Link>
              <Link
                href="/become-a-rider"
                className="text-xl font-heading font-bold text-soft-ivory hover:text-electric-yellow py-2"
              >
                Become an EV Rider Partner
              </Link>
              <Link
                href="/contact"
                className="text-xl font-heading font-bold text-soft-ivory hover:text-electric-yellow py-2"
              >
                Contact &amp; Support
              </Link>
            </div>
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 flex flex-col gap-3 mt-auto">
            <Link
              href="/book-campaign"
              className="w-full py-3.5 rounded-xl bg-electric-yellow text-carbon-black font-heading font-bold text-center text-base tracking-wide shadow-lg flex items-center justify-center gap-2"
            >
              <span>Launch a Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.campaign)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-graphite border border-graphite-border text-white hover:text-electric-yellow font-heading font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat with Team on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-muted-grey mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-burgundy" /> Hyderabad, Telangana
              </span>
              <span>•</span>
              <span className="font-tech">PILOT STAGE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
