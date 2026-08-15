/**
 * Pure Frontend Email Dispatch Script
 * Handles form submission and SMTP email transmission
 */
import { sendContactFormEmails, sendQuoteFormEmails } from './lib/emailService'

export { sendContactFormEmails, sendQuoteFormEmails }

export default {
  sendContactFormEmails,
  sendQuoteFormEmails
}
