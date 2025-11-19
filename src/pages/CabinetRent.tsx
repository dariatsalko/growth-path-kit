import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent } from "@/components/ui/card/card";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import cabinet1 from "@/assets/cabinet-1.jpg";
import cabinet2 from "@/assets/cabinet-2.jpg";
import cabinet3 from "@/assets/cabinet-3.jpg";

const CabinetRent = () => {
  return (
    <>
      <Helmet>
        <title>Аренда кабинета психолога в Минске | Центр Интенция</title>
        <meta
          name="description"
          content="Аренда профессионального кабинета психолога в центре Минска. Современное оборудование, комфортная обстановка, удобное расположение. График занятости и цены."
        />
        <meta
          name="keywords"
          content="аренда кабинета психолога минск, кабинет психолога аренда, аренда помещения для консультаций"
        />
        <link rel="canonical" href="https://intention.by/cabinet-rent/" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Аренда кабинета психолога",
            "description": "Профессиональный кабинет для психологических консультаций в центре Минска",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Центр Консультативной психологии Интенция",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "пр-т Дзержинского, 11-843",
                "addressLocality": "Минск",
                "addressCountry": "BY"
              },
              "telephone": "+375292375730"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "BYN",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Аренда кабинета психолога
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Профессиональное пространство для психологических консультаций в центре Минска
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12">Наши кабинеты</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="overflow-hidden">
                  <img 
                    src={cabinet1} 
                    alt="Кабинет психолога для консультаций - зона для беседы с креслами в центре Интенция Минск" 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Консультационная зона</h3>
                    <p className="text-sm text-muted-foreground">Уютная обстановка для доверительных бесед</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <img 
                    src={cabinet2} 
                    alt="Терапевтическая зона кабинета психолога с удобным диваном в центре Интенция Минск" 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Терапевтическая зона</h3>
                    <p className="text-sm text-muted-foreground">Комфортное пространство для глубинной работы</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <img 
                    src={cabinet3} 
                    alt="Рабочая зона кабинета психолога со столом и книжными полками в центре Интенция Минск" 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Рабочая зона</h3>
                    <p className="text-sm text-muted-foreground">Современное оснащение для профессиональной работы</p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <AnimatedSection animation="slide-in-left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Преимущества аренды</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Удобное расположение</h3>
                        <p className="text-muted-foreground">Центр Минска, легкая транспортная доступность</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Профессиональное оборудование</h3>
                        <p className="text-muted-foreground">Все необходимое для качественной работы</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Комфортная атмосфера</h3>
                        <p className="text-muted-foreground">Уютный дизайн для создания доверительной обстановки</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Гибкий график</h3>
                        <p className="text-muted-foreground">Возможность аренды по часам или на регулярной основе</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Конфиденциальность</h3>
                        <p className="text-muted-foreground">Звукоизоляция и приватность для клиентов</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Информация и контакты</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Адрес</h3>
                        <p className="text-muted-foreground">пр-т Дзержинского, 11-843, Минск</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">График работы</h3>
                        <p className="text-muted-foreground mb-3">Ежедневно с 9:00 до 20:00</p>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          asChild
                        >
                          <a 
                            href="/schedule.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Скачать график занятости кабинета"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Посмотреть график занятости
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div className="w-full">
                        <h3 className="font-semibold mb-1">Связаться с нами</h3>
                        <p className="text-muted-foreground mb-3">Обсудим условия аренды</p>
                        <div className="space-y-2">
                          <Button 
                            className="w-full"
                            asChild
                          >
                            <a 
                              href="https://t.me/intention_by" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              title="Написать в Telegram по аренде кабинета"
                            >
                              Написать в Telegram
                            </a>
                          </Button>
                          <Button 
                            variant="outline"
                            className="w-full"
                            asChild
                          >
                            <a 
                              href="tel:+375292375730"
                              title="Позвонить по телефону для аренды кабинета"
                            >
                              Позвонить +375 29 237-57-30
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Готовы начать работу?</h2>
                <p className="text-muted-foreground mb-8">
                  Свяжитесь с нами, чтобы обсудить условия аренды и забронировать удобное время
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a 
                      href="https://t.me/intention_by" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Забронировать кабинет через Telegram"
                    >
                      Забронировать в Telegram
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a 
                      href="tel:+375292375730"
                      title="Позвонить для бронирования кабинета"
                    >
                      Позвонить
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/" className="text-primary hover:underline" title="Главная страница центра Интенция">Главная</a>
              <span className="text-muted-foreground">•</span>
              <a href="/school" className="text-primary hover:underline" title="Школа эмоционального интеллекта">Школа ЭИ</a>
              <span className="text-muted-foreground">•</span>
              <a href="/mindfulness" className="text-primary hover:underline" title="Практики осознанности">Практики осознанности</a>
              <span className="text-muted-foreground">•</span>
              <a href="/contacts" className="text-primary hover:underline" title="Контакты центра Интенция">Контакты</a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CabinetRent;