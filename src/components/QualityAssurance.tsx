import { CheckCircle2 } from "lucide-react"
import qualityAssuranceImg from "@/assets/images/quality_assurance.png"

export default function QualityAssurance() {
  const points = [
    {
      title: "Handpicked Maturity",
      desc: "Harvested at peak sugar development to ensure maximum flavor and longevity.",
    },
    {
      title: "Sanitary Washing & Grading",
      desc: "Thorough multi-stage sanitizing followed by precise grading for weight and shape.",
    },
    {
      title: "Ventilated Padded Packing",
      desc: "Double-walled shipping cartons with protective padding to eliminate transit damage.",
    },
  ]

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Details */}
        <div className="flex flex-col gap-6 animate-in slide-in-from-left duration-700">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Zero-Defect Standard
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface">
              Quality Assurance
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
          </div>

          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
            Every single mango undergoes a rigorous grading process. Our expert teams carefully inspect, wash, and pack each fruit by hand, ensuring that only the absolute finest quality produce makes it into our premium export crates.
          </p>

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
        </div>

        {/* Right Column - Media */}
        <div className="animate-in slide-in-from-right duration-700">
          <div className="relative rounded-[2rem] overflow-hidden box-shadow-organic-md aspect-[4/3] group">
            <img
              alt="Quality Assurance Packing"
              className="w-full h-full object-cover transform scale-101 hover:scale-103 transition-transform duration-700 ease-out"
              src={qualityAssuranceImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  )
}
