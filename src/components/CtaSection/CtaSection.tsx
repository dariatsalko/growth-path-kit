import { Button } from "@/components/ui/button/button";

const CtaSection = () => {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Готовы сделать первый шаг?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
            Поговорите с нами в безопасной, уважительной атмосфере.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            onClick={openBooking}
          >
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;