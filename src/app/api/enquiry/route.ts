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
          <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #353740; border-radius: 12px; background-color: #0C0D12; color: #F2F3F5;">
            <div style="background-color: #17191F; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #353740;">
              <h1 style="color: #E7FF39; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 1px;">ADRYD UPGRADE</h1>
              <p style="color: #A5A8B3; margin: 6px 0 0 0; font-size: 11px; letter-spacing: 2px;">CAMPAIGN ENQUIRY BRIEF • V3.0</p>
            </div>
            
            <div style="padding: 24px 0;">
              <p style="font-size: 12px; color: #A5A8B3;">Reference ID: <strong style="color: #E7FF39;">${submissionId}</strong></p>
              
              <h2 style="font-size: 16px; color: #E7FF39; border-bottom: 1px solid #353740; padding-bottom: 6px; margin-top: 20px;">1. Client & Business Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #F2F3F5;">
                <tr><td style="padding: 6px 0; color: #A5A8B3; width: 40%;">Full Name:</td><td><strong>${validatedData.fullName}</strong></td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Company / Brand:</td><td><strong>${validatedData.companyName}</strong></td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Email:</td><td><a href="mailto:${validatedData.email}" style="color: #E7FF39;">${validatedData.email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Mobile:</td><td>${validatedData.mobile}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Business Category:</td><td>${validatedData.businessCategory}</td></tr>
              </table>

              <h2 style="font-size: 16px; color: #E7FF39; border-bottom: 1px solid #353740; padding-bottom: 6px; margin-top: 24px;">2. Selected ADRYD Services</h2>
              <p style="font-size: 13px; color: #F2F3F5; background: #17191F; padding: 10px; border-radius: 6px; border: 1px solid #353740;">
                ${validatedData.selectedServices.join(' • ')}
              </p>

              <h2 style="font-size: 16px; color: #E7FF39; border-bottom: 1px solid #353740; padding-bottom: 6px; margin-top: 24px;">3. Campaign Specifications</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #F2F3F5;">
                <tr><td style="padding: 6px 0; color: #A5A8B3; width: 40%;">Objective:</td><td>${validatedData.objective}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Package / Plan:</td><td style="color: #E7FF39; font-weight: bold;">${validatedData.preferredPackage}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Rider Count:</td><td>${validatedData.riderCount}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Duration:</td><td>${validatedData.preferredDuration}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Start Date:</td><td>${validatedData.preferredDate}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Target City:</td><td>${validatedData.targetCity}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Target Areas:</td><td>${validatedData.targetAreas.join(', ')}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">PIN Codes:</td><td>${validatedData.pinCodes || 'Not specified'}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Estimated Budget:</td><td>${validatedData.estimatedBudget}</td></tr>
                <tr><td style="padding: 6px 0; color: #A5A8B3;">Product Category:</td><td>${validatedData.productCategory}</td></tr>
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
                  <h2 style="font-size: 16px; color: #E7FF39; border-bottom: 1px solid #353740; padding-bottom: 6px; margin-top: 24px;">4. Product & Operational Details</h2>
                  <div style="background: #17191F; padding: 14px; border-radius: 6px; border: 1px solid #353740; font-size: 12px; line-height: 1.6; color: #A5A8B3;">
                    ${validatedData.productType ? `<p><strong style="color: #F2F3F5;">Product Type:</strong> ${validatedData.productType}</p>` : ''}
                    ${validatedData.displaySamplingReqs ? `<p><strong style="color: #F2F3F5;">Display / Sampling:</strong> ${validatedData.displaySamplingReqs}</p>` : ''}
                    ${validatedData.expectedQuantity ? `<p><strong style="color: #F2F3F5;">Expected Quantity:</strong> ${validatedData.expectedQuantity}</p>` : ''}
                    ${validatedData.preOrderReqs ? `<p><strong style="color: #F2F3F5;">Pre-Order Notes:</strong> ${validatedData.preOrderReqs}</p>` : ''}
                    ${validatedData.deliveryReqs ? `<p><strong style="color: #F2F3F5;">Delivery Requirements:</strong> ${validatedData.deliveryReqs}</p>` : ''}
                    ${validatedData.brandingRequirements ? `<p><strong style="color: #F2F3F5;">Branding / Wrap Notes:</strong> ${validatedData.brandingRequirements}</p>` : ''}
                    ${validatedData.additionalNotes ? `<p><strong style="color: #F2F3F5;">Additional Notes:</strong> ${validatedData.additionalNotes}</p>` : ''}
                  </div>
                  `
                  : ''
              }
            </div>

            <div style="border-top: 1px solid #353740; padding-top: 14px; font-size: 11px; color: #A5A8B3; text-align: center;">
              Submitted on ${timestamp} via ADRYD Upgrade Platform (Hyderabad Pilot)
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
