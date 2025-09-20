import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import intentionLogo from "@/assets/intention.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "О нас", href: "#about" },
    { label: "Как это работает", href: "#how-it-works" },
    { label: "Услуги", href: "#services" },
    { label: "Специалисты", href: "#psychologists" },
    { label: "Школа ЭИ", href: "/school" },
    { label: "Контакты", href: "/contacts" },
  ];

  const openBookingModal = () => {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      window.location.href = href;
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="w-full flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
          aria-label="Интенция - главная страница"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full">
            <img src={intentionLogo} alt="Логотип центра Интенция" className="h-8 w-11" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">ИНТЕНЦИЯ</span>
            <span className="text-xs text-muted-foreground hidden lg:block">Безопасное пространство для понимания себя</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-2 lg:space-x-4 xl:space-x-6 mx-4" role="navigation" aria-label="Основная навигация">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label={`Перейти к разделу ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex">
          <Button 
            variant="default" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium min-h-[44px] focus:ring-2 focus:ring-accent focus:ring-offset-2"
            onClick={openBookingModal}
            aria-label="Записаться на консультацию"
          >
            Записаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent/10 hover:text-foreground md:hidden min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="container px-4 py-4 space-y-3 border-t border-border bg-background" role="navigation" aria-label="Мобильная навигация">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md min-h-[44px]"
              aria-label={`Перейти к разделу ${item.label}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <Button 
              variant="default" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium min-h-[44px] focus:ring-2 focus:ring-accent focus:ring-offset-2"
              onClick={() => {
                setIsMenuOpen(false);
                openBookingModal();
              }}
              aria-label="Записаться на консультацию"
            >
              Записаться
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;