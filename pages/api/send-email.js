import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, number, subject} = req.body;

  if (!name || !email || !message || !number || !subject ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dhinesha194@gmail.com', // Replace with your Gmail
      pass: 'uhpr ehcf glvu flku', // Replace with your Gmail app password
    },
  });

  try {
    // Send email to you
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'md.mcube@gmail.com', // Your Gmail address
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      number:number
    });

    // Send thank-you email to user
    await transporter.sendMail({
      from: 'dhinesha194@gmail.com', // Your Gmail address
      to: email, // User's email address
      subject: 'Thank You for Contacting Us',
      text: `Hi ${name},\n\nThank you for reaching out. We have received your message:\n\n"${message}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Company Name`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
