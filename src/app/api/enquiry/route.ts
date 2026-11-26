import { NextResponse } from 'next/server';
import { campaignEnquirySchema } from '@/lib/validations/campaign';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = campaignEnquirySchema.parse(body);

    const submissionId = `ADR-V3-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.ENQUIRY_RECIPIENT_EMAIL || 'enquiries@adryd.com';

    if (resendApiKey && resendApiKey.startsWith('re_')) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: 'ADRYD Upgrade <notifications@adryd.com>',
        to: [recipientEmail],
        replyTo: validatedData.email,
        subject: `[V3.0 Campaign Brief] ${validatedData.companyName} (${validatedData.preferredPackage}) - ${submissionId}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #DCECF2; border-radius: 12px; background-color: #FFFFFF; color: #172B3A;">
            <div style="background-color: #092D19; border-bottom: 3px solid #B4F000; padding: 20px; border-radius: 8px; text-align: center;">
              <h1 style="color: #B4F000; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 1px;">ADRYD CAMPAIGN BRIEF</h1>
              <p style="color: #E4EBE5; margin: 6px 0 0 0; font-size: 11px; letter-spacing: 2px;">THE MOVING MARKETPLACE • HYDERABAD PILOT</p>
            </div>
            
            <div style="padding: 24px 0;">
              <p style="font-size: 13px; color: #637786;">Reference ID: <strong style="color: #005522; font-family: monospace;">${submissionId}</strong></p>
              
              <h2 style="font-size: 15px; color: #172B3A; border-bottom: 2px solid #DCECF2; padding-bottom: 6px; margin-top: 20px;">1. Client & Business Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #172B3A;">
                <tr><td style="padding: 6px 0; color: #637786; width: 40%;">Full Name:</td><td><strong>${validatedData.fullName}</strong></td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Company / Brand:</td><td><strong>${validatedData.companyName}</strong></td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Email:</td><td><a href="mailto:${validatedData.email}" style="color: #005522;">${validatedData.email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Mobile:</td><td>${validatedData.mobile}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Business Category:</td><td>${validatedData.businessCategory}</td></tr>
              </table>

              <h2 style="font-size: 15px; color: #172B3A; border-bottom: 2px solid #DCECF2; padding-bottom: 6px; margin-top: 24px;">2. Selected ADRYD Services</h2>
              <p style="font-size: 13px; color: #172B3A; background: #F6FAFC; padding: 12px; border-radius: 8px; border: 1px solid #DCECF2;">
                ${validatedData.selectedServices.join(' • ')}
              </p>

              <h2 style="font-size: 15px; color: #172B3A; border-bottom: 2px solid #DCECF2; padding-bottom: 6px; margin-top: 24px;">3. Campaign Specifications</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #172B3A;">
                <tr><td style="padding: 6px 0; color: #637786; width: 40%;">Objective:</td><td>${validatedData.objective}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Package / Plan:</td><td style="color: #005522; font-weight: bold;">${validatedData.preferredPackage}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Rider Count:</td><td>${validatedData.riderCount}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Duration:</td><td>${validatedData.preferredDuration}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Start Date:</td><td>${validatedData.preferredDate}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Target City:</td><td>${validatedData.targetCity}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Target Areas:</td><td>${validatedData.targetAreas.join(', ')}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">PIN Codes:</td><td>${validatedData.pinCodes || 'Not specified'}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Estimated Budget:</td><td>${validatedData.estimatedBudget}</td></tr>
                <tr><td style="padding: 6px 0; color: #637786;">Product Category:</td><td>${validatedData.productCategory}</td></tr>
              </table>

              ${
                validatedData.productType ||
                validatedData.displaySamplingReqs ||
                validatedData.expectedQuantity ||
                validatedData.preOrderReqs ||
                validatedData.deliveryReqs ||
                validatedData.brandingRequirements ||
                validatedData.additionalNotes
                  ? `
                  <h2 style="font-size: 15px; color: #202124; border-bottom: 2px solid #F1F3F4; padding-bottom: 6px; margin-top: 24px;">4. Product & Operational Details</h2>
                  <div style="background: #F6F7FB; padding: 14px; border-radius: 8px; border: 1px solid #E8EAED; font-size: 13px; line-height: 1.6; color: #5F6368;">
                    ${validatedData.productType ? `<p><strong style="color: #202124;">Product Type:</strong> ${validatedData.productType}</p>` : ''}
                    ${validatedData.displaySamplingReqs ? `<p><strong style="color: #202124;">Display / Sampling:</strong> ${validatedData.displaySamplingReqs}</p>` : ''}
                    ${validatedData.expectedQuantity ? `<p><strong style="color: #202124;">Expected Quantity:</strong> ${validatedData.expectedQuantity}</p>` : ''}
                    ${validatedData.preOrderReqs ? `<p><strong style="color: #202124;">Pre-Order Notes:</strong> ${validatedData.preOrderReqs}</p>` : ''}
                    ${validatedData.deliveryReqs ? `<p><strong style="color: #202124;">Delivery Requirements:</strong> ${validatedData.deliveryReqs}</p>` : ''}
                    ${validatedData.brandingRequirements ? `<p><strong style="color: #202124;">Branding / Wrap Notes:</strong> ${validatedData.brandingRequirements}</p>` : ''}
                    ${validatedData.additionalNotes ? `<p><strong style="color: #202124;">Additional Notes:</strong> ${validatedData.additionalNotes}</p>` : ''}
                  </div>
                  `
                  : ''
              }
            </div>

            <div style="border-top: 1px solid #E8EAED; padding-top: 14px; font-size: 11px; color: #80868B; text-align: center;">
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
    console.log('[ADRYD V3.0 Enquiry Received - Dev Mode]', {
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
  } catch (error: unknown) {
    console.error('Enquiry Submission Error:', error);
    const err = error as { errors?: unknown; message?: string };
    if (err?.errors) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Failed to process campaign enquiry.' },
      { status: 500 }
    );
  }
}
