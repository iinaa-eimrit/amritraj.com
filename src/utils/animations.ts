import { useEffect, useState } from 'react';

export function useIntersectionObserver(
  options = { threshold: 0.1, rootMargin: '0px' }
) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options.threshold, options.rootMargin]);

  return [setRef, isVisible] as const;
}

export function useParallax(speed = 0.5) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-parallax]');
      elements.forEach((element) => {
        const distance = window.pageYOffset;
        const offset = (distance * speed);
        (element as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
}