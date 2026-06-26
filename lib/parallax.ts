import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useState, useEffect } from "react";

export function useParallaxLayer(speed: number, distance: number = 1000): MotionValue<number> {
  const { scrollY } = useScroll();
  const [shouldParallax, setShouldParallax] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShouldParallax(!isMobile && !reduceMotion);
  }, []);

  const yRange = [0, distance * speed];
  const y = useTransform(scrollY, [0, distance], yRange);
  const staticY = useTransform(scrollY, [0, 1], [0, 0]);

  return shouldParallax ? y : staticY;
}
