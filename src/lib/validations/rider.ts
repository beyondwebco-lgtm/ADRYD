import { z } from 'zod';

export const riderRegistrationSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  mobile: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15, 'Mobile number too long')
    .regex(/^[0-9+ ]+$/, 'Please enter numbers only'),
  email: z.string().email('Please enter a valid email address'),
  city: z.string().min(1, 'City is required'),
  serviceArea: z.string().min(2, 'Please enter your primary service neighbourhood/zone in Hyderabad'),
  vehicleModel: z.string().min(2, 'Please specify your electric scooter make & model'),
  vehicleOwnership: z.string().min(1, 'Please select vehicle ownership status'),
  preferredAvailability: z.string().min(1, 'Please select your preferred riding availability'),
  experienceNotes: z.string().optional(),
});

export type RiderRegistrationInput = z.infer<typeof riderRegistrationSchema>;
