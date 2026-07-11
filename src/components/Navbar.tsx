import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import logo from "@/assets/images/logo.png"

interface NavbarProps {
  onOpenQuote: () => void
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("EN")
  const [showLangDropdown, setShowLangDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Mango Varieties", href: "#varieties" },
    { name: "Certifications", href: "#certifications" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-3"
            : "bg-background/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              alt="MA Links Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src={logo}
            />
            <span className="text-xl md:text-2xl font-display font-bold text-primary tracking-tight">
              MA Links
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center font-sans font-semibold text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low/50 px-3 py-1.5 rounded-lg active:scale-95 duration-150 ease-in-out"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 p-2 rounded-full hover:bg-surface-container-low/50 duration-150"
                aria-label="Language Selector"
              >
                <Globe className="w-5 h-5" />
                <span className="text-xs font-semibold">{currentLang}</span>
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 bg-background border border-outline-variant/30 rounded-xl shadow-lg p-2 flex flex-col gap-1 w-24 animate-in fade-in slide-in-from-top-1 duration-150 z-55">
                  {["EN", "UR", "AR"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang)
                        setShowLangDropdown(false)
                      }}
                      className={`text-left text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                        currentLang === lang
                          ? "bg-primary/10 text-primary"
                          : "text-on-surface-variant hover:bg-surface-container-low"
                      }`}
                    >
                      {lang === "EN" ? "English" : lang === "UR" ? "اردو" : "العربية"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quote CTA Button */}
            <button
              onClick={onOpenQuote}
              className="bg-primary-container text-on-primary-container font-sans font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 box-shadow-organic-sm hover:box-shadow-organic-md border-b-2 border-[#e6a100] active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Get a Quote
            </button>

            {/* Mobile Hamburger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-outline-variant/20 py-4 px-margin-mobile flex flex-col gap-3 font-sans font-semibold text-sm animate-in slide-in-from-top duration-250 absolute w-full left-0 z-40 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors py-2 px-3 hover:bg-surface-container-low rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
