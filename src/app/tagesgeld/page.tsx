import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TagesgeldHero from "@/components/TagesgeldHero";
import Breadcrumb from "@/components/Breadcrumb";
import TagesgeldInfo from "@/components/TagesgeldInfo";
import DepositsTableSection from "@/components/DepositsTableSection";
import TagesgeldProcessSection from "@/components/TagesgeldProcessSection";
import TagesgeldAuthorSection from "@/components/TagesgeldAuthorSection";
import TagesgeldSummary from "@/components/TagesgeldSummary";
import TagesgeldWhatIs from "@/components/TagesgeldWhatIs";
import TagesgeldFAQ from "@/components/TagesgeldFAQ";
import TrustBadgesSection from "@/components/TrustBadgesSection";

export const metadata: Metadata = {
  title: "Tagesgeld-Vergleich 2025: Bis zu 2,85% p.a. Zinsen | Earth Capital Management",
  description: "Tagesgeld-Vergleich 2025: Bis zu 2,85% p.a. Zinsen von europäischen Banken. Täglich verfügbar, kostenlos, 100% sicher bis 100.000€. Jetzt vergleichen!",
  keywords: "Tagesgeld, Tagesgeld Vergleich, Tagesgeldzinsen, 2025, Earth Capital Management, Europa, Einlagensicherung",
  openGraph: {
    title: "Tagesgeld-Vergleich 2025: Bis zu 2,85% p.a. Zinsen",
    description: "Finden Sie das beste Tagesgeldkonto mit attraktiven Zinsen. Täglich verfügbar, kostenlos und sicher.",
    url: "https://earthcap.de/tagesgeld",
    images: [{ url: "/images/og-tagesgeld.jpg", width: 1200, height: 630, alt: "Tagesgeld-Vergleich 2025" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tagesgeld-Vergleich 2025: Bis zu 2,85% p.a. Zinsen",
    description: "Finden Sie das beste Tagesgeldkonto mit attraktiven Zinsen. Täglich verfügbar, kostenlos und sicher.",
    images: ["/images/og-tagesgeld.jpg"],
  },
  alternates: {
    canonical: "https://earthcap.de/tagesgeld",
  },
};

export default function TagesgeldPage() {
  const breadcrumbItems = [
    { label: "Startseite", href: "/" },
    { label: "Tagesgeld-Vergleich" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TagesgeldHero />
      <Breadcrumb 
        items={breadcrumbItems} 
        lastUpdated="Zuletzt aktualisiert: 09. September 2025" 
      />
      <TrustBadgesSection />
      <TagesgeldInfo />
      <DepositsTableSection />
      <TagesgeldProcessSection />
      <TagesgeldAuthorSection />
      <TagesgeldSummary />
      <TagesgeldWhatIs />
      <TagesgeldFAQ />
    {/*}  <TagesgeldFeatures />*/}
      <Footer />
    </div>
  );
}