"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUpNumber from "./CountUpNumber";
import { Store, Truck, Briefcase, Droplet } from "lucide-react";
import { revealVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export default function BrandStatsDashboard() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-[100px] opacity-60" />
        <div className="absolute -bottom-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-[100px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Side: Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <Image 
                src="/images/Clients%20&%20Strategic%20Partners/Aayuneer%20logo_new_4k.png"
                alt="Aayuneer Enterprises Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Side: Text */}
          <motion.div 
            variants={revealVariants} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <span className="eyebrow block mb-4 text-gold font-semibold tracking-wider uppercase text-sm">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Aayuneer Enterprises
            </h2>
            <div className="w-20 h-1 bg-gold mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed max-w-xl">
              Flow Up is a premium hydration brand by Aayuneer Enterprises, committed to delivering pure, safe, and refreshing drinking water. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              With our flagship bottled water product, we focus on quality, trust, and customer satisfaction, helping people stay hydrated and healthy every day. Our expanding network ensures that purity reaches you wherever you are.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
