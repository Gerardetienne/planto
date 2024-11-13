import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  mail: string;
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
      subject: "Demande d'information",
      to: process.env.RECEIVER_EMAIL,
      text: `Email: ${formData.mail}\nMessage: Cette candidate voulais avoir plus d\'information sur ton page \n`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'success' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'failed' }, { status: 500 });
  }
}
