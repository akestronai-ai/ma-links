import { useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProductCatalog from "@/components/ProductCatalog"
import OrchardExport from "@/components/OrchardExport"
import QualityAssurance from "@/components/QualityAssurance"
import PerfectRipeness from "@/components/PerfectRipeness"
import GlobalReach from "@/components/GlobalReach"
import MangoNutrition from "@/components/MangoNutrition"
import Footer from "@/components/Footer"
import QuoteModal from "@/components/QuoteModal"

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [targetProduct, setTargetProduct] = useState<string | undefined>(undefined)

  const handleOpenQuote = (productName?: string) => {
    setTargetProduct(productName)
    setIsQuoteOpen(true)
  }
  const handleCloseQuote = () => setIsQuoteOpen(false)

  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-container selection:text-on-primary-container">
      {/* Navigation header */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main body wrapper */}
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Full Produce Catalog (Mangoes, Fruits, Dry Fruits, Vegetables) */}
        <ProductCatalog onOpenQuote={handleOpenQuote} />

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

      {/* Interactive B2B Quote Modal overlay */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} initialProduct={targetProduct} />
    </div>
  )
}

export default App
