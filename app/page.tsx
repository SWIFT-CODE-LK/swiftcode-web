import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import CTABanner from "../components/home/CTABanner";
import StatsSection from "../components/home/StatsSection";
import TeamSection from "../components/home/TeamSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import PartnersSection from "../components/home/PartnersSection";
import MissionVisionSection from "../components/home/MissionVisionSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTABanner />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <PartnersSection />
      <MissionVisionSection />
      <Footer />
    </main>
  );
}