import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, CheckCircle, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Движущая сила",
      description: "Помогаем найти ясное намерение"
    },
    {
      icon: Eye,
      title: "Целеполагание", 
      description: "Поддерживаем внимание на том, что важно"
    },
    {
      icon: CheckCircle,
      title: "Ответственность",
      description: "Работаем с реальными шагами, а не иллюзиями"
    },
    {
      icon: Heart,
      title: "Уважение к процессу",
      description: "Принимаем вас без осуждения, опираемся на доказательную психологию"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/20" aria-labelledby="about-heading">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 id="about-heading" className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Почему «Интенция»?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="border-border bg-background/50 hover:bg-background/80 transition-all duration-300 text-center focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                role="article"
                aria-labelledby={`value-title-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle id={`value-title-${index}`} className="text-lg font-semibold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;