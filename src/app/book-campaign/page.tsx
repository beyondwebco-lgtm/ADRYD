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
  MapPin,
  Calendar,
  ShieldCheck,
  Layers,
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
  HelpCircle,
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

  // Check conditional services
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
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E7FF39]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E7FF39]" />
            Official Campaign Planner • Hyderabad Pilot
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Launch Your Campaign
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#A5A8B3]">
            Plan your promotion, showcase, QR pre-orders, and local delivery requirements to receive a
            tailored corridor route and quotation.
          </p>
        </div>

        {/* Progress Stepper Bar */}
        {!submitSuccess && (
          <div className="mb-10">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-tech uppercase tracking-wider mb-2">
              <span className={currentStep >= 1 ? 'text-[#E7FF39] font-bold' : 'text-[#A5A8B3]'}>
                1. Business
              </span>
              <span className={currentStep >= 2 ? 'text-[#E7FF39] font-bold' : 'text-[#A5A8B3]'}>
                2. Services
              </span>
              <span className={currentStep >= 3 ? 'text-[#E7FF39] font-bold' : 'text-[#A5A8B3]'}>
                3. Specifications
              </span>
              <span className={currentStep >= 4 ? 'text-[#E7FF39] font-bold' : 'text-[#A5A8B3]'}>
                4. Review &amp; Send
              </span>
            </div>
            <div className="w-full bg-[#17191F] h-2 rounded-full overflow-hidden border border-[#353740]">
              <div
                className="bg-[#E7FF39] h-full transition-all duration-300 shadow-[0_0_10px_rgba(231,255,57,0.5)]"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Confirmation State */}
        {submitSuccess ? (
          <div className="bg-[#17191F] border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-[#0C0D12] border border-[#353740] text-xs font-tech text-[#E7FF39] uppercase tracking-widest mb-3">
              Reference ID: {submitSuccess.submissionId}
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mb-4">
              Campaign Brief Received!
            </h2>

            <p className="text-sm sm:text-base text-[#A5A8B3] max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, <strong className="text-white">{watchedValues.fullName}</strong>. Your campaign
              requirements for <strong className="text-white">{watchedValues.companyName}</strong> have
              been registered in our Hyderabad campaign queue. Our operations team will review route
              feasibility and contact you within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppFollowUp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider transition-all shadow-lg"
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#24212C] hover:bg-[#2D2A37] border border-[#353740] text-[#F2F3F5] text-xs font-heading font-semibold transition-all"
              >
                Submit Another Brief
              </button>
            </div>
          </div>
        ) : (
          /* Multi-step Form Card */
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#17191F] border border-[#353740] rounded-3xl p-6 sm:p-10 shadow-2xl relative"
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
                <div className="border-b border-[#353740] pb-4">
                  <h3 className="font-heading font-bold text-xl text-white uppercase">
                    Step 1: Business Information
                  </h3>
                  <p className="text-xs text-[#A5A8B3] mt-1">
                    Provide your contact details and brand identity.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-sm text-white placeholder-[#A5A8B3]/50"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Business / Brand Name *
                    </label>
                    <input
                      {...register('companyName')}
                      type="text"
                      placeholder="e.g. Hyderabad Roasters"
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-sm text-white placeholder-[#A5A8B3]/50"
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
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Business Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-sm text-white placeholder-[#A5A8B3]/50"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      {...register('mobile')}
                      type="tel"
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-sm text-white placeholder-[#A5A8B3]/50"
                    />
                    {errors.mobile && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                    Business Category *
                  </label>
                  <select
                    {...register('businessCategory')}
                    className="w-full px-4 py-3 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-sm text-white"
                  >
                    <option value="" disabled>
                      Select Business Category
                    </option>
                    {BUSINESS_CATEGORIES.map((bc) => (
                      <option key={bc} value={bc} className="bg-[#17191F] text-white">
                        {bc}
                      </option>
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

            {/* STEP 2: Service Selection & Objective */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-[#353740] pb-4">
                  <h3 className="font-heading font-bold text-xl text-white uppercase">
                    Step 2: Service Selection &amp; Objectives
                  </h3>
                  <p className="text-xs text-[#A5A8B3] mt-1">
                    Select one or more of the seven ADRYD services you would like to explore.
                  </p>
                </div>

                {/* Multi-Select Services Grid */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-tech uppercase tracking-wider text-[#A5A8B3]">
                      Select Desired Services (Multi-Select) *
                    </label>
                    <span className="text-[11px] text-[#E7FF39] font-tech">
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
                          className={`p-3.5 rounded-xl text-left border transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-[#24212C] border-[#E7FF39] shadow-[0_0_15px_rgba(231,255,57,0.15)] ring-1 ring-[#E7FF39]'
                              : 'bg-[#0C0D12] border-[#353740] text-[#A5A8B3] hover:border-[#E7FF39]/40'
                          }`}
                        >
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected
                                ? 'bg-[#E7FF39] text-[#0C0D12]'
                                : 'bg-[#17191F] text-[#A5A8B3]'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-heading font-bold text-xs text-white flex items-center justify-between">
                              <span>{svc.label}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#E7FF39]" />}
                            </div>
                            <p className="text-[11px] text-[#A5A8B3] leading-snug mt-0.5">
                              {svc.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.selectedServices && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.selectedServices.message}
                    </span>
                  )}
                </div>

                {/* Product Category & Objective */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Product Category *
                    </label>
                    <select
                      {...register('productCategory')}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-sm text-white"
                    >
                      {SITE_CONFIG.productCategories.map((cat) => (
                        <option key={cat.id} value={cat.title} className="bg-[#17191F] text-white">
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Campaign Objective *
                    </label>
                    <input
                      {...register('objective')}
                      type="text"
                      placeholder="e.g. New store launch in HITEC City"
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-sm text-white placeholder-[#A5A8B3]/50"
                    />
                    {errors.objective && (
                      <span className="text-xs text-red-400 mt-1 block">
                        {errors.objective.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Specifications & Conditional Product Details */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-[#353740] pb-4">
                  <h3 className="font-heading font-bold text-xl text-white uppercase">
                    Step 3: Campaign &amp; Product Requirements
                  </h3>
                  <p className="text-xs text-[#A5A8B3] mt-1">
                    Specify package, route corridors, duration and merchandise handling needs.
                  </p>
                </div>

                {/* Preferred Package */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-2">
                    Preferred Campaign Package or Plan *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setValue('preferredPackage', pkg.name)}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          selectedPackage === pkg.name
                            ? 'bg-[#24212C] border-[#E7FF39] text-white ring-1 ring-[#E7FF39]'
                            : 'bg-[#0C0D12] border-[#353740] text-[#A5A8B3] hover:text-white'
                        }`}
                      >
                        <div className="font-heading font-bold text-xs text-white">
                          {pkg.name}
                        </div>
                        <div className="text-[11px] text-[#E7FF39]/80 mt-0.5">{pkg.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Hyderabad Corridors */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-tech uppercase tracking-wider text-[#A5A8B3]">
                      Target Corridors &amp; Areas in Hyderabad *
                    </label>
                    <span className="text-[11px] text-[#E7FF39] font-tech">
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
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#E7FF39] text-[#0C0D12] border-[#E7FF39] font-bold shadow-[0_0_10px_rgba(231,255,57,0.3)]'
                              : 'bg-[#0C0D12] border-[#353740] text-[#A5A8B3] hover:text-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-[#0C0D12]" />}
                          <span>{area}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.targetAreas && (
                    <span className="text-xs text-red-400 mt-1 block">
                      {errors.targetAreas.message}
                    </span>
                  )}
                </div>

                {/* Grid for Riders, Duration, Date, Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Rider Quantity *
                    </label>
                    <input
                      {...register('riderCount', { valueAsNumber: true })}
                      type="number"
                      min={1}
                      max={50}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Preferred Duration *
                    </label>
                    <select
                      {...register('preferredDuration')}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                    >
                      <option value="3 Hours (Single Session)" className="bg-[#17191F]">3 Hours (Single Session)</option>
                      <option value="4 Hours (Single Session)" className="bg-[#17191F]">4 Hours (Single Session)</option>
                      <option value="6 Hours (Peak Windows)" className="bg-[#17191F]">6 Hours (Peak Windows)</option>
                      <option value="Weekend Blitz (2 Days)" className="bg-[#17191F]">Weekend Blitz (2 Days)</option>
                      <option value="Full Week (7 Days)" className="bg-[#17191F]">Full Week (7 Days)</option>
                      <option value="Monthly Sustained" className="bg-[#17191F]">Monthly Sustained</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Approx Start Date *
                    </label>
                    <input
                      {...register('preferredDate')}
                      type="date"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                      Estimated Budget *
                    </label>
                    <select
                      {...register('estimatedBudget')}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white"
                    >
                      <option value="₹10,000 - ₹25,000" className="bg-[#17191F]">₹10,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000" className="bg-[#17191F]">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000" className="bg-[#17191F]">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000+" className="bg-[#17191F]">₹1,00,000+</option>
                    </select>
                  </div>
                </div>

                {/* CONDITIONAL SECTION: Showcase / Product Requirements */}
                {hasShowcase && (
                  <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740] space-y-4">
                    <div className="flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-wider text-[#E7FF39]">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Product Showcase &amp; Sampling Requirements</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-tech uppercase text-[#A5A8B3] mb-1">
                          Product Type &amp; Dimensions
                        </label>
                        <input
                          {...register('productType')}
                          type="text"
                          placeholder="e.g. Sarees, Bakery Hampers, Perfume Bottles"
                          className="w-full px-3 py-2 rounded-lg bg-[#17191F] border border-[#353740] text-xs text-white focus:border-[#E7FF39] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-tech uppercase text-[#A5A8B3] mb-1">
                          Expected Display Quantity / Samples
                        </label>
                        <input
                          {...register('expectedQuantity')}
                          type="text"
                          placeholder="e.g. 5 display items, 100 sample testers"
                          className="w-full px-3 py-2 rounded-lg bg-[#17191F] border border-[#353740] text-xs text-white focus:border-[#E7FF39] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-tech uppercase text-[#A5A8B3] mb-1">
                        Sampling or Tactile Inspection Details
                      </label>
                      <textarea
                        {...register('displaySamplingReqs')}
                        rows={2}
                        placeholder="Can customers touch the items? Any temperature or moisture restrictions?"
                        className="w-full px-3 py-2 rounded-lg bg-[#17191F] border border-[#353740] text-xs text-white focus:border-[#E7FF39] focus:outline-none placeholder-[#A5A8B3]/50"
                      />
                    </div>
                  </div>
                )}

                {/* CONDITIONAL SECTION: Pre-Order Requirements */}
                {hasSellOrPreOrder && (
                  <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-wider text-[#E7FF39]">
                      <PackageCheck className="w-4 h-4" />
                      <span>Pre-Order &amp; QR Commerce Specifications</span>
                    </div>
                    <div>
                      <label className="block text-[11px] font-tech uppercase text-[#A5A8B3] mb-1">
                        Pre-Order Campaign Mechanics
                      </label>
                      <input
                        {...register('preOrderReqs')}
                        type="text"
                        placeholder="e.g. 20% launch discount voucher via QR, collection for festival delivery"
                        className="w-full px-3 py-2 rounded-lg bg-[#17191F] border border-[#353740] text-xs text-white focus:border-[#E7FF39] focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* CONDITIONAL SECTION: Delivery Requirements */}
                {hasDeliver && (
                  <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-wider text-[#E7FF39]">
                      <Truck className="w-4 h-4" />
                      <span>Hyperlocal Delivery Details</span>
                    </div>
                    <div>
                      <label className="block text-[11px] font-tech uppercase text-[#A5A8B3] mb-1">
                        Delivery Hub / Store Replenishment
                      </label>
                      <input
                        {...register('deliveryReqs')}
                        type="text"
                        placeholder="e.g. Scheduled drop-offs to retail store in Madhapur"
                        className="w-full px-3 py-2 rounded-lg bg-[#17191F] border border-[#353740] text-xs text-white focus:border-[#E7FF39] focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Branding / Artwork Notes */}
                <div>
                  <label className="block text-xs font-tech uppercase tracking-wider text-[#A5A8B3] mb-1.5">
                    Vehicle Wrap &amp; Branding Status
                  </label>
                  <textarea
                    {...register('brandingRequirements')}
                    rows={2}
                    placeholder="Do you have print-ready artwork? Would you require ADRYD Creative Studio for wrap adaptation or video reels?"
                    className="w-full px-4 py-3 rounded-xl bg-[#0C0D12] border border-[#353740] focus:border-[#E7FF39] focus:outline-none text-xs text-white placeholder-[#A5A8B3]/50"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: Review and Submit */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-[#353740] pb-4">
                  <h3 className="font-heading font-bold text-xl text-white uppercase">
                    Step 4: Review Your Campaign Brief
                  </h3>
                  <p className="text-xs text-[#A5A8B3] mt-1">
                    Please verify your requirements before submitting to our Hyderabad operations team.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740] space-y-2">
                    <div className="text-[10px] font-tech text-[#E7FF39] uppercase font-bold">
                      Client Profile
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Name:</span>
                      <span className="text-white font-bold">{watchedValues.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Company:</span>
                      <span className="text-white font-bold">{watchedValues.companyName}</span>
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Email:</span>
                      <span className="text-white font-bold">{watchedValues.email}</span>
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Mobile:</span>
                      <span className="text-white font-bold">{watchedValues.mobile}</span>
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Category:</span>
                      <span className="text-white">{watchedValues.businessCategory}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0C0D12] border border-[#353740] space-y-2">
                    <div className="text-[10px] font-tech text-[#E7FF39] uppercase font-bold">
                      Campaign Specifications
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Selected Services:</span>
                      <span className="text-[#E7FF39] font-bold">
                        {watchedValues.selectedServices?.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Package:</span>
                      <span className="text-white font-bold">{watchedValues.preferredPackage}</span>
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Target Corridors:</span>
                      <span className="text-white font-bold">
                        {watchedValues.targetAreas?.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Riders &amp; Duration:</span>
                      <span className="text-white font-bold">
                        {watchedValues.riderCount} Riders • {watchedValues.preferredDuration}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#A5A8B3] block">Estimated Budget:</span>
                      <span className="text-white font-bold">{watchedValues.estimatedBudget}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#24212C]/60 border border-[#353740] flex items-start gap-3 text-xs text-[#A5A8B3]">
                  <ShieldCheck className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Privacy &amp; Zero-Obligation:</strong> Submitting this
                    brief requests an initial route feasibility assessment and quotation. No credit card details
                    or financial commitments are processed on this website.
                  </p>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-[#353740] flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-3 rounded-xl bg-[#24212C] hover:bg-[#2D2A37] border border-[#353740] text-[#F2F3F5] text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
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
                  className="px-7 py-3 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] text-xs font-heading font-black uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] disabled:opacity-50 text-[#0C0D12] text-xs font-heading font-black uppercase tracking-wider shadow-[0_0_25px_rgba(231,255,57,0.4)] flex items-center gap-2 transition-all cursor-pointer"
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
        <div className="min-h-screen bg-[#0C0D12] flex items-center justify-center text-white font-tech">
          Loading ADRYD Campaign Planner...
        </div>
      }
    >
      <CampaignForm />
    </Suspense>
  );
}
