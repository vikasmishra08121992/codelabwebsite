'use server'

import  nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // In a real-world scenario, you would use environment variables for these
  var transporter = nodemailer.createTransport({
    host: 'email-smtp.us-east-2.amazonaws.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'AKIARKLIGE3HM5KZNDWI',
        pass: 'BLC5J7lZFVautX6wdS+AEkzSW7oFvGSvNkhXc8EFS22n'
    }
});

  try {
    const info = await transporter.sendMail({
      from: 'donotreply@cadopsus.com',
      to: "info@codelabtechnolgoies.com",
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

