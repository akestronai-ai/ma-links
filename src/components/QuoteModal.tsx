import React, { useState } from "react"
import { X, Check } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    variety: "Chaunsa",
    quantity: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({
        name: "",
        email: "",
        country: "",
        variety: "Chaunsa",
        quantity: "",
        message: "",
      })
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-background border border-outline-variant/30 rounded-3xl w-full max-w-lg p-6 md:p-8 box-shadow-organic-md z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Mango organic background light accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-on-surface"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-on-surface mb-2">Quote Request Received!</h3>
            <p className="text-on-surface-variant max-w-sm">
              Thank you for choosing MA Links. Our export specialists will contact you at <strong>{formData.email}</strong> within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-display font-bold text-on-surface tracking-tight">Request an Export Quote</h3>
              <p className="text-sm text-on-surface-variant mt-1">
                Tell us about your global import requirements, and our team will prepare a custom proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Business Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Destination Country</label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. United Kingdom"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Primary Variety</label>
                <select
                  value={formData.variety}
                  onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface cursor-pointer"
                >
                  <option value="Chaunsa">Chaunsa (Sweet & Aromatic)</option>
                  <option value="Sindhri">Sindhri (Large & Honey-Sweet)</option>
                  <option value="Anwar Ratol">Anwar Ratol (Intense Flavor)</option>
                  <option value="Langra">Langra (Fibreless & Tangy)</option>
                  <option value="Dusehri">Dusehri (Rich & Juicy)</option>
                  <option value="Saroli">Saroli (Early Season)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Est. Quantity (in crates)</label>
              <input
                type="number"
                required
                min="10"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="Minimum 10 crates for exports"
                className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Custom Requirements</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention packaging size, phytosanitary requirements, or delivery schedule specs..."
                className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primary-container text-on-primary-container font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md hover:shadow-lg border-b-2 border-[#e6a100] active:scale-98 text-center mt-2 cursor-pointer"
            >
              Submit Proposal Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
