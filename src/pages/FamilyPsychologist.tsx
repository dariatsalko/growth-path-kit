import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { CheckCircle, Heart, MessageCircle, Phone, Shield, Target, Users } from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const FamilyPsychologist = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const signs = [
    "Постоянные конфликты и ссоры из-за мелочей",
    "Ощущение отдаления и эмоциональной холодности",
    "Проблемы с доверием и ревность",
    "Трудности в общении: «мы не слышим друг друга»",
    "Кризис после рождения ребёнка",
    "Измена или угроза развода",
    "Разные взгляды на воспитание детей",
    "Эмоциональное или физическое выгорание в отношениях",
  ];

  const methods = [
    {
      icon: Heart,
      title: "Эмоционально-фокусированная терапия (ЭФТ)",
      description:
        "Помогаем партнёрам распознать деструктивные паттерны взаимодействия и восстановить безопасную эмоциональную связь.",
    },
    {
      icon: Users,
      title: "Системная семейная терапия",
      description:
        "Рассматриваем семью как систему, где изменения одного элемента влияют на всех. Находим ресурсы для изменений внутри семьи.",
    },
    {
      icon: Target,
      title: "Когнитивно-поведенческая терапия (КПТ)",
      description:
        "Выявляем автоматические мысли и убеждения, которые мешают конструктивному общению. Вырабатываем новые модели поведения.",
    },
    {
      icon: Shield,
      title: "Медиация и навыки коммуникации",
      description:
        "Обучаем техникам активного слушания, «Я-сообщениям» и конструктивному разрешению конфликтов.",
    },
  ];

  const situations = [
    {
      title: "Семейные кризисы",
      description: "Помощь в переходные моменты: рождение ребёнка, переезд, карьерные изменения, выход на пенсию.",
    },
    {
      title: "Работа с парами",
      description: "Восстановление близости, преодоление конфликтов, укрепление доверия и улучшение коммуникации.",
    },
    {
      title: "Детско-родительские отношения",
      description: "Налаживание контакта с ребёнком, выстраивание границ без насилия, понимание потребностей детей.",
    },
    {
      title: "Развод и сепарация",
      description: "Поддержка при разводе: сохранение родительских функций, минимизация стресса для детей.",
    },
  ];

  const faqItems = [
    {
      q: "Нужно ли приходить вдвоём?",
      a: "Не обязательно. Часто работа начинается с одного из партнёров. Позже, если появится готовность, можно подключить второго. Индивидуальная работа тоже даёт результат.",
    },
    {
      q: "Сколько длится курс семейной терапии?",
      a: "Обычно 8–15 сессий. Частота — раз в 1–2 недели. Длительность зависит от сложности ситуации и готовности пары к изменениям.",
    },
    {
      q: "Психолог будет вставать на чью-то сторону?",
      a: "Нет. Семейный психолог — нейтральный посредник. Его задача — помочь обоим партнёрам быть услышанными и найти совместное решение.",
    },
    {
      q: "Можно ли спасти отношения после измены?",
      a: "Многие пары восстанавливают отношения после измены. Это требует времени и работы обоих партнёров, но терапия существенно повышает шансы.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Семейный психолог в Минске | Терапия для пар — центр Интенция</title>
        <meta
          name="description"
          content="Семейный психолог в Минске и онлайн. Помощь парам при конфликтах, кризисах, недоверии. Эмоционально-фокусированная и системная семейная терапия. Запишитесь на консультацию."
        />
        <meta
          name="keywords"
          content="семейный психолог минск, терапия для пар, семейная терапия, психолог для семьи, помощь при разводе, конфликты в паре"
        />
        <link rel="canonical" href="https://intention.by/family-psychologist" />
        <meta property="og:title" content="Семейный психолог — Центр Интенция, Минск" />
        <meta
          property="og:description"
          content="Профессиональная помощь семьям и парам. Системная семейная терапия, ЭФТ, работа с конфликтами и кризисами."
        />
        <meta property="og:url" content="https://intention.by/family-psychologist" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Семейный психолог в Минске",
            description:
              "Семейная терапия и консультирование пар в центре Интенция. ЭФТ, системная терапия, медиация.",
            url: "https://intention.by/family-psychologist",
            mainEntity: {
              "@type": "MedicalCondition",
              name: "Семейные и отношенческие проблемы",
              possibleTreatment: [
                {
                  "@type": "PsychologicalTreatment",
                  name: "Эмоционально-фокусированная терапия (ЭФТ)",
                },
                {
                  "@type": "PsychologicalTreatment",
                  name: "Системная семейная терапия",
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
                  Семейный психолог в Минске
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Конфликты, отдаление, кризисы — не приговор для отношений.
                  Наши семейные психологи помогут вам вернуть близость, научиться слышать
                  друг друга и выстроить крепкую семью.
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

        {/* Signs */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  Когда стоит обратиться к семейному психологу
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Если вы узнаёте себя хотя бы в нескольких пунктах — это повод задуматься о профессиональной поддержке
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {signs.map((sign, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border"
                    >
                      <MessageCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{sign}</span>
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
                Как мы работаем с семьями и парами
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Подбираем подход индивидуально, сочетая проверенные методы семейной терапии
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

        {/* Situations */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                С какими ситуациями мы работаем
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {situations.map((item, i) => (
                  <Card key={i} className="border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Почему выбирают центр Интенция
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Опыт работы с семьями более 10 лет",
                    "Доказательные методы: ЭФТ, КПТ, системная терапия",
                    "Нейтральная позиция психолога",
                    "Очные и онлайн-консультации",
                    "Конфиденциальность гарантирована",
                    "Ощутимые результаты уже после 3–5 сессий",
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость консультации</h2>
                <div className="inline-block rounded-2xl border border-border bg-background px-8 py-6">
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    Семейная / парная консультация — <span className="text-primary">130 BYN</span>
                  </p>
                  <p className="text-muted-foreground">Продолжительность — 70 минут</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Индивидуальная консультация — 90 BYN (50 минут)
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
                  Наши семейные психологи
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  С семейными и парными запросами в центре «Интенция» работают специалисты
                  с опытом в системной и эмоционально-фокусированной терапии:
                </p>
                <div className="space-y-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Артём Иванов
                      </Link>
                      <span className="text-muted-foreground"> — семейная терапия, КПТ, кризисная психология, работа с парами</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Дарья Цалко
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, работа с тревогой, семейные конфликты, детско-родительские отношения</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Екатерина Иванова
                      </Link>
                      <span className="text-muted-foreground"> — индивидуальное и семейное консультирование, коучинг</span>
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
                <h2 className="text-3xl font-bold mb-4">Сделайте первый шаг к гармонии</h2>
                <p className="text-muted-foreground mb-8">
                  Запишитесь на первую консультацию — мы поможем подобрать подходящего специалиста
                  и формат работы для вашей семьи
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
              <Link to="/" className="text-primary hover:underline" title="Психолог Минск — консультации">
                Консультации
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/depression" className="text-primary hover:underline" title="Лечение депрессии в Минске">
                Лечение депрессии
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

export default FamilyPsychologist;
