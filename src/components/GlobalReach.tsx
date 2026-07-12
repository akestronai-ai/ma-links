import { useState } from "react"
import { Navigation, Globe2, Award, Zap } from "lucide-react"
import globalReachImg from "@/assets/images/global_reach.png"

interface HotSpot {
  city: string
  label: string
  desc: string
  top: string
  left: string
}

export default function GlobalReach() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)

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

  const hotspots: HotSpot[] = [
    {
      city: "Multan",
      label: "Origin Orchard Hub",
      desc: "Generational mango farms ensuring peak maturity, pre-cooling, and immediate cold storage.",
      left: "65%",
      top: "47%",
    },
    {
      city: "London",
      label: "European Gateway",
      desc: "Direct customs clearance and rapid cold chain dispatch to UK and EU supermarkets.",
      left: "45%",
      top: "33%",
    },
    {
      city: "New York",
      label: "North American Hub",
      desc: "FDA-approved cargo channel distributing multi-variety Multani mangoes to US cities.",
      left: "25%",
      top: "36%",
    },
    {
      city: "Dubai",
      label: "Middle East logistics Center",
      desc: "Continuous refrigeration logistics hub serving the Gulf Cooperation Council (GCC).",
      left: "59%",
      top: "49%",
    },
  ]

  const handleNodeClick = (city: string) => {
    setActiveHotspot(activeHotspot === city ? null : city)
  }

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Info & Stats Column */}
        <div className="lg:col-span-5 flex flex-col gap-6 animate-in slide-in-from-left duration-700">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Global Logistics Network
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface tracking-tight leading-tight text-shadow-organic">
              Connecting Multan <br className="hidden lg:block" />
              <span className="text-primary italic font-serif">to the World</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
          </div>
          
          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
            Delivering the taste of Pakistan to doorsteps around the world. Our optimized logistics and cold chain integration ensure farm-to-market freshness across continents within days of harvesting.
          </p>
          
          {/* Stats Board */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-container-low/60 backdrop-blur-sm border border-outline-variant/10 rounded-2xl p-5 text-left box-shadow-organic-sm hover:box-shadow-organic-md transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 group flex flex-col gap-2"
              >
                <div className="w-9 h-9 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <span className="block text-2xl font-display font-bold text-on-surface group-hover:text-primary transition-colors">
                    {stat.val}
                  </span>
                  <span className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mt-0.5 leading-normal">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Column */}
        <div className="lg:col-span-7 relative z-10 mt-6 lg:mt-0 animate-in slide-in-from-right duration-700">
          <div className="rounded-[2rem] overflow-hidden box-shadow-organic-md relative w-full aspect-[16/9] bg-surface-container-highest group border border-outline-variant/10">
            <img
              alt="Global Logistics Map"
              className="w-full h-full object-cover transform scale-101 hover:scale-103 transition-all duration-[2.5s] ease-out"
              src={globalReachImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Interactive Pulse Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.city}
                className="absolute -translate-x-1/2 -translate-y-1/2 group/node"
                style={{ left: spot.left, top: spot.top }}
                onMouseEnter={() => setActiveHotspot(spot.city)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                {/* Pulsing ring */}
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-primary/45 animate-ping -left-1 -top-1" />
                
                {/* Core dot */}
                <button
                  onClick={() => handleNodeClick(spot.city)}
                  onBlur={() => setActiveHotspot(null)}
                  className="relative flex h-4 w-4 rounded-full bg-primary border-2 border-white shadow-md cursor-pointer transition-transform duration-200 group-hover/node:scale-125 focus:outline-none focus:scale-125"
                  aria-label={`Logistics node in ${spot.city}`}
                />
                
                {/* Custom Tooltip */}
                {activeHotspot === spot.city && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-on-background/95 backdrop-blur-sm text-background p-3 rounded-xl shadow-xl w-48 text-xs z-50 animate-in fade-in zoom-in-95 duration-150 pointer-events-none">
                    <p className="font-bold border-b border-background/20 pb-1 mb-1 flex justify-between items-center text-primary-fixed-dim">
                      <span>{spot.city}</span>
                      <span className="text-[9px] uppercase tracking-wider text-background/60">Node</span>
                    </p>
                    <p className="font-semibold text-[10px] text-background">{spot.label}</p>
                    <p className="text-[10px] text-background/80 mt-1 leading-normal">{spot.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
