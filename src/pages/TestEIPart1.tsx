import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/ui/header";
import { ArrowRight } from "lucide-react";

const TestEIPart1 = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const questions = [
    {
      id: "q1",
      text: "Как часто ваш ребёнок может назвать свою эмоцию словами?",
      options: [
        { value: "never", label: "Никогда" },
        { value: "rarely", label: "Редко" },
        { value: "sometimes", label: "Иногда" },
        { value: "often", label: "Часто" },
        { value: "always", label: "Всегда" }
      ]
    },
    {
      id: "q2", 
      text: "Как ребёнок реагирует на конфликты со сверстниками?",
      options: [
        { value: "aggressive", label: "Агрессивно" },
        { value: "withdraws", label: "Замыкается" },
        { value: "seeks_help", label: "Обращается за помощью" },
        { value: "tries_resolve", label: "Пытается разрешить самостоятельно" },
        { value: "calm_discussion", label: "Спокойно обсуждает" }
      ]
    },
    {
      id: "q3",
      text: "Умеет ли ваш ребёнок успокаиваться после расстройства?",
      options: [
        { value: "no_never", label: "Нет, никогда" },
        { value: "with_help", label: "Только с помощью взрослых" },
        { value: "sometimes_alone", label: "Иногда самостоятельно" },
        { value: "usually_alone", label: "Обычно самостоятельно" },
        { value: "always_quickly", label: "Всегда быстро успокаивается" }
      ]
    },
    {
      id: "q4",
      text: "Как ребёнок проявляет сочувствие к другим?",
      options: [
        { value: "no_empathy", label: "Не проявляет сочувствие" },
        { value: "minimal", label: "Очень редко" },
        { value: "when_reminded", label: "Когда напоминаю" },
        { value: "often_naturally", label: "Часто проявляет сам" },
        { value: "very_empathetic", label: "Очень сочувствующий" }
      ]
    },
    {
      id: "q5",
      text: "Как ребёнок справляется со стрессом (экзамены, новые ситуации)?",
      options: [
        { value: "very_poorly", label: "Очень плохо" },
        { value: "with_difficulty", label: "С трудом" },
        { value: "moderately", label: "Средне" },
        { value: "well", label: "Хорошо" },
        { value: "excellently", label: "Отлично" }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const isComplete = Object.keys(answers).length === questions.length;
  const progress = (Object.keys(answers).length / questions.length) * 50; // 50% for part 1

  const handleNext = () => {
    localStorage.setItem('ei_test_part1', JSON.stringify(answers));
    window.location.href = '/test-ei-part2';
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Тест ЭИ - Часть 1 | Центр ИНТЕНЦИЯ</title>
        <meta name="description" content="Диагностика эмоционального интеллекта ребёнка - часть 1 из 2" />
      </Helmet>
      
      <Header />
      
      <div className="container px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Диагностика эмоционального интеллекта
            </h1>
            <p className="text-muted-foreground mb-6">
              Часть 1 из 2: Базовые навыки
            </p>
            <Progress value={progress} className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Прогресс: {Object.keys(answers).length} из {questions.length} вопросов
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <Card key={question.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {index + 1}. {question.text}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={answers[question.id] || ""} 
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                  >
                    {question.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                        <Label htmlFor={`${question.id}-${option.value}`}>
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              onClick={handleNext}
              disabled={!isComplete}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Перейти к части 2 <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestEIPart1;