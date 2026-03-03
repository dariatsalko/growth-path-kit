import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { AlertTriangle, Brain, CheckCircle, Heart, Phone, Shield, Users, Zap } from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const Anxiety = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const symptoms = [
    "Постоянное беспокойство и ощущение надвигающейся угрозы",
    "Внезапные приступы паники с сердцебиением и нехваткой воздуха",
    "Навязчивые тревожные мысли, которые невозможно остановить",
    "Мышечное напряжение, головные боли, боль в груди",
    "Избегание мест и ситуаций, вызывающих тревогу",
    "Нарушения сна: трудности с засыпанием, кошмары",
    "Раздражительность и трудности с концентрацией",
    "Страх потерять контроль или «сойти с ума»",
  ];

  const methods = [
    {
      icon: Brain,
      title: "Когнитивно-поведенческая терапия (КПТ)",
      description:
        "Золотой стандарт лечения тревожных расстройств. Выявляем катастрофические мысли, учимся оценивать угрозы реалистично и снижаем тревожную реакцию.",
    },
    {
      icon: Zap,
      title: "Экспозиционная терапия",
      description:
        "Постепенное и безопасное столкновение с пугающими ситуациями, которое помогает мозгу «переучиться» и перестать воспринимать их как опасные.",
    },
    {
      icon: Shield,
      title: "Практики осознанности (Mindfulness)",
      description:
        "Техники заземления и дыхания помогают остановить панический приступ, снизить руминацию и научиться находиться в настоящем моменте.",
    },
    {
      icon: Heart,
      title: "Телесно-ориентированный подход",
      description:
        "Работа с мышечными зажимами и соматическими проявлениями тревоги: учимся распознавать сигналы тела и расслабляться.",
    },
  ];

  const faqItems = [
    {
      q: "Чем отличается тревога от тревожного расстройства?",
      a: "Тревога — нормальная реакция на стресс. Тревожное расстройство — состояние, когда тревога становится хронической, непропорциональной ситуации и мешает повседневной жизни.",
    },
    {
      q: "Сколько сессий нужно для лечения панических атак?",
      a: "КПТ при панических атаках обычно занимает 8–16 сессий. Многие клиенты отмечают значительное улучшение уже после 4–6 встреч.",
    },
    {
      q: "Можно ли полностью вылечить панические атаки?",
      a: "Да, панические атаки успешно поддаются терапии. КПТ показывает эффективность до 80–90% при паническом расстройстве. Вы научитесь управлять тревогой и предотвращать приступы.",
    },
    {
      q: "Нужно ли принимать медикаменты?",
      a: "Психотерапия — основной метод при тревожных расстройствах. При необходимости мы порекомендуем консультацию психиатра для назначения поддерживающей медикаментозной терапии.",
    },
    {
      q: "Работаете ли вы онлайн?",
      a: "Да, мы проводим онлайн-консультации. Исследования подтверждают эффективность онлайн-КПТ при тревожных расстройствах.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Лечение тревоги и панических атак в Минске | Центр Интенция</title>
        <meta
          name="description"
          content="Профессиональная помощь при тревожных расстройствах и панических атаках в Минске и онлайн. КПТ, экспозиционная терапия, практики осознанности. Запишитесь на консультацию."
        />
        <meta
          name="keywords"
          content="лечение тревоги минск, панические атаки лечение, психолог тревожность, КПТ тревога, психотерапия панических атак"
        />
        <link rel="canonical" href="https://intention.by/anxiety" />
        <meta property="og:title" content="Лечение тревоги и панических атак — Центр Интенция, Минск" />
        <meta
          property="og:description"
          content="Эффективная психотерапия тревожных расстройств и панических атак. КПТ, экспозиция, майндфулнесс."
        />
        <meta property="og:url" content="https://intention.by/anxiety" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Лечение тревоги и панических атак в Минске",
            description:
              "Профессиональная психотерапия тревожных расстройств и панических атак в центре Интенция.",
            url: "https://intention.by/anxiety",
            mainEntity: {
              "@type": "MedicalCondition",
              name: "Тревожное расстройство",
              alternateName: "Панические атаки",
              possibleTreatment: [
                {
                  "@type": "PsychologicalTreatment",
                  name: "Когнитивно-поведенческая терапия (КПТ)",
                },
                {
                  "@type": "PsychologicalTreatment",
                  name: "Экспозиционная терапия",
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
                  Лечение тревоги и панических атак в Минске
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Тревожные расстройства — одна из самых распространённых психологических проблем,
                  и они хорошо поддаются терапии. Наши специалисты помогут вам вернуть спокойствие
                  и уверенность в себе.
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
                  Признаки тревожного расстройства
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Если несколько из этих симптомов сопровождают вас длительное время — стоит обратиться к специалисту
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
                Как мы работаем с тревогой
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Мы используем научно-доказательные методы с высокой эффективностью при тревожных расстройствах
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
                    "Специализация на тревожных расстройствах",
                    "Научно-доказательные методы (КПТ, экспозиция)",
                    "Индивидуальный подход к каждому клиенту",
                    "Очные консультации и онлайн-формат",
                    "Конфиденциальность и безопасность",
                    "Заметные результаты уже через 4–6 сессий",
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
                  Наши специалисты по работе с тревогой
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  С тревожными расстройствами и паническими атаками в центре «Интенция» работают
                  квалифицированные психологи с опытом в КПТ:
                </p>
                <div className="space-y-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Артём Иванов
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, работа с тревогой и паническими атаками, практики осознанности</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Дарья Цалко
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, тревожные расстройства, стресс-менеджмент</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Екатерина Иванова
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, экспозиционная терапия, индивидуальное консультирование</span>
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
                <h2 className="text-3xl font-bold mb-4">Верните себе спокойствие</h2>
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
              <Link to="/depression" className="text-primary hover:underline" title="Лечение депрессии в Минске">
                Лечение депрессии
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/family-psychologist" className="text-primary hover:underline" title="Семейный психолог в Минске">
                Семейный психолог
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

export default Anxiety;
