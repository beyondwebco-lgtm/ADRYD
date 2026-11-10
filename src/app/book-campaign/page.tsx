'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  campaignEnquirySchema,
  type CampaignEnquiryInput,
} from '@/lib/validations/campaign';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Send,
  Building,
  Layers,
  FileText,
  Check,
  MessageCircle,
  Sparkles,
  MapPin,
  Calendar,
  IndianRupee,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const HYDERABAD_AREAS = [
  'HITEC City',
  'Madhapur',
  'Gachibowli',
  'Jubilee Hills',
  'Banjara Hills',
  'Kondapur',
  'Kukatpally',
  'Begumpet',
  'Secunderabad',
  'Financial District',
  'Durgam Cheruvu',
  'Ameerpet',
];

const INDUSTRIES = [
  'Retail & Fashion',
  'Restaurants, Food & Cafés',
  'Real Estate & Living',
  'Education & Coaching',
  'Events & Exhibitions',
  'Startups & D2C Brands',
  'Healthcare & Diagnostics',
  'Marketing & Advertising Agency',
  'Other / Emerging Brand',
];

const PACKAGES = [
  { id: 'single-rider', name: 'Single Rider Campaign', desc: '1 EV • Hyper-Local' },
  { id: 'dual-rider', name: 'Dual Rider Campaign', desc: '2 EVs • Coordinated Recall' },
  { id: 'multi-rider-fleet', name: 'Multi-Rider Fleet', desc: '4-10+ EVs • Citywide' },
  { id: 'custom-package', name: 'ADRYD Upgrade & Custom', desc: 'Showcase Box / Tailored' },
];

