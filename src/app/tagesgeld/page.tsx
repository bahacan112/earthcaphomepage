import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TagesgeldHero from "@/components/TagesgeldHero";
import Breadcrumb from "@/components/Breadcrumb";
import TagesgeldFeatures from "@/components/TagesgeldFeatures";
import TagesgeldInfo from "@/components/TagesgeldInfo";
import DepositsTableSection from "@/components/DepositsTableSection";
import TagesgeldProcessSection from "@/components/TagesgeldProcessSection";
import TagesgeldAuthorSection from "@/components/TagesgeldAuthorSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";

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
    {/*}  <TagesgeldFeatures />*/}
      <Footer />
    </div>
  );
}