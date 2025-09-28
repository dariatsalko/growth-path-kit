import { ReactNode } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
  id?: string;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-up',
  delay = 0,
  id
}: AnimatedSectionProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    freezeOnceVisible: true,
    threshold: 0.1,
    rootMargin: '50px 0px'
  });

  return (
    <div
      ref={elementRef}
      id={id}
      className={cn(
        "transition-all duration-700 ease-out",
        animation === 'fade-up' && [
          isIntersecting 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        ],
        animation === 'fade-in' && [
          isIntersecting 
            ? "opacity-100" 
            : "opacity-0"
        ],
        animation === 'scale-in' && [
          isIntersecting 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-95"
        ],
        animation === 'slide-in-left' && [
          isIntersecting 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 -translate-x-8"
        ],
        animation === 'slide-in-right' && [
          isIntersecting 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-8"
        ],
        className
      )}
      style={{
        transitionDelay: isIntersecting ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;