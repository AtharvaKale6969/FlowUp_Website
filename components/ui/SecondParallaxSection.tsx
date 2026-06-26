"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SecondParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Text stagger reveal
      const texts = gsap.utils.toArray('.stagger-text');
      gsap.fromTo(texts, 
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          stagger: 0.4, // Slower stagger
          duration: 1.5, // Slower duration
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="-mt-[20vh] pt-12 pb-24 md:pb-32 bg-[#151512] relative overflow-hidden z-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: General Info */}
        <div ref={textRef} className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-12 lg:pr-24 z-10 mb-16 md:mb-0">
          <span className="stagger-text eyebrow block mb-4 text-gray-400">Pure Hydration</span>
          <h2 className="stagger-text text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white">
            Perfected by <br/> <span className="italic text-gold">Nature</span>
          </h2>
          <p className="stagger-text text-lg text-gray-300 mb-8 leading-relaxed">
            Every bottle of Flow Up is a testament to purity. We partner with trusted local manufacturers to bring you safe, refreshing, and high-quality drinking water with an unmatched crystal clear taste in a perfectly engineered transparent bottle.
          </p>
          
          <ul className="stagger-text space-y-4 mb-10 text-gray-200">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-3 flex-shrink-0" />
              <span>Naturally infused with essential minerals like calcium and magnesium.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-3 flex-shrink-0" />
              <span>Crystal clear, BPA-free plastic that preserves taste.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-3 flex-shrink-0" />
              <span>100% recyclable, a commitment to a zero-waste future.</span>
            </li>
          </ul>

          <div className="stagger-text">
            <Link href="/about" className="text-white font-medium hover:text-gold transition-colors inline-flex items-center group">
              Discover Our Source <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Side: Bottle Video with Edge Fade */}
        <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] flex items-center justify-center">
          <div 
            className="relative w-full h-full"
            style={{
              // CSS Mask to feather/fade the left edge into the background seamlessly
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)'
            }}
          >
            <video 
              src="/Videos/erasio_Bottle_showcase_studio_lighting.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="object-cover w-full h-full origin-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
