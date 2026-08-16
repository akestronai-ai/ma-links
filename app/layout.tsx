import type { Metadata } from "next";
import { Work_Sans, Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "MA Links | Pakistani Agricultural Produce Exporter",
  description:
    "Export-grade Kinnow mandarins, winter guavas, walnuts, pine nuts & premier summer mangoes from Pakistan's Multan agricultural belt delivered fresh to global ports.",
  icons: {
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzHL2n3kRaDvUfLcLzf1uLsqGFRcRwUZ7oJeSlVzr_S87b9F7rC7-eieGh0txtFNdUkxvl3ZiHqwXBPWRIG0fdlFhFkxgLrucdAkPhIvaJECKE0gof9wu3ULSo6SRLprK7TXBbDEp_D7Wkag5xIZh96JciC_eHJwfMQZvYLrgG0-YZrTEFm7nCeLqmpOb6f7SG4blP5mV2YV_3dN5TZpAQ9FwMG3xsy26x1RAdZD5D9iquo_TJT20IvkN6AaM8PDPWlMAu71Wx--s",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable} ${caveat.variable} light`}
    >
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <div className="bg-background min-h-screen text-on-background selection:bg-primary-container selection:text-on-primary-container flex flex-col justify-between">
          <ScrollToTop />
          <Navbar />
          <main className="pt-18 md:pt-20 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
