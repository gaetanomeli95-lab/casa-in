import type { Metadata } from "next";
import { DM_Sans, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/data";

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
  title: "Casa IN Arredamenti | Carini · Palermo",
  description:
    "Cucine, camere, living e soluzioni d'arredo progettate insieme a te nello showroom di Carini.",
  keywords: [
    "arredamenti Carini",
    "cucine Carini",
    "camerette Palermo",
    "living divani",
    "progettazione arredo",
    "Casa IN Arredamenti",
  ],
  openGraph: {
    title: "Casa IN Arredamenti | Carini · Palermo",
    description:
      "Cucine, camere, living e soluzioni d'arredo progettate insieme a te.",
    type: "website",
    locale: "it_IT",
    url: "https://casa-in.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
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
  url: "https://casa-in.vercel.app",
  telephone: brand.phone1Href,
  email: brand.email,
  image: "/casain-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address,
    addressLocality: brand.city,
    addressRegion: brand.region,
    postalCode: brand.cap,
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "38.1308",
    longitude: "13.1546",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${manrope.variable} ${dmSans.variable} ${playfair.variable}`}
    >
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
