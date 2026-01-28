import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  neonBorder?: boolean;
}

const GlassCard = ({ children, className, hover = true, neonBorder = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        hover ? 'glass-card-hover' : 'glass-card',
        neonBorder && 'neon-border',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
