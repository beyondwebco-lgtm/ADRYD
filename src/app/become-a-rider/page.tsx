'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  Sparkles,
  Truck,
  QrCode,
  Layers,
  Building2,
  UserCheck,
  ArrowDown,
  MessageCircle,
  Clock,
  Check,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const HYDERABAD_ZONES_LIST = [
  'HITEC City & Madhapur',
  'Gachibowli & Financial District',
  'Kukatpally & KPHB',
  'Kompally & Medchal Highway',
  'Jubilee Hills & Banjara Hills',
  'Begumpet & Secunderabad',
  'Ameerpet & SR Nagar',
  'Kondapur & Miyapur',
  'Other Hyderabad Zone',
];

type PartnerOptionType = 'own_ev_rider' | 'without_ev_rider' | 'fleet_partner';

export default function BecomeARiderPage() {
  const [partnerType, setPartnerType] = useState<PartnerOptionType>('own_ev_rider');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    applicationId?: string;
    delivered?: boolean;
    partnerType?: string;
    message?: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RiderRegistrationInput>({
    resolver: zodResolver(riderRegistrationSchema),
    defaultValues: {
      partnerType: 'own_ev_rider',
      city: 'Hyderabad',
      drivingLicence: 'Valid 2-Wheeler Driving Licence',
      vehicleOwnership: 'Self Owned',
      preferredAvailability: 'Peak Commute Hours (Morning & Evening)',
      serviceArea: 'HITEC City & Madhapur',
      willingnessPartnerEV: 'Yes — Interested in Partner-Provided EV',
      honeypot: '',
    },
  });

  const handleSelectPartnerType = (type: PartnerOptionType) => {
    setPartnerType(type);
    setValue('partnerType', type);
    setSubmitError(null);
  };

  const onSubmitForm = async (data: RiderRegistrationInput) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      data.partnerType = partnerType;

      const response = await fetch('/api/rider-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        setSubmitSuccess(res);
        reset({
          partnerType: partnerType,
          city: 'Hyderabad',
          drivingLicence: 'Valid 2-Wheeler Driving Licence',
          vehicleOwnership: 'Self Owned',
          preferredAvailability: 'Peak Commute Hours (Morning & Evening)',
          serviceArea: 'HITEC City & Madhapur',
          willingnessPartnerEV: 'Yes — Interested in Partner-Provided EV',
          honeypot: '',
        });
      } else {
        setSubmitError(
          res.message || 'Submission could not be completed. Please verify your details.'
        );
      }
    } catch {
      setSubmitError(
        'Network communication error. Please try again or reach out to our team directly via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppFollowUpUrl = () => {
    const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
    const ref = submitSuccess?.applicationId || 'New Partner Application';
    let label = 'Own EV Rider Interest';
    if (submitSuccess?.partnerType === 'without_ev_rider') {
      label = 'Rider Candidate Interest (Without EV)';
    } else if (submitSuccess?.partnerType === 'fleet_partner') {
      label = 'Commercial Fleet Partnership';
    }

    const msg = `Hello ADRYD Team, I have just registered my interest as ${label} with Reference ID: ${ref}. Looking forward to discussing verified opportunities in Hyderabad.`;
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-transparent text-white pt-28 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#041220]/75 backdrop-blur-md text-[#B4F000] text-xs font-bold uppercase tracking-wider border border-[#B4F000]/30 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#B4F000]" />
              <span>Partner Network • Hyderabad</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
              Ride with ADRYD.{' '}
              <br />
              <span className="text-[#B4F000] text-glow-lime">Grow with us.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#E2E8F0] max-w-xl leading-relaxed font-normal">
              Earn with your electric scooter or join our mobility network as a commercial fleet partner. Flexible opportunities across Hyderabad&apos;s prime corridors.
            </p>

            {/* Quick Action Button */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#partner-registration"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] text-xs font-black shadow-md hover:scale-[1.02] transition-all"
              >
                <span>Register Interest Below</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#000000]" />
              </a>
              <span className="text-xs text-[#E2E8F0]/70">Quick 2-minute form</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl border border-[#B4F000]/25">
            <Image
              src="/images/adryd-rider-partner.jpg"
              alt="ADRYD EV Partner Riders and Branded Mobility Fleet"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* THREE-OPTION PARTNER REGISTRATION */}
        <div id="partner-registration" className="scroll-mt-28 mb-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
              Select Your Partnership
            </h2>
            <p className="text-sm text-[#E2E8F0]/80">
              Choose the option that describes your profile to begin your registration.
            </p>
          </div>

          {/* 3 Selectable Partnership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* CARD 1: Own an EV */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('own_ev_rider')}
              className={`p-6 sm:p-7 rounded-3xl text-left border backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between relative cursor-pointer shadow-xl ${
                partnerType === 'own_ev_rider'
                  ? 'bg-[#051C33]/75 border-[#B4F000] ring-2 ring-[#B4F000]/30 shadow-md'
                  : 'bg-[#041220]/75 border-white/10 hover:border-[#B4F000]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'own_ev_rider'
                        ? 'bg-[#B4F000] text-[#000000]'
                        : 'bg-white/10 text-[#E2E8F0]'
                    }`}
                  >
                    <Bike className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      partnerType === 'own_ev_rider'
                        ? 'bg-[#B4F000] text-[#000000] font-black'
                        : 'bg-white/10 text-[#E2E8F0]'
                    }`}
                  >
                    {partnerType === 'own_ev_rider' ? 'Selected' : 'Option 1'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white mb-2">
                  I Have My Own Electric Bike
                </h3>

                <p className="text-xs text-[#E2E8F0]/80 leading-relaxed mb-6 font-normal">
                  Own an electric scooter? Register your interest in participating in ADRYD&apos;s mobile advertising and local showcase campaigns.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                <span className={partnerType === 'own_ev_rider' ? 'text-[#B4F000]' : 'text-[#E2E8F0]/70'}>
                  {partnerType === 'own_ev_rider' ? 'Active Form' : 'Select Option'}
                </span>
                {partnerType === 'own_ev_rider' && <Check className="w-4 h-4 text-[#B4F000]" />}
              </div>
            </button>

            {/* CARD 2: Need an EV */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('without_ev_rider')}
              className={`p-6 sm:p-7 rounded-3xl text-left border backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between relative cursor-pointer shadow-xl ${
                partnerType === 'without_ev_rider'
                  ? 'bg-[#051C33]/75 border-[#0A9BE0] ring-2 ring-[#0A9BE0]/30 shadow-md'
                  : 'bg-[#041220]/75 border-white/10 hover:border-[#0A9BE0]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'without_ev_rider'
                        ? 'bg-[#0A9BE0] text-white'
                        : 'bg-white/10 text-[#E2E8F0]'
                    }`}
                  >
                    <UserCheck className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      partnerType === 'without_ev_rider'
                        ? 'bg-[#0A9BE0] text-white font-black'
                        : 'bg-white/10 text-[#E2E8F0]'
                    }`}
                  >
                    {partnerType === 'without_ev_rider' ? 'Selected' : 'Option 2'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white mb-2">
                  I Don&apos;t Have a Bike
                </h3>

                <p className="text-xs text-[#E2E8F0]/80 leading-relaxed mb-6 font-normal">
                  Interested in joining ADRYD but don&apos;t own an EV? Register as a candidate for partner-arranged vehicle opportunities.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                <span className={partnerType === 'without_ev_rider' ? 'text-[#0A9BE0]' : 'text-[#E2E8F0]/70'}>
                  {partnerType === 'without_ev_rider' ? 'Active Form' : 'Select Option'}
                </span>
                {partnerType === 'without_ev_rider' && <Check className="w-4 h-4 text-[#0A9BE0]" />}
              </div>
            </button>

            {/* CARD 3: Fleet Partner */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('fleet_partner')}
              className={`p-6 sm:p-7 rounded-3xl text-left border backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between relative cursor-pointer shadow-xl ${
                partnerType === 'fleet_partner'
                  ? 'bg-[#051C33]/75 border-[#0A9BE0] ring-2 ring-[#0A9BE0]/30 shadow-md'
                  : 'bg-[#041220]/75 border-white/10 hover:border-[#0A9BE0]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'fleet_partner'
                        ? 'bg-[#0A9BE0] text-[#000000]'
                        : 'bg-white/10 text-[#E2E8F0]'
                    }`}
                  >
                    <Layers className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      partnerType === 'fleet_partner'
                        ? 'bg-[#0A9BE0] text-[#000000] font-black'
                        : 'bg-white/10 text-[#E2E8F0]'
                    }`}
                  >
                    {partnerType === 'fleet_partner' ? 'Selected' : 'Option 3'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white mb-2">
                  Commercial Fleet Partner
                </h3>

                <p className="text-xs text-[#E2E8F0]/80 leading-relaxed mb-6 font-normal">
                  For commercial fleet operators, EV rental aggregators and fleet managers seeking structured batch campaign deployments.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                <span className={partnerType === 'fleet_partner' ? 'text-[#0A9BE0]' : 'text-[#E2E8F0]/70'}>
                  {partnerType === 'fleet_partner' ? 'Active Form' : 'Select Option'}
                </span>
                {partnerType === 'fleet_partner' && <Check className="w-4 h-4 text-[#0A9BE0]" />}
              </div>
            </button>
          </div>

          {/* DYNAMIC REGISTRATION FORM */}
          <div className="max-w-3xl mx-auto bg-[#000000]/85 backdrop-blur-2xl border border-[#B4F000]/25 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitSuccess ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#051C33]/60 border border-[#B4F000]/50 flex items-center justify-center text-[#B4F000] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#B4F000] uppercase tracking-wider">
                    Registration Received
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    {partnerType === 'fleet_partner'
                      ? 'Fleet Partnership Enquiry Recorded'
                      : 'Rider Partner Interest Recorded'}
                  </h3>
                </div>

                <p className="text-sm text-[#E2E8F0]/80 max-w-lg mx-auto leading-relaxed font-normal">
                  Thank you for registering. Your reference ID is{' '}
                  <strong className="text-[#B4F000] font-mono text-sm">
                    {submitSuccess.applicationId}
                  </strong>
                  . Our operations team reviews all submissions according to corridor routes and verification requirements in Hyderabad.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppFollowUpUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] text-xs font-black flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#000000]" />
                    <span>Connect On WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 text-xs font-bold text-white border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
                <input
                  type="text"
                  {...register('honeypot')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submitError && (
                  <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Scope Header */}
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-heading font-black text-xl text-white">
                    {partnerType === 'own_ev_rider' && 'Register With Your Electric Scooter'}
                    {partnerType === 'without_ev_rider' && 'Apply as a Rider Candidate'}
                    {partnerType === 'fleet_partner' && 'Commercial EV Fleet Partnership'}
                  </h3>
                  <p className="text-xs text-[#E2E8F0]/70 mt-1">
                    {partnerType === 'own_ev_rider' && 'Fill in your vehicle model and preferred operating corridors in Hyderabad.'}
                    {partnerType === 'without_ev_rider' && 'Register for partner-arranged EV opportunities, subject to eligibility.'}
                    {partnerType === 'fleet_partner' && 'For fleet operators with electric two-wheelers seeking campaign integration.'}
                  </p>
                </div>

                {/* Option 2 Fair Disclaimer */}
                {partnerType === 'without_ev_rider' && (
                  <div className="p-4 rounded-2xl bg-[#041220]/75 border border-[#0A9BE0]/30 flex items-start gap-3 text-xs text-[#E2E8F0]/85">
                    <ShieldCheck className="w-4 h-4 text-[#0A9BE0] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">Candidate Note:</strong> This expresses your interest in riding partner-provided electric scooters when openings arise. ADRYD does not promise a free vehicle, salary, fixed income or guaranteed employment.
                    </p>
                  </div>
                )}

                {/* Field Group 1: Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {partnerType === 'fleet_partner' && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Fleet Company Name *
                      </label>
                      <input
                        {...register('companyName')}
                        type="text"
                        placeholder="e.g. GreenWheels Logistics"
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                      />
                      {errors.companyName && (
                        <span className="text-xs text-red-400 mt-1 block">
                          {errors.companyName.message}
                        </span>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      {partnerType === 'fleet_partner' ? 'Contact Person *' : 'Full Name *'}
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Suresh Kumar"
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      {...register('mobile')}
                      type="tel"
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                    />
                    {errors.mobile && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="e.g. yourname@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {partnerType !== 'fleet_partner' ? (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Age * (Must be 18+)
                      </label>
                      <input
                        {...register('age')}
                        type="number"
                        min="18"
                        max="70"
                        placeholder="e.g. 24"
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                      />
                      {errors.age && (
                        <span className="text-xs text-red-400 mt-1 block">
                          {errors.age.message}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        City / Location *
                      </label>
                      <input
                        {...register('city')}
                        type="text"
                        defaultValue="Hyderabad"
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                      />
                    </div>
                  )}
                </div>

                {/* Option 1: Own EV Details */}
                {partnerType === 'own_ev_rider' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                          Electric Scooter Brand &amp; Model *
                        </label>
                        <input
                          {...register('vehicleModel')}
                          type="text"
                          placeholder="e.g. Ather 450X, Ola S1 Pro, TVS iQube"
                          className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                        />
                        {errors.vehicleModel && (
                          <span className="text-xs text-red-400 mt-1 block">
                            {errors.vehicleModel.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                          Vehicle Registration Number
                        </label>
                        <input
                          {...register('vehicleRegNumber')}
                          type="text"
                          placeholder="e.g. TS 09 EA 1234"
                          className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50 uppercase"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                          Ownership Status
                        </label>
                        <select
                          {...register('vehicleOwnership')}
                          className="w-full px-4 py-3 rounded-2xl bg-[#041220] border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white"
                        >
                          <option value="Self Owned">Self Owned</option>
                          <option value="Family Owned">Family Owned</option>
                          <option value="Financed / EMI">Financed / EMI Active</option>
                          <option value="Rented / Leased">Rented / Leased</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                          Driving Licence *
                        </label>
                        <select
                          {...register('drivingLicence')}
                          className="w-full px-4 py-3 rounded-2xl bg-[#041220] border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white"
                        >
                          <option value="Valid 2-Wheeler Driving Licence">Valid 2-Wheeler Driving Licence</option>
                          <option value="Learning Licence (LLR)">Learning Licence (LLR)</option>
                          <option value="Applied / In Process">Applied / In Process</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Option 2: Without EV Details */}
                {partnerType === 'without_ev_rider' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Driving Licence *
                      </label>
                      <select
                        {...register('drivingLicence')}
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220] border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white"
                      >
                        <option value="Valid 2-Wheeler Driving Licence">Valid 2-Wheeler Driving Licence</option>
                        <option value="Learning Licence (LLR)">Learning Licence (LLR)</option>
                        <option value="Applied / In Process">Applied / In Process</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Riding Experience
                      </label>
                      <select
                        {...register('ridingExperience')}
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220] border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white"
                      >
                        <option value="Food / Grocery Delivery (Zomato/Swiggy/Blinkit)">Delivery Experience (Swiggy/Zomato/etc.)</option>
                        <option value="Courier / Logistics Delivery">Courier / Logistics</option>
                        <option value="Daily Personal Two-Wheeler Commuter">Daily Personal Commuter</option>
                        <option value="New Rider / Limited Experience">New Rider</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Option 3: Fleet Details */}
                {partnerType === 'fleet_partner' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Total Electric Scooters in Fleet
                      </label>
                      <input
                        {...register('fleetCount')}
                        type="text"
                        placeholder="e.g. 5–15 EVs, 20+ Vehicles"
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Operating Hubs in Hyderabad
                      </label>
                      <input
                        {...register('fleetHubs')}
                        type="text"
                        placeholder="e.g. Madhapur, Kukatpally, Secunderabad"
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                      />
                    </div>
                  </div>
                )}

                {/* Operating Areas & Schedule */}
                {partnerType !== 'fleet_partner' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Preferred Corridor
                      </label>
                      <select
                        {...register('serviceArea')}
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220] border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white"
                      >
                        {HYDERABAD_ZONES_LIST.map((zone) => (
                          <option key={zone} value={zone}>
                            {zone}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Preferred Availability
                      </label>
                      <select
                        {...register('preferredAvailability')}
                        className="w-full px-4 py-3 rounded-2xl bg-[#041220] border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white"
                      >
                        <option value="Peak Commute Hours (Morning & Evening)">Peak Commute Hours (Morning &amp; Evening)</option>
                        <option value="Full Day (4-6 Hours)">Full Day (4–6 Hours)</option>
                        <option value="Weekends Only">Weekends Only</option>
                        <option value="Flexible Schedule">Flexible Schedule</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    {...register('additionalNotes')}
                    rows={3}
                    placeholder="Any additional information regarding your availability, vehicle details or schedule..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#041220]/75 border border-white/15 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder-[#94A3B8]/50"
                  />
                </div>

                {/* Legal Acceptance & Operational Notice */}
                <div className="space-y-3 pt-3 p-4 rounded-2xl bg-[#041220]/90 border border-white/10 text-xs text-[#E2E8F0]/85">
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Notice: Submitting an application does not guarantee approval, employment, campaign allocation or vehicle availability.
                  </p>

                  <div className="flex items-start gap-2.5">
                    <input
                      {...register('termsAccepted')}
                      type="checkbox"
                      id="rider-termsAccepted"
                      className="w-4 h-4 accent-[#B4F000] cursor-pointer shrink-0 mt-0.5"
                    />
                    <label htmlFor="rider-termsAccepted" className="cursor-pointer leading-snug">
                      I confirm that I am at least 18 years old and agree to the{' '}
                      <Link href="/terms" target="_blank" className="text-[#B4F000] hover:underline font-semibold">
                        ADRYD Terms and Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/rider-terms" target="_blank" className="text-[#B4F000] hover:underline font-semibold">
                        Riderpreneur Terms
                      </Link>
                      . I acknowledge the{' '}
                      <Link href="/privacy" target="_blank" className="text-[#0A9BE0] hover:underline font-semibold">
                        Privacy Policy
                      </Link>
                      . *
                    </label>
                  </div>
                  {errors.termsAccepted && (
                    <span className="text-xs text-red-400 block ml-6">
                      {errors.termsAccepted.message}
                    </span>
                  )}

                  <div className="flex items-start gap-2.5">
                    <input
                      {...register('marketingConsent')}
                      type="checkbox"
                      id="rider-marketingConsent"
                      className="w-4 h-4 accent-[#B4F000] cursor-pointer shrink-0 mt-0.5"
                    />
                    <label htmlFor="rider-marketingConsent" className="cursor-pointer text-[#94A3B8] text-[11px] leading-snug">
                      I would like to receive promotional updates, fleet partner notices and programme announcements from ADRYD. (Optional)
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] disabled:opacity-50 text-[#000000] font-black text-sm shadow-[0_4px_20px_rgba(180,240,0,0.3)] flex items-center justify-center gap-2 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Recording Interest...</span>
                    ) : (
                      <>
                        <span>
                          {partnerType === 'own_ev_rider' && 'Register With My EV'}
                          {partnerType === 'without_ev_rider' && 'Apply as a Rider'}
                          {partnerType === 'fleet_partner' && 'Submit Fleet Partnership Enquiry'}
                        </span>
                        <Send className="w-4 h-4 text-[#000000]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Legal Notice */}
          <div className="max-w-3xl mx-auto mt-6 text-center text-[11px] text-[#E2E8F0]/70 leading-relaxed">
            Registration is an expression of interest only and does not promise employment, guaranteed income or vehicle allocation. Subject to operational requirements and fleet availability.
          </div>

        </div>

      </div>
    </div>
  );
}
