import { Button } from "@/components/ui/button";
import { Shield, Heart, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  const scrollToApproach = () => {
    const approachSection = document.querySelector('#approach');
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/20">
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-20 container px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-foreground mb-6">
            Добро пожаловать в Центр консультативной психологии <span className="text-primary">ИНТЕНЦИЯ</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Мы создаём пространство, где можно говорить откровенно, понимать себя и находить опору для перемен.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-3 py-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Конфиденциально</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-3 py-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Более 5 лет опыта</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-3 py-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Быстрая запись</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              onClick={openBooking}
            >
              Записаться на консультацию
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all"
              onClick={scrollToApproach}
            >
              Узнать о подходе
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;