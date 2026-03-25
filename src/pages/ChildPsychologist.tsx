import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Baby,
  BookOpen,
  Brain,
  CheckCircle,
  GraduationCap,
  Heart,
  MessageSquare,
  Phone,
  Puzzle,
  Shield,
  Smile,
  Sparkles,
  Users,
} from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const ChildPsychologist = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const advantages = [
    {
      icon: Heart,
      title: "Бережный подход",
      description:
        "Работаем через игру, творчество и метафоры — ребёнок чувствует себя в безопасности и раскрывается естественно.",
    },
    {
      icon: Brain,
      title: "Научно обоснованные методы",
      description:
        "Применяем КПТ, арт-терапию, песочную терапию и другие доказательные методы, адаптированные для детского возраста.",
    },
    {
      icon: Users,
      title: "Работа с родителями",
      description:
        "Консультируем родителей параллельно — объясняем, что происходит с ребёнком, и помогаем выстроить поддерживающую среду.",
    },
    {
      icon: Shield,
      title: "Конфиденциальность",
      description:
        "Всё, чем делится ребёнок на сессии, остаётся между ним и психологом. Родители получают рекомендации без нарушения доверия.",
    },
  ];

  const problems = [
    { icon: Sparkles, title: "Тревожность и страхи", description: "Ночные кошмары, страх темноты, разлуки, школы" },
    { icon: MessageSquare, title: "Проблемы в общении", description: "Трудности с дружбой, конфликты со сверстниками, буллинг" },
    { icon: BookOpen, title: "Трудности в учёбе", description: "Снижение мотивации, прокрастинация, школьная тревога" },
    { icon: Puzzle, title: "Поведенческие проблемы", description: "Агрессия, истерики, непослушание, гиперактивность" },
    { icon: Baby, title: "Адаптация к изменениям", description: "Развод родителей, переезд, рождение брата или сестры" },
    { icon: GraduationCap, title: "Подготовка к школе", description: "Эмоциональная готовность, навыки самоконтроля и общения" },
    { icon: Smile, title: "Самооценка и уверенность", description: "Неуверенность в себе, перфекционизм, страх ошибки" },
    { icon: Heart, title: "Эмоциональные трудности", description: "Замкнутость, апатия, частые слёзы, подавленность" },
  ];

  const howItWorks = [
    { step: "1", title: "Заявка", description: "Свяжитесь с нами по телефону или через форму — опишите ситуацию кратко." },
    { step: "2", title: "Консультация с родителем", description: "Первая встреча — с родителями. Обсуждаем запрос, историю развития ребёнка." },
    { step: "3", title: "Знакомство с ребёнком", description: "Диагностическая сессия: знакомимся с ребёнком, оцениваем его состояние." },
    { step: "4", title: "Терапия", description: "Составляем план работы. Регулярные сессии + рекомендации для родителей." },
  ];

  const faqItems = [
    {
      q: "С какого возраста можно привести ребёнка к психологу?",
      a: "Наши специалисты работают с детьми от 4 лет. Для малышей используются игровые и арт-терапевтические методы, для подростков — разговорная и когнитивно-поведенческая терапия.",
    },
    {
      q: "Нужно ли присутствие родителя на сессии?",
      a: "На первой встрече — да, чтобы собрать информацию. Далее ребёнок работает с психологом один на один. По итогам сессий родители получают обратную связь и рекомендации.",
    },
    {
      q: "Сколько сессий нужно для результата?",
      a: "Зависит от запроса. Некоторые ситуации (адаптация, страхи) решаются за 5–8 сессий. Более глубокие проблемы (тревожное расстройство, травма) требуют 15–20 встреч. Обсудим план на первой консультации.",
    },
    {
      q: "Можно ли проводить консультации онлайн?",
      a: "Да, для детей от 8 лет и подростков мы проводим онлайн-сессии. Для младших детей рекомендуем очный формат, так как игровая терапия требует физического присутствия.",
    },
    {
      q: "Как понять, что ребёнку нужен психолог?",
      a: "Обратите внимание на изменения: ребёнок стал замкнутым, появились страхи, ухудшилась успеваемость, участились конфликты. Если состояние длится более 2 недель — стоит проконсультироваться.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Детский психолог в Минске — консультация очно и онлайн | Интенция</title>
        <meta
          name="description"
          content="Детский психолог в Минске — помощь детям от 4 лет. Тревожность, страхи, поведенческие проблемы, адаптация. Очно и онлайн. Центр «Интенция»."
        />
        <meta
          name="keywords"
          content="детский психолог минск, детский психолог онлайн, детский психолог онлайн консультация, консультация детского психолога минск, хороший детский психолог минск"
        />
        <link rel="canonical" href="https://intention.by/detskij-psiholog" />
        <meta property="og:title" content="Детский психолог в Минске — центр Интенция" />
        <meta
          property="og:description"
          content="Помощь детского психолога очно и онлайн. Работаем с тревогой, страхами, поведенческими проблемами. Запишитесь на консультацию."
        />
        <meta property="og:url" content="https://intention.by/detskij-psiholog" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Детский психолог в Минске — консультация очно и онлайн",
            description:
              "Детский психолог в Минске — помощь детям от 4 лет. Тревожность, страхи, поведенческие проблемы, адаптация.",
            url: "https://intention.by/detskij-psiholog",
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
              description: "Консультация детского психолога, 50 минут",
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
                  Детский психолог в Минске — помощь вашему ребёнку
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Консультации детского психолога очно и онлайн. Помогаем детям от 4 лет справиться с тревогой,
                  страхами, трудностями в общении и учёбе — бережно и профессионально.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                    onClick={openContact}
                  >
                    Записать ребёнка
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
                Почему выбирают нашего детского психолога
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Мы понимаем, как важно найти хорошего детского психолога в Минске — специалиста, которому можно доверить своего ребёнка
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

        {/* Problems */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                С какими проблемами обращаются к детскому психологу
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Если вы заметили тревожные изменения в поведении ребёнка — не откладывайте визит к специалисту
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {problems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center p-5 rounded-lg border border-border bg-background"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Как проходит работа с детским психологом
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Частые вопросы о консультации детского психолога
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость консультации детского психолога</h2>
                <div className="inline-block rounded-2xl border border-border bg-muted/30 px-8 py-6">
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    Консультация — <span className="text-primary">90 BYN</span>
                  </p>
                  <p className="text-muted-foreground">Продолжительность — 50 минут</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Первая встреча включает диагностику и рекомендации для родителей
                  </p>
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
                  Наши детские психологи
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Специалисты центра «Интенция» с опытом работы с детьми и подростками:
                </p>
                <div className="space-y-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Артём Иванов
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, семейная терапия, работа с детьми и подростками</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Екатерина Иванова
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, индивидуальное консультирование, работа с детьми</span>
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
                <h2 className="text-3xl font-bold mb-4">Запишите ребёнка к детскому психологу</h2>
                <p className="text-muted-foreground mb-8">
                  Оставьте заявку — мы перезвоним, ответим на ваши вопросы и подберём удобное время для первой консультации
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    onClick={openContact}
                  >
                    Записать ребёнка
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
              <Link to="/school" className="text-primary hover:underline" title="Школа эмоционального интеллекта для детей">
                Школа ЭИ для детей
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/family-psychologist" className="text-primary hover:underline" title="Семейный психолог Минск">
                Семейный психолог
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/anxiety" className="text-primary hover:underline" title="Лечение тревоги и панических атак">
                Лечение тревоги
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/psiholog-online" className="text-primary hover:underline" title="Психолог онлайн">
                Психолог онлайн
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

export default ChildPsychologist;
