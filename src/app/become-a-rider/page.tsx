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
  Users2,
  Truck,
  QrCode,
  Layers,
  Building2,
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

export default function BecomeARiderPage() {
  const [partnerType, setPartnerType] = useState<'rider' | 'fleet'>('rider');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{ applicationId?: string; submissionId?: string; message?: string } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fleet form state
  const [fleetName, setFleetName] = useState('');
  const [fleetContact, setFleetContact] = useState('');
  const [fleetPhone, setFleetPhone] = useState('');
  const [fleetCount, setFleetCount] = useState('');
  const [fleetNotes, setFleetNotes] = useState('');
  const [fleetSubmitted, setFleetSubmitted] = useState(false);

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

  const onSubmitRider = async (data: RiderRegistrationInput) => {
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
        setSubmitError(res.message || 'Submission failed. Please check your details.');
      }
    } catch (e) {
      setSubmitError('Network error. Please try again later or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitFleet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fleetName || !fleetPhone) {
      setSubmitError('Please enter your fleet organization name and contact number.');
      return;
    }
    setFleetSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E7FF39]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
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

            {/* 5 Operating Opportunities */}
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

            <div className="p-4 rounded-2xl bg-[#17191F] border border-[#353740] flex items-start gap-3 text-xs text-[#A5A8B3]">
              <ShieldCheck className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
              <p>
                <strong className="text-white">Fair Disclosure:</strong> Registering interest does not
                guarantee campaign assignment or fixed monthly income. Partner opportunities depend on active
                advertiser briefs, route alignment, and vehicle eligibility.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#353740] shadow-2xl">
              <Image
                src="/images/adryd-rider-partner.jpg"
                alt="ADRYD EV Partner Rider"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12]/90 via-transparent to-transparent" />
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

        {/* Partner Registration Forms Card */}
        <div id="fleet-partnership" className="max-w-3xl mx-auto bg-[#17191F] border border-[#353740] rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Toggle Tabs: Rider vs Fleet */}
          <div className="flex items-center justify-center p-1 rounded-2xl bg-[#0C0D12] border border-[#353740] mb-8 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setPartnerType('rider')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-heading font-bold transition-all ${
                partnerType === 'rider'
                  ? 'bg-[#E7FF39] text-[#0C0D12] shadow-[0_0_15px_rgba(231,255,57,0.3)]'
                  : 'text-[#A5A8B3] hover:text-white'
              }`}
            >
              Individual EV Rider
            </button>
            <button
              type="button"
              onClick={() => setPartnerType('fleet')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-heading font-bold transition-all ${
                partnerType === 'fleet'
                  ? 'bg-[#E7FF39] text-[#0C0D12] shadow-[0_0_15px_rgba(231,255,57,0.3)]'
                  : 'text-[#A5A8B3] hover:text-white'
              }`}
            >
              Fleet Partner / Operator
            </button>
          </div>

          {/* TAB 1: Individual Rider Interest Form */}
          {partnerType === 'rider' && (
            <div>
              {submitSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white uppercase">
                    Rider Registration Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5A8B3] max-w-md mx-auto">
                    Thank you. Reference ID: <strong className="text-[#E7FF39]">{submitSuccess.applicationId || submitSuccess.submissionId}</strong>.
                    Our operations desk will contact you when campaigns matching your EV model and preferred areas open up.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#24212C] text-xs font-heading font-bold text-white hover:bg-[#2D2A37]"
                  >
                    Register Another Vehicle
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmitRider)} className="space-y-5">
                  <div className="border-b border-[#353740] pb-3 mb-4">
                    <h3 className="font-heading font-bold text-lg text-white uppercase">
                      Register Interest as an EV Partner Rider
                    </h3>
                    <p className="text-xs text-[#A5A8B3] mt-0.5">
                      Tell us about your electric scooter and preferred corridors in Hyderabad.
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
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Full Name *
                      </label>
                      <input
                        {...register('fullName')}
                        type="text"
                        placeholder="e.g. Suresh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      />
                      {errors.fullName && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.fullName.message}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Mobile Number (WhatsApp Preferred) *
                      </label>
                      <input
                        {...register('mobile')}
                        type="tel"
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      />
                      {errors.mobile && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.mobile.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        EV Make &amp; Model *
                      </label>
                      <input
                        {...register('vehicleModel')}
                        type="text"
                        placeholder="e.g. Ather 450X, Ola S1 Pro, TVS iQube"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      />
                      {errors.vehicleModel && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.vehicleModel.message}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Vehicle Ownership *
                      </label>
                      <select
                        {...register('vehicleOwnership')}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      >
                        <option value="Owned" className="bg-[#17191F]">Self Owned</option>
                        <option value="Family Owned" className="bg-[#17191F]">Family Owned</option>
                        <option value="Rented / Leased" className="bg-[#17191F]">Rented / Leased</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Preferred Hyderabad Operating Zone *
                      </label>
                      <select
                        {...register('serviceArea')}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      >
                        {HYDERABAD_ZONES_LIST.map((z) => (
                          <option key={z} value={z} className="bg-[#17191F]">
                            {z}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Daily Availability *
                      </label>
                      <select
                        {...register('preferredAvailability')}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      >
                        <option value="Peak Commute Hours (Morning & Evening)" className="bg-[#17191F]">
                          Peak Commute Hours (Morning &amp; Evening)
                        </option>
                        <option value="Full Day (4-6 Hours)" className="bg-[#17191F]">Full Day (4-6 Hours)</option>
                        <option value="Weekends Only" className="bg-[#17191F]">Weekends Only</option>
                        <option value="Flexible Schedule" className="bg-[#17191F]">Flexible Schedule</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] disabled:opacity-50 text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Registering...</span>
                      ) : (
                        <>
                          <span>Submit Rider Interest</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: Commercial Fleet Partner Enquiry */}
          {partnerType === 'fleet' && (
            <div>
              {fleetSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white uppercase">
                    Fleet Partnership Enquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5A8B3] max-w-md mx-auto">
                    Thank you. Our fleet logistics coordinator will reach out to discuss batch EV vehicle
                    allocation and campaign integration in Hyderabad.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFleetSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#24212C] text-xs font-heading font-bold text-white hover:bg-[#2D2A37]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmitFleet} className="space-y-5">
                  <div className="border-b border-[#353740] pb-3 mb-4">
                    <h3 className="font-heading font-bold text-lg text-white uppercase">
                      Commercial EV Fleet Partnership Enquiry
                    </h3>
                    <p className="text-xs text-[#A5A8B3] mt-0.5">
                      For fleet aggregators, EV rental operators, and commercial two-wheeler fleet managers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Fleet Company / Entity Name *
                      </label>
                      <input
                        type="text"
                        value={fleetName}
                        onChange={(e) => setFleetName(e.target.value)}
                        placeholder="e.g. GreenWheels Mobility Pvt Ltd"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        value={fleetContact}
                        onChange={(e) => setFleetContact(e.target.value)}
                        placeholder="e.g. Vikram Reddy"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={fleetPhone}
                        onChange={(e) => setFleetPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                        Total Electric Scooters in Fleet
                      </label>
                      <input
                        type="text"
                        value={fleetCount}
                        onChange={(e) => setFleetCount(e.target.value)}
                        placeholder="e.g. 10 - 50 EVs"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase text-[#A5A8B3] mb-1">
                      Fleet Details &amp; Operational Hubs
                    </label>
                    <textarea
                      rows={3}
                      value={fleetNotes}
                      onChange={(e) => setFleetNotes(e.target.value)}
                      placeholder="Vehicle makes, battery swap infrastructure, current operating hubs in Hyderabad..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white placeholder-[#A5A8B3]/50"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Submit Fleet Partnership Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
