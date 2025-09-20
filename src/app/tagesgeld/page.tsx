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