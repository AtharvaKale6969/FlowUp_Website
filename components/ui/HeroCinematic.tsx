"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Star } from "lucide-react";

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only register and run on client side
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // 1. Initial Entrance Animations
      gsap.from(bgRef.current, { scale: 1.05, opacity: 0, duration: 2, ease: "power3.out" });
      gsap.from(textRef.current, { y: 100, opacity: 0, scale: 0.9, duration: 1.5, delay: 0.3, ease: "power4.out" });
      gsap.from(bottleRef.current, { y: 200, opacity: 0, scale: 0.8, duration: 1.5, delay: 0.5, ease: "power4.out" });
      gsap.from(indicatorRef.current, { y: 100, opacity: 0, duration: 1, delay: 1.5, ease: "power3.out" });

      // 2. Scroll Parallax Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrub
        }
      });

      // Background parallax (slow)
      tl.to(bgRef.current, { yPercent: 10, ease: "none" }, 0);

      // Text parallax (faster)
      tl.to(textRef.current, { yPercent: 25, opacity: 0, scale: 1.05, ease: "none" }, 0);

      // Bottle parallax (fastest) & scale
      tl.to(bottleRef.current, { yPercent: -10, scale: 1.1, ease: "none" }, 0);

      // Hide indicator immediately
      gsap.to(indicatorRef.current, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "1% top",
          end: "8% top",
          scrub: true,
        }
      });





    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#f8f9fa]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Cinematic Background */}
        <div ref={bgRef} className="absolute inset-0 -top-[15%] h-[130%] w-full z-0">
          <Image 
            src="/images/Hero_Home.png" 
            alt="Hero Background" 
            fill 
            sizes="100vw"
            className="object-cover object-center opacity-90"
            priority
            quality={90}
          />
          {/* Subtle gradient for contrast at bottom and top */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Massive Typography */}
        <h1 
          ref={textRef} 
          className="absolute z-10 text-[20vw] leading-none font-bold text-white font-sans tracking-tight whitespace-nowrap drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-95"
        >
          FLOW UP
        </h1>

        {/* The Bottle */}
        <div ref={bottleRef} className="relative z-20 h-[75vh] w-[30vw] min-w-[280px] flex items-center justify-center mt-10">
          <Image 
            src="/images/Flow%20up%20bottle_final_hero.png" 
            alt="Flow Up Premium Water Bottle" 
            fill
            sizes="(max-width: 768px) 80vw, 30vw"
            className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            priority
          />
        </div>



        {/* Scroll Indicator */}
        <div ref={indicatorRef} className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-start pt-4 w-32 h-16 bg-white rounded-t-full z-40 text-black shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
          <ArrowDown className="animate-bounce" size={18} strokeWidth={2.5} />
          <span className="text-[10px] font-bold tracking-wider mt-1">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}
