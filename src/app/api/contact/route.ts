import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const ticketId = `ADR-CNT-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.ENQUIRY_RECIPIENT_EMAIL || 'support@adryd.com';

    if (resendApiKey && resendApiKey.startsWith('re_')) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: 'ADRYD Contact <contact@adryd.com>',
        to: [recipientEmail],
        replyTo: validatedData.email,
        subject: `[Contact Message] ${validatedData.subject} (${ticketId})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #DCECF2; border-radius: 12px; background-color: #FFFFFF; color: #172B3A;">
            <div style="background-color: #000000; border-bottom: 3px solid #B4F000; padding: 20px; border-radius: 8px; text-align: center;">
              <h2 style="color: #B4F000; margin: 0; font-size: 20px; letter-spacing: 0.05em; font-weight: 800;">ADRYD CONTACT INQUIRY</h2>
            </div>
            <div style="padding: 24px 0; color: #637786; font-size: 14px; line-height: 1.6;">
              <p>Reference Ticket: <strong style="color: #0A9BE0; font-family: monospace;">${ticketId}</strong></p>
              <p><strong style="color: #172B3A;">Name:</strong> ${validatedData.fullName}</p>
              <p><strong style="color: #172B3A;">Email:</strong> ${validatedData.email}</p>
              <p><strong style="color: #172B3A;">Phone:</strong> ${validatedData.phone}</p>
              <p><strong style="color: #172B3A;">Subject:</strong> ${validatedData.subject}</p>
              <div style="margin-top: 15px; padding: 14px; background: #F6FAFC; border: 1px solid #DCECF2; border-radius: 8px;">
                <strong style="color: #172B3A;">Message:</strong>
                <p style="white-space: pre-wrap; margin: 6px 0 0 0; color: #172B3A;">${validatedData.message}</p>
              </div>
            </div>
            <div style="border-top: 1px solid #DCECF2; padding-top: 12px; font-size: 11px; color: #637786; text-align: center;">
              Received on ${timestamp} via ADRYD Web Platform
            </div>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        ticketId,
        message: 'Thank you for reaching out. Our team will respond shortly.',
      });
    }

    console.log('[ADRYD General Contact - Dev Mode]', {
      ticketId,
      timestamp,
      data: validatedData,
    });

    return NextResponse.json({
      success: true,
      ticketId,
      mode: 'dev_mock',
      message: 'Message received. (Dev mode active).',
    });
  } catch (error: unknown) {
    console.error('Contact Form Error:', error);
    const err = error as { errors?: unknown; message?: string };
    if (err?.errors) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Failed to send contact message.' },
      { status: 500 }
    );
  }
}
