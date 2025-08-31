import { useState } from "react";
import PsychologistCard from "@/components/PsychologistCard";
import PsychologistDetailsModal from "@/components/PsychologistDetailsModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import psychologist1 from "@/assets/psychologist-1.jpg";
import psychologist2 from "@/assets/psychologist-2.jpg";
import psychologist3 from "@/assets/psychologist-3.jpg";
interface PsychologistsSectionProps {
  onSelectPsychologist?: (psychologist: string) => void;
}

const PsychologistsSection = ({ onSelectPsychologist }: PsychologistsSectionProps) => {
  const {
    toast
  } = useToast();
  const [selectedPsychologist, setSelectedPsychologist] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const openBooking = (psychologistName?: string) => {
    if (psychologistName) {
      window.dispatchEvent(new CustomEvent('openBookingWithPsychologist', { detail: { name: psychologistName } }));
    } else {
      window.dispatchEvent(new CustomEvent('openBookingModal'));
    }
  };
  const handleSelectPsychologist = (psychologist: any) => {
    onSelectPsychologist?.(psychologist.name);
    openBooking(psychologist.name);
    toast({
      title: "Психолог выбран!",
      description: `Вы выбрали ${psychologist.name}. Заполните форму записи.`
    });
  };
  const handleViewDetails = (psychologist: any) => {
    setSelectedPsychologist(psychologist);
    setIsDetailsModalOpen(true);
  };
  const psychologists = [{
    name: "Дарья Цалко",
    photo: psychologist1,
    specialization: "Практикующий психолог КПТ",
    approach: ["КПТ", "Тревога", "Навязчивые мысли", "Отношения"],
    experience: "Магистратура по психологии, обучение КПТ",
    price: "Консультация",
    available: true,
    description: "Практикующий психолог в методе когнитивно-поведенческой терапии. Помогаю справляться с тревогой, навязчивыми мыслями, трудностями в отношениях и неуверенностью в себе. Создаю тёплое и безопасное пространство для перемен. Работаю онлайн."
  }, {
    name: "Артём Иванов",
    photo: psychologist2,
    specialization: "Психолог КПТ и семейной системной терапии",
    approach: ["КПТ", "Семейная терапия", "Кризисы", "Эмоциональный интеллект"],
    experience: "Консультативная психология, семейная терапия",
    price: "Консультация",
    available: true,
    description: "Квалифицированный психолог, работаю в методе когнитивно-поведенческой и семейной системной терапии. Помогаю пройти через кризисы, справиться с тревогой и наладить отношения. Моя цель – создать для вас поддержку и вернуть ощущение внутренней опоры."
  }, {
    name: "Екатерина Иванова",
    photo: psychologist3,
    specialization: "Психолог КПТ",
    approach: ["КПТ", "Тревога", "Депрессия", "Самооценка", "Перфекционизм"],
    experience: "Факультет психологии, обучение КПТ",
    price: "Консультация",
    available: true,
    description: "Психолог в методе когнитивно-поведенческой терапии. Помогаю справляться с тревогой и депрессией, развивать уверенность в себе и строить гармоничные отношения. Вместе мы шаг за шагом найдём решения для ваших трудностей."
  }];
  const filterTags = ["Все специалисты", "Тревога и депрессия", "Семейная терапия", "Подростковая психология", "Травма и ПТСР", "Отношения", "Кризисные состояния"];
  return <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Психологи центра
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Каждый специалист имеет высшее психологическое образование, сертификации 
            и регулярно повышает квалификацию
          </p>
          
          {/* Filter Tags */}
          
          
          
        </div>

        {/* Psychologists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {psychologists.map((psychologist, index) => <PsychologistCard key={index} {...psychologist} onSelect={() => handleSelectPsychologist(psychologist)} onViewDetails={() => handleViewDetails(psychologist)} />)}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Не знаете, какого специалиста выбрать?
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" onClick={() => openBooking()}>
            Подобрать психолога автоматически
          </Button>
        </div>

        {/* Details Modal */}
        <PsychologistDetailsModal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} psychologist={selectedPsychologist} />
      </div>
    </section>;
};
export default PsychologistsSection;