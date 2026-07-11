import { ArrowRight } from "lucide-react"
import mangoSkin from "@/assets/images/mango_skin.png"
import heroCrate from "@/assets/images/hero_crate.png"

interface HeroProps {
  onOpenQuote: () => void
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 overflow-hidden">
      
      {/* Organic Accents */}
      
      {/* Mango skin bottom-right */}
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none transform rotate-45 drop-shadow-leaf bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('${mangoSkin}')`
        }}
        title="Detailed close up of a golden chaunsa mango skin texture, organic curves, sun-drenched lighting, premium fruit export context."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        
        {/* Info Area */}
        <div className="md:col-span-5 flex flex-col gap-6 z-10 animate-in slide-in-from-left duration-700">
          
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-tight leading-tight text-shadow-organic">
            Premium Multan Mangoes, <br/>
            <span className="text-primary italic font-serif">Exported Fresh</span> to the World
          </h1>
          
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Sourced directly from the sun-drenched orchards of Multan. Handpicked at perfect maturity, meticulously graded, and delivered globally with uncompromising quality.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <button 
              onClick={onOpenQuote}
              className="bg-primary-container text-on-primary-container font-sans font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 box-shadow-organic-sm hover:-translate-y-1 border-b-2 border-[#e6a100] active:scale-95 cursor-pointer flex items-center gap-2"
            >
              Order Now <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#varieties"
              className="bg-secondary text-on-secondary font-sans font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-all duration-300 box-shadow-organic-sm hover:-translate-y-1 active:scale-95 border-b-2 border-[#2c4a3b]"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Image Area */}
        <div className="md:col-span-7 relative z-10 mt-10 md:mt-0 animate-in slide-in-from-right duration-700">
          <div className="relative rounded-[2rem] overflow-hidden box-shadow-organic-md aspect-[1.49] group hover:box-shadow-organic-md transition-all duration-500">
            <img 
              alt="Premium Multan Mangoes in Crate" 
              className="w-full h-full object-cover transform hover:scale-103 duration-700 ease-out" 
              src={heroCrate}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  )
}
