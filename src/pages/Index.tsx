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
          Центр Консультативной психологии Интенция – психолог Минск: очная психотерапия и онлайн-консультации
        </title>
        <meta
          name="description"
          content="Центр Интенция – команда опытных психологов Минска. Предоставляем очные консультации и онлайн-помощь по всему миру. Поможем справиться с тревогой, стрессом, депрессией и семейными проблемами"
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
            "@type": ["MedicalBusiness", "LocalBusiness", "ProfessionalService"],
            "name": "Центр консультативной психологии ИНТЕНЦИЯ",
            "alternateName": "Психолог Минск - центр Интенция",
            "description": "Профессиональная психологическая помощь в Минске. Индивидуальная и семейная терапия, школа эмоционального интеллекта, практики осознанности",
            "url": "https://intention.by",
            "logo": "https://intention.by/favicon.svg",
            "image": "https://intention.by/og-image.jpg",
            "telephone": "+375292375730",
            "email": "info@intention.by",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "пр-т Дзержинского 11-843-3",
              "addressLocality": "Минск",
              "postalCode": "220069",
              "addressRegion": "Минская область",
              "addressCountry": "BY"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.9168",
              "longitude": "27.5918"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "21:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "16:00"
              }
            ],
            "priceRange": "80-150 BYN",
            "paymentAccepted": "Cash, Card, Bank Transfer",
            "currenciesAccepted": "BYN",
            "areaServed": {
              "@type": "City",
              "name": "Минск"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Психологические услуги",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Индивидуальная психотерапия",
                    "description": "Консультация психолога для взрослых"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Семейная терапия",
                    "description": "Психологическая помощь парам и семьям"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Школа эмоционального интеллекта",
                    "description": "Развитие ЭИ у детей и подростков"
                  }
                }
              ]
            },
            "founder": {
              "@type": "Organization",
              "name": "частное предприятие «ЭЛЬМОТО»",
              "taxID": "193334920"
            },
            "sameAs": [
              "https://www.instagram.com/intention.by",
              "https://t.me/Intentionby"
            ]
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://intention.by/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Школа эмоционального интеллекта",
                "item": "https://intention.by/school"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Практики осознанности",
                "item": "https://intention.by/mindfulness"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Контакты",
                "item": "https://intention.by/contacts"
              }
            ]
          }`}
        </script>
      </Helmet>

      <main>
        <HeroSection />
        
        {/* SEO Section */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
                Психологическая помощь и психотерапия в Минске и онлайн
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
