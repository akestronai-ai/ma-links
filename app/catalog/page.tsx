"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Filter,
  Calendar,
  ShieldCheck,
  Box,
  Truck,
  FileText,
  X,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Package
} from "lucide-react"

import productsData from "@/data/products.json"

const imageMap: Record<string, string> = {
  "chaunsa.png": "/images/chaunsa.png",
  "sindhri.png": "/images/sindhri.png",
  "anwar_ratol.png": "/images/anwar_ratol.png",
  "langra.png": "/images/langra.png",
  "dusehri.png": "/images/dusehri.png",
  "saroli.png": "/images/saroli.png",
  "kinnow.png": "/images/kinnow.png",
  "guava.png": "/images/guava.png",
  "pomegranate.png": "/images/pomegranate.png",
  "fresh_dates.png": "/images/fresh_dates.png",
  "walnuts.png": "/images/walnuts.png",
  "pine_nuts.png": "/images/pine_nuts.png",
  "dried_figs.png": "/images/dried_figs.png",
  "dried_dates.png": "/images/dried_dates.png",
  "onion.png": "/images/onion.png",
  "potato.png": "/images/potato.png",
}

// Season mappings for products
const seasonMap: Record<string, string[]> = {
  kinnow: ["winter", "year_round"],
  guava: ["winter", "autumn"],
  pomegranate: ["autumn", "winter"],
  fresh_dates: ["autumn"],
  walnuts: ["winter", "autumn", "year_round"],
  pine_nuts: ["winter", "autumn", "year_round"],
  dried_figs: ["winter", "year_round"],
  dried_dates: ["year_round", "autumn", "winter", "summer"],
  onion: ["autumn", "winter"],
  potato: ["autumn", "winter"],
  chaunsa: ["summer"],
  sindhri: ["summer"],
  anwar_ratol: ["summer"],
  langra: ["summer"],
  dusehri: ["summer"],
  saroli: ["summer"],
}

const seasonsList = [
  { id: "all_seasons", name: "All Seasons", icon: "🌐" },
  { id: "winter", name: "Winter Harvest (Dec–Mar)", icon: "🍊" },
  { id: "summer", name: "Summer Peak (May–Aug)", icon: "🥭" },
  { id: "autumn", name: "Autumn Crop (Aug–Nov)", icon: "🧅" },
  { id: "year_round", name: "Year-Round Supply", icon: "📦" },
]

