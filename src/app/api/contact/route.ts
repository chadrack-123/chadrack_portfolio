import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    // Note: You'll need to set up environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'chadrackmulamba2@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // App password from Gmail
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'chadrackmulamba2@gmail.com',
      to: 'chadrackmulamba2@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 3px solid #4F46E5; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Email:</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a></p>
            </div>
            <div style="margin-top: 20px; padding: 20px; background-color: #f9fafb; border-left: 4px solid #4F46E5; border-radius: 4px;">
              <h3 style="margin-top: 0; color: #333;">Message:</h3>
              <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
