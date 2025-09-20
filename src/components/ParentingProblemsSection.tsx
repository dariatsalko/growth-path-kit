import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, Heart, Users, Lightbulb, Brain, Shield } from "lucide-react";

const ParentingProblemsSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      category: "Истерики и капризы",
      problem: "Ребёнок часто устраивает истерики, не может справиться с эмоциями",
      solution: "Научите ребёнка дыхательным техникам. Во время истерики сохраняйте спокойствие, не игнорируйте, но и не идите на поводу. Помогите назвать эмоцию: 'Ты сейчас злишься, потому что...'",
      tips: [
        "Создайте 'уголок спокойствия' дома",
        "Используйте технику '5-4-3-2-1' (5 вещей, которые видишь, 4 - которые слышишь и т.д.)",
        "Вводите 'стоп-слово' для паузы перед взрывом"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      category: "Проблемы в общении",
      problem: "Ребёнок замкнут, избегает общения со сверстниками или конфликтует",
      solution: "Моделируйте социальные ситуации дома. Играйте в ролевые игры, обсуждайте чувства персонажей в книгах и фильмах. Не принуждайте к общению, но создавайте возможности.",
      tips: [
        "Читайте книги о дружбе и обсуждайте поступки героев",
        "Приглашайте детей в гости по одному, а не большими группами",
        "Обучайте фразам для знакомства: 'Можно с тобой поиграть?'"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      category: "Тревожность и страхи",
      problem: "Ребёнок слишком переживает, боится новых ситуаций или проявляет излишнюю тревожность",
      solution: "Валидируйте чувства ребёнка: 'Понимаю, ты волнуешься'. Создавайте предсказуемость через ритуалы. Обучайте техникам расслабления и позитивному мышлению.",
      tips: [
        "Создайте 'коробку храбрости' с предметами, придающими уверенность",
        "Практикуйте глубокое дыхание 'дыхание бабочки'",
        "Используйте визуализацию успешных ситуаций"
      ]
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      category: "Агрессивность",
      problem: "Ребёнок проявляет агрессию к другим детям, родителям или портит вещи",
      solution: "Агрессия - это выражение других эмоций. Помогите найти первопричину. Обучайте альтернативным способам выражения злости: физическая активность, рисование, разговор.",
      tips: [
        "Создайте 'банку злости' - куда можно кричать или класть записки",
        "Научите считать до 10 перед реакцией",
        "Используйте спорт для выплеска энергии"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      category: "Низкая самооценка",
      problem: "Ребёнок не верит в себя, боится ошибок, говорит 'я не умею', 'у меня не получится'",
      solution: "Фокусируйтесь на процессе, а не на результате. Хвалите за усилия: 'Ты так старался!'. Избегайте сравнений с другими детьми. Создавайте ситуации успеха.",
      tips: [
        "Ведите 'дневник достижений' вместе с ребёнком",
        "Используйте фразы: 'У тебя пока не получается' вместо 'не умеешь'",
        "Разделяйте большие задачи на маленькие шаги"
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      category: "Непослушание",
      problem: "Ребёнок не слушается, игнорирует просьбы, устанавливает свои правила",
      solution: "Устанавливайте четкие границы с объяснением причин. Предлагайте выбор в рамках допустимого. Будьте последовательны в требованиях и их выполнении.",
      tips: [
        "Создайте семейные правила вместе с ребёнком",
        "Используйте таймеры для выполнения задач",
        "Вводите систему позитивного подкрепления, а не только наказаний"
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