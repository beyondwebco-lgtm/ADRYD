'use client';

import { useState, Suspense } from 'react';
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
  Check,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const HYDERABAD_AREAS = [
  'HITEC City',
  'Madhapur',
  'Kukatpally',
  'Kompally',
  'Gachibowli',
  'Jubilee Hills',
  'Banjara Hills',
  'Kondapur',
  'Begumpet',
  'Secunderabad',
  'Financial District',
  'Durgam Cheruvu',
  'Ameerpet',
];

const BUSINESS_CATEGORIES = [
  'Fashion & Textiles (Sarees, Casuals, Handlooms)',
  'Bakery & Homemade Foods (Cakes, Chocolates, Snacks)',
  'Food & Agriculture (Organic, Dairy, Oils, Spices)',
  'Handmade & Home Décor (Crafts, Candles, Gifts)',
  'Lifestyle & Personal Care (Skincare, Fragrances)',
  'Technology & Education (Accessories, Kits, Gadgets)',
  'Home & Garden (Plants, Nursery, Eco-Living)',
  'Startups & D2C Brands (New Retail Launches)',
  'Restaurants, Food & Cafés',
  'Real Estate & Living',
  'Healthcare & Diagnostics',
  'Marketing / Media Agency',
  'Other / Emerging Business',
];

const AVAILABLE_SERVICES = [
  { id: 'ADRYD Promote', label: 'ADRYD Promote', desc: 'EV & rider apparel branding on planned routes', icon: Megaphone },
  { id: 'ADRYD Showcase', label: 'ADRYD Showcase', desc: 'Illuminated mobile product display & sample stops', icon: ShoppingBag },
  { id: 'ADRYD Sell', label: 'ADRYD Sell', desc: 'On-scooter QR catalogues & purchase assistance', icon: QrCode },
  { id: 'ADRYD Pre-Order', label: 'ADRYD Pre-Order', desc: 'Collect demand & group orders before batch delivery', icon: PackageCheck },
  { id: 'ADRYD Deliver', label: 'ADRYD Deliver', desc: 'Hyperlocal last-mile fulfillment & replenishment', icon: Truck },
  { id: 'ADRYD Viral', label: 'ADRYD Viral', desc: 'Reels, campaign videos & street-to-screen reach', icon: Video },
  { id: 'ADRYD Insights', label: 'ADRYD Insights', desc: 'Proposed telemetry & campaign execution reports', icon: BarChart3 },
];

const PACKAGES = [
  { id: 'starter', name: 'Starter (1 Rider • 3 Hours)', desc: 'Local neighborhood brand visibility' },
  { id: 'local-reach', name: 'Local Reach (2 Riders • 4 Hours)', desc: 'Coordinated tandem street recall' },
  { id: 'community', name: 'Community (5 Riders • 5 Hours)', desc: 'District saturation & showcase stops' },
  { id: 'city-activation', name: 'City Activation (10 Riders • 6 Hours)', desc: 'Synchronized citywide metro blitz' },
  { id: 'bulk-activation', name: 'Bulk Activation (20+ Riders)', desc: 'Custom mega fleet & custom routes' },
  { id: 'monthly-growth', name: 'Monthly Growth Plan', desc: 'Multi-session weekly retainer' },
  { id: 'custom-package', name: 'ADRYD Upgrade & Custom', desc: 'Bespoke showcase fabrication & routes' },
];

