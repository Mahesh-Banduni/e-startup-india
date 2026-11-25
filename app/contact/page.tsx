import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/contact/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-charcoal font-body antialiased selection:bg-accent/20 selection:text-primary">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* CONTACT HERO SECTION */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
