'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactInput } from '@/lib/validations/contact';
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{ ticketId?: string; submissionId?: string; message?: string } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setSubmitSuccess(result);
        reset();
      } else {
        setSubmitError(result.message || 'Failed to submit form.');
      }
    } catch {
      setSubmitError('Network error. Please try reaching us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${num}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessages.general
  )}`;

  return (
    <div className="min-h-screen bg-[#000000] text-[#B8B8B8] pt-32 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#03F2FF]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101010] border border-[#03F2FF]/30 text-[#03F2FF] text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#03F2FF]" />
            DIRECT COMMUNICATIONS DESK
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-[#FFFFFF] uppercase leading-[0.98] mb-6">
            CONNECT WITH{' '}
            <span className="text-[#E7FF39]">ADRYD.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B8B8B8] leading-relaxed font-normal">
            Have questions about campaign scheduling, vehicle showcase fabrication, fleet partnership,
            or the Hyderabad pilot? Our team is available via direct enquiry or instant WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#101010] border border-[#222222] space-y-6 shadow-xl">
              <h2 className="font-heading font-bold text-xl text-[#FFFFFF] uppercase">
                Hyderabad Operations Hub
              </h2>

              <div className="space-y-4 text-xs text-[#888888]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#03F2FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFFFFF] block font-heading text-sm mb-0.5">Location</strong>
                    <span className="text-[#B8B8B8]">{SITE_CONFIG.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#03F2FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFFFFF] block font-heading text-sm mb-0.5">Email</strong>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-[#B8B8B8] hover:text-[#03F2FF] transition-colors"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#03F2FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFFFFF] block font-heading text-sm mb-0.5">Phone</strong>
                    <span className="text-[#B8B8B8]">{SITE_CONFIG.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#03F2FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFFFFF] block font-heading text-sm mb-0.5">Hours</strong>
                    <span className="text-[#B8B8B8]">Monday to Saturday • 9:30 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="pt-4 border-t border-[#222222]">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#000000] hover:bg-[#03F2FF]/10 border border-[#03F2FF]/40 hover:border-[#03F2FF] text-[#FFFFFF] hover:text-[#03F2FF] text-xs font-heading font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_15px_rgba(3,242,255,0.25)]"
                >
                  <MessageCircle className="w-4 h-4 text-[#03F2FF]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#101010] border border-[#222222] text-xs text-[#888888] space-y-2">
              <strong className="text-[#FFFFFF] block">Planning a Campaign?</strong>
              <p>
                For custom routing, fleet estimates, and commercial pricing, please use our dedicated
                campaign planner.
              </p>
              <div className="pt-2">
                <a
                  href="/book-campaign"
                  className="text-xs font-semibold text-[#03F2FF] hover:text-[#E7FF39] transition-colors inline-flex items-center gap-1"
                >
                  <span>Go to Campaign Planner</span>
                  <span className="text-xs">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#101010] border border-[#222222] shadow-2xl">
              {submitSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-[#FFFFFF] uppercase">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#888888] max-w-md mx-auto">
                    Thank you. Reference ID: <strong className="text-[#03F2FF]">{submitSuccess.ticketId || submitSuccess.submissionId}</strong>.
                    Our desk will respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#000000] text-xs font-heading font-bold text-[#FFFFFF] hover:text-[#03F2FF] border border-[#222222] hover:border-[#03F2FF]/40 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="border-b border-[#222222] pb-4 mb-2">
                    <h3 className="font-heading font-bold text-xl text-[#FFFFFF] uppercase">
                      Send Us an Enquiry
                    </h3>
                    <p className="text-xs text-[#888888] mt-0.5">
                      We respond to all verified business inquiries within 24 hours.
                    </p>
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#888888] mb-1">
                        Full Name *
                      </label>
                      <input
                        {...register('fullName')}
                        type="text"
                        placeholder="e.g. Ananya Rao"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#222222] focus:border-[#E7FF39] focus:outline-none text-xs text-[#FFFFFF]"
                      />
                      {errors.fullName && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.fullName.message}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#888888] mb-1">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="e.g. ananya@brand.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#222222] focus:border-[#E7FF39] focus:outline-none text-xs text-[#FFFFFF]"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.email.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#888888] mb-1">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#222222] focus:border-[#E7FF39] focus:outline-none text-xs text-[#FFFFFF]"
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.phone.message}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#888888] mb-1">
                        Subject *
                      </label>
                      <input
                        {...register('subject')}
                        type="text"
                        placeholder="e.g. Showcase box inquiry"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#222222] focus:border-[#E7FF39] focus:outline-none text-xs text-[#FFFFFF]"
                      />
                      {errors.subject && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.subject.message}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase text-[#888888] mb-1">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us about your brand, campaign goals, or partnership query..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#222222] focus:border-[#E7FF39] focus:outline-none text-xs text-[#FFFFFF] placeholder-[#888888]/50"
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400 mt-1 block">{errors.message.message}</span>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] disabled:opacity-50 text-[#000000] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
