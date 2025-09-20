import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import FeaturedSavingsSection from "@/components/FeaturedSavingsSection";
import DemandDepositsSection from "@/components/DemandDepositsSection";
import TermDepositsSection from "@/components/TermDepositsSection";
import DepositsTableSection from "@/components/DepositsTableSection";
import SecuritySection from "@/components/SecuritySection";
import MobileAppSection from "@/components/MobileAppSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustBadges />
      <FeaturedSavingsSection />
      <DemandDepositsSection />
      <TermDepositsSection />
      <DepositsTableSection />
      <SecuritySection />
      <MobileAppSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
