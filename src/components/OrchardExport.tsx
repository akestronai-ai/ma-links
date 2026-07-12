import { useState } from "react"
import { ShieldCheck, Thermometer, Box, Truck, Check } from "lucide-react"
import orchardExportImg from "@/assets/images/orchard_export.png"

export default function OrchardExport() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Quality Sorting",
      desc: "Strict manual and sensory inspection where mangoes are sorted by size, color, aroma, and skin texture.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Phytosanitary Wash",
      desc: "Cleansing using hot water treatment (HWT) to ensure complete compliance with EU, UK, and US regulations.",
      icon: <Thermometer className="w-5 h-5" />,
    },
    {
      title: "Padded Packaging",
      desc: "Individually wrapped in foam socks and carefully placed in heavy-duty ventilated export crates.",
      icon: <Box className="w-5 h-5" />,
    },
    {
      title: "Cold Chain Transport",
      desc: "Immediate pre-cooling followed by temperature-controlled air or sea cargo shipping to global networks.",
      icon: <Truck className="w-5 h-5" />,
    },
  ]

  return (
    <section id="certifications" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface inline-block relative">
          From Orchard to Export
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
        <p className="mt-8 font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Our mangoes begin their journey in the lush, sun-drenched orchards of Multan, meticulously cared for by generations of expert farmers before being prepared for the global stage.
        </p>
      </div>

      {/* Main Image Banner */}
      <div className="rounded-[2rem] overflow-hidden box-shadow-organic-md relative w-full aspect-[16/9] md:aspect-[21/9] group mb-12">
        <img
          alt="From Orchard to Export Timeline"
          className="w-full h-full object-cover transform scale-101 hover:scale-103 duration-[1.5s] ease-out"
          src={orchardExportImg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-lg z-10 flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full w-max">
            Process Timeline
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold">Traceable Farm-to-Fork Logistics</h3>
          <p className="text-sm text-white/80 hidden sm:block">
            We preserve original freshness and taste from the branch to the terminal, maintaining a cold chain cycle throughout the process.
          </p>
        </div>
      </div>

      {/* Interactive Timeline Widget */}
      <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-[2rem] p-6 md:p-10 box-shadow-organic-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Timeline steps */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="font-display font-bold text-xl text-on-surface mb-2">Our Step-by-Step Export Cycle</h4>
            <div className="flex flex-col gap-3">
              {steps.map((step, idx) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-4 text-left p-3.5 rounded-2xl transition-all duration-300 border ${
                    activeStep === idx
                      ? "bg-background border-primary/20 box-shadow-organic-sm translate-x-2"
                      : "bg-transparent border-transparent hover:bg-surface-container-low"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      activeStep === idx
                        ? "bg-primary text-on-primary scale-110"
                        : "bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {idx < activeStep ? <Check className="w-5 h-5" /> : step.icon}
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-on-surface">{step.title}</h5>
                    <span className="text-[11px] text-on-surface-variant line-clamp-1">{step.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step Detail Display Card */}
          <div className="lg:col-span-7 bg-background border border-outline-variant/10 rounded-[1.5rem] p-4 md:p-8 box-shadow-organic-sm relative min-h-[220px] flex flex-col justify-center animate-in fade-in duration-300">
            <div className="absolute top-6 right-6 text-primary-fixed-dim/40 text-7xl font-display font-extrabold select-none">
              0{activeStep + 1}
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-inner">
                {steps[activeStep].icon}
              </div>
              <h4 className="font-display font-bold text-2xl text-on-surface">{steps[activeStep].title}</h4>
            </div>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
