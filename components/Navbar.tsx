"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, PhoneCall, FileText } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Produce Catalog", href: "/catalog" },
    { name: "Certifications", href: "/certifications" },
    { name: "Request Quote", href: "/quote" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-2.5"
            : "bg-background/90 backdrop-blur-sm py-3.5"
        }`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              alt="MA Links Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src="/images/logo.png"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold text-primary tracking-tight leading-none">
                MA Links
              </span>
              <span className="text-[10px] text-secondary font-bold tracking-widest uppercase">
                Global Produce Exporter
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-1 lg:gap-2 items-center font-sans font-semibold text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-primary-container text-on-primary-container font-bold shadow-xs"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            {/* Quick Quote Pill */}
            <Link
              href="/quote"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary-container/40 hover:bg-secondary-container/80 px-3.5 py-2 rounded-full transition-colors border border-secondary/20"
            >
              <FileText className="w-3.5 h-3.5 text-secondary" />
              <span>Commercial RFQ</span>
            </Link>

            {/* Top Right "Get in Touch" Primary Button */}
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary-container font-sans font-semibold text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 box-shadow-organic-sm hover:box-shadow-organic-md border-b-2 border-[#e6a100] active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </Link>

            {/* Mobile Hamburger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-outline-variant/20 py-4 px-margin-mobile flex flex-col gap-2 font-sans font-semibold text-sm animate-in slide-in-from-top duration-250 absolute w-full left-0 z-40 shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2.5 px-4 rounded-xl transition-colors ${
                    isActive
                      ? "bg-primary-container text-on-primary-container font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </>
  )
}
