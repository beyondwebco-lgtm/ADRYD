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
        <tr><td style="padding: 8px 0; color: #888888; width: 38%;">Age:</td><td style="font-weight: bold; color: #FFFFFF;">${validatedData.age || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">City / Location:</td><td style="font-weight: bold; color: #FFFFFF;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">EV Brand &amp; Model:</td><td style="font-weight: bold; color: #E7FF39;">${validatedData.vehicleModel || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Vehicle Reg Number:</td><td style="color: #FFFFFF;">${validatedData.vehicleRegNumber || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Ownership Status:</td><td style="color: #FFFFFF;">${validatedData.vehicleOwnership || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Driving Licence:</td><td style="font-weight: bold; color: #03F2FF;">${validatedData.drivingLicence || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Preferred Working Area:</td><td style="color: #FFFFFF;">${validatedData.serviceArea || 'Any Hyderabad Corridor'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Preferred Availability:</td><td style="color: #FFFFFF;">${validatedData.preferredAvailability || 'Flexible'}</td></tr>
      `;
    } else if (validatedData.partnerType === 'without_ev_rider') {
      specificRows = `
        <tr><td style="padding: 8px 0; color: #888888; width: 38%;">Age:</td><td style="font-weight: bold; color: #FFFFFF;">${validatedData.age || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">City / Location:</td><td style="font-weight: bold; color: #FFFFFF;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Driving Licence:</td><td style="font-weight: bold; color: #03F2FF;">${validatedData.drivingLicence || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Prior Riding Experience:</td><td style="color: #FFFFFF;">${validatedData.ridingExperience || 'Not specified'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Willingness for Partner EV:</td><td style="font-weight: bold; color: #E7FF39;">${validatedData.willingnessPartnerEV || 'Yes — Interested in Partner-Provided EV'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Preferred Working Area:</td><td style="color: #FFFFFF;">${validatedData.serviceArea || 'Any Hyderabad Corridor'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Preferred Availability:</td><td style="color: #FFFFFF;">${validatedData.preferredAvailability || 'Flexible'}</td></tr>
      `;
    } else {
      specificRows = `
        <tr><td style="padding: 8px 0; color: #888888; width: 38%;">Fleet Entity Name:</td><td style="font-weight: bold; color: #E7FF39;">${validatedData.companyName || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">City / Location:</td><td style="font-weight: bold; color: #FFFFFF;">${validatedData.city}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Total Fleet Count:</td><td style="font-weight: bold; color: #03F2FF;">${validatedData.fleetCount || 'Not specified'}</td></tr>
        <tr><td style="padding: 8px 0; color: #888888;">Operational Hubs:</td><td style="color: #FFFFFF;">${validatedData.fleetHubs || 'Not specified'}</td></tr>
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
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #222222; border-radius: 12px; background-color: #000000; color: #B8B8B8;">
            <div style="background-color: #101010; border-bottom: 4px solid #E7FF39; padding: 20px; border-radius: 8px; text-align: center;">
              <h1 style="color: #E7FF39; margin: 0; font-size: 20px; letter-spacing: 0.05em; text-transform: uppercase;">ADRYD PARTNER NETWORK</h1>
              <p style="color: #03F2FF; margin: 6px 0 0 0; font-size: 13px; font-weight: 500;">${typeLabel.toUpperCase()}</p>
            </div>
            
            <div style="padding: 24px 8px 16px 8px;">
              <div style="background-color: #101010; border-left: 4px solid #03F2FF; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px; border-top: 1px solid #222222; border-right: 1px solid #222222; border-bottom: 1px solid #222222;">
                <p style="margin: 0; font-size: 13px; color: #888888;">Application Reference ID</p>
                <p style="margin: 2px 0 0 0; font-size: 18px; font-weight: bold; color: #E7FF39; font-family: monospace;">${applicationId}</p>
              </div>

              <h2 style="font-size: 15px; color: #FFFFFF; border-bottom: 1px solid #222222; padding-bottom: 6px; margin: 16px 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Contact Profile</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #888888; width: 38%;">Full Name:</td><td style="font-weight: bold; color: #FFFFFF;">${validatedData.fullName}</td></tr>
                <tr><td style="padding: 8px 0; color: #888888;">Mobile / WhatsApp:</td><td style="font-weight: bold; color: #FFFFFF;"><a href="tel:${validatedData.mobile}" style="color: #03F2FF; text-decoration: none;">${validatedData.mobile}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #888888;">Email Address:</td><td style="color: #FFFFFF;">${validatedData.email || 'Not provided'}</td></tr>
              </table>

              <h2 style="font-size: 15px; color: #FFFFFF; border-bottom: 1px solid #222222; padding-bottom: 6px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Application Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                ${specificRows}
              </table>

              ${
                validatedData.additionalNotes
                  ? `
                    <div style="margin-top: 20px; padding: 14px; background: #101010; border: 1px solid #222222; border-radius: 8px; font-size: 13px;">
                      <strong style="color: #E7FF39; display: block; margin-bottom: 4px;">Additional Information / Notes:</strong>
                      <p style="margin: 0; color: #B8B8B8; white-space: pre-wrap; line-height: 1.5;">${validatedData.additionalNotes}</p>
                    </div>
                  `
                  : ''
              }
            </div>

            <div style="border-top: 1px solid #222222; padding-top: 16px; font-size: 11px; color: #888888; text-align: center; line-height: 1.5;">
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
