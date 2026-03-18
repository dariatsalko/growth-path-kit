import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { CheckCircle, Eye, EyeOff, Lock, MessageSquare, Phone, Shield, ShieldCheck, UserX, Video } from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const AnonymousPsychologist = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const guarantees = [
    {
      icon: EyeOff,
      title: "Полная анонимность",
      description: "Вы можете не называть настоящее имя. Мы не запрашиваем документы и не ведём учёт в государственных реестрах.",
    },
    {
      icon: Lock,
      title: "Защищённое соединение",
      description: "Видео- и аудиосессии проходят через защищённые каналы. Никто не получит доступ к содержанию ваших консультаций.",
    },
    {
      icon: ShieldCheck,
      title: "Профессиональная этика",
      description: "Наши психологи соблюдают Этический кодекс психолога. Всё, что вы расскажете, останется между вами и специалистом.",
    },
    {
      icon: UserX,
      title: "Никто не узнает",
      description: "Онлайн-формат позволяет получить помощь из дома — вас не увидят у кабинета психолога. Полная приватность.",
    },
  ];

  const reasons = [
    "Вы боитесь осуждения или стигматизации",
    "Вы не хотите, чтобы кто-то знал о визите к психологу",
    "Вам нужно обсудить деликатную тему — измену, насилие, зависимость",
    "Вы публичная персона и дорожите репутацией",
    "Вы хотите попробовать терапию без обязательств",
    "Вы живёте в маленьком городе, где «все всех знают»",
  ];

  const topics = [
    { icon: Shield, title: "Тревога и панические атаки", link: "/anxiety" },
    { icon: MessageSquare, title: "Депрессия и апатия", link: "/depression" },
    { icon: Eye, title: "Проблемы в отношениях", link: "/family-psychologist" },
    { icon: Lock, title: "Зависимости и созависимость", link: null },
    { icon: UserX, title: "Насилие и абьюз", link: null },
    { icon: Video, title: "Стресс и выгорание", link: "/psiholog-online" },
  ];

  const howItWorks = [
    { step: "1", title: "Анонимная заявка", description: "Напишите в мессенджер или заполните форму. Достаточно указать удобное время — имя не обязательно." },
    { step: "2", title: "Подбор психолога", description: "Подберём специалиста с подходящей специализацией. Вы можете задать вопросы до начала." },
    { step: "3", title: "Первая сессия", description: "Знакомство проходит онлайн. Камеру можно не включать — работаем и в аудиоформате." },
    { step: "4", title: "Терапия на ваших условиях", description: "Вы сами решаете, что и когда раскрывать. Никакого давления — только поддержка." },
  ];

  const faqItems = [
    {
      q: "Действительно ли консультация полностью анонимна?",
      a: "Да. Вы можете использовать псевдоним, не показывать лицо и не раскрывать личные данные. Мы не ведём записей в государственных реестрах и не передаём информацию третьим лицам.",
    },
    {
      q: "Нужно ли включать камеру?",
      a: "Нет, это не обязательно. Многие клиенты работают в аудиоформате, и это не снижает эффективность терапии. Выбирайте удобный формат.",
    },
    {
      q: "Как оплатить консультацию анонимно?",
      a: "Вы можете оплатить через ЕРИП, банковский перевод или наличными (при очной встрече). При онлайн-оплате в назначении платежа не указывается характер услуги.",
    },
    {
      q: "Может ли психолог рассказать кому-то о моих проблемах?",
      a: "Нет. Психолог обязан хранить конфиденциальность по Этическому кодексу. Исключение — только угроза жизни или здоровью клиента или третьих лиц, о чём вас предупредят заранее.",
    },
    {
      q: "Чем анонимная консультация отличается от обычной?",
      a: "Ничем, кроме степени раскрытия личных данных. Вы получаете ту же профессиональную помощь, те же методы терапии и такое же качество работы.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Анонимный психолог в Минске — консультация онлайн и очно | Интенция</title>
        <meta
          name="description"
          content="Анонимная консультация психолога в Минске и онлайн. Полная конфиденциальность, без документов и учёта. Запишитесь анонимно — центр Интенция."
        />
        <meta
          name="keywords"
          content="анонимный психолог минск, анонимный психолог онлайн, анонимная консультация психолога, психолог онлайн анонимно, конфиденциальный психолог"
        />
        <link rel="canonical" href="https://intention.by/anonimnyj-psiholog" />
        <meta property="og:title" content="Анонимный психолог — центр Интенция, Минск" />
        <meta
          property="og:description"
          content="Анонимная помощь психолога онлайн и очно. Без документов, без учёта, полная конфиденциальность."
        />
        <meta property="og:url" content="https://intention.by/anonimnyj-psiholog" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Анонимный психолог в Минске — консультация онлайн и очно",
            description:
              "Анонимная консультация психолога в Минске и онлайн. Полная конфиденциальность, без документов и учёта.",
            url: "https://intention.by/anonimnyj-psiholog",
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
              description: "Анонимная консультация психолога, 50 минут",
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
                  Анонимный психолог — помощь без страха быть узнанным
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Анонимная консультация психолога в Минске и онлайн. Без документов, без учёта, без осуждения —
                  только профессиональная поддержка в безопасной обстановке.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                    onClick={openContact}
                  >
                    Записаться анонимно
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                    <a href="tel:+375292375730">+375 29 237-57-30</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Гарантии анонимности и конфиденциальности
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Мы создаём условия, в которых вы можете говорить о чём угодно — без страха и ограничений
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {guarantees.map((item, i) => {
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

        {/* Why anonymous */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  Почему выбирают анонимную консультацию
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Анонимность — это не про стыд, а про безопасность и комфорт
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {reasons.map((item, i) => (
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
                С чем можно обратиться анонимно
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Анонимный формат подходит для любых запросов — от тревоги до семейных кризисов
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
                Как записаться на анонимную консультацию
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
                Частые вопросы об анонимной консультации
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость анонимной консультации</h2>
                <div className="inline-block rounded-2xl border border-border bg-background px-8 py-6">
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    Индивидуальная консультация — <span className="text-primary">90 BYN</span>
                  </p>
                  <p className="text-muted-foreground">Продолжительность — 50 минут</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Стоимость не отличается от обычной консультации
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
                  Специалисты для анонимных консультаций
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Все психологи центра «Интенция» работают с анонимными обращениями и гарантируют конфиденциальность:
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
                <h2 className="text-3xl font-bold mb-4">Сделайте первый шаг — анонимно и безопасно</h2>
                <p className="text-muted-foreground mb-8">
                  Оставьте заявку — мы свяжемся с вами в мессенджере и подберём удобное время для анонимной консультации
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    onClick={openContact}
                  >
                    Записаться анонимно
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
              <Link to="/psiholog-online" className="text-primary hover:underline" title="Психолог онлайн - консультация">
                Психолог онлайн
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
              <Link to="/career-guidance" className="text-primary hover:underline" title="Профориентация в Минске">
                Профориентация
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AnonymousPsychologist;
