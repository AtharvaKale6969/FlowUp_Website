"use client";

import { motion } from "framer-motion";

const bubbles = [
  { size: 120, left: '10%', top: '20%', duration: 25, delay: 0 },
  { size: 80, left: '80%', top: '15%', duration: 20, delay: 2 },
  { size: 150, left: '60%', top: '70%', duration: 30, delay: 5 },
  { size: 90, left: '25%', top: '80%', duration: 22, delay: 1 },
  { size: 60, left: '45%', top: '40%', duration: 18, delay: 3 },
  { size: 110, left: '85%', top: '60%', duration: 28, delay: 4 },
  { size: 130, left: '5%', top: '60%', duration: 26, delay: 6 },
  { size: 70, left: '75%', top: '85%', duration: 19, delay: 2.5 }
];

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-white">
      {/* Soft blue-white blob */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-50/40 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Mist green / pearl blob */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-50/40 blur-[150px]"
        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Subtle gold-tinted glow near the middle */}
      <motion.div
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-[#c9a96e] opacity-[0.03] blur-[120px]"
        animate={{
          y: [0, 60, 0],
          x: [0, 40, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      {/* Floating Visuals (Water Bubbles / Orbs) */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full border border-blue-200/20 bg-gradient-to-tr from-white/30 to-blue-50/10 backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, (i % 2 === 0 ? 50 : -50), 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Elegant SVG Waves Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg width="200%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <path d="M0 75 Q 37.5 37.5 75 75 T 150 75" fill="none" stroke="#000" strokeWidth="0.5" />
              <path d="M0 100 Q 37.5 62.5 75 100 T 150 100" fill="none" stroke="#000" strokeWidth="0.25" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </motion.div>
      
      {/* Grain texture overlay to make the gradients look premium and eliminate banding */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
    </div>
  );
}
