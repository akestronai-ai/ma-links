import { Mail, Phone, MapPin } from "lucide-react"
import footerAccentImg from "@/assets/images/footer_accent.png"

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary dark:bg-on-secondary-fixed w-full rounded-t-[100px] md:rounded-t-[120px] mt-section-gap shadow-2xl relative overflow-hidden text-white/90">
      
      {/* Organic background accent for footer */}
      <div
        className="absolute right-0 top-0 w-96 h-96 opacity-5 pointer-events-none transform -rotate-12 translate-x-20 -translate-y-20 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('${footerAccentImg}')`,
        }}
        title="Abstract translucent overlay of tropical palm and mango leaves in deep green tones."
      />

      <div className="flex flex-col md:flex-row justify-between items-start max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-12 gap-gutter relative z-10">
        
        {/* Brand column */}
        <div className="flex flex-col gap-6 max-w-sm">
          <span className="text-3xl font-display font-bold text-secondary-fixed">
            MA Links
          </span>
          <p className="font-sans text-sm text-white/80 leading-relaxed">
            Connecting Multan's finest orchards to the global market. Delivering premium, handpicked mangoes with unmatched freshness and quality.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              className="text-secondary-fixed hover:text-white transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10"
              href="mailto:exports@malinks.com"
              aria-label="Email exports"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              className="text-secondary-fixed hover:text-white transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10"
              href="tel:+9261111222333"
              aria-label="Call exports phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto mt-10 md:mt-0">
          
          <div className="flex flex-col gap-4">
            <h4 className="text-secondary-fixed font-sans font-bold text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <a className="text-sm text-white/70 hover:text-white hover:underline decoration-tertiary-container decoration-2 underline-offset-4 transition-all" href="#">
              Home
            </a>
            <a className="text-sm text-white/70 hover:text-white hover:underline decoration-tertiary-container decoration-2 underline-offset-4 transition-all" href="#varieties">
              Mango Varieties
            </a>
            <a className="text-sm text-white/70 hover:text-white hover:underline decoration-tertiary-container decoration-2 underline-offset-4 transition-all" href="#certifications">
              Certifications
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-secondary-fixed font-sans font-bold text-xs uppercase tracking-widest">
              Company
            </h4>
            <a className="text-sm text-white/70 hover:text-white hover:underline decoration-tertiary-container decoration-2 underline-offset-4 transition-all" href="#">
              About
            </a>
            <a className="text-sm text-white/70 hover:text-white hover:underline decoration-tertiary-container decoration-2 underline-offset-4 transition-all" href="#">
              Blog
            </a>
            <a className="text-sm text-white/70 hover:text-white hover:underline decoration-tertiary-container decoration-2 underline-offset-4 transition-all" href="#contact">
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h4 className="text-secondary-fixed font-sans font-bold text-xs uppercase tracking-widest">
              Location
            </h4>
            <p className="text-sm text-white/70 flex items-start gap-2 leading-relaxed">
              <MapPin className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
              Nishtar Road, Multan, Pakistan
            </p>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-xs text-white/50">
        <p>© 2026 MA Links. Premium Mango Exports. All Rights Reserved.</p>
        <p className="hover:text-white transition-colors cursor-pointer">Terms & Privacy Policy</p>
      </div>

    </footer>
  )
}
