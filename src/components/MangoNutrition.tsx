import { HeartPulse, Eye, Leaf, Heart } from "lucide-react"

export default function MangoNutrition() {
  const nutrients = [
    {
      title: "Vitamin C",
      desc: "Boosts immune defense systems, promotes iron absorption, and maintains radiant skin complexion.",
      icon: <HeartPulse className="w-6 h-6 text-on-primary-container" />,
    },
    {
      title: "Vitamin A",
      desc: "Essential for eye health, cell rejuvenation, and maintaining clean respiratory lining.",
      icon: <Eye className="w-6 h-6 text-on-primary-container" />,
    },
    {
      title: "Dietary Fiber",
      desc: "Supports digestive functions, controls glycemic responses, and keeps gut micro-flora healthy.",
      icon: <Leaf className="w-6 h-6 text-on-primary-container" />,
    },
    {
      title: "Antioxidants",
      desc: "Packed with polyphenols (such as mangiferin) to defend cells against free radical oxidation.",
      icon: <Heart className="w-6 h-6 text-on-primary-container" />,
    },
  ]

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 mb-4 md:mb-8">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface inline-block relative">
          Mango Nutrition
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
        <p className="mt-8 font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Not just delicious, but packed with vital nutrients to support a healthy lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {nutrients.map((item) => (
          <div
            key={item.title}
            className="bg-surface-container-lowest p-6 rounded-2xl box-shadow-organic-sm text-center border border-outline-variant/10 hover:-translate-y-1 transition-transform"
          >
            <div className="w-12 h-12 mx-auto bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-4 shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-display font-bold text-lg text-on-surface mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
