import { Sparkles } from "lucide-react"
import chaunsaImg from "@/assets/images/chaunsa.png"
import sindhriImg from "@/assets/images/sindhri.png"
import anwarRatolImg from "@/assets/images/anwar_ratol.png"
import langraImg from "@/assets/images/langra.png"
import dusehriImg from "@/assets/images/dusehri.png"
import saroliImg from "@/assets/images/saroli.png"

interface Variety {
  name: string
  tagline: string
  desc: string
  image: string
  alt: string
}

export default function MangoVarieties() {
  const varieties: Variety[] = [
    {
      name: "Chaunsa",
      tagline: "Sweet & Aromatic",
      desc: "Widely regarded as the king of mangoes, famous for its golden color, rich aroma, and luscious, sweet taste.",
      image: chaunsaImg,
      alt: "A close-up premium photo of a single ripe Chaunsa mango with a fresh green leaf, isolated on a soft cream background.",
    },
    {
      name: "Sindhri",
      tagline: "Large & Honey-Sweet",
      desc: "Elongated, yellow variety known for its extreme sweetness, firm fiberless flesh, and excellent shelf-life.",
      image: sindhriImg,
      alt: "A pristine Sindhri mango, slightly elongated shape, bright yellow skin, isolated on a clean cream background.",
    },
    {
      name: "Anwar Ratol",
      tagline: "Intense Flavor",
      desc: "A smaller mango that packs an intensely sweet punch and a legendary aroma that defines the peak mango season.",
      image: anwarRatolImg,
      alt: "An Anwar Ratol mango, small and plump, pale yellow with a slight green tinge, resting on a white surface.",
    },
    {
      name: "Langra",
      tagline: "Fibreless & Tangy",
      desc: "Distinct green skin and rich orange flesh with a unique sweet-acid blend that is highly prized by connoisseurs.",
      image: langraImg,
      alt: "A green Langra mango, oval shaped, vibrant green skin, isolated on an off-white background.",
    },
    {
      name: "Dusehri",
      tagline: "Rich & Juicy",
      desc: "Delicate, sweet flavor with outstanding juiciness and a smooth texture. A historic variety of the subcontinent.",
      image: dusehriImg,
      alt: "A ripe Dusehri mango, elongated and yellowish-orange, sitting on a clean luxury cream backdrop.",
    },
    {
      name: "Saroli",
      tagline: "Early Season Sweetness",
      desc: "The very first mango to ripen in the summer, offering refreshing sweetness when the season starts.",
      image: saroliImg,
      alt: "A fresh Saroli mango, light green transitioning to yellow, isolated on a minimal premium cream background.",
    },
  ]

  return (
    <section id="varieties" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface inline-block relative">
          Our Premium Mango Varieties
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
        <p className="mt-8 font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Discover the rich diversity of Multan's finest exports, each offering a unique flavor profile of sweetness, aroma, and texture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {varieties.map((item, idx) => (
          <div
            key={item.name}
            className="bg-surface-container-lowest rounded-3xl p-6 flex flex-col items-center box-shadow-organic-sm hover:box-shadow-organic-md transition-all duration-300 hover:-translate-y-2 group border border-outline-variant/10 relative overflow-hidden animate-in fade-in slide-in-from-bottom duration-500"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Visual shine effect on card hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            {/* Floating variety image */}
            <div className="w-40 h-40 mb-6 relative drop-shadow-leaf group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                alt={item.name}
                className="max-w-full max-h-full object-contain"
                src={item.image}
                title={item.alt}
              />
            </div>

            {/* Variety Content */}
            <div className="text-center flex flex-col items-center gap-2 mt-auto">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-secondary bg-secondary-container/50 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-secondary" /> {item.tagline}
              </span>
              <h3 className="font-display font-bold text-xl text-on-surface mt-1 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
