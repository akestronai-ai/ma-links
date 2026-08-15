import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export interface EmailPayload {
  type: 'contact' | 'quote';
  data: Record<string, any>;
}

// Read .env
function getEnvConfig() {
  const envPath = path.resolve(process.cwd(), '.env');
  const env: Record<string, string> = {};
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [k, ...v] = trimmed.split('=');
        if (k && v) env[k.trim()] = v.join('=').trim();
      }
    }
  }
  return {
    host: env.SMTP_SERVER || 'smtp.gmail.com',
    port: parseInt(env.SMTP_PORT || '465', 10),
    secure: env.SMTP_SECURE === 'true' || true,
    user: env.SMTP_USERNAME || 'malinks016@gmail.com',
    pass: env.SMTP_PASSWORD || 'adetarrvtgbocamk',
    from: env.SMTP_SENDER || 'malinks016@gmail.com',
    adminEmails: ['upwork491279@gmail.com', 'msaneefarooq34@gmail.com'],
  };
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const config = getEnvConfig();
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  }
  return transporter;
}

/**
 * Creates HTML email structure tailored to MA Links Warm Organic theme
 * Colors: Warm Cream (#fdf9ee), Mango Gold (#ffb300, #7e5700), Forest Sage (#2c5941, #3f6653), Charcoal (#1c1c15)
 */
