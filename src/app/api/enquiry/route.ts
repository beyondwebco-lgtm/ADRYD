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
          <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #222222; border-radius: 12px; background-color: #000000; color: #B8B8B8;">
            <div style="background-color: #101010; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #222222;">
              <h1 style="color: #E7FF39; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 1px;">ADRYD UPGRADE</h1>
              <p style="color: #03F2FF; margin: 6px 0 0 0; font-size: 11px; letter-spacing: 2px;">CAMPAIGN ENQUIRY BRIEF • V3.0</p>
            </div>
            
            <div style="padding: 24px 0;">
              <p style="font-size: 12px; color: #888888;">Reference ID: <strong style="color: #E7FF39;">${submissionId}</strong></p>
              
              <h2 style="font-size: 16px; color: #E7FF39; border-bottom: 1px solid #222222; padding-bottom: 6px; margin-top: 20px;">1. Client & Business Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #FFFFFF;">
                <tr><td style="padding: 6px 0; color: #888888; width: 40%;">Full Name:</td><td><strong>${validatedData.fullName}</strong></td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Company / Brand:</td><td><strong>${validatedData.companyName}</strong></td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Email:</td><td><a href="mailto:${validatedData.email}" style="color: #03F2FF;">${validatedData.email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Mobile:</td><td>${validatedData.mobile}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Business Category:</td><td>${validatedData.businessCategory}</td></tr>
              </table>

              <h2 style="font-size: 16px; color: #E7FF39; border-bottom: 1px solid #222222; padding-bottom: 6px; margin-top: 24px;">2. Selected ADRYD Services</h2>
              <p style="font-size: 13px; color: #FFFFFF; background: #101010; padding: 10px; border-radius: 6px; border: 1px solid #222222;">
                ${validatedData.selectedServices.join(' • ')}
              </p>

              <h2 style="font-size: 16px; color: #E7FF39; border-bottom: 1px solid #222222; padding-bottom: 6px; margin-top: 24px;">3. Campaign Specifications</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #FFFFFF;">
                <tr><td style="padding: 6px 0; color: #888888; width: 40%;">Objective:</td><td>${validatedData.objective}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Package / Plan:</td><td style="color: #E7FF39; font-weight: bold;">${validatedData.preferredPackage}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Rider Count:</td><td>${validatedData.riderCount}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Duration:</td><td>${validatedData.preferredDuration}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Start Date:</td><td>${validatedData.preferredDate}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Target City:</td><td>${validatedData.targetCity}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Target Areas:</td><td>${validatedData.targetAreas.join(', ')}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">PIN Codes:</td><td>${validatedData.pinCodes || 'Not specified'}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Estimated Budget:</td><td>${validatedData.estimatedBudget}</td></tr>
                <tr><td style="padding: 6px 0; color: #888888;">Product Category:</td><td>${validatedData.productCategory}</td></tr>
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
                  <h2 style="font-size: 16px; color: #E7FF39; border-bottom: 1px solid #222222; padding-bottom: 6px; margin-top: 24px;">4. Product & Operational Details</h2>
                  <div style="background: #101010; padding: 14px; border-radius: 6px; border: 1px solid #222222; font-size: 12px; line-height: 1.6; color: #B8B8B8;">
                    ${validatedData.productType ? `<p><strong style="color: #FFFFFF;">Product Type:</strong> ${validatedData.productType}</p>` : ''}
                    ${validatedData.displaySamplingReqs ? `<p><strong style="color: #FFFFFF;">Display / Sampling:</strong> ${validatedData.displaySamplingReqs}</p>` : ''}
                    ${validatedData.expectedQuantity ? `<p><strong style="color: #FFFFFF;">Expected Quantity:</strong> ${validatedData.expectedQuantity}</p>` : ''}
                    ${validatedData.preOrderReqs ? `<p><strong style="color: #FFFFFF;">Pre-Order Notes:</strong> ${validatedData.preOrderReqs}</p>` : ''}
                    ${validatedData.deliveryReqs ? `<p><strong style="color: #FFFFFF;">Delivery Requirements:</strong> ${validatedData.deliveryReqs}</p>` : ''}
                    ${validatedData.brandingRequirements ? `<p><strong style="color: #FFFFFF;">Branding / Wrap Notes:</strong> ${validatedData.brandingRequirements}</p>` : ''}
                    ${validatedData.additionalNotes ? `<p><strong style="color: #FFFFFF;">Additional Notes:</strong> ${validatedData.additionalNotes}</p>` : ''}
                  </div>
                  `
                  : ''
              }
            </div>

            <div style="border-top: 1px solid #222222; padding-top: 14px; font-size: 11px; color: #888888; text-align: center;">
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
