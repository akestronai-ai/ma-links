import { Sparkles } from "lucide-react"

interface Variety {
  name: string
  tagline: string
  desc: string
  image: string
  alt: string
}

export default function MangoVarieties() {
  const varieties: Variety[] = [
    {
      name: "Chaunsa",
      tagline: "Sweet & Aromatic",
      desc: "Widely regarded as the king of mangoes, famous for its golden color, rich aroma, and luscious, sweet taste.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABDTJw9iq5l44TC1I9E6tuJNpekR6RoPWUp-SOTxdGBS6WWwHz-cfUTRAR20gwnKedA0RafcQXoE4K7AhFE0GNrDq9AaAdzaPqGM8MEslAN-UNf7v-szRLG9lUl1tzpDQtktX_RJTnGgDApGI7xrPk8sFM5QMOFvseOp0b5AtN2H7eTMrrF4VjzIFvirLOe3ZZpVx2aKU04u7JpdKK5yfK5STUPY32LCg26K6WPFnTgNbpbWnbg2OWbpvytf4C_KvuRYeutMtdz-8",
      alt: "A close-up premium photo of a single ripe Chaunsa mango with a fresh green leaf, isolated on a soft cream background.",
    },
    {
      name: "Sindhri",
      tagline: "Large & Honey-Sweet",
      desc: "Elongated, yellow variety known for its extreme sweetness, firm fiberless flesh, and excellent shelf-life.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy15ebNKLB9MwfGafyBC5ANjW99YgGwTmo-k7vHkv3jXxhRGt6BIuOYXBJ9h7E2XoT0hiyaliJFCeOaJKFmCUjA7l3I64mUAuO-McONbv3koH3ll13wcDb9_EVOPEsWDdX7SaG99dB_mXvOmw0V3GVp7bZgJB-tWprEipbakbUDMmGuycYWrOH3glGNEqffoFzZhOWDe5Y2eRJ2eMnUj1DJBFVD-7PiMm3y4D0Ucbr_JPtXO4Swh2RZIgHy0zXzifEUzhloDltz9w",
      alt: "A pristine Sindhri mango, slightly elongated shape, bright yellow skin, isolated on a clean cream background.",
    },
    {
      name: "Anwar Ratol",
      tagline: "Intense Flavor",
      desc: "A smaller mango that packs an intensely sweet punch and a legendary aroma that defines the peak mango season.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADAkfAdBcRDAVeeeY0ML82JLwss--f8uUEC21uRq3TgWWWeMrBS3U8hz-UvzHushcd1hh_7eUT1Uqdah2NlY_bQU1AfLVwhdIsSV4btqhjisu9uf6PqosisxmA-6T1qoYUs7k_oelIpvHZBssZ9lyPi65FMId8bWRdzpDXK6bzpYpbNygEDYXha6J1CHrg-7Awzaqeen_sGhyrIYG5JvQp2kwAz7mpm5epZg55-xOsjoATPD4lf7P3KrpAKUZTnfPL8aGG5hU-9tU",
      alt: "An Anwar Ratol mango, small and plump, pale yellow with a slight green tinge, resting on a white surface.",
    },
    {
      name: "Langra",
      tagline: "Fibreless & Tangy",
      desc: "Distinct green skin and rich orange flesh with a unique sweet-acid blend that is highly prized by connoisseurs.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0HZwEKQHS8DNLU3AsyonC5MuCUCegp_aXfix3E2vI6eCuxLko8yAWe_qAjl6QJ_-aF8-uafHwY5N_UJ99tSIWHNh8IvdpGqzpV7CtN3OIjiElANIPfd-0D5ayIJ-30d9Nq9L0uZuliRMz6HWaU41mTBMbdqg3rw0ksjkE8utb8sFtrOxSE-aCpVcgf9-bHthwet4jdi-LFWqRhSPDdWTmEaLD0-U5i_AeZ9I_dCPKcDuY6N1boeJEcQla0ce4jezQPJrKaYuL1fY",
      alt: "A green Langra mango, oval shaped, vibrant green skin, isolated on an off-white background.",
    },
    {
      name: "Dusehri",
      tagline: "Rich & Juicy",
      desc: "Delicate, sweet flavor with outstanding juiciness and a smooth texture. A historic variety of the subcontinent.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwIob_Dz5lz88vvtkB9afKwW2KJv4WY0hTTC4DvLpHgwYINPhXmkHAPfPGZC83xZDdQs0_29In28fecddUeSQPuY8N9o5_Djo6JwAWIkKhNSdB-i8y58cCnlOb2tBTWwgpKNx4UaC7JjjXefUIFzP5kvqX-r7EuLzuT6I7y4Kb_s7doDbjhu5Zckxg6-Zl4B_4nsaev-Ew_sPm81Og63ESliFLyzcFnDeFK8_VX7hhN6dD9HUGET2prDcaho78QuRa4ltMoaxecJ0",
      alt: "A ripe Dusehri mango, elongated and yellowish-orange, sitting on a clean luxury cream backdrop.",
    },
    {
      name: "Saroli",
      tagline: "Early Season Sweetness",
      desc: "The very first mango to ripen in the summer, offering refreshing sweetness when the season starts.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkLNrknzlMda-wsFd-wDxyuFQgomG9p-QD54x2UwydK7dA6W5IPac_qBOmPxXj4oViyEMFigGeDjE9cqyABjDLuoR5kLqddOifXAl6VwLA8PZVBCQKHLF2_Ipn4lb1JcyCMu8iz3HWJGxvwrVVXai1Lcrq34Tvh-q251BQTHCl9ogbTApapCsSV8tfJQ7mqiVbKQkFzSPJ-eAgIKKPIp3aZBmmu3nXll5MxUhiyvL1xDBmfD46pMukT_sCafblWr720VFLE7qSieA",
      alt: "A fresh Saroli mango, light green transitioning to yellow, isolated on a minimal premium cream background.",
    },
  ]

  return (
    <section id="varieties" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface inline-block relative">
          Our Premium Mango Varieties
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
        <p className="mt-8 font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Discover the rich diversity of Multan's finest exports, each offering a unique flavor profile of sweetness, aroma, and texture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {varieties.map((item, idx) => (
          <div
            key={item.name}
            className="bg-surface-container-lowest rounded-3xl p-6 flex flex-col items-center box-shadow-organic-sm hover:box-shadow-organic-md transition-all duration-300 hover:-translate-y-2 group border border-outline-variant/10 relative overflow-hidden animate-in fade-in slide-in-from-bottom duration-500"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Visual shine effect on card hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            {/* Floating variety image */}
            <div className="w-40 h-40 mb-6 relative drop-shadow-leaf group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                alt={item.name}
                className="max-w-full max-h-full object-contain"
                src={item.image}
                title={item.alt}
              />
            </div>

            {/* Variety Content */}
            <div className="text-center flex flex-col items-center gap-2 mt-auto">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-secondary bg-secondary-container/50 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-secondary" /> {item.tagline}
              </span>
              <h3 className="font-display font-bold text-xl text-on-surface mt-1 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
