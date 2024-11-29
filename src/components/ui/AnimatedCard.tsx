import { ReactNode } from 'react';
import { useIntersectionObserver } from '../../utils/animations';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  color?: string;
}

export function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}