import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeHeroSection from "./components/home/HeroSection";
import SocialProofSection from "./components/home/SocialProofSection";
import HomeServicesSection from "./components/home/ServicesSection";
import ProcessSection from "./components/home/ProcessSection";
import WhyChooseUsSection from "./components/home/WhyChooseUsSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import FaqSection from "./components/home/FaqSection";
import ConsultationSection from "./components/home/ConsultationSection";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        {/* HERO SECTION */}
        <HomeHeroSection />

        {/* SOCIAL PROOF METRICS */}
        <SocialProofSection />

        {/* SERVICES SECTION */}
        <HomeServicesSection />

        {/* PROCESS */}
        <ProcessSection />

        {/* WHY CHOOSE US */}
        <WhyChooseUsSection />

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* FAQ */}
        <FaqSection />

        {/* CTA */}
        <ConsultationSection />
      </main>
      <Footer />
    </>
  );
}
