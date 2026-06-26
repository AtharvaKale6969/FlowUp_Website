"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUpNumber from "./CountUpNumber";
import { Store, Truck, Briefcase, Droplet } from "lucide-react";
import { revealVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const stats = [
  {
    title: "Vendors",
    end: 2500,
    suffix: "+",
    icon: <Store className="w-6 h-6 text-blue-500 mb-3" />,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Distributors",
    end: 75,
    suffix: "+",
    icon: <Truck className="w-6 h-6 text-gold mb-3" />,
    color: "from-gold/20 to-transparent",
  },
  {
    title: "Franchises",
    end: 5,
    suffix: "+",
    icon: <Briefcase className="w-6 h-6 text-emerald-500 mb-3" />,
    color: "from-emerald-500/20 to-transparent",
  },
  {
    title: "Bottles Sold",
    end: 180000,
    suffix: "+",
    icon: <Droplet className="w-6 h-6 text-cyan-500 mb-3" />,
    color: "from-cyan-500/20 to-transparent",
  }
];

export default function SecondBrandStatsDashboard() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-[100px] opacity-60" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-[100px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Side: Brand Info & Stats */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center gap-10">
            <motion.div 
              variants={revealVariants} 
              initial="initial" 
              whileInView="whileInView" 
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="eyebrow block mb-4 text-gold font-semibold tracking-wider uppercase text-sm">Local Presence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our Service Area
              </h2>
              <div className="w-20 h-1 bg-gold mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Currently, Flow Up proudly serves a dedicated 200KM radius surrounding our headquarters in Nagpur, Maharashtra.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By focusing our distribution locally, we guarantee that every bottle reaches our customers at peak freshness. Our tight-knit logistical network ensures rapid delivery, zero delays, and unwavering quality control across the entire region.
              </p>
            </motion.div>

            {/* Interactive Stats Grid */}
            <motion.div 
              variants={staggerContainerVariants} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={staggerItemVariants}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)",
                  }}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`} />
                  
                  <div className="relative z-10">
                    <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 origin-bottom-left">
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      <CountUpNumber end={stat.end} duration={2.5} suffix={stat.suffix} />
                    </h3>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {stat.title}
                    </p>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out z-0" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Map Image */}
          <motion.div 
            variants={revealVariants} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-[55%] min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 relative flex items-center justify-center p-8"
          >
            <div className="relative w-full h-full min-h-[400px]">
              <Image 
                src="/images/4k_map.png"
                alt="Flow Up Operations Map"
                fill
                className="object-contain transform hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
