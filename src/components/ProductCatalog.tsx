import { useState } from "react"
import { Sparkles, Calendar, TrendingUp, Filter, ShieldCheck, Box, Clock, Truck, FileText, X } from "lucide-react"

import productsData from "@data/products.json"
import exportPlanData from "@data/export_diversification.json"

import chaunsaImg from "@/assets/images/chaunsa.png"
import sindhriImg from "@/assets/images/sindhri.png"
import anwarRatolImg from "@/assets/images/anwar_ratol.png"
import langraImg from "@/assets/images/langra.png"
import dusehriImg from "@/assets/images/dusehri.png"
import saroliImg from "@/assets/images/saroli.png"
import kinnowImg from "@/assets/images/kinnow.png"
import guavaImg from "@/assets/images/guava.png"
import pomegranateImg from "@/assets/images/pomegranate.png"
import freshDatesImg from "@/assets/images/fresh_dates.png"
import walnutsImg from "@/assets/images/walnuts.png"
import pineNutsImg from "@/assets/images/pine_nuts.png"
import driedFigsImg from "@/assets/images/dried_figs.png"
import driedDatesImg from "@/assets/images/dried_dates.png"
import onionImg from "@/assets/images/onion.png"
import potatoImg from "@/assets/images/potato.png"

const imageMap: Record<string, string> = {
  "chaunsa.png": chaunsaImg,
  "sindhri.png": sindhriImg,
  "anwar_ratol.png": anwarRatolImg,
  "langra.png": langraImg,
  "dusehri.png": dusehriImg,
  "saroli.png": saroliImg,
  "kinnow.png": kinnowImg,
  "guava.png": guavaImg,
  "pomegranate.png": pomegranateImg,
  "fresh_dates.png": freshDatesImg,
  "walnuts.png": walnutsImg,
  "pine_nuts.png": pineNutsImg,
  "dried_figs.png": driedFigsImg,
  "dried_dates.png": driedDatesImg,
  "onion.png": onionImg,
  "potato.png": potatoImg,
}

interface ProductCatalogProps {
  onOpenQuote?: (productName?: string) => void
}

