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
    <Card className="w-full overflow-hidden border-0 bg-gradient-to-br from-background via-background to-accent/5 shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="relative p-4">
        {/* Status badge */}
        {available && (
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full flex items-center gap-1">
            <CheckCircle className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">Доступен</span>
          </div>
        )}
        
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative flex-shrink-0">
            <img
              src={photo}
              alt={`Психолог ${name}`}
              className="w-14 h-14 rounded-lg object-cover shadow-sm ring-1 ring-accent/20"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2 line-clamp-2">
              {specialization}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="p-1 bg-accent/10 rounded">
                <GraduationCap className="w-3 h-3 text-accent" />
              </div>
              <span className="font-medium line-clamp-1">{experience}</span>
            </div>
          </div>
        </div>

        {/* Price section */}
        <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/10 mb-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium">50 мин</span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-accent">{price}</div>
            <div className="text-xs text-muted-foreground">за сессию</div>
          </div>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        {/* Description */}
        <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>
        
        {/* Methods */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {approach.slice(0, 3).map((method, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-md hover:bg-accent/15 transition-colors"
            >
              {method}
            </span>
          ))}
          {approach.length > 3 && (
            <span className="px-2 py-1 text-xs text-muted-foreground">
              +{approach.length - 3}
            </span>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            className="flex-1 h-9 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg shadow-sm hover:shadow transition-all text-sm"
            onClick={onSelect}
            disabled={!available}
          >
            {available ? 'Выбрать' : 'Недоступен'}
          </Button>
          <Button 
            variant="outline" 
            className="h-9 px-4 border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground font-medium rounded-lg transition-all text-sm"
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