import Hero from "@/components/Hero"
import FeaturedShowcase from "@/components/FeaturedShowcase"
import OrchardExport from "@/components/OrchardExport"
import QualityAssurance from "@/components/QualityAssurance"
import PerfectRipeness from "@/components/PerfectRipeness"
import GlobalReach from "@/components/GlobalReach"
import MangoNutrition from "@/components/MangoNutrition"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2">
      {/* Hero Section with upfront Kinnow, Guava, Walnuts, Pine Nuts */}
      <Hero />

      {/* Featured Produce Showcase (Curated 6 items, seasonal focus) */}
      <FeaturedShowcase />

      {/* Orchard to Export Logistics Process */}
      <OrchardExport />

      {/* Quality Assurance & Quarantine Protocols */}
      <QualityAssurance />

      {/* Ripeness Standards & Flavor Profile */}
      <PerfectRipeness />

      {/* Global Logistics Network & Sea/Air Routes */}
      <GlobalReach />

      {/* Multi-Produce Nutritional Value */}
      <MangoNutrition />
    </div>
  )
}
