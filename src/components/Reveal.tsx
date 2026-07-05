import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export type RevealVariant = 'fade' | 'left' | 'right' | 'scale' | 'blur';

const HIDDEN: Record<RevealVariant, Record<string, number | string>> = {
  fade: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.9 },
  blur: { opacity: 0, y: 16, filter: 'blur(10px)' },
};

const VISIBLE: Record<RevealVariant, Record<string, number | string>> = {
  fade: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  blur: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}

/** Scroll-reveal wrapper mirroring the reference's data-reveal system. */
export function Reveal({ children, variant = 'fade', delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={HIDDEN[variant]}
      whileInView={VISIBLE[variant]}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
