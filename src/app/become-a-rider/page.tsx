'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  riderRegistrationSchema,
  type RiderRegistrationInput,
} from '@/lib/validations/rider';
import {
  Zap,
  CheckCircle2,
  AlertCircle,
  Bike,
  ShieldCheck,
  Send,
  ArrowRight,
  Clock,
  Sparkles,
  MapPin,
  FileCheck,
} from 'lucide-react';

const HYDERABAD_ZONES_LIST = [
  'HITEC City & Madhapur',
  'Gachibowli & Financial District',
  'Kukatpally & KPHB',
  'Jubilee Hills & Banjara Hills',
  'Begumpet & Secunderabad',
  'Ameerpet & SR Nagar',
  'Dilsukhnagar & LB Nagar',
  'Kondapur & Miyapur',
  'Other Hyderabad Zone',
];

export default function BecomeARiderPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<any>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RiderRegistrationInput>({
    resolver: zodResolver(riderRegistrationSchema),
    defaultValues: {
      city: 'Hyderabad',
      vehicleOwnership: 'Owned',
      preferredAvailability: 'Peak Commute Hours (Morning & Evening)',
    },
  });

  const onSubmit = async (data: RiderRegistrationInput) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/rider-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (response.ok && res.success) {
        setSubmitSuccess(res);
        reset();
      } else {
        setSubmitError(res.message || 'Submission failed. Please try again.');
      }
    } catch (e) {
      setSubmitError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-yellow/10 border border-electric-yellow/30 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 text-electric-yellow" />
              Join the Hyderabad EV Advertising Fleet
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02]">
              Ride Your EV.{' '}
              <span className="text-electric-yellow">Earn On Every Journey.</span>
            </h1>

            <p className="text-base sm:text-lg text-soft-ivory/80 max-w-xl leading-relaxed">
              If you own an electric two-wheeler in Hyderabad, explore opportunities to carry
              approved, premium brand advertising panels on your daily commutes and planned city
              routes.
            </p>

            {/* 3 Key Benefits Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-carbon-card border border-graphite-border">
                <Bike className="w-5 h-5 text-electric-yellow mb-2" />
                <div className="font-heading font-bold text-sm text-white">Daily Commute Routes</div>
                <div className="text-xs text-muted-grey mt-0.5">Monetise your normal transit</div>
              </div>

              <div className="p-4 rounded-xl bg-carbon-card border border-graphite-border">
                <ShieldCheck className="w-5 h-5 text-electric-yellow mb-2" />
                <div className="font-heading font-bold text-sm text-white">Zero Cost Install</div>
                <div className="text-xs text-muted-grey mt-0.5">Compliant removable panels</div>
              </div>

              <div className="p-4 rounded-xl bg-carbon-card border border-graphite-border">
                <FileCheck className="w-5 h-5 text-electric-yellow mb-2" />
                <div className="font-heading font-bold text-sm text-white">Verified Campaigns</div>
                <div className="text-xs text-muted-grey mt-0.5">Reputable brand promotions</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-graphite-border shadow-2xl">
              <Image
                src="/images/adryd-rider-partner.jpg"
                alt="ADRYD EV Partner Rider"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-carbon-black/85 backdrop-blur-md rounded-xl border border-white/10 text-xs">
                <span className="text-electric-yellow font-bold font-tech uppercase block">
                  Hyderabad Pilot Partner Pool
                </span>
                <span className="text-muted-grey text-[11px]">
                  Safety-first verification, vehicle inspections, and route scheduling.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          {submitSuccess ? (
            <div className="bg-carbon-card border border-emerald-500/40 rounded-2xl p-8 sm:p-12 text-center shadow-2xl animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-graphite border border-graphite-border text-xs font-tech text-electric-yellow uppercase tracking-widest mb-3">
                Application ID: {submitSuccess.applicationId}
              </div>
              <h2 className="font-heading font-black text-3xl text-white uppercase mb-4">
                Partner Interest Registered!
              </h2>
              <p className="text-sm text-muted-grey max-w-lg mx-auto leading-relaxed mb-6">
                Thank you for applying to join the ADRYD Electric Vehicle Partner network. Our
                operations coordinator will review your vehicle model, commute zone, and reach out
                for physical inspection and onboarding verification.
              </p>
              <button
                type="button"
                onClick={() => setSubmitSuccess(null)}
                className="px-6 py-3 rounded-xl bg-electric-yellow text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
              >
                Register Another Vehicle
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-carbon-card border border-graphite-border rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6"
            >
              <div className="border-b border-graphite-border pb-4">
                <h2 className="font-heading font-bold text-2xl text-white">
                  Rider Partner Registration
                </h2>
                <p className="text-xs text-muted-grey mt-1">
                  Fill in your vehicle and availability details to enter the Hyderabad pilot intake queue.
                </p>
              </div>

              {submitError && (
                <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Full Name *
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    placeholder="e.g. Vikram Reddy"
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Mobile Number (WhatsApp Enabled) *
                  </label>
                  <input
                    {...register('mobile')}
                    type="tel"
                    placeholder="e.g. 9849012345"
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  />
                  {errors.mobile && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.mobile.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="e.g. vikram@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Primary Service Corridor in Hyderabad *
                  </label>
                  <select
                    {...register('serviceArea')}
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  >
                    <option value="" disabled>
                      Select primary transit zone
                    </option>
                    {HYDERABAD_ZONES_LIST.map((zone) => (
                      <option key={zone} value={zone} className="bg-carbon-card">
                        {zone}
                      </option>
                    ))}
                  </select>
                  {errors.serviceArea && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.serviceArea.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Electric Scooter Model *
                  </label>
                  <input
                    {...register('vehicleModel')}
                    type="text"
                    placeholder="e.g. Ather 450X, Ola S1 Pro, TVS iQube"
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  />
                  {errors.vehicleModel && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.vehicleModel.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Vehicle Ownership Status *
                  </label>
                  <select
                    {...register('vehicleOwnership')}
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  >
                    <option value="Owned">Personally Owned</option>
                    <option value="Rented / Leased">Rented / Leased EV</option>
                    <option value="Family Vehicle">Family Owned</option>
                    <option value="Purchasing Soon">Planning to purchase soon</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                  Preferred Availability *
                </label>
                <select
                  {...register('preferredAvailability')}
                  className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                >
                  <option value="Peak Commute Hours (Morning & Evening)">
                    Peak Commute Hours (8:30 AM - 11:30 AM &amp; 5:30 PM - 8:30 PM)
                  </option>
                  <option value="Full Day (6-8 Hours)">Full Day Campaign Deployment (6-8 Hours)</option>
                  <option value="Weekends Only">Weekends &amp; Event Activations Only</option>
                  <option value="Flexible Schedule">Flexible Daily Delivery / Transit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                  Additional Notes / Past Experience (Optional)
                </label>
                <textarea
                  {...register('experienceNotes')}
                  rows={3}
                  placeholder="Tell us about your daily commute route, distance covered, or prior delivery experience..."
                  className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white placeholder-muted-grey/50"
                />
              </div>

              {/* Compliance & Safety Statement */}
              <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border text-xs text-muted-grey leading-relaxed flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Partner Eligibility:</strong> All participating riders
                  must hold a valid driving licence, active vehicle insurance, and comply with safety helmet
                  regulations. Registration represents an expression of interest and does not guarantee
                  fixed compensation.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover disabled:opacity-50 text-carbon-black font-heading font-black text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting Details...</span>
                ) : (
                  <>
                    <span>Submit Partner Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
