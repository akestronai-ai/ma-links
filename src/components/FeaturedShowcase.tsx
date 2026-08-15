import { Link } from "react-router-dom"
import { Sparkles, Calendar, ShieldCheck, ArrowRight, PackageCheck, Layers } from "lucide-react"

import kinnowImg from "@/assets/images/kinnow.png"
import guavaImg from "@/assets/images/guava.png"
import walnutsImg from "@/assets/images/walnuts.png"
import pineNutsImg from "@/assets/images/pine_nuts.png"
import chaunsaImg from "@/assets/images/chaunsa.png"
import onionImg from "@/assets/images/onion.png"

const featuredItems = [
  {
    id: "kinnow",
    name: "Kinnow (Citrus)",
    tagline: "50%+ Juice Yield & High Brix",
    season: "Winter Harvest (Dec – Mar)",
    category: "Fresh Fruits",
    badge: "Top Global Citrus Export",
    img: kinnowImg,
    specs: "Export Grade A • Calibers 48/54/60/66/72 • 10kg/13kg Telescopic Corrugated Boxes",
    incoterm: "FOB Karachi / CIF Destination Port",
  },
  {
    id: "guava",
    name: "Winter Guava",
    tagline: "Crisp White Flesh & Aromatic",
    season: "Winter Harvest (Aug – Dec)",
    category: "Fresh Fruits",
    badge: "Bruise-Resistant Rind",
    img: guavaImg,
    specs: "Grade A Export • Foam-Netted Individual Cushioning • 5kg Vented Master Cartons",
    incoterm: "FOB Air / CIF Reefer",
  },
  {
    id: "walnuts",
    name: "Walnuts (Akhrot)",
    tagline: "In-Shell 30mm+ & Extra Light Kernels",
    season: "Peak Autumn-Winter (Oct – Dec)",
    category: "Dry Fruits & Nuts",
    badge: "Mountain Harvest",
    img: walnutsImg,
    specs: "Grade A In-Shell & Kernels • 10kg/25kg Vacuum-Sealed Barrier Bags",
    incoterm: "FOB Karachi / CIF Destination",
  },
  {
    id: "pine_nuts",
    name: "Pine Nuts (Chilgoza)",
    tagline: "Luxury Himalayan Wild Kernel",
    season: "Winter Export (Aug – Dec)",
    category: "Dry Fruits & Nuts",
    badge: "High-Value Niche",
    img: pineNutsImg,
    specs: "Hand-Peeled & In-Shell • 5kg/10kg Nitrogen-Flushed Aluminum Pouches",
    incoterm: "FOB Karachi Air Cargo / CIF Airport",
  },
  {
    id: "chaunsa",
    name: "Chaunsa Mango",
    tagline: "King Variety with Intense Aroma",
    season: "Summer Peak (June – Aug)",
    category: "Mango Varieties",
    badge: "Multan Origin",
    img: chaunsaImg,
    specs: "VHT / Hot Water Dipped • Grade A Caliber 6-12 count • 4kg Corrugated Cartons",
    incoterm: "FOB Air / CIF Destination Port",
  },
  {
    id: "onion",
    name: "Export Red Onions",
    tagline: "High Dry Matter & Long Sea Transit",
    season: "Autumn Crop (Oct – Dec)",
    category: "Fresh Vegetables",
    badge: "High Volume Staple",
    img: onionImg,
    specs: "Caliber 45mm – 70mm+ • 10kg/25kg Palletized Mesh Net Bags",
    incoterm: "FOB Karachi Port / CIF Reefer Container",
  },
]

export default function FeaturedShowcase() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/40 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-2 border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Origin Agricultural Harvests
          </div>
          <h2 className="font-display font-bold text-2xl md:text-4xl text-on-surface">
            Featured Export Produce
          </h2>
          <p className="font-sans text-xs md:text-sm text-on-surface-variant max-w-xl mt-1">
            Top demanded Pakistani seasonal harvests inspected and prepared for international wholesale distributors, supermarket chains, and food processors.
          </p>
        </div>

        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-primary hover:text-primary/80 bg-surface-container-low hover:bg-surface-container px-4 py-2.5 rounded-full transition-colors self-start md:self-auto shrink-0 border border-outline-variant/20"
        >
          <Layers className="w-4 h-4 text-primary" />
          <span>View All Products by Season</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid of 6 Featured Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300 group relative overflow-hidden"
          >
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                  {item.badge}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-on-surface-variant">
                  <Calendar className="w-3 h-3 text-primary" />
                  {item.season}
                </span>
              </div>

              {/* Image & Title Container */}
              <div className="flex items-center gap-4 my-2">
                <div className="w-20 h-20 rounded-2xl bg-surface-container-low p-2 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-secondary">{item.category}</span>
                  <h3 className="font-display font-bold text-lg text-on-surface leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-0.5">{item.tagline}</p>
                </div>
              </div>

              {/* Specs pill */}
              <div className="bg-surface-container-low/70 rounded-xl p-2.5 my-3 border border-outline-variant/15 text-[11px] text-on-surface-variant leading-relaxed">
                <div className="flex items-start gap-1.5">
                  <PackageCheck className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item.specs}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-outline-variant/15 flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold text-on-surface-variant">
                {item.incoterm}
              </span>
              <Link
                to={`/quote?product=${encodeURIComponent(item.name)}`}
                className="bg-primary-container text-on-primary-container font-semibold text-xs px-3.5 py-1.5 rounded-full hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>RFQ Quote</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Navigation Prompt Banner */}
      <div className="mt-8 bg-gradient-to-r from-secondary/15 via-primary-container/25 to-secondary/15 border border-secondary/20 rounded-3xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-on-surface">
              Looking for Complete 16 Produce Export Specifications?
            </h4>
            <p className="text-xs text-on-surface-variant">
              Explore full seasonal harvest windows, MOQs, phytosanitary treatment protocols, and caliber sizing.
            </p>
          </div>
        </div>

        <Link
          to="/catalog"
          className="bg-secondary text-on-secondary font-sans font-bold text-xs md:text-sm px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-all shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <span>Open Full Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
