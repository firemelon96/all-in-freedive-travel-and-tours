'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'bottom';
  className?: string;
}

export default function FadeInWrapper({
  children,
  delay = 0,
  direction = 'bottom',
  className = '',
}: FadeInWrapperProps) {
  const variants = {
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    bottom: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
