import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHeroSection from "../components/services/HeroSection";
import ServiceFiltersSection from "../components/services/ServiceFiltersSection";
import ServicesDirectorySection from "../components/services/ServicesDirectorySection";
import ConsultationBannerSection from "../components/services/ConsultationBannerSection";

export const metadata = {
  title: "Services Catalog - EStartUp India",
  description:
    "Explore India's most trusted suite of business registration, tax filing, trademark protection, and investment readiness services by EStartUp India.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-charcoal font-body antialiased selection:bg-accent/20 selection:text-primary">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* PAGE HERO */}
        <ServicesHeroSection />

        {/* SEARCH & FILTER TABS */}
        <ServiceFiltersSection />

        {/* SERVICES DIRECTORY GRID */}
        <ServicesDirectorySection />

        {/* ENTERPRISE CONSULTATION BANNER */}
        <ConsultationBannerSection />
      </main>

      <Footer />
    </div>
  );
}
