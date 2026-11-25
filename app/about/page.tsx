import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeroSection from "../components/about/HeroSection";
import CoreValuesSection from "../components/about/CoreValuesSection";
import LeadershipSection from "../components/about/LeadershipSection";
import JourneySection from "../components/about/JourneySection";
import CorporateInfrastructureSection from "../components/about/CorporateInfrastructureSection";
import AccreditationsSection from "../components/about/AccreditationsSection";
import ProfessionalNetworkSection from "../components/about/ProfessionalNetworkSection";

export const metadata = {
  title: "About Us - EStartUp India",
  description:
    "Learn about EStartUp India's 15+ year journey, leadership team, core values, and accreditations as India's foremost corporate consultancy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-charcoal font-body antialiased selection:bg-accent/20 selection:text-primary">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* ABOUT HERO SECTION */}
        <AboutHeroSection />

        {/* CORE VALUES */}
        <CoreValuesSection />

        {/* LEADERSHIP & ADVISORY DESK */}
        <LeadershipSection />

        {/* JOURNEY & MILESTONES */}
        <JourneySection />

        {/* CORPORATE INFRASTRUCTURE */}
        <CorporateInfrastructureSection />

        {/* ACCREDITATIONS */}
        <AccreditationsSection />

        {/* PAN-INDIA PROFESSIONAL NETWORK CALLOUT */}
        <ProfessionalNetworkSection />
      </main>

      <Footer />
    </div>
  );
}
