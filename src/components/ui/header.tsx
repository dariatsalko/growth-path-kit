import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Консультации", href: "/" },
    { label: "Школа эмоционального интеллекта", href: "/school" },
    { label: "Осознанность", href: "/mindfulness" },
    { label: "Контакты и оплата", href: "/contacts" },
  ];

  const openBookingModal = () => {
    // Dispatch custom event to open booking modal
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="w-full flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <div className="h-5 w-5 rounded-full bg-accent transform rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">ИНТЕНЦИЯ</span>
            <span className="text-xs text-muted-foreground hidden lg:block">Безопасное пространство для понимания себя</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-2 lg:space-x-4 xl:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex">
          <Button 
            variant="default" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            onClick={openBookingModal}
          >
            Записаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent/10 hover:text-foreground md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="container px-4 py-4 space-y-3 border-t border-border bg-background">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <Button 
              variant="default" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              onClick={() => {
                setIsMenuOpen(false);
                openBookingModal();
              }}
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