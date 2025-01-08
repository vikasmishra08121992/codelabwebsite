'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use SSL
    auth: {
      user: 'info@codelabtechnologies.com', // Replace with your email
      pass: 'rnpy dzuq ldev einz', // Replace with your app password
    },
  });
  try {
    const info = await transporter.sendMail({
      from: 'info@codelabtechnologies.com',
      to: "info@codelabtechnologies.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email" };
  }
}

