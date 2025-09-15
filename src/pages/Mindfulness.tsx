import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/ui/header";
import Footer from "@/components/Footer";
import { Play, Download, Clock, Brain, Leaf, Shield, AlertTriangle, CheckCircle, Target, Heart, Users, Focus, Zap, Calendar } from "lucide-react";
import landingImage from "@/assets/landing.png";
import mindfullImage from "@/assets/Mindfull.jpg";

const Mindfulness = () => {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  const practices = [{
    title: "Дыхание 4-7-8",
    duration: "5 минут", 
    description: "Техника для быстрого расслабления и снижения тревожности",
    audioUrl: "#",
    icon: <Leaf className="w-6 h-6" />
  }, {
    title: "Сканирование тела",
    duration: "10 минут",
    description: "Постепенное расслабление всех частей тела", 
    audioUrl: "#",
    icon: <Brain className="w-6 h-6" />
  }, {
    title: "Наблюдение за мыслями",
    duration: "8 минут",
    description: "Практика осознанного наблюдения без оценки",
    audioUrl: "#",
    icon: <Clock className="w-6 h-6" />
  }];

  const detailedPractices = [
    {
      name: "Осознанное дыхание",
      howTo: "На 3-5 минут сосредоточьтесь только на вдохе и выдохе. Мысли уплывают — мягко верните внимание к дыханию.",
      purpose: "Якорение в настоящем, снижение тревоги, остановка мысленной жвачки.",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      name: "Сканирование тела (Body Scan)",
      howTo: "Мысленно «пройдитесь» вниманием по всему телу от макушки до пяток, замечая ощущения (тепло, напряжение, покалывание) без оценки.",
      purpose: "Снятие телесных зажимов, снижение стресса, восстановление связи с телом.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: "Осознанная еда",
      howTo: "Ешьте медленно, концентрируясь на вкусе, текстуре, запахе еды. Отложите телефон.",
      purpose: "Восстановление контакта с ощущениями, улучшение пищевого поведения.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Осознанная ходьба",
      howTo: "Идите, чувствуя каждый шаг: как стопа касается земли, работают мышцы. Можно даже мысленно проговаривать: «шаг», «шаг».",
      purpose: "Способствует заземлению, успокоению ума.",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "Техника «СТОП»",
      howTo: "В момент стресса: С – остановись. Т – только дыхание, сделай вдох-выдох. О – осмотрись (что я вижу, слышу, ощущаю? что вокруг происходит?). П – продолжай наблюдать.",
      purpose: "Экстренная самопомощь для управления реакциями в напряженных ситуациях чтобы отвлечься, прийти в равновесие, передохнуть.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Снижение тревоги и депрессии",
      description: "Вы перестаете бесконечно подпитывать свои страхи, наблюдая за ними со стороны.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Управление стрессом", 
      description: "Вы реагируете на события, а не ваши эмоции реагируют на них. Между стимулом и вашей реакцией появляется пространство для выбора чтобы подумать как поступить.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Контроль над мыслями",
      description: "Вы понимаете, что вы — это не ваши мысли. Навязчивые идеи теряют над вами власть.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Улучшение концентрации",
      description: "Вы тренируете «мышцу внимания», что повышает продуктивность и качество работы.",
      icon: <Focus className="w-6 h-6" />
    },
    {
      title: "Улучшение отношений",
      description: "Вы начинаете лучше слушать других, не отвлекаясь на свой внутренний диалог.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Принятие себя",
      description: "Безоценочное наблюдение учит относиться к себе и своим несовершенствам с большей добротой.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const risks = [
    {
      title: "Выгорание",
      description: "Вы не замечаете сигналов тела и психики о переутомлении, пока не рухнете.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Эмоциональные качели",
      description: "Вы — заложник своих сиюминутных импульсов и реакций.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Проблемы со здоровьем",
      description: "Хронический стресс, неосознаваемое напряжение ведут к психосоматике: гипертонии, болезням ЖКТ, паническим атакам.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Пропущенная жизнь",
      description: "Вы физически присутствуете, но ментально отсутствуете. Годы проходят в тумане рутины и тревог, а вы не помните, как жили.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Конфликты в отношениях",
      description: "Неспособность осознать свои истинные потребности и услышать другого человека рушит связи.",
      icon: <Users className="w-6 h-6" />
    }
  ];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="py-16 lg:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5)), url(${mindfullImage})`
        }}
      >
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Осознанность (майндфулнесс)
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Перестаньте жить на автопилоте!
            </h1>
            <div className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto space-y-4">
              <p>
                Вы едите, не чувствуя вкуса? Доезжаете до работы, не помня дороги? Постоянно прокручиваете в голове прошлые обиды или тревожитесь о будущем, пропуская настоящее?
              </p>
              <p>
                Вы не одиноки. Большинство людей живут в режиме «автопилота», теряя связь с собой и жизнью вокруг. Практика осознанности — это не эзотерика, а научно обоснованный метод вернуть себе контроль над вниманием, мыслями и эмоциями.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={openBooking}>
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Mindfulness */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Что такое осознанность (майндфулнесс)?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Осознанность — это навык целенаправленного, безоценочного внимания к тому, что происходит здесь и сейчас: с вашим телом, мыслями, чувствами и окружающим миром.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Это способ:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Выключить автопилот и начать осознанно проживать свою жизнь.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Наблюдать за мыслями и чувствами со стороны, не вовлекаясь в них и не осуждая.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Вернуться в настоящее, вместо бесконечных блужданий в прошлом или будущем.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Научная база</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Более 4000 научных исследований подтверждают пользу практик осознанности
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Простота</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Не требует специального оборудования, можно практиковать где угодно
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Естественный способ работы со стрессом без побочных эффектов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Practices */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Практики и техники: с чего начать?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Практики осознанности — это не сложные медитации по часу. Это простые упражнения, которые можно интегрировать в повседневность.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <div className="min-w-full space-y-6">
                {detailedPractices.map((practice, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          {practice.icon}
                        </div>
                        <CardTitle className="text-xl">{practice.name}</CardTitle>
                      </div>
                    </CardHeader>
                     <CardContent className="grid md:grid-cols-2 gap-6">
                       <div>
                         <h4 className="font-semibold text-foreground mb-2">Как выполнять?</h4>
                         <p className="text-muted-foreground">{practice.howTo}</p>
                       </div>
                       <div>
                         <h4 className="font-semibold text-foreground mb-2">На что направлена?</h4>
                         <p className="text-muted-foreground">{practice.purpose}</p>
                       </div>
                       <div className="md:col-span-2 mt-6 pt-6 border-t border-border">
                         <details className="group">
                           <summary className="cursor-pointer font-semibold text-primary hover:text-primary/80 flex items-center gap-2 mb-4">
                             <span>Подробные инструкции</span>
                             <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                             </svg>
                           </summary>
                           <div className="space-y-4">
                             <div className="p-4 bg-secondary/50 rounded-lg">
                               <h5 className="font-semibold mb-2">Пошаговая инструкция:</h5>
                               <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                                 <li>Найдите удобное место, где вас никто не потревожит</li>
                                 <li>Примите комфортную позу (сидя или лежа)</li>
                                 <li>Закройте глаза или смотрите в одну точку</li>
                                 <li>{practice.howTo}</li>
                                 <li>Начните с 5-10 минут, постепенно увеличивая время</li>
                                 <li>Завершите практику медленно, открыв глаза</li>
                               </ol>
                             </div>
                             <div className="p-4 bg-accent/10 rounded-lg">
                               <h5 className="font-semibold mb-2">Рекомендации:</h5>
                               <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                 <li>Практикуйте в одно и то же время каждый день</li>
                                 <li>Не судите себя за "блуждающие" мысли - это нормально</li>
                                 <li>Будьте терпеливы - результаты приходят с постоянством</li>
                               </ul>
                             </div>
                             <div className="flex gap-3 pt-2">
                               <Button 
                                 size="sm" 
                                 onClick={() => window.dispatchEvent(new CustomEvent("openBookingModal"))}
                                 className="bg-primary hover:bg-primary/90"
                               >
                                 <Calendar className="w-4 h-4 mr-2" />
                                 Записаться на консультацию
                               </Button>
                             </div>
                           </div>
                         </details>
                       </div>
                     </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Почему это важно? Ваши выгоды
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Регулярная практика — это не просто «расслабиться». Это перепрошивка вашей нервной системы.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-16 lg:py-24 bg-destructive/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Чем рискует тот, кто живет на автопилоте?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Отсутствие осознанности — это не нейтрально. Это медленное истощение своих ресурсов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risks.map((risk, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-destructive/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-destructive/10 rounded-lg text-destructive">
                      {risk.icon}
                    </div>
                    <CardTitle className="text-lg">{risk.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{risk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Practices */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Бесплатные практики
            </h2>
            <p className="text-lg text-muted-foreground">
              Попробуйте базовые техники осознанности прямо сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {practices.map((practice, index) => <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {practice.icon}
                    </div>
                    <Badge variant="outline">{practice.duration}</Badge>
                  </div>
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Слушать
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ваши следующие шаги
            </h2>
            <div className="text-lg text-muted-foreground mb-8 space-y-4">
              <p>
                Осознанность — это навык. Ему нельзя научиться, просто прочитав статью. Ему учатся, как учатся играть на гитаре, или водить автомобиль — через регулярную практику.
              </p>
              <p>
                Самый эффективный способ начать — делать это с поддержкой. Психолог владеющий техниками mindfulness, поможет:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-left">Подобрать практики, подходящие именно вам.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-left">Преодолеть сопротивление и сформировать привычку.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-left">Глубже понять связь ваших мыслей, эмоций и телесных реакций.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-left">Интегрировать осознанность в терапию для решения конкретных запросов (тревога, выгорание, низкая самооценка).</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Начните жить осознанно, а не на автопилоте
              </h3>
              <p className="text-xl text-muted-foreground mb-6">
                Верните себе свою жизнь
              </p>
              <Button size="lg" onClick={openBooking} className="text-lg px-8 py-3">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Practice */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Как начать практиковать
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Выберите место и время</h3>
                  <p className="text-muted-foreground">
                    Найдите тихое место, где вас не будут беспокоить. Начните с 5-10 минут в день, лучше в одно и то же время.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Примите удобную позу</h3>
                  <p className="text-muted-foreground">
                    Сядьте с прямой спиной или лягте. Главное — чтобы поза была устойчивой и комфортной на протяжении всей практики.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Сосредоточьтесь на дыхании</h3>
                  <p className="text-muted-foreground">
                    Не нужно менять дыхание, просто наблюдайте за ним. Когда мысли отвлекают, мягко возвращайте внимание к дыханию.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Будьте терпеливы</h3>
                  <p className="text-muted-foreground">
                    Отвлечения нормальны. Не критикуйте себя, просто замечайте и возвращайтесь к практике. 
                    Результаты приходят с регулярностью.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-amber-600" />
                  <CardTitle className="text-amber-800">Важная информация</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-3">
                <p>
                  <strong>Практики осознанности не заменяют медицинскую помощь.</strong> Если вы переживаете острый кризис, 
                  депрессию или другие серьёзные психологические состояния, обратитесь к специалистам.
                </p>
                <p>
                  При дискомфорте во время практики остановитесь и при необходимости проконсультируйтесь с психологом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Частые вопросы
              </h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Не получается медитировать — это нормально?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, это абсолютно нормально! "Не получается" часто означает, что вы замечаете блуждание ума — 
                    это и есть осознанность. Главное — возвращать внимание к объекту практики.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Сколько времени нужно практиковать?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Лучше 5 минут каждый день, чем 30 минут раз в неделю. Начните с 5-10 минут, 
                    постепенно увеличивайте до 20-30 минут по мере комфорта.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Когда появятся результаты?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Первые эффекты (снижение стресса, улучшение сна) могут появиться через 1-2 недели регулярной практики. 
                    Более стабильные изменения — через 6-8 недель.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Mindfulness;