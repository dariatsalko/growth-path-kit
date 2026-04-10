import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  BookOpen,
  Brain,
  CheckCircle,
  GraduationCap,
  Heart,
  MessageSquare,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import Footer from "@/components/Footer/Footer";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card";

const TeenPsychologist = () => {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const advantages = [
    {
      icon: Heart,
      title: "Понимание подросткового мира",
      description:
        "Наши психологи говорят на одном языке с подростками — без нотаций, осуждения и давления. Подросток чувствует себя услышанным.",
    },
    {
      icon: Brain,
      title: "Доказательные методы",
      description:
        "Работаем в КПТ, схема-терапии, ACT и других подходах с доказанной эффективностью для подросткового возраста.",
    },
    {
      icon: Users,
      title: "Работа с семьёй",
      description:
        "Помогаем родителям понять подростка и наладить контакт. При необходимости проводим совместные семейные сессии.",
    },
    {
      icon: Shield,
      title: "Конфиденциальность",
      description:
        "Всё, что говорит подросток на сессии, остаётся конфиденциальным. Родители получают рекомендации без нарушения доверия.",
    },
  ];

  const problems = [
    { icon: Sparkles, title: "Тревога и панические атаки", description: "Социальная тревога, страх оценки, панические эпизоды" },
    { icon: MessageSquare, title: "Конфликты с родителями", description: "Непонимание, бунт, нарушение границ, агрессия" },
    { icon: BookOpen, title: "Проблемы с учёбой", description: "Потеря мотивации, прокрастинация, давление экзаменов" },
    { icon: Smile, title: "Низкая самооценка", description: "Неуверенность в себе, сравнение с другими, перфекционизм" },
    { icon: Zap, title: "Самоповреждение и кризис", description: "Селфхарм, суицидальные мысли, эмоциональная нестабильность" },
    { icon: GraduationCap, title: "Профориентация", description: "Тревога о будущем, выбор профессии, давление ожиданий" },
    { icon: Users, title: "Буллинг и кибербуллинг", description: "Травля в школе и соцсетях, изоляция, страх коллектива" },
    { icon: Heart, title: "Депрессия и апатия", description: "Потеря интереса, замкнутость, постоянная усталость, подавленность" },
  ];

  const howItWorks = [
    { step: "1", title: "Заявка", description: "Свяжитесь с нами — расскажите кратко о ситуации. Можно написать в мессенджер." },
    { step: "2", title: "Первая встреча", description: "Знакомство с подростком. Обсуждаем запрос, выстраиваем доверие, оцениваем состояние." },
    { step: "3", title: "План работы", description: "Формируем цели терапии совместно с подростком. При необходимости — встреча с родителями." },
    { step: "4", title: "Терапия", description: "Регулярные сессии + рекомендации для родителей. Отслеживаем динамику и корректируем план." },
  ];

  const faqItems = [
    {
      q: "С какого возраста вы работаете с подростками?",
      a: "Наши специалисты работают с подростками от 12 до 18 лет. Для более младших детей у нас есть отдельное направление — детский психолог.",
    },
    {
      q: "Можно ли записать подростка без его согласия?",
      a: "Мы настоятельно рекомендуем, чтобы подросток сам согласился на визит. Терапия эффективна только при добровольном участии. Мы поможем вам найти подход, если подросток сопротивляется.",
    },
    {
      q: "Сколько длится курс терапии?",
      a: "Зависит от запроса. Ситуативные проблемы (конфликты, стресс перед экзаменами) решаются за 5–10 сессий. Более глубокие трудности (депрессия, тревожное расстройство) — 15–25 встреч.",
    },
    {
      q: "Проводите ли вы онлайн-консультации для подростков?",
      a: "Да, мы проводим полноценные онлайн-сессии для подростков. Многим подросткам онлайн-формат даже комфортнее — они могут общаться из привычной обстановки.",
    },
    {
      q: "Будете ли вы рассказывать родителям, что говорит подросток?",
      a: "Нет. Конфиденциальность — основа доверия. Родители получают общие рекомендации без конкретного содержания сессий. Исключение — ситуации, угрожающие жизни и здоровью.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Психолог для подростка в Минске — консультация очно и онлайн | Интенция</title>
        <meta
          name="description"
          content="Подростковый психолог в Минске — помощь подросткам 12–18 лет. Тревога, депрессия, конфликты, буллинг, самооценка. Очно и онлайн. Центр «Интенция»."
        />
        <meta
          name="keywords"
          content="психолог для подростка в минске, психолог для подростка онлайн, подростковый психолог минск, подростковый психолог онлайн консультация, психолог для подростков"
        />
        <link rel="canonical" href="https://intention.by/psiholog-dlya-podrostka" />
        <meta property="og:title" content="Психолог для подростка в Минске — центр Интенция" />
        <meta
          property="og:description"
          content="Подростковый психолог очно и онлайн. Помогаем с тревогой, депрессией, конфликтами, самооценкой. Запишитесь на консультацию."
        />
        <meta property="og:url" content="https://intention.by/psiholog-dlya-podrostka" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Психолог для подростка в Минске — консультация очно и онлайн",
            description:
              "Подростковый психолог в Минске — помощь подросткам 12–18 лет. Тревога, депрессия, конфликты, буллинг, самооценка.",
            url: "https://intention.by/psiholog-dlya-podrostka",
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
              description: "Консультация подросткового психолога, 50 минут",
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
                  Психолог для подростка в Минске — поддержка в сложный период
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Консультации подросткового психолога очно и онлайн. Помогаем подросткам 12–18 лет справиться
                  с тревогой, депрессией, конфликтами и найти опору — без давления и нотаций.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                    onClick={openContact}
                  >
                    Записать подростка
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
                Почему выбирают нашего подросткового психолога
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Подростковый возраст — время перемен и кризисов. Важно, чтобы рядом был специалист, которому подросток доверяет
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
                С какими проблемами обращаются к подростковому психологу
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Если подросток изменился, замкнулся или стал агрессивным — это сигнал, что ему нужна помощь
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
                Как проходит работа с подростковым психологом
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
                Частые вопросы о подростковом психологе
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость консультации подросткового психолога</h2>
                <div className="inline-block rounded-2xl border border-border bg-muted/30 px-8 py-6">
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    Консультация — <span className="text-primary">90 BYN</span>
                  </p>
                  <p className="text-muted-foreground">Продолжительность — 50 минут</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Первая встреча включает оценку состояния и формирование плана работы
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
                  Наши подростковые психологи
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Специалисты центра «Интенция» с опытом работы с подростками:
                </p>
                <div className="space-y-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Артём Иванов
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, семейная терапия, работа с подростками</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <Link to="/#psychologists" className="text-primary font-semibold hover:underline">
                        Екатерина Иванова
                      </Link>
                      <span className="text-muted-foreground"> — КПТ, индивидуальное консультирование, подростковая психология</span>
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
                <h2 className="text-3xl font-bold mb-4">Запишите подростка к психологу</h2>
                <p className="text-muted-foreground mb-8">
                  Оставьте заявку — мы перезвоним, ответим на вопросы и подберём удобное время для первой встречи
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    onClick={openContact}
                  >
                    Записать подростка
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
              <Link to="/detskij-psiholog" className="text-primary hover:underline" title="Детский психолог Минск">
                Детский психолог
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/school" className="text-primary hover:underline" title="Школа эмоционального интеллекта для подростков">
                Школа ЭИ
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/family-psychologist" className="text-primary hover:underline" title="Семейный психолог Минск">
                Семейный психолог
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/depression" className="text-primary hover:underline" title="Лечение депрессии Минск">
                Лечение депрессии
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/anxiety" className="text-primary hover:underline" title="Лечение тревоги Минск">
                Лечение тревоги
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/career-guidance" className="text-primary hover:underline" title="Профориентация для подростков">
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

export default TeenPsychologist;
