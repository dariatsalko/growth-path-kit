import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { AlertTriangle, Brain, CheckCircle, Heart, Phone, Shield, Users } from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const Depression = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const symptoms = [
    "Постоянное чувство грусти, пустоты или безнадёжности",
    "Потеря интереса к занятиям, которые раньше приносили удовольствие",
    "Нарушения сна: бессонница или чрезмерная сонливость",
    "Хроническая усталость и упадок сил",
    "Трудности с концентрацией, принятием решений",
    "Изменения аппетита и веса",
    "Чувство вины, никчёмности или самокритика",
    "Мысли о смерти или суициде",
  ];

  const methods = [
    {
      icon: Brain,
      title: "Когнитивно-поведенческая терапия (КПТ)",
      description:
        "Выявляем и перестраиваем негативные мыслительные паттерны, которые поддерживают депрессию. Один из самых изученных и эффективных методов.",
    },
    {
      icon: Heart,
      title: "Эмоционально-фокусированная терапия",
      description:
        "Работаем с подавленными эмоциями, учимся распознавать и проживать чувства, восстанавливая эмоциональный контакт с собой.",
    },
    {
      icon: Shield,
      title: "Практики осознанности (Mindfulness)",
      description:
        "Техники внимательности помогают снизить руминацию и беспокойство, научиться быть в настоящем моменте без осуждения.",
    },
    {
      icon: Users,
      title: "Работа с отношениями",
      description:
        "Депрессия часто связана с межличностными трудностями. Восстанавливаем здоровые связи и поддерживающее окружение.",
    },
  ];

  const faqItems = [
    {
      q: "Сколько длится терапия депрессии?",
      a: "Курс КПТ при депрессии обычно составляет 12–20 сессий. Длительность зависит от тяжести состояния и индивидуальных особенностей.",
    },
    {
      q: "Можно ли справиться с депрессией без медикаментов?",
      a: "При лёгкой и умеренной депрессии психотерапия может быть основным методом лечения. При тяжёлой форме рекомендуется сочетание терапии и медикаментозного лечения.",
    },
    {
      q: "Чем отличается депрессия от обычной грусти?",
      a: "Депрессия — это клиническое состояние, длящееся от двух недель и более, которое существенно нарушает повседневную жизнь. Грусть — нормальная эмоция, которая проходит.",
    },
    {
      q: "Работаете ли вы онлайн?",
      a: "Да, мы проводим онлайн-консультации для клиентов из любой точки мира. Эффективность онлайн-терапии подтверждена исследованиями.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Лечение депрессии в Минске | Психотерапия депрессии — центр Интенция</title>
        <meta
          name="description"
          content="Профессиональная помощь при депрессии в Минске и онлайн. Когнитивно-поведенческая терапия, практики осознанности, эмоционально-фокусированный подход. Запишитесь на консультацию."
        />
        <meta
          name="keywords"
          content="лечение депрессии минск, психотерапия депрессии, психолог депрессия, помощь при депрессии, КПТ депрессия"
        />
        <link rel="canonical" href="https://intention.by/depression" />
        <meta property="og:title" content="Лечение депрессии — Центр Интенция, Минск" />
        <meta
          property="og:description"
          content="Эффективная психотерапия депрессии доказательными методами. КПТ, майндфулнесс, работа с эмоциями."
        />
        <meta property="og:url" content="https://intention.by/depression" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Лечение депрессии в Минске",
            description:
              "Профессиональная психотерапия депрессии в центре Интенция. КПТ, майндфулнесс, эмоционально-фокусированная терапия.",
            url: "https://intention.by/depression",
            mainEntity: {
              "@type": "MedicalCondition",
              name: "Депрессия",
              alternateName: "Депрессивное расстройство",
              possibleTreatment: [
                {
                  "@type": "PsychologicalTreatment",
                  name: "Когнитивно-поведенческая терапия (КПТ)",
                },
                {
                  "@type": "PsychologicalTreatment",
                  name: "Практики осознанности (Mindfulness)",
                },
              ],
            },
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
                  Лечение депрессии в Минске
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Депрессия — не слабость характера, а состояние, с которым можно справиться.
                  Наши психологи используют научно-доказательные методы, чтобы помочь вам вернуть
                  энергию и радость жизни.
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
                    <a href="tel:+375292375730">+375 29 237-57-30</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  Признаки депрессии
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Если вы замечаете у себя несколько из этих симптомов на протяжении двух и более
                  недель — это повод обратиться за помощью
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {symptoms.map((symptom, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border"
                    >
                      <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Methods */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Как мы работаем с депрессией
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Мы применяем методы с доказанной эффективностью, подбирая подход индивидуально
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {methods.map((method, i) => {
                  const Icon = method.icon;
                  return (
                    <Card key={i} className="border-border">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{method.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Почему выбирают центр Интенция
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Опыт работы с депрессией более 10 лет",
                    "Научно-доказательные методы терапии",
                    "Индивидуальный подход к каждому клиенту",
                    "Очные консультации и онлайн-формат",
                    "Конфиденциальность и безопасность",
                    "Результаты уже после первых сессий",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость консультации</h2>
                <div className="inline-block rounded-2xl border border-border bg-muted/30 px-8 py-6">
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
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Наши специалисты по работе с депрессией
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  С депрессивными состояниями в центре «Интенция» работают квалифицированные психологи 
                  с опытом в когнитивно-поведенческой терапии:
                </p>
                <div className="space-y-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Артём Иванов
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, семейная терапия, кризисная психология, практики осознанности</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Дарья Цалко
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, работа с тревогой и депрессивными состояниями, профориентация</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
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
                <h2 className="text-3xl font-bold mb-4">Сделайте первый шаг к выздоровлению</h2>
                <p className="text-muted-foreground mb-8">
                  Запишитесь на первую консультацию — мы поможем подобрать подходящего специалиста и
                  формат работы
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    onClick={openContact}
                  >
                    Записаться на консультацию
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
              <Link to="/school" className="text-primary hover:underline" title="Школа эмоционального интеллекта">
                Школа ЭИ
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/mindfulness" className="text-primary hover:underline" title="Практики осознанности">
                Практики осознанности
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

export default Depression;
