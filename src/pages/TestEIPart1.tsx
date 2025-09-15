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
    "Ребенок вежлив в общении с вами и другими взрослыми?",
    "Терпим к вашим замечаниям и замечаниям других взрослых?", 
    "Принимает участие в домашних делах (в делах детского сада)?",
    "Помогает своим друзьям?",
    "Поддерживает друзей, у которых случаются неприятности?",
    "Признает свою вину, если совершил нежелательные поступки?",
    "Обращает внимание на эмоциональное состояние окружающих?",
    "Выполняет поручения взрослых?",
    "Точно передает информацию, полученную от других людей?",
    "Выражает собственное мнение о поступках других людей?"
  ];

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: value
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
              Определение уровня эмоционального интеллекта
            </h1>
            <p className="text-muted-foreground mb-6">
              Часть 1 из 2: Поведенческие вопросы
            </p>
            <Progress value={progress} className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Прогресс: {Object.keys(answers).length} из {questions.length} вопросов
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Вопрос</th>
                      <th className="text-center p-3 font-medium">Ответ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((question, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3">{question}</td>
                        <td colSpan={2} className="p-3">
                          <RadioGroup 
                            value={answers[index] || ""} 
                            onValueChange={(value) => handleAnswerChange(index, value)}
                            className="flex justify-center gap-8"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="yes" 
                                id={`q${index}-yes`}
                              />
                              <Label htmlFor={`q${index}-yes`}>
                                Да
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="no" 
                                id={`q${index}-no`}
                              />
                              <Label htmlFor={`q${index}-no`}>
                                Нет
                              </Label>
                            </div>
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