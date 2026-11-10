import { z } from 'zod';

export const campaignEnquirySchema = z.object({
  // Step 1: Business Information
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company or brand name'),
  email: z.string().email('Please enter a valid business email address'),
  mobile: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15, 'Mobile number is too long')
    .regex(/^[0-9+ ]+$/, 'Please enter numbers only'),
  industry: z.string().min(1, 'Please select your industry sector'),

  // Step 2: Campaign Requirements
  objective: z.string().min(1, 'Please select your campaign objective'),
  packageType: z.string().min(1, 'Please select an advertising package'),
  city: z.string().min(1, 'City is required'),
  targetZones: z.array(z.string()).min(1, 'Please select at least one target area in Hyderabad'),
  pinCode: z.string().optional(),
  riderCount: z.number().min(1, 'At least 1 rider is required').max(50, 'Max 50 riders'),
  preferredDate: z.string().min(1, 'Please select an approximate start date'),
  duration: z.string().min(1, 'Please select campaign duration'),
  estimatedBudget: z.string().min(1, 'Please select an estimated budget range'),

  // Step 3: Additional Notes
  campaignDescription: z.string().optional(),
  brandingRequirements: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export type CampaignEnquiryInput = z.infer<typeof campaignEnquirySchema>;
