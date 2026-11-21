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
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Partner Network • Hyderabad
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
              Ride with ADRYD.{' '}
              <br />
              <span className="text-[#00A8C8]">Grow with us.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#637786] max-w-xl leading-relaxed">
              Earn with your electric scooter or join our mobility network as a commercial fleet partner. Flexible opportunities across Hyderabad&apos;s prime corridors.
            </p>

            {/* Quick Action Button */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#partner-registration"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] text-white text-xs font-bold shadow-md hover:scale-[1.02] transition-all"
              >
                <span>Register Interest Below</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-[#637786]">Quick 2-minute form</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#DCECF2]">
            <Image
              src="/images/adryd-rider-partner.jpg"
              alt="ADRYD EV Partner Rider"
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
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#172B3A] uppercase">
              Select Your Partnership
            </h2>
            <p className="text-sm text-[#637786]">
              Choose the option that describes your profile to begin your registration.
            </p>
          </div>

          {/* 3 Selectable Partnership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* CARD 1: Own an EV */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('own_ev_rider')}
              className={`p-6 sm:p-7 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between relative cursor-pointer ${
                partnerType === 'own_ev_rider'
                  ? 'bg-[#EAF9FD] border-[#00A8C8] ring-2 ring-[#00A8C8]/30 shadow-md'
                  : 'bg-white border-[#DCECF2] hover:border-gray-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'own_ev_rider'
                        ? 'bg-[#00A8C8] text-white'
                        : 'bg-[#F6FAFC] text-[#637786]'
                    }`}
                  >
                    <Bike className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      partnerType === 'own_ev_rider'
                        ? 'bg-[#00A8C8] text-white'
                        : 'bg-[#F6FAFC] text-[#637786]'
                    }`}
                  >
                    {partnerType === 'own_ev_rider' ? 'Selected' : 'Option 1'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-[#172B3A] mb-2">
                  I Have My Own Electric Bike
                </h3>

                <p className="text-xs text-[#637786] leading-relaxed mb-6">
                  Own an electric scooter? Register your interest in participating in ADRYD&apos;s mobile advertising and local showcase campaigns.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCECF2] flex items-center justify-between text-xs font-bold">
                <span className={partnerType === 'own_ev_rider' ? 'text-[#00A8C8]' : 'text-[#637786]'}>
                  {partnerType === 'own_ev_rider' ? 'Active Form' : 'Select Option'}
                </span>
                {partnerType === 'own_ev_rider' && <Check className="w-4 h-4 text-[#00A8C8]" />}
              </div>
            </button>

            {/* CARD 2: Need an EV */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('without_ev_rider')}
              className={`p-6 sm:p-7 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between relative cursor-pointer ${
                partnerType === 'without_ev_rider'
                  ? 'bg-[#EAF9FD] border-[#1756C1] ring-2 ring-[#1756C1]/30 shadow-md'
                  : 'bg-white border-[#DCECF2] hover:border-gray-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'without_ev_rider'
                        ? 'bg-[#1756C1] text-white'
                        : 'bg-[#F6FAFC] text-[#637786]'
                    }`}
                  >
                    <UserCheck className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      partnerType === 'without_ev_rider'
                        ? 'bg-[#1756C1] text-white'
                        : 'bg-[#F6FAFC] text-[#637786]'
                    }`}
                  >
                    {partnerType === 'without_ev_rider' ? 'Selected' : 'Option 2'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-[#172B3A] mb-2">
                  I Don&apos;t Have a Bike
                </h3>

                <p className="text-xs text-[#637786] leading-relaxed mb-6">
                  Interested in joining ADRYD but don&apos;t own an EV? Register as a candidate for partner-arranged vehicle opportunities.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCECF2] flex items-center justify-between text-xs font-bold">
                <span className={partnerType === 'without_ev_rider' ? 'text-[#1756C1]' : 'text-[#637786]'}>
                  {partnerType === 'without_ev_rider' ? 'Active Form' : 'Select Option'}
                </span>
                {partnerType === 'without_ev_rider' && <Check className="w-4 h-4 text-[#1756C1]" />}
              </div>
            </button>

            {/* CARD 3: Fleet Partner */}
            <button
              type="button"
              onClick={() => handleSelectPartnerType('fleet_partner')}
              className={`p-6 sm:p-7 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between relative cursor-pointer ${
                partnerType === 'fleet_partner'
                  ? 'bg-[#F6FAFC] border-[#123C83] ring-2 ring-[#123C83]/30 shadow-md'
                  : 'bg-white border-[#DCECF2] hover:border-gray-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      partnerType === 'fleet_partner'
                        ? 'bg-[#123C83] text-white'
                        : 'bg-[#F6FAFC] text-[#637786]'
                    }`}
                  >
                    <Layers className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      partnerType === 'fleet_partner'
                        ? 'bg-[#123C83] text-white'
                        : 'bg-[#F6FAFC] text-[#637786]'
                    }`}
                  >
                    {partnerType === 'fleet_partner' ? 'Selected' : 'Option 3'}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-[#172B3A] mb-2">
                  Commercial Fleet Partner
                </h3>

                <p className="text-xs text-[#637786] leading-relaxed mb-6">
                  For commercial fleet operators, EV rental aggregators and fleet managers seeking structured batch campaign deployments.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCECF2] flex items-center justify-between text-xs font-bold">
                <span className={partnerType === 'fleet_partner' ? 'text-[#123C83]' : 'text-[#637786]'}>
                  {partnerType === 'fleet_partner' ? 'Active Form' : 'Select Option'}
                </span>
                {partnerType === 'fleet_partner' && <Check className="w-4 h-4 text-[#123C83]" />}
              </div>
            </button>
          </div>

          {/* DYNAMIC REGISTRATION FORM */}
          <div className="max-w-3xl mx-auto bg-white border border-[#DCECF2] rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,168,200,0.04)]">
            {submitSuccess ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#00A8C8] uppercase tracking-wider">
                    Registration Received
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#172B3A]">
                    {partnerType === 'fleet_partner'
                      ? 'Fleet Partnership Enquiry Recorded'
                      : 'Rider Partner Interest Recorded'}
                  </h3>
                </div>

                <p className="text-sm text-[#637786] max-w-lg mx-auto leading-relaxed">
                  Thank you for registering. Your reference ID is{' '}
                  <strong className="text-[#00A8C8] font-mono text-sm">
                    {submitSuccess.applicationId}
                  </strong>
                  . Our operations team reviews all submissions according to corridor routes and verification requirements in Hyderabad.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppFollowUpUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect On WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-xs font-bold text-[#172B3A] border border-[#DCECF2] hover:bg-[#F6FAFC] transition-all"
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
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Scope Header */}
                <div className="border-b border-[#DCECF2] pb-4">
                  <h3 className="font-heading font-black text-xl text-[#172B3A]">
                    {partnerType === 'own_ev_rider' && 'Register With Your Electric Scooter'}
                    {partnerType === 'without_ev_rider' && 'Apply as a Rider Candidate'}
                    {partnerType === 'fleet_partner' && 'Commercial EV Fleet Partnership'}
                  </h3>
                  <p className="text-xs text-[#637786] mt-1">
                    {partnerType === 'own_ev_rider' && 'Fill in your vehicle model and preferred operating corridors in Hyderabad.'}
                    {partnerType === 'without_ev_rider' && 'Register for partner-arranged EV opportunities, subject to eligibility.'}
                    {partnerType === 'fleet_partner' && 'For fleet operators with electric two-wheelers seeking campaign integration.'}
                  </p>
                </div>

                {/* Option 2 Fair Disclaimer */}
                {partnerType === 'without_ev_rider' && (
                  <div className="p-4 rounded-2xl bg-[#F6FAFC] border border-[#DCECF2] flex items-start gap-3 text-xs text-[#637786]">
                    <ShieldCheck className="w-4 h-4 text-[#1756C1] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-[#172B3A]">Candidate Note:</strong> This expresses your interest in riding partner-provided electric scooters when openings arise. ADRYD does not promise a free vehicle, salary, fixed income or guaranteed employment.
                    </p>
                  </div>
                )}

                {/* Field Group 1: Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {partnerType === 'fleet_partner' && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Fleet Company Name *
                      </label>
                      <input
                        {...register('companyName')}
                        type="text"
                        placeholder="e.g. GreenWheels Logistics"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                      {errors.companyName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.companyName.message}
                        </span>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      {partnerType === 'fleet_partner' ? 'Contact Person *' : 'Full Name *'}
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Suresh Kumar"
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
                      Mobile / WhatsApp *
                    </label>
                    <input
                      {...register('mobile')}
                      type="tel"
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                    />
                    {errors.mobile && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="e.g. yourname@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {partnerType !== 'fleet_partner' ? (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Age * (Must be 18+)
                      </label>
                      <input
                        {...register('age')}
                        type="number"
                        min="18"
                        max="70"
                        placeholder="e.g. 24"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                      {errors.age && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.age.message}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        City / Location *
                      </label>
                      <input
                        {...register('city')}
                        type="text"
                        defaultValue="Hyderabad"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                    </div>
                  )}
                </div>

                {/* Option 1: Own EV Details */}
                {partnerType === 'own_ev_rider' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                          Electric Scooter Brand &amp; Model *
                        </label>
                        <input
                          {...register('vehicleModel')}
                          type="text"
                          placeholder="e.g. Ather 450X, Ola S1 Pro, TVS iQube"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                        />
                        {errors.vehicleModel && (
                          <span className="text-xs text-red-500 mt-1 block">
                            {errors.vehicleModel.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                          Vehicle Registration Number
                        </label>
                        <input
                          {...register('vehicleRegNumber')}
                          type="text"
                          placeholder="e.g. TS 09 EA 1234"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A] uppercase"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                          Ownership Status
                        </label>
                        <select
                          {...register('vehicleOwnership')}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                        >
                          <option value="Self Owned">Self Owned</option>
                          <option value="Family Owned">Family Owned</option>
                          <option value="Financed / EMI">Financed / EMI Active</option>
                          <option value="Rented / Leased">Rented / Leased</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                          Driving Licence *
                        </label>
                        <select
                          {...register('drivingLicence')}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Driving Licence *
                      </label>
                      <select
                        {...register('drivingLicence')}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      >
                        <option value="Valid 2-Wheeler Driving Licence">Valid 2-Wheeler Driving Licence</option>
                        <option value="Learning Licence (LLR)">Learning Licence (LLR)</option>
                        <option value="Applied / In Process">Applied / In Process</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Riding Experience
                      </label>
                      <select
                        {...register('ridingExperience')}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Total Electric Scooters in Fleet
                      </label>
                      <input
                        {...register('fleetCount')}
                        type="text"
                        placeholder="e.g. 5–15 EVs, 20+ Vehicles"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Operating Hubs in Hyderabad
                      </label>
                      <input
                        {...register('fleetHubs')}
                        type="text"
                        placeholder="e.g. Madhapur, Kukatpally, Secunderabad"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      />
                    </div>
                  </div>
                )}

                {/* Operating Areas & Schedule */}
                {partnerType !== 'fleet_partner' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Preferred Corridor
                      </label>
                      <select
                        {...register('serviceArea')}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                      >
                        {HYDERABAD_ZONES_LIST.map((zone) => (
                          <option key={zone} value={zone}>
                            {zone}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                        Preferred Availability
                      </label>
                      <select
                        {...register('preferredAvailability')}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    {...register('additionalNotes')}
                    rows={3}
                    placeholder="Any additional information regarding your availability, vehicle details or schedule..."
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A] placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] disabled:opacity-50 text-white font-bold text-sm shadow-[0_4px_20px_rgba(0,168,200,0.3)] flex items-center justify-center gap-2 hover:scale-[1.01] transition-all cursor-pointer"
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
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Legal Notice */}
          <div className="max-w-3xl mx-auto mt-6 text-center text-[11px] text-[#637786] leading-relaxed">
            Registration is an expression of interest only and does not promise employment, guaranteed income or vehicle allocation. Subject to operational requirements and fleet availability.
          </div>

        </div>

      </div>
    </div>
  );
}
