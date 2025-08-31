import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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
    { title: "Поддержка", description: "Сопровождаем процесс" },
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
        <div className="bg-secondary/30 rounded-xl p-6 lg:p-8 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Путь клиента
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-4xl">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4 flex-1">
                <div className="text-center flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-3">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground text-center">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-primary hidden md:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;