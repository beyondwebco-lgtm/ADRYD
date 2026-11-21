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
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Connect with{' '}
            <br />
            <span className="text-[#00A8C8]">ADRYD.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            Have questions about campaign scheduling, vehicle showcase fabrication, fleet partnership or our Hyderabad pilot? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#F6FAFC] border border-[#DCECF2] space-y-6">
              <h2 className="font-heading font-bold text-2xl text-[#172B3A]">
                Hyderabad Operations Hub
              </h2>

              <div className="space-y-5 text-sm text-[#637786]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00A8C8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#172B3A] block font-bold text-base mb-0.5">Location</strong>
                    <span>{SITE_CONFIG.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#7856FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#172B3A] block font-bold text-base mb-0.5">Email Us</strong>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#172B3A] hover:text-[#00A8C8] transition-colors">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#123C83] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#172B3A] block font-bold text-base mb-0.5">Phone Support</strong>
                    <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-[#172B3A] hover:text-[#00A8C8] transition-colors">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#58C9EF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#172B3A] block font-bold text-base mb-0.5">Operating Hours</strong>
                    <span>Monday to Saturday: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DCECF2] shadow-[0_12px_40px_rgba(0,168,200,0.04)]">
              {submitSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-[#172B3A]">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-[#637786] max-w-md mx-auto">
                    Thank you for reaching out. We have received your inquiry and will respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="px-6 py-2.5 rounded-full bg-white border border-[#DCECF2] text-xs font-bold text-[#172B3A] hover:bg-[#F6FAFC]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="font-heading font-black text-2xl text-[#172B3A] mb-2">
                    Send a Message
                  </h3>

                  {submitError && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        {...register('fullName')}
                        type="text"
                        placeholder="e.g. Priyanjali Roy"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                      {errors.fullName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="e.g. priya@brand.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Subject *
                      </label>
                      <input
                        {...register('subject')}
                        type="text"
                        placeholder="e.g. Hyderabad Campaign Feasibility"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                      {errors.subject && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Share your campaign timeline, products or questions..."
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A] placeholder-gray-400"
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] disabled:opacity-50 text-white font-bold text-sm shadow-md hover:scale-[1.01] flex items-center justify-center gap-2 transition-all cursor-pointer"
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
    </div>
  );
}
