import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GraduationCap, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SchoolBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchoolBookingModal = ({ isOpen, onClose }: SchoolBookingModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    parentName: "",
    phone: "",
    email: "",
    format: "",
    psychologist: "",
    timePreference: "",
    childAge: "",
    additionalInfo: "",
    agreements: {
      privacy: false,
      terms: false,
      whatsapp: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.format) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

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
      description: "Мы свяжемся с вами в течение 2 часов для подтверждения записи в школу эмоционального интеллекта",
    });

    onClose();
    console.log("School booking form submitted:", formData);
  };

  const timeSlots = [
    "Утром (9:00-12:00)",
    "Днём (12:00-15:00)", 
    "Вечером (15:00-18:00)",
    "После школы (16:00-19:00)",
    "Выходные"
  ];

  const ageGroups = [
    "6-8 лет",
    "9-12 лет", 
    "13-17 лет"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Запись в школу эмоционального интеллекта
          </DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами в течение 2 часов для подтверждения записи
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                placeholder="Имя ребёнка"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="parentName">Как к вам обращаться</Label>
              <Input
                id="parentName"
                placeholder="Имя родителя"
                value={formData.parentName}
                onChange={(e) => setFormData({...formData, parentName: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+375 (29) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
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

          {/* Child Age */}
          <div className="space-y-2">
            <Label htmlFor="childAge">Возраст ребёнка</Label>
            <Select value={formData.childAge} onValueChange={(value) => setFormData({...formData, childAge: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите возрастную группу" />
              </SelectTrigger>
              <SelectContent>
                {ageGroups.map((age, index) => (
                  <SelectItem key={index} value={age}>{age}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Дополнительная информация (необязательно)</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Расскажите об особенностях ребёнка, запросе или вопросах, которые хотели бы обсудить"
              className="min-h-[100px]"
              value={formData.additionalInfo}
              onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
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
                Согласен с обработкой персональных данных и <a href="/privacy" className="text-primary underline">политикой конфиденциальности</a> *
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
                Принимаю условия <a href="/terms" className="text-primary underline">договора оферты</a> *
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
      </DialogContent>
    </Dialog>
  );
};

export default SchoolBookingModal;