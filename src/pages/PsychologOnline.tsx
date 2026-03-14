import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { CheckCircle, Globe, Heart, Monitor, Phone, Shield, Clock, MessageSquare, Video, Brain } from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const PsychologOnline = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const advantages = [
    {
      icon: Globe,
      title: "Из любой точки мира",
      description: "Консультация доступна, где бы вы ни находились — нужен только интернет и приватное пространство.",
    },
    {
      icon: Clock,
      title: "Гибкое расписание",
      description: "Подберём удобное время, включая вечерние часы и выходные. Не нужно тратить время на дорогу.",
    },
    {
      icon: Shield,
      title: "Полная конфиденциальность",
      description: "Защищённое соединение, никто не увидит вас у кабинета психолога. Полная анонимность.",
    },
    {
      icon: Video,
      title: "Видео- или аудиоформат",
      description: "Работаем через Zoom, Google Meet или Telegram — выберите удобную платформу.",
    },
  ];

  const forWhom = [
    "Вы живёте за пределами Минска или Беларуси",
    "У вас плотный график и нет времени на поездки",
    "Вам комфортнее разговаривать из дома",
    "Вы хотите начать терапию прямо сейчас",
    "Вы испытываете тревогу и вам сложно выходить из дома",
    "Вам нужна поддержка в кризисной ситуации",
  ];

  const topics = [
    { icon: Brain, title: "Тревога и панические атаки", link: "/anxiety" },
    { icon: Heart, title: "Депрессия и апатия", link: "/depression" },
    { icon: MessageSquare, title: "Проблемы в отношениях", link: "/family-psychologist" },
    { icon: Monitor, title: "Выгорание и стресс", link: null },
    { icon: Shield, title: "Низкая самооценка и неуверенность", link: null },
    { icon: Globe, title: "Адаптация при эмиграции", link: null },
  ];

  const howItWorks = [
    { step: "1", title: "Оставьте заявку", description: "Заполните форму на сайте или позвоните. Мы свяжемся с вами в течение часа." },
    { step: "2", title: "Подбор специалиста", description: "Поможем выбрать психолога с нужной специализацией и удобным графиком." },
    { step: "3", title: "Первая консультация", description: "Знакомство, обсуждение запроса и составление плана работы." },
    { step: "4", title: "Регулярная терапия", description: "Еженедельные сессии в удобном формате с отслеживанием прогресса." },
  ];

  const faqItems = [
    {
      q: "Эффективна ли онлайн-терапия?",
      a: "Да, многочисленные исследования подтверждают, что онлайн-терапия не уступает по эффективности очным консультациям при большинстве психологических проблем, включая тревогу и депрессию.",
    },
    {
      q: "Какая платформа используется для онлайн-сессий?",
      a: "Мы работаем через Zoom, Google Meet или Telegram — выбираете то, что вам удобно. Главное — стабильный интернет и приватное место.",
    },
    {
      q: "Можно ли получить консультацию психолога онлайн прямо сейчас?",
      a: "Мы стараемся организовать первую встречу как можно быстрее. Оставьте заявку, и мы подберём ближайшее доступное время — часто это тот же или следующий день.",
    },
    {
      q: "Сколько стоит онлайн-консультация психолога?",
      a: "Стоимость онлайн-консультации такая же, как и очной: 90 BYN за индивидуальную сессию (50 минут) и 130 BYN за семейную консультацию (70 минут).",
    },
    {
      q: "Как подготовиться к онлайн-сессии?",
      a: "Найдите тихое место, где вас не будут отвлекать. Проверьте интернет-соединение, подготовьте наушники. Можете заранее записать вопросы или темы для обсуждения.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Психолог онлайн — консультация из любой точки мира | Центр Интенция</title>
        <meta
          name="description"
          content="Консультация психолога онлайн из Минска и любой точки мира. КПТ, работа с тревогой, депрессией, отношениями. Запишитесь на онлайн-сессию сейчас — центр Интенция."
        />
        <meta
          name="keywords"
          content="психолог онлайн, психолог минск онлайн, психолог онлайн консультация, психолог онлайн сейчас, помощь психолога онлайн, онлайн терапия"
        />
        <link rel="canonical" href="https://intention.by/psiholog-online" />
        <meta property="og:title" content="Психолог онлайн — центр Интенция, Минск" />
        <meta
          property="og:description"
          content="Профессиональная помощь психолога онлайн. КПТ, работа с тревогой, депрессией, кризисами. Удобный формат из любой точки мира."
        />
        <meta property="og:url" content="https://intention.by/psiholog-online" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Психолог онлайн — консультация из любой точки мира",
            description:
              "Онлайн-консультации психолога центра Интенция. КПТ, работа с тревогой, депрессией, отношениями.",
            url: "https://intention.by/psiholog-online",
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
            offers: {
              "@type": "Offer",
              price: "90",
              priceCurrency: "BYN",
              description: "Индивидуальная онлайн-консультация психолога, 50 минут",
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
                  Психолог онлайн — помощь здесь и сейчас
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Профессиональная консультация психолога из Минска в онлайн-формате.
                  Доказательные методы терапии, конфиденциальность и поддержка — где бы вы ни находились.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                    onClick={openContact}
                  >
                    Записаться на онлайн-консультацию
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                    <a href="tel:+375292375730">+375 29 237-57-30</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Преимущества онлайн-консультаций
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Онлайн-формат — это не компромисс, а полноценная терапия с дополнительными удобствами
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {advantages.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Card key={i} className="border-border">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* For whom */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  Кому подходит онлайн-терапия
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Онлайн-формат особенно удобен, если:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {forWhom.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Topics */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                С чем работаем онлайн
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Наши специалисты помогают с широким спектром психологических запросов
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {topics.map((topic, i) => {
                  const Icon = topic.icon;
                  const content = (
                    <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{topic.title}</span>
                    </div>
                  );
                  return topic.link ? (
                    <Link key={i} to={topic.link} title={topic.title} className="hover:no-underline">
                      {content}
                    </Link>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Как проходит онлайн-консультация
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {howItWorks.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-background">
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
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость онлайн-консультации</h2>
                <div className="inline-block rounded-2xl border border-border bg-background px-8 py-6">
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    Индивидуальная консультация — <span className="text-primary">90 BYN</span>
                  </p>
                  <p className="text-muted-foreground">Продолжительность — 50 минут</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Семейная консультация — 130 BYN (70 минут)
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Наши специалисты для онлайн-консультаций
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Все психологи центра «Интенция» работают онлайн и имеют опыт дистанционного консультирования:
                </p>
                <div className="space-y-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Артём Иванов
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, семейная терапия, кризисная психология, практики осознанности</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Дарья Цалко
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, тревога, депрессия, профориентация (только онлайн)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Екатерина Иванова
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, индивидуальное консультирование, коучинг</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Начните терапию онлайн уже сегодня</h2>
                <p className="text-muted-foreground mb-8">
                  Оставьте заявку — мы подберём специалиста и организуем первую консультацию в удобное для вас время
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    onClick={openContact}
                  >
                    Записаться онлайн
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+375292375730">
                      <Phone className="w-4 h-4 mr-2" />
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
              <Link to="/" className="text-primary hover:underline" title="Психолог Минск - консультации">
                Консультации
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/depression" className="text-primary hover:underline" title="Лечение депрессии в Минске">
                Лечение депрессии
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/anxiety" className="text-primary hover:underline" title="Лечение тревоги и панических атак">
                Лечение тревоги
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/family-psychologist" className="text-primary hover:underline" title="Семейный психолог Минск">
                Семейный психолог
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/contacts" className="text-primary hover:underline" title="Контакты центра Интенция">
                Контакты
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default PsychologOnline;
