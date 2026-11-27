'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { LEGAL_CONFIG } from '@/config/legal';
import { modalBackdropVariants, modalCardVariants } from '@/lib/motion';

export default function PrivacyGrievanceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [requestType, setRequestType] = useState<'privacy' | 'grievance'>('privacy');
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'data_access',
    description: '',
    consent: false,
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmittedId(null);
    };

    window.addEventListener('open-grievance-modal', handleOpen);
    return () => window.removeEventListener('open-grievance-modal', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('adryd-modal-state', { detail: { isOpen: true } }));
      }
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('adryd-modal-state', { detail: { isOpen: false } }));
        }
      };
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description || !formData.consent) {
      alert('Please complete all required fields and accept the confirmation checkbox.');
      return;
    }

    setLoading(true);
    const prefix = requestType === 'privacy' ? 'ADR-PRV' : 'ADR-GRV';
    const ticketId = `${prefix}-${Date.now().toString(36).toUpperCase()}`;

    try {
      // Dispatch to API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: `${requestType.toUpperCase()} REQUEST: ${formData.category}`,
          city: 'Hyderabad',
          message: `[Ticket: ${ticketId}]\nType: ${requestType}\nCategory: ${formData.category}\nDetails: ${formData.description}`,
          consent: formData.consent,
        }),
      });

      setSubmittedId(ticketId);
    } catch {
      setSubmittedId(ticketId);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            variants={modalBackdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            variants={modalCardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-3xl bg-[#041220] border border-[#0A9BE0]/40 p-6 sm:p-8 text-white shadow-2xl relative my-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

        {submittedId ? (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#B4F000]/20 border border-[#B4F000]/40 flex items-center justify-center mx-auto text-[#B4F000]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight">
              Request Logged Successfully
            </h3>
            <p className="text-xs sm:text-sm text-[#E2E8F0]/80 leading-relaxed max-w-sm mx-auto">
              Your formal request has been assigned reference ID:
            </p>
            <div className="p-3 rounded-xl bg-black border border-[#0A9BE0]/40 font-mono text-sm text-[#B4F000] font-bold inline-block">
              {submittedId}
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              In accordance with our compliance protocol, our Grievance Officer will acknowledge your ticket within 48 hours and provide substantive resolution within statutory timelines.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 py-2.5 px-6 rounded-full bg-[#B4F000] text-black font-black text-xs transition-all hover:bg-[#c3fc18]"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Submission Form State */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A9BE0]/15 text-[#0A9BE0] text-[10px] font-bold uppercase tracking-wider">
                <Shield className="w-3 h-3 text-[#B4F000]" />
                <span>LEGAL & COMPLIANCE DESK</span>
              </div>
              <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight">
                Submit Formal Request
              </h3>
              <p className="text-xs text-[#E2E8F0]/80">
                Exercise your DPDP Act privacy rights or file a commercial grievance with our Compliance Officer.
              </p>
            </div>

            {/* Type Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-black border border-white/10 text-xs font-bold">
              <button
                type="button"
                onClick={() => setRequestType('privacy')}
                className={`py-2 px-3 rounded-lg transition-all ${
                  requestType === 'privacy'
                    ? 'bg-[#0A9BE0] text-white shadow-md'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Privacy Rights Request
              </button>
              <button
                type="button"
                onClick={() => setRequestType('grievance')}
                className={`py-2 px-3 rounded-lg transition-all ${
                  requestType === 'grievance'
                    ? 'bg-[#0A9BE0] text-white shadow-md'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Grievance / Dispute
              </button>
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#0A9BE0] focus:outline-none"
              >
                {requestType === 'privacy' ? (
                  <>
                    <option value="data_access">Right to Access Personal Information</option>
                    <option value="data_correction">Right to Correction of Inaccurate Data</option>
                    <option value="data_erasure">Right to Erasure / Account Deletion</option>
                    <option value="consent_withdrawal">Withdrawal of Processing Consent</option>
                    <option value="privacy_complaint">General Privacy Complaint</option>
                  </>
                ) : (
                  <>
                    <option value="campaign_dispute">Campaign Execution Dispute</option>
                    <option value="rider_payment">Rider Earnings & Payout Reconciliation</option>
                    <option value="affiliate_attribution">Affiliate Commission Dispute</option>
                    <option value="safety_incident">Road Safety or Public Conduct Incident</option>
                    <option value="merchant_quality">Product Showcasing Concern</option>
                  </>
                )}
              </select>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#0A9BE0] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#0A9BE0] focus:outline-none"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                Mobile Number (Optional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#0A9BE0] focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                Description of Request / Incident *
              </label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide relevant transaction dates, campaign IDs, or details of the personal data to be corrected/reviewed."
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#0A9BE0] focus:outline-none"
              />
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0]/80 pt-1">
              <input
                type="checkbox"
                required
                id="grievance-consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-4 h-4 accent-[#B4F000] cursor-pointer shrink-0 mt-0.5"
              />
              <label htmlFor="grievance-consent" className="cursor-pointer leading-snug">
                I declare that the information provided is truthful and authorize ADRYD Compliance to inspect records to process this request.
              </label>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <span className="text-[11px] text-[#94A3B8] flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#0A9BE0]" />
                <span>Officer: {LEGAL_CONFIG.grievanceOfficer.title}</span>
              </span>
              <button
                type="submit"
                disabled={loading}
                className="py-2.5 px-5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-black font-black text-xs transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{loading ? 'Submitting...' : 'Submit Request'}</span>
              </button>
            </div>
          </form>
        )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
