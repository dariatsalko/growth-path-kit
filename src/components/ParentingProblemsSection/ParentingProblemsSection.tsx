import { AlertTriangle, Brain, Heart, Lightbulb, Shield,Users } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion/accordion";
import { Badge } from "@/components/ui/badge/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card/card";

const ParentingProblemsSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      category: "Истерики и трудности с контролем эмоций",
      problem: "Ребёнок часто устраивает истерики, не может справиться с эмоциями",
      solution: "Сохраняйте спокойствие. Помогите ребёнку назвать свою эмоцию словами («Ты злишься, потому что...») и освоить дыхательные техники.",
      tips: [
        "Уголок спокойствия: Организуйте дома место, где ребёнок может прийти в себя.",
        "Техника «5-4-3-2-1»: Помогает «вернуться» в настоящее, отвлечься от эмоций (назовите 5 вещей, которые видите, 4 – которые слышите и т.д.).",
        "Стоп-слово: Придумайте слово, которое любой из вас может сказать для паузы в назревающем конфликте."
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      category: "Замкнутость и избегание общения",
      problem: "Ребёнок замкнут, избегает общения со сверстниками",
      solution: "Мягко тренируйте социальные навыки в игре и обсуждайте эмоции героев книг/фильмов. Не давите, но создавайте условия для комфортного общения.",
      tips: [
        "Обсуждение книг: Читайте и анализируйте истории о дружбе.",
        "Тихие визиты: Приглашайте в гости по одному ребёнку, чтобы не перегружать.",
        "Ролевые игры: Отрепетируйте фразы для знакомства и joining игры."
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      category: "Тревожность и страх нового",
      problem: "Ребёнок слишком переживает, боится новых ситуаций или проявляет излишнюю тревожность",
      solution: "Признавайте право ребёнка на тревогу («Понимаю, ты волнуешься»). Повышайте предсказуемость мира через ритуалы. Учите техникам самоуспокоения.",
      tips: [
        "Коробка храбрости: Соберите коробку с успокаивающими или придающими уверенность предметами (игрушка, камень, записка).",
        "Дыхание бабочки: Deep breathing с скрещенными на груди руками и маханием локтями.",
        "Визуализация: Проигрывайте в голове сценарий успеха перед важным событием."
      ]
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      category: "Агрессия (к людям, вещам)",
      problem: "Ребёнок проявляет агрессию к другим детям, родителям или портит вещи",
      solution: "Ищите корень проблемы (усталость, обида, злость), а не боритесь с симптомом. Предлагайте социально приемлемые способы выпустить пар.",
      tips: [
        "Банка злости: Емкость, в которую можно кричать или бросать записки с гневными словами.",
        "Пауза на 10 секунд: Договоритесь считать до 10, прежде чем что-то сделать или сказать.",
        "Спорт: Направьте энергию в конструктивное русло (бег, единоборства, танцы)."
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      category: "Неуверенность в себе, боязнь ошибок",
      problem: "Ребёнок не верит в себя, боится ошибок, говорит 'я не умею', 'у меня не получится'",
      solution: "Хвалите за старание и процесс. Подчёркивайте, что навыки развиваются. Дробите задачи на мелкие шаги, чтобы ребёнок мог чаще чувствовать успех.",
      tips: [
        "Дневник достижений: Регулярно записывайте вместе все успехи, big and small.",
        "Волшебное слово «пока»: «Ты это пока не умеешь, но научишься».",
        "Маленькие шаги: Большую цель разделите на несколько маленьких и простых этапов."
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      category: "Непослушание и проверка границ",
      problem: "Ребёнок не слушается, игнорирует просьбы, устанавливает свои правила",
      solution: "Будьте последовательны и четки в установлении правил. Объясняйте их причины. Давайте ребёнку чувство контроля через предоставление выбора.",
      tips: [
        "Совместные правила: Составьте список семейных правил вместе, повесьте на видное место.",
        "Таймер: Используйте его для переходов между делами («через 5 минут выключаем мультики»).",
        "Позитивное подкрепление: Чаще хвалите за хорошее поведение, чем ругаете за плохое."
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            В помощь родителям
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Полезные материалы и советы для развития эмоционального интеллекта вашего ребёнка дома
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Практические решения самых частых проблем в воспитании, которые волнуют родителей. 
            Советы от наших психологов для ежедневной работы с эмоциональным интеллектом ребёнка.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {problems.map((item, index) => (
              <AccordionItem key={index} value={`problem-${index}`} className="border rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    {item.icon}
                    <div>
                      <Badge variant="outline" className="mb-2">{item.category}</Badge>
                      <h3 className="font-semibold text-lg leading-tight">
                        {item.problem}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      Решение:
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Практические советы:
                    </h4>
                    <ul className="space-y-1">
                      {item.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Дополнительные ресурсы
            </h3>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="daily-practices">
              <AccordionTrigger>Ежедневные практики для развития ЭИ дома</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">Утренние ритуалы:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• 'Проверка эмоций' - как ты себя чувствуешь?</li>
                    <li>• Планирование дня с учётом эмоций</li>
                    <li>• Дыхательные упражнения (2-3 минуты)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Вечерние практики:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Обсуждение самого яркого эмоционального момента дня</li>
                    <li>• Благодарности (3 вещи, за которые благодарен)</li>
                    <li>• Планирование завтрашних эмоциональных целей</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="emotional-games">
              <AccordionTrigger>Игры для развития эмоционального интеллекта</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">'Эмоциональное лото':</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    Создайте карточки с изображениями эмоций. Ребёнок должен найти пару и рассказать, когда он испытывал эту эмоцию.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">'Театр эмоций':</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    Разыгрывайте сценки с разными эмоциональными ситуациями. Обсуждайте, что чувствуют персонажи.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">'Дневник настроения':</h5>
                  <p className="text-sm text-muted-foreground">
                    Ведите вместе дневник, где ребёнок рисует или записывает свои эмоции каждый день.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="crisis-situations">
              <AccordionTrigger>Что делать в кризисных ситуациях</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 text-orange-800 dark:text-orange-200">
                    Когда нужна профессиональная помощь:
                  </h5>
                  <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-300">
                    <li>• Агрессивное поведение усиливается и становится неконтролируемым</li>
                    <li>• Ребёнок наносит вред себе или другим</li>
                    <li>• Длительная депрессия, апатия, отказ от активности</li>
                    <li>• Проблемы сохраняются более 2-3 месяцев без улучшений</li>
                    <li>• Серьёзные нарушения сна, аппетита, поведения</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                    Экстренные техники успокоения:
                  </h5>
                  <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li>• 'Квадратное дыхание': вдох 4 счёта, задержка 4, выдох 4, пауза 4</li>
                    <li>• 'Заземление': назвать 5 предметов вокруг, 4 звука, 3 запаха, 2 ощущения, 1 вкус</li>
                    <li>• Объятия на 20 секунд (если ребёнок не против)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ParentingProblemsSection;