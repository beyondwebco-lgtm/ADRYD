'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Users,
  Info,
  Mail,
  Home,
  Briefcase,
  Compass,
  Bike,
  ShieldCheck,
} from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import { dropdownVariants } from '@/lib/motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(1920);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Window scroll listener for smooth sticky header transitions
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Window width listener for responsive active state intelligence
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: Escape key closes dropdown and mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Body scroll lock when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Anti-flicker hover handlers for More dropdown
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  // Responsive overflow detection for active state highlighting
  const isHowItWorksOverflowed = windowWidth < 1480;
  const isPartnerOverflowed = windowWidth < 1360;
  const isAboutOverflowed = windowWidth < 1220;
  const isContactOverflowed = windowWidth < 1120;

  const isMoreActive =
    pathname.startsWith('/adryd-upgrade') ||
    pathname.startsWith('/technology') ||
    (isHowItWorksOverflowed && pathname === '/how-it-works') ||
    (isPartnerOverflowed && pathname === '/become-a-rider') ||
    (isAboutOverflowed && pathname === '/about') ||
    (isContactOverflowed && pathname === '/contact');

  // Navigation Links definition with responsive tier classes
  const navLinks = [
    { label: 'Home', href: '/', extraClass: '' },
    { label: 'About', href: '/about', extraClass: 'nav-item-about' },
    { label: 'Services', href: '/services', extraClass: '' },
    { label: 'Brand Activation', href: '/brand-activation', extraClass: '' },
    { label: 'Campaign Plans', href: '/campaign-plans', extraClass: '' },
    { label: 'Riderpreneur', href: '/riderpreneur', extraClass: '' },
    { label: 'How It Works', href: '/how-it-works', extraClass: 'nav-item-how-it-works' },
    { label: 'Become a Partner', href: '/become-a-rider', extraClass: 'nav-item-become-partner' },
    { label: 'Contact', href: '/contact', extraClass: 'nav-item-contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? 'h-[68px] xl:h-[72px] bg-[#000000]/90 backdrop-blur-2xl border-b border-[#0A9BE0]/25 shadow-[0_8px_32px_rgba(0,0,0,0.75)]'
            : 'h-[78px] xl:h-[82px] bg-[#000000]/65 backdrop-blur-md border-b border-white/[0.08]'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-full">
          <div className="flex items-center justify-between flex-nowrap h-full gap-2 sm:gap-4">
            {/* 1. ADRYD Logo (Left) */}
            <Link
              href="/"
              className="shrink-0 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4F000] rounded-lg transition-transform duration-200 hover:scale-[1.01]"
              aria-label="ADRYD - The Moving Marketplace Home"
            >
              <BrandLogo size="nav" showTagline={true} theme="dark" />
            </Link>

            {/* 2. Desktop Single-Line Navigation (Center) */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center flex-nowrap gap-1 xl:gap-2 2xl:gap-3"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group/nav relative px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-[13.5px] 2xl:text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-200 select-none flex items-center ${
                      isActive
                        ? 'text-[#B4F000] bg-[#B4F000]/10 border border-[#B4F000]/30 shadow-[0_0_12px_rgba(180,240,0,0.2)]'
                        : 'text-slate-200 hover:text-white hover:bg-white/[0.08]'
                    } ${link.extraClass || ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative z-10 transition-colors duration-200">
                      {link.label}
                    </span>

                    {/* Smooth sliding active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0A9BE0] to-[#B4F000] rounded-full shadow-[0_0_8px_rgba(180,240,0,0.6)]"
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}

                    {/* Subtle hover indicator when inactive */}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-[#0A9BE0]/70 rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200 shadow-[0_0_6px_rgba(10,155,224,0.4)]" />
                    )}
                  </Link>
                );
              })}

              {/* 3. More Dropdown Trigger & Popover */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  id="more-nav-button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setDropdownOpen(!dropdownOpen);
                    }
                  }}
                  className={`group/more relative px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-[13.5px] 2xl:text-sm font-semibold rounded-full whitespace-nowrap flex items-center gap-1.5 transition-all duration-200 select-none ${
                    isMoreActive
                      ? 'text-[#B4F000] bg-[#B4F000]/10 border border-[#B4F000]/30 shadow-[0_0_12px_rgba(180,240,0,0.2)]'
                      : 'text-slate-200 hover:text-white hover:bg-white/[0.08]'
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  aria-label="More navigation options"
                >
                  <span className="relative z-10">More</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      dropdownOpen
                        ? 'rotate-180 text-[#B4F000]'
                        : 'text-slate-400 group-hover/more:text-slate-200'
                    }`}
                  />

                  {/* Active indicator for More when an overflowed route is active */}
                  {isMoreActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0A9BE0] to-[#B4F000] rounded-full shadow-[0_0_8px_rgba(180,240,0,0.6)]"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}

                  {!isMoreActive && (
                    <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-[#0A9BE0]/70 rounded-full opacity-0 group-hover/more:opacity-100 transition-opacity duration-200 shadow-[0_0_6px_rgba(10,155,224,0.4)]" />
                  )}
                </button>

                {/* Dropdown Menu Overlay */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="more-nav-button"
                      className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-[#010810]/95 backdrop-blur-2xl border border-[#0A9BE0]/30 shadow-[0_16px_48px_rgba(0,0,0,0.85)] p-2.5 z-50 overflow-hidden"
                    >
                      {/* Brand aesthetic corner accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#B4F000]/70 pointer-events-none" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#0A9BE0]/70 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#0A9BE0]/70 pointer-events-none" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#B4F000]/70 pointer-events-none" />

                      {/* Progressive Overflow Links (Priority: Contact < 1120, About < 1220, Partner < 1360, How It Works < 1480) */}
                      <div className="space-y-1">
                        {/* Contact (Tier 4: < 1120px) */}
                        <Link
                          href="/contact"
                          onClick={() => setDropdownOpen(false)}
                          className="dropdown-item-contact items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] transition-colors group select-none"
                          role="menuitem"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0A9BE0]/15 flex items-center justify-center text-[#0A9BE0] shrink-0 border border-[#0A9BE0]/25 group-hover:border-[#0A9BE0]/50 transition-colors">
                            <Mail className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`text-xs font-bold whitespace-nowrap transition-colors ${
                                pathname === '/contact'
                                  ? 'text-[#B4F000]'
                                  : 'text-white group-hover:text-[#0A9BE0]'
                              }`}
                            >
                              Contact
                            </div>
                            <div className="text-[11px] text-[#94A3B8] truncate">
                              Get in touch with operations
                            </div>
                          </div>
                        </Link>

                        {/* About (Tier 3: < 1220px) */}
                        <Link
                          href="/about"
                          onClick={() => setDropdownOpen(false)}
                          className="dropdown-item-about items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] transition-colors group select-none"
                          role="menuitem"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#B4F000]/15 flex items-center justify-center text-[#B4F000] shrink-0 border border-[#B4F000]/25 group-hover:border-[#B4F000]/50 transition-colors">
                            <Info className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`text-xs font-bold whitespace-nowrap transition-colors ${
                                pathname === '/about'
                                  ? 'text-[#B4F000]'
                                  : 'text-white group-hover:text-[#B4F000]'
                              }`}
                            >
                              About
                            </div>
                            <div className="text-[11px] text-[#94A3B8] truncate">
                              Mission, fleet & safety
                            </div>
                          </div>
                        </Link>

                        {/* Become a Partner (Tier 2: < 1360px) */}
                        <Link
                          href="/become-a-rider"
                          onClick={() => setDropdownOpen(false)}
                          className="dropdown-item-become-partner items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] transition-colors group select-none"
                          role="menuitem"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0A9BE0]/15 flex items-center justify-center text-[#0A9BE0] shrink-0 border border-[#0A9BE0]/25 group-hover:border-[#0A9BE0]/50 transition-colors">
                            <Users className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`text-xs font-bold whitespace-nowrap transition-colors ${
                                pathname === '/become-a-rider'
                                  ? 'text-[#B4F000]'
                                  : 'text-white group-hover:text-[#0A9BE0]'
                              }`}
                            >
                              Become a Partner
                            </div>
                            <div className="text-[11px] text-[#94A3B8] truncate">
                              Rider & fleet partnership
                            </div>
                          </div>
                        </Link>

                        {/* How It Works (Tier 1: < 1480px) */}
                        <Link
                          href="/how-it-works"
                          onClick={() => setDropdownOpen(false)}
                          className="dropdown-item-how-it-works items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] transition-colors group select-none"
                          role="menuitem"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#B4F000]/15 flex items-center justify-center text-[#B4F000] shrink-0 border border-[#B4F000]/25 group-hover:border-[#B4F000]/50 transition-colors">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`text-xs font-bold whitespace-nowrap transition-colors ${
                                pathname === '/how-it-works'
                                  ? 'text-[#B4F000]'
                                  : 'text-white group-hover:text-[#B4F000]'
                              }`}
                            >
                              How It Works
                            </div>
                            <div className="text-[11px] text-[#94A3B8] truncate">
                              4-step campaign execution
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* Subtle divider */}
                      <div className="border-t border-white/[0.08] my-1.5" />

                      {/* Permanent Features */}
                      <div className="space-y-1">
                        <Link
                          href="/adryd-upgrade"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] transition-colors group select-none"
                          role="menuitem"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#B4F000]/15 flex items-center justify-center text-[#B4F000] shrink-0 border border-[#B4F000]/25 group-hover:border-[#B4F000]/50 transition-colors">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`text-xs font-bold whitespace-nowrap transition-colors ${
                                pathname === '/adryd-upgrade'
                                  ? 'text-[#B4F000]'
                                  : 'text-white group-hover:text-[#B4F000]'
                              }`}
                            >
                              ADRYD Upgrade
                            </div>
                            <div className="text-[11px] text-[#94A3B8] truncate">
                              Next-Gen Platform Model
                            </div>
                          </div>
                        </Link>

                        <Link
                          href="/technology"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] transition-colors group select-none"
                          role="menuitem"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0A9BE0]/15 flex items-center justify-center text-[#0A9BE0] shrink-0 border border-[#0A9BE0]/25 group-hover:border-[#0A9BE0]/50 transition-colors">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`text-xs font-bold whitespace-nowrap transition-colors ${
                                pathname === '/technology'
                                  ? 'text-[#0A9BE0]'
                                  : 'text-white group-hover:text-[#0A9BE0]'
                              }`}
                            >
                              Technology Roadmap
                            </div>
                            <div className="text-[11px] text-[#94A3B8] truncate">
                              Connected Fleet Telemetry
                            </div>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* 4. Launch Campaign CTA (Single Line, Desktop) */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                href="/book-campaign"
                className="group/cta relative inline-flex items-center justify-center gap-2 h-[42px] xl:h-[44px] px-5 xl:px-6 rounded-full bg-[#B4F000] hover:bg-[#c4fb1c] text-[#000000] text-xs xl:text-sm font-black whitespace-nowrap shadow-[0_2px_14px_rgba(180,240,0,0.32)] hover:shadow-[0_4px_22px_rgba(180,240,0,0.52)] active:scale-[0.98] transition-all duration-200 select-none"
              >
                <span className="whitespace-nowrap">Launch Campaign</span>
                <ArrowRight className="w-4 h-4 text-[#000000] group-hover/cta:translate-x-1 transition-transform duration-200 shrink-0" />
              </Link>
            </div>

            {/* 5. Mobile / Tablet Navigation Toggle & Quick CTA (< 1024px) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <Link
                href="/book-campaign"
                className="px-3.5 py-1.5 rounded-full bg-[#B4F000] text-[#000000] text-xs font-black whitespace-nowrap shadow-[0_2px_10px_rgba(180,240,0,0.3)] hover:bg-[#c4fb1c] transition-colors select-none"
              >
                Launch
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-white hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4F000]"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#B4F000]" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#000000]/98 backdrop-blur-3xl pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto lg:hidden text-white"
          >
            <div className="space-y-4 max-w-lg mx-auto w-full">
              {/* Category: Core Experience */}
              <div>
                <div className="text-[11px] font-bold text-[#0A9BE0] tracking-wider uppercase mb-2 px-2">
                  Explore ADRYD
                </div>
                <div className="space-y-1">
                  {[
                    { label: 'Home', href: '/', icon: Home },
                    { label: 'About', href: '/about', icon: Info },
                    { label: 'Services', href: '/services', icon: Briefcase },
                    { label: 'Brand Activation', href: '/brand-activation', icon: Sparkles },
                    { label: 'Campaign Plans', href: '/campaign-plans', icon: Layers },
                  ].map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-base font-bold transition-all ${
                          isActive
                            ? 'text-[#B4F000] bg-[#B4F000]/10 border border-[#B4F000]/30'
                            : 'text-slate-200 hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0 text-[#0A9BE0]" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Category: Ecosystem & Partnerships */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[11px] font-bold text-[#B4F000] tracking-wider uppercase mb-2 px-2">
                  Partners & Operations
                </div>
                <div className="space-y-1">
                  {[
                    { label: 'Riderpreneur', href: '/riderpreneur', icon: Bike },
                    { label: 'How It Works', href: '/how-it-works', icon: Compass },
                    { label: 'Become a Partner', href: '/become-a-rider', icon: Users },
                    { label: 'Contact', href: '/contact', icon: Mail },
                  ].map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-base font-bold transition-all ${
                          isActive
                            ? 'text-[#B4F000] bg-[#B4F000]/10 border border-[#B4F000]/30'
                            : 'text-slate-200 hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0 text-[#B4F000]" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Category: Platform & Telemetry */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-2 px-2">
                  Platform Architecture
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/adryd-upgrade"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col gap-1 p-3 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/25 text-[#B4F000] font-bold text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span>ADRYD Upgrade</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] text-white/70 font-normal">
                      Next-Gen Platform
                    </span>
                  </Link>

                  <Link
                    href="/technology"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col gap-1 p-3 rounded-xl bg-[#0A9BE0]/10 border border-[#0A9BE0]/25 text-[#0A9BE0] font-bold text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span>Technology</span>
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] text-white/70 font-normal">
                      Fleet Telemetry
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Full-Width CTA */}
            <div className="pt-6 border-t border-white/10 max-w-lg mx-auto w-full">
              <Link
                href="/book-campaign"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c4fb1c] text-[#000000] font-black text-sm shadow-[0_4px_25px_rgba(180,240,0,0.35)] transition-all select-none"
              >
                <span>Launch a Campaign</span>
                <ArrowRight className="w-4 h-4 text-[#000000]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
