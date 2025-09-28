import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import { Card, CardContent } from "@/components/ui/card/card";

const MessageSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const messages = [
    {
      text: "Ваш путь к изменению начинается с ясного намерения — и поддержкой профессионалов, которые вместе с вами пройдут этот путь.",
      author: "Команда центра"
    },
    {
      text: "Мы не обещаем мгновенных чудес, но гарантируем систематическую работу над тем, что действительно важно для вас.",
      author: "Команда центра"
    },
    {
      text: "Мы ценим вашу уникальность и совместно формируем план действий, учитывающий ваши ритмы и ресурсы.",
      author: "Команда центра"
    },
    {
      text: "В нашей работе важны не только профессиональные навыки, но и человеческое участие, понимание и уважение к вашему пути.",
      author: "Команда центра"
    },
    {
      text: "Каждая встреча — это шаг к более глубокому пониманию себя и развитию навыков, которые помогут вам в жизни.",
      author: "Команда центра"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % messages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Что важно для нас как психологов
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-background border-border min-h-[200px] flex items-center">
              <CardContent className="p-8 text-center">
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-4">
                  "{messages[currentSlide].text}"
                </blockquote>
                <cite className="text-sm text-muted-foreground font-medium">
                  — {messages[currentSlide].author}
                </cite>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="h-10 w-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {messages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="h-10 w-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;