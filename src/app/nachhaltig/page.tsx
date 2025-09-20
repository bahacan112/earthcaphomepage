import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NachhaltigHero from "@/components/NachhaltigHero";
import Breadcrumb from "@/components/Breadcrumb";
import NachhaltigMission from "@/components/NachhaltigMission";
import NachhaltigInitiatives from "@/components/NachhaltigInitiatives";
import NachhaltigImpact from "@/components/NachhaltigImpact";
import NachhaltigPartners from "@/components/NachhaltigPartners";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import nachhaltigData from "../../languages/nachhaltig.json";

export default function NachhaltigPage() {
  const { page } = nachhaltigData;
  
  const breadcrumbItems = [
    { label: page.breadcrumb.home, href: "/" },
    { label: page.breadcrumb.current }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NachhaltigHero />
      <Breadcrumb 
        items={breadcrumbItems} 
        lastUpdated={page.breadcrumb.lastUpdated} 
      />
      <TrustBadgesSection />
      <NachhaltigMission />
      <NachhaltigInitiatives />
      <NachhaltigImpact />
      <NachhaltigPartners />
      <Footer />
    </div>
  );
}