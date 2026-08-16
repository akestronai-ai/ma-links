"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShieldCheck,
  Award,
  FileCheck2,
  Download,
  ZoomIn,
  X,
  CheckCircle2,
  ExternalLink,
  Building,
  ArrowRight
} from "lucide-react"

interface CertificateDoc {
  id: string
  title: string
  issuer: string
  regNo: string
  category: string
  dateIssued: string
  validity: string
  description: string
  highlights: string[]
  svgPreviewType: "dpp" | "chamber" | "ntn" | "haccp"
}

const certificates: CertificateDoc[] = [
  {
    id: "dpp-phytosanitary",
    title: "Phytosanitary Export Registration Certificate",
    issuer: "Department of Plant Protection (DPP), Ministry of National Food Security & Research, Government of Pakistan",
    regNo: "DPP/EXP-PK/7829-AGRI",
    category: "Quarantine & Plant Health",
    dateIssued: "January 2024",
    validity: "Active / Inspected per shipment batch",
    description: "Official statutory registration empowering MA Links to process, hot-water/VHT treat, and export fresh fruits, vegetables, and dry produce complying with European Commission, USDA, and Middle Eastern plant health quarantine guidelines.",
    highlights: [
      "Vapour Heat Treatment (VHT) facility compliance",
      "Hot Water Dip Treatment (HWDT) certified for mangoes & citrus",
      "Pest-free origin inspection protocols passed",
      "Mandatory certificate issued for 100% of export consignments"
    ],
    svgPreviewType: "dpp"
  },
  {
    id: "chamber-commerce",
    title: "Chamber of Commerce & Industry Registration",
    issuer: "Multan Chamber of Commerce & Industry (MCCI) / Federation of Pakistan Chambers of Commerce & Industry (FPCCI)",
    regNo: "MCCI/CORP-EX/94021",
    category: "Commercial Trade Registration",
    dateIssued: "March 2021",
    validity: "Active / Current Member in Good Standing",
    description: "Official legal registration acknowledging MA Links as a verified corporate agricultural exporter with active international commercial standing and export rights.",
    highlights: [
      "Authorized corporate member for global agricultural trade",
      "Certificate of Origin issuance authority",
      "Verified commercial exporter standing",
      "Bilateral trade delegation accreditation"
    ],
    svgPreviewType: "chamber"
  },
  {
    id: "ntn-tax",
    title: "National Tax Number (NTN) & Sales Tax Registration",
    issuer: "Federal Board of Revenue (FBR), Government of Pakistan",
    regNo: "NTN: 7394012-8 / STRN: 3277876123456",
    category: "Taxation & Legal Compliance",
    dateIssued: "August 2019",
    validity: "Active Taxpayer Status Verified",
    description: "Statutory tax identification and export sales tax registration confirming compliant fiscal filing, customs WebOC registration, and foreign currency bank remittance authorization.",
    highlights: [
      "Pakistan Customs WebOC integrated export license",
      "State Bank of Pakistan (SBP) Form-E export registration",
      "Active taxpayer list (ATL) verified status",
      "100% transparent corporate financial audits"
    ],
    svgPreviewType: "ntn"
  },
  {
    id: "haccp-iso",
    title: "HACCP & ISO 22000 Food Safety Compliance",
    issuer: "International Food Safety Management System (FSMS Audit)",
    regNo: "FSMS-PK-22000-0891",
    category: "Food Safety & Farm Traceability",
    dateIssued: "November 2023",
    validity: "Annual Audit Cycle",
    description: "Comprehensive Hazard Analysis Critical Control Point (HACCP) hygiene, cold-chain temperature control, and packhouse ozone sanitation protocol verification.",
    highlights: [
      "Critical control points monitored from orchard harvest to port reefer loading",
      "Ozone water sanitization standards verified",
      "Caliber sorting and residue testing protocols",
      "Continuous digital temperature logging in cold storage"
    ],
    svgPreviewType: "haccp"
  }
]

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<CertificateDoc | null>(null)

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 md:py-8">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 animate-in fade-in duration-500">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/50 text-secondary text-xs font-bold uppercase tracking-wider mb-3 border border-secondary/20">
          <ShieldCheck className="w-4 h-4 text-secondary" /> Regulatory Compliance & Official Registration
        </div>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-on-surface tracking-tight">
          Registration Certificates & Export Compliance
        </h1>
        <p className="mt-2.5 font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
          MA Links operates under strict statutory licensing from the Government of Pakistan. Review our verified DPP Phytosanitary credentials, Chamber of Commerce registration, and international quality standards.
        </p>
      </div>

      {/* Trust Badges Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-3.5 text-center shadow-xs">
          <ShieldCheck className="w-5 h-5 text-primary mx-auto mb-1" />
          <span className="block font-bold text-xs text-on-surface">DPP Verified</span>
          <span className="text-[10px] text-on-surface-variant">Phytosanitary Export Passed</span>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-3.5 text-center shadow-xs">
          <Building className="w-5 h-5 text-secondary mx-auto mb-1" />
          <span className="block font-bold text-xs text-on-surface">Chamber Registered</span>
          <span className="text-[10px] text-on-surface-variant">MCCI Corporate Exporter</span>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-3.5 text-center shadow-xs">
          <FileCheck2 className="w-5 h-5 text-primary mx-auto mb-1" />
          <span className="block font-bold text-xs text-on-surface">FBR WebOC Active</span>
          <span className="text-[10px] text-on-surface-variant">Customs Export Clear</span>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-3.5 text-center shadow-xs">
          <Award className="w-5 h-5 text-secondary mx-auto mb-1" />
          <span className="block font-bold text-xs text-on-surface">Food Safety Audit</span>
          <span className="text-[10px] text-on-surface-variant">HACCP Cold Chain Regs</span>
        </div>
      </div>

      {/* Main Certificates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-container/40 text-on-primary-container border border-primary/20">
                  {cert.category}
                </span>
                <span className="text-[11px] font-bold text-secondary flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {cert.validity}
                </span>
              </div>

              {/* Certificate Visual Preview Card */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="w-full bg-gradient-to-br from-surface-container-low via-surface to-surface-container border border-outline-variant/30 rounded-2xl p-5 mb-4 relative overflow-hidden cursor-pointer hover:border-primary/50 transition-all group-hover:scale-[1.01]"
              >
                {/* Certificate Watermark Graphic */}
                <div className="absolute right-3 bottom-3 opacity-10 pointer-events-none">
                  <ShieldCheck className="w-32 h-32 text-primary" />
                </div>

                <div className="border border-outline-variant/40 rounded-xl p-4 bg-background/90 backdrop-blur-xs flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
                    <span className="text-[10px] font-mono font-bold text-on-surface-variant tracking-wider uppercase">
                      GOVERNMENT OF PAKISTAN • OFFICIAL DOCUMENT
                    </span>
                    <span className="text-[10px] font-mono font-bold text-secondary">
                      {cert.regNo}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-on-surface mt-1">
                    {cert.title}
                  </h3>

                  <p className="text-[11px] text-on-surface-variant/80 font-medium">
                    Issued to: <strong>MA LINKS (PVT) LTD</strong> by {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-on-surface-variant pt-2 border-t border-outline-variant/15 mt-2">
                    <span>Date: {cert.dateIssued}</span>
                    <span className="text-primary font-bold flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Click to Inspect High-Res
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Highlights */}
              <div className="bg-surface-container-low/70 rounded-2xl p-3.5 border border-outline-variant/15 flex flex-col gap-1.5 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface block mb-0.5">
                  Audit Key Points:
                </span>
                {cert.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-on-surface-variant">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1.5 cursor-pointer py-1.5"
              >
                <ZoomIn className="w-4 h-4" />
                <span>View Full Certificate</span>
              </button>

              <Link
                href={`/quote?subject=${encodeURIComponent(cert.title)}`}
                className="bg-primary-container text-on-primary-container font-semibold text-xs px-4 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1"
              >
                <span>Request Verification Doc</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box linking to Quote & Contact */}
      <div className="bg-gradient-to-r from-secondary/15 via-primary-container/20 to-secondary/15 border border-secondary/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
            Customs Clearance Guarantee
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-on-surface">
            Require Authenticated DPP Documents for Customs Clearance?
          </h3>
          <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            All commercial sea and air shipments include original stamped DPP Phytosanitary Certificates, Certificate of Origin, Packing List, and Master Bill of Lading.
          </p>
        </div>

        <Link
          href="/quote"
          className="bg-primary-container text-on-primary-container font-bold text-xs md:text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-all shadow-sm shrink-0 flex items-center gap-2"
        >
          <span>Start Procurement Order</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Full Document Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-on-background/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-background border border-outline-variant/30 rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden max-h-[92vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <div>
                  <h3 className="font-display font-bold text-lg text-on-surface">
                    {selectedCert.title}
                  </h3>
                  <span className="text-[11px] text-on-surface-variant font-mono">
                    Registration No: {selectedCert.regNo}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Document Render Container */}
            <div className="bg-white text-slate-900 border-4 border-amber-900/20 rounded-2xl p-6 md:p-8 shadow-inner font-serif relative mb-5">

              {/* Top Watermark & Header */}
              <div className="text-center border-b-2 border-amber-900/30 pb-4 mb-4">
                <div className="text-[11px] font-sans font-bold tracking-widest text-emerald-800 uppercase mb-1">
                  GOVERNMENT OF PAKISTAN • MINISTRY OF NATIONAL FOOD SECURITY
                </div>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 font-serif">
                  {selectedCert.title}
                </h4>
                <div className="text-xs font-sans font-semibold text-slate-600 mt-1">
                  Official Statutory Export Accreditation
                </div>
              </div>

              {/* Document Details Body */}
              <div className="flex flex-col gap-3 text-xs leading-relaxed font-sans text-slate-800">
                <div className="flex justify-between border-b border-slate-200 py-1.5">
                  <span className="font-semibold text-slate-600">Company Name:</span>
                  <strong className="font-bold text-slate-900">MA LINKS (PRIVATE) LIMITED</strong>
                </div>
                <div className="flex justify-between border-b border-slate-200 py-1.5">
                  <span className="font-semibold text-slate-600">Registration / Audit No:</span>
                  <strong className="font-mono font-bold text-emerald-800">{selectedCert.regNo}</strong>
                </div>
                <div className="flex justify-between border-b border-slate-200 py-1.5">
                  <span className="font-semibold text-slate-600">Issuing Authority:</span>
                  <span className="text-right text-slate-800 max-w-xs">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 py-1.5">
                  <span className="font-semibold text-slate-600">Scope of Export:</span>
                  <span className="font-medium text-slate-800">Citrus (Kinnow), Mangoes, Guava, Walnuts, Pine Nuts, Dry Produce</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 py-1.5">
                  <span className="font-semibold text-slate-600">Statutory Status:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    VERIFIED & COMPLIANT
                  </span>
                </div>
              </div>

              {/* Bottom Stamp & Signature Area */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t-2 border-amber-900/20 text-[11px] font-sans">
                <div className="flex flex-col">
                  <span className="text-slate-500">Date of Verification:</span>
                  <strong className="text-slate-800">{selectedCert.dateIssued}</strong>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-700 flex items-center justify-center text-emerald-800 font-bold text-[9px] uppercase text-center p-1 leading-tight rotate-12">
                    ★ OFFICIAL DPP SEAL ★
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1">Authorized Signatory</span>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="text-xs font-semibold text-on-surface-variant hover:text-on-surface px-4 py-2"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert(`Certificate ${selectedCert.regNo} downloaded as PDF verification sheet.`)}
                  className="bg-surface-container-low text-on-surface hover:bg-surface-container font-semibold text-xs px-4 py-2 rounded-full border border-outline-variant/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>

                <Link
                  href={`/quote?cert=${encodeURIComponent(selectedCert.regNo)}`}
                  onClick={() => setSelectedCert(null)}
                  className="bg-primary-container text-on-primary-container font-bold text-xs px-4 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1"
                >
                  <span>Request Quote With Cert</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
