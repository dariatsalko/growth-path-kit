import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Елена Михайловна помогла мне справиться с паническими атаками. Теперь я знаю, как управлять своими эмоциями и чувствую себя намного увереннее.",
      author: "Анна, 28 лет",
      service: "Индивидуальная терапия",
      rating: 5
    },
    {
      text: "Семейная терапия буквально спасла наш брак. Мы научились слышать друг друга и решать конфликты конструктивно. Очень благодарны специалисту!",
      author: "Михаил и Елена",
      service: "Семейная терапия", 
      rating: 5
    },
    {
      text: "Дочь-подросток стала более открытой после занятий в Школе ЭИ. Она лучше понимает свои эмоции и может их выражать словами, а не истериками.",
      author: "Мама Софии, 14 лет",
      service: "Школа ЭИ",
      rating: 5
    },
    {
      text: "Онлайн-формат оказался очень удобным. Качество работы ничем не отличается от очных встреч, а экономия времени - огромная.",
      author: "Дмитрий, 35 лет",
      service: "Онлайн консультации",
      rating: 5
    },
    {
      text: "Практики осознанности помогли мне справиться со стрессом на работе. Теперь использую техники дыхания ежедневно.",
      author: "Ирина, 32 года",
      service: "Практики осознанности",
      rating: 5
    },
    {
      text: "Работа с травмой была непростой, но результат превзошёл ожидания. Чувствую, что действительно освободилась от груза прошлого.",
      author: "Мария, 41 год",
      service: "Травма-терапия",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Довольных клиентов" },
    { number: "95%", label: "Положительных отзывов" },
    { number: "8+", label: "Лет опыта работы" },
    { number: "24/7", label: "Поддержка в кризисе" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные истории людей, которые смогли изменить свою жизнь к лучшему
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed italic pl-4">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Хотите поделиться своей историей успеха?
          </p>
          <div className="text-sm text-muted-foreground">
            Все отзывы публикуются анонимно с согласия клиентов
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;