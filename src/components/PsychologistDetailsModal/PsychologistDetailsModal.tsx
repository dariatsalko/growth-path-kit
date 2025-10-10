import { Button } from "@/components/ui/button/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog/dialog";

interface PsychologistDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  psychologist: {
    name: string;
    photo: string;
    specialization: string;
    approach: string[];
    experience: string;
    price: string;
    description: string;
    detailedDescription?: string;
    pricing?: {
      individual: string;
      family: string;
      group: string;
    };
  } | null;
}

const PsychologistDetailsModal: React.FC<PsychologistDetailsModalProps> = ({
  isOpen,
  onClose,
  psychologist
}) => {
  if (!psychologist) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-6 mb-6">
            <img 
              src={psychologist.photo} 
              alt={`Фото психолога ${psychologist.name} - ${psychologist.specialization} в центре психологии Интенция Минск`}
              className="w-24 h-24 rounded-xl object-cover flex-shrink-0 shadow-lg"
            />
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold mb-3 text-foreground">{psychologist.name}</DialogTitle>
              <DialogDescription className="text-muted-foreground mb-3 text-base leading-relaxed">
                {psychologist.specialization}
              </DialogDescription>
              <div className="text-xl font-semibold text-accent">{psychologist.price}</div>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          
          <div className="bg-primary/5 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Методы работы:
            </h4>
            <div className="flex flex-wrap gap-2">
              {psychologist.approach.map((method, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium border border-primary/20"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              О специалисте:
            </h4>
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line bg-muted/10 rounded-lg p-4">
              {psychologist.detailedDescription || psychologist.description}
            </div>
          </div>

          {psychologist.pricing && (
            <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
              <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Стоимость консультации:
              </h4>
              <div className="space-y-2">
                {psychologist.pricing.individual && (
                  <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                    <span className="text-muted-foreground">{psychologist.pricing.individual.split(' – ')[0]}</span>
                    <span className="font-semibold text-accent">{psychologist.pricing.individual.split(' – ')[1]}</span>
                  </div>
                )}
                {psychologist.pricing.family && (
                  <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                    <span className="text-muted-foreground">{psychologist.pricing.family.split(' – ')[0]}</span>
                    <span className="font-semibold text-accent">{psychologist.pricing.family.split(' – ')[1]}</span>
                  </div>
                )}
                {psychologist.pricing.group && (
                  <div className="flex items-center justify-between p-2 bg-background/50 rounded">
                    <span className="text-muted-foreground">{psychologist.pricing.group.split(' – ')[0]}</span>
                    <span className="font-semibold text-accent">{psychologist.pricing.group.split(' – ')[1]}</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="pt-4 border-t">
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 text-lg"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('openContactModal'));
              }}
            >
              Связаться для записи
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PsychologistDetailsModal;