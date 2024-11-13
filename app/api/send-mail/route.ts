import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  firstName: string;
  mail: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const formData: FormData = await req.json();

    // Configure Nodemailer with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT), // Convert string to number
      secure: false, // TLS requires 'secure' to be false
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create email data
    const mailOptions = {
      from: process.env.SMTP_USER,
      subject: formData.subject,
      to: process.env.RECEIVER_EMAIL,
      text: `Nom: ${formData.firstName}\nEmail: ${formData.mail}\nMessage: ${formData.message}\n`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'success' });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'failed' }, { status: 500 });
  }
}
