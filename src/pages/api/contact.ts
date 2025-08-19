import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import formidable, { Fields, Files } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  info?: string;
  references?: string;
  service?: string;
  message?: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse form data with files
    const form = formidable({
      multiples: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB max file size
    });

    const [fields, files] = await form.parse(req) as [Fields, Files];

    // Extract form data with type safety
    const formData: FormData = {};
    Object.keys(fields).forEach((key: string) => {
      formData[key as keyof FormData] = fields[key]?.[0];
    });

    const { name, email, phone, topic, info, references, service, message } = formData;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
      },
    });

    // Determine email subject based on form type
    const subject = topic 
      ? `Wikipedia Page Request: ${topic} - ${name}`
      : `General Inquiry: ${service || 'No service'} - ${name}`;

    // Prepare attachments
    const attachments: nodemailer.SendMailOptions['attachments'] = [];
    if (files && files.file) {
      const fileList = Array.isArray(files.file) ? files.file : [files.file];
      
      for (const file of fileList) {
        if (file.filepath) {
          attachments.push({
            filename: file.originalFilename || 'attachment',
            content: fs.createReadStream(file.filepath),
          });
        }
      }
    }

    // Email content
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">${topic ? 'Wikipedia Page Request' : 'General Contact Form'}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>Name</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>Email</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>Phone</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            ` : ''}
            ${topic ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>Topic</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${topic}</td>
            </tr>
            ` : ''}
            ${info ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>Available Info</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${info}</td>
            </tr>
            ` : ''}
            ${references ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>References</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${references}</td>
            </tr>
            ` : ''}
            ${service ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>Service</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${service}</td>
            </tr>
            ` : ''}
            ${message ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>Message</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9fafb;"><strong>Date</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          
          ${attachments.length > 0 ? `
          <div style="margin-top: 20px;">
            <p><strong>Attachments (${attachments.length}):</strong></p>
            <ul>
              ${attachments.map(att => `<li>${att.filename}</li>`).join('')}
            </ul>
          </div>
          ` : ''}

          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #2563eb;">
            <p style="margin: 0;"><strong>Quick Actions:</strong></p>
            <p style="margin: 5px 0;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">
                📧 Reply to ${name}
              </a>
            </p>
            ${phone ? `
            <p style="margin: 5px 0;">
              <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">
                📞 Call ${phone}
              </a>
            </p>
            ` : ''}
          </div>
        </div>
      `,
      attachments: attachments,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL_USER!,
      to: email!,
      subject: topic ? 'Wikipedia Page Request Received - WikipagePro' : 'Thank you for contacting WikipagePro!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Hello ${name},</p>
          
          ${topic ? `
          <p>We've received your Wikipedia page request for <strong>${topic}</strong> and will review it shortly.</p>
          <p>Our team will assess the notability and available information, then contact you within 24-48 hours.</p>
          ` : `
          <p>We've received your message and will review it shortly. Our team typically responds within 24 hours.</p>
          `}

          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your inquiry details:</strong></p>
            ${topic ? `<p>Topic: ${topic}</p>` : ''}
            ${service ? `<p>Service: ${service}</p>` : ''}
            ${message ? `<p>Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>` : ''}
          </div>

          <p>In the meantime, feel free to connect with us on Telegram for immediate assistance:</p>
          <p>
            <a href="https://t.me/wikipagepro" style="color: #2563eb; text-decoration: none;">
              💬 Chat with us on Telegram
            </a>
          </p>

          <p>Best regards,<br/>The WikipagePro Team</p>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    // Clean up uploaded files
    if (files && files.file) {
      const fileList = Array.isArray(files.file) ? files.file : [files.file];
      for (const file of fileList) {
        if (file.filepath) {
          fs.unlinkSync(file.filepath);
        }
      }
    }

    res.status(200).json({ success: true, message: 'Form submitted successfully' });

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
}