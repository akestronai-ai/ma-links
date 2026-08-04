import { useState } from "react"
import { ShieldCheck, Thermometer, Box, Truck, Check, Globe } from "lucide-react"
import orchardExportImg from "@/assets/images/orchard_export.png"

export default function OrchardExport() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Optical & Caliber Sorting",
      desc: "Produce is mechanically and manually sorted by caliber size, Brix sugar content, skin finish, and fruit weight.",
      icon: <ShieldCheck className="w-5 h-5" />,
      b2bSpecs: "Grade A Export Calibers: Mangoes (4kg/5kg), Kinnow (10kg/13kg/14kg), Onions (45-70mm+), Walnuts (30mm+)."
    },
    {
      title: "Phytosanitary & VHT Wash",
      desc: "Mandatory Vapour Heat Treatment (VHT) and Hot Water Dip Treatment (HWDT) enforced under Department of Plant Protection (DPP) supervision.",
      icon: <Thermometer className="w-5 h-5" />,
      b2bSpecs: "100% compliant with EU, UK, Middle East, and US Department of Agriculture (USDA) plant health regulations."
    },
    {
      title: "Export Packaging & Palletization",
      desc: "Vented double-walled corrugated cartons with protective foam netting, shrink-wrapped on treated wooden ISPM-15 export pallets.",
      icon: <Box className="w-5 h-5" />,
      b2bSpecs: "Master carton payloads: 3.5kg, 4kg, 5kg, 10kg, 13kg, 14kg, 25kg mesh bags, and vacuum pouches."
    },
    {
      title: "Reefer Cold Chain & Dispatch",
      desc: "Immediate forced-air pre-cooling to +2°C to +12°C (produce specific) with continuous digital temperature loggers.",
      icon: <Truck className="w-5 h-5" />,
      b2bSpecs: "Lead Times: Air Freight (3–5 days door-to-airport), Sea Cargo FCL Reefer 20ft/40ft (10–21 days port-to-port)."
    },
  ]

  return (
    <section id="b2b-logistics" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface inline-block relative">
          Export Supply Chain & Cold Chain Logistics
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-primary rounded-full"></div>
        </h2>
        <p className="mt-8 font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          From Punjab orchards to global ports—combining strict phytosanitary compliance, cold chain integrity, and flexible Incoterms.
        </p>
      </div>

      {/* Main Image Banner */}
      <div className="rounded-[2rem] overflow-hidden box-shadow-organic-md relative w-full aspect-[16/9] md:aspect-[21/9] group mb-12 border border-outline-variant/10">
        <img
          alt="Traceable Farm-to-Port Export Logistics"
          className="w-full h-full object-cover transform scale-101 hover:scale-103 duration-[1.5s] ease-out"
          src={orchardExportImg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-xl z-10 flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim bg-primary/30 backdrop-blur-md px-3 py-1 rounded-full w-max border border-white/20">
            FOB Karachi • CIF Destination • CFR
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold">Traceable Farm-to-Port Cold Chain</h3>
          <p className="text-sm text-white/80 hidden sm:block">
            Preserving Brix sweetness, firm texture, and shelf life from Multan packinghouses to international destination ports.
          </p>
        </div>
      </div>

      {/* Interactive B2B Logistics Widget */}
      <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-[2rem] p-6 md:p-10 box-shadow-organic-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Timeline steps */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="font-display font-bold text-xl text-on-surface mb-2">Our 4-Stage Export Protocol</h4>
            <div className="flex flex-col gap-3">
              {steps.map((step, idx) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-4 text-left p-3.5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    activeStep === idx
                      ? "bg-background border-primary/30 box-shadow-organic-sm translate-x-2"
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
          <div className="lg:col-span-7 bg-background border border-outline-variant/15 rounded-[1.5rem] p-6 md:p-8 box-shadow-organic-sm relative min-h-[240px] flex flex-col justify-center animate-in fade-in duration-300">
            <div className="absolute top-6 right-6 text-primary-fixed-dim/30 text-7xl font-display font-extrabold select-none">
              0{activeStep + 1}
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-inner">
                {steps[activeStep].icon}
              </div>
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">Export Standard Stage {activeStep + 1}</span>
                <h4 className="font-display font-bold text-2xl text-on-surface">{steps[activeStep].title}</h4>
              </div>
            </div>

            <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-4">
              {steps[activeStep].desc}
            </p>

            <div className="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/10 text-xs">
              <span className="font-bold text-primary flex items-center gap-1.5 mb-1">
                <Globe className="w-3.5 h-3.5" /> Commercial & Technical Specification:
              </span>
              <p className="text-on-surface font-medium">{steps[activeStep].b2bSpecs}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
