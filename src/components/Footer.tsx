import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <div className="h-4 w-4 rounded-full bg-primary"></div>
              </div>
              <span className="text-lg font-semibold">ИНТЕНЦИЯ</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Центр консультативной психологии. Помогаем найти баланс и двигаться вперёд
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Индивидуальная терапия
                </a>
              </li>
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Семейная терапия
                </a>
              </li>
              <li>
                <a href="/school" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Школа ЭИ для детей
                </a>
              </li>
              <li>
                <a href="/mindfulness" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Практики осознанности
                </a>
              </li>
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Подростковая психология
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+7999123456789" className="hover:text-primary-foreground transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@intention.by" className="hover:text-primary-foreground transition-colors">
                  info@intention.by
                </a>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>г. Минск, Беларусь</span>
              </div>
              <div className="text-primary-foreground/60 text-xs mt-2">
                Пн-Пт: 9:00-21:00<br />
                Сб-Вс: 10:00-18:00
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Документы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Договор оферты
                </a>
              </li>
              <li>
                <a href="/consent" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Согласие на обработку ПД
                </a>
              </li>
              <li>
                <a href="/cancellation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Правила отмены
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © 2024 Центр «ИНТЕНЦИЯ». Все права защищены.
            </div>
            <div className="flex items-center gap-4">
              <span>ИП Иванова А.С.</span>
              <span>ИНН: 123456789012</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;