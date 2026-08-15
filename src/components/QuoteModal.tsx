import React, { useState, useEffect } from "react"
import { X, Check, ShieldCheck, Loader2, AlertCircle } from "lucide-react"
import { sendQuoteFormEmails } from "../lib/emailService"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialProduct?: string
}

export default function QuoteModal({ isOpen, onClose, initialProduct }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    incoterm: "FOB Karachi",
    variety: "Chaunsa Mango",
    quantity: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, variety: initialProduct }))
    }
  }, [initialProduct])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const result = await sendQuoteFormEmails({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        country: formData.country,
        incoterm: formData.incoterm,
        variety: formData.variety,
        quantity: formData.quantity,
        message: formData.message,
      })

      if (result && !result.success && result.message) {
        console.warn("[QuoteModal] Email notice:", result.message)
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        onClose()
        setFormData({
          name: "",
          company: "",
          email: "",
          country: "",
          incoterm: "FOB Karachi",
          variety: "Chaunsa Mango",
          quantity: "",
          message: "",
        })
      }, 3500)
    } catch (err) {
      console.error("[QuoteModal] Submit error:", err)
      setErrorMessage("Could not send quote request. Please try again or WhatsApp our trade desk.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-background/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-background border border-outline-variant/30 rounded-3xl w-full max-w-lg p-6 md:p-8 box-shadow-organic-md z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Background light accents */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-on-surface z-30 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-on-surface mb-2">Export RFQ Received!</h3>
            <p className="text-on-surface-variant max-w-sm text-sm">
              Thank you for choosing MA Links. Our wholesale export team will prepare an official commercial quotation & proforma invoice for <strong>{formData.email}</strong> within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary-container/40 px-2.5 py-0.5 rounded-full mb-1">
                <ShieldCheck className="w-3 h-3" /> Official B2B Wholesale Request
              </div>
              <h3 className="text-2xl font-display font-bold text-on-surface tracking-tight">Request Commercial Quote</h3>
              <p className="text-xs text-on-surface-variant mt-1">
                Provide your import specifications to receive customized FOB/CIF pricing and phytosanitary lead times.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Procurement Mgr"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Company / Importer Name</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Global Foods Trading B.V."
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Business Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="procurement@company.com"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Destination Country / Port</label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. Rotterdam / London Gateway"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Target Produce</label>
                <select
                  value={formData.variety}
                  onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary transition-colors text-on-surface cursor-pointer"
                >
                  <optgroup label="Mango Varieties">
                    <option value="Chaunsa Mango">Chaunsa Mango</option>
                    <option value="Sindhri Mango">Sindhri Mango</option>
                    <option value="Anwar Ratol Mango">Anwar Ratol Mango</option>
                    <option value="Langra Mango">Langra Mango</option>
                    <option value="Dusehri Mango">Dusehri Mango</option>
                    <option value="Saroli Mango">Saroli Mango</option>
                  </optgroup>
                  <optgroup label="Fresh Fruits">
                    <option value="Kinnow Citrus">Kinnow Citrus (Mandarin)</option>
                    <option value="Winter Guava">Winter Guava</option>
                    <option value="Ruby Red Pomegranate">Ruby Red Pomegranate</option>
                    <option value="Fresh Dates">Fresh Dates (Rutab / Aseel)</option>
                  </optgroup>
                  <optgroup label="Dry Fruits & Nuts">
                    <option value="Walnuts (Akhrot)">Walnuts (Akhrot)</option>
                    <option value="Pine Nuts (Chilgoza)">Pine Nuts (Chilgoza)</option>
                    <option value="Dried Figs (Anjeer)">Dried Figs (Anjeer)</option>
                    <option value="Dried Dates (Chuhara)">Dried Dates (Chuhara)</option>
                  </optgroup>
                  <optgroup label="Fresh Vegetables">
                    <option value="Export Onions">Export Onions (Red/Yellow)</option>
                    <option value="Fresh Potatoes">Fresh Export Potatoes</option>
                  </optgroup>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Incoterms Required</label>
                <select
                  value={formData.incoterm}
                  onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary transition-colors text-on-surface cursor-pointer"
                >
                  <option value="FOB Karachi">FOB Karachi (Port / Airport)</option>
                  <option value="CIF Destination">CIF Destination Port</option>
                  <option value="CFR Destination">CFR Destination Port</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Target Volume / Payload</label>
              <input
                type="text"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g. 1 FCL 40ft Reefer Container or 2 Pallets Air Freight"
                className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Packaging & Quarantine Requirements</label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specify carton sizing (3.5kg / 4kg / 10kg), VHT dip requirement, or temperature logging specs..."
                className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-primary transition-colors text-on-surface resize-none"
              />
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2 text-red-700 text-xs animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{errorMessage}</p>
                  <p className="mt-0.5 text-[11px]">
                    Direct WhatsApp:{" "}
                    <a 
                      href="https://wa.me/923027176692" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="underline font-bold"
                    >
                      +92 302 7176692
                    </a>
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-container text-on-primary-container font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md border-b-2 border-[#e6a100] active:scale-98 text-center text-sm cursor-pointer mt-1 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Quote Request...</span>
                </>
              ) : (
                <span>Submit Commercial RFQ</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
