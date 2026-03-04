import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { BookOpen, Brain, CheckCircle, Compass, FileText, Lightbulb, Target, Users } from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const CareerGuidance = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const forWhom = [
    "Подростки 14–17 лет, которые выбирают профессию и учебное заведение",
    "Студенты, сомневающиеся в правильности выбранного направления",
    "Взрослые, переживающие профессиональный кризис или выгорание",
    "Родители, желающие помочь ребёнку определиться с будущим",
    "Специалисты, планирующие смену карьеры",
    "Все, кто хочет лучше понять свои сильные стороны и способности",
  ];

  const services = [
    {
      icon: Compass,
      title: "Профориентационное консультирование",
      description:
        "Индивидуальная работа с психологом: анализ интересов, способностей, ценностей и личностных особенностей для определения подходящих профессиональных направлений.",
    },
    {
      icon: FileText,
      title: "Психодиагностическое тестирование",
      description:
        "Комплекс научно-валидированных методик: тесты интеллекта, способностей, профессиональных интересов, мотивации и личностных качеств с подробной интерпретацией.",
    },
    {
      icon: Brain,
      title: "Диагностика эмоционального интеллекта",
      description:
        "Оценка уровня эмоционального интеллекта и soft skills — навыков, которые играют ключевую роль в профессиональной самореализации и карьерном росте.",
    },
    {
      icon: Target,
      title: "Составление индивидуального плана развития",
      description:
        "По итогам диагностики вы получаете подробный отчёт и карту компетенций с рекомендациями по развитию, образованию и профессиональному пути.",
    },
  ];

  const faqItems = [
    {
      q: "С какого возраста можно проходить профориентацию?",
      a: "Профориентационную диагностику рекомендуется начинать с 13–14 лет, когда у подростка формируются устойчивые интересы. Однако некоторые методики подходят и для детей 10–12 лет.",
    },
    {
      q: "Сколько длится профориентационная консультация?",
      a: "Полная диагностика занимает 2–3 встречи по 50–60 минут: тестирование, анализ результатов и обсуждение рекомендаций. Для взрослых возможен расширенный формат.",
    },
    {
      q: "Какие методики вы используете?",
      a: "Мы используем научно-валидированные тесты: опросник профессиональных интересов Голланда, тест структуры интеллекта Амтхауэра, методики оценки личности и мотивации, а также авторские методики центра.",
    },
    {
      q: "Можно ли пройти профориентацию взрослому?",
      a: "Да, профориентация актуальна в любом возрасте. Мы помогаем взрослым при смене карьеры, профессиональном выгорании, возвращении на рынок труда после перерыва.",
    },
    {
      q: "Что получает клиент после диагностики?",
      a: "Вы получаете подробный письменный отчёт с результатами тестирования, описанием сильных сторон, рекомендуемыми профессиональными направлениями и планом развития.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Профориентация и психодиагностика в Минске | Центр Интенция</title>
        <meta
          name="description"
          content="Профориентация для подростков и взрослых в Минске. Психодиагностическое тестирование, определение способностей и профессиональных интересов. Центр психологии Интенция."
        />
        <meta
          name="keywords"
          content="профориентация минск, психодиагностика, тест на профессию, профориентация для подростков, выбор профессии, карьерное консультирование минск"
        />
        <link rel="canonical" href="https://intention.by/career-guidance" />
        <meta property="og:title" content="Профориентация и психодиагностика — Центр Интенция, Минск" />
        <meta
          property="og:description"
          content="Профориентационное консультирование и психодиагностика для подростков и взрослых. Научные методики, индивидуальный подход."
        />
        <meta property="og:url" content="https://intention.by/career-guidance" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Профориентация и психодиагностика в Минске",
            description:
              "Профориентационное консультирование и психодиагностическое тестирование в центре Интенция.",
            url: "https://intention.by/career-guidance",
            provider: {
              "@type": "MedicalBusiness",
              name: "Центр консультативной психологии ИНТЕНЦИЯ",
              telephone: "+375292375730",
              address: {
                "@type": "PostalAddress",
                streetAddress: "пр-т Дзержинского 11-843-3",
                addressLocality: "Минск",
                addressCountry: "BY",
              },
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Профориентация и психодиагностика в Минске
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Помогаем подросткам и взрослым определить свои сильные стороны, способности
                  и подобрать профессиональное направление, которое принесёт удовлетворение и успех.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                    onClick={openContact}
                  >
                    Записаться на диагностику
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                    <a href="tel:+375292375730">+375 29 237-57-30</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* For whom */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  Кому подходит профориентация
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Профориентация полезна на любом жизненном этапе — от выбора первой профессии до смены карьерного пути
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {forWhom.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border"
                    >
                      <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services / Methods */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Что включает диагностика
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Комплексный подход: от тестирования до индивидуальных рекомендаций
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <Card key={i} className="border-border">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Как проходит профориентация
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Знакомство", desc: "Первичная беседа, определение запроса и целей диагностики" },
                    { step: "2", title: "Тестирование", desc: "Комплекс психодиагностических методик (1–2 встречи)" },
                    { step: "3", title: "Анализ", desc: "Обработка результатов и подготовка индивидуального отчёта" },
                    { step: "4", title: "Рекомендации", desc: "Обсуждение результатов, план развития и следующие шаги" },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl mx-auto mb-3">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Часто задаваемые вопросы
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqItems.map((item, i) => (
                  <Card key={i} className="border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость услуг</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="rounded-2xl border border-border bg-muted/30 px-8 py-6">
                    <p className="text-2xl font-semibold text-foreground mb-1">
                      Профориентационная консультация — <span className="text-primary">90 BYN</span>
                    </p>
                    <p className="text-muted-foreground">Продолжительность — 50 минут</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/30 px-8 py-6">
                    <p className="text-2xl font-semibold text-foreground mb-1">
                      Комплексная диагностика — <span className="text-primary">160 BYN</span>
                    </p>
                    <p className="text-muted-foreground">2–3 встречи + письменный отчёт</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Наши специалисты по профориентации
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Профориентацией и психодиагностикой в центре «Интенция» занимаются опытные психологи:
                </p>
                <div className="space-y-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Артём Иванов
                      </Link>
                      <span className="text-muted-foreground">
                        {" "}— психолог-консультант, специалист по профориентации подростков и взрослых
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Дарья Цалко
                      </Link>
                      <span className="text-muted-foreground">
                        {" "}— психолог, опыт работы с подростками, диагностика эмоционального интеллекта
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Екатерина Иванова
                      </Link>
                      <span className="text-muted-foreground">
                        {" "}— психолог-диагност, работа с мотивацией и профессиональным самоопределением
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                    onClick={openContact}
                  >
                    Записаться на профориентацию
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Определите своё призвание
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Правильный выбор профессии — основа жизненного удовлетворения. Запишитесь
                  на профориентационную диагностику и сделайте первый шаг к осознанной карьере.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                    onClick={openContact}
                  >
                    Записаться на консультацию
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                    <a href="tel:+375292375730">Позвонить нам</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CareerGuidance;
