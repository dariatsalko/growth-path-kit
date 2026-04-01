import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, CheckCircle, MessageCircle, Shield, Target, Clock, ArrowRight, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import Footer from "@/components/Footer/Footer";

const KptPsychologist = () => {
  const openBooking = () => window.dispatchEvent(new Event("open-booking-modal"));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "КПТ психолог в Минске — когнитивно-поведенческая терапия",
    "description": "Когнитивно-поведенческая терапия (КПТ) в Минске и онлайн. Научно-доказательный метод лечения тревоги, депрессии, фобий и ОКР.",
    "url": "https://intention.by/kpt-psiholog",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Центр консультативной психологии Интенция",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "пр-т Дзержинского, 11-843",
        "addressLocality": "Минск",
        "addressCountry": "BY"
      },
      "telephone": "+375292375730",
      "priceRange": "90 BYN"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое когнитивно-поведенческая терапия (КПТ)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "КПТ — это научно-доказательный метод психотерапии, основанный на связи мыслей, эмоций и поведения. Терапевт помогает выявить и изменить негативные мыслительные паттерны, которые вызывают страдания."
        }
      },
      {
        "@type": "Question",
        "name": "При каких проблемах помогает КПТ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "КПТ эффективна при тревожных расстройствах, депрессии, панических атаках, фобиях, ОКР, посттравматическом стрессе, расстройствах пищевого поведения, бессоннице и хронической боли."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько сеансов КПТ нужно для результата?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Обычно курс КПТ составляет 8–20 сеансов. Многие клиенты отмечают первые улучшения уже после 3–5 встреч. Точное количество зависит от сложности проблемы."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли проходить КПТ онлайн?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, КПТ одинаково эффективна онлайн и очно. Исследования подтверждают, что онлайн-формат КПТ даёт результаты, сопоставимые с очной терапией."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько стоит сеанс КПТ в Минске?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стоимость индивидуальной сессии КПТ — 90 BYN (50 минут). Первая консультация включает диагностику и составление плана терапии."
        }
      }
    ]
  };

  const problems = [
    { icon: <Shield className="w-6 h-6" />, title: "Тревожные расстройства", desc: "Генерализованная тревога, социальная тревожность, паническое расстройство" },
    { icon: <Brain className="w-6 h-6" />, title: "Депрессия", desc: "Депрессивные эпизоды, дистимия, послеродовая депрессия" },
    { icon: <Target className="w-6 h-6" />, title: "Фобии и ОКР", desc: "Специфические фобии, обсессивно-компульсивное расстройство" },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Проблемы со сном", desc: "Бессонница, нарушения сна, ночные кошмары" },
  ];

  const advantages = [
    { title: "Научная доказательность", desc: "КПТ — самый исследованный метод психотерапии с доказанной эффективностью в более чем 2000 клинических исследований" },
    { title: "Краткосрочность", desc: "В отличие от других подходов, КПТ даёт результат за 8–20 сеансов, а не за годы терапии" },
    { title: "Практические навыки", desc: "Вы получаете конкретные инструменты для управления мыслями и эмоциями, которые работают и после завершения терапии" },
    { title: "Домашние задания", desc: "Между сеансами вы выполняете упражнения, которые ускоряют прогресс и закрепляют результат" },
  ];

  const steps = [
    { num: "01", title: "Диагностика", desc: "Оценка состояния с помощью клинических шкал, выявление ключевых проблем и формулирование целей терапии" },
    { num: "02", title: "Когнитивная модель", desc: "Построение индивидуальной когнитивной модели: как мысли влияют на эмоции и поведение" },
    { num: "03", title: "Работа с мыслями", desc: "Выявление автоматических мыслей и когнитивных искажений, обучение техникам когнитивной реструктуризации" },
    { num: "04", title: "Поведенческие эксперименты", desc: "Проверка убеждений через эксперименты в реальной жизни, формирование новых поведенческих паттернов" },
  ];

  return (
    <>
      <Helmet>
        <title>КПТ психолог Минск — когнитивно-поведенческая терапия | Интенция</title>
        <meta name="description" content="Когнитивно-поведенческая терапия (КПТ) в Минске и онлайн. Научно-доказательный метод лечения тревоги, депрессии, фобий. Запись к КПТ-терапевту ☎ +375 29 237-57-30" />
        <meta name="keywords" content="кпт психолог минск, когнитивно поведенческая терапия минск, кпт терапевт, кпт онлайн, когнитивно-поведенческий психолог, психолог кпт онлайн консультация" />
        <link rel="canonical" href="https://intention.by/kpt-psiholog" />
        <meta property="og:title" content="КПТ психолог Минск — когнитивно-поведенческая терапия | Интенция" />
        <meta property="og:description" content="Когнитивно-поведенческая терапия в центре Интенция. Научно-доказательный метод лечения тревоги, депрессии, фобий и ОКР." />
        <meta property="og:url" content="https://intention.by/kpt-psiholog" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container px-4">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                Научно-доказательный метод
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Когнитивно-поведенческая терапия (КПТ) в Минске
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                КПТ — «золотой стандарт» психотерапии. Помогаем изменить мышление и поведение, чтобы вы почувствовали себя лучше. Очно в Минске и онлайн из любой точки мира.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-base" onClick={() => openBooking()}>
                  Записаться на КПТ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="tel:+375292375730">
                    <Phone className="mr-2 w-5 h-5" />
                    +375 29 237-57-30
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Что такое КПТ */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Что такое когнитивно-поведенческая терапия?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">Когнитивно-поведенческая терапия (КПТ)</strong> — это структурированный, краткосрочный и научно-доказательный метод психотерапии. Он основан на идее, что наши <em>мысли</em>, <em>эмоции</em> и <em>поведение</em> тесно связаны друг с другом.
                </p>
                <p>
                  Негативные автоматические мысли формируют искажённое восприятие реальности, что приводит к тревоге, депрессии и другим расстройствам. КПТ-терапевт помогает выявить эти мыслительные паттерны и заменить их более адаптивными.
                </p>
                <p>
                  По данным Американской психологической ассоциации, КПТ имеет сильнейшую доказательную базу среди всех видов психотерапии и рекомендована как метод первого выбора при тревожных и депрессивных расстройствах.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества КПТ */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Почему КПТ — лучший выбор
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {advantages.map((item, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* При каких проблемах */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              При каких проблемах помогает КПТ
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {problems.map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              Также КПТ эффективна при посттравматическом стрессе (ПТСР), расстройствах пищевого поведения, хронической боли, проблемах с самооценкой и прокрастинацией.
            </p>
          </div>
        </section>

        {/* Как проходит */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Как проходит КПТ в центре «Интенция»
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-card border border-border shadow-sm">
                  <span className="text-4xl font-bold text-primary/15 absolute top-4 right-4">{step.num}</span>
                  <h3 className="font-semibold text-foreground mb-3 mt-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Стоимость */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Стоимость КПТ-терапии
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Длительность сеанса — 50 минут</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">90 BYN</div>
                <p className="text-muted-foreground mb-6">Индивидуальная сессия КПТ</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Первая консультация включает клиническую диагностику, построение когнитивной модели и составление индивидуального плана терапии.
                </p>
                <Button size="lg" onClick={() => openBooking()}>
                  Записаться на консультацию
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Специалисты */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Наши КПТ-терапевты
              </h2>
              <p className="text-muted-foreground mb-8">
                С вами работают сертифицированные когнитивно-поведенческие терапевты с клиническим опытом:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#psychologists"
                  title="Психолог Артём Иванов — КПТ-терапевт"
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-6 py-4 hover:shadow-md transition-shadow"
                >
                  <span className="font-semibold text-foreground">Артём Иванов</span>
                  <span className="text-sm text-muted-foreground">— КПТ, схемотерапия</span>
                </Link>
                <Link
                  to="/#psychologists"
                  title="Психолог Екатерина Иванова — когнитивно-поведенческая терапия"
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-6 py-4 hover:shadow-md transition-shadow"
                >
                  <span className="font-semibold text-foreground">Екатерина Иванова</span>
                  <span className="text-sm text-muted-foreground">— КПТ, ACT</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Онлайн-формат */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                КПТ-терапия онлайн
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Когнитивно-поведенческая терапия отлично работает в онлайн-формате. Мета-анализы исследований подтверждают, что <strong className="text-foreground">онлайн-КПТ столь же эффективна</strong>, как и очные сессии.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Вы можете проходить КПТ-терапию из любой точки мира через Zoom, Skype или Google Meet. Это особенно удобно, если вы живёте за пределами Минска или предпочитаете заниматься из дома.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => openBooking()}>
                    Записаться онлайн
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/psiholog-online" title="Подробнее о консультациях психолога онлайн">
                      Подробнее об онлайн-формате
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Внутренние ссылки */}
        <section className="py-12 bg-secondary/30">
          <div className="container px-4">
            <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Связанные услуги</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              <Link to="/depression" title="Лечение депрессии с помощью КПТ в Минске" className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all">
                Лечение депрессии
              </Link>
              <Link to="/anxiety" title="Лечение тревоги и панических атак методом КПТ" className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all">
                Лечение тревоги
              </Link>
              <Link to="/klinicheskij-psiholog" title="Клинический психолог в Минске" className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all">
                Клинический психолог
              </Link>
              <Link to="/psiholog-online" title="Психолог онлайн — консультация КПТ" className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all">
                Психолог онлайн
              </Link>
              <Link to="/anonimnyj-psiholog" title="Анонимная КПТ-консультация" className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all">
                Анонимный психолог
              </Link>
              <Link to="/family-psychologist" title="Семейный психолог в Минске" className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all">
                Семейный психолог
              </Link>
              <Link to="/detskij-psiholog" title="Детский психолог — КПТ для детей" className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all">
                Детский психолог
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Частые вопросы о КПТ
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <details key={i} className="group bg-card rounded-xl border border-border p-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="font-medium text-foreground pr-4">{faq.name}</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{faq.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Начните КПТ-терапию уже сегодня
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Запишитесь на первую консультацию — мы оценим ваше состояние и составим индивидуальный план когнитивно-поведенческой терапии
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => openBooking()}>
                Записаться на КПТ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:+375292375730">
                  <Phone className="mr-2 w-5 h-5" />
                  Позвонить
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default KptPsychologist;