function createEmailWrapper(badgeText: string, title: string, subtitle: string, bodyContent: string): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #fdf9ee;
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        color: #1c1c15;
        -webkit-font-smoothing: antialiased;
      }
      .bg-outer {
        background-color: #fdf9ee;
        padding: 28px 12px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid #e6dcce;
        box-shadow: 0 10px 30px rgba(126, 87, 0, 0.06), 0 2px 8px rgba(44, 89, 65, 0.04);
      }
      .header {
        background: linear-gradient(135deg, #1c3628 0%, #264e39 60%, #305e46 100%);
        padding: 36px 28px 30px 28px;
        text-align: center;
        border-top: 5px solid #ffb300;
      }
      .brand-title {
        color: #ffdeac;
        font-size: 26px;
        font-weight: 800;
        letter-spacing: -0.5px;
        margin: 0 0 4px 0;
        text-transform: none;
      }
      .brand-title span {
        color: #ffb300;
      }
      .brand-tagline {
        color: #c1ecd4;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 0 0 16px 0;
      }
      .header-badge {
        display: inline-block;
        background-color: rgba(193, 236, 212, 0.2);
        border: 1px solid rgba(193, 236, 212, 0.35);
        color: #dcfce7;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 5px 14px;
        border-radius: 9999px;
        margin-bottom: 12px;
      }
      .header-h1 {
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
        margin: 0 0 6px 0;
        line-height: 1.3;
      }
      .header-sub {
        color: #e2ede6;
        font-size: 13px;
        margin: 0;
        line-height: 1.4;
      }
      .content {
        padding: 32px 28px;
      }
      .intro-text {
        font-size: 15px;
        line-height: 1.6;
        color: #3b3325;
        margin: 0 0 20px 0;
      }
      .highlight-card {
        background-color: #fcf8ee;
        border-left: 4px solid #ffb300;
        border-top: 1px solid #efe5d4;
        border-right: 1px solid #efe5d4;
        border-bottom: 1px solid #efe5d4;
        border-radius: 12px;
        padding: 16px 18px;
        margin: 20px 0;
      }
      .highlight-card p {
        margin: 0;
        font-size: 13px;
        color: #514532;
        line-height: 1.5;
      }
      .table-title {
        font-size: 16px;
        font-weight: 800;
        color: #1c1c15;
        margin: 24px 0 12px 0;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .table-container {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid #e6dcce;
        background-color: #ffffff;
        margin: 14px 0 24px 0;
      }
      .table-container tr:nth-child(even) td {
        background-color: #faf6ec;
      }
      .table-container tr:nth-child(odd) td {
        background-color: #ffffff;
      }
      .table-container tr.highlight-row td {
        background-color: #fff4d9 !important;
        border-left: 3px solid #ffb300;
      }
      .table-container td {
        padding: 12px 16px;
        font-size: 13px;
        border-bottom: 1px solid #eee5d8;
        vertical-align: middle;
      }
      .table-container tr:last-child td {
        border-bottom: none;
      }
      .field-label {
        font-weight: 700;
        color: #786b58;
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 0.5px;
        width: 36%;
      }
      .field-value {
        font-weight: 600;
        color: #1c1c15;
        font-size: 13px;
      }
      .field-value strong {
        color: #7e5700;
        font-size: 14px;
      }
      .cta-wrapper {
        text-align: center;
        margin: 28px 0 12px 0;
      }
      .btn-primary {
        display: inline-block;
        background-color: #ffb300;
        color: #523700 !important;
        text-decoration: none;
        font-weight: 800;
        font-size: 14px;
        padding: 13px 28px;
        border-radius: 9999px;
        border-bottom: 2px solid #d99800;
        box-shadow: 0 4px 14px rgba(255, 179, 0, 0.3);
      }
      .btn-secondary {
        display: inline-block;
        background-color: #3f6653;
        color: #ffffff !important;
        text-decoration: none;
        font-weight: 700;
        font-size: 13px;
        padding: 11px 22px;
        border-radius: 9999px;
        box-shadow: 0 4px 12px rgba(63, 102, 83, 0.25);
      }
      .footer {
        background-color: #f7f3e8;
        padding: 24px 28px;
        text-align: center;
        border-top: 1px solid #e6dcce;
        color: #786b58;
        font-size: 12px;
        line-height: 1.6;
      }
      .footer strong {
        color: #1c1c15;
      }
      .footer a {
        color: #2c5941;
        text-decoration: none;
        font-weight: 700;
      }
      .divider {
        height: 1px;
        background-color: #eee5d8;
        margin: 24px 0;
      }
    </style>
  </head>
  <body>
    <div class="bg-outer">
      <div class="container">
        <!-- Header -->
        <div class="header">
          <div class="brand-title">MA <span>Links</span></div>
          <div class="brand-tagline">Pakistani Agricultural Produce Exporter</div>
          <div class="header-badge">${badgeText}</div>
          <h1 class="header-h1">${title}</h1>
          <p class="header-sub">${subtitle}</p>
        </div>

        <!-- Content -->
        <div class="content">
          ${bodyContent}
        </div>

        <!-- Footer -->
        <div class="footer">
          <p style="margin: 0 0 6px 0;"><strong>MA Links Global Export Operations Desk</strong></p>
          <p style="margin: 0 0 8px 0;">Multan Agricultural Belt & Karachi Port Clearance • Pakistan</p>
          <p style="margin: 0;">
            <a href="mailto:malinks016@gmail.com">malinks016@gmail.com</a> &nbsp;•&nbsp; 
            <a href="https://wa.me/923027176692">+92 302 7176692 (WhatsApp)</a>
          </p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}

export async function processEmailDispatch(payload: EmailPayload) {
  const config = getEnvConfig();
  const mailer = getTransporter();
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" });

  const { type, data } = payload;

  if (type === 'contact') {
    // 1. Customer Confirmation Email
    const customerHtml = createEmailWrapper(
      "Direct Inquiry Acknowledgment",
      "We Have Received Your Inquiry",
      "Thank you for contacting the MA Links Export Desk",
      `
      <p class="intro-text">Dear <strong>${data.name}</strong>,</p>
      <p class="intro-text">Thank you for getting in touch with <strong>MA Links</strong>. Our international produce trade managers have received your inquiry and are reviewing your commodity and logistics requirements. A dedicated export specialist will respond within <strong>12 hours</strong>.</p>
      
      <div class="highlight-card">
        <p><strong>⚡ Rapid Response Guarantee:</strong> For immediate seasonal harvest schedules or urgent shipping queries, our trade desk is available directly via WhatsApp.</p>
      </div>

      <div class="table-title">📋 Summary of Your Submission:</div>
      <table class="table-container">
        <tr>
          <td class="field-label">Subject / Topic</td>
          <td class="field-value">${data.subject || "General Wholesale Inquiry"}</td>
        </tr>
        <tr>
          <td class="field-label">Phone / WhatsApp</td>
          <td class="field-value">${data.phone || "Not provided"}</td>
        </tr>
        <tr>
          <td class="field-label">Email Provided</td>
          <td class="field-value">${data.email}</td>
        </tr>
        <tr>
          <td class="field-label">Message Details</td>
          <td class="field-value" style="white-space: pre-wrap;">${data.message || "N/A"}</td>
        </tr>
        <tr>
          <td class="field-label">Time Logged</td>
          <td class="field-value">${timestamp} PKT</td>
        </tr>
      </table>

      <div class="cta-wrapper">
        <a class="btn-primary" href="https://wa.me/923027176692?text=Hello%20MA%20Links%2C%20following%20up%20on%20my%20inquiry%20(${encodeURIComponent(data.name)})">
          Chat Directly on WhatsApp Desk (+92 302 7176692)
        </a>
      </div>
      `
    );

    // 2. Admin Lead Notification Email
    const adminHtml = createEmailWrapper(
      "🚨 New Website Lead",
      "New Contact Inquiry Received",
      `From: ${data.name} (${data.email})`,
      `
      <p class="intro-text">A new potential client has submitted an inquiry through the <strong>MA Links</strong> contact channel:</p>
      
      <table class="table-container">
        <tr class="highlight-row">
          <td class="field-label">Client Name</td>
          <td class="field-value"><strong>${data.name}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Email Address</td>
          <td class="field-value"><a href="mailto:${data.email}" style="color: #7e5700; font-weight: 700; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <td class="field-label">Phone / WhatsApp</td>
          <td class="field-value">${data.phone ? `<a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #2c5941; font-weight: 700; text-decoration: none;">${data.phone}</a>` : "Not provided"}</td>
        </tr>
        <tr>
          <td class="field-label">Inquiry Subject</td>
          <td class="field-value">${data.subject || "General Inquiry"}</td>
        </tr>
        <tr>
          <td class="field-label">Message Content</td>
          <td class="field-value" style="white-space: pre-wrap; font-weight: 500;">${data.message}</td>
        </tr>
        <tr>
          <td class="field-label">Receipt Time</td>
          <td class="field-value">${timestamp} PKT</td>
        </tr>
      </table>

      <div class="cta-wrapper">
        <a class="btn-primary" href="mailto:${data.email}?subject=Re:%20MA%20Links%20Inquiry%20-%20${encodeURIComponent(data.name)}">
          Reply to ${data.name} via Email
        </a>
      </div>
      `
    );

    // Send customer confirmation
    const custPromise = mailer.sendMail({
      from: `"MA Links Export Desk" <${config.from}>`,
      to: data.email,
      subject: "Inquiry Confirmation - MA Links Export Desk",
      html: customerHtml,
    });

    // Send admin notification
    const adminPromise = mailer.sendMail({
      from: `"MA Links Leads" <${config.from}>`,
      to: config.adminEmails.join(', '),
      subject: `🚨 New Contact Lead: ${data.name} (${data.subject || "General Inquiry"})`,
      html: adminHtml,
    });

    await Promise.all([custPromise, adminPromise]);
    return { success: true, message: "Contact inquiry emails sent to customer and admins." };

  } else if (type === 'quote') {
    // 1. Customer Confirmation Email
    const customerHtml = createEmailWrapper(
      "Official RFQ Acknowledgment",
      "Commercial RFQ Received",
      `Inquiry for ${data.variety} • MA Links Wholesale Export Division`,
      `
      <p class="intro-text">Dear <strong>${data.name}</strong> ${data.company ? `(${data.company})` : ""},</p>
      <p class="intro-text">Thank you for submitting an official Request for Quotation (RFQ) to <strong>MA Links</strong>. Our commercial export department is reviewing your commodity parameters and preparing an official proforma invoice with current seasonal freight calculations.</p>
      
      <div class="highlight-card">
        <p><strong>📑 Proforma Quotation Notice:</strong> Official FOB Karachi & CIF freight quotes including phytosanitary inspection certificates will be delivered to <strong>${data.email}</strong> within <strong>24 business hours</strong>.</p>
      </div>

      <div class="table-title">📦 Your RFQ Specifications:</div>
      <table class="table-container">
        <tr class="highlight-row">
          <td class="field-label">Target Commodity</td>
          <td class="field-value"><strong>${data.variety}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Volume / Payload</td>
          <td class="field-value">${data.quantity || "Standard Reefer Container"}</td>
        </tr>
        <tr>
          <td class="field-label">Preferred Incoterm</td>
          <td class="field-value">${data.incoterm || "FOB Karachi Port"}</td>
        </tr>
        <tr>
          <td class="field-label">Destination Port / Country</td>
          <td class="field-value">${data.destinationPort || data.country || "Not specified"}</td>
        </tr>
        ${data.packaging ? `
        <tr>
          <td class="field-label">Packaging Standard</td>
          <td class="field-value">${data.packaging}</td>
        </tr>
        ` : ""}
        ${data.phytosanitaryReq ? `
        <tr>
          <td class="field-label">Phytosanitary & DPP</td>
          <td class="field-value">${data.phytosanitaryReq}</td>
        </tr>
        ` : ""}
        ${data.message ? `
        <tr>
          <td class="field-label">Additional Caliber / Brix Notes</td>
          <td class="field-value" style="white-space: pre-wrap;">${data.message}</td>
        </tr>
        ` : ""}
        <tr>
          <td class="field-label">Submission Date</td>
          <td class="field-value">${timestamp} PKT</td>
        </tr>
      </table>

      <div class="cta-wrapper">
        <a class="btn-primary" href="https://wa.me/923027176692?text=Hello%20MA%20Links%2C%20following%20up%20on%20my%20RFQ%20for%20${encodeURIComponent(data.variety)}%20(${encodeURIComponent(data.name)})">
          Direct WhatsApp Export Desk (+92 302 7176692)
        </a>
      </div>
      `
    );

    // 2. Admin Lead Notification Email
    const adminHtml = createEmailWrapper(
      "⚡ HIGH PRIORITY RFQ LEAD",
      `New Commercial RFQ: ${data.variety}`,
      `Client: ${data.name} ${data.company ? `• ${data.company}` : ""}`,
      `
      <p class="intro-text">A new wholesale commercial RFQ has been submitted on the export portal:</p>
      
      <table class="table-container">
        <tr class="highlight-row">
          <td class="field-label">Target Produce / Variety</td>
          <td class="field-value"><strong>${data.variety}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Client Name</td>
          <td class="field-value"><strong>${data.name}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Company / Importer</td>
          <td class="field-value">${data.company || "Individual Importer"}</td>
        </tr>
        <tr>
          <td class="field-label">Email Address</td>
          <td class="field-value"><a href="mailto:${data.email}" style="color: #7e5700; font-weight: 700; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <td class="field-label">Phone / WhatsApp</td>
          <td class="field-value">${data.phone ? `<a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #2c5941; font-weight: 700; text-decoration: none;">${data.phone}</a>` : "Not provided"}</td>
        </tr>
        <tr>
          <td class="field-label">Destination Port</td>
          <td class="field-value">${data.destinationPort ? `${data.destinationPort} (${data.country || ""})` : data.country || "Not specified"}</td>
        </tr>
        <tr>
          <td class="field-label">Volume / Quantity</td>
          <td class="field-value">${data.quantity || "N/A"}</td>
        </tr>
        <tr>
          <td class="field-label">Incoterm</td>
          <td class="field-value">${data.incoterm || "FOB Karachi"}</td>
        </tr>
        ${data.packaging ? `
        <tr>
          <td class="field-label">Packaging Standard</td>
          <td class="field-value">${data.packaging}</td>
        </tr>
        ` : ""}
        ${data.phytosanitaryReq ? `
        <tr>
          <td class="field-label">Phytosanitary & DPP</td>
          <td class="field-value">${data.phytosanitaryReq}</td>
        </tr>
        ` : ""}
        ${data.message ? `
        <tr>
          <td class="field-label">Special Notes</td>
          <td class="field-value" style="white-space: pre-wrap; font-weight: 500;">${data.message}</td>
        </tr>
        ` : ""}
        <tr>
          <td class="field-label">Timestamp</td>
          <td class="field-value">${timestamp} PKT</td>
        </tr>
      </table>

      <div class="cta-wrapper">
        <a class="btn-primary" href="mailto:${data.email}?subject=Official%20Commercial%20Quotation%20-%20MA%20Links%20(${encodeURIComponent(data.variety)})">
          Prepare & Email Quotation to ${data.name}
        </a>
      </div>
      `
    );

    // Send customer confirmation
    const custPromise = mailer.sendMail({
      from: `"MA Links Export Desk" <${config.from}>`,
      to: data.email,
      subject: `Commercial RFQ Received: ${data.variety} - MA Links Export Desk`,
      html: customerHtml,
    });

    // Send admin notification
    const adminPromise = mailer.sendMail({
      from: `"MA Links RFQ Desk" <${config.from}>`,
      to: config.adminEmails.join(', '),
      subject: `📦 [NEW RFQ LEAD] ${data.variety} - ${data.name} ${data.company ? `(${data.company})` : ""}`,
      html: adminHtml,
    });

    await Promise.all([custPromise, adminPromise]);
    return { success: true, message: "Quote RFQ emails sent to customer and admins." };
  }

  throw new Error(`Unknown form submission type: ${type}`);
}
