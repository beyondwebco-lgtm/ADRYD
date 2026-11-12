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
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="background-color: #0C0D12; border: 1px solid #353740; padding: 16px; border-radius: 6px; text-align: center;">
              <h2 style="color: #E7FF39; margin: 0; font-size: 20px; letter-spacing: 0.05em;">ADRYD CONTACT INQUIRY</h2>
            </div>
            <div style="padding: 20px 0;">
              <p>Ticket: <strong>${ticketId}</strong></p>
              <p><strong>Name:</strong> ${validatedData.fullName}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <div style="margin-top: 15px; padding: 12px; background: #f9f9f9; border-radius: 6px;">
                <strong>Message:</strong>
                <p style="white-space: pre-wrap; margin: 6px 0 0 0;">${validatedData.message}</p>
              </div>
            </div>
            <div style="border-top: 1px solid #eee; padding-top: 10px; font-size: 11px; color: #999;">
              Received on ${timestamp} via ADRYD Web
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
