'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface BrandActivationCTAProps {
  prefilledItem?: string;
}

export default function BrandActivationCTA({ prefilledItem = '' }: BrandActivationCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    category: 'Fashion & Apparel',
    campaignType: prefilledItem || '3-Day Fashion Brand Growth',
    targetCity: 'Hyderabad',
    budgetRange: '₹30,000 – ₹60,000',
    notes: '',
    agreed: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.businessName) {
      setErrorMessage('Please fill in your name, business name, and contact phone number.');
      setStatus('error');
      return;
    }

    if (!formData.agreed) {
      setErrorMessage('Please accept the privacy policy and commercial terms to proceed.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'brand-activation',
          name: formData.name,
          businessName: formData.businessName,
          phone: formData.phone,
          email: formData.email,
          category: formData.category,
          campaignType: formData.campaignType,
          targetCity: formData.targetCity,
          budgetRange: formData.budgetRange,
          notes: formData.notes,
          source: 'brand-activation-page',
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit enquiry. Please try again.');
      }

      setStatus('success');
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please check your connection.');
      setStatus('error');
    }
  };

  return (
    <section id="enquire" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Your Brand</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            MOVE YOUR BRAND. MULTIPLY YOUR REACH. GROW YOUR BUSINESS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Take your products directly to thousands of high-intent urban shoppers. Fill out the commercial enquiry form below to receive a custom activation proposal within 24 hours.
          </p>
        </div>

        {/* Enquiry Form Container */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/40 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#B4F000]/20 text-[#B4F000] border-2 border-[#B4F000]/40 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase">Enquiry Successfully Submitted!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in ADRYD Brand Activation. Our campaign strategy team will review your business requirements and contact you via phone or email within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Brand or boutique name"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Product Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white outline-none"
                  >
                    <option value="Fashion & Apparel">Fashion &amp; Apparel</option>
                    <option value="Footwear & Bags">Footwear &amp; Bags</option>
                    <option value="Jewelry & Accessories">Jewelry &amp; Accessories</option>
                    <option value="Cosmetics & Wellness">Cosmetics &amp; Wellness</option>
                    <option value="Technology & Gadgets">Technology &amp; Gadgets</option>
                    <option value="Food & Artisanal FMCG">Food &amp; Artisanal FMCG</option>
                    <option value="Travel & Tourism">Travel &amp; Tourism</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Preferred Campaign
                  </label>
                  <select
                    name="campaignType"
                    value={formData.campaignType}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white outline-none"
                  >
                    <option value="1-Day Instant Fashion Promotion">1-Day Instant Promotion</option>
                    <option value="3-Day Fashion Brand Growth">3-Day Brand Growth</option>
                    <option value="7-Day Fashion Market Expansion">7-Day Market Expansion</option>
                    <option value="Pan-India Multi-City Blitz">Pan-India Multi-City Blitz</option>
                    <option value="Fashion × Tourism Collaboration">Tourism Collaboration</option>
                    <option value="Custom Bespoke Activation">Custom Bespoke Activation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Target City
                  </label>
                  <select
                    name="targetCity"
                    value={formData.targetCity}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white outline-none"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Jaipur">Jaipur</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Specific Requirements or Target Corridors
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your brand collection, target launch date, or preferred retail areas..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded accent-[#B4F000] cursor-pointer"
                />
                <label htmlFor="agreed" className="text-xs text-slate-400 cursor-pointer leading-relaxed">
                  I agree to receive campaign planning communications from ADRYD and acknowledge the commercial terms and privacy policy.
                </label>
              </div>

              {status === 'error' && errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-full bg-[#B4F000] hover:bg-[#c5fc1b] text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(180,240,0,0.4)] transition-all disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Brand Activation Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
