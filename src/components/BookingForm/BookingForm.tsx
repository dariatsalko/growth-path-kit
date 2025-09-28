import { useState } from "react";

import { Calendar, Clock, CreditCard,MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card/card";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select/select";
import { Textarea } from "@/components/ui/textarea/textarea";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    format: "",
    psychologist: "",
    timePreference: "",
    request: "",
    agreements: {
      privacy: false,
      terms: false,
      whatsapp: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем заполнение обязательных полей
    if (!formData.name || !formData.phone || !formData.format) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Проверяем согласия
    if (!formData.agreements.privacy || !formData.agreements.terms) {
      toast({
        title: "Ошибка", 
        description: "Необходимо согласие с политикой конфиденциальности и офертой",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 2 часов для подтверждения записи",
    });

    // Здесь будет логика отправки формы и перехода к оплате
    console.log("Form submitted:", formData);
  };

  const timeSlots = [
    "Утром (9:00-12:00)",
    "Днём (12:00-15:00)", 
    "Вечером (15:00-18:00)",
    "После работы (18:00-21:00)",
    "Выходные"
  ];

  const requestTypes = [
    "Тревога и панические атаки",
    "Депрессия и апатия",
    "Семейные отношения",
    "Детско-родительские отношения",
    "Подростковые проблемы",
    "Травма и ПТСР",
    "Профессиональное выгорание",
    "Кризисные состояния",
    "Личностный рост",
    "Другое"
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" id="booking-form">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Запись на консультацию
            </h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами в течение 2 часов для подтверждения записи
            </p>
          </div>

          <Card className="border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Данные для записи
              </CardTitle>
              <CardDescription>
                Все поля обязательны для заполнения
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Как к вам обращаться"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Format Selection */}
                <div className="space-y-3">
                  <Label>Формат консультации *</Label>
                  <RadioGroup 
                    value={formData.format} 
                    onValueChange={(value) => setFormData({...formData, format: value})}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-secondary/30 transition-colors">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="cursor-pointer flex-1">
                        <div className="font-medium">Онлайн</div>
                        <div className="text-sm text-muted-foreground">Видеосвязь</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-secondary/30 transition-colors">
                      <RadioGroupItem value="offline" id="offline" />
                      <Label htmlFor="offline" className="cursor-pointer flex-1">
                        <div className="font-medium">Очно</div>
                        <div className="text-sm text-muted-foreground">В центре</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Psychologist Selection */}
                <div className="space-y-2">
                  <Label htmlFor="psychologist">Психолог</Label>
                  <Select value={formData.psychologist} onValueChange={(value) => setFormData({...formData, psychologist: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите специалиста или подберём автоматически" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Подобрать автоматически</SelectItem>
                      <SelectItem value="elena">Елена Михайловна</SelectItem>
                      <SelectItem value="dmitry">Дмитрий Александрович</SelectItem>
                      <SelectItem value="anna">Анна Сергеевна</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Preference */}
                <div className="space-y-2">
                  <Label htmlFor="time">Удобное время</Label>
                  <Select value={formData.timePreference} onValueChange={(value) => setFormData({...formData, timePreference: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите удобное время" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot, index) => (
                        <SelectItem key={index} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Request Type */}
                <div className="space-y-2">
                  <Label htmlFor="request-type">С чем обращаетесь</Label>
                  <Select value={formData.request} onValueChange={(value) => setFormData({...formData, request: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тему для работы" />
                    </SelectTrigger>
                    <SelectContent>
                      {requestTypes.map((type, index) => (
                        <SelectItem key={index} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите кратко о своём запросе (необязательно)"
                    className="min-h-[100px]"
                  />
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="privacy"
                      checked={formData.agreements.privacy}
                      onCheckedChange={(checked) => 
                        setFormData({
                          ...formData, 
                          agreements: {...formData.agreements, privacy: checked as boolean}
                        })
                      }
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                      Согласен с обработкой персональных данных и <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">политикой конфиденциальности</a> *
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms"
                      checked={formData.agreements.terms}
                      onCheckedChange={(checked) => 
                        setFormData({
                          ...formData, 
                          agreements: {...formData.agreements, terms: checked as boolean}
                        })
                      }
                      required
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                      Принимаю условия <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline">договора оферты</a> *
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="whatsapp"
                      checked={formData.agreements.whatsapp}
                      onCheckedChange={(checked) => 
                        setFormData({
                          ...formData, 
                          agreements: {...formData.agreements, whatsapp: checked as boolean}
                        })
                      }
                    />
                    <Label htmlFor="whatsapp" className="text-sm leading-relaxed cursor-pointer">
                      Согласен на связь через WhatsApp/Telegram
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg"
                    size="lg"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Подтвердить и перейти к оплате
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    После оплаты вы получите подтверждение и календарь-приглашение
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;