function CampaignForm() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<any>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const initialPackage = searchParams.get('package') || 'dual-rider';
  const initialZone = searchParams.get('zone');
  const initialRiders = Number(searchParams.get('riders')) || 2;
  const initialDuration = searchParams.get('duration')
    ? `${searchParams.get('duration')}-days`
    : '7-days';

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<CampaignEnquiryInput>({
    resolver: zodResolver(campaignEnquirySchema),
    defaultValues: {
      city: 'Hyderabad',
      packageType: initialPackage,
      targetZones: initialZone ? [initialZone] : ['HITEC City', 'Madhapur'],
      riderCount: initialRiders,
      duration: initialDuration,
      objective: 'Brand Awareness & Recall',
      estimatedBudget: '₹25,000 - ₹50,000',
    },
  });

  const selectedZones = watch('targetZones') || [];
  const selectedPackage = watch('packageType');
  const watchedValues = watch();

  const toggleZone = (zone: string) => {
    if (selectedZones.includes(zone)) {
      if (selectedZones.length > 1) {
        setValue(
          'targetZones',
          selectedZones.filter((z) => z !== zone)
        );
      }
    } else {
      setValue('targetZones', [...selectedZones, zone]);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof CampaignEnquiryInput)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ['fullName', 'companyName', 'email', 'mobile', 'industry'];
    } else if (currentStep === 2) {
      fieldsToValidate = [
        'objective',
        'packageType',
        'targetZones',
        'riderCount',
        'preferredDate',
        'duration',
        'estimatedBudget',
      ];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const onSubmit = async (data: CampaignEnquiryInput) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitSuccess(result);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setSubmitError('Network error. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppFollowUp = () => {
    const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
    const ref = submitSuccess?.submissionId || 'New Enquiry';
    const msg = `Hello ADRYD Team, I just submitted campaign brief (${ref}) for ${watchedValues.companyName}. Looking forward to discussing details.`;
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-20 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-burgundy/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-electric-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Official Campaign Booking &amp; Quotation
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Launch Your Campaign
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-grey">
            Complete the 4-step campaign planner to receive a customized route schedule and
            commercial quotation for Hyderabad.
          </p>
        </div>

        {/* Progress Stepper Bar */}
        {!submitSuccess && (
          <div className="mb-10">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-tech uppercase tracking-wider mb-2">
              <span className={currentStep >= 1 ? 'text-electric-yellow font-bold' : 'text-muted-grey'}>
                1. Business
              </span>
              <span className={currentStep >= 2 ? 'text-electric-yellow font-bold' : 'text-muted-grey'}>
                2. Campaign
              </span>
              <span className={currentStep >= 3 ? 'text-electric-yellow font-bold' : 'text-muted-grey'}>
                3. Brief Details
              </span>
              <span className={currentStep >= 4 ? 'text-electric-yellow font-bold' : 'text-muted-grey'}>
                4. Review &amp; Send
              </span>
            </div>
            <div className="w-full bg-graphite h-2 rounded-full overflow-hidden">
              <div
                className="bg-electric-yellow h-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Success Confirmation Card */}
        {submitSuccess ? (
          <div className="bg-carbon-card border border-emerald-500/40 rounded-2xl p-8 sm:p-12 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-graphite border border-graphite-border text-xs font-tech text-electric-yellow uppercase tracking-widest mb-3">
              Reference ID: {submitSuccess.submissionId}
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mb-4">
              Campaign Brief Received!
            </h2>

            <p className="text-sm sm:text-base text-muted-grey max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, <strong className="text-white">{watchedValues.fullName}</strong>. Your campaign
              requirements for <strong className="text-white">{watchedValues.companyName}</strong> have
              been logged into our Hyderabad campaign planning queue. Our operations team will review
              route availability and contact you within 24 hours.
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppFollowUp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-carbon-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fast-Track on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitSuccess(null);
                  setCurrentStep(1);
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-graphite hover:bg-graphite-light border border-graphite-border text-soft-ivory text-xs font-heading font-semibold transition-all"
              >
                Submit Another Brief
              </button>
            </div>
          </div>
        ) : (
          /* Multi-step Form Card */
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-carbon-card border border-graphite-border rounded-2xl p-6 sm:p-10 shadow-2xl relative"
          >
            {submitError && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* STEP 1: Business Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-graphite-border pb-4">
                  <h3 className="font-heading font-bold text-xl text-white">
                    Step 1: Business &amp; Contact Details
                  </h3>
                  <p className="text-xs text-muted-grey mt-1">
                    Tell us who you are and what brand you are promoting.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white placeholder-muted-grey/50"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                      Company / Brand Name *
                    </label>
                    <input
                      {...register('companyName')}
                      type="text"
                      placeholder="e.g. Hyderabad Roasters"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white placeholder-muted-grey/50"
                    />
                    {errors.companyName && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.companyName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                      Business Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white placeholder-muted-grey/50"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      {...register('mobile')}
                      type="tel"
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white placeholder-muted-grey/50"
                    />
                    {errors.mobile && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    {...register('industry')}
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  >
                    <option value="" disabled>
                      Select an Industry
                    </option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind} className="bg-carbon-card text-white">
                        {ind}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.industry.message}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2: Campaign Requirements */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-graphite-border pb-4">
                  <h3 className="font-heading font-bold text-xl text-white">
                    Step 2: Campaign Specifications
                  </h3>
                  <p className="text-xs text-muted-grey mt-1">
                    Select your package, target areas in Hyderabad, and duration.
                  </p>
                </div>

                {/* Package Type Selection */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-2">
                    Advertising Package Format *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setValue('packageType', pkg.id)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          selectedPackage === pkg.id
                            ? 'bg-burgundy/50 border-electric-yellow text-white'
                            : 'bg-graphite/40 border-graphite-border text-muted-grey hover:text-white'
                        }`}
                      >
                        <div className="font-heading font-bold text-sm text-white">
                          {pkg.name}
                        </div>
                        <div className="text-xs text-electric-yellow/90 mt-0.5">{pkg.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Zones Multiple Choice */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-tech uppercase tracking-wider text-muted-grey">
                      Target Hyderabad Corridors &amp; Zones *
                    </label>
                    <span className="text-[11px] text-electric-yellow">
                      {selectedZones.length} Selected
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {HYDERABAD_AREAS.map((area) => {
                      const isSelected = selectedZones.includes(area);
                      return (
                        <button
                          key={area}
                          type="button"
                          onClick={() => toggleZone(area)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-electric-yellow text-carbon-black border-electric-yellow font-bold'
                              : 'bg-graphite/40 border-graphite-border text-muted-grey hover:text-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-carbon-black" />}
                          <span>{area}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.targetZones && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.targetZones.message}
                    </span>
                  )}
                </div>

                {/* Grid for Rider Count & Start Date */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                      Rider Quantity *
                    </label>
                    <input
                      {...register('riderCount', { valueAsNumber: true })}
                      type="number"
                      min={1}
                      max={50}
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                    />
                    {errors.riderCount && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.riderCount.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                      Duration *
                    </label>
                    <select
                      {...register('duration')}
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                    >
                      <option value="3-days" className="bg-carbon-card">3 Days (Weekend Blast)</option>
                      <option value="7-days" className="bg-carbon-card">7 Days (Full Week)</option>
                      <option value="14-days" className="bg-carbon-card">14 Days (Fortnight)</option>
                      <option value="30-days" className="bg-carbon-card">30 Days (Monthly Sustained)</option>
                      <option value="custom" className="bg-carbon-card">Custom Duration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                      Approx Start Date *
                    </label>
                    <input
                      {...register('preferredDate')}
                      type="date"
                      className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                    />
                    {errors.preferredDate && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.preferredDate.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Estimated Campaign Budget *
                  </label>
                  <select
                    {...register('estimatedBudget')}
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white"
                  >
                    <option value="₹10,000 - ₹25,000" className="bg-carbon-card">₹10,000 - ₹25,000 (Pilot Single-Rider)</option>
                    <option value="₹25,000 - ₹50,000" className="bg-carbon-card">₹25,000 - ₹50,000 (Dual-Rider Week)</option>
                    <option value="₹50,000 - ₹1,00,000" className="bg-carbon-card">₹50,000 - ₹1,00,000 (Multi-Rider Fleet)</option>
                    <option value="₹1,00,000+" className="bg-carbon-card">₹1,00,000+ (Large Brand / Multi-Week)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3: Additional Notes & Creative */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-graphite-border pb-4">
                  <h3 className="font-heading font-bold text-xl text-white">
                    Step 3: Creative &amp; Special Requirements
                  </h3>
                  <p className="text-xs text-muted-grey mt-1">
                    Provide context on products to showcase, artwork status, and special instructions.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Campaign Objective &amp; Details
                  </label>
                  <textarea
                    {...register('campaignDescription')}
                    rows={4}
                    placeholder="Tell us about your campaign goals (e.g., store launch on Dec 1st, promoting discount code, showcasing clothing collection in tech parks)..."
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white placeholder-muted-grey/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-muted-grey mb-1.5">
                    Branding &amp; Creative Needs
                  </label>
                  <textarea
                    {...register('brandingRequirements')}
                    rows={3}
                    placeholder="Do you have print-ready artwork? Would you need ADRYD Creative Studio for photography, reels, or design adaptation?"
                    className="w-full px-4 py-3 rounded-xl bg-graphite/40 border border-graphite-border focus:border-electric-yellow focus:outline-none text-sm text-white placeholder-muted-grey/50"
                  />
                </div>

                {/* Artwork Storage Notice */}
                <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border flex items-start gap-3 text-xs text-muted-grey">
                  <Sparkles className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-soft-ivory">Artwork Upload Note:</strong> High-resolution
                    brand assets and vector logos will be requested directly by our design team via
                    a secure client portal link upon brief approval.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 4: Review and Submit */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-graphite-border pb-4">
                  <h3 className="font-heading font-bold text-xl text-white">
                    Step 4: Review Your Campaign Summary
                  </h3>
                  <p className="text-xs text-muted-grey mt-1">
                    Please verify your details before submitting to our Hyderabad planning team.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-2">
                    <div className="text-[10px] font-tech text-electric-yellow uppercase">
                      Client Profile
                    </div>
                    <div>
                      <span className="text-muted-grey block">Name:</span>
                      <span className="text-white font-bold">{watchedValues.fullName}</span>
                    </div>
                    <div>
                      <span className="text-muted-grey block">Company:</span>
                      <span className="text-white font-bold">{watchedValues.companyName}</span>
                    </div>
                    <div>
                      <span className="text-muted-grey block">Email:</span>
                      <span className="text-white font-bold">{watchedValues.email}</span>
                    </div>
                    <div>
                      <span className="text-muted-grey block">Mobile:</span>
                      <span className="text-white font-bold">{watchedValues.mobile}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-2">
                    <div className="text-[10px] font-tech text-electric-yellow uppercase">
                      Campaign Specifications
                    </div>
                    <div>
                      <span className="text-muted-grey block">Selected Package:</span>
                      <span className="text-white font-bold uppercase">{watchedValues.packageType}</span>
                    </div>
                    <div>
                      <span className="text-muted-grey block">Riders &amp; Duration:</span>
                      <span className="text-white font-bold">
                        {watchedValues.riderCount} Riders • {watchedValues.duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-grey block">Target Zones:</span>
                      <span className="text-white font-bold">
                        {watchedValues.targetZones?.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-grey block">Estimated Budget:</span>
                      <span className="text-white font-bold">{watchedValues.estimatedBudget}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-burgundy/20 border border-burgundy-light/40 flex items-start gap-2.5 text-xs text-soft-ivory/80">
                  <ShieldCheck className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
                  <p>
                    By submitting, you request an initial quotation and route feasibility assessment.
                    No financial commitments or card details are required at this stage.
                  </p>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-graphite-border flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-3 rounded-xl bg-graphite/60 hover:bg-graphite border border-graphite-border text-soft-ivory text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-7 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black text-xs font-heading font-black uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover disabled:opacity-50 text-carbon-black text-xs font-heading font-black uppercase tracking-wider shadow-xl flex items-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Submit Campaign Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function BookCampaignPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-carbon-black flex items-center justify-center text-white font-tech">
          Loading Campaign Planner...
        </div>
      }
    >
      <CampaignForm />
    </Suspense>
  );
}
