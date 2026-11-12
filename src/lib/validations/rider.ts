import { z } from 'zod';

export const riderRegistrationSchema = z
  .object({
    partnerType: z.enum(['own_ev_rider', 'without_ev_rider', 'fleet_partner']),

    // Common Personal / Contact Fields
    fullName: z.string().min(2, 'Please enter your full name (or contact person name)'),
    mobile: z
      .string()
      .min(10, 'Please enter a valid 10-digit mobile or WhatsApp number')
      .max(15, 'Mobile number too long')
      .regex(/^[0-9+ ]+$/, 'Please enter numbers only'),
    email: z
      .string()
      .email('Please enter a valid email address')
      .optional()
      .or(z.literal('')),
    city: z.string().min(1, 'City or location is required'),
    age: z.string().optional(),

    // Driving & Location Preferences (Option 1 & 2)
    drivingLicence: z.string().optional(),
    serviceArea: z.string().optional(),
    preferredAvailability: z.string().optional(),

    // Option 1 Specific: Own EV Rider
    vehicleModel: z.string().optional(),
    vehicleRegNumber: z.string().optional(),
    vehicleOwnership: z.string().optional(),

    // Option 2 Specific: Without EV Rider
    ridingExperience: z.string().optional(),
    willingnessPartnerEV: z.string().optional(),

    // Option 3 Specific: Fleet Partner
    companyName: z.string().optional(),
    fleetCount: z.string().optional(),
    fleetHubs: z.string().optional(),

    // Common Textarea Notes & Honeypot
    additionalNotes: z.string().optional(),
    honeypot: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.partnerType === 'own_ev_rider') {
      if (!data.age || data.age.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please specify your age (must be 18+)',
          path: ['age'],
        });
      }
      if (!data.vehicleModel || data.vehicleModel.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please enter your electric scooter brand & model',
          path: ['vehicleModel'],
        });
      }
      if (!data.drivingLicence || data.drivingLicence.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please select your driving licence status',
          path: ['drivingLicence'],
        });
      }
    } else if (data.partnerType === 'without_ev_rider') {
      if (!data.age || data.age.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please specify your age (must be 18+)',
          path: ['age'],
        });
      }
      if (!data.drivingLicence || data.drivingLicence.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please select your driving licence status',
          path: ['drivingLicence'],
        });
      }
    } else if (data.partnerType === 'fleet_partner') {
      if (!data.companyName || data.companyName.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Please enter your fleet company or entity name',
          path: ['companyName'],
        });
      }
    }
  });

export type RiderRegistrationInput = z.infer<typeof riderRegistrationSchema>;
