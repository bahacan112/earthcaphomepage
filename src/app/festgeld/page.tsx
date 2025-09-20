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