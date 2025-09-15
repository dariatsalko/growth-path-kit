import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/ui/header";
import { CheckCircle } from "lucide-react";

const TestEIPart2 = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [part1Answers, setPart1Answers] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem('ei_test_part1');
    if (stored) {
      setPart1Answers(JSON.parse(stored));
    }
  }, []);
  
  const questions = [
    {
      id: "q6",
      text: "Как ребёнок ведёт себя в новой компании детей?",
      options: [
        { value: "very_shy", label: "Очень застенчиво, прячется" },
        { value: "observes", label: "Наблюдает издалека" },
        { value: "needs_encouragement", label: "Нуждается в поддержке" },
        { value: "joins_gradually", label: "Постепенно присоединяется" },
        { value: "confident", label: "Уверенно знакомится" }
      ]
    },
    {
      id: "q7",
      text: "Как часто ребёнок помогает другим детям?",
      options: [
        { value: "never", label: "Никогда" },
        { value: "when_asked", label: "Только когда просят" },
        { value: "sometimes", label: "Иногда сам" },
        { value: "often", label: "Часто предлагает помощь" },
        { value: "always_helpful", label: "Всегда готов помочь" }
      ]
    },
    {
      id: "q8",
      text: "Как ребёнок реагирует на критику или замечания?",
      options: [
        { value: "very_defensive", label: "Очень болезненно, защищается" },
        { value: "upset", label: "Расстраивается, плачет" },
        { value: "listens_grudgingly", label: "Слушает неохотно" },
        { value: "accepts", label: "Принимает спокойно" },
        { value: "learns", label: "Использует для улучшения" }
      ]
    },
    {
      id: "q9",
      text: "Умеет ли ребёнок радоваться успехам других?",
      options: [
        { value: "jealous", label: "Завидует, расстраивается" },
        { value: "indifferent", label: "Равнодушен" },
        { value: "sometimes_happy", label: "Иногда радуется" },
        { value: "usually_supportive", label: "Обычно поддерживает" },
        { value: "genuinely_happy", label: "Искренне радуется за других" }
      ]
    },
    {
      id: "q10",
      text: "Как ребёнок выражает благодарность?",
      options: [
        { value: "rarely", label: "Редко говорит спасибо" },
        { value: "when_reminded", label: "Когда напоминают" },
        { value: "sometimes_remembers", label: "Иногда вспоминает сам" },
        { value: "often_thanks", label: "Часто благодарит" },
        { value: "very_grateful", label: "Очень благодарный ребёнок" }
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
  const progress = 50 + (Object.keys(answers).length / questions.length) * 50; // 50% + part 2 progress

  const calculateResults = () => {
    const allAnswers = { ...part1Answers, ...answers };
    
    // Simple scoring system - you can make this more sophisticated
    const scores = Object.values(allAnswers).map(answer => {
      switch(answer) {
        case 'never':
        case 'no_never':
        case 'very_poorly':
        case 'aggressive':
        case 'no_empathy':
        case 'very_shy':
        case 'very_defensive':
        case 'jealous':
        case 'rarely':
          return 1;
        case 'rarely':
        case 'with_help':
        case 'withdraws':
        case 'minimal':
        case 'with_difficulty':
        case 'when_asked':
        case 'observes':
        case 'upset':
        case 'indifferent':
        case 'when_reminded':
          return 2;
        case 'sometimes':
        case 'sometimes_alone':
        case 'seeks_help':
        case 'when_reminded':
        case 'moderately':
        case 'needs_encouragement':
        case 'listens_grudgingly':
        case 'sometimes_happy':
        case 'sometimes_remembers':
          return 3;
        case 'often':
        case 'usually_alone':
        case 'tries_resolve':
        case 'often_naturally':
        case 'well':
        case 'joins_gradually':
        case 'accepts':
        case 'usually_supportive':
        case 'often_thanks':
          return 4;
        case 'always':
        case 'always_quickly':
        case 'calm_discussion':
        case 'very_empathetic':
        case 'excellently':
        case 'confident':
        case 'always_helpful':
        case 'learns':
        case 'genuinely_happy':
        case 'very_grateful':
          return 5;
        default:
          return 3;
      }
    });

    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 5 + 5 * 5; // 10 questions total
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 80) {
      return {
        level: "Высокий",
        description: "У вашего ребёнка отлично развит эмоциональный интеллект! Он умеет управлять эмоциями и хорошо понимает других.",
        recommendations: "Продолжайте поддерживать развитие через чтение книг об эмоциях и обсуждение чувств в семье."
      };
    } else if (percentage >= 60) {
      return {
        level: "Средний",
        description: "У ребёнка есть базовые навыки эмоционального интеллекта, но есть области для улучшения.",
        recommendations: "Рекомендуем занятия в нашей школе ЭИ для развития навыков управления эмоциями и эмпатии."
      };
    } else {
      return {
        level: "Требует внимания",
        description: "Ребёнку нужна поддержка в развитии эмоциональных навыков.",
        recommendations: "Настоятельно рекомендуем программу развития ЭИ и консультацию с нашим специалистом."
      };
    }
  };

  const handleFinish = () => {
    localStorage.setItem('ei_test_part2', JSON.stringify(answers));
    setShowResults(true);
  };

  if (showResults) {
    const results = calculateResults();
    
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Результаты теста ЭИ | Центр ИНТЕНЦИЯ</title>
        </Helmet>
        
        <Header />
        
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
                onClick={() => window.dispatchEvent(new CustomEvent("openSchoolBookingModal"))}
                className="bg-accent hover:bg-accent/90 text-accent-foreground mr-4"
              >
                Записаться на занятия
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/school'}
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
        <meta name="description" content="Диагностика эмоционального интеллекта ребёнка - часть 2 из 2" />
      </Helmet>
      
      <Header />
      
      <div className="container px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Диагностика эмоционального интеллекта
            </h1>
            <p className="text-muted-foreground mb-6">
              Часть 2 из 2: Социальные навыки
            </p>
            <Progress value={progress} className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Прогресс: {5 + Object.keys(answers).length} из 10 вопросов
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <Card key={question.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {index + 6}. {question.text}
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