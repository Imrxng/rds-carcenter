import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, mail, subject, message } = data;

    if (!name || !mail || !subject || !message) {
      return NextResponse.json({ error: 'Alle velden zijn verplicht' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,        
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,     
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; background-color: #e6e6e6; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; padding: 20px;">
          <h2 style="color: #FE3900; margin-bottom: 20px;">Nieuw bericht van contactformulier</h2>

          <div style="margin-bottom: 15px;">
            <strong>Naam:</strong>
            <p style="margin: 5px 0 0 0;">${name}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong>E-mail:</strong>
            <p style="margin: 5px 0 0 0;">${mail}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong>Onderwerp:</strong>
            <p style="margin: 5px 0 0 0;">${subject}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong>Bericht:</strong>
            <p style="margin: 5px 0 0 0; white-space: pre-line;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #888; margin-top: 20px;">Verstuurd via RDS Carcenter Contactformulier</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${mail}>`,        
      to: process.env.SMTP_USER,          
      subject: `Nieuw contactformulier bericht: ${subject}`,
      text: `Naam: ${name}\nE-mail: ${mail}\nOnderwerp: ${subject}\nBericht:\n${message}`,
      html: htmlMessage,
      replyTo: `${name} <${mail}>`,       
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Er is iets misgegaan' }, { status: 500 });
  }
}
