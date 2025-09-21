import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NachhaltigHero from "@/components/NachhaltigHero";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import NachhaltigFeaturedSavingsSection from "@/components/NachhaltigFeaturedSavingsSection";
import NachhaltigSummary from "@/components/NachhaltigSummary";
import NachhaltigWhatIs from "@/components/NachhaltigWhatIs";
import NachhaltigProcessSection from "@/components/NachhaltigProcessSection";
import NachhaltigFAQ from "@/components/NachhaltigFAQ";

export const metadata: Metadata = {
  title: "Nachhaltige Geldanlage: Grüne Investments mit attraktiven Zinsen | Earth Capital Management",
  description: "Nachhaltige Geldanlage: Investieren Sie in grüne Projekte und erhalten Sie attraktive Zinsen. Umweltfreundlich, ethisch und profitabel. Jetzt informieren!",
  keywords: "nachhaltige Geldanlage, grüne Investments, ESG, nachhaltige Banken, Earth Capital Management, Umwelt, Ethik",
  openGraph: {
    title: "Nachhaltige Geldanlage: Grüne Investments mit attraktiven Zinsen",
    description: "Investieren Sie in grüne Projekte und erhalten Sie attraktive Zinsen. Umweltfreundlich, ethisch und profitabel.",
    url: "https://earthcap.de/nachhaltig",
    images: [{ url: "/images/og-nachhaltig.jpg", width: 1200, height: 630, alt: "Nachhaltige Geldanlage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nachhaltige Geldanlage: Grüne Investments mit attraktiven Zinsen",
    description: "Investieren Sie in grüne Projekte und erhalten Sie attraktive Zinsen. Umweltfreundlich, ethisch und profitabel.",
    images: ["/images/og-nachhaltig.jpg"],
  },
  alternates: {
    canonical: "https://earthcap.de/nachhaltig",
  },
};

export default function NachhaltigPage() {
  const breadcrumbItems = [
    { label: "Startseite", href: "/" },
    { label: "Nachhaltigkeit" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NachhaltigHero />
      <Breadcrumb 
        items={breadcrumbItems} 
        lastUpdated="Zuletzt aktualisiert: 01. September 2025" 
      />
      <TrustBadgesSection />
      <NachhaltigFeaturedSavingsSection />
      <NachhaltigSummary />
      <NachhaltigWhatIs />
      <NachhaltigProcessSection />
      <NachhaltigFAQ />
      <Footer />
    </div>
  );
}