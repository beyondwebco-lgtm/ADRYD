import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { refundData } from '@/data/legal/refundData';

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy | ADRYD',
  description:
    'Guidelines regarding campaign booking confirmations, customer-initiated cancellations, mobilization cost deductions, and refund processing procedures.',
  alternates: {
    canonical: 'https://adryd.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return <LegalPageLayout policy={refundData} />;
}
