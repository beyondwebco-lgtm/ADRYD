import { z } from 'zod';

export const campaignEnquirySchema = z.object({
  // 1. Business Information
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company or brand name'),
  email: z.string().email('Please enter a valid business email address'),
  mobile: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15, 'Mobile number is too long')
    .regex(/^[0-9+ ]+$/, 'Please enter numbers only'),
  businessCategory: z.string().min(1, 'Please select your business category'),

  // 2. Service Selection (Multiple allowed)
  selectedServices: z
    .array(z.string())
    .min(1, 'Please select at least one ADRYD service vertical'),

  // 3. Campaign Information
  objective: z.string().min(1, 'Please select your campaign objective'),
  preferredPackage: z.string().min(1, 'Please select a preferred package or plan'),
  riderCount: z.number().min(1, 'At least 1 rider is required').max(50, 'Max 50 riders'),
  preferredDuration: z.string().min(1, 'Please select preferred duration'),
  preferredDate: z.string().min(1, 'Please select an approximate start date'),
  targetCity: z.string().min(1, 'Target city is required'),
  targetAreas: z.array(z.string()).min(1, 'Please select at least one target area in Hyderabad'),
  pinCodes: z.string().optional(),
  estimatedBudget: z.string().min(1, 'Please select an estimated budget range'),
  productCategory: z.string().min(1, 'Please select a product category'),

  // 4. Product Requirements (Conditional)
  productType: z.string().optional(),
  displaySamplingReqs: z.string().optional(),
  expectedQuantity: z.string().optional(),
  preOrderReqs: z.string().optional(),
  deliveryReqs: z.string().optional(),
  brandingRequirements: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export type CampaignEnquiryInput = z.infer<typeof campaignEnquirySchema>;
