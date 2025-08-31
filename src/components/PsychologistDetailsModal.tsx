import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <img 
              src={psychologist.photo} 
              alt={`Психолог ${psychologist.name}`}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <DialogTitle className="text-xl mb-2">{psychologist.name}</DialogTitle>
              <DialogDescription className="text-muted-foreground mb-2">
                {psychologist.specialization}
              </DialogDescription>
              <div className="text-lg font-semibold text-accent">{psychologist.price}</div>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Опыт работы:</h4>
            <p className="text-muted-foreground">{psychologist.experience}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Методы работы:</h4>
            <div className="flex flex-wrap gap-2">
              {psychologist.approach.map((method, index) => (
                <span 
                  key={index}
                  className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">О специалисте:</h4>
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{psychologist.detailedDescription || psychologist.description}</div>
          </div>
          
          <div className="pt-4 border-t">
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('openBookingWithPsychologist', { 
                  detail: { name: psychologist.name } 
                }));
              }}
            >
              Выбрать специалиста
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PsychologistDetailsModal;