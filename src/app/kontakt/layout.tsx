import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Earth Capital Management: Wir sind für Sie da",
  description: "Kontaktieren Sie Earth Capital Management. Unser Expertenteam steht Ihnen bei Fragen zu Tagesgeld, Festgeld und europäischen Geldanlagen zur Verfügung.",
  keywords: "Kontakt, Earth Capital Management, Beratung, Tagesgeld, Festgeld, Kundenservice, Finanzberatung",
  openGraph: {
    title: "Kontakt - Earth Capital Management: Wir sind für Sie da",
    description: "Kontaktieren Sie unser Expertenteam für persönliche Beratung zu europäischen Geldanlagen.",
    url: "https://earthcap.de/kontakt",
    images: [{ url: "/images/og-kontakt.jpg", width: 1200, height: 630, alt: "Kontakt Earth Capital Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt - Earth Capital Management: Wir sind für Sie da",
    description: "Kontaktieren Sie unser Expertenteam für persönliche Beratung zu europäischen Geldanlagen.",
    images: ["/images/og-kontakt.jpg"],
  },
  alternates: {
    canonical: "https://earthcap.de/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}