export default function ProductCatalog({ onOpenQuote }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [activeSpecModal, setActiveSpecModal] = useState<typeof productsData.products[0] | null>(null)

  const filteredProducts = selectedCategory === "all"
    ? productsData.products
    : productsData.products.filter(p => p.categoryId === selectedCategory)

  return (
    <section id="catalog" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-section-gap scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container/40 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
          <ShieldCheck className="w-3.5 h-3.5 text-primary" /> B2B Wholesale Export Specifications
        </div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-on-surface inline-block relative">
          Wholesale Export Catalog
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-primary rounded-full"></div>
        </h2>
        <p className="mt-8 font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Verifiable product calibers, seasonal harvest windows, MOQs, packaging specs, and phytosanitary export certifications for international procurement.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
            selectedCategory === "all"
              ? "bg-primary text-on-primary shadow-md"
              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
          }`}
        >
          <Filter className="w-4 h-4" /> All Produce ({productsData.products.length})
        </button>

        {productsData.categories.map((cat) => {
          const count = productsData.products.filter(p => p.categoryId === cat.id).length
          const isActive = selectedCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-on-primary shadow-md"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {cat.name} ({count})
            </button>
          )
        })}
      </div>

      {/* Highlight Banner for Q4 Export Opportunities */}
      {selectedCategory !== "mangoes" && (
        <div className="mb-12 bg-gradient-to-r from-secondary/10 via-primary-container/20 to-secondary/10 border border-secondary/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
              <TrendingUp className="w-4 h-4" /> {exportPlanData.title}
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-on-surface">
              Off-Season Export Window (Oct–Dec Diversification)
            </h3>
            <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
              {exportPlanData.overview}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="bg-surface-container-lowest px-4 py-2.5 rounded-2xl shadow-sm border border-outline-variant/10 text-xs text-center">
              <span className="block font-bold text-primary text-sm">FOB / CIF</span>
              <span className="text-on-surface-variant">Karachi Export Port</span>
            </div>
            <div className="bg-surface-container-lowest px-4 py-2.5 rounded-2xl shadow-sm border border-outline-variant/10 text-xs text-center">
              <span className="block font-bold text-secondary text-sm">2.7M Tonnes</span>
              <span className="text-on-surface-variant">Kinnow Citrus Capacity</span>
            </div>
          </div>
        </div>
      )}

      {/* Products B2B Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((item, idx) => (
          <div
            key={item.id}
            className="bg-surface-container-lowest rounded-3xl p-6 flex flex-col justify-between box-shadow-organic-sm hover:box-shadow-organic-md transition-all duration-300 hover:-translate-y-1 group border border-outline-variant/15 relative overflow-hidden animate-in fade-in duration-300"
            style={{ animationDelay: `${(idx % 6) * 70}ms` }}
          >
            <div>
              {/* Product Header Badge & Image */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-28 h-28 relative drop-shadow-leaf shrink-0 flex items-center justify-center bg-surface-container-low/50 rounded-2xl p-2">
                  <img
                    alt={item.alt}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    src={imageMap[item.imageKey]}
                  />
                </div>
                <div className="flex flex-col items-end gap-1.5 text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary-container/50 px-2.5 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3 text-secondary" /> {item.tagline}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary-container/30 px-2 py-0.5 rounded-md">
                    <Calendar className="w-3 h-3" /> {item.seasonWindow}
                  </div>
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors mb-2">
                {item.name}
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Scannable Spec Table Box */}
              <div className="bg-surface-container-low/60 rounded-2xl p-3.5 border border-outline-variant/10 flex flex-col gap-2 text-xs mb-4">
                <div className="flex items-center justify-between border-b border-outline-variant/10 pb-1.5">
                  <span className="text-on-surface-variant font-medium flex items-center gap-1">
                    <Box className="w-3.5 h-3.5 text-primary" /> Export Grade & Caliber:
                  </span>
                  <span className="font-semibold text-on-surface text-right text-[11px] max-w-[170px] truncate">{item.grade}</span>
                </div>

                <div className="flex items-center justify-between border-b border-outline-variant/10 pb-1.5">
                  <span className="text-on-surface-variant font-medium flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-secondary" /> MOQ:
                  </span>
                  <span className="font-semibold text-secondary text-right text-[11px] max-w-[170px] truncate">{item.moq}</span>
                </div>

                <div className="flex items-center justify-between border-b border-outline-variant/10 pb-1.5">
                  <span className="text-on-surface-variant font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Lead Time:
                  </span>
                  <span className="font-semibold text-on-surface text-right text-[11px]">{item.leadTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-secondary" /> Incoterms:
                  </span>
                  <span className="font-semibold text-on-surface text-right text-[11px]">{item.incoterms}</span>
                </div>
              </div>
            </div>

            {/* Product Card Actions */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/10 mt-auto">
              <button
                onClick={() => setActiveSpecModal(item)}
                className="w-full bg-surface-container-high text-on-surface font-semibold text-xs py-2.5 px-3 rounded-xl hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" /> Full Spec Sheet
              </button>
              <button
                onClick={() => onOpenQuote?.(item.name)}
                className="w-full bg-primary-container text-on-primary-container font-semibold text-xs py-2.5 px-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-200 shadow-sm flex items-center justify-center gap-1 cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* B2B Specification Sheet Modal */}
      {activeSpecModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-on-background/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-background border border-outline-variant/30 rounded-3xl w-full max-w-2xl p-6 md:p-8 box-shadow-organic-md max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setActiveSpecModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-low p-2 shrink-0 border border-outline-variant/15 flex items-center justify-center">
                <img src={imageMap[activeSpecModal.imageKey]} alt={activeSpecModal.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{activeSpecModal.tagline}</span>
                <h3 className="text-2xl font-display font-bold text-on-surface">{activeSpecModal.name} Specification</h3>
                <p className="text-xs text-on-surface-variant">Phytosanitary & Technical Export Data Sheet</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-6">
              <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/15 flex flex-col gap-2">
                <span className="font-bold text-primary uppercase tracking-wider text-[11px]">Commercial & Logistics</span>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span className="text-on-surface-variant">Harvest Season:</span>
                  <span className="font-semibold text-on-surface">{activeSpecModal.seasonWindow}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span className="text-on-surface-variant">Grade Standard:</span>
                  <span className="font-semibold text-on-surface">{activeSpecModal.grade}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span className="text-on-surface-variant">MOQ:</span>
                  <span className="font-semibold text-secondary">{activeSpecModal.moq}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Incoterms:</span>
                  <span className="font-semibold text-on-surface">{activeSpecModal.incoterms}</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/15 flex flex-col gap-2">
                <span className="font-bold text-primary uppercase tracking-wider text-[11px]">Packaging & Cold Chain</span>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span className="text-on-surface-variant">Packaging Format:</span>
                  <span className="font-semibold text-on-surface text-right max-w-[150px]">{activeSpecModal.packaging}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span className="text-on-surface-variant">Lead Time:</span>
                  <span className="font-semibold text-on-surface">{activeSpecModal.leadTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Phytosanitary:</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">DPP Certificate Active</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-4 rounded-2xl mb-6">
              <h4 className="font-bold text-xs uppercase tracking-wider text-on-surface mb-2">Compliance & Certifications Held</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeSpecModal.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-on-surface-variant">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveSpecModal(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = activeSpecModal.name
                  setActiveSpecModal(null)
                  onOpenQuote?.(name)
                }}
                className="px-6 py-2.5 rounded-full text-xs font-semibold bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all duration-200 shadow-md cursor-pointer"
              >
                Request Quote For {activeSpecModal.name}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
