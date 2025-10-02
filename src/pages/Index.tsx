import { Helmet } from "react-helmet-async";

import AboutSection from "@/components/AboutSection/AboutSection";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection/HowItWorksSection";
import MessageSection from "@/components/MessageSection/MessageSection";
import PsychologistsSection from "@/components/PsychologistsSection/PsychologistsSection";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import ServicesSection from "@/components/ServicesSection/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Центр консультативной психологии ИНТЕНЦИЯ - Профессиональная помощь в
          Беларуси
        </title>
        <meta
          name="description"
          content="Центр консультативной психологии ИНТЕНЦИЯ в Минске. Индивидуальная, семейная и подростковая психотерапия. Онлайн и очно. Школа эмоционального интеллекта для детей. Лицензированные специалисты."
        />
        <meta
          property="og:title"
          content="Центр ИНТЕНЦИЯ - Психологическая поддержка в Беларуси"
        />
        <meta
          property="og:description"
          content="Профессиональная психологическая помощь для взрослых, семей и подростков. Запишитесь на консультацию онлайн или очно."
        />
        <meta property="og:url" content="https://intention.by/" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Центр консультативной психологии ИНТЕНЦИЯ",
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

      <main>
        <HeroSection />
        
        {/* SEO Section */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Психологические консультации в Минске и онлайн
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Наша команда психологов «Интенция» помогает взрослым и подросткам справляться с тревогой и паническими атаками, выгоранием, депрессией, сложностями в отношениях и самокритикой. Работаем научно-доказательными методами: когнитивно-поведенческая терапия (КПТ), техники осознанности (mindfulness), краткосрочные фокус-подходы. Принимаем в Минске и ведём онлайн-сессии по всему миру.
              </p>
            </div>
          </div>
        </section>

        <AnimatedSection animation="fade-up" id="about">
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={200} id="how-it-works">
          <HowItWorksSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={100} id="services">
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={150} id="psychologists">
          <PsychologistsSection
            onSelectPsychologist={(psychologist) => {
              window.dispatchEvent(
                new CustomEvent("openBookingWithPsychologist", {
                  detail: { name: psychologist },
                })
              );
            }}
          />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={100} id="message">
          <MessageSection />
        </AnimatedSection>
        <AnimatedSection animation="scale-in" delay={200} id="cta">
          <CtaSection />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
