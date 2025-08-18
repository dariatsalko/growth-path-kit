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
const PsychologistsSection = () => {
  const {
    toast
  } = useToast();
  const [selectedPsychologist, setSelectedPsychologist] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const scrollToBooking = () => {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleSelectPsychologist = (psychologist: any) => {
    toast({
      title: "Психолог выбран!",
      description: `Вы выбрали ${psychologist.name}. Заполните форму записи ниже.`
    });
    scrollToBooking();
  };
  const handleViewDetails = (psychologist: any) => {
    setSelectedPsychologist(psychologist);
    setIsDetailsModalOpen(true);
  };
  const psychologists = [{
    name: "Елена Михайловна",
    photo: psychologist1,
    specialization: "Клинический психолог, семейный терапевт",
    approach: ["КПТ", "Системная терапия", "Гештальт"],
    experience: "12 лет опыта",
    price: "4 500 ₽",
    available: true,
    description: "Специализируется на работе с тревожными расстройствами, семейными кризисами и детско-родительскими отношениями. Использует научно обоснованные методы."
  }, {
    name: "Дмитрий Александрович",
    photo: psychologist2,
    specialization: "Психолог-консультант, trauma-терапевт",
    approach: ["ЭМДР", "КПТ", "Травма-терапия"],
    experience: "8 лет опыта",
    price: "4 000 ₽",
    available: true,
    description: "Работает с ПТСР, депрессией, последствиями травм. Сертифицированный специалист EMDR. Поможет восстановить психологическое равновесие."
  }, {
    name: "Анна Сергеевна",
    photo: psychologist3,
    specialization: "Подростковый психолог, коуч по ЭИ",
    approach: ["Подростковая психология", "ЭИ", "Майндфулнес"],
    experience: "6 лет опыта",
    price: "3 500 ₽",
    available: false,
    description: "Специалист по работе с подростками 12-18 лет. Развитие эмоционального интеллекта, преодоление кризисов переходного возраста."
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
          
          
          <Button variant="outline" className="mb-8">
            <Filter className="w-4 h-4 mr-2" />
            Расширенный фильтр
          </Button>
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
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" onClick={scrollToBooking}>
            Подобрать психолога автоматически
          </Button>
        </div>

        {/* Details Modal */}
        <PsychologistDetailsModal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} psychologist={selectedPsychologist} />
      </div>
    </section>;
};
export default PsychologistsSection;