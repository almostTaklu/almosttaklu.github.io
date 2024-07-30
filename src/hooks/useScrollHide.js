import { useState, useEffect, useRef } from 'react';

export const useScrollHide = (initialVisibility = true, threshold = 50) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const lastScrollTop = useRef(0);
  const accumulatedScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        // Scrolling down
        accumulatedScroll.current += scrollTop - lastScrollTop.current;
        if (accumulatedScroll.current >= threshold) {
          setIsVisible(false);
          accumulatedScroll.current = 0;
        }
      } else {
        // Scrolling up
        setIsVisible(true);
        accumulatedScroll.current = 0;
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isVisible;
};
