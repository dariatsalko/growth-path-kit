import { useState } from "react";

import { Filter } from "lucide-react";

import artemPhoto from "@/assets/Artem.jpg";
import dariaPhoto from "@/assets/Daria.jpeg";
import katiaPhoto from "@/assets/Katia.png";
import psychologist1 from "@/assets/psychologist-1.jpg";
import psychologist2 from "@/assets/psychologist-2.jpg";
import psychologist3 from "@/assets/psychologist-3.jpg";
import PsychologistCard from "@/components/PsychologistCard/PsychologistCard";
import PsychologistDetailsModal from "@/components/PsychologistDetailsModal/PsychologistDetailsModal";
import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import { useToast } from "@/hooks/use-toast";
interface PsychologistsSectionProps {
  onSelectPsychologist?: (psychologist: string) => void;
}

const PsychologistsSection = ({
  onSelectPsychologist,
}: PsychologistsSectionProps) => {
  const { toast } = useToast();
  const [selectedPsychologist, setSelectedPsychologist] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };
  const handleSelectPsychologist = (psychologist: any) => {
    onSelectPsychologist?.(psychologist.name);
    openContact();
    toast({
      title: "Связь установлена!",
      description: `Вы выбрали ${psychologist.name}. Заполните форму для связи.`,
    });
  };
  const handleViewDetails = (psychologist: any) => {
    setSelectedPsychologist(psychologist);
    setIsDetailsModalOpen(true);
  };
  const psychologists = [
    {
      name: "Дарья Цалко",
      photo: dariaPhoto,
      specialization: "Практикующий психолог КПТ",
      approach: [
        "КПТ",
        "Профориентация и карьерные консультации",
        "Тренинги общения и решения конфликтов",
      ],
      experience:
        "Волонтёрский опыт сказкотерапии, обучение на клиническом курсе КПТ",
      education: "Ягеллонский университет в Кракове",
      price: "Консультация",
      available: true,
      description:
        "Я верю, что каждый человек может найти в себе силы для перемен. Иногда важно, чтобы рядом оказался кто-то, кто поможет увидеть эти силы и шаг за шагом начать путь к себе.",
      detailedDescription:
        "Я верю, что каждый человек может найти в себе силы для перемен. Иногда важно, чтобы рядом оказался кто-то, кто поможет увидеть эти силы и шаг за шагом начать путь к себе.\n\nЯ работаю в методе когнитивно-поведенческой терапии (КПТ), опираясь на научно доказанные подходы. В консультациях для меня важны уважение, эмпатия и ощущение безопасности, чтобы вы могли говорить открыто и находить решения именно для вашей жизни.\n\nС чем я работаю:\n• тревога, навязчивые мысли, панические атаки\n• низкая самооценка и самокритика\n• сложности в отношениях, конфликты, повторяющиеся сценарии\n• прокрастинация, перфекционизм, эмоциональное выгорание\n• депрессивные состояния и потеря интереса к жизни\n• проблемы, связанные с эмиграцией: адаптация, тоска по дому, кризис идентичности\n\nОбразование и опыт:\n• Неделимая магистратура, Прикладная психология, Ягеллонский Университет (Краков) (в процессе написания магистерской)\n• CBT CENTER- Minsk. Долгосрочный (3 года) клинический курс «Теория и практика когнитивно- поведенческой терапии» (в процессе обучения)\n• волонтёрский опыт в некоммерческих организациях (сказкотерапия; работа с командами волонтеров, тренинги, профилактика выгорания)\n\nРаботаю только онлайн.",
      pricing: {
        individual: "Личная консультация – 70р. (50 мин)",
        group: "Групповой тренинг – в соответствии с расчетом",
      },
    },
    {
      name: "Артём Иванов",
      photo: artemPhoto,
      specialization:
        "Квалифицированный психолог когнитивно-поведенческом подходе и семейной системной терапии",
      approach: [
        "КПТ",
        "Семейная терапия",
        "Кризисная психология",
        "ЭИ",
        "Mindfulness",
      ],
      experience:
        "Индивидуальное консультирование, семейная терапия, групповые тренинги, мотивационный коучинг",
      education:
        "АНО ДПО «Институт прикладной психологии в социальной сфере», Москва",
      available: true,
      description:
        "Я убежден, что каждый человек обладает внутренними ресурсами для преодоления трудностей и достижения гармонии. Моя задача - помочь вам раскрыть эти ресурсы, научить необходимым навыкам и стратегиям, чтобы вы могли самостоятельно справляться с кризисами и найти свой уникальный путь к счастливой жизни.",
      detailedDescription:
        "Опираясь на методы доказательной психологии мы будем работать как с восприятием, мыслями и эмоциями, так и прорабатывать сферу отношений с собой и окружающими и таким образом формируют вашу жизнь. Я помогу вам справиться с депрессией и прокрастинацией, избавится от тревоги и обучу техникам эмоциональной регуляции. Помогу обрести уверенность в своих силах и начать ценить свои успехи, но и справляться с неудачами.\n\nС чем я работаю:\n• кризисы идентичности и поиск себя\n• жизненные изменения: утрата, развод, смена профессии\n• тревога, депрессия, панические атаки, самокритика\n• сложности в отношениях и эмоциональные качели\n• развитие эмоционального интеллекта и устойчивости\n\nЯ убежден, что каждый человек обладает внутренними ресурсами для преодоления трудностей и достижения гармонии. Моя задача - помочь вам раскрыть эти ресурсы, научить необходимым навыкам и стратегиям, чтобы вы могли самостоятельно справляться с кризисами и найти свой уникальный путь к счастливой жизни.",
      pricing: {
        individual: "Личная консультация – 90р. (50 мин)",
        family: "Семейная консультация – 130р. (70 мин)",
        group: "Групповой тренинг – в соответствии с расчетом",
      },
    },
    {
      name: "Екатерина Иванова",
      photo: katiaPhoto,
      specialization: "Практикующий психолог КПТ",
      approach: ["Индивидуальное консультирование", "Коучинг"],
      experience:
        "КПТ+ базовые техники консультирования и коучинга, клинический курс КПТ",
      education: "БГПУ им. М. Танка",
      price: "Консультация",
      available: true,
      description:
        "Моё кредо – не просто поддержать, а дать эффективные инструменты для изменения и самопомощи.",
      detailedDescription:
        "Моё кредо – не просто поддержать, а дать реальные инструменты для перемен. Для меня важно, чтобы консультации приносили результат, поэтому я опираюсь на когнитивно-поведенческую терапию – структурный и доказательный подход, помогающий изменять привычные сценарии и находить новые пути.\n\nЯ стараюсь создать доверительную атмосферу, основанную на уважении, принятии и честности. Для меня важно, чтобы у вас было пространство, где можно открыто говорить о трудностях и постепенно находить своё равновесие.\n\nС чем я работаю:\n• тревога, панические атаки, фобии, навязчивые мысли\n• депрессия, потеря сил и радости, чувство вины и стыда\n• низкая самооценка, неуверенность в себе, трудности с идентичностью\n• перфекционизм, прокрастинация, трудности с дисциплиной\n• проблемы в отношениях, повторяющиеся сценарии, конфликты\n\nОбразование и опыт:\n• Белорусский государственный педагогический университет имени М. Танка, факультет психологии\n• обучающая программа «КПТ+: базовые техники консультирования и коучинга», CBT Center Minsk\n• клинический курс «Теория и практика когнитивно-поведенческой терапии» (обучение в процессе), CBT Center Minsk",
    },
  ];
  const filterTags = [
    "Все специалисты",
    "Тревога и депрессия",
    "Семейная терапия",
    "Подростковая психология",
    "Травма и ПТСР",
    "Отношения",
    "Кризисные состояния",
  ];
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Психологи центра
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Каждый специалист имеет высшее психологичесĸое образование,
            регулярно повышает ĸвалифиĸацию и прошел курс личной терапии и
            проходит супервизии
          </p>

          {/* Filter Tags */}
        </div>

        {/* Psychologists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 max-w-6xl mx-auto">
          {psychologists.map((psychologist, index) => (
            <PsychologistCard
              key={index}
              {...psychologist}
              onSelect={() => handleSelectPsychologist(psychologist)}
              onViewDetails={() => handleViewDetails(psychologist)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Не знаете, какого специалиста выбрать?
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            onClick={openContact}
          >
            Связаться для записи
          </Button>
        </div>

        {/* Details Modal */}
        <PsychologistDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          psychologist={selectedPsychologist}
        />
      </div>
    </section>
  );
};
export default PsychologistsSection;