function CampaignForm() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{ submissionId?: string; message?: string } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const initialPackageParam = searchParams.get('package') || 'local-reach';
  const initialZone = searchParams.get('zone');
  const initialCategory = searchParams.get('category') || '';
  const initialService = searchParams.get('service');
  const initialObjective = searchParams.get('objective') || 'Brand Visibility & Launch';

  const defaultServices = initialService
    ? [initialService]
    : ['ADRYD Promote', 'ADRYD Showcase'];

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
      targetCity: 'Hyderabad',
      preferredPackage: initialPackageParam,
      selectedServices: defaultServices,
      targetAreas: initialZone ? [initialZone] : ['HITEC City', 'Madhapur'],
      riderCount: 2,
      preferredDuration: '4 Hours (Single Session)',
      objective: initialObjective,
      estimatedBudget: '₹25,000 - ₹50,000',
      productCategory: initialCategory || 'Fashion & Textiles',
    },
  });

  const selectedServices = watch('selectedServices') || [];
  const selectedAreas = watch('targetAreas') || [];
  const selectedPackage = watch('preferredPackage');
  const watchedValues = watch();

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setValue(
          'selectedServices',
          selectedServices.filter((s) => s !== serviceId)
        );
      }
    } else {
      setValue('selectedServices', [...selectedServices, serviceId]);
    }
  };

  const toggleArea = (area: string) => {
    if (selectedAreas.includes(area)) {
      if (selectedAreas.length > 1) {
        setValue(
          'targetAreas',
          selectedAreas.filter((a) => a !== area)
        );
      }
    } else {
      setValue('targetAreas', [...selectedAreas, area]);
    }
  };

  const hasShowcase = selectedServices.includes('ADRYD Showcase');

  const nextStep = async () => {
    let fieldsToValidate: (keyof CampaignEnquiryInput)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ['fullName', 'companyName', 'email', 'mobile', 'businessCategory'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['selectedServices', 'productCategory', 'objective'];
    } else if (currentStep === 3) {
      fieldsToValidate = [
        'preferredPackage',
        'riderCount',
        'preferredDuration',
        'preferredDate',
        'targetAreas',
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
        setSubmitError(result.message || 'Something went wrong. Please check your details.');
      }
    } catch {
      setSubmitError('Network error. Please try again or message our team directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppFollowUp = () => {
    const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
    const ref = submitSuccess?.submissionId || 'New Enquiry';
    const msg = `Hello ADRYD Team, I have just submitted campaign brief (${ref}) for ${watchedValues.companyName} (${watchedValues.preferredPackage}). Looking forward to planning our route in Hyderabad.`;
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-96 h-96 rounded-full bg-[#051C33]/55 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campaign Planner • Hyderabad</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Launch Your <span className="text-[#B4F000] text-glow-chartreuse">Campaign</span>
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0]">
            Plan your promotion, showcase, QR pre-orders, and local delivery requirements to receive a tailored corridor route.
          </p>
        </div>

        {/* Progress Stepper */}
        {!submitSuccess && (
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold uppercase tracking-wider mb-2">
              <span className={currentStep >= 1 ? 'text-[#B4F000]' : 'text-[#E2E8F0]/40'}>
                1. Business
              </span>
              <span className={currentStep >= 2 ? 'text-[#B4F000]' : 'text-[#E2E8F0]/40'}>
                2. Services
              </span>
              <span className={currentStep >= 3 ? 'text-[#B4F000]' : 'text-[#E2E8F0]/40'}>
                3. Scope
              </span>
              <span className={currentStep >= 4 ? 'text-[#B4F000]' : 'text-[#E2E8F0]/40'}>
                4. Review
              </span>
            </div>
            <div className="w-full bg-[#041220]/90 h-2 rounded-full overflow-hidden border border-[#B4F000]/20">
              <div
                className="bg-[#B4F000] h-full transition-all duration-300 shadow-[0_0_12px_rgba(180,240,0,0.5)]"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Confirmation Screen */}
        {submitSuccess ? (
          <div className="bg-[#041220]/90 backdrop-blur-2xl border border-[#B4F000]/40 rounded-3xl p-8 sm:p-12 text-center shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <div className="w-20 h-20 rounded-full bg-[#B4F000]/20 border border-[#B4F000]/50 flex items-center justify-center text-[#B4F000] mx-auto mb-6 shadow-[0_0_24px_rgba(180,240,0,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-[#B4F000]/15 text-xs font-bold text-[#B4F000] border border-[#B4F000]/30 uppercase tracking-wider mb-3">
              Reference ID: {submitSuccess.submissionId}
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mb-4">
              Campaign Brief <span className="text-[#B4F000]">Received!</span>
            </h2>

            <p className="text-sm sm:text-base text-[#E2E8F0] max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, <strong className="text-white">{watchedValues.fullName}</strong>. Your campaign requirements for <strong className="text-[#B4F000]">{watchedValues.companyName}</strong> have been recorded in our Hyderabad planning queue. Our team will review route feasibility and contact you within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppFollowUp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-xs shadow-[0_4px_20px_rgba(180,240,0,0.35)] transition-all"
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#041220]/75 border border-[#B4F000]/30 hover:bg-[#051C33]/60 text-white text-xs font-bold transition-all"
              >
                Submit Another Brief
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#041220]/75 backdrop-blur-2xl border border-[#B4F000]/25 rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            {submitError && (
              <div className="mb-6 p-4 rounded-2xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* STEP 1: Business Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="border-b border-[#B4F000]/15 pb-4">
                  <h3 className="font-heading font-black text-xl text-white">
                    Step 1: Business Profile
                  </h3>
                  <p className="text-xs text-[#E2E8F0] mt-1">
                    Provide your contact details and brand identity.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder:text-[#E2E8F0]/40"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Brand / Business Name *
                    </label>
                    <input
                      {...register('companyName')}
                      type="text"
                      placeholder="e.g. Hyderabad Roasters"
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder:text-[#E2E8F0]/40"
                    />
                    {errors.companyName && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.companyName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder:text-[#E2E8F0]/40"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.email.message}
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
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder:text-[#E2E8F0]/40"
                    />
                    {errors.mobile && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                    Business Category *
                  </label>
                  <select
                    {...register('businessCategory')}
                    className="w-full px-4 py-3 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white"
                  >
                    <option value="" disabled className="bg-[#041220] text-white">Select Business Category</option>
                    {BUSINESS_CATEGORIES.map((bc) => (
                      <option key={bc} value={bc} className="bg-[#041220] text-white">{bc}</option>
                    ))}
                  </select>
                  {errors.businessCategory && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.businessCategory.message}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2: Service Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="border-b border-[#B4F000]/15 pb-4">
                  <h3 className="font-heading font-black text-xl text-white">
                    Step 2: Desired Services &amp; Goal
                  </h3>
                  <p className="text-xs text-[#E2E8F0] mt-1">
                    Select one or more of the seven ADRYD services you would like to test.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#E2E8F0]">
                      Select Desired Services *
                    </label>
                    <span className="text-xs text-[#B4F000] font-bold">
                      {selectedServices.length} Selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {AVAILABLE_SERVICES.map((svc) => {
                      const Icon = svc.icon;
                      const isSelected = selectedServices.includes(svc.id);
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => toggleService(svc.id)}
                          className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3 cursor-pointer ${
                            isSelected
                              ? 'bg-[#051C33]/75 border-[#B4F000] shadow-[0_0_15px_rgba(180,240,0,0.25)] ring-1 ring-[#B4F000]'
                              : 'bg-[#041220]/70 border-[#B4F000]/20 hover:border-[#B4F000]/40'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected
                                ? 'bg-[#B4F000] text-[#000000]'
                                : 'bg-[#041220] text-[#E2E8F0]'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-sm text-white flex items-center justify-between">
                              <span>{svc.label}</span>
                              {isSelected && <Check className="w-4 h-4 text-[#B4F000]" />}
                            </div>
                            <p className="text-xs text-[#E2E8F0]/80 leading-snug mt-1">
                              {svc.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Product Category *
                    </label>
                    <select
                      {...register('productCategory')}
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white"
                    >
                      {SITE_CONFIG.productCategories.map((cat) => (
                        <option key={cat.id} value={cat.title} className="bg-[#041220] text-white">
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Campaign Objective *
                    </label>
                    <input
                      {...register('objective')}
                      type="text"
                      placeholder="e.g. New store launch in HITEC City"
                      className="w-full px-4 py-3 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-sm text-white placeholder:text-[#E2E8F0]/40"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Campaign Scope & Routes */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="border-b border-[#B4F000]/15 pb-4">
                  <h3 className="font-heading font-black text-xl text-white">
                    Step 3: Route &amp; Scope Requirements
                  </h3>
                  <p className="text-xs text-[#E2E8F0] mt-1">
                    Select package tier, corridor routes and timing.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-2">
                    Preferred Campaign Package *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setValue('preferredPackage', pkg.name)}
                        className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                          selectedPackage === pkg.name
                            ? 'bg-[#051C33]/75 border-[#B4F000] ring-1 ring-[#B4F000] shadow-[0_0_15px_rgba(180,240,0,0.2)]'
                            : 'bg-[#041220]/70 border-[#B4F000]/20 hover:border-[#B4F000]/40'
                        }`}
                      >
                        <div className="font-bold text-xs text-white">{pkg.name}</div>
                        <div className="text-[11px] text-[#E2E8F0]/80 mt-0.5">{pkg.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#E2E8F0]">
                      Target Hyderabad Corridors *
                    </label>
                    <span className="text-xs text-[#B4F000] font-bold">
                      {selectedAreas.length} Selected
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {HYDERABAD_AREAS.map((area) => {
                      const isSelected = selectedAreas.includes(area);
                      return (
                        <button
                          key={area}
                          type="button"
                          onClick={() => toggleArea(area)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-[#B4F000] text-[#000000] border-[#B4F000] font-bold shadow-[0_0_12px_rgba(180,240,0,0.3)]'
                              : 'bg-[#041220]/70 border-[#B4F000]/20 text-[#E2E8F0] hover:border-[#B4F000]/40'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#000000]" />}
                          <span>{area}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Rider Count
                    </label>
                    <input
                      {...register('riderCount', { valueAsNumber: true })}
                      type="number"
                      min={1}
                      max={50}
                      className="w-full px-3 py-2.5 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Duration
                    </label>
                    <select
                      {...register('preferredDuration')}
                      className="w-full px-3 py-2.5 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-xs text-white"
                    >
                      <option value="3 Hours (Single Session)" className="bg-[#041220]">3 Hours</option>
                      <option value="4 Hours (Single Session)" className="bg-[#041220]">4 Hours</option>
                      <option value="6 Hours (Peak Windows)" className="bg-[#041220]">6 Hours</option>
                      <option value="Weekend Blitz (2 Days)" className="bg-[#041220]">Weekend Blitz</option>
                      <option value="Full Week (7 Days)" className="bg-[#041220]">Full Week</option>
                      <option value="Monthly Sustained" className="bg-[#041220]">Monthly Sustained</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Start Date
                    </label>
                    <input
                      {...register('preferredDate')}
                      type="date"
                      className="w-full px-3 py-2.5 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      {...register('estimatedBudget')}
                      className="w-full px-3 py-2.5 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 focus:border-[#0A9BE0] focus:ring-2 focus:ring-[#0A9BE0]/25 focus:outline-none text-xs text-white"
                    >
                      <option value="₹10,000 - ₹25,000" className="bg-[#041220]">₹10K - ₹25K</option>
                      <option value="₹25,000 - ₹50,000" className="bg-[#041220]">₹25K - ₹50K</option>
                      <option value="₹50,000 - ₹1,00,000" className="bg-[#041220]">₹50K - ₹100K</option>
                      <option value="₹1,00,000+" className="bg-[#041220]">₹100K+</option>
                    </select>
                  </div>
                </div>

                {hasShowcase && (
                  <div className="p-5 rounded-2xl bg-[#051C33]/55 border border-[#B4F000]/30 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#B4F000] uppercase tracking-wider">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Product Showcase &amp; Sampling</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        {...register('productType')}
                        type="text"
                        placeholder="Product Type (e.g. Sarees, Gourmet Snacks)"
                        className="w-full px-3 py-2 rounded-xl bg-[#041220]/80 border border-[#B4F000]/25 text-xs text-white placeholder:text-[#E2E8F0]/40"
                      />
                      <input
                        {...register('expectedQuantity')}
                        type="text"
                        placeholder="Sample Quantity (e.g. 50 testers)"
                        className="w-full px-3 py-2 rounded-xl bg-[#041220]/80 border border-[#B4F000]/25 text-xs text-white placeholder:text-[#E2E8F0]/40"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: Review and Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="border-b border-[#B4F000]/15 pb-4">
                  <h3 className="font-heading font-black text-xl text-white">
                    Step 4: Review Brief
                  </h3>
                  <p className="text-xs text-[#E2E8F0] mt-1">
                    Verify your details before submitting to our Hyderabad operations team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 space-y-2">
                    <div className="font-bold text-[#B4F000] uppercase tracking-wider">
                      Client Profile
                    </div>
                    <div><span className="text-[#E2E8F0]">Name:</span> <strong className="text-white">{watchedValues.fullName}</strong></div>
                    <div><span className="text-[#E2E8F0]">Brand:</span> <strong className="text-white">{watchedValues.companyName}</strong></div>
                    <div><span className="text-[#E2E8F0]">Email:</span> <strong className="text-white">{watchedValues.email}</strong></div>
                    <div><span className="text-[#E2E8F0]">Mobile:</span> <strong className="text-white">{watchedValues.mobile}</strong></div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/25 space-y-2">
                    <div className="font-bold text-[#0A9BE0] uppercase tracking-wider">
                      Campaign Scope
                    </div>
                    <div><span className="text-[#E2E8F0]">Services:</span> <strong className="text-white">{watchedValues.selectedServices?.join(', ')}</strong></div>
                    <div><span className="text-[#E2E8F0]">Package:</span> <strong className="text-white">{watchedValues.preferredPackage}</strong></div>
                    <div><span className="text-[#E2E8F0]">Corridors:</span> <strong className="text-white">{watchedValues.targetAreas?.join(', ')}</strong></div>
                    <div><span className="text-[#E2E8F0]">Budget:</span> <strong className="text-white">{watchedValues.estimatedBudget}</strong></div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#051C33]/55 border border-[#B4F000]/25 flex items-start gap-3 text-xs text-[#E2E8F0]">
                  <ShieldCheck className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Zero Financial Commitment:</strong> Submitting this brief requests route feasibility and a formal quotation. No payment is processed on this site.
                  </p>
                </div>
              </div>
            )}

            {/* Stepper Buttons */}
            <div className="mt-8 pt-6 border-t border-[#B4F000]/15 flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 rounded-full bg-[#041220]/80 border border-[#B4F000]/30 text-white text-xs font-bold hover:bg-[#051C33]/60 flex items-center gap-2 transition-all cursor-pointer"
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
                  className="px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] text-xs font-black shadow-[0_4px_20px_rgba(180,240,0,0.35)] hover:scale-[1.01] flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] disabled:opacity-50 text-[#000000] text-xs font-black shadow-[0_4px_20px_rgba(180,240,0,0.35)] hover:scale-[1.01] flex items-center gap-2 transition-all cursor-pointer"
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
        <div className="min-h-screen bg-[#000000] flex items-center justify-center text-white">
          Loading Campaign Planner...
        </div>
      }
    >
      <CampaignForm />
    </Suspense>
  );
}