import Header from "@/components/ui/header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PsychologistsSection from "@/components/PsychologistsSection";
import TestimonialsSection from "@/components/TestimonialsSection";


import Footer from "@/components/Footer";

const Index = () => {


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <PsychologistsSection onSelectPsychologist={(psychologist) => {
          window.dispatchEvent(new CustomEvent('openBookingWithPsychologist', { detail: { name: psychologist } }));
        }} />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
