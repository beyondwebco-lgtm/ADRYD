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
  Sparkles,
  Truck,
  QrCode,
  Layers,
  Building2,
  UserCheck,
  ArrowDown,
  MessageCircle,
  Clock,
  MapPin,
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
      // Ensure the selected partner type is synced
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
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E7FF39]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 text-[#E7FF39]" />
              PARTNER NETWORK • HYDERABAD PILOT
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02]">
              JOIN THE MOVEMENT.{' '}
              <br />
              <span className="text-[#E7FF39]">BECOME AN ADRYD PARTNER.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A5A8B3] max-w-xl leading-relaxed">
              ADRYD offers individual electric two-wheeler riders and commercial fleet owners
              opportunities to participate in structured promotional campaigns, product showcase stops,
              and local delivery concepts across Hyderabad.
            </p>

            {/* 4 Operating Opportunities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#17191F] border border-[#353740] flex items-start gap-3">
                <Bike className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-xs text-white">Mobile Brand Promotion</div>
                  <div className="text-[11px] text-[#A5A8B3]">Ride planned corridors displaying brand livery</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#17191F] border border-[#353740] flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-xs text-white">Showcase Assistance</div>
                  <div className="text-[11px] text-[#A5A8B3]">Assist consumers at stationary showcase stops</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#17191F] border border-[#353740] flex items-start gap-3">
                <QrCode className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-xs text-white">QR Customer Guidance</div>
                  <div className="text-[11px] text-[#A5A8B3]">Help shoppers scan on-scooter digital catalogues</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#17191F] border border-[#353740] flex items-start gap-3">
                <Truck className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-xs text-white">Local Delivery Concepts</div>
                  <div className="text-[11px] text-[#A5A8B3]">Hyperlocal order drop-offs &amp; replenishment</div>
                </div>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#partner-registration"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.3)] cursor-pointer"
              >
                <span>Register Your Interest Below</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <div className="inline-flex items-center gap-2 text-xs text-[#A5A8B3]">
                <Clock className="w-3.5 h-3.5 text-[#E7FF39]" />
                <span>Quick 2-minute registration</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#353740] shadow-2xl">
              <Image
                src="/images/adryd-rider-partner.jpg"
                alt="ADRYD EV Partner Rider"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12]/95 via-[#0C0D12]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0C0D12]/90 backdrop-blur-md border border-[#353740]">
                <div className="text-[10px] font-tech font-bold text-[#E7FF39] uppercase tracking-widest">
                  Verified Partner Network
                </div>
                <div className="font-heading font-bold text-base text-white mt-0.5">
                  Promotional Mobility Across Hyderabad Corridors
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: THREE-OPTION PARTNER REGISTRATION */}
        <div id="partner-registration" className="scroll-mt-28 mb-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
              ADRYD PARTNER NETWORK
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase leading-tight mb-4">
              YOUR JOURNEY. YOUR OPPORTUNITY.{' '}
              <span className="text-[#E7FF39]">JOIN ADRYD.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A5A8B3] leading-relaxed">
              Whether you own an electric scooter, want to explore riding opportunities without owning a
              vehicle, or manage an EV fleet, ADRYD invites you to register your interest in its growing
              mobility partner network.
            </p>
          </div>

          {/* 3 Selectable Partnership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* CARD 1: Own an EV */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('own_ev_rider')}
              className={`p-6 sm:p-7 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between relative cursor-pointer group ${
                partnerType === 'own_ev_rider'
                  ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_30px_rgba(231,255,57,0.15)] ring-1 ring-[#E7FF39]/30'
                  : 'bg-[#17191F]/70 border-[#353740] hover:border-[#E7FF39]/50 hover:bg-[#17191F]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'own_ev_rider'
                        ? 'bg-[#E7FF39] text-[#0C0D12]'
                        : 'bg-[#24212C] text-[#E7FF39] group-hover:bg-[#E7FF39] group-hover:text-[#0C0D12]'
                    }`}
                  >
                    <Bike className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-tech font-bold uppercase px-2.5 py-1 rounded-full border transition-all ${
                      partnerType === 'own_ev_rider'
                        ? 'bg-[#E7FF39]/20 text-[#E7FF39] border-[#E7FF39]/40'
                        : 'bg-[#24212C] text-[#A5A8B3] border-[#353740]'
                    }`}
                  >
                    {partnerType === 'own_ev_rider' ? 'Active Selection' : 'Option 1'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white uppercase mb-2">
                  I Have My Own Electric Bike
                </h3>

                <p className="text-xs text-[#A5A8B3] leading-relaxed mb-6">
                  Own an electric scooter? Register your interest in participating in ADRYD&apos;s mobile
                  advertising, product showcase and local promotional campaigns.
                </p>
              </div>

              <div className="pt-4 border-t border-[#353740] flex items-center justify-between text-xs font-heading font-bold">
                <span
                  className={
                    partnerType === 'own_ev_rider' ? 'text-[#E7FF39]' : 'text-[#A5A8B3]'
                  }
                >
                  {partnerType === 'own_ev_rider' ? 'Form Selected' : 'Choose Own EV'}
                </span>
                {partnerType === 'own_ev_rider' && (
                  <Check className="w-4 h-4 text-[#E7FF39]" />
                )}
              </div>
            </button>

            {/* CARD 2: Need an EV */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('without_ev_rider')}
              className={`p-6 sm:p-7 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between relative cursor-pointer group ${
                partnerType === 'without_ev_rider'
                  ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_30px_rgba(231,255,57,0.15)] ring-1 ring-[#E7FF39]/30'
                  : 'bg-[#17191F]/70 border-[#353740] hover:border-[#E7FF39]/50 hover:bg-[#17191F]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'without_ev_rider'
                        ? 'bg-[#E7FF39] text-[#0C0D12]'
                        : 'bg-[#24212C] text-[#E7FF39] group-hover:bg-[#E7FF39] group-hover:text-[#0C0D12]'
                    }`}
                  >
                    <UserCheck className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-tech font-bold uppercase px-2.5 py-1 rounded-full border transition-all ${
                      partnerType === 'without_ev_rider'
                        ? 'bg-[#E7FF39]/20 text-[#E7FF39] border-[#E7FF39]/40'
                        : 'bg-[#24212C] text-[#A5A8B3] border-[#353740]'
                    }`}
                  >
                    {partnerType === 'without_ev_rider' ? 'Active Selection' : 'Option 2'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white uppercase mb-2">
                  I Don&apos;t Have a Bike
                </h3>

                <p className="text-xs text-[#A5A8B3] leading-relaxed mb-6">
                  Interested in joining ADRYD but don&apos;t own an electric scooter? Register as a rider
                  candidate for potential opportunities involving partner-provided vehicles.
                </p>
              </div>

              <div className="pt-4 border-t border-[#353740] flex items-center justify-between text-xs font-heading font-bold">
                <span
                  className={
                    partnerType === 'without_ev_rider' ? 'text-[#E7FF39]' : 'text-[#A5A8B3]'
                  }
                >
                  {partnerType === 'without_ev_rider' ? 'Form Selected' : 'Choose Candidate'}
                </span>
                {partnerType === 'without_ev_rider' && (
                  <Check className="w-4 h-4 text-[#E7FF39]" />
                )}
              </div>
            </button>

            {/* CARD 3: Fleet Partner */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('fleet_partner')}
              className={`p-6 sm:p-7 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between relative cursor-pointer group ${
                partnerType === 'fleet_partner'
                  ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_30px_rgba(231,255,57,0.15)] ring-1 ring-[#E7FF39]/30'
                  : 'bg-[#17191F]/70 border-[#353740] hover:border-[#E7FF39]/50 hover:bg-[#17191F]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'fleet_partner'
                        ? 'bg-[#E7FF39] text-[#0C0D12]'
                        : 'bg-[#24212C] text-[#E7FF39] group-hover:bg-[#E7FF39] group-hover:text-[#0C0D12]'
                    }`}
                  >
                    <Layers className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-tech font-bold uppercase px-2.5 py-1 rounded-full border transition-all ${
                      partnerType === 'fleet_partner'
                        ? 'bg-[#E7FF39]/20 text-[#E7FF39] border-[#E7FF39]/40'
                        : 'bg-[#24212C] text-[#A5A8B3] border-[#353740]'
                    }`}
                  >
                    {partnerType === 'fleet_partner' ? 'Active Selection' : 'Option 3'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-white uppercase mb-2">
                  Commercial Fleet Partner
                </h3>

                <p className="text-xs text-[#A5A8B3] leading-relaxed mb-6">
                  For commercial fleet operators, EV rental aggregators and two-wheeler managers seeking
                  structured multi-vehicle campaign batch deployments.
                </p>
              </div>

              <div className="pt-4 border-t border-[#353740] flex items-center justify-between text-xs font-heading font-bold">
                <span
                  className={
                    partnerType === 'fleet_partner' ? 'text-[#E7FF39]' : 'text-[#A5A8B3]'
                  }
                >
                  {partnerType === 'fleet_partner' ? 'Form Selected' : 'Choose Fleet'}
                </span>
                {partnerType === 'fleet_partner' && (
                  <Check className="w-4 h-4 text-[#E7FF39]" />
                )}
              </div>
            </button>
          </div>

          {/* DYNAMIC REGISTRATION FORM CONTAINER */}
          <div className="max-w-3xl mx-auto bg-[#17191F] border border-[#353740] rounded-3xl p-6 sm:p-10 shadow-2xl transition-all">
            {submitSuccess ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-tech font-bold text-[#E7FF39] uppercase tracking-widest">
                    Registration Acknowledged
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                    {partnerType === 'fleet_partner'
                      ? 'Fleet Partnership Enquiry Received!'
                      : 'Rider Partner Interest Recorded!'}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#A5A8B3] max-w-lg mx-auto leading-relaxed">
                  Thank you for registering. Your reference ID is{' '}
                  <strong className="text-[#E7FF39] font-mono text-sm">
                    {submitSuccess.applicationId}
                  </strong>
                  . Our operations coordination desk reviews all profiles according to campaign
                  corridors and vehicle verification requirements in Hyderabad.
                </p>

                {/* WhatsApp Escalation Action */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppFollowUpUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-[#0C0D12] text-xs font-heading font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect On WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#24212C] text-xs font-heading font-bold text-white hover:bg-[#2D2A37] border border-[#353740] transition-all cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
                {/* Honeypot Spam Protection Field */}
                <input
                  type="text"
                  {...register('honeypot')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submitError && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* FORM TITLE & SCOPE HEADER */}
                <div className="border-b border-[#353740] pb-4">
                  <div className="flex items-center gap-2 text-xs font-tech font-bold text-[#E7FF39] uppercase tracking-wider mb-1">
                    {partnerType === 'own_ev_rider' && <Bike className="w-4 h-4" />}
                    {partnerType === 'without_ev_rider' && <UserCheck className="w-4 h-4" />}
                    {partnerType === 'fleet_partner' && <Building2 className="w-4 h-4" />}
                    <span>
                      {partnerType === 'own_ev_rider'
                        ? 'Option 1: Rider Registration With Own EV'
                        : partnerType === 'without_ev_rider'
                        ? 'Option 2: Rider Candidate (Seeking Partner EV)'
                        : 'Option 3: Commercial Fleet Partnership'}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase">
                    {partnerType === 'own_ev_rider' && 'I Have My Own Electric Bike'}
                    {partnerType === 'without_ev_rider' && 'I Don’t Have a Bike (Rider Candidate)'}
                    {partnerType === 'fleet_partner' && 'Commercial EV Fleet Partnership Enquiry'}
                  </h3>

                  <p className="text-xs text-[#A5A8B3] mt-1">
                    {partnerType === 'own_ev_rider' &&
                      'Fill in your vehicle specifications and preferred operating corridors in Hyderabad.'}
                    {partnerType === 'without_ev_rider' &&
                      'Register as a rider candidate for partner-arranged electric scooters, subject to eligibility.'}
                    {partnerType === 'fleet_partner' &&
                      'For fleet operators with electric two-wheelers seeking batch campaign integration.'}
                  </p>
                </div>

                {/* OPTION 2 FAIR DISCLAIMER CALLOUT */}
                {partnerType === 'without_ev_rider' && (
                  <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740] flex items-start gap-3 text-xs text-[#A5A8B3]">
                    <ShieldCheck className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">Candidate Note:</strong> This application expresses
                      your interest in riding partner-arranged or rental-model electric scooters when campaign
                      quotas open. ADRYD does not promise a free vehicle, salary, fixed income, or guaranteed
                      employment.
                    </p>
                  </div>
                )}

                {/* FIELD GROUP 1: Personal / Entity Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {partnerType === 'fleet_partner' ? (
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Fleet Company / Entity Name *
                      </label>
                      <input
                        {...register('companyName')}
                        type="text"
                        placeholder="e.g. GreenWheels Mobility Logistics Pvt Ltd"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      />
                      {errors.companyName && (
                        <span className="text-xs text-red-400 mt-1 block">
                          {errors.companyName.message}
                        </span>
                      )}
                    </div>
                  ) : null}

                  <div>
                    <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                      {partnerType === 'fleet_partner'
                        ? 'Contact Person Name *'
                        : 'Full Name *'}
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Suresh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      {...register('mobile')}
                      type="tel"
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
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
                    <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="e.g. yourname@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {partnerType !== 'fleet_partner' ? (
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Age * (Must be 18+)
                      </label>
                      <input
                        {...register('age')}
                        type="number"
                        min="18"
                        max="70"
                        placeholder="e.g. 24"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      />
                      {errors.age && (
                        <span className="text-xs text-red-400 mt-1 block">
                          {errors.age.message}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        City / Location *
                      </label>
                      <input
                        {...register('city')}
                        type="text"
                        defaultValue="Hyderabad"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      />
                      {errors.city && (
                        <span className="text-xs text-red-400 mt-1 block">
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* FIELD GROUP 2: OPTION 1 SPECIFIC (OWN EV) */}
                {partnerType === 'own_ev_rider' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                          Electric Scooter Brand &amp; Model *
                        </label>
                        <input
                          {...register('vehicleModel')}
                          type="text"
                          placeholder="e.g. Ather 450X, Ola S1 Pro, TVS iQube, Chetak"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        />
                        {errors.vehicleModel && (
                          <span className="text-xs text-red-400 mt-1 block">
                            {errors.vehicleModel.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                          Vehicle Registration Number
                        </label>
                        <input
                          {...register('vehicleRegNumber')}
                          type="text"
                          placeholder="e.g. TS 09 EA 1234 (Optional)"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white uppercase"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                          Vehicle Ownership Status
                        </label>
                        <select
                          {...register('vehicleOwnership')}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        >
                          <option value="Self Owned" className="bg-[#17191F]">
                            Self Owned
                          </option>
                          <option value="Family Owned" className="bg-[#17191F]">
                            Family Owned
                          </option>
                          <option value="Financed / EMI" className="bg-[#17191F]">
                            Financed / EMI Active
                          </option>
                          <option value="Rented / Leased" className="bg-[#17191F]">
                            Rented / Leased
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                          Driving Licence Availability *
                        </label>
                        <select
                          {...register('drivingLicence')}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        >
                          <option value="Valid 2-Wheeler Driving Licence" className="bg-[#17191F]">
                            Valid 2-Wheeler Driving Licence (DL)
                          </option>
                          <option value="Learning Licence (LLR)" className="bg-[#17191F]">
                            Learning Licence (LLR)
                          </option>
                          <option value="Applied / In Process" className="bg-[#17191F]">
                            Applied / In Process
                          </option>
                        </select>
                        {errors.drivingLicence && (
                          <span className="text-xs text-red-400 mt-1 block">
                            {errors.drivingLicence.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* FIELD GROUP 2: OPTION 2 SPECIFIC (WITHOUT BIKE) */}
                {partnerType === 'without_ev_rider' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                          Driving Licence Availability *
                        </label>
                        <select
                          {...register('drivingLicence')}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        >
                          <option value="Valid 2-Wheeler Driving Licence" className="bg-[#17191F]">
                            Valid 2-Wheeler Driving Licence (DL)
                          </option>
                          <option value="Learning Licence (LLR)" className="bg-[#17191F]">
                            Learning Licence (LLR)
                          </option>
                          <option value="Applied / In Process" className="bg-[#17191F]">
                            Applied / In Process
                          </option>
                        </select>
                        {errors.drivingLicence && (
                          <span className="text-xs text-red-400 mt-1 block">
                            {errors.drivingLicence.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                          Previous Riding Experience
                        </label>
                        <select
                          {...register('ridingExperience')}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        >
                          <option
                            value="Food / Grocery Delivery (Zomato/Swiggy/Blinkit)"
                            className="bg-[#17191F]"
                          >
                            Food / Grocery Delivery (Zomato/Swiggy/Blinkit)
                          </option>
                          <option value="Courier / Logistics Delivery" className="bg-[#17191F]">
                            Courier / Logistics Delivery
                          </option>
                          <option value="Daily Personal Two-Wheeler Commuter" className="bg-[#17191F]">
                            Daily Personal Two-Wheeler Commuter
                          </option>
                          <option value="New Rider / Limited Experience" className="bg-[#17191F]">
                            New Rider / Limited Commercial Experience
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Willingness to Use a Partner-Provided EV
                      </label>
                      <select
                        {...register('willingnessPartnerEV')}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      >
                        <option
                          value="Yes — Interested in Partner-Provided EV"
                          className="bg-[#17191F]"
                        >
                          Yes — Interested in Partner-Provided EV
                        </option>
                        <option
                          value="Interested in Rent-to-Own EV Options"
                          className="bg-[#17191F]"
                        >
                          Interested in Rent-to-Own EV Options
                        </option>
                        <option
                          value="Flexible based on campaign terms"
                          className="bg-[#17191F]"
                        >
                          Flexible based on campaign terms &amp; schedule
                        </option>
                      </select>
                    </div>
                  </>
                )}

                {/* FIELD GROUP 2: OPTION 3 SPECIFIC (FLEET PARTNER) */}
                {partnerType === 'fleet_partner' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                          Total Electric Scooters in Fleet
                        </label>
                        <input
                          {...register('fleetCount')}
                          type="text"
                          placeholder="e.g. 5 - 15 EVs, 20+ Vehicles"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                          Operating Hubs in Hyderabad
                        </label>
                        <input
                          {...register('fleetHubs')}
                          type="text"
                          placeholder="e.g. Madhapur, Kukatpally, Secunderabad"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* FIELD GROUP 3: Area & Availability (Options 1 & 2) */}
                {partnerType !== 'fleet_partner' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Preferred Working Area (Hyderabad)
                      </label>
                      <select
                        {...register('serviceArea')}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      >
                        {HYDERABAD_ZONES_LIST.map((zone) => (
                          <option key={zone} value={zone} className="bg-[#17191F]">
                            {zone}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Preferred Availability
                      </label>
                      <select
                        {...register('preferredAvailability')}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      >
                        <option
                          value="Peak Commute Hours (Morning & Evening)"
                          className="bg-[#17191F]"
                        >
                          Peak Commute Hours (Morning &amp; Evening)
                        </option>
                        <option value="Full Day (4-6 Hours)" className="bg-[#17191F]">
                          Full Day (4-6 Hours)
                        </option>
                        <option value="Weekends Only" className="bg-[#17191F]">
                          Weekends Only
                        </option>
                        <option value="Flexible Schedule" className="bg-[#17191F]">
                          Flexible Schedule
                        </option>
                      </select>
                    </div>
                  </div>
                )}

                {/* FIELD GROUP 4: Additional Information / Notes */}
                <div>
                  <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                    Additional Information
                  </label>
                  <textarea
                    {...register('additionalNotes')}
                    rows={3}
                    placeholder={
                      partnerType === 'own_ev_rider'
                        ? 'Battery charging setup, daily commute routine, prior brand delivery experience...'
                        : partnerType === 'without_ev_rider'
                        ? 'Prior commercial delivery background, daily time flexibility, licence details...'
                        : 'Vehicle models, battery swap compatibility, pilot deployment timelines in Hyderabad...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white placeholder-[#A5A8B3]/40"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] disabled:opacity-50 text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(231,255,57,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Recording Interest...</span>
                    ) : (
                      <>
                        <span>
                          {partnerType === 'own_ev_rider' && 'Register With My EV'}
                          {partnerType === 'without_ev_rider' && 'Apply as a Rider'}
                          {partnerType === 'fleet_partner' &&
                            'Submit Fleet Partnership Enquiry'}
                        </span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* PARTNER INFORMATION NOTICE (REQUIRED BY SPECIFICATION) */}
          <div className="max-w-3xl mx-auto mt-8 p-5 rounded-2xl bg-[#17191F] border border-[#353740] text-center">
            <p className="text-xs text-[#A5A8B3] leading-relaxed">
              <strong className="text-white">Partner Information Notice:</strong> Registration is an
              expression of interest and does not guarantee employment, campaign assignments, vehicle
              provision or fixed earnings. All opportunities are subject to eligibility, verification,
              vehicle availability, operational requirements and campaign demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
