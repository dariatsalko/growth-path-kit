import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Activity,
  Battery,
  BrainCircuit,
  CheckCircle,
  Clock,
  Flame,
  Heart,
  Leaf,
  Phone,
  Shield,
  Zap,
} from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const StressPsychologist = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const openBooking = () => {
    window.dispatchEvent(new Event("openBookingModal"));
  };

  const symptoms = [
    {
      icon: Zap,
      title: "Постоянное напряжение",
      description: "Тело не расслабляется даже в выходные. Зажатые плечи, головные боли, бессонница.",
    },
    {
      icon: Battery,
      title: "Эмоциональное истощение",
      description: "Нет сил ни на что. Раздражительность, апатия, ощущение «бег на месте».",
    },
    {
      icon: Activity,
      title: "Тревога и беспокойство",
      description: "Невозможно «выключить голову». Навязчивые мысли о проблемах не отпускают даже ночью.",
    },
    {
      icon: Flame,
      title: "Профессиональное выгорание",
      description: "Работа вызывает отвращение. Прокрастинация, цинизм, ощущение бессмысленности.",
    },
  ];

  const methods = [
    {
      icon: BrainCircuit,
      title: "Когнитивно-поведенческая терапия (КПТ)",
      description: "Выявляем автоматические мысли, которые усиливают стресс, и заменяем их на адаптивные реакции. Доказанная эффективность при хроническом стрессе.",
      link: "/kpt-psiholog",
    },
    {
      icon: Leaf,
      title: "Практики осознанности (Mindfulness)",
      description: "Обучаем техникам осознанного внимания, которые снижают уровень кортизола и возвращают контроль над эмоциями.",
      link: "/mindfulness",
    },
    {
      icon: Heart,
      title: "Телесно-ориентированная терапия",
      description: "Работаем с зажимами и напряжением в теле. Стресс накапливается физически — и снимать его нужно на уровне тела.",
      link: null,
    },
    {
      icon: Shield,
      title: "Стресс-менеджмент и копинг-стратегии",
      description: "Разрабатываем индивидуальный план управления стрессом: от распределения нагрузки до техник быстрого восстановления.",
      link: null,
    },
  ];

  const howItWorks = [
    { step: "1", title: "Диагностика стресса", description: "Определяем источники, уровень и тип стресса. Оцениваем физическое и эмоциональное состояние." },
    { step: "2", title: "Индивидуальный план", description: "Подбираем методы терапии под ваш запрос: КПТ, майндфулнесс, телесная работа или их комбинация." },
    { step: "3", title: "Терапевтическая работа", description: "Еженедельные сессии по 50 минут. Осваиваете техники и применяете их в реальной жизни." },
    { step: "4", title: "Устойчивый результат", description: "Формируем навыки саморегуляции, которые останутся с вами после завершения терапии." },
  ];

  const situations = [
    "Высокая нагрузка на работе, дедлайны, многозадачность",
    "Конфликты в семье или отношениях",
    "Серьёзные перемены в жизни: переезд, развод, смена работы",
    "Проблемы со здоровьем, хроническая боль",
    "Финансовые трудности и неопределённость",
    "Забота о близких: дети, пожилые родители",
    "Экзамены, поступление, карьерные решения",
    "Посттравматический стресс после тяжёлых событий",
  ];

  const faqItems = [
    {
      q: "Когда стресс — это повод обратиться к психологу?",
      a: "Если стресс длится более 2–3 недель, нарушает сон, аппетит, отношения или работоспособность — это сигнал обратиться за помощью. Хронический стресс не проходит сам по себе и может привести к тревожным расстройствам и депрессии.",
    },
    {
      q: "Сколько сессий нужно для работы со стрессом?",
      a: "Обычно ощутимое улучшение наступает за 4–8 сессий. Для хронического стресса и выгорания может потребоваться 10–16 сессий. На первой встрече обсудим прогноз именно для вашей ситуации.",
    },
    {
      q: "Можно ли работать со стрессом онлайн?",
      a: "Да, онлайн-формат полностью подходит для работы со стрессом. Вы можете получать помощь из дома, без дополнительного стресса от поездки. Многие клиенты отмечают, что дома им легче расслабиться и открыться.",
    },
    {
      q: "Чем психолог при стрессе отличается от обычного отдыха?",
      a: "Отдых снимает симптомы временно, но не устраняет причины. Психолог помогает изменить паттерны мышления и поведения, которые поддерживают стресс. Вы получите инструменты, которые работают долгосрочно.",
    },
    {
      q: "Какие методы используются для работы со стрессом?",
      a: "Мы используем КПТ, практики осознанности (майндфулнесс), телесно-ориентированную терапию и техники стресс-менеджмента. Конкретный набор методов подбирается индивидуально.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Психолог при стрессе в Минске — управление стрессом и тревогой",
    description: "Помощь психолога при хроническом стрессе, тревоге и выгорании в Минске и онлайн. КПТ, майндфулнесс, телесная терапия.",
    url: "https://intention.by/psiholog-pri-stresse",
    provider: {
      "@type": "MedicalBusiness",
      name: "Центр консультативной психологии ИНТЕНЦИЯ",
      address: { "@type": "PostalAddress", addressLocality: "Минск", addressCountry: "BY", streetAddress: "пр-т Дзержинского 11" },
      telephone: "+375292375730",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Психолог при стрессе в Минске | Управление стрессом — ИНТЕНЦИЯ</title>
        <meta name="description" content="Психолог при стрессе в Минске и онлайн. Помощь при хроническом стрессе, тревоге и выгорании. КПТ, майндфулнесс, телесная терапия. Запись: +375 29 237-57-30." />
        <meta name="keywords" content="психолог при стрессе, хронический стресс психолог, стресс и тревога психолог, управление стрессом психолог, стресс психолог онлайн, стресс менеджмент Минск" />
        <link rel="canonical" href="https://intention.by/psiholog-pri-stresse" />
        <meta property="og:title" content="Психолог при стрессе в Минске — ИНТЕНЦИЯ" />
        <meta property="og:description" content="Помощь при хроническом стрессе, тревоге и выгорании. КПТ, майндфулнесс, телесная терапия. Очно и онлайн." />
        <meta property="og:url" content="https://intention.by/psiholog-pri-stresse" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  Доказательные методы работы со стрессом
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6 leading-tight">
                  Психолог при стрессе в Минске
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                  Хронический стресс разрушает здоровье, отношения и качество жизни. Мы поможем не просто «расслабиться», а найти и устранить причины стресса — чтобы результат был долгосрочным.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg" onClick={openBooking}>
                    Записаться на консультацию
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold px-8 py-6 text-lg" onClick={openContact}>
                    Задать вопрос
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                  Когда стресс становится проблемой
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Если вы узнаёте себя хотя бы в двух пунктах — стресс уже вышел за рамки нормы
                </p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {symptoms.map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={i} delay={i * 100}>
                    <Card className="h-full border-border hover:shadow-card transition-shadow text-center">
                      <CardHeader className="pb-3">
                        <div className="flex justify-center mb-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                            <Icon className="h-6 w-6 text-destructive" />
                          </div>
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Situations */}
        <section className="py-16 lg:py-20 bg-accent/5">
          <div className="container px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8 text-center">
                  Частые причины обращения
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {situations.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Methods */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                  Как мы работаем со стрессом
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Комбинируем научно обоснованные методы для максимального результата
                </p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {methods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <AnimatedSection key={i} delay={i * 100}>
                    <Card className="h-full border-border hover:shadow-card transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{method.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                        {method.link && (
                          <Link to={method.link} className="text-sm text-primary hover:text-primary/80 font-medium transition-colors" title={method.title}>
                            Подробнее →
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-20 bg-accent/5">
          <div className="container px-4">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-12 text-center">
                Как проходит терапия
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {howItWorks.map((item, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                  Наши специалисты по работе со стрессом
                </h2>
              </div>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { name: "Артём Иванов", desc: "КПТ-терапевт, специализация — хронический стресс, тревожные расстройства, выгорание. Опыт более 5 лет." },
                { name: "Екатерина Иванова", desc: "Клинический психолог, работа с психосоматикой стресса, телесно-ориентированная терапия, майндфулнесс." },
              ].map((spec, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <Card className="border-border hover:shadow-card transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{spec.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{spec.desc}</p>
                      <Button variant="outline" size="sm" onClick={() => {
                        window.dispatchEvent(new CustomEvent("openBookingWithPsychologist", { detail: { name: spec.name } }));
                      }}>
                        Записаться к {spec.name.split(" ")[0]}у
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 lg:py-20 bg-accent/5">
          <div className="container px-4">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8">
                  Стоимость консультации
                </h2>
                <Card className="border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Индивидуальная сессия — 50 минут</span>
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-4">90 BYN</div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Очно в Минске или онлайн из любой точки мира
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" onClick={openBooking}>
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mindfulness CTA */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
                <Leaf className="w-10 h-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                  Дополните терапию практиками осознанности
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Наши групповые занятия по майндфулнесс — отличное дополнение к индивидуальной терапии стресса. Научитесь техникам, которые можно практиковать самостоятельно каждый день.
                </p>
                <Link to="/mindfulness">
                  <Button size="lg" variant="outline" className="font-semibold px-8" title="Практики осознанности и майндфулнесс в Минске">
                    Узнать про майндфулнесс →
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-accent/5">
          <div className="container px-4">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-10 text-center">
                Частые вопросы
              </h2>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <Card className="border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-semibold">{item.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-primary/5">
          <div className="container px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                  Не дайте стрессу управлять вашей жизнью
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Запишитесь на первую консультацию — и мы вместе разберёмся, как вернуть спокойствие и контроль.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg" onClick={openBooking}>
                    Записаться на консультацию
                  </Button>
                  <a href="tel:+375292375730">
                    <Button size="lg" variant="outline" className="font-semibold px-8 py-6 text-lg w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      +375 29 237-57-30
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-12 bg-background border-t border-border">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Смежные услуги</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/anxiety" className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm" title="Лечение тревоги и панических атак в Минске">
                  Лечение тревоги
                </Link>
                <Link to="/depression" className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm" title="Лечение депрессии в Минске">
                  Лечение депрессии
                </Link>
                <Link to="/kpt-psiholog" className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm" title="КПТ психолог в Минске">
                  КПТ-терапия
                </Link>
                <Link to="/mindfulness" className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm" title="Практики осознанности и майндфулнесс">
                  Практики осознанности
                </Link>
                <Link to="/psiholog-online" className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm" title="Психолог онлайн — консультация из любой точки мира">
                  Психолог онлайн
                </Link>
                <Link to="/anonimnyj-psiholog" className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm" title="Анонимный психолог — конфиденциальная консультация">
                  Анонимный психолог
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default StressPsychologist;
