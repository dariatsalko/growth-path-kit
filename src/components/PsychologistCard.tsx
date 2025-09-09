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
    <Card className="border-border hover:shadow-card transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img 
              src={photo} 
              alt={`Психолог ${name}`}
              className="w-16 h-16 rounded-full object-cover"
            />
            {available && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-success-foreground" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg mb-1">{name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mb-2">
              {specialization}
            </CardDescription>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4 flex-shrink-0" />
              <span className="leading-none">{experience}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-accent">{price}</div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              50 мин
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {approach.map((method, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
            >
              {method}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            size="sm"
            onClick={onSelect}
            disabled={!available}
          >
            {available ? 'Выбрать специалиста' : 'Нет свободных слотов'}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={onViewDetails}
          >
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PsychologistCard;