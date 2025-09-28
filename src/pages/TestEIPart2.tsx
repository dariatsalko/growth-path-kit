import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import Header from "@/components/ui/header/header";
import { Label } from "@/components/ui/label/label";
import { Progress } from "@/components/ui/progress/progress";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group/radio-group";

const TestEIPart2 = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [part1Answers, setPart1Answers] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem("ei_test_part1");
    if (stored) {
      setPart1Answers(JSON.parse(stored));
    }
  }, []);

  const emotionalTraits = [
    "Сверхчувствительность",
    "Возбуждаемость",
    "Капризность",
    "Боязливость",
    "Плаксивость",
    "Злобность",
    "Веселость",
    "Завистливость",
    "Ревность",
    "Обидчивость",
    "Упрямство",
    "Жесткость",
    "Ласковость",
    "Сочувствие",
    "Самомнение",
    "Агрессивность",
    "Нетерпеливость",
  ];

  const handleAnswerChange = (traitIndex: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [traitIndex]: value,
    }));
  };

  const isComplete = Object.keys(answers).length === emotionalTraits.length;
  const progress =
    50 + (Object.keys(answers).length / emotionalTraits.length) * 50; // 50% + part 2 progress

  const calculateResults = () => {
    const allAnswers = { ...part1Answers, ...answers };

    // Simple scoring system - you can make this more sophisticated
    // Calculate part 1 score (да/нет questions)
    const part1Scores = Object.values(part1Answers).map((answer) =>
      answer === "yes" ? 1 : 0
    );
    const part1Total = part1Scores.reduce((sum, score) => sum + score, 0);

    // Calculate part 2 score (intensity ratings)
    const part2Scores = Object.values(answers).map(
      (answer) => parseInt(answer) || 0
    );
    const part2Total = part2Scores.reduce((sum, score) => sum + score, 0);

    // Total assessment
    const behavioralScore = (part1Total / 10) * 100; // Percentage of positive behaviors
    const intensityScore = part2Total; // Sum of all intensity ratings
    const maxIntensityScore = emotionalTraits.length * 4; // Maximum possible intensity score
    if (behavioralScore >= 80 && intensityScore <= maxIntensityScore * 0.3) {
      return {
        level: "Высокий уровень ЭИ",
        description:
          "У вашего ребёнка хорошо развиты социальные навыки и эмоциональная регуляция. Большинство поведенческих показателей положительные, а негативные проявления минимальны.",
        recommendations:
          "Продолжайте поддерживать развитие через позитивное подкрепление и обсуждение эмоций.",
      };
    } else if (
      behavioralScore >= 60 &&
      intensityScore <= maxIntensityScore * 0.5
    ) {
      return {
        level: "Средний уровень ЭИ",
        description:
          "У ребёнка есть базовые навыки, но некоторые эмоциональные проявления требуют внимания.",
        recommendations:
          "Рекомендуем занятия по развитию эмоционального интеллекта для укрепления навыков.",
      };
    } else {
      return {
        level: "Требуется развитие ЭИ",
        description:
          "Ребёнок испытывает трудности в эмоциональной регуляции и социальном взаимодействии.",
        recommendations:
          "Настоятельно рекомендуем комплексную программу развития ЭИ и консультацию специалиста.",
      };
    }
  };

  const handleFinish = () => {
    localStorage.setItem("ei_test_part2", JSON.stringify(answers));
    setShowResults(true);
  };

  if (showResults) {
    const results = calculateResults();

    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Результаты теста ЭИ | Центр ИНТЕНЦИЯ</title>
        </Helmet>

        <div className="container px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Результаты диагностики
            </h1>

            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle className="text-center">
                  Уровень ЭИ: {results.level}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{results.description}</p>
                <p className="font-semibold">Рекомендации:</p>
                <p>{results.recommendations}</p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button
                size="lg"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("openSchoolBookingModal")
                  )
                }
                className="bg-accent hover:bg-accent/90 text-accent-foreground mr-4"
              >
                Записаться на занятия
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "/school")}
              >
                Узнать больше о программах
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Тест ЭИ - Часть 2 | Центр ИНТЕНЦИЯ</title>
        <meta
          name="description"
          content="Диагностика эмоционального интеллекта ребёнка - часть 2 из 2"
        />
      </Helmet>

      <div className="container px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Оценочная шкала эмоциональных проявлений
            </h1>
            <p className="text-muted-foreground mb-6">
              Часть 2 из 2: Интенсивность эмоциональных проявлений
            </p>
            <Progress value={progress} className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Прогресс: {10 + Object.keys(answers).length} из{" "}
              {10 + emotionalTraits.length} пунктов
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              0 - нет, 1 - немного, 2 - средне, 3 - много, 4 - очень много
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Оцените интенсивность проявлений
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">
                        Чувственное проявление
                      </th>
                      <th className="text-center p-3 font-medium">
                        Интенсивность (0-4)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {emotionalTraits.map((trait, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 font-medium">{trait}</td>
                        <td colSpan={5} className="p-3">
                          <RadioGroup
                            value={answers[index] || ""}
                            onValueChange={(selectedValue) =>
                              handleAnswerChange(index, selectedValue)
                            }
                            className="flex justify-center gap-6"
                          >
                            {[0, 1, 2, 3, 4].map((value) => (
                              <div
                                key={value}
                                className="flex flex-col items-center space-y-1"
                              >
                                <Label
                                  htmlFor={`trait${index}-${value}`}
                                  className="text-sm font-medium"
                                >
                                  {value}
                                </Label>
                                <RadioGroupItem
                                  value={value.toString()}
                                  id={`trait${index}-${value}`}
                                />
                              </div>
                            ))}
                          </RadioGroup>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              onClick={handleFinish}
              disabled={!isComplete}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Получить результаты <CheckCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestEIPart2;
