import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // { name, mail, subject, message }

    const { name, mail, subject, message } = data;

    if (!name || !mail || !subject || !message) {
      return NextResponse.json({ error: 'Alle velden zijn verplicht' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${mail}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, 
      subject: subject,
      text: message,
      html: `<p>${message}</p><p>Van: ${name} (${mail})</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Er is iets misgegaan' }, { status: 500 });
  }
}
