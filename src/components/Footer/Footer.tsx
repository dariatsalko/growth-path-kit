import { Link } from "react-router-dom";

import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import intentionLogo from "@/assets/intention.svg";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: "#F6F7F5" }}
              >
                <img src={intentionLogo} alt="Логотип центра психологии Интенция Минск" className="h-6 w-7" />
              </div>
              <span className="text-lg font-semibold">ИНТЕНЦИЯ</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Центр консультативной психологии ИНТЕНЦИЯ. Помогаем найти баланс и
              двигаться вперёд
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/intention.by?igsh=cG43MWN2dGJlcWFs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/375292375730"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/Intentionby"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="viber://add?number=375292375730"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Viber"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">
              Услуги
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Индивидуальная психотерапия для взрослых в Минске"
                >
                  Индивидуальная терапия
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Семейная психотерапия и консультации психолога для пар"
                >
                  Семейная терапия
                </Link>
              </li>
              <li>
                <Link
                  to="/school"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Школа развития эмоционального интеллекта для детей и подростков"
                >
                  Школа эмоционального интеллекта
                </Link>
              </li>
              <li>
                <Link
                  to="/mindfulness"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Практики осознанности майндфулнесс для снижения стресса"
                >
                  Практики осознанности
                </Link>
              </li>
              <li>
                <Link
                  to="/cabinet-rent"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Аренда кабинета психолога в центре Минска"
                >
                  Аренда кабинета
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Психолог для подростков - помощь в решении эмоциональных проблем"
                >
                  Подростковая психология
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">
              Контакты
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+375292375730"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +375 (29) 237-57-30
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:admin@intention.by"
                  className="hover:text-primary-foreground transition-colors"
                >
                  admin@intention.by
                </a>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <div>г. Минск, пр-т Дзержинского 11-843-3</div>
                  <div className="text-xs text-primary-foreground/60">
                    ЧП «ЭЛЬМОТО», УНП: 193334920
                  </div>
                </div>
              </div>
              <div className="text-primary-foreground/60 text-xs mt-2">
                9:00-20:00 по предварительной записи
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">
              Документы
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Политика конфиденциальности центра Интенция"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Договор оферты на психологические услуги"
                >
                  Договор оферты
                </Link>
              </li>
              <li>
                <Link
                  to="/consent"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  title="Согласие на обработку персональных данных"
                >
                  Согласие на обработку персональных данных
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © 2025 Центр консультативной психологии ИНТЕНЦИЯ. Все права
              защищены.
            </div>
            <div className="flex items-center gap-4">
              <span>ЧП «ЭЛЬМОТО»</span>
              <span>УНП: 193334920</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
