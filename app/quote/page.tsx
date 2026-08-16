import { Suspense } from "react"
import QuotePageClient from "./QuotePageClient"

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 md:py-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="font-display font-bold text-3xl md:text-5xl text-on-surface tracking-tight">
              Request Commercial Export Quotation
            </h1>
          </div>
        </div>
      }
    >
      <QuotePageClient />
    </Suspense>
  )
}
