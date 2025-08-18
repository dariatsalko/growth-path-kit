import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Heart, Brain, Clock, Smartphone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуальная терапия",
      description: "Работа с тревогой, депрессией, травмой, кризисными состояниями",
      price: "от 4 000 ₽",
      duration: "50-60 мин",
      features: ["Онлайн и очно", "Научно обоснованные методы", "Конфиденциальность"]
    },
    {
      icon: Users,
      title: "Семейная терапия",
      description: "Работа с парами и семьями, детско-родительские отношения",
      price: "от 5 000 ₽",
      duration: "60-80 мин",
      features: ["Системный подход", "Работа с конфликтами", "Улучшение коммуникации"]
    },
    {
      icon: Heart,
      title: "Подростковая психология",
      description: "Поддержка подростков в период взросления и адаптации",
      price: "от 3 500 ₽",
      duration: "45-50 мин",
      features: ["Возраст 12-18 лет", "Работа с самооценкой", "Поддержка родителей"]
    },
    {
      icon: Brain,
      title: "Разовая консультация",
      description: "Получите поддержку и рекомендации по конкретному вопросу",
      price: "от 3 000 ₽",
      duration: "50 мин",
      features: ["Без обязательств", "Быстрая запись", "Четкие рекомендации"]
    }
  ];

  const formats = [
    {
      icon: Smartphone,
      title: "Онлайн консультации",
      description: "Удобно из дома через защищенную видеосвязь"
    },
    {
      icon: Clock,
      title: "Гибкое расписание",
      description: "Включая вечерние и выходные часы"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Услуги и форматы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подберем подходящий формат работы под ваши потребности и возможности
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-border hover:shadow-card transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-semibold text-accent">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                    size="sm"
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Format Features */}
        <div className="bg-secondary/30 rounded-xl p-6 lg:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {formats.map((format, index) => {
              const IconComponent = format.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{format.title}</h3>
                    <p className="text-sm text-muted-foreground">{format.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;