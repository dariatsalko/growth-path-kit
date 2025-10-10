import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";

import intentionLogo from "@/assets/intention.svg";
import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Консультации", href: "/", title: "Психолог Минск - консультации и психотерапия" },
    { label: "Школа эмоционального интеллекта", href: "/school", title: "Развитие эмоционального интеллекта детей в Минске" },
    { label: "Осознанность", href: "/mindfulness", title: "Практики осознанности и майндфулнесс в Минске" },
    { label: "Контакты и оплата", href: "/contacts", title: "Контакты психологического центра Интенция" },
  ];

  const openContactModal = () => {
    // Dispatch custom event to open contact modal
    console.log("Opening contact modal");
    window.dispatchEvent(new CustomEvent("openBookingModal"));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="w-full flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
          title="Центр консультативной психологии Интенция - главная страница"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full">
            <img src={intentionLogo} alt="Логотип психологического центра Интенция Минск" className="h-8 w-11" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">ИНТЕНЦИЯ</span>
            <span className="text-xs text-muted-foreground hidden lg:block">
              Безопасное пространство для понимания себя
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-2 lg:space-x-4 xl:space-x-6 mx-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              title={item.title}
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                location.pathname === item.href
                  ? "text-foreground font-semibold border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex">
          <Button
            variant="default"
            className="touch-target bg-accent hover:bg-accent/90 text-accent-foreground font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            onClick={openContactModal}
            aria-label="Связаться с нами"
          >
            Связаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="touch-target inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent/10 hover:text-foreground md:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container px-4 py-4 space-y-3 border-t border-border bg-background">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              title={item.title}
              className={cn(
                "block py-2 text-base font-medium transition-colors",
                location.pathname === item.href
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              variant="default"
              className="touch-target w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              onClick={() => {
                setIsMenuOpen(false);
                openContactModal();
              }}
              aria-label="Связаться с нами"
            >
              Связаться
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
