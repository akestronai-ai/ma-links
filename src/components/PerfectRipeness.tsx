import { Droplet, Flower2 } from "lucide-react"
import perfectRipenessImg from "@/assets/images/perfect_ripeness.png"

export default function PerfectRipeness() {
  return (
    <section className="bg-surface-container-low py-8 md:py-12 mt-2">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Media */}
          <div className="rounded-[2rem] overflow-hidden box-shadow-organic-md relative aspect-square order-2 md:order-1 animate-in slide-in-from-left duration-700">
            <img
              alt="Perfect Ripe Sliced Mango"
              className="w-full h-full object-cover transform scale-101 hover:scale-103 transition-transform duration-700 ease-out"
              src={perfectRipenessImg}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col gap-6 order-1 md:order-2 animate-in slide-in-from-right duration-700">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Peak Flavor Profile
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface">
                The Perfect Ripeness
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
            </div>

            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
              Experience the legendary taste of Multan. Our mangoes are celebrated worldwide for their vibrant orange flesh, intoxicating aroma, and a profoundly sweet, honey-like flavor profile that melts in your mouth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-surface p-6 rounded-2xl box-shadow-organic-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                <div className="text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Droplet className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-on-surface mb-1">
                  Exceptional Juiciness
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Bursting with rich, golden nectar that represents pure sun-drenched hydration.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-2xl box-shadow-organic-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                <div className="text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Flower2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-on-surface mb-1">
                  Aromatic Profile
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  A distinct, heavenly tropical scent that precedes the flavor, setting the mood.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
