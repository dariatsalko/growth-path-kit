import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'scale-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  id
}) => {
  const { ref, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'opacity-0 transform',
        hasBeenVisible && `animate-${animation}`,
        className
      )}
      style={{
        animationDelay: hasBeenVisible ? `${delay}ms` : undefined
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;