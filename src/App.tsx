import { useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import MangoVarieties from "@/components/MangoVarieties"
import OrchardExport from "@/components/OrchardExport"
import QualityAssurance from "@/components/QualityAssurance"
import PerfectRipeness from "@/components/PerfectRipeness"
import GlobalReach from "@/components/GlobalReach"
import MangoNutrition from "@/components/MangoNutrition"
import Footer from "@/components/Footer"
import QuoteModal from "@/components/QuoteModal"

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const handleOpenQuote = () => setIsQuoteOpen(true)
  const handleCloseQuote = () => setIsQuoteOpen(false)

  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-container selection:text-on-primary-container">
      {/* Navigation header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main body wrapper */}
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Mango Varieties Showcase */}
        <MangoVarieties />

        {/* Orchard to Export Process */}
        <OrchardExport />

        {/* Quality Control & Assurance */}
        <QualityAssurance />

        {/* Perfect Ripeness details */}
        <PerfectRipeness />

        {/* Global Logistics Route */}
        <GlobalReach />

        {/* Health & Nutrition benefits */}
        <MangoNutrition />
      </main>

      {/* Organic Curved Footer */}
      <Footer />

      {/* Interactive Quote Modal overlay */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  )
}

export default App