export default function CatalogPage() {
  const [selectedSeason, setSelectedSeason] = useState<string>("all_seasons")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [activeSpecModal, setActiveSpecModal] = useState<typeof productsData.products[0] | null>(null)

  const filteredProducts = useMemo(() => {
    return productsData.products.filter((p) => {
      // Category filter
      const matchesCat = selectedCategory === "all" || p.categoryId === selectedCategory
      // Season filter
      const productSeasons = seasonMap[p.id] || []
      const matchesSeason = selectedSeason === "all_seasons" || productSeasons.includes(selectedSeason)
      // Search query
      const matchesSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCat && matchesSeason && matchesSearch
    })
  }, [selectedCategory, selectedSeason, searchQuery])

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 md:py-8">

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 animate-in fade-in duration-500">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container/40 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
          <ShieldCheck className="w-4 h-4 text-primary" /> Verified B2B Wholesale Export Specifications
        </div>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-on-surface tracking-tight">
          Pakistan Agricultural Export Catalog
        </h1>
        <p className="mt-3 font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
          Comprehensive calibers, harvest calendar windows, Incoterms, MOQ options, and packaging configurations for international fresh produce importers and supermarket buyers.
        </p>
      </div>

      {/* Filter Control Center */}
      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-5 md:p-6 mb-8 shadow-xs">

        {/* Top: Search bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-outline-variant/15">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search citrus, walnuts, mangoes, onions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs md:text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant hover:text-on-surface"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-on-surface-variant">
            Showing <strong className="text-primary font-bold">{filteredProducts.length}</strong> of {productsData.products.length} export products
          </div>
        </div>

        {/* Middle: Season Filter Tabs */}
        <div className="pt-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5 mb-2.5">
            <Calendar className="w-3.5 h-3.5 text-secondary" />
            <span>Filter by Harvest Season</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {seasonsList.map((season) => {
              const isActive = selectedSeason === season.id
              return (
                <button
                  key={season.id}
                  onClick={() => setSelectedSeason(season.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-secondary text-on-secondary shadow-xs scale-102"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  <span>{season.icon}</span>
                  <span>{season.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Bottom: Produce Category Tabs */}
        <div className="pt-4 mt-4 border-t border-outline-variant/15">
          <div className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-2.5">
            <Filter className="w-3.5 h-3.5 text-primary" />
            <span>Filter by Produce Category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-primary text-on-primary shadow-xs"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              All Categories ({productsData.products.length})
            </button>

            {productsData.categories.map((cat) => {
              const count = productsData.products.filter((p) => p.categoryId === cat.id).length
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-on-primary shadow-xs"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              )
            })}
          </div>
        </div>

      </div>

      {/* Off-Season Export Window Alert */}
      {selectedSeason === "winter" || selectedSeason === "all_seasons" ? (
        <div className="mb-8 bg-gradient-to-r from-secondary/15 via-primary-container/20 to-secondary/15 border border-secondary/20 rounded-3xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-secondary">
              <Sparkles className="w-3.5 h-3.5" /> High-Demand Seasonal Window (Dec – Mar)
            </div>
            <h3 className="text-lg md:text-xl font-display font-bold text-on-surface">
              Kinnow Citrus Mandarins & High-Altitude Dry Fruits Booking Open
            </h3>
            <p className="text-xs text-on-surface-variant max-w-2xl leading-relaxed">
              Book refrigerated sea cargo containers (FOB Karachi Port) and air freight allocations for the current harvest cycle. Phytosanitary inspection guaranteed.
            </p>
          </div>
          <Link
            href="/quote?product=Kinnow%20Citrus"
            className="bg-secondary text-on-secondary font-bold text-xs px-5 py-2.5 rounded-full hover:bg-secondary/90 transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>Book Seasonal Cargo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : null}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-surface-container-low rounded-3xl border border-outline-variant/20 p-8">
          <Package className="w-12 h-12 text-on-surface-variant/40 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-on-surface">No products match your selected filters</h3>
          <p className="text-xs text-on-surface-variant mt-1">Try selecting a different season or clearing the search query.</p>
          <button
            onClick={() => {
              setSelectedSeason("all_seasons")
              setSelectedCategory("all")
              setSearchQuery("")
            }}
            className="mt-4 bg-primary-container text-on-primary-container font-semibold text-xs px-4 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => {
            const img = imageMap[product.imageKey]
            return (
              <div
                key={product.id}
                className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-4.5 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-1.5 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">
                      {product.seasonWindow}
                    </span>
                    <span className="text-[10px] font-semibold text-on-surface-variant/70">
                      {product.grade.split("(")[0]}
                    </span>
                  </div>

                  {/* Image Display */}
                  <div className="w-full aspect-[4/3] rounded-2xl bg-surface-container-low p-3 flex items-center justify-center mb-3 group-hover:scale-102 transition-transform duration-300 overflow-hidden">
                    <img
                      src={img}
                      alt={product.alt || product.name}
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  </div>

                  {/* Product Title & Tagline */}
                  <h3 className="font-display font-bold text-base text-on-surface leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-secondary font-semibold mt-0.5">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1.5 line-clamp-2 leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Quick Specs summary */}
                  <div className="mt-3 pt-3 border-t border-outline-variant/15 flex flex-col gap-1 text-[11px] text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <Box className="w-3 h-3 text-primary shrink-0" />
                      <span className="truncate">{product.packaging}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3 h-3 text-secondary shrink-0" />
                      <span className="truncate">{product.incoterms}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveSpecModal(product)}
                    className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-1.5 px-2"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>

                  <Link
                    href={`/quote?product=${encodeURIComponent(product.name)}`}
                    className="bg-primary-container text-on-primary-container font-semibold text-xs px-3.5 py-1.5 rounded-full hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1"
                  >
                    <span>Request RFQ</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Technical B2B Spec Modal Overlay */}
      {activeSpecModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-on-background/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-background border border-outline-variant/30 rounded-3xl w-full max-w-lg p-6 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-outline-variant/15">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-low p-2 shrink-0 flex items-center justify-center">
                  <img
                    src={imageMap[activeSpecModal.imageKey]}
                    alt={activeSpecModal.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                    Export Caliber Spec Sheet
                  </span>
                  <h3 className="font-display font-bold text-xl text-on-surface leading-tight">
                    {activeSpecModal.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant">{activeSpecModal.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveSpecModal(null)}
                className="p-1.5 rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Spec Details Table */}
            <div className="flex flex-col gap-3 text-xs">
              <div className="bg-surface-container-low p-3 rounded-2xl border border-outline-variant/10">
                <span className="font-bold text-on-surface block mb-1">Product Description</span>
                <p className="text-on-surface-variant leading-relaxed">{activeSpecModal.desc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Harvest Window</span>
                  <span className="font-bold text-on-surface mt-0.5 block">{activeSpecModal.seasonWindow}</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block">Export Grade / Caliber</span>
                  <span className="font-bold text-on-surface mt-0.5 block">{activeSpecModal.grade}</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Packaging Specs</span>
                  <span className="font-semibold text-on-surface mt-0.5 block">{activeSpecModal.packaging}</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block">Dispatch Lead Time</span>
                  <span className="font-semibold text-on-surface mt-0.5 block">{activeSpecModal.leadTime}</span>
                </div>
              </div>

              <div className="bg-surface-container-low p-3 rounded-2xl border border-outline-variant/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">Incoterms & Port Dispatch</span>
                <p className="font-semibold text-on-surface">{activeSpecModal.incoterms}</p>
              </div>

              <div className="bg-surface-container-low p-3 rounded-2xl border border-outline-variant/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block mb-1">Certifications Held</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {activeSpecModal.certifications.map((c, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-background px-2.5 py-1 rounded-full text-[11px] font-medium text-on-surface border border-outline-variant/20">
                      <CheckCircle2 className="w-3 h-3 text-secondary" />
                      {c.replace("[CONFIRM: ", "").replace("]", "")}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-5 pt-3 border-t border-outline-variant/15 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveSpecModal(null)}
                className="text-xs font-semibold text-on-surface-variant hover:text-on-surface px-4 py-2"
              >
                Close
              </button>
              <Link
                href={`/quote?product=${encodeURIComponent(activeSpecModal.name)}`}
                onClick={() => setActiveSpecModal(null)}
                className="bg-primary-container text-on-primary-container font-bold text-xs px-5 py-2.5 rounded-full hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Request Quotation for {activeSpecModal.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
