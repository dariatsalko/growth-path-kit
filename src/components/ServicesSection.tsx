import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Shield, Lightbulb, Target, Zap, User } from "lucide-react";

const ServicesSection = () => {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  const services = [
    {
      icon: Brain,
      title: "Тревога и панические атаки",
      description: "Работа со страхами, навязчивыми мыслями и паническими состояниями",
      examples: [
        "У меня постоянное чувство тревоги",
        "Боюсь выходить из дома",
        "Навязчивые мысли не дают покоя",
        "Панические атаки на работе"
      ]
    },
    {
      icon: Heart,
      title: "Депрессия и апатия",
      description: "Поддержка при эмоциональном выгорании и потере интереса к жизни",
      examples: [
        "Ничего не хочется делать",
        "Потерял интерес к жизни",
        "Постоянная усталость",
        "Чувство безнадежности"
      ]
    },
    {
      icon: Users,
      title: "Семейные отношения",
      description: "Улучшение коммуникации в паре, работа с конфликтами и кризисами",
      examples: [
        "Постоянные ссоры с партнером",
        "Не понимаем друг друга",
        "Думаем о разводе",
        "Хотим улучшить отношения"
      ]
    },
    {
      icon: User,
      title: "Детско-родительские отношения",
      description: "Помощь в воспитании и понимании потребностей ребенка",
      examples: [
        "Ребенок не слушается",
        "Проблемы с поведением",
        "Конфликты с подростком",
        "Не знаю как реагировать"
      ]
    },
    {
      icon: Zap,
      title: "Подростковые проблемы",
      description: "Работа с трудностями переходного возраста и самоопределения",
      examples: [
        "Не знаю кем хочу быть",
        "Конфликты с родителями",
        "Проблемы в школе",
        "Чувствую себя одиноко"
      ]
    },
    {
      icon: Shield,
      title: "Травма и ПТСР",
      description: "Проработка травматических переживаний и их последствий",
      examples: [
        "Не могу забыть произошедшее",
        "Кошмары и флешбэки",
        "Избегаю определенных мест",
        "Чувствую себя небезопасно"
      ]
    },
    {
      icon: Target,
      title: "Профессиональное выгорание",
      description: "Восстановление ресурсов и поиск баланса между работой и жизнью",
      examples: [
        "Выгорел на работе",
        "Нет сил на личную жизнь",
        "Работа стала в тягость",
        "Хочу сменить профессию"
      ]
    },
    {
      icon: Lightbulb,
      title: "Личностный рост",
      description: "Развитие самопознания, определение целей и ценностей",
      examples: [
        "Хочу лучше понять себя",
        "Не знаю своих целей",
        "Хочу быть увереннее",
        "Ищу свое предназначение"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" id="services">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            С чем приходят к нам клиенты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы работаем с широким спектром запросов и поможем найти решение вашей ситуации
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group perspective-1000 h-64">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front Side */}
                  <Card className="absolute inset-0 border-border hover:shadow-card transition-shadow duration-300 text-center backface-hidden">
                    <CardHeader className="pb-6 h-full flex flex-col justify-center p-4">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-lg mb-2 leading-tight">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-center">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  
                  {/* Back Side */}
                  <Card className="absolute inset-0 border-border bg-accent/5 text-center backface-hidden rotate-y-180">
                    <CardHeader className="pb-4 h-full flex flex-col p-4">
                      <CardTitle className="text-base mb-3 text-accent">Примеры запросов:</CardTitle>
                      <div className="space-y-1.5 overflow-y-auto flex-1">
                        {service.examples.map((example, exampleIndex) => (
                          <p key={exampleIndex} className="text-xs text-muted-foreground italic leading-tight px-2">
                            "{example}"
                          </p>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
            size="lg"
            onClick={openBooking}
          >
            Хочу обсудить свой запрос
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;