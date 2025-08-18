import Header from "@/components/ui/header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PsychologistsSection from "@/components/PsychologistsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingModal from "@/components/BookingModal";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPsychologist, setSelectedPsychologist] = useState<string>("");

  useEffect(() => {
    const handleOpenBookingModal = () => setIsBookingModalOpen(true);
    window.addEventListener('openBookingModal', handleOpenBookingModal);
    return () => window.removeEventListener('openBookingModal', handleOpenBookingModal);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <PsychologistsSection onSelectPsychologist={(psychologist) => {
          setSelectedPsychologist(psychologist);
          setIsBookingModalOpen(true);
        }} />
        <TestimonialsSection />
      </main>
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedPsychologist={selectedPsychologist}
      />
    </div>
  );
};

export default Index;
