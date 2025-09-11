import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, CheckCircle } from "lucide-react";

interface PsychologistCardProps {
  name: string;
  photo: string;
  specialization: string;
  approach: string[];
  experience: string;
  price?: string;
  available: boolean;
  description: string;
  onSelect: () => void;
  onViewDetails: () => void;
}

const PsychologistCard: React.FC<PsychologistCardProps> = ({
  name,
  photo,
  specialization,
  approach,
  experience,
  price,
  available,
  description,
  onSelect,
  onViewDetails
}) => {
  return (
    <Card className="overflow-hidden border-0 bg-gradient-to-br from-background via-background to-muted/30 shadow-sm hover:shadow-lg transition-all duration-300 group h-full">
      <div className="relative p-4">
        {/* Status badge */}
        {available && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded-full flex items-center gap-1 z-10">
            <CheckCircle className="w-3 h-3" />
            <span className="hidden sm:inline">Доступен</span>
            <span className="sm:hidden">●</span>
          </div>
        )}
        
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative flex-shrink-0">
            <img
              src={photo}
              alt={`Психолог ${name}`}
              className="w-16 h-16 rounded-lg object-cover shadow-sm ring-1 ring-primary/10"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-accent mb-1 group-hover:text-accent/80 transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              {specialization}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="p-1 bg-primary/10 rounded">
                <GraduationCap className="w-3 h-3 text-primary" />
              </div>
              <span className="font-medium">{experience}</span>
            </div>
          </div>
        </div>

        {/* Consultation info section */}
        <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/10 mb-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Консультация -- 50 минут</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>
        
        {/* Methods */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {approach.map((method, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-primary/5 text-primary border border-primary/20 rounded hover:bg-primary/10 transition-colors"
            >
              {method}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            className="flex-1 h-9 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-sm hover:shadow transition-all"
            onClick={onSelect}
            disabled={!available}
          >
            {available ? 'Выбрать специалиста' : 'Нет свободных слотов'}
          </Button>
          <Button 
            variant="outline" 
            className="h-9 px-4 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-lg transition-all"
            onClick={onViewDetails}
          >
            Подробнее
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PsychologistCard;