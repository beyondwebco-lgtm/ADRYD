import { NextResponse } from 'next/server';
import { campaignEnquirySchema } from '@/lib/validations/campaign';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = campaignEnquirySchema.parse(body);

    const submissionId = `ADR-CMP-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.ENQUIRY_RECIPIENT_EMAIL || 'enquiries@adryd.com';

    if (resendApiKey && resendApiKey.startsWith('re_')) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: 'ADRYD Platform <notifications@adryd.com>',
        to: [recipientEmail],
        replyTo: validatedData.email,
        subject: `[New Campaign Brief] ${validatedData.companyName} (${validatedData.packageType}) - ${submissionId}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="background-color: #730018; padding: 16px; border-radius: 6px; text-align: center;">
              <h1 style="color: #FFE500; margin: 0; font-size: 24px; font-weight: 900;">ADRYD</h1>
              <p style="color: #ffffff; margin: 4px 0 0 0; font-size: 12px; letter-spacing: 2px;">CAMPAIGN ENQUIRY BRIEF</p>
            </div>
            
            <div style="padding: 20px 0;">
              <p style="font-size: 14px; color: #666;">Reference ID: <strong>${submissionId}</strong></p>
              <h2 style="font-size: 18px; color: #101115; border-bottom: 2px solid #730018; padding-bottom: 6px;">Client Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 6px 0; color: #666; width: 35%;">Full Name:</td><td style="font-weight: bold;">${validatedData.fullName}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Company:</td><td style="font-weight: bold;">${validatedData.companyName}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Email:</td><td><a href="mailto:${validatedData.email}">${validatedData.email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Mobile:</td><td>${validatedData.mobile}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Industry:</td><td>${validatedData.industry}</td></tr>
              </table>

              <h2 style="font-size: 18px; color: #101115; border-bottom: 2px solid #730018; padding-bottom: 6px;">Campaign Requirements</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #666; width: 35%;">Package:</td><td style="font-weight: bold; color: #730018;">${validatedData.packageType}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Objective:</td><td>${validatedData.objective}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Target Zones:</td><td>${validatedData.targetZones.join(', ')}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Riders Count:</td><td>${validatedData.riderCount}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Duration:</td><td>${validatedData.duration}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Preferred Date:</td><td>${validatedData.preferredDate}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Budget Range:</td><td>${validatedData.estimatedBudget}</td></tr>
              </table>

              ${
                validatedData.campaignDescription
                  ? `<div style="margin-top: 20px; padding: 12px; background: #f9f9f9; border-radius: 6px;">
                      <strong style="font-size: 13px; color: #333;">Brief Description:</strong>
                      <p style="margin: 4px 0 0 0; font-size: 13px; color: #555;">${validatedData.campaignDescription}</p>
                    </div>`
                  : ''
              }
            </div>

            <div style="border-top: 1px solid #e0e0e0; padding-top: 12px; font-size: 11px; color: #999; text-align: center;">
              Submitted on ${timestamp} via ADRYD Web Platform (Hyderabad Pilot)
            </div>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        submissionId,
        delivered: true,
        message: 'Your campaign brief has been received. Our planning team will reach out within 24 hours.',
      });
    }

    // Development fallback when RESEND_API_KEY is not configured
    console.log('[ADRYD Enquiry Received - Dev Mode]', {
      submissionId,
      timestamp,
      data: validatedData,
    });

    return NextResponse.json({
      success: true,
      submissionId,
      delivered: false,
      mode: 'dev_mock',
      message:
        'Campaign brief registered successfully. (Note: Running in development mode without active RESEND_API_KEY).',
    });
  } catch (error: any) {
    console.error('Enquiry Submission Error:', error);
    if (error?.errors) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Failed to process campaign enquiry.' },
      { status: 500 }
    );
  }
}
