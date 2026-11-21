'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';

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
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Campaign Plans', href: '/campaign-plans' },
    { label: 'Become a Partner', href: '/become-a-rider' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#DCECF2] shadow-[0_4px_25px_rgba(0,168,200,0.04)] py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-[#DCECF2]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <Link
              href="/"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8C8] rounded-lg transition-transform"
              aria-label="ADRYD - The Moving Marketplace"
            >
              <BrandLogo size="md" showTagline={true} theme="light" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[#00A8C8] bg-[#EAF9FD]'
                        : 'text-[#637786] hover:text-[#172B3A] hover:bg-[#F6FAFC]'
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
                      ? 'text-[#1756C1] bg-[#EAF9FD]'
                      : 'text-[#637786] hover:text-[#172B3A] hover:bg-[#F6FAFC]'
                  }`}
                  aria-expanded={dropdownOpen}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white border border-[#DCECF2] shadow-[0_12px_40px_rgba(0,168,200,0.08)] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/adryd-upgrade"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F6FAFC] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EAF9FD] flex items-center justify-center text-[#00A8C8] shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#172B3A] group-hover:text-[#00A8C8] transition-colors">ADRYD Upgrade</div>
                        <div className="text-[11px] text-[#637786]">V3.0 Platform Model</div>
                      </div>
                    </Link>

                    <Link
                      href="/technology"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F6FAFC] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EAF9FD] flex items-center justify-center text-[#1756C1] shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#172B3A] group-hover:text-[#1756C1] transition-colors">Technology</div>
                        <div className="text-[11px] text-[#637786]">Connected Roadmap</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action: Launch Campaign CTA in Palapitta Blue */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/book-campaign"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00A8C8] hover:bg-[#0093AF] text-white text-sm font-bold shadow-[0_4px_18px_rgba(0,168,200,0.25)] hover:shadow-[0_6px_24px_rgba(0,168,200,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Launch Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <Link
                href="/book-campaign"
                className="px-4 py-2 rounded-full bg-[#00A8C8] text-white text-xs font-bold shadow-sm"
              >
                Launch
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-[#172B3A] hover:bg-[#F6FAFC] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in duration-200">
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
                      ? 'text-[#00A8C8] bg-[#EAF9FD]'
                      : 'text-[#172B3A] hover:bg-[#F6FAFC]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#DCECF2] space-y-2">
              <Link
                href="/adryd-upgrade"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#EAF9FD] text-[#00A8C8] font-bold text-base"
              >
                <span>ADRYD Upgrade V3.0</span>
                <Sparkles className="w-4 h-4" />
              </Link>
              <Link
                href="/technology"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#F6FAFC] text-[#1756C1] font-bold text-base"
              >
                <span>Technology Roadmap</span>
                <Zap className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#DCECF2]">
            <Link
              href="/book-campaign"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#00A8C8] text-white font-bold text-base shadow-[0_4px_20px_rgba(0,168,200,0.3)]"
            >
              <span>Launch a Campaign</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
