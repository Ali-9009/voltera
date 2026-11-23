import CartShell from "@/components/cart/CartShell";
import FloatingCart from "@/components/FloatingCart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterPopup from "@/components/NewsletterPopup";
import ResearcherGate from "@/components/ResearcherGate";

import "@/styles/globals.css";

import { DM_Sans, Russo_One } from "next/font/google";

export const metadata = {
  metadataBase: new URL("https://volterasciences.com"),

  title: {
    default: "Voltera Sciences | Premium Research Peptides",
    template: "%s | Voltera Sciences",
  },

  description:
    "Discover premium research peptides at Voltera Sciences. Explore laboratory-tested research compounds with independent third-party testing, verified purity, and COA documentation.",

  applicationName: "Voltera Sciences",

  keywords: [
    "Voltera Sciences",
    "Research Peptides",
    "Premium Research Peptides",
    "Laboratory Research",
    "Research Compounds",
    "Third-Party Tested Peptides",
    "Certificate of Analysis",
    "COA Verified Peptides",
    "Scientific Research",
    "Laboratory Tested Peptides",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Voltera Sciences | Premium Research Peptides",
    description:
      "Purity. Precision. Performance. Discover premium research compounds with independent third-party testing and verified COA documentation.",
    url: "https://volterasciences.com",
    siteName: "Voltera Sciences",
    type: "website",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voltera Sciences - Premium Research Peptides",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Voltera Sciences | Premium Research Peptides",
    description:
      "Purity. Precision. Performance. Premium research compounds by Voltera Sciences.",
    images: ["/brand/og-image.png"],
  },
};
const headingFont = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo-one",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans antialiased">
        <CartShell>
          <ResearcherGate />
          <NewsletterPopup />
          <FloatingCart />

          <Header />

          {children}

          <Footer />
        </CartShell>
      </body>
    </html>
  );
}