import { CheckCircle, Clock, GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";

interface PsychologistCardProps {
  name: string;
  photo: string;
  specialization: string;
  approach: string[];
  experience: string;
  education: string;
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
  education,
  price,
  available,
  description,
  onSelect,
  onViewDetails,
}) => {
  return (
    <Card
      className="overflow-hidden border border-border/40 bg-gradient-to-br from-background via-background to-muted/30 shadow-md hover:shadow-xl transition-all duration-300 group h-full hover:border-border/60"
      onClick={onViewDetails}
    >
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
              alt={`Фото психолога ${name} - ${specialization} в центре Интенция Минск`}
              className="w-16 h-16 rounded-lg object-cover shadow-sm ring-1 ring-primary/20 border border-border/20"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-accent mb-1 group-hover:text-accent/80 transition-colors truncate">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2 line-clamp-2">
              {specialization}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="p-1 bg-primary/10 rounded">
                <GraduationCap className="w-3 h-3 text-primary" />
              </div>
              <span className="font-medium truncate">{education}</span>
            </div>
          </div>
        </div>

        {/* Consultation info section */}
        <div className="flex items-center justify-between p-3 bg-accent/8 rounded-lg border border-accent/15 mb-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Консультация • 50 минут</span>
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
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="h-9 px-4 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-lg transition-all"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            Подробнее
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PsychologistCard;
