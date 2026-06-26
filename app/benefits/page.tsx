"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, X, ShieldCheck, Droplets, Leaf, Activity, Beaker, Recycle, Heart, Zap, HeartPulse, BicepsFlexed, Sun } from "lucide-react";
import { useParallaxLayer } from "@/lib/parallax";
import { revealVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export default function Benefits() {
  const heroBgY = useParallaxLayer(-0.14);

  return (
    <div className="bg-transparent min-h-screen pb-24 overflow-hidden">
      {/* Hero - Cinematic Dark Theme */}
      <section className="relative text-center pt-32 pb-24 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold rounded-full blur-[120px] opacity-20 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] opacity-20 translate-y-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />

        {/* Theme Doodles */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]">
          <Activity className="absolute top-[12%] left-[10%] w-12 h-12 text-white -rotate-12" />
          <HeartPulse className="absolute top-[20%] right-[20%] w-14 h-14 text-white rotate-12" />
          <BicepsFlexed className="absolute top-[60%] left-[8%] w-16 h-16 text-white rotate-45" />
          <Droplets className="absolute bottom-[25%] right-[12%] w-10 h-10 text-white -rotate-12" />
          <Zap className="absolute bottom-[10%] left-[35%] w-14 h-14 text-white rotate-12" />
          <Sun className="absolute top-[40%] right-[5%] w-12 h-12 text-white rotate-45" />
        </div>

        <motion.div 
          style={{ y: heroBgY }}
          className="absolute inset-0 z-0 opacity-20 flex justify-center items-center parallax-container pointer-events-none"
        >
          {/* Subtle animated water ripple SVG */}
          <svg viewBox="0 0 800 800" className="w-[120%] h-[120%] max-w-none">
            <motion.circle cx="400" cy="400" r="100" stroke="#c9a96e" strokeWidth="2" fill="none"
              animate={{ r: [100, 400], opacity: [0.8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle cx="400" cy="400" r="100" stroke="#c9a96e" strokeWidth="2" fill="none"
              animate={{ r: [100, 400], opacity: [0.8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.3 }}
            />
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow block mb-4 text-gold">The Science of Flow Up</span>
            <h1 className="mb-6 relative inline-block text-white">
              Pure Hydration.
              <br />
              <span className="text-gold italic font-serif">Proven Benefits.</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left rounded-full"
              />
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light mt-4">
              More than just water. Discover how our naturally enriched premium mineral water transforms your health, your experience, and the environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Benefits To You (Health & Wellness) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center mb-16">
            <span className="eyebrow text-gold block mb-4">Your Health First</span>
            <h2>Benefits To You</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Sourced directly from pristine natural springs, Flow Up is naturally enriched with minerals your body craves.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <Activity size={32} />, 
                title: "Optimal Alkalinity", 
                desc: "Our water boasts a naturally balanced pH level that helps neutralize acidic buildup in your bloodstream, promoting better cellular hydration and overall vitality.",
                sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/22844861/",
                sourceText: "Read NCBI Study on Alkaline Water"
              },
              { 
                icon: <Zap size={32} />, 
                title: "Essential Minerals", 
                desc: "Naturally infused with Calcium for bone health, Magnesium for muscle and nerve function, and Potassium for perfect electrolyte balance.",
                sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8313472/",
                sourceText: "Read NLM Article on Mineral Benefits"
              },
              { 
                icon: <Heart size={32} />, 
                title: "Immunity Support", 
                desc: "Free from artificial RO processes that strip away nutrients. Our untouched, mineral-rich profile is scientifically proven to support a robust immune system.",
                sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16258415/",
                sourceText: "Read Research on Demineralized Water"
              }
            ].map((ben, i) => (
              <motion.div key={i} variants={staggerItemVariants} className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 mb-6 group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                  {ben.icon}
                </div>
                <h3 className="text-2xl mb-4 font-serif text-gray-900">{ben.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">{ben.desc}</p>
                <a href={ben.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gold text-sm font-semibold hover:text-gold-light inline-flex items-center mt-auto transition-colors">
                  {ben.sourceText} 
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Benefits of Our Bottle */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <span className="eyebrow text-gold block mb-4">Precision Engineering</span>
              <h2 className="mb-6">Benefits of Our Bottle</h2>
              <p className="text-gray-600 mb-8 text-lg">We believe that pure water deserves a pure vessel. Our bottles are meticulously designed to protect the water and enhance your drinking experience.</p>
              
              <div className="space-y-6">
                {[
                  { icon: <Beaker size={24} className="text-gold" />, title: "Absolute Taste Neutrality", desc: "Crafted from crystal-clear, premium PET that guarantees zero chemical leaching. The water tastes exactly as crisp as the moment it left the spring." },
                  { icon: <ShieldCheck size={24} className="text-gold" />, title: "100% BPA & Toxin Free", desc: "Rigorously tested to ensure no Bisphenol A or harmful toxins ever come into contact with your hydration." },
                  { icon: <Droplets size={24} className="text-gold" />, title: "Ergonomic Grip", desc: "Engineered for active lifestyles. Whether you're carrying the 500ml on a run or the 1L to the office, it sits perfectly in your hand." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden group flex items-center justify-center">
               <Image 
                 src="/images/Flow_Up_benefits.png" 
                 alt="Flow Up Bottle Benefits" 
                 fill 
                 className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" 
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Benefits To The Environment */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/snowy-lake-bg.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center mb-16">
            <span className="eyebrow text-gold block mb-4">Sustainable Future</span>
            <h2 className="text-white">Benefits To The Environment</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-10 rounded-3xl">
                <Recycle size={48} className="text-gold mb-6" />
                <h3 className="text-2xl font-serif mb-4">100% Recyclable Materials</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every Flow Up bottle is designed for the circular economy. From the cap to the base, our materials are 100% recyclable, ensuring that our footprint is minimized and plastic stays out of our oceans.
                </p>
             </motion.div>
             <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-10 rounded-3xl">
                <Leaf size={48} className="text-gold mb-6" />
                <h3 className="text-2xl font-serif mb-4">Ethical & Sustainable Sourcing</h3>
                <p className="text-gray-400 leading-relaxed">
                  We don't exploit our springs. We extract water at a sustainable rate that allows the natural aquifers to replenish themselves naturally, protecting the local ecosystem for generations.
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center mb-16">
            <span className="eyebrow text-gold block mb-4">The Flow Up Standard</span>
            <h2>See How We Stack Up</h2>
          </motion.div>

          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="overflow-x-auto hide-scrollbar shadow-lg rounded-2xl bg-white border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="py-6 px-6 border-b-2 border-gray-100 text-gray-400 font-medium">Feature</th>
                  <th className="py-6 px-6 border-b-2 border-gray-100 bg-gray-50 text-center font-medium text-gray-600 border-r border-white">Standard RO Water</th>
                  <th className="py-6 px-6 border-b-2 border-gray-100 bg-gray-50 text-center font-medium text-gray-600 border-r border-white">Generic Bottled Water</th>
                  <th className="py-6 px-6 border-b-2 border-gold bg-[#0a0a0a] text-center font-serif text-xl text-gold">Flow Up</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { label: "Untouched Natural Source", ro: false, gen: "Rarely", flow: true },
                  { label: "Rich in Natural Minerals", ro: false, gen: "Variable", flow: true },
                  { label: "Balanced Alkalinity", ro: false, gen: false, flow: true },
                  { label: "100% BPA & Toxin Free", ro: "Depends on filter", gen: "Often Not", flow: true },
                  { label: "100% Recyclable Bottle", ro: "N/A", gen: "Sometimes", flow: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-900 border-r border-gray-100">{row.label}</td>
                    <td className="py-5 px-6 text-center bg-gray-50/30 border-r border-gray-100">
                      {typeof row.ro === 'boolean' ? (row.ro ? <Check size={20} className="mx-auto text-gray-400" /> : <X size={20} className="mx-auto text-red-400/50" />) : <span className="text-gray-500 font-medium">{row.ro}</span>}
                    </td>
                    <td className="py-5 px-6 text-center bg-gray-50/30 border-r border-gray-100">
                      {typeof row.gen === 'boolean' ? (row.gen ? <Check size={20} className="mx-auto text-gray-400" /> : <X size={20} className="mx-auto text-red-400/50" />) : <span className="text-gray-500 font-medium">{row.gen}</span>}
                    </td>
                    <td className="py-5 px-6 text-center bg-gold/5 relative">
                      {/* Highlight border for Flow Up column */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold/20" />
                      <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gold/20" />
                      {typeof row.flow === 'boolean' ? (row.flow ? <Check size={24} className="mx-auto text-gold" /> : <X size={20} className="mx-auto text-red-500" />) : <span className="font-bold text-gray-900">{row.flow}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] text-center py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="relative z-10">
          <h2 className="text-white mb-8 text-4xl">Experience the benefits for yourself.</h2>
          <Link href="/order" className="bg-gold text-white px-10 py-4 rounded-full font-medium hover:bg-gold-light transition-colors inline-block text-lg shadow-[0_0_20px_rgba(201,169,110,0.3)] hover:scale-105 transform">
            Order Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
