"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function CountUpNumber({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(easeOutProgress * end);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end); // Ensure it ends exactly on the number
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  const hasDecimals = end % 1 !== 0;
  const formattedCount = hasDecimals ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref}>
      {formattedCount}{suffix}
    </span>
  );
}
