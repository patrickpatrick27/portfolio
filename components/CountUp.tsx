"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  duration?: number;
  delay?: number;
};

export default function CountUp({ end, duration = 1400, delay = 0 }: Props) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setCount(Math.round(eased * end));
        if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      }

      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, delay]);

  return <>{count}</>;
}
