import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/ui/header";
import Footer from "@/components/Footer";
import { Play, Download, Clock, Brain, Leaf, Shield } from "lucide-react";

const Mindfulness = () => {
  const practices = [
    {
      title: "Дыхание 4-7-8",
      duration: "5 минут",
      description: "Техника для быстрого расслабления и снижения тревожности",
      audioUrl: "#",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Сканирование тела",
      duration: "10 минут",
      description: "Постепенное расслабление всех частей тела",
      audioUrl: "#",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Наблюдение за мыслями",
      duration: "8 минут",
      description: "Практика осознанного наблюдения без оценки",
      audioUrl: "#",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Практики осознанности
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Путь к внутреннему спокойствию
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Изучайте техники майндфулнесс и медитации для снижения стресса, улучшения концентрации и эмоционального благополучия
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Play className="w-5 h-5 mr-2" />
                Начать практику
              </Button>
              <Button size="lg" variant="outline">
                Скачать гайды
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Mindfulness */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Что такое осознанность?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Майндфулнесс — это практика сосредоточения внимания на настоящем моменте с принятием и без осуждения. 
              Научные исследования подтверждают эффективность в снижении стресса, тревожности и улучшении качества жизни.
            </p>
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
            {practices.map((practice, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
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
              </Card>
            ))}
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
    </div>
  );
};

export default Mindfulness;