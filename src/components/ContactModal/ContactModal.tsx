import { Mail, MessageCircle, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog/dialog";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const handleContactClick = (method: string, value: string) => {
    if (method === "phone") {
      window.open(`tel:${value}`, "_self");
    } else if (method === "email") {
      window.open(`mailto:${value}`, "_self");
    } else if (method === "telegram") {
      window.open(`https://t.me/${value}`, "_blank");
    } else if (method === "viber") {
      window.open(`viber://chat?number=${value}`, "_self");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Связаться с нами
          </DialogTitle>
          <DialogDescription className="text-center">
            Запись временно ведется по телефону или через мессенджеры.<br />
            Мы ответим в течение 24 часов.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {/* Phone */}
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-medium">Телефон</span>
            </div>
            <Button
              variant="outline"
              className="w-full justify-start text-lg"
              onClick={() => handleContactClick("phone", "+375292375730")}
            >
              +375 (29) 237-57-30
            </Button>
          </div>

          {/* Email */}
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium">Email</span>
            </div>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => handleContactClick("email", "admin@intention.by")}
            >
              admin@intention.by
            </Button>
          </div>

          {/* Messengers */}
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">Мессенджеры</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleContactClick("telegram", "intention_psy")}
              >
                Telegram
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleContactClick("viber", "+375292375730")}
              >
                Viber
              </Button>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Режим работы</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>ПН-ПТ: 9:00-21:00</p>
              <p>СБ: 10:00-18:00</p>
              <p>ВС: 10:00-16:00</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t">
          <p className="text-sm text-muted-foreground text-center">
            💚 Быстрый ответ в течение 24 часов
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;