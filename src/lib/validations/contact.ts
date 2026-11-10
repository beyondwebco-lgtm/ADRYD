import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(2, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter your message (min 10 characters)'),
});

export type ContactInput = z.infer<typeof contactSchema>;
