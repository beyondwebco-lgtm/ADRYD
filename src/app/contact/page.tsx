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
  const [submitSuccess, setSubmitSuccess] = useState<any>(null);
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
    } catch (e) {
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
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-burgundy/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-electric-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With ADRYD
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
            Have questions about campaign packages, route availability in Hyderabad, or EV rider
            partnerships? Reach out to our operations team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border space-y-4">
              <h3 className="font-heading font-bold text-xl text-white">
                Hyderabad Operations Hub
              </h3>
              <div className="space-y-4 text-xs text-muted-grey">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-electric-yellow shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Main Office &amp; Fleet Depot</strong>
                    <span className="leading-relaxed">
                      {SITE_CONFIG.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-electric-yellow shrink-0" />
                  <div>
                    <strong className="text-white block text-sm">Email Inquiries</strong>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="hover:text-electric-yellow transition-colors"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-electric-yellow shrink-0" />
                  <div>
                    <strong className="text-white block text-sm">Direct Line</strong>
                    <span>{SITE_CONFIG.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-electric-yellow shrink-0" />
                  <div>
                    <strong className="text-white block text-sm">Working Hours</strong>
                    <span>Monday – Saturday: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-carbon-card border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-heading font-bold text-base">
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Desk</span>
              </div>
              <p className="text-xs text-muted-grey leading-relaxed">
                Need an immediate check on vehicle availability or custom fleet quotation for an
                upcoming event? Message our team directly.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-carbon-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            {submitSuccess ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-carbon-card border border-emerald-500/40 text-center shadow-2xl space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="text-xs font-tech text-electric-yellow uppercase">
                  Ticket #{submitSuccess.ticketId}
                </div>
                <h3 className="font-heading font-black text-2xl text-white">
                  Message Delivered
                </h3>
                <p className="text-xs sm:text-sm text-muted-grey max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A campaign coordinator has received your inquiry and
                  will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(null)}
                  className="px-6 py-2.5 rounded-xl bg-electric-yellow text-carbon-black font-heading font-bold text-xs uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 rounded-2xl bg-carbon-card border border-graphite-border shadow-2xl space-y-5"
              >
                <h3 className="font-heading font-bold text-xl text-white pb-3 border-b border-graphite-border">
                  Send a Direct Message
                </h3>

                {submitError && (
                  <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech uppercase text-muted-grey mb-1.5">
                      Your Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase text-muted-grey mb-1.5">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="e.g. priya@brand.com"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech uppercase text-muted-grey mb-1.5">
                      Contact Phone *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="e.g. 9849012345"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase text-muted-grey mb-1.5">
                      Subject *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      placeholder="e.g. Campaign Enquiry / Fleet Query"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase text-muted-grey mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us what you would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover disabled:opacity-50 text-carbon-black font-heading font-bold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
