import { CheckCircle2, ShieldCheck, Award, FileCheck2 } from "lucide-react"
import qualityAssuranceImg from "@/assets/images/quality_assurance.png"

const certificationsList = [
  {
    name: "DPP Phytosanitary Certificate",
    issuer: "Ministry of National Food Security & Research (Government of Pakistan)",
    status: "Active (Mandatory for all export shipments)",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />
  },
  {
    name: "GlobalGAP Certification",
    issuer: "Good Agricultural Practices (Farm Traceability)",
    status: "[CONFIRM: Active or In Progress with Exporter]",
    icon: <Award className="w-5 h-5 text-secondary" />
  },
  {
    name: "HACCP Food Safety Management",
    issuer: "Hazard Analysis Critical Control Point",
    status: "[CONFIRM: Active or In Progress with Exporter]",
    icon: <FileCheck2 className="w-5 h-5 text-primary" />
  },
  {
    name: "ISO 22000 Quality Standard",
    issuer: "International Food Safety Management Systems",
    status: "[CONFIRM: Active or In Progress with Exporter]",
    icon: <Award className="w-5 h-5 text-secondary" />
  }
]

export default function QualityAssurance() {
  const points = [
    {
      title: "Hot Water Dip / VHT Phytosanitary Treatment",
      desc: "Mandatory Vapour Heat Treatment (VHT) and Hot Water Dip Treatment (HWDT) to comply with European, North American, and East Asian quarantine protocols.",
    },
    {
      title: "Multi-Stage Sanitizing & Caliber Grading",
      desc: "Ozone washing and optical caliber sorting by fruit weight, Brix density, and uniform skin finish.",
    },
    {
      title: "Vented Cold-Chain Packing",
      desc: "Heavy-duty double-walled corrugated cartons with moisture-resistant lining and cold-chain temperature logger integration.",
    },
  ]

  return (
    <section id="certifications" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Details */}
        <div className="flex flex-col gap-6 animate-in slide-in-from-left duration-700">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> B2B Phytosanitary & Quarantine Standards
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface">
              Quality Assurance & Compliance
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
          </div>

          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
            International fruit and vegetable procurement requires absolute regulatory compliance. Every shipment is inspected by plant protection quarantine officers prior to customs departure.
          </p>

          {/* Quality Protocol Bullets */}
          <div className="flex flex-col gap-4 mt-2">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4 items-start">
                <div className="text-primary mt-1 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-on-surface">
                    {point.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant mt-0.5">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Badges Grid */}
          <div className="mt-6 pt-6 border-t border-outline-variant/15">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-on-surface mb-4">
              Official Certificates & Regulatory Audits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificationsList.map((cert) => (
                <div key={cert.name} className="bg-surface-container-low p-3.5 rounded-2xl border border-outline-variant/10 flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{cert.icon}</div>
                  <div>
                    <h5 className="font-bold text-xs text-on-surface">{cert.name}</h5>
                    <p className="text-[11px] text-on-surface-variant/80">{cert.issuer}</p>
                    <span className="inline-block mt-1 text-[10px] font-semibold text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column - Media & Inspection Badges */}
        <div className="animate-in slide-in-from-right duration-700 flex flex-col gap-4">
          <div className="relative rounded-[2rem] overflow-hidden box-shadow-organic-md aspect-[4/3] group border border-outline-variant/10">
            <img
              alt="Quality Assurance Inspection & Cold Chain Packaging"
              className="w-full h-full object-cover transform scale-101 hover:scale-103 transition-transform duration-700 ease-out"
              src={qualityAssuranceImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/20 shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Pre-Shipment Protocol</span>
              <h5 className="font-bold text-sm text-on-surface">100% Phytosanitary Inspection Passed</h5>
              <p className="text-xs text-on-surface-variant mt-0.5">Customs clearance documentation attached to all master air/sea bills.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
