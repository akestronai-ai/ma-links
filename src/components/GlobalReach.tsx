import { Navigation, Globe2, Award, Zap } from "lucide-react"

export default function GlobalReach() {
  const stats = [
    {
      label: "Countries Exported",
      val: "15+",
      icon: <Globe2 className="w-5 h-5 text-secondary" />,
    },
    {
      label: "Annual Shipment",
      val: "1,200+ Tons",
      icon: <Navigation className="w-5 h-5 text-secondary" />,
    },
    {
      label: "Phytosanitary Approval",
      val: "100%",
      icon: <Award className="w-5 h-5 text-secondary" />,
    },
    {
      label: "Farm-to-Market Speed",
      val: "48-72 Hrs",
      icon: <Zap className="w-5 h-5 text-secondary" />,
    },
  ]

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface inline-block relative">
          Global Reach
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
        <p className="mt-8 font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Delivering the taste of Pakistan to doorsteps around the world. Our optimized logistics and cold chain integration ensure farm-to-market freshness across continents.
        </p>
      </div>

      {/* Map Image Container */}
      <div className="rounded-[2rem] overflow-hidden box-shadow-organic-md relative w-full aspect-[16/9] bg-surface-container-highest group">
        <img
          alt="Global Logistics Map"
          className="w-full h-full object-cover transform scale-101 hover:scale-103 transition-all duration-[2s] ease-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEgifo-_iCodM77oixnXipxNiwOMF-TO-dpHjHRQ3JUSQaoFWyHZYvn4GJjtNMO7htOffZfEALcAQ6VbdvhZxPeBa15KxWnGyNtsqNnvEJWDrLWfXhS73kwj8FfGSqy9XUSfHiYb529luj7-a70W2urjo_8ke0reTti4-SSBPYKqrhOtaqs2K1UjciPVxxgcPLGnK_43GelKUaOrvn6HzeQ-hQookdS_DCtKSpH7ILbUbd9UIZnHShyQfp5p67AncmyLTV_RIMMK8"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Stats Board */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 text-center box-shadow-organic-sm hover:-translate-y-1 transition-transform"
          >
            <div className="w-10 h-10 mx-auto bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-3">
              {stat.icon}
            </div>
            <span className="block text-2xl md:text-3xl font-display font-bold text-on-surface">
              {stat.val}
            </span>
            <span className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
