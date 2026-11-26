import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(2, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter your message (min 10 characters)'),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge the Privacy Policy and agree to Terms & Conditions',
  }),
  marketingConsent: z.boolean().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
