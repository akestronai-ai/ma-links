import React, { useState } from "react"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Globe2,
  Loader2,
  AlertCircle
} from "lucide-react"
import { sendContactFormEmails } from "../lib/emailService"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Kinnow (Citrus) Export",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const result = await sendContactFormEmails(formData)
      if (result && !result.success && result.message) {
        console.warn("[ContactPage] Email result notice:", result.message)
      }
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Kinnow (Citrus) Export",
          message: "",
        })
      }, 5000)
    } catch (err) {
      console.error("[ContactPage] Submission failed:", err)
      setErrorMessage("We could not send your message automatically. Please try again or reach us directly on WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 md:py-8">
      
      {/* Header Area */}
      <div className="text-center max-w-3xl mx-auto mb-8 animate-in fade-in duration-500">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/50 text-secondary text-xs font-bold uppercase tracking-wider mb-3 border border-secondary/20">
          <Globe2 className="w-3.5 h-3.5" /> 24/7 International Trade Desk
        </div>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-on-surface tracking-tight">
          Contact Information & Direct Inquiries
        </h1>
        <p className="mt-2.5 font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
          Connect directly with our export operations team for fresh harvest allocations, phytosanitary clearance documents, and destination port quotations.
        </p>
      </div>

      {/* 4 Feature Contact Cards (Modeled after HMA Fresh) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        
        {/* Card 1: Address */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-5 shadow-xs flex flex-col items-start hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-primary-container/40 text-primary flex items-center justify-center mb-3">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-base text-on-surface mb-1">
            Export Belts & Office
          </h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Head Office: Multan Agricultural Belt & Fruit Market Complex, Punjab, Pakistan
          </p>
        </div>

        {/* Card 2: Phone */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-5 shadow-xs flex flex-col items-start hover:border-secondary/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/40 text-secondary flex items-center justify-center mb-3">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-base text-on-surface mb-1">
            Phone & WhatsApp
          </h3>
          <div className="flex flex-col text-xs text-on-surface-variant gap-1">
            <a href="tel:+923027176692" className="hover:text-primary transition-colors font-semibold">
              +92 302 7176692
            </a>
            <a href="https://wa.me/923027176692" className="hover:text-primary transition-colors text-emerald-700 font-semibold">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Card 3: Email */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-5 shadow-xs flex flex-col items-start hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-primary-container/40 text-primary flex items-center justify-center mb-3">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-base text-on-surface mb-1">
            Email Inquiries
          </h3>
          <div className="flex flex-col text-xs text-on-surface-variant gap-1">
            <a href="mailto:malinks016@gmail.com" className="hover:text-primary transition-colors font-semibold">
              malinks016@gmail.com
            </a>
          </div>
        </div>

        {/* Card 4: WhatsApp Direct & Hours */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-5 shadow-xs flex flex-col items-start hover:border-secondary/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center mb-3">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-base text-on-surface mb-1">
            Direct WhatsApp Desk
          </h3>
          <p className="text-xs text-on-surface-variant mb-2">
            Instant communication with our export documentation specialists.
          </p>
          <a
            href="https://wa.me/923027176692?text=Hello%20MA%20Links%2C%20I%20would%20like%20to%20inquire%20about%20produce%20export."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200"
          >
            <span>Chat on WhatsApp</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </a>
        </div>

      </div>

      {/* Main Grid: Get In Touch Contact Form & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        
        {/* Left: Contact Form (Full HMA Fresh Style) */}
        <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 md:p-8 shadow-xs">
          
          <div className="mb-6">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-secondary mb-1">
              <ShieldCheck className="w-3.5 h-3.5" /> B2B Inquiry Channel
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-on-surface">
              Get In Touch
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant mt-1">
              Fill out the form below with your requirements and our export team will respond within 12 hours.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-secondary/15 text-secondary rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-on-surface">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-on-surface-variant max-w-sm mt-1">
                Thank you for contacting MA Links. A dedicated export trade manager will reach out to <strong>{formData.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Importer"
                    className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@company.com"
                    className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 0000000"
                    className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Select Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="Select Subject">Select Subject</option>
                    <option value="Kinnow (Citrus) Export">Kinnow (Citrus) Export</option>
                    <option value="Winter Guava & Pomegranate">Winter Guava & Pomegranate</option>
                    <option value="Walnuts & Pine Nuts (Dry Fruits)">Walnuts & Pine Nuts (Dry Fruits)</option>
                    <option value="Pakistani Mango Varieties">Pakistani Mango Varieties</option>
                    <option value="Fresh Red Onions & Potatoes">Fresh Red Onions & Potatoes</option>
                    <option value="Phytosanitary & Quarantine Compliance">Phytosanitary & Quarantine Compliance</option>
                    <option value="General Wholesale Inquiry">General Wholesale Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Your Message & Import Specifications <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide estimated container volume, preferred incoterm (FOB/CIF), destination port, and packing requirements..."
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-xs text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-red-700 text-xs animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{errorMessage}</p>
                    <p className="mt-1 text-[11px]">
                      Or contact us directly via WhatsApp:{" "}
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
                className="bg-primary-container text-on-primary-container font-bold text-sm px-8 py-3.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md border-b-2 border-[#e6a100] active:scale-98 cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

        </div>

        {/* Right: Operational Information & Map */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          
          {/* Quick Trade Specs Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 shadow-xs">
            <h3 className="font-display font-bold text-base text-on-surface mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Export Desk Operating Hours
            </h3>
            <div className="flex flex-col gap-2 text-xs text-on-surface-variant">
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span>Monday – Friday:</span>
                <strong className="text-on-surface">08:00 – 20:00 (PKT) / 24h Cargo Dispatch</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span>Saturday:</span>
                <strong className="text-on-surface">09:00 – 17:00 (PKT)</strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Sunday (Reefer Loading):</span>
                <strong className="text-secondary font-bold">Cold Chain Operations Active</strong>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-4 shadow-xs overflow-hidden">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-on-surface-variant mb-2.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              Pakistan Origin Logistics Belt
            </h3>
            <div className="w-full h-56 rounded-2xl overflow-hidden border border-outline-variant/20">
              <iframe
                title="MA Links Agricultural Hub Multan Pakistan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220875.2447959068!2d71.3653157929767!3d30.19838048220042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33e2185c7f8f%3A0xa6457f59d57a2f58!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
