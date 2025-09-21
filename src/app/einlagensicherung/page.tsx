import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EinlagensicherungHero from "@/components/EinlagensicherungHero";
import Breadcrumb from "@/components/Breadcrumb";
import EinlagensicherungSummary from "@/components/EinlagensicherungSummary";
import EinlagensicherungWhatIs from "@/components/EinlagensicherungWhatIs";
import EinlagensicherungFAQ from "@/components/EinlagensicherungFAQ";
import TrustBadgesSection from "@/components/TrustBadgesSection";

export const metadata: Metadata = {
  title: "Einlagensicherung in Europa: 100% Schutz bis 100.000€ | Earth Capital Management",
  description: "Einlagensicherung in Europa: Ihre Einlagen sind bis zu 100.000€ pro Bank und Person zu 100% geschützt. Erfahren Sie alles über die EU-Einlagensicherung.",
  keywords: "Einlagensicherung, EU-Einlagensicherung, Bankeinlagen, Schutz, 100.000 Euro, Earth Capital Management, Europa",
  openGraph: {
    title: "Einlagensicherung in Europa: 100% Schutz bis 100.000€",
    description: "Ihre Einlagen sind bis zu 100.000€ pro Bank und Person zu 100% geschützt durch die EU-Einlagensicherung.",
    url: "https://earthcap.de/einlagensicherung",
    images: [{ url: "/images/og-einlagensicherung.jpg", width: 1200, height: 630, alt: "Einlagensicherung in Europa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Einlagensicherung in Europa: 100% Schutz bis 100.000€",
    description: "Ihre Einlagen sind bis zu 100.000€ pro Bank und Person zu 100% geschützt durch die EU-Einlagensicherung.",
    images: ["/images/og-einlagensicherung.jpg"],
  },
  alternates: {
    canonical: "https://earthcap.de/einlagensicherung",
  },
};

export default function EinlagensicherungPage() {
  const breadcrumbItems = [
    { label: "Startseite", href: "/" },
    { label: "Einlagensicherung" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <EinlagensicherungHero />
      <Breadcrumb 
        items={breadcrumbItems} 
        lastUpdated="Zuletzt aktualisiert: 01. September 2025" 
      />
      <EinlagensicherungSummary />
      <EinlagensicherungWhatIs />
      <EinlagensicherungFAQ />
      <TrustBadgesSection />
      <Footer />
    </div>
  );
}