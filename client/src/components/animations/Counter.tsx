'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  className = ''
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className={className}>{from}{suffix}</span>;
}
