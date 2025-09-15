import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/ui/header";
import Footer from "@/components/Footer";
import { Brain, Users, Calendar, Star, BookOpen, Heart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const School = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Школа эмоционального интеллекта для детей | Центр ИНТЕНЦИЯ</title>
        <meta name="description" content="Развитие эмоционального интеллекта у детей 6-17 лет в Минске. Научно обоснованные методики, игровая терапия, групповые и индивидуальные занятия." />
        <meta property="og:title" content="Школа эмоционального интеллекта для детей | ИНТЕНЦИЯ" />
        <meta property="og:description" content="Помогаем детям понимать эмоции, развивать эмпатию и строить здоровые отношения через игровые практики." />
        <meta property="og:url" content="https://intention.by/school" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3)), url('/src/assets/EI.jpg')`
    }}>
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Школа эмоционального интеллекта
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Развитие ЭИ у детей и подростков
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Помогаем детям понимать эмоции, развивать эмпатию и строить здоровые отношения через игровые практики и научно обоснованные методики
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => window.dispatchEvent(new CustomEvent("openSchoolBookingModal"))}>
                <Calendar className="w-5 h-5 mr-2" />
                Записать ребёнка
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* What is EI Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Что такое эмоциональный интеллект?
            </h2>
            <p className="text-lg text-muted-foreground">
              ЭИ — это способность понимать свои эмоции и эмоции других людей, управлять ими и использовать для принятия решений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Самосознание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Понимание собственных эмоций, их причин и влияния на поведение
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Эмпатия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Способность понимать и разделять эмоции других людей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Социальные навыки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Умение строить отношения, разрешать конфликты и работать в команде
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Программы по возрастам
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">6-8 лет</CardTitle>
                <CardDescription className="text-center">Младшие школьники</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Узнавание базовых эмоций</li>
                  <li>• Игровые техники саморегуляции</li>
                  <li>• Развитие эмпатии через сказки</li>
                  <li>• Простые дыхательные упражнения</li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">20 занятий по 40 минут (1-2 раза в неделю)</p>
                  <p className="font-semibold">От 40 BYN/занятие</p>
                </div>
                <Button className="w-full" onClick={() => window.dispatchEvent(new CustomEvent("openSchoolBookingModal"))}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">9-12 лет</CardTitle>
                <CardDescription className="text-center">Средние школьники</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Сложные эмоции и их причины</li>
                  <li>• Техники управления гневом</li>
                  <li>• Навыки дружбы и общения</li>
                  <li>• Решение конфликтов</li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">20 занятий по 40 минут (2-3 раза в неделю)</p>
                  <p className="font-semibold">От 40 BYN/занятие</p>
                </div>
                <Button className="w-full" onClick={() => window.dispatchEvent(new CustomEvent("openSchoolBookingModal"))}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">13-16 лет</CardTitle>
                <CardDescription className="text-center">Подростки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Эмоциональная саморегуляция</li>
                  <li>• Стресс и тревожность</li>
                  <li>• Межличностные отношения</li>
                  <li>• Цифровая грамотность эмоций</li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">10 занятий по 40 минут

                </p>
                  <p className="font-semibold">От 55 BYN/занятие</p>
                </div>
                <Button className="w-full" onClick={() => window.dispatchEvent(new CustomEvent("openSchoolBookingModal"))}>
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Наши методики
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Используем научно обоснованные подходы, адаптированные для детей и подростков
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Игровая терапия</h3>
              <p className="text-sm text-muted-foreground">
                Обучение через игры и творческие активности
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Групповые практики</h3>
              <p className="text-sm text-muted-foreground">
                Развитие навыков в безопасной групповой среде
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">КПТ для детей</h3>
              <p className="text-sm text-muted-foreground">
                Адаптированная когнитивно-поведенческая терапия
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Майндфулнесс</h3>
              <p className="text-sm text-muted-foreground">
                Техники осознанности для детей и подростков
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help for Parents */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              В помощь родителям
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезные материалы и советы для развития эмоционального интеллекта вашего ребёнка дома
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Часто задаваемые вопросы
            </h3>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>В каком возрасте лучше начинать развитие эмоционального интеллекта?</AccordionTrigger>
                  <AccordionContent>
                    Развитие эмоционального интеллекта можно начинать с самого раннего возраста. Однако наши программы рассчитаны на детей от 6 лет, когда ребёнок уже может осознанно работать с эмоциями и участвовать в групповой работе.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Как понять, что ребёнку нужны занятия по развитию ЭИ?</AccordionTrigger>
                  <AccordionContent>
                    Обратите внимание на следующие признаки: частые истерики, трудности в общении со сверстниками, неумение выражать свои чувства словами, агрессивное поведение, замкнутость, проблемы с адаптацией в новой среде.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Как быстро будут видны результаты?</AccordionTrigger>
                  <AccordionContent>
                    Первые изменения родители замечают уже через 4-6 занятий. Ребёнок начинает лучше понимать и называть свои эмоции. Устойчивые навыки формируются через 2-3 месяца регулярных занятий.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Можно ли развивать ЭИ ребёнка дома самостоятельно?</AccordionTrigger>
                  <AccordionContent>
                    Да, домашняя практика очень важна! Мы предоставляем родителям материалы и упражнения для работы дома. Однако системный подход и работа в группе со специалистом дают более быстрые и устойчивые результаты.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Что делать, если ребёнок не хочет идти на занятия?</AccordionTrigger>
                  <AccordionContent>
                    Это нормальная реакция. Мы используем игровой подход, поэтому дети обычно быстро втягиваются в процесс. Важно не принуждать, а мотивировать ребёнка. Первое занятие можно провести в присутствии родителя.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Работаете ли вы с детьми с особенностями развития?</AccordionTrigger>
                  <AccordionContent>
                    Да, мы адаптируем программы для детей с СДВГ, аутизмом, задержкой развития. Перед началом занятий проводим индивидуальную консультацию для определения оптимального подхода.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Как обеспечить домашнюю практику и поддержку родителей?</AccordionTrigger>
                  <AccordionContent>
                    Домашняя практика очень важна, так как ребёнок присутствует на занятии всего лишь несколько часов в неделю, однако большую часть времени он проводит дома с родителями. В целях поддержания позитивной динамики обучения мы предлагаем периодические консультации с родителями ребёнка, на которых вы получите информацию о его прогрессе, достижениях и успехах, а также сможете задать психологу интересующие вас вопросы и получить поддержку в вопросах самостоятельного обучения.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="mt-12 bg-primary/5 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Бесплатная диагностика ЭИ ребёнка
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Пройдите короткий тест и получите персональные рекомендации по развитию эмоционального интеллекта вашего ребёнка
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => window.open('/test-ei-part1', '_blank')}>
                Пройти тест
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Отзывы родителей
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "После занятий дочь стала лучше понимать свои эмоции и говорить о них. Истерики почти прекратились."
                </p>
                <p className="font-medium">Мария, мама Ани (7 лет)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Сын-подросток научился управлять гневом. В школе конфликтов стало меньше, оценки улучшились."
                </p>
                <p className="font-medium">Алексей, папа Максима (14 лет)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Замечательная программа! Ребёнок стал более уверенным в себе и открытым к общению."
                </p>
                <p className="font-medium">Елена, мама Софии (10 лет)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default School;