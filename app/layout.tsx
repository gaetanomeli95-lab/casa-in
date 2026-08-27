import type { Metadata } from "next";
import { DM_Sans, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/data";

const SITE_URL = "https://casa-in.vercel.app";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Casa IN Arredamenti | Carini · Palermo",
  description:
    "Cucine, camere, living e soluzioni d'arredo progettate insieme a te nello showroom Casa IN di Carini.",
  keywords: [
    "arredamenti Carini",
    "cucine Carini",
    "arredamento Palermo",
    "camerette Palermo",
    "progettazione arredo",
    "Casa IN Arredamenti",
  ],
  openGraph: {
    title: "Casa IN Arredamenti | Carini · Palermo",
    description: "Cucine, camere, living e soluzioni d'arredo progettate insieme a te.",
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: brand.name,
    images: [{ url: "/hero-01.png", alt: "Casa IN Arredamenti" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-01.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/casain-logo.png",
    apple: "/casain-logo.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: brand.name,
  description: "Showroom di arredamento a Carini.",
  url: SITE_URL,
  telephone: brand.phone1Href,
  email: brand.email,
  image: `${SITE_URL}/casain-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address,
    addressLocality: brand.city,
    addressRegion: "PA",
    postalCode: brand.cap,
    addressCountry: "IT",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${manrope.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
