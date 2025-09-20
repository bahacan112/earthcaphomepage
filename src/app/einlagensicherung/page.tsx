import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EinlagensicherungHero from "@/components/EinlagensicherungHero";
import EinlagensicherungSummary from "@/components/EinlagensicherungSummary";
import EinlagensicherungWhatIs from "@/components/EinlagensicherungWhatIs";
import Breadcrumb from "@/components/Breadcrumb";

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
      <Footer />
    </div>
  );
}