import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Heart, TrendingUp, MessageSquare, Clock, Shield } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Знакомство",
      description: "Определим ваш запрос, обсудим формат работы и подберём подходящего специалиста",
      details: ["Первичная консультация", "Диагностика запроса", "Выбор методов работы"]
    },
    {
      icon: Calendar,
      number: "02", 
      title: "План работы",
      description: "Согласуем цели терапии, частоту встреч и индивидуальную программу поддержки",
      details: ["Постановка целей", "График сессий", "Домашние задания"]
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Движение к результату",
      description: "Регулярные сессии, отслеживание прогресса и корректировка стратегии при необходимости",
      details: ["Еженедельные встречи", "Мониторинг прогресса", "Гибкие подходы"]
    }
  ];

  const faqs = [
    {
      question: "Сколько длится сессия?",
      answer: "50-60 минут для индивидуальной, 60-80 минут для семейной терапии"
    },
    {
      question: "Можно ли проводить сессии онлайн?",
      answer: "Да, онлайн-формат через защищенную видеосвязь так же эффективен"
    },
    {
      question: "Как часто нужно встречаться?",
      answer: "Обычно 1 раз в неделю, но частота обсуждается индивидуально"
    },
    {
      question: "Гарантируете ли вы результат?",
      answer: "Мы гарантируем профессиональный подход, результат зависит от многих факторов"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-4">
        {/* How it works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как проходит работа
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Понятный и безопасный процесс от первого знакомства до достижения ваших целей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 z-0 transform translate-x-4"></div>
                )}
                
                <Card className="relative z-10 border-border hover:shadow-card transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* FAQ Grid */}
        <div className="bg-secondary/30 rounded-xl p-6 lg:p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Частые вопросы
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  {faq.question}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Конфиденциальность</h4>
              <p className="text-sm text-muted-foreground">Полная защита ваших данных</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Этический кодекс</h4>
              <p className="text-sm text-muted-foreground">Следуем международным стандартам</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Гибкий график</h4>
              <p className="text-sm text-muted-foreground">Удобное время для вас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;