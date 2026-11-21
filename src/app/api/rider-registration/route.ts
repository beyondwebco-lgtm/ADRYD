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
        <tr><td style="padding: 8px 0; color: #637786; width: 38%;">Age:</td><td style="font-weight: 600; color: #172B3A;">${validatedData.age || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">City / Location:</td><td style="font-weight: 600; color: #172B3A;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">EV Brand &amp; Model:</td><td style="font-weight: 600; color: #00A8C8;">${validatedData.vehicleModel || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Vehicle Reg Number:</td><td style="color: #172B3A;">${validatedData.vehicleRegNumber || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Ownership Status:</td><td style="color: #172B3A;">${validatedData.vehicleOwnership || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Driving Licence:</td><td style="font-weight: 600; color: #1756C1;">${validatedData.drivingLicence || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Preferred Working Area:</td><td style="color: #172B3A;">${validatedData.serviceArea || 'Any Hyderabad Corridor'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Preferred Availability:</td><td style="color: #172B3A;">${validatedData.preferredAvailability || 'Flexible'}</td></tr>
      `;
    } else if (validatedData.partnerType === 'without_ev_rider') {
      specificRows = `
        <tr><td style="padding: 8px 0; color: #637786; width: 38%;">Age:</td><td style="font-weight: 600; color: #172B3A;">${validatedData.age || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">City / Location:</td><td style="font-weight: 600; color: #172B3A;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Driving Licence:</td><td style="font-weight: 600; color: #1756C1;">${validatedData.drivingLicence || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Prior Riding Experience:</td><td style="color: #172B3A;">${validatedData.ridingExperience || 'Not specified'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Willingness for Partner EV:</td><td style="font-weight: 600; color: #00A8C8;">${validatedData.willingnessPartnerEV || 'Yes — Interested in Partner-Provided EV'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Preferred Working Area:</td><td style="color: #172B3A;">${validatedData.serviceArea || 'Any Hyderabad Corridor'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Preferred Availability:</td><td style="color: #172B3A;">${validatedData.preferredAvailability || 'Flexible'}</td></tr>
      `;
    } else {
      specificRows = `
        <tr><td style="padding: 8px 0; color: #637786; width: 38%;">Fleet Entity Name:</td><td style="font-weight: 600; color: #00A8C8;">${validatedData.companyName || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">City / Location:</td><td style="font-weight: 600; color: #172B3A;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Total Fleet Count:</td><td style="font-weight: 600; color: #1756C1;">${validatedData.fleetCount || 'Not specified'}</td></tr>
        <tr><td style="padding: 8px 0; color: #637786;">Operational Hubs:</td><td style="color: #172B3A;">${validatedData.fleetHubs || 'Not specified'}</td></tr>
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
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #DCECF2; border-radius: 12px; background-color: #FFFFFF; color: #172B3A;">
            <div style="background-color: #EAF9FD; border-bottom: 3px solid #00A8C8; padding: 20px; border-radius: 8px; text-align: center;">
              <h1 style="color: #00A8C8; margin: 0; font-size: 20px; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700;">ADRYD PARTNER NETWORK</h1>
              <p style="color: #1756C1; margin: 6px 0 0 0; font-size: 13px; font-weight: 600;">${typeLabel.toUpperCase()}</p>
            </div>
            
            <div style="padding: 24px 8px 16px 8px;">
              <div style="background-color: #F6FAFC; border-left: 4px solid #00A8C8; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px; border: 1px solid #DCECF2; border-left-width: 4px;">
                <p style="margin: 0; font-size: 13px; color: #637786;">Application Reference ID</p>
                <p style="margin: 2px 0 0 0; font-size: 18px; font-weight: bold; color: #00A8C8; font-family: monospace;">${applicationId}</p>
              </div>

              <h2 style="font-size: 15px; color: #172B3A; border-bottom: 1px solid #DCECF2; padding-bottom: 6px; margin: 16px 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Contact Profile</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #637786; width: 38%;">Full Name:</td><td style="font-weight: 600; color: #172B3A;">${validatedData.fullName}</td></tr>
                <tr><td style="padding: 8px 0; color: #637786;">Mobile / WhatsApp:</td><td style="font-weight: 600; color: #172B3A;"><a href="tel:${validatedData.mobile}" style="color: #00A8C8; text-decoration: none;">${validatedData.mobile}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #637786;">Email Address:</td><td style="color: #172B3A;">${validatedData.email || 'Not provided'}</td></tr>
              </table>

              <h2 style="font-size: 15px; color: #172B3A; border-bottom: 1px solid #DCECF2; padding-bottom: 6px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Application Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                ${specificRows}
              </table>

              ${validatedData.additionalNotes
            ? `
                    <div style="margin-top: 20px; padding: 14px; background: #F6FAFC; border: 1px solid #DCECF2; border-radius: 8px; font-size: 13px;">
                      <strong style="color: #00A8C8; display: block; margin-bottom: 4px;">Additional Information / Notes:</strong>
                      <p style="margin: 0; color: #172B3A; white-space: pre-wrap; line-height: 1.5;">${validatedData.additionalNotes}</p>
                    </div>
                  `
            : ''
          }
            </div>

            <div style="border-top: 1px solid #E8EAED; padding-top: 16px; font-size: 11px; color: #80868B; text-align: center; line-height: 1.5;">
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
