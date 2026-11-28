'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Shield, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const SAFEGUARDS = [
  {
    title: 'Commercial Contracts & Intellectual Property',
    desc: 'All brand activations require formal written partner agreements defining campaign duration, promoter apparel rights, sample return protocols, and intellectual property protections.',
  },
  {
    title: 'Commission Attribution & Settlement Payouts',
    desc: 'Promoter and affiliate commissions apply strictly to confirmed, completed, and non-refunded transactions. Automated payout schedules operate under standard commercial settlement windows.',
  },
  {
    title: 'Customer Data Privacy & Consent',
    desc: 'Shopper contact details collected via QR forms or pre-order registries adhere to strict data protection standards and are never sold to unauthorized third parties.',
  },
  {
    title: 'Public Space & Transit Permits',
    desc: 'All street-level promotional fleets and promoter staging stations operate in full compliance with municipal urban regulations, traffic police guidelines, and private campus permissions.',
  },
  {
    title: 'Travel Collaboration Safety & Insurance',
    desc: 'Fashion-tourism weekend getaways require verified licensed tour operator partners, individual travel insurance coverage, and signed participant consent documentation.',
  },
  {
    title: 'Sample Care, Sanitization & Replacement Terms',
    desc: 'Partner apparel is catalogued upon handover and treated with professional sanitization standards. Damage or loss during active operations is reimbursed under agreed replacement values.',
  },
];

export default function BusinessSafeguardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="safeguards" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Compliance &amp; Operational Security</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BUSINESS TRANSPARENCY &amp; SAFEGUARDS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Institutional-grade risk management frameworks, statutory municipal compliance, and clear legal boundaries protecting every stakeholder.
          </p>
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto space-y-3">
          {SAFEGUARDS.map((s, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#030C16] border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-[#B4F000] shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-white">{s.title}</span>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3"
                    >
                      {s.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Legal Links Footer */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span>Review foundational website policies:</span>
          <Link href="/terms" className="text-[#0A9BE0] hover:text-[#B4F000] underline inline-flex items-center gap-1">
            <span>Terms &amp; Conditions</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
          <Link href="/privacy" className="text-[#0A9BE0] hover:text-[#B4F000] underline inline-flex items-center gap-1">
            <span>Privacy Policy</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
          <Link href="/partner-terms" className="text-[#0A9BE0] hover:text-[#B4F000] underline inline-flex items-center gap-1">
            <span>Partner Terms</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  );
}
