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
  price: string;
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
    <Card className="overflow-hidden border-0 bg-gradient-to-br from-background via-background to-muted/30 shadow-lg hover:shadow-xl transition-all duration-500 group">
      <div className="relative p-6 pb-4">
        {/* Status badge */}
        {available && (
          <div className="absolute top-4 right-4 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded-full flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Доступен
          </div>
        )}
        
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative flex-shrink-0">
            <img
              src={photo}
              alt={`Психолог ${name}`}
              className="w-20 h-20 rounded-xl object-cover shadow-md ring-2 ring-primary/10"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-3">
              {specialization}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-1.5 bg-primary/10 rounded-lg">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">{experience}</span>
            </div>
          </div>
        </div>

        {/* Price section */}
        <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">50 минут</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{price}</div>
            <div className="text-xs text-muted-foreground">за сессию</div>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Methods */}
        <div className="flex flex-wrap gap-2 mb-6">
          {approach.map((method, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs font-medium bg-primary/5 text-primary border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {method}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-sm hover:shadow-md transition-all"
            onClick={onSelect}
            disabled={!available}
          >
            {available ? 'Выбрать специалиста' : 'Нет свободных слотов'}
          </Button>
          <Button 
            variant="outline" 
            className="h-11 px-6 border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-xl transition-all"
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