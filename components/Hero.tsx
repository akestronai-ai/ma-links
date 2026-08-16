import Link from "next/link"
import { ArrowRight, Leaf, ShieldCheck, Truck, Sprout } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-4 pb-12 md:py-16 lg:py-20 flex items-center">

      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-1/4 w-[32rem] h-[32rem] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Adapted from GreenBasket Clean Reference */}
          <div className="lg:col-span-6 flex flex-col items-start z-10 animate-in slide-in-from-left duration-700">

            {/* Top Handwritten Script Tag */}
            <div className="flex items-center gap-2 mb-1">
              <span className="font-handwriting text-3xl sm:text-4xl md:text-[2.6rem] text-emerald-700 font-bold tracking-wide">
                Direct From Orchards & Farms
              </span>
              <span className="text-2xl animate-bounce">🍃</span>
            </div>

            {/* Large Bold Serif Heading */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#1b4332] tracking-tight leading-[1.08] my-3">
              Good produce <br/>
              <span className="text-[#081c15]">Good life</span>
            </h1>

            {/* Subtext */}
            <p className="font-sans text-sm md:text-base text-[#406a58] max-w-lg leading-relaxed mt-1 mb-7">
              Export-grade Kinnow mandarins, crisp winter guavas, mountain walnuts (Akhrot), Chilgoza pine nuts & sun-sweetened mangoes delivered fresh to global ports.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <Link
                href="/quote"
                className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-sans font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 flex items-center gap-3 cursor-pointer"
              >
                <span>Request Quote</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>

              <Link
                href="/catalog"
                className="bg-transparent hover:bg-[#1b4332]/5 text-[#1b4332] font-sans font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 border border-[#b7e4c7] hover:border-[#1b4332]/40"
              >
                <span>Explore Categories</span>
              </Link>
            </div>

            {/* 3 Trust Badges in a Row (Adapted from GreenBasket reference) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#b7e4c7]/40 w-full">

              <div className="flex items-start gap-2.5">
                <div className="text-emerald-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xs sm:text-sm text-[#1b4332] leading-snug">100% Export Grade</span>
                  <span className="text-[11px] sm:text-xs text-[#52796f] mt-0.5">DPP Certified & Natural</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="text-emerald-700 shrink-0 mt-0.5">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xs sm:text-sm text-[#1b4332] leading-snug">Global Reefer</span>
                  <span className="text-[11px] sm:text-xs text-[#52796f] mt-0.5">On-Time Air & Sea Cargo</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="text-emerald-700 shrink-0 mt-0.5">
                  <Sprout className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xs sm:text-sm text-[#1b4332] leading-snug">Origin Sourced</span>
                  <span className="text-[11px] sm:text-xs text-[#52796f] mt-0.5">Direct Farm Harvests</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Large Crisp Produce Bag Visual */}
          <div className="lg:col-span-6 relative z-10 animate-in slide-in-from-right duration-700">
            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-[#b7e4c7]/30 aspect-[4/3] group bg-white">

              {/* High-Resolution Fresh Produce Canvas Bag Image */}
              <img
                alt="Pakistani Fresh Export Produce: Kinnow Mandarins, Winter Guava, Walnuts, Pine Nuts, Ripe Mangoes"
                className="w-full h-full object-cover transform group-hover:scale-103 duration-700 ease-out"
                src="/images/hero_produce_canvas.jpg"
              />

              {/* Minimalist Floating Brand Badge */}
              <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-[#1b4332]/95 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20 text-white">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/15 flex items-center justify-center text-emerald-300">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                    Always Fresh
                  </span>
                  <span className="text-xs sm:text-sm font-display font-bold text-white tracking-tight">
                    MA Links Export
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
