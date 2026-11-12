import { NextResponse } from 'next/server';
import { riderRegistrationSchema } from '@/lib/validations/rider';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = riderRegistrationSchema.parse(body);

    // Spam Honeypot Check
    if (validatedData.honeypot && validatedData.honeypot.trim().length > 0) {
      console.warn('[Spam Detected] Honeypot filled in rider registration');
      return NextResponse.json({
        success: true,
        applicationId: 'ADR-SPAM-FILTERED',
        delivered: false,
        message: 'Registration received.',
      });
    }

    const typePrefix =
      validatedData.partnerType === 'own_ev_rider'
        ? 'ADR-OWN'
        : validatedData.partnerType === 'without_ev_rider'
        ? 'ADR-NDR'
        : 'ADR-FLT';

    const applicationId = `${typePrefix}-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Subject lines per specification
    let emailSubject = 'ADRYD — New Rider Registration (Own EV)';
    let typeLabel = 'Rider With Own Electric Scooter';

    if (validatedData.partnerType === 'without_ev_rider') {
      emailSubject = 'ADRYD — New Rider Registration (Without EV)';
      typeLabel = 'Rider Seeking Partner-Provided EV';
    } else if (validatedData.partnerType === 'fleet_partner') {
      emailSubject = 'ADRYD — New Fleet Partnership Enquiry';
      typeLabel = 'Commercial EV Fleet Operator';
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.ENQUIRY_RECIPIENT_EMAIL || 'riders@adryd.com';

    // HTML Table Rows generation based on partner type
    let specificRows = '';
    if (validatedData.partnerType === 'own_ev_rider') {
      specificRows = `
        <tr><td style="padding: 8px 0; color: #666; width: 38%;">Age:</td><td style="font-weight: bold; color: #111;">${validatedData.age || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">City / Location:</td><td style="font-weight: bold; color: #111;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">EV Brand &amp; Model:</td><td style="font-weight: bold; color: #0C0D12;">${validatedData.vehicleModel || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Vehicle Reg Number:</td><td style="color: #111;">${validatedData.vehicleRegNumber || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Ownership Status:</td><td style="color: #111;">${validatedData.vehicleOwnership || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Driving Licence:</td><td style="font-weight: bold; color: #0C0D12;">${validatedData.drivingLicence || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Preferred Working Area:</td><td style="color: #111;">${validatedData.serviceArea || 'Any Hyderabad Corridor'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Preferred Availability:</td><td style="color: #111;">${validatedData.preferredAvailability || 'Flexible'}</td></tr>
      `;
    } else if (validatedData.partnerType === 'without_ev_rider') {
      specificRows = `
        <tr><td style="padding: 8px 0; color: #666; width: 38%;">Age:</td><td style="font-weight: bold; color: #111;">${validatedData.age || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">City / Location:</td><td style="font-weight: bold; color: #111;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Driving Licence:</td><td style="font-weight: bold; color: #0C0D12;">${validatedData.drivingLicence || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Prior Riding Experience:</td><td style="color: #111;">${validatedData.ridingExperience || 'Not specified'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Willingness for Partner EV:</td><td style="font-weight: bold; color: #0C0D12;">${validatedData.willingnessPartnerEV || 'Yes — Interested in Partner-Provided EV'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Preferred Working Area:</td><td style="color: #111;">${validatedData.serviceArea || 'Any Hyderabad Corridor'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Preferred Availability:</td><td style="color: #111;">${validatedData.preferredAvailability || 'Flexible'}</td></tr>
      `;
    } else {
      specificRows = `
        <tr><td style="padding: 8px 0; color: #666; width: 38%;">Fleet Entity Name:</td><td style="font-weight: bold; color: #0C0D12;">${validatedData.companyName || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">City / Location:</td><td style="font-weight: bold; color: #111;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Total Fleet Count:</td><td style="font-weight: bold; color: #0C0D12;">${validatedData.fleetCount || 'Not specified'}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Operational Hubs:</td><td style="color: #111;">${validatedData.fleetHubs || 'Not specified'}</td></tr>
      `;
    }

    if (resendApiKey && resendApiKey.startsWith('re_')) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: 'ADRYD Partner Network <riders@adryd.com>',
        to: [recipientEmail],
        replyTo: validatedData.email || undefined,
        subject: `${emailSubject} — ${validatedData.fullName} (${applicationId})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="background-color: #0C0D12; border-bottom: 4px solid #E7FF39; padding: 20px; border-radius: 8px; text-align: center;">
              <h1 style="color: #E7FF39; margin: 0; font-size: 20px; letter-spacing: 0.05em; text-transform: uppercase;">ADRYD PARTNER NETWORK</h1>
              <p style="color: #F2F3F5; margin: 6px 0 0 0; font-size: 13px; font-weight: 500;">${typeLabel.toUpperCase()}</p>
            </div>
            
            <div style="padding: 24px 8px 16px 8px;">
              <div style="background-color: #f8fafc; border-left: 4px solid #0C0D12; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px;">
                <p style="margin: 0; font-size: 13px; color: #64748b;">Application Reference ID</p>
                <p style="margin: 2px 0 0 0; font-size: 18px; font-weight: bold; color: #0C0D12; font-family: monospace;">${applicationId}</p>
              </div>

              <h2 style="font-size: 15px; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 16px 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Contact Profile</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #666; width: 38%;">Full Name:</td><td style="font-weight: bold; color: #111;">${validatedData.fullName}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Mobile / WhatsApp:</td><td style="font-weight: bold; color: #111;"><a href="tel:${validatedData.mobile}" style="color: #0284c7; text-decoration: none;">${validatedData.mobile}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Email Address:</td><td style="color: #111;">${validatedData.email || 'Not provided'}</td></tr>
              </table>

              <h2 style="font-size: 15px; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Application Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                ${specificRows}
              </table>

              ${
                validatedData.additionalNotes
                  ? `
                    <div style="margin-top: 20px; padding: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px;">
                      <strong style="color: #0f172a; display: block; margin-bottom: 4px;">Additional Information / Notes:</strong>
                      <p style="margin: 0; color: #334155; white-space: pre-wrap; line-height: 1.5;">${validatedData.additionalNotes}</p>
                    </div>
                  `
                  : ''
              }
            </div>

            <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.5;">
              Submitted on ${timestamp} • ADRYD Mobility Technologies, Hyderabad<br/>
              Notice: Expression of interest only. Subject to eligibility and vehicle availability.
            </div>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        applicationId,
        delivered: true,
        partnerType: validatedData.partnerType,
        message: 'Your partner registration has been recorded successfully. Our team will contact you.',
      });
    }

    console.log('[ADRYD Partner Registration - Dev Mode]', {
      applicationId,
      emailSubject,
      timestamp,
      data: validatedData,
    });

    return NextResponse.json({
      success: true,
      applicationId,
      delivered: false,
      mode: 'dev_mock',
      partnerType: validatedData.partnerType,
      message:
        'Partner registration recorded in development mode. (RESEND_API_KEY not configured).',
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
      { success: false, message: 'Failed to process rider registration. Please try again.' },
      { status: 500 }
    );
  }
}
