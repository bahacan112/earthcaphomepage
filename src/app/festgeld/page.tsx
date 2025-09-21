import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FestgeldHero from "@/components/FestgeldHero";
import Breadcrumb from "@/components/Breadcrumb";
import FestgeldInfo from "@/components/FestgeldInfo";
import DepositsTableSection from "@/components/DepositsTableSection";
import FestgeldProcessSection from "@/components/FestgeldProcessSection";
/* import TagesgeldAuthorSection from "@/components/TagesgeldAuthorSection";
 */import FestgeldSummary from "@/components/FestgeldSummary";
import FestgeldWhatIs from '@/components/FestgeldWhatIs';
import EinlagensicherungFAQ from "@/components/EinlagensicherungFAQ";
import TrustBadgesSection from "@/components/TrustBadgesSection";

export const metadata: Metadata = {
  title: "Festgeld-Vergleich 2025: Bis zu 3,5% p.a. Zinsen | Earth Capital Management",
  description: "Festgeld-Vergleich 2025: Bis zu 3,5% p.a. Zinsen von europäischen Banken. Sichere Geldanlage mit festen Zinsen. 100% sicher bis 100.000€. Jetzt vergleichen!",
  keywords: "Festgeld, Festgeld Vergleich, Festgeldzinsen, 2025, Earth Capital Management, Europa, sichere Geldanlage",
  openGraph: {
    title: "Festgeld-Vergleich 2025: Bis zu 3,5% p.a. Zinsen",
    description: "Finden Sie das beste Festgeldkonto mit attraktiven Zinsen. Sichere Geldanlage mit festen Zinsen und garantierter Rendite.",
    url: "https://earthcap.de/festgeld",
    images: [{ url: "/images/og-festgeld.jpg", width: 1200, height: 630, alt: "Festgeld-Vergleich 2025" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Festgeld-Vergleich 2025: Bis zu 3,5% p.a. Zinsen",
    description: "Finden Sie das beste Festgeldkonto mit attraktiven Zinsen. Sichere Geldanlage mit festen Zinsen und garantierter Rendite.",
    images: ["/images/og-festgeld.jpg"],
  },
  alternates: {
    canonical: "https://earthcap.de/festgeld",
  },
};

export default function FestgeldPage() {
  const breadcrumbItems = [
    { label: "Startseite", href: "/" },
    { label: "Festgeld-Vergleich" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FestgeldHero />
      <Breadcrumb 
        items={breadcrumbItems} 
        lastUpdated="Zuletzt aktualisiert: 01. September 2025" 
      />
      <TrustBadgesSection />
      <FestgeldInfo />
      <DepositsTableSection />
      <FestgeldProcessSection />
{/*       <TagesgeldAuthorSection />
 */}      <FestgeldSummary />
      <FestgeldWhatIs />
      <EinlagensicherungFAQ />
    {/*}  <TagesgeldFeatures />*/}
      <Footer />
    </div>
  );
}