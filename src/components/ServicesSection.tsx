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
        "Постоянно чувствую тревогу, будто что-то плохое должно случиться, и не могу расслабиться",
        "Случаются внезапные приступы паники с сердцебиением и нехваткой воздуха, особенно в людных местах",
        "Из-за страха панической атаки стал(а) избегать метро и общественных мест",
        "В голову постоянно лезут пугающие мысли, от которых не могу избавиться",
        "Сильно беспокоюсь о здоровье, хотя врачи говорят, что все в порядке"
      ]
    },
    {
      icon: Heart,
      title: "Депрессия и апатия",
      description: "Поддержка при эмоциональном выгорании и потере интереса к жизни",
      examples: [
        "Пропал интерес ко всему, что раньше радовало, чувствую постоянную пустоту",
        "Нет сил даже на простые дела, все время хочется лежать и ни о чем не думать",
        "Ощущаю полное безразличие и апатию, будто жизнь проходит мимо",
        "Чувствую себя выжатым как лимон, нет энергии ни на работу, ни на семью",
        "Потерял(а) смысл и мотивацию, не вижу света в конце туннеля"
      ]
    },
    {
      icon: Users,
      title: "Семейные отношения",
      description: "Улучшение коммуникации в паре, работа с конфликтами и кризисами",
      examples: [
        "Мы с партнером постоянно ссоримся из-за мелочей и не можем договориться",
        "Чувствую, что мы отдалились друг от друга и живем как соседи",
        "После рождения ребенка отношения стали напряженными, не хватает взаимопонимания",
        "Не знаем, как пережить кризис в отношениях; думаем о расставании, но не хотим сдаваться",
        "Хотим наладить отношения и вернуть былую близость, но не знаем, с чего начать"
      ]
    },
    {
      icon: User,
      title: "Детско-родительские отношения",
      description: "Помощь в воспитании и понимании потребностей ребенка",
      examples: [
        "Ребенок совершенно не слушается, истерики и крики не помогают",
        "Не знаю, как установить границы и правила для ребенка без скандалов",
        "Подросток все время в телефоне, грубит и не хочет общаться",
        "Чувствую себя плохой мамой/плохим папой, потому что не справляюсь с воспитанием",
        "Постоянно срываюсь на ребенка, а потом чувствую вину. Хочу научиться иначе"
      ]
    },
    {
      icon: Zap,
      title: "Подростковые проблемы",
      description: "Работа с трудностями переходного возраста и самоопределения",
      examples: [
        "Я потерял(а) себя: не понимаю, кто я и чего хочу от жизни",
        "Постоянно ругаюсь с родителями, они не принимают мое мнение и мой выбор",
        "Чувствую сильное давление из-за экзаменов и выбора профессии, не справляюсь с нагрузкой",
        "Мне одиноко, я не могу ни с кем найти общий язык, чувствую себя белой вороной",
        "Прокрастинирую, ничего не делаю, а потом мучаюсь от чувства вины"
      ]
    },
    {
      icon: Shield,
      title: "Травма и ПТСР",
      description: "Проработка травматических переживаний и их последствий",
      examples: [
        "Прошла через тяжелое событие, и теперь оно постоянно всплывает в памяти и в кошмарах",
        "Стала очень тревожной и пугливой после пережитой аварии (нападения, потери)",
        "Избегаю всего, что может напомнить о том травматическом событии",
        "Чувствую онемение и отстраненность от реальности, будто со мной это не происходило",
        "Любой резкий звук или неожиданность заставляют меня сильно пугаться и внутренне замирать"
      ]
    },
    {
      icon: Target,
      title: "Профессиональное выгорание",
      description: "Восстановление ресурсов и поиск баланса между работой и жизнью",
      examples: [
        "Ненавижу свою работу, каждое утро — это борьба с собой, чтобы заставить себя идти",
        "Работаю на износ, к вечеру нет сил даже на семью и хобби, только на диван и телевизор",
        "Чувствую цинизм и раздражение по отношению к коллегам и задачам",
        "Ощущаю, что профессионально застрял(а) и не развиваюсь, но нет энергии что-то менять",
        "Мечтаю сменить работу, но не понимаю, куда двигаться и есть ли у меня силы на перемены"
      ]
    },
    {
      icon: Lightbulb,
      title: "Личностный рост",
      description: "Развитие самопознания, определение целей и ценностей",
      examples: [
        "Хочу разобраться в себе: понять свои истинные желания, а не навязанные обществом",
        "Не уверен(а) в себе, постоянно сомневаюсь в своих решениях и ищу одобрения других",
        "Чувствую, что живу не своей жизнью, хочу найти свое предназначение и дело по душе",
        "Поставил(а) себе цели, но не могу начать действовать, мешают страхи и прокрастинация",
        "Хочу научиться выстраивать личные границы, говорить \"нет\" и отстаивать свое мнение"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 px-2">
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