import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TripsSection from "@/components/TripsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SectionDivider = () => (
  <div className="relative h-px w-full">
    <div className="absolute inset-0 bg-border" />
    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SectionDivider />
      <PortfolioSection />
      <SectionDivider />
      <TripsSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
