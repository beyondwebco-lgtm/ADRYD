import { NextResponse } from 'next/server';
import { riderRegistrationSchema } from '@/lib/validations/rider';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = riderRegistrationSchema.parse(body);

    const applicationId = `ADR-RDR-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.ENQUIRY_RECIPIENT_EMAIL || 'riders@adryd.com';

    if (resendApiKey && resendApiKey.startsWith('re_')) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: 'ADRYD Partner Network <riders@adryd.com>',
        to: [recipientEmail],
        replyTo: validatedData.email,
        subject: `[New Rider Partner Interest] ${validatedData.fullName} - ${validatedData.vehicleModel} (${applicationId})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="background-color: #0C0D12; border-bottom: 3px solid #E7FF39; padding: 16px; border-radius: 6px; text-align: center;">
              <h1 style="color: #E7FF39; margin: 0; font-size: 22px;">ADRYD PARTNER NETWORK</h1>
              <p style="color: #ffffff; margin: 4px 0 0 0; font-size: 12px;">NEW RIDER INTEREST REGISTRATION</p>
            </div>
            
            <div style="padding: 20px 0;">
              <p style="font-size: 14px; color: #666;">Application ID: <strong>${applicationId}</strong></p>
              <h2 style="font-size: 16px; color: #101115; border-bottom: 1px solid #ccc; padding-bottom: 4px;">Rider &amp; Vehicle Profile</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #666; width: 35%;">Full Name:</td><td style="font-weight: bold;">${validatedData.fullName}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Mobile:</td><td>${validatedData.mobile}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Email:</td><td>${validatedData.email}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Service Zone:</td><td>${validatedData.serviceArea} (Hyderabad)</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Vehicle Model:</td><td style="font-weight: bold; color: #0C0D12;">${validatedData.vehicleModel}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Ownership:</td><td>${validatedData.vehicleOwnership}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Availability:</td><td>${validatedData.preferredAvailability}</td></tr>
              </table>
              ${
                validatedData.experienceNotes
                  ? `<div style="margin-top: 16px; padding: 10px; background: #f5f5f5; border-radius: 6px; font-size: 13px;">
                      <strong>Notes / Prior Experience:</strong><p style="margin: 4px 0 0 0;">${validatedData.experienceNotes}</p>
                    </div>`
                  : ''
              }
            </div>

            <div style="border-top: 1px solid #e0e0e0; padding-top: 10px; font-size: 11px; color: #999; text-align: center;">
              Submitted on ${timestamp} • Hyderabad EV Partner Verification Queue
            </div>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        applicationId,
        delivered: true,
        message: 'Your partner interest has been registered. Our operations team will contact you for verification.',
      });
    }

    console.log('[ADRYD Rider Interest - Dev Mode]', {
      applicationId,
      timestamp,
      data: validatedData,
    });

    return NextResponse.json({
      success: true,
      applicationId,
      delivered: false,
      mode: 'dev_mock',
      message:
        'Partner application recorded. (Note: Running in development mode without active RESEND_API_KEY).',
    });
  } catch (error: unknown) {
    console.error('Rider Registration Error:', error);
    const err = error as { errors?: unknown; message?: string };
    if (err?.errors) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Failed to process rider registration.' },
      { status: 500 }
    );
  }
}
