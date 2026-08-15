import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck } from "lucide-react"
import footerAccentImg from "@/assets/images/footer_accent.png"

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-on-secondary-fixed w-full rounded-t-[32px] md:rounded-t-[64px] mt-8 md:mt-12 shadow-2xl relative overflow-hidden text-white/90">
      
      {/* Organic background accent for footer */}
      <div
        className="absolute right-0 top-0 w-96 h-96 opacity-5 pointer-events-none transform -rotate-12 translate-x-20 -translate-y-20 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('${footerAccentImg}')`,
        }}
      />

      <div className="flex flex-col md:flex-row justify-between items-start max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-12 pb-8 md:pt-16 md:pb-10 gap-8 md:gap-12 relative z-10">
        
        {/* Brand column */}
        <div className="flex flex-col gap-4 max-w-sm">
          <Link to="/" className="text-3xl font-display font-bold text-secondary-fixed">
            MA Links
          </Link>
          <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed">
            Connecting Pakistan's rich agricultural orchards and mountain harvests to international wholesale buyers. Exporting Kinnow citrus, winter guavas, walnuts, pine nuts, and premier summer mangoes with 365-day cold chain reliability.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a
              className="text-secondary-fixed hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              href="mailto:malinks016@gmail.com"
              aria-label="Email info desk"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              className="text-secondary-fixed hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              href="tel:+923027176692"
              aria-label="Call export desk"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              className="text-emerald-400 hover:text-white transition-colors bg-emerald-500/20 p-2 rounded-full hover:bg-emerald-500/30 flex items-center gap-1 text-xs font-semibold px-3"
              href="https://wa.me/923027176692"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp desk"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 w-full md:w-auto">
          
          <div className="flex flex-col gap-3">
            <h4 className="text-secondary-fixed font-sans font-bold text-xs uppercase tracking-widest">
              Quick Navigation
            </h4>
            <Link className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all" to="/">
              Home
            </Link>
            <Link className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all" to="/catalog">
              Produce Catalog
            </Link>
            <Link className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all" to="/certifications">
              Registration & Certs
            </Link>
            <Link className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all" to="/quote">
              Request Export RFQ
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-secondary-fixed font-sans font-bold text-xs uppercase tracking-widest">
              Produce Categories
            </h4>
            <Link className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all" to="/catalog">
              Kinnow & Citrus (Winter)
            </Link>
            <Link className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all" to="/catalog">
              Walnuts & Pine Nuts
            </Link>
            <Link className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all" to="/catalog">
              Multan Summer Mangoes
            </Link>
            <Link className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all" to="/catalog">
              Fresh Red Onions & Potatoes
            </Link>
          </div>

          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <h4 className="text-secondary-fixed font-sans font-bold text-xs uppercase tracking-widest">
              Export Hub Location
            </h4>
            <p className="text-xs md:text-sm text-white/70 flex items-start gap-2 leading-relaxed">
              <MapPin className="w-4 h-4 text-secondary-fixed shrink-0 mt-0.5" />
              Multan Agricultural Belt & Fruit Market Complex, Punjab, Pakistan
            </p>
            <p className="text-xs text-white/60">
              Direct Phone: <a href="tel:+923027176692" className="text-white hover:underline font-semibold">+92 302 7176692</a>
            </p>
            <p className="text-xs text-white/60">
              Email: <a href="mailto:malinks016@gmail.com" className="text-white hover:underline font-semibold">malinks016@gmail.com</a>
            </p>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5 flex flex-col sm:flex-row justify-between items-center gap-3 relative z-10 text-[11px] text-white/60">
        <p>© 2026 MA Links. Commercial Agricultural Produce Exporters. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <Link to="/certifications" className="hover:text-white transition-colors flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-secondary-fixed" />
            <span>DPP Phytosanitary Registered</span>
          </Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-white transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>

    </footer>
  )
}
