import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NachhaltigHero from "@/components/NachhaltigHero";
import Breadcrumb from "@/components/Breadcrumb";
import NachhaltigMission from "@/components/NachhaltigMission";
import NachhaltigInitiatives from "@/components/NachhaltigInitiatives";
import NachhaltigImpact from "@/components/NachhaltigImpact";
import NachhaltigPartners from "@/components/NachhaltigPartners";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import NachhaltigFeaturedSavingsSection from "@/components/NachhaltigFeaturedSavingsSection";
import NachhaltigSummary from "@/components/NachhaltigSummary";
import NachhaltigWhatIs from "@/components/NachhaltigWhatIs";

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
      <NachhaltigMission />
      <NachhaltigInitiatives />
      <NachhaltigImpact />
      <NachhaltigPartners />
      <Footer />
    </div>
  );
}