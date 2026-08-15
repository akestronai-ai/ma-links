import React, { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Truck, 
  Building2, 
  Box,
  Loader2,
  AlertCircle
} from "lucide-react"
import { sendQuoteFormEmails } from "../lib/emailService"

export default function QuotePage() {
  const [searchParams] = useSearchParams()
  const initialProductParam = searchParams.get("product") || "Kinnow (Citrus)"

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    destinationPort: "",
    variety: initialProductParam,
    incoterm: "FOB Karachi Port (Sea Reefer)",
    quantity: "1 FCL 40ft High-Cube Reefer Container (~24-28 MT)",
    packaging: "Standard Corrugated Export Cartons",
    phytosanitaryReq: "DPP Mandatory Export Certificate",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (searchParams.get("product")) {
      setFormData(prev => ({
        ...prev,
        variety: searchParams.get("product") || prev.variety,
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const result = await sendQuoteFormEmails(formData)
      if (result && !result.success && result.message) {
        console.warn("[QuotePage] Email result notice:", result.message)
      }
      setSubmitted(true)
    } catch (err) {
      console.error("[QuotePage] Submission error:", err)
      setErrorMessage("Could not transmit RFQ automatically. Please try again or message our WhatsApp export desk directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 md:py-8">
      
      {/* Header Area */}
      <div className="text-center max-w-3xl mx-auto mb-8 animate-in fade-in duration-500">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/40 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
          <FileText className="w-3.5 h-3.5 text-primary" /> Official B2B Wholesale Request for Quotation (RFQ)
        </div>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-on-surface tracking-tight">
          Request Commercial Export Quotation
        </h1>
        <p className="mt-2.5 font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
          Provide your import specifications below. Our wholesale export department will issue an official proforma invoice and FOB/CIF quotation within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div className="max-w-2xl mx-auto bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-8 md:p-12 text-center shadow-md animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-secondary/15 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-on-surface mb-2">
            Commercial RFQ Received!
          </h2>
          <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed mb-6">
            Thank you for choosing MA Links. Our export pricing desk is reviewing your requirements for <strong>{formData.variety}</strong> ({formData.quantity}). A detailed commercial quotation with current FOB/CIF freight schedules will be sent to <strong>{formData.email}</strong>.
          </p>

          <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/15 text-xs text-left max-w-md mx-auto mb-6 flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Target Commodity:</span>
              <strong className="text-on-surface">{formData.variety}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Incoterm:</span>
              <strong className="text-on-surface">{formData.incoterm}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Destination Port:</span>
              <strong className="text-on-surface">{formData.destinationPort || formData.country}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Volume:</span>
              <strong className="text-on-surface">{formData.quantity}</strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary-container text-on-primary-container font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
            <Link
              to="/catalog"
              className="bg-secondary text-on-secondary font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-secondary/90 transition-colors"
            >
              Back to Produce Catalog
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 md:p-10 shadow-xs max-w-4xl mx-auto">
          
          {/* Section 1: Commodity Selection */}
          <div className="mb-8">
            <h3 className="text-base font-display font-bold text-on-surface mb-4 flex items-center gap-2 pb-2 border-b border-outline-variant/15">
              <Box className="w-4 h-4 text-primary" />
              1. Produce & Harvest Selection
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Target Produce <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.variety}
                  onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <optgroup label="Winter & Fresh Citrus">
                    <option value="Kinnow (Citrus)">Kinnow (Citrus / Mandarin)</option>
                    <option value="Winter Guava">Winter Guava</option>
                    <option value="Ruby Red Pomegranate">Ruby Red Pomegranate</option>
                    <option value="Fresh Dates (Rutab / Aseel)">Fresh Dates (Rutab / Aseel)</option>
                  </optgroup>
                  <optgroup label="Dry Fruits & High-Altitude Nuts">
                    <option value="Walnuts (Akhrot)">Walnuts (Akhrot - In-Shell & Kernels)</option>
                    <option value="Pine Nuts (Chilgoza)">Pine Nuts (Chilgoza - Raw & Roasted)</option>
                    <option value="Dried Figs (Anjeer)">Dried Figs (Anjeer)</option>
                    <option value="Dried Dates (Chuhara)">Dried Dates (Chuhara Bulk)</option>
                  </optgroup>
                  <optgroup label="Summer Mango Varieties">
                    <option value="Chaunsa Mango">Chaunsa Mango (King Variety)</option>
                    <option value="Sindhri Mango">Sindhri Mango</option>
                    <option value="Anwar Ratol Mango">Anwar Ratol Mango</option>
                    <option value="Langra Mango">Langra Mango</option>
                    <option value="Dusehri Mango">Dusehri Mango</option>
                    <option value="Saroli Mango">Saroli Mango</option>
                  </optgroup>
                  <optgroup label="Fresh Vegetables">
                    <option value="Export Red Onions">Export Red Onions (Mesh Net Bags)</option>
                    <option value="Fresh Export Potatoes">Fresh Export Potatoes (Mozika / Santana)</option>
                  </optgroup>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Order Volume / Shipment Size <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="1 FCL 40ft High-Cube Reefer Container (~24-28 MT)">
                    1 FCL 40ft High-Cube Reefer Container (~24–28 MT)
                  </option>
                  <option value="Multiple 40ft Reefer Containers (Seasonal Program)">
                    Multiple 40ft Reefer Containers (Seasonal Program)
                  </option>
                  <option value="1 FCL 20ft Reefer Container (~12-14 MT)">
                    1 FCL 20ft Reefer Container (~12–14 MT)
                  </option>
                  <option value="Air Freight Pallets (500kg – 2,000kg)">
                    Air Freight Pallets (500kg – 2,000kg)
                  </option>
                  <option value="Custom Trial Shipment (LCL)">
                    Custom Trial Shipment (LCL)
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Logistics & Incoterms */}
          <div className="mb-8">
            <h3 className="text-base font-display font-bold text-on-surface mb-4 flex items-center gap-2 pb-2 border-b border-outline-variant/15">
              <Truck className="w-4 h-4 text-secondary" />
              2. Shipping Incoterms & Destination Port
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Incoterms Required <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.incoterm}
                  onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="FOB Karachi Port (Sea Reefer)">FOB Karachi Port (Sea Reefer)</option>
                  <option value="CIF Destination Port">CIF Destination Port</option>
                  <option value="CFR Destination Port">CFR Destination Port</option>
                  <option value="FOB Airport (Air Cargo)">FOB Airport (Air Cargo)</option>
                  <option value="CIF Destination Airport">CIF Destination Airport</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Destination Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. United Kingdom, UAE, Germany"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Destination Port / Airport <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  placeholder="e.g. Rotterdam, Felixstowe, Dubai Jebel Ali"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Packaging & Compliance */}
          <div className="mb-8">
            <h3 className="text-base font-display font-bold text-on-surface mb-4 flex items-center gap-2 pb-2 border-b border-outline-variant/15">
              <ShieldCheck className="w-4 h-4 text-primary" />
              3. Packaging & Quarantine Standards
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Packaging Specification
                </label>
                <select
                  value={formData.packaging}
                  onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="Standard Corrugated Export Cartons">Standard Corrugated Export Cartons (3.5kg / 4kg / 5kg)</option>
                  <option value="10kg/13kg Telescopic Citrus Boxes">10kg / 13kg / 14kg Telescopic Citrus Boxes</option>
                  <option value="10kg/25kg Palletized Mesh Net Bags">10kg / 25kg Palletized Mesh Net Bags (Onions/Potatoes)</option>
                  <option value="Vacuum Nitrogen-Flushed Aluminum Pouches">Vacuum Nitrogen-Flushed Barrier Pouches (Nuts)</option>
                  <option value="Custom Private Label Importer Branding">Custom Private Label Importer Branding</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Treatment / Phytosanitary Requirement
                </label>
                <select
                  value={formData.phytosanitaryReq}
                  onChange={(e) => setFormData({ ...formData, phytosanitaryReq: e.target.value })}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="DPP Mandatory Export Certificate">DPP Mandatory Export Certificate (Govt of Pakistan)</option>
                  <option value="Hot Water Dip Treatment (HWDT) Passed">Hot Water Dip Treatment (HWDT) Passed</option>
                  <option value="Vapour Heat Treatment (VHT) EU/US Compliant">Vapour Heat Treatment (VHT) EU/US Compliant</option>
                  <option value="In-transit Digital Temperature Logger Included">In-transit Digital Temperature Logger Included</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Importer Corporate Details */}
          <div className="mb-6">
            <h3 className="text-base font-display font-bold text-on-surface mb-4 flex items-center gap-2 pb-2 border-b border-outline-variant/15">
              <Building2 className="w-4 h-4 text-secondary" />
              4. Corporate Contact Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Contact Person & Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Michael Smith (Procurement Director)"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Company / Importer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. EuroFresh Importers B.V."
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Business Corporate Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="purchasing@company.com"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 7000 000000"
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-4">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Additional Caliber, Brix, or Delivery Schedule Notes
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specify any desired fruit caliber count (e.g. Kinnow 54/60, Mango caliber 8-10), target arrival date, or specific cold-chain requirements..."
                className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            {errorMessage && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-red-700 text-xs mt-4 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{errorMessage}</p>
                  <p className="mt-1 text-[11px]">
                    You can also connect directly with our WhatsApp Trade Desk:{" "}
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
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-outline-variant/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-on-surface-variant flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Official commercial quotation generated within 24 business hours.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-container text-on-primary-container font-bold text-sm px-8 py-3.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md border-b-2 border-[#e6a100] active:scale-98 cursor-pointer flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting RFQ...</span>
                </>
              ) : (
                <>
                  <span>Submit Commercial RFQ</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>
      )}

    </div>
  )
}
