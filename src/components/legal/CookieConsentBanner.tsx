'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, Check, X, Shield, Settings2 } from 'lucide-react';

interface CookiePreferencesState {
  essential: boolean; // Always true
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'adryd-cookie-preferences-v1';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferencesState>({
    essential: true,
    preferences: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user previously made a choice
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Show banner after brief delay
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setPrefs(parsed);
      } catch {
        setVisible(true);
      }
    }

    // Allow re-opening via custom event (e.g. from footer link)
    const handleOpen = () => {
      setModalOpen(true);
    };

    window.addEventListener('open-cookie-preferences', handleOpen);
    return () => window.removeEventListener('open-cookie-preferences', handleOpen);
  }, []);

  const savePreferences = (newPrefs: CookiePreferencesState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    setPrefs(newPrefs);
    setVisible(false);
    setModalOpen(false);

    // Apply preference state to window for any scripts that check consent
    if (typeof window !== 'undefined') {
      (window as unknown as { adrydConsent?: CookiePreferencesState }).adrydConsent = newPrefs;
    }
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      preferences: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectOptional = () => {
    savePreferences({
      essential: true,
      preferences: false,
      analytics: false,
      marketing: false,
    });
  };

  if (!visible && !modalOpen) return null;

  return (
    <>
      {/* Floating Bottom Banner */}
      {visible && !modalOpen && (
        <div
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xl z-50 p-5 rounded-3xl bg-[#041220]/95 backdrop-blur-2xl border border-[#0A9BE0]/40 shadow-[0_12px_45px_rgba(0,0,0,0.8)] text-white text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#0A9BE0]/20 border border-[#0A9BE0]/40 flex items-center justify-center shrink-0 mt-0.5">
              <Cookie className="w-4 h-4 text-[#B4F000]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-white text-sm">Privacy & Cookie Preferences</h4>
              <p className="text-[#E2E8F0]/80 leading-relaxed text-xs">
                ADRYD uses essential cookies to ensure secure operations. With your consent, we use optional diagnostics and marketing measurement to refine our electric mobility campaigns. See our{' '}
                <Link href="/cookie-policy" className="text-[#B4F000] hover:underline font-semibold">
                  Cookie Policy
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => setModalOpen(true)}
              className="py-2 px-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#E2E8F0] font-semibold text-xs border border-white/10 transition-colors"
            >
              Preferences
            </button>
            <button
              onClick={handleRejectOptional}
              className="py-2 px-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              Reject Optional
            </button>
            <button
              onClick={handleAcceptAll}
              className="py-2 px-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-xs shadow-[0_4px_15px_rgba(180,240,0,0.3)] transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      {/* Detailed Cookie Preferences Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div className="w-full max-w-lg rounded-3xl bg-[#041220] border border-[#0A9BE0]/40 p-6 sm:p-7 text-white shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Settings2 className="w-5 h-5 text-[#B4F000]" />
                <h3 className="font-heading font-black text-lg text-white uppercase tracking-tight">
                  Cookie & Privacy Preferences
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-full text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#E2E8F0]/80 leading-relaxed">
              Customize which categories of technologies you permit. Essential cookies are required to deliver basic security, routing, and access.
            </p>

            <div className="space-y-3 text-xs max-h-64 overflow-y-auto pr-1">
              {/* Essential Category */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="space-y-0.5 pr-4">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <Shield className="w-3.5 h-3.5 text-[#0A9BE0]" />
                    <span>Strictly Essential (Always Active)</span>
                  </div>
                  <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                    Required for core security, session integrity, form submission tokens, and CDN routing.
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A9BE0] px-2 py-0.5 rounded bg-[#0A9BE0]/20 border border-[#0A9BE0]/30 shrink-0">
                  Required
                </span>
              </div>

              {/* Preferences Category */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="space-y-0.5 pr-4">
                  <span className="font-bold text-white block">Preferences & Interface</span>
                  <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                    Remembers dismissed announcements, UI view mode, and chosen language settings.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.preferences}
                  onChange={(e) => setPrefs({ ...prefs, preferences: e.target.checked })}
                  className="w-4 h-4 accent-[#B4F000] cursor-pointer shrink-0"
                />
              </div>

              {/* Analytics Category */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="space-y-0.5 pr-4">
                  <span className="font-bold text-white block">Performance Diagnostics</span>
                  <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                    Collects aggregated metrics on page rendering speeds, network latency, and Core Web Vitals.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="w-4 h-4 accent-[#B4F000] cursor-pointer shrink-0"
                />
              </div>

              {/* Marketing Category */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="space-y-0.5 pr-4">
                  <span className="font-bold text-white block">Attribution & Referral Tracking</span>
                  <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                    Measures partner campaign reach, QR scan conversions, and affiliate tracking tokens.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                  className="w-4 h-4 accent-[#B4F000] cursor-pointer shrink-0"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <button
                onClick={handleRejectOptional}
                className="py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                Reject Optional
              </button>
              <button
                onClick={() => savePreferences(prefs)}
                className="py-2.5 px-5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Choices</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
