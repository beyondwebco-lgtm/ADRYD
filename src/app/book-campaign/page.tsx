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
  const hasSellOrPreOrder =
    selectedServices.includes('ADRYD Sell') ||
    selectedServices.includes('ADRYD Pre-Order');
  const hasDeliver = selectedServices.includes('ADRYD Deliver');

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
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Campaign Planner • Hyderabad
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] uppercase tracking-tight">
            Launch Your Campaign
          </h1>
          <p className="text-sm sm:text-base text-[#637786]">
            Plan your promotion, showcase, QR pre-orders, and local delivery requirements to receive a tailored corridor route.
          </p>
        </div>

        {/* Progress Stepper */}
        {!submitSuccess && (
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold uppercase tracking-wider mb-2">
              <span className={currentStep >= 1 ? 'text-[#00A8C8]' : 'text-gray-400'}>
                1. Business
              </span>
              <span className={currentStep >= 2 ? 'text-[#00A8C8]' : 'text-gray-400'}>
                2. Services
              </span>
              <span className={currentStep >= 3 ? 'text-[#00A8C8]' : 'text-gray-400'}>
                3. Scope
              </span>
              <span className={currentStep >= 4 ? 'text-[#00A8C8]' : 'text-gray-400'}>
                4. Review
              </span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#00A8C8] h-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Confirmation Screen */}
        {submitSuccess ? (
          <div className="bg-white border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center shadow-[0_12px_40px_rgba(0,168,200,0.06)]">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-[#EAF9FD] text-xs font-bold text-[#00A8C8] uppercase tracking-wider mb-3">
              Reference ID: {submitSuccess.submissionId}
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#172B3A] uppercase mb-4">
              Campaign Brief Received!
            </h2>

            <p className="text-sm sm:text-base text-[#637786] max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, <strong className="text-[#172B3A]">{watchedValues.fullName}</strong>. Your campaign requirements for <strong className="text-[#172B3A]">{watchedValues.companyName}</strong> have been recorded in our Hyderabad planning queue. Our team will review route feasibility and contact you within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppFollowUp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs shadow-md transition-all"
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-[#DCECF2] hover:bg-[#F6FAFC] text-[#172B3A] text-xs font-bold transition-all"
              >
                Submit Another Brief
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-[#DCECF2] rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,168,200,0.04)]"
          >
            {submitError && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* STEP 1: Business Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="border-b border-[#DCECF2] pb-4">
                  <h3 className="font-heading font-black text-xl text-[#172B3A]">
                    Step 1: Business Profile
                  </h3>
                  <p className="text-xs text-[#637786] mt-1">
                    Provide your contact details and brand identity.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Rahul Sharma"
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
                      Brand / Business Name *
                    </label>
                    <input
                      {...register('companyName')}
                      type="text"
                      placeholder="e.g. Hyderabad Roasters"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                    />
                    {errors.companyName && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.companyName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.email.message}
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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                    Business Category *
                  </label>
                  <select
                    {...register('businessCategory')}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                  >
                    <option value="" disabled>Select Business Category</option>
                    {BUSINESS_CATEGORIES.map((bc) => (
                      <option key={bc} value={bc}>{bc}</option>
                    ))}
                  </select>
                  {errors.businessCategory && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.businessCategory.message}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2: Service Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="border-b border-[#DCECF2] pb-4">
                  <h3 className="font-heading font-black text-xl text-[#172B3A]">
                    Step 2: Desired Services &amp; Goal
                  </h3>
                  <p className="text-xs text-[#637786] mt-1">
                    Select one or more of the seven ADRYD services you would like to test.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172B3A]">
                      Select Desired Services *
                    </label>
                    <span className="text-xs text-[#00A8C8] font-bold">
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
                          className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-[#EAF9FD] border-[#00A8C8] shadow-sm ring-1 ring-[#00A8C8]'
                              : 'bg-white border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected
                                ? 'bg-[#00A8C8] text-white'
                                : 'bg-[#F6FAFC] text-[#637786]'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-sm text-[#172B3A] flex items-center justify-between">
                              <span>{svc.label}</span>
                              {isSelected && <Check className="w-4 h-4 text-[#00A8C8]" />}
                            </div>
                            <p className="text-xs text-[#637786] leading-snug mt-1">
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Product Category *
                    </label>
                    <select
                      {...register('productCategory')}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                    >
                      {SITE_CONFIG.productCategories.map((cat) => (
                        <option key={cat.id} value={cat.title}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Campaign Objective *
                    </label>
                    <input
                      {...register('objective')}
                      type="text"
                      placeholder="e.g. New store launch in HITEC City"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-sm text-[#172B3A]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Campaign Scope & Routes */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="border-b border-[#DCECF2] pb-4">
                  <h3 className="font-heading font-black text-xl text-[#172B3A]">
                    Step 3: Route &amp; Scope Requirements
                  </h3>
                  <p className="text-xs text-[#637786] mt-1">
                    Select package tier, corridor routes and timing.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                    Preferred Campaign Package *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setValue('preferredPackage', pkg.name)}
                        className={`p-3.5 rounded-2xl text-left border transition-all ${
                          selectedPackage === pkg.name
                            ? 'bg-[#EAF9FD] border-[#00A8C8] ring-1 ring-[#00A8C8]'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-bold text-xs text-[#172B3A]">{pkg.name}</div>
                        <div className="text-[11px] text-[#637786] mt-0.5">{pkg.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#172B3A]">
                      Target Hyderabad Corridors *
                    </label>
                    <span className="text-xs text-[#00A8C8] font-bold">
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
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#EAF9FD] text-[#00A8C8] border-[#00A8C8] font-bold'
                              : 'bg-white border-gray-200 text-[#637786] hover:border-gray-300'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#00A8C8]" />}
                          <span>{area}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Rider Count
                    </label>
                    <input
                      {...register('riderCount', { valueAsNumber: true })}
                      type="number"
                      min={1}
                      max={50}
                      className="w-full px-3 py-2.5 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-xs text-[#172B3A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Duration
                    </label>
                    <select
                      {...register('preferredDuration')}
                      className="w-full px-3 py-2.5 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-xs text-[#172B3A]"
                    >
                      <option value="3 Hours (Single Session)">3 Hours</option>
                      <option value="4 Hours (Single Session)">4 Hours</option>
                      <option value="6 Hours (Peak Windows)">6 Hours</option>
                      <option value="Weekend Blitz (2 Days)">Weekend Blitz</option>
                      <option value="Full Week (7 Days)">Full Week</option>
                      <option value="Monthly Sustained">Monthly Sustained</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Start Date
                    </label>
                    <input
                      {...register('preferredDate')}
                      type="date"
                      className="w-full px-3 py-2.5 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-xs text-[#172B3A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      {...register('estimatedBudget')}
                      className="w-full px-3 py-2.5 rounded-2xl bg-white border border-gray-200 focus:border-[#00A8C8] focus:ring-2 focus:ring-[#00A8C8]/20 focus:outline-none text-xs text-[#172B3A]"
                    >
                      <option value="₹10,000 - ₹25,000">₹10K - ₹25K</option>
                      <option value="₹25,000 - ₹50,000">₹25K - ₹50K</option>
                      <option value="₹50,000 - ₹1,00,000">₹50K - ₹100K</option>
                      <option value="₹1,00,000+">₹100K+</option>
                    </select>
                  </div>
                </div>

                {hasShowcase && (
                  <div className="p-5 rounded-2xl bg-[#F6FAFC] border border-[#DCECF2] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#00A8C8] uppercase tracking-wider">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Product Showcase &amp; Sampling</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        {...register('productType')}
                        type="text"
                        placeholder="Product Type (e.g. Sarees, Gourmet Snacks)"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-gray-200 text-xs text-[#172B3A]"
                      />
                      <input
                        {...register('expectedQuantity')}
                        type="text"
                        placeholder="Sample Quantity (e.g. 50 testers)"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-gray-200 text-xs text-[#172B3A]"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: Review and Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="border-b border-[#DCECF2] pb-4">
                  <h3 className="font-heading font-black text-xl text-[#172B3A]">
                    Step 4: Review Brief
                  </h3>
                  <p className="text-xs text-[#637786] mt-1">
                    Verify your details before submitting to our Hyderabad operations team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 rounded-2xl bg-[#F6FAFC] border border-[#DCECF2] space-y-2">
                    <div className="font-bold text-[#00A8C8] uppercase tracking-wider">
                      Client Profile
                    </div>
                    <div><span className="text-[#637786]">Name:</span> <strong className="text-[#172B3A]">{watchedValues.fullName}</strong></div>
                    <div><span className="text-[#637786]">Brand:</span> <strong className="text-[#172B3A]">{watchedValues.companyName}</strong></div>
                    <div><span className="text-[#637786]">Email:</span> <strong className="text-[#172B3A]">{watchedValues.email}</strong></div>
                    <div><span className="text-[#637786]">Mobile:</span> <strong className="text-[#172B3A]">{watchedValues.mobile}</strong></div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F6FAFC] border border-[#DCECF2] space-y-2">
                    <div className="font-bold text-[#1756C1] uppercase tracking-wider">
                      Campaign Scope
                    </div>
                    <div><span className="text-[#637786]">Services:</span> <strong className="text-[#172B3A]">{watchedValues.selectedServices?.join(', ')}</strong></div>
                    <div><span className="text-[#637786]">Package:</span> <strong className="text-[#172B3A]">{watchedValues.preferredPackage}</strong></div>
                    <div><span className="text-[#637786]">Corridors:</span> <strong className="text-[#172B3A]">{watchedValues.targetAreas?.join(', ')}</strong></div>
                    <div><span className="text-[#637786]">Budget:</span> <strong className="text-[#172B3A]">{watchedValues.estimatedBudget}</strong></div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6FAFC] border border-[#DCECF2] flex items-start gap-3 text-xs text-[#637786]">
                  <ShieldCheck className="w-4 h-4 text-[#00A8C8] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#172B3A]">Zero Financial Commitment:</strong> Submitting this brief requests route feasibility and a formal quotation. No payment is processed on this site.
                  </p>
                </div>
              </div>
            )}

            {/* Stepper Buttons */}
            <div className="mt-8 pt-6 border-t border-[#DCECF2] flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 rounded-full bg-white border border-[#DCECF2] text-[#172B3A] text-xs font-bold hover:bg-[#F6FAFC] flex items-center gap-2 transition-all cursor-pointer"
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
                  className="px-8 py-3.5 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] text-white text-xs font-bold shadow-md hover:scale-[1.01] flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] disabled:opacity-50 text-white text-xs font-bold shadow-md hover:scale-[1.01] flex items-center gap-2 transition-all cursor-pointer"
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
        <div className="min-h-screen bg-white flex items-center justify-center text-[#172B3A]">
          Loading Campaign Planner...
        </div>
      }
    >
      <CampaignForm />
    </Suspense>
  );
}
