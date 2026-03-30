import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Activity,
  BookOpen,
  Brain,
  CheckCircle,
  ClipboardList,
  GraduationCap,
  Heart,
  MessageSquare,
  Phone,
  Shield,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const ClinicalPsychologist = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const advantages = [
    {
      icon: Stethoscope,
      title: "Клиническое образование",
      description:
        "Наши специалисты имеют высшее клинико-психологическое образование и подготовку в области психодиагностики и психотерапии.",
    },
    {
      icon: Brain,
      title: "Научно обоснованные методы",
      description:
        "Применяем доказательные протоколы: КПТ, схема-терапию, EMDR, нейропсихологическую диагностику и клиническое интервью.",
    },
    {
      icon: ClipboardList,
      title: "Клиническая диагностика",
      description:
        "Проводим патопсихологическое обследование, дифференциальную диагностику и нейропсихологическую оценку.",
    },
    {
      icon: Shield,
      title: "Работа со сложными случаями",
      description:
        "Опыт работы с клиническими расстройствами: депрессия, тревожные расстройства, ОКР, ПТСР, расстройства личности.",
    },
  ];

  const problems = [
    {
      icon: Activity,
      title: "Тревожные расстройства",
      items: ["Генерализованная тревога", "Панические атаки", "Социальная фобия", "Агорафобия"],
    },
    {
      icon: Heart,
      title: "Депрессивные состояния",
      items: ["Клиническая депрессия", "Дистимия", "Послеродовая депрессия", "Биполярное расстройство"],
    },
    {
      icon: Brain,
      title: "Навязчивости и ОКР",
      items: ["Навязчивые мысли", "Компульсивные ритуалы", "Ипохондрия", "Дисморфофобия"],
    },
    {
      icon: Shield,
      title: "Травма и ПТСР",
      items: ["Посттравматический стресс", "Острая стрессовая реакция", "Комплексная травма", "Диссоциация"],
    },
    {
      icon: Users,
      title: "Расстройства личности",
      items: ["Пограничное расстройство", "Нарциссическое расстройство", "Зависимое расстройство", "Избегающее расстройство"],
    },
    {
      icon: Sparkles,
      title: "Психосоматика",
      items: ["Хронические боли без органической причины", "Синдром раздражённого кишечника", "Бессонница", "Хроническая усталость"],
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Клиническое интервью",
      description: "Первичная встреча — сбор анамнеза, выявление симптомов, определение запроса и целей терапии.",
    },
    {
      step: "02",
      title: "Диагностика",
      description: "При необходимости — патопсихологическое обследование и тестирование для уточнения клинической картины.",
    },
    {
      step: "03",
      title: "План терапии",
      description: "Подбор доказательного протокола лечения, согласование частоты и продолжительности сессий.",
    },
    {
      step: "04",
      title: "Психотерапия",
      description: "Работа по выбранному протоколу с регулярной оценкой динамики и корректировкой плана.",
    },
  ];

  const faqs = [
    {
      question: "Чем клинический психолог отличается от обычного психолога?",
      answer:
        "Клинический психолог имеет специализированное образование в области клинической психологии, обучен работе с психическими расстройствами и клинической диагностике. Он может проводить патопсихологическое обследование, работать с клиническими диагнозами и применять специализированные терапевтические протоколы.",
    },
    {
      question: "Клинический психолог — это врач? Может ли он выписывать лекарства?",
      answer:
        "Нет, клинический психолог — не врач-психиатр. Он не выписывает медикаменты. Однако при необходимости клинический психолог может рекомендовать консультацию психиатра и работать в связке с ним, обеспечивая комплексный подход к лечению.",
    },
    {
      question: "Можно ли получить консультацию клинического психолога онлайн?",
      answer:
        "Да, мы проводим онлайн-консультации клинического психолога по видеосвязи. Это эффективный формат для психотерапии, хотя некоторые диагностические процедуры могут потребовать очной встречи.",
    },
    {
      question: "Сколько длится курс терапии у клинического психолога?",
      answer:
        "Длительность зависит от состояния и запроса. Тревожные расстройства и фобии — 8–16 сессий по протоколу КПТ. Депрессия — 12–20 сессий. Расстройства личности — длительная терапия от 6 месяцев. На первой встрече мы обсудим ожидаемые сроки.",
    },
    {
      question: "Сколько стоит консультация клинического психолога в Минске?",
      answer:
        "Стоимость индивидуальной консультации клинического психолога — 90 BYN (50 минут). Патопсихологическое обследование — 160 BYN (комплексная диагностика). Записаться можно по телефону или через форму на сайте.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Клинический психолог Минск – консультация клинического психолога | Интенция</title>
        <meta
          name="description"
          content="Клинический психолог в Минске и онлайн. Диагностика и психотерапия тревожных расстройств, депрессии, ОКР, ПТСР. Доказательные методы. Запись: +375 29 237-57-30."
        />
        <meta
          name="keywords"
          content="клинический психолог минск, клинический психолог онлайн, консультация клинического психолога, клинический психолог минск цена, патопсихологическое обследование минск"
        />
        <link rel="canonical" href="https://intention.by/klinicheskij-psiholog" />
        <meta property="og:title" content="Клинический психолог Минск – диагностика и психотерапия | Интенция" />
        <meta
          property="og:description"
          content="Консультация клинического психолога в Минске — очно и онлайн. Работаем с тревогой, депрессией, ОКР, ПТСР, расстройствами личности."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://intention.by/klinicheskij-psiholog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Клинический психолог Минск – Центр Интенция",
            description:
              "Консультация клинического психолога в Минске и онлайн. Диагностика и терапия тревожных расстройств, депрессии, ОКР, ПТСР.",
            url: "https://intention.by/klinicheskij-psiholog",
            provider: {
              "@type": "MedicalBusiness",
              name: "Центр консультативной психологии Интенция",
              address: {
                "@type": "PostalAddress",
                streetAddress: "пр-т Дзержинского, 11-843",
                addressLocality: "Минск",
                addressCountry: "BY",
              },
              telephone: "+375292375730",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container px-4 relative z-10">
            <AnimatedSection animation="fadeIn">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Stethoscope className="w-4 h-4" />
                  Клиническая психология
                </div>
                <h1 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6 leading-tight">
                  Клинический психолог в Минске — диагностика и психотерапия
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Консультация клинического психолога очно и онлайн. Работаем с тревожными расстройствами, депрессией,
                  ОКР, ПТСР, расстройствами личности и психосоматикой по доказательным протоколам.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                    onClick={openContact}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Записаться на консультацию
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Очно в Минске
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Онлайн по всему миру
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Доказательные методы
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container px-4">
            <AnimatedSection animation="fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
                  Почему клинический психолог центра «Интенция»
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Клиническое образование + доказательные методы + индивидуальный подход
                </p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, index) => {
                const Icon = adv.icon;
                return (
                  <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                    <Card className="h-full border-border/40 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{adv.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">{adv.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container px-4">
            <AnimatedSection animation="fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
                  С какими расстройствами работает клинический психолог
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Специализируемся на клинической диагностике и психотерапии широкого спектра расстройств
                </p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <AnimatedSection key={index} animation="slideUp" delay={index * 80}>
                    <Card className="h-full border-border/40 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <CardTitle className="text-lg">{problem.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {problem.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container px-4">
            <AnimatedSection animation="fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
                  Как проходит работа с клиническим психологом
                </h2>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {howItWorks.map((step, index) => (
                <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container px-4">
            <AnimatedSection animation="fadeIn">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
                    Стоимость консультации клинического психолога
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Индивидуальная консультация</h3>
                      <div className="text-3xl font-bold text-accent mb-2">90 BYN</div>
                      <p className="text-muted-foreground text-sm">50 минут • очно или онлайн</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/20 bg-accent/5">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Комплексная диагностика</h3>
                      <div className="text-3xl font-bold text-accent mb-2">160 BYN</div>
                      <p className="text-muted-foreground text-sm">Патопсихологическое обследование</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                    onClick={openContact}
                  >
                    Записаться на приём
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container px-4">
            <AnimatedSection animation="fadeIn">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
                  Наши клинические психологи
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  В центре «Интенция» работают специалисты с клинико-психологическим образованием и опытом работы
                  в клинических учреждениях.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Link
                    to="/#psychologists"
                    className="px-5 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
                    title="Психолог Артём Иванов"
                  >
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Артём Иванов
                  </Link>
                  <Link
                    to="/#psychologists"
                    className="px-5 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
                    title="Психолог Екатерина Иванова"
                  >
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Екатерина Иванова
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container px-4">
            <AnimatedSection animation="fadeIn">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-8 text-center">
                  Частые вопросы о клиническом психологе
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="border-border/40">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-2">
                          <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed pl-7">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 bg-background border-t border-border/40">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground mb-4">Другие направления работы центра «Интенция»:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/depression"
                  title="Лечение депрессии в Минске"
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm"
                >
                  Лечение депрессии
                </Link>
                <Link
                  to="/anxiety"
                  title="Лечение тревоги и панических атак"
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm"
                >
                  Лечение тревоги
                </Link>
                <Link
                  to="/family-psychologist"
                  title="Семейный психолог Минск"
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm"
                >
                  Семейный психолог
                </Link>
                <Link
                  to="/detskij-psiholog"
                  title="Детский психолог Минск"
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm"
                >
                  Детский психолог
                </Link>
                <Link
                  to="/psiholog-online"
                  title="Психолог онлайн"
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm"
                >
                  Психолог онлайн
                </Link>
                <Link
                  to="/career-guidance"
                  title="Профориентация и психодиагностика"
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm"
                >
                  Профориентация
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container px-4">
            <AnimatedSection animation="fadeIn">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
                  Запишитесь на консультацию клинического психолога
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Первый шаг к решению — обратиться за профессиональной помощью. Мы поможем разобраться в том, что происходит.
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                  onClick={openContact}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Связаться для записи
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ClinicalPsychologist;
