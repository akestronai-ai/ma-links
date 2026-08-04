import { HeartPulse, Eye, Zap, Heart } from "lucide-react"

export default function MangoNutrition() {
  const nutrients = [
    {
      title: "Immunity Boost (Vitamin C)",
      category: "Kinnow & Mangoes",
      desc: "High concentration of natural Vitamin C and flavonoids to enhance immune defense systems and cellular vitality.",
      icon: <HeartPulse className="w-6 h-6 text-on-primary-container" />,
    },
    {
      title: "Healthy Fats & Minerals",
      category: "Walnuts & Pine Nuts",
      desc: "Rich in Omega-3 fatty acids, magnesium, and essential trace minerals for cardiovascular and neurological health.",
      icon: <Heart className="w-6 h-6 text-on-primary-container" />,
    },
    {
      title: "Natural Energy & Fiber",
      category: "Dates & Figs",
      desc: "High in dietary fiber, potassium, and slow-release natural sugars to support digestion and sustained physical energy.",
      icon: <Zap className="w-6 h-6 text-on-primary-container" />,
    },
    {
      title: "Cellular Renewal & Vision",
      category: "Fresh Fruits & Vegetables",
      desc: "Packed with carotenoids (Vitamin A), polyphenols, and mangiferin antioxidants to shield cells from oxidative stress.",
      icon: <Eye className="w-6 h-6 text-on-primary-container" />,
    },
  ]

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 mb-4 md:mb-8">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface inline-block relative">
          Nutritional Excellence Across All Produce
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-primary rounded-full"></div>
        </h2>
        <p className="mt-8 font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          From fresh tropical mangoes and citrus to nutrient-dense dry fruits and vegetables, packed with vital vitamins and natural goodness.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {nutrients.map((item) => (
          <div
            key={item.title}
            className="bg-surface-container-lowest p-6 rounded-2xl box-shadow-organic-sm text-center border border-outline-variant/10 hover:-translate-y-1 transition-transform flex flex-col items-center justify-between"
          >
            <div>
              <div className="w-12 h-12 mx-auto bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-4 shadow-sm">
                {item.icon}
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full mb-2">
                {item.category}
              </span>
              <h3 className="font-display font-bold text-lg text-on-surface mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
