import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import HomePage from "@/pages/HomePage"
import CatalogPage from "@/pages/CatalogPage"
import ContactPage from "@/pages/ContactPage"
import QuotePage from "@/pages/QuotePage"
import CertificationsPage from "@/pages/CertificationsPage"

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-background min-h-screen text-on-background selection:bg-primary-container selection:text-on-primary-container flex flex-col justify-between">
        
        {/* Navigation header with Get in Touch CTA */}
        <Navbar />

        {/* Main Body Routing Area with reduced top padding to eliminate gaps */}
        <main className="pt-18 md:pt-20 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}
