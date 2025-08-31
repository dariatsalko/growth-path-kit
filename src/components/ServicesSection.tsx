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
      description: "Работа со страхами, навязчивыми мыслями и паническими состояниями"
    },
    {
      icon: Heart,
      title: "Депрессия и апатия",
      description: "Поддержка при эмоциональном выгорании и потере интереса к жизни"
    },
    {
      icon: Users,
      title: "Семейные отношения",
      description: "Улучшение коммуникации в паре, работа с конфликтами и кризисами"
    },
    {
      icon: User,
      title: "Детско-родительские отношения",
      description: "Помощь в воспитании и понимании потребностей ребенка"
    },
    {
      icon: Zap,
      title: "Подростковые проблемы",
      description: "Работа с трудностями переходного возраста и самоопределения"
    },
    {
      icon: Shield,
      title: "Травма и ПТСР",
      description: "Проработка травматических переживаний и их последствий"
    },
    {
      icon: Target,
      title: "Профессиональное выгорание",
      description: "Восстановление ресурсов и поиск баланса между работой и жизнью"
    },
    {
      icon: Lightbulb,
      title: "Личностный рост",
      description: "Развитие самопознания, определение целей и ценностей"
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
              <Card key={index} className="border-border hover:shadow-card transition-shadow duration-300 text-center">
                <CardHeader className="pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
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