import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../../lib/utils';

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  repeat?: number;
  duration?: number;
  reverse?: boolean;
}

export function Marquee({ className, children, repeat = 4, duration = 40, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="flex min-w-full flex-shrink-0 items-center"
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex-shrink-0 px-12">
            {children}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex min-w-full flex-shrink-0 items-center"
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex-shrink-0 px-12">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}