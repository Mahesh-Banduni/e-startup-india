import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerAnnouncementBar from "../components/register-professional/PartnerAnnouncementBar";
import RegisterProfessionalHeroSection from "../components/register-professional/HeroSection";
import RegistrationBenefitsSection from "../components/register-professional/RegistrationBenefitsSection";
import EligibleSpecializationsSection from "../components/register-professional/EligibleSpecializationsSection";
import RegistrationFormSection from "../components/register-professional/RegistrationFormSection";
import VerificationProcessSection from "../components/register-professional/VerificationProcessSection";
import PartnerNetworkSection from "../components/register-professional/PartnerNetworkSection";
import FinalCallToActionSection from "../components/register-professional/FinalCallToActionSection";

export default function RegisterProfessionalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-charcoal font-body antialiased selection:bg-accent/20 selection:text-primary">
      <PartnerAnnouncementBar />

      <Navbar />

      <main className="flex-1">
        {/* SECTION 1: HERO */}
        <RegisterProfessionalHeroSection />

        {/* SECTION 2: WHY REGISTER */}
        <RegistrationBenefitsSection />

        {/* SECTION 3: WHO CAN REGISTER */}
        <EligibleSpecializationsSection />

        {/* SECTION 4: REGISTRATION FORM */}
        <RegistrationFormSection />

        {/* SECTION 5: HOW IT WORKS */}
        <VerificationProcessSection />

        {/* SECTION 6: FAQs */}
        <PartnerNetworkSection />

        {/* SECTION 7: CONTACT/SUPPORT */}
        <FinalCallToActionSection />
      </main>

      <Footer />
    </div>
  );
}
