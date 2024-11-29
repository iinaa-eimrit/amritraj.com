import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text animate-gradient ${className}`}>
      {children}
    </span>
  );
}