import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card/card";

const HowItWorksSection = () => {
  const approaches = [
    {
      title: "Простым языком, без сложных терминов",
      description: "Объясняем процессы понятно и доступно"
    },
    {
      title: "Доказательные методы психологии",
      description: "Используем научно обоснованные подходы"
    },
    {
      title: "Индивидуальная адаптация под ваш запрос",
      description: "Каждая программа создается специально для вас"
    },
    {
      title: "Конфиденциальность и этика",
      description: "Каждый разговор остаётся между нами"
    }
  ];

  const processSteps = [
    { title: "Намерение", description: "Определяем цели" },
    { title: "План", description: "Выстраиваем путь" },
    { title: "Поддержка", description: "Ведем к цели" },
    { title: "Изменение", description: "Достигаем результата" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" id="approach">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Как мы работаем
          </h2>
        </div>

        {/* Approach principles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {approaches.map((approach, index) => (
            <Card key={index} className="border-border bg-secondary/20 hover:bg-secondary/30 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  {approach.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process visualization */}
        <div className="relative bg-gradient-to-r from-primary/5 via-secondary/20 to-primary/5 rounded-2xl p-8 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-12 text-center">
              Путь клиента
            </h3>
            <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                   <Card className="h-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-background/90 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                     <CardContent className="p-6 text-center h-full flex flex-col justify-between min-h-[160px]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-lg mx-auto mb-4 shadow-md">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="bg-background rounded-full p-2 shadow-md">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;