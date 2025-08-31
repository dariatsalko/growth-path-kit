import { Helmet } from "react-helmet-async";
import Header from "@/components/ui/header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import PsychologistsSection from "@/components/PsychologistsSection";
import MessageSection from "@/components/MessageSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Центр консультативной психологии «Точка роста» - Профессиональная помощь в Беларуси</title>
        <meta name="description" content="Центр консультативной психологии «Точка роста» в Минске. Индивидуальная, семейная и подростковая психотерапия. Онлайн и очно. Школа эмоционального интеллекта для детей. Лицензированные специалисты." />
        <meta property="og:title" content="Центр «Точка роста» - Психологическая поддержка в Беларуси" />
        <meta property="og:description" content="Профессиональная психологическая помощь для взрослых, семей и подростков. Запишитесь на консультацию онлайн или очно." />
        <meta property="og:url" content="https://intention.by/" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Центр консультативной психологии «Точка роста»",
            "description": "Профессиональная психологическая помощь в Минске",
            "url": "https://intention.by",
            "telephone": "+375292375730",
            "email": "info@intention.by",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "пр-т Дзержинского 11-843-3",
              "addressLocality": "Минск",
              "postalCode": "220069",
              "addressCountry": "BY"
            },
            "openingHours": "Mo-Fr 09:00-21:00, Sa 10:00-18:00, Su 10:00-16:00",
            "priceRange": "80-150 BYN",
            "founder": {
              "@type": "Organization",
              "name": "частное предприятие «ЭЛЬМОТО»",
              "taxID": "193334920"
            }
          }`}
        </script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ServicesSection />
        <PsychologistsSection onSelectPsychologist={(psychologist) => {
          window.dispatchEvent(new CustomEvent('openBookingWithPsychologist', { detail: { name: psychologist } }));
        }} />
        <MessageSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
