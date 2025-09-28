import { ArrowUp } from 'lucide-react';

import { Button } from '@/components/ui/button/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

const ScrollToTop = () => {
  const { isScrolledFromTop } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full shadow-lg transition-all duration-300 ease-in-out",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "border border-primary/20 hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isScrolledFromTop 
          ? "opacity-100 scale-100 translate-y-0" 
          : "opacity-0 scale-0 translate-y-4 pointer-events-none"
      )}
      onClick={scrollToTop}
      aria-label="Вернуться наверх"
      title="Вернуться наверх"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;