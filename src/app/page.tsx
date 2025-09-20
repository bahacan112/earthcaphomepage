import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ProcessSection from "@/components/ProcessSection";
import FeaturedSavingsSection from "@/components/FeaturedSavingsSection";
import DemandDepositsSection from "@/components/DemandDepositsSection";
import InvestmentSection from "@/components/InvestmentSection";
import TermDepositsSection from "@/components/TermDepositsSection";
import DepositsTableSection from "@/components/DepositsTableSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import SavingsInfoSection from "@/components/SavingsInfoSection";
{/*import SponsorshipSection from "@/components/SponsorshipSection";*/}
import DepositProtectionSection from "@/components/DepositProtectionSection";
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
      <ProcessSection />
      <TermDepositsSection />
      <DemandDepositsSection />
      <InvestmentSection />
      <FeaturedSavingsSection />
      <DepositsTableSection />
      <TrustBadgesSection />
      <SavingsInfoSection />
      {/* <SponsorshipSection /> */}
      <DepositProtectionSection />
      <SecuritySection />
      <MobileAppSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
