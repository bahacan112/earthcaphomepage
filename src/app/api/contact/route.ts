import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Alle Pflichtfelder müssen ausgefüllt werden.' },
        { status: 400 }
      );
    }

    // Create transporter (using Gmail SMTP as example)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@earthcap.de',
      subject: `Kontaktformular: ${subject}`,
      html: `
        <h2>Neue Nachricht vom Kontaktformular</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Diese Nachricht wurde über das Kontaktformular der Website gesendet.</small></p>
      `,
      text: `
        Neue Nachricht vom Kontaktformular
        
        Name: ${firstName} ${lastName}
        E-Mail: ${email}
        ${phone ? `Telefon: ${phone}` : ''}
        Betreff: ${subject}
        
        Nachricht:
        ${message}
        
        Diese Nachricht wurde über das Kontaktformular der Website gesendet.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}