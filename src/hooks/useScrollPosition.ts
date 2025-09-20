import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolledFromTop, setIsScrolledFromTop] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolledFromTop(position > 300);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updatePosition(); // Set initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollPosition, isScrolledFromTop };
};