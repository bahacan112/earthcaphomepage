import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Earth Capital Management - Europas beste Zinsen für Tagesgeld & Festgeld",
  description: "Profitieren Sie von bis zu 3,20% Zinsen p.a. bei europäischen Partnerbanken. Kostenlose Kontoeröffnung, 100% Einlagensicherung bis 100.000€. Jetzt vergleichen!",
  keywords: "Tagesgeld, Festgeld, Zinsen, Geldanlage, Einlagensicherung, Earth Capital Management, Europa, Sparen",
  authors: [{ name: "Earth Capital Management GmbH" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e40af",
  openGraph: {
    title: "Earth Capital Management - Europas beste Zinsen für Ihre Geldanlage",
    description: "Entdecken Sie attraktive Zinsen von bis zu 3,20% p.a. bei sicheren europäischen Banken. Kostenlos, sicher und flexibel.",
    url: "https://earthcap.de",
    siteName: "Earth Capital Management",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Earth Capital Management - Europas beste Zinsen",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@earthcapital",
    title: "Earth Capital Management - Europas beste Zinsen für Ihre Geldanlage",
    description: "Entdecken Sie attraktive Zinsen von bis zu 3,20% p.a. bei sicheren europäischen Banken.",
    images: ["/images/og-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
