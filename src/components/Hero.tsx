import { useState } from "react"
import { ArrowRight, Sparkles, Globe, ShieldCheck, Sun } from "lucide-react"

import heroProduceImg from "@/assets/images/hero_diversified_produce.png"
import kinnowImg from "@/assets/images/kinnow.png"
import chaunsaImg from "@/assets/images/chaunsa.png"
import walnutsImg from "@/assets/images/walnuts.png"
import onionImg from "@/assets/images/onion.png"

interface HeroProps {
  onOpenQuote: () => void
}

const producePills = [
  {
    id: "fresh_fruits",
    name: "Fresh Fruits",
    badge: "Kinnow, Guava, Pomegranate",
    season: "Winter Peak",
    icon: "🍊",
    img: kinnowImg,
    highlight: "Top export citrus with 2.7M tonnes yield"
  },
  {
    id: "mangoes",
    name: "Summer Mangoes",
    badge: "Chaunsa, Sindhri, Ratol",
    season: "Summer Peak",
    icon: "🥭",
    img: chaunsaImg,
    highlight: "Multan's world-renowned king fruit"
  },
  {
    id: "dry_fruits",
    name: "Dry Fruits & Nuts",
    badge: "Walnuts, Chilgoza, Figs",
    season: "Year-Round",
    icon: "🌰",
    img: walnutsImg,
    highlight: "High-value winter export favorite"
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
    badge: "Onion, Potato",
    season: "Autumn Crop",
    icon: "🧅",
    img: onionImg,
    highlight: "High volume export commodity"
  }
]

export default function Hero({ onOpenQuote }: HeroProps) {
  const [activeCategory, setActiveCategory] = useState(0)
  const currentPill = producePills[activeCategory]

  return (
    <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-16 overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-fixed-dim/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary-fixed/15 rounded-full blur-3xl pointer-events-none" />

      {/* Diversification Tagline Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/15 p-4 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-on-surface">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
          </span>
          <span className="text-secondary font-bold uppercase tracking-wider text-[11px] md:text-xs">
            Diversified Produce Exports
          </span>
          <span className="hidden sm:inline text-on-surface-variant">|</span>
          <span className="hidden sm:inline text-on-surface-variant">365 Days Global Supply Chain</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-on-surface-variant">
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-primary" /> Global Shipping
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-secondary" /> Phytosanitary Certified
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Headlines & Call-to-action */}
        <div className="lg:col-span-6 flex flex-col gap-6 z-10 animate-in slide-in-from-left duration-700">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/50 text-secondary font-bold text-xs uppercase tracking-wider w-fit border border-secondary/20">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Fruits • Dry Fruits • Vegetables • Mangoes</span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.15] text-shadow-organic">
            Exporting Pakistan's <br/>
            <span className="text-primary italic font-serif">Finest Produce</span> Year-Round
          </h1>
          
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            From sun-ripened summer mangoes to winter citrus mandarins, nutrient-rich walnuts, pine nuts, and high-volume fresh vegetables. We connect Pakistan’s richest harvests directly to international buyers.
          </p>

          {/* Interactive Category Selector Pills */}
          <div className="flex flex-col gap-3 my-2">
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-primary" /> Explore Our Export Pillars
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {producePills.map((pill, idx) => (
                <button
                  key={pill.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    activeCategory === idx
                      ? "bg-primary-container text-on-primary-container border-primary shadow-sm scale-102"
                      : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border-outline-variant/15"
                  }`}
                >
                  <span className="text-xl mb-1">{pill.icon}</span>
                  <span className="font-bold text-xs line-clamp-1">{pill.name}</span>
                  <span className="text-[10px] text-on-surface-variant/80 font-medium line-clamp-1">{pill.season}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Highlight Card */}
          <div className="bg-surface-container-low/70 border border-outline-variant/20 rounded-2xl p-4 flex items-center gap-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-white p-1 shadow-sm">
              <img src={currentPill.img} alt={currentPill.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-on-surface">{currentPill.name}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">
                  {currentPill.badge}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5">{currentPill.highlight}</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button 
              onClick={onOpenQuote}
              className="bg-primary-container text-on-primary-container font-sans font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md hover:-translate-y-0.5 border-b-2 border-[#e6a100] active:scale-95 cursor-pointer flex items-center gap-2"
            >
              Request Export Quote <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#catalog"
              className="bg-secondary text-on-secondary font-sans font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95 border-b-2 border-[#2c4a3b]"
            >
              View All 16 Products
            </a>
          </div>
        </div>

        {/* Right Column: Visual Multi-Produce Display */}
        <div className="lg:col-span-6 relative z-10 animate-in slide-in-from-right duration-700">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-outline-variant/10 aspect-[1.3] group">
            
            {/* Main Multi-Produce Image */}
            <img 
              alt="Pakistani Produce Export Range: Mangoes, Citrus, Dry Fruits, Vegetables" 
              className="w-full h-full object-cover transform group-hover:scale-103 duration-700 ease-out" 
              src={heroProduceImg}
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

            {/* Floating Info Overlay Badges */}
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-outline-variant/20 shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-on-surface">365 Days Export Active</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/20 shadow-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-container/60 text-on-primary-container flex items-center justify-center font-bold text-lg">
                  🍇
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-on-surface">Full Spectrum Agriculture</h4>
                  <p className="text-xs text-on-surface-variant">Kinnow • Mangoes • Walnuts • Onions</p>
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Quality Standard</span>
                <span className="text-xs text-on-surface-variant">100% Export Grade</span>
              </div>
            </div>

          </div>

          {/* Key Stat Cards Under Visual */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant/15 text-center shadow-xs">
              <span className="block font-display font-bold text-lg text-primary">2.7M T</span>
              <span className="text-[11px] text-on-surface-variant">Citrus Capacity</span>
            </div>
            <div className="bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant/15 text-center shadow-xs">
              <span className="block font-display font-bold text-lg text-secondary">4 Seasons</span>
              <span className="text-[11px] text-on-surface-variant">Year-Round Supply</span>
            </div>
            <div className="bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant/15 text-center shadow-xs">
              <span className="block font-display font-bold text-lg text-primary">100%</span>
              <span className="text-[11px] text-on-surface-variant">Phytosanitary</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
