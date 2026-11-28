'use client';

import { useState, useEffect } from 'react';
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
} from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';
import { dropdownVariants } from '@/lib/motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Brand Activation', href: '/brand-activation' },
    { label: 'Campaign Plans', href: '/campaign-plans' },
    { label: 'Riderpreneur', href: '/riderpreneur' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Become a Partner', href: '/become-a-rider' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#000000]/85 backdrop-blur-2xl border-b border-[#0A9BE0]/25 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3'
            : 'bg-[#000000]/60 backdrop-blur-md border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <Link
              href="/"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4F000] rounded-lg transition-transform"
              aria-label="ADRYD - The Moving Marketplace"
            >
              <BrandLogo size="md" showTagline={true} theme="dark" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[#B4F000] bg-[#B4F000]/10 shadow-sm border border-[#B4F000]/30'
                        : 'text-slate-200 hover:text-[#0A9BE0] hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Secondary More Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                  className={`px-3 py-2 text-sm font-semibold rounded-full flex items-center gap-1 transition-all ${
                    pathname.startsWith('/adryd-upgrade') || pathname.startsWith('/technology')
                      ? 'text-[#B4F000] bg-[#B4F000]/10 border border-[#B4F000]/30'
                      : 'text-slate-200 hover:text-[#0A9BE0] hover:bg-white/10'
                  }`}
                  aria-expanded={dropdownOpen}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-[#04101D]/95 backdrop-blur-2xl border border-[#0A9BE0]/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] p-2 z-50"
                    >
                      <Link
                        href="/adryd-upgrade"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#B4F000]/15 flex items-center justify-center text-[#B4F000] shrink-0 border border-[#B4F000]/25">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#B4F000] transition-colors">ADRYD Upgrade</div>
                          <div className="text-[11px] text-[#94A3B8]">Platform Model</div>
                        </div>
                      </Link>

                      <Link
                        href="/technology"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0A9BE0]/15 flex items-center justify-center text-[#0A9BE0] shrink-0 border border-[#0A9BE0]/25">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#0A9BE0] transition-colors">Technology</div>
                          <div className="text-[11px] text-[#94A3B8]">Connected Roadmap</div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right Action: Launch Campaign CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/book-campaign"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] text-sm font-black shadow-[0_4px_20px_rgba(180,240,0,0.35)] hover:shadow-[0_6px_25px_rgba(180,240,0,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Launch Campaign</span>
                <ArrowRight className="w-4 h-4 text-[#000000]" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <Link
                href="/book-campaign"
                className="px-4 py-2 rounded-full bg-[#B4F000] text-[#000000] text-xs font-black shadow-sm"
              >
                Launch
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#000000]/98 backdrop-blur-3xl pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto lg:hidden text-white"
          >
            <div className="space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-lg font-bold transition-all ${
                      isActive
                        ? 'text-[#B4F000] bg-[#B4F000]/10 border border-[#B4F000]/30'
                        : 'text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link
                  href="/adryd-upgrade"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#B4F000]/10 text-[#B4F000] font-bold text-base"
                >
                  <span>ADRYD Upgrade</span>
                  <Sparkles className="w-4 h-4" />
                </Link>
                <Link
                  href="/technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#0A9BE0]/10 text-[#0A9BE0] font-bold text-base"
                >
                  <span>Technology Roadmap</span>
                  <Zap className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Link
                href="/book-campaign"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#B4F000] text-[#000000] font-black text-base shadow-[0_4px_25px_rgba(180,240,0,0.35)]"
              >
                <span>Launch a Campaign</span>
                <ArrowRight className="w-5 h-5 text-[#000000]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
