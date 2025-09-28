import { useEffect, useRef,useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const { freezeOnceVisible = false, ...observerOptions } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsIntersecting(true);
      setHasIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (freezeOnceVisible) {
          if (isElementIntersecting && !hasIntersected) {
            setIsIntersecting(true);
            setHasIntersected(true);
          }
        } else {
          setIsIntersecting(isElementIntersecting);
          if (isElementIntersecting) {
            setHasIntersected(true);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px',
        ...observerOptions,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [freezeOnceVisible, hasIntersected, observerOptions]);

  return { elementRef, isIntersecting, hasIntersected };
};