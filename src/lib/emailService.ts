/**
 * MA Links - Form Submission & SMTP Email Dispatch Service
 * Triggers automated customer confirmations and dual admin notifications
 */

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export interface QuoteFormData {
  name: string
  email: string
  phone?: string
  company?: string
  country?: string
  destinationPort?: string
  variety: string
  incoterm?: string
  quantity?: string
  packaging?: string
  phytosanitaryReq?: string
  message?: string
}

/**
 * Dispatches contact inquiry to /api/send-email
 */
export async function sendContactFormEmails(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact',
        data,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `Server responded with ${response.status}`)
    }

    const resJson = await response.json()
    return { success: true, message: resJson.message || 'Inquiry processed successfully' }
  } catch (error) {
    console.error('[EmailService] Error submitting contact form:', error)
    throw error
  }
}

/**
 * Dispatches commercial RFQ to /api/send-email
 */
export async function sendQuoteFormEmails(data: QuoteFormData): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'quote',
        data,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `Server responded with ${response.status}`)
    }

    const resJson = await response.json()
    return { success: true, message: resJson.message || 'Quote RFQ processed successfully' }
  } catch (error) {
    console.error('[EmailService] Error submitting quote RFQ:', error)
    throw error
  }
}
