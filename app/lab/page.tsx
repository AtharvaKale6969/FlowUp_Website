"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, CheckCircle2, ShieldCheck, FileText, FlaskConical, Globe, Eye, Microscope, FileCheck2, TestTube, Activity } from "lucide-react";
import { revealVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { useParallaxLayer } from "@/lib/parallax";

export default function LabAndCerts() {
  const heroBgY = useParallaxLayer(-0.10);

  const certs = [
    { title: "BIS Certification", slug: "bis-certification", desc: "Bureau of Indian Standards certified for material safety and quality.", icon: <ShieldCheck size={32} />, verified: true },
    { title: "FDA Approved", slug: "fda-approved", desc: "All materials touching water meet stringent US FDA food-contact standards.", icon: <Globe size={32} />, verified: true },
    { title: "ISO 9001:2015", slug: "iso-9001-2015", desc: "Manufactured in a certified facility ensuring consistent quality management.", icon: <FileText size={32} />, verified: true },
    { title: "100% BPA-Free", slug: "bpa-free", desc: "Independently verified free of all Bisphenol compounds (BPA, BPS, BPF).", icon: <FlaskConical size={32} />, verified: true },
    { title: "FSSAI Compliant", slug: "fssai-compliant", desc: "Meets all Food Safety and Standards Authority of India requirements.", icon: <ShieldCheck size={32} />, verified: true },
    { title: "Heavy-Metal Free", slug: "heavy-metal-free", desc: "Spectrometry testing confirms zero presence of lead, cadmium, or mercury.", icon: <FlaskConical size={32} />, verified: true }
  ];

  return (
    <div className="bg-transparent min-h-screen pb-24">
      {/* Hero Intro - Cinematic Dark Theme */}
      <section className="relative pt-32 pb-24 mb-24 overflow-hidden bg-[#0a0a0a]">
        <motion.div 
          style={{ y: heroBgY }}
          className="absolute inset-0 parallax-container pointer-events-none"
        >
          {/* Cinematic Lighting Blobs */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold rounded-full blur-[120px] opacity-20 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] opacity-20 translate-y-1/4" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />

          {/* Theme Doodles */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]">
            <FlaskConical className="absolute top-[15%] left-[12%] w-12 h-12 text-white -rotate-12" />
            <Microscope className="absolute top-[30%] right-[18%] w-14 h-14 text-white rotate-12" />
            <ShieldCheck className="absolute top-[55%] left-[8%] w-16 h-16 text-white rotate-45" />
            <FileCheck2 className="absolute bottom-[20%] left-[30%] w-12 h-12 text-white -rotate-12" />
            <TestTube className="absolute bottom-[10%] right-[15%] w-14 h-14 text-white rotate-12" />
            <Activity className="absolute top-[40%] right-[5%] w-10 h-10 text-white -rotate-45" />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow block mb-4 text-gold">Uncompromising Standards</span>
            <h1 className="mb-6 relative inline-block text-white">
              Lab Reports & <span className="text-gold italic font-serif">Certifications</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left rounded-full"
              />
            </h1>
            <p className="text-gray-300 text-xl font-light">
              We believe in radical transparency. Every claim we make is backed by independent, verifiable laboratory testing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certs Grid */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <motion.div 
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certs.map((cert, i) => (
            <motion.div 
              key={i} 
              variants={staggerItemVariants}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="text-gray-900 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {cert.icon}
                </div>
                {cert.verified && (
                  <span className="flex items-center text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                    <CheckCircle2 size={14} className="mr-1" /> Verified
                  </span>
                )}
              </div>
              
              <h3 className="text-xl mb-3">{cert.title}</h3>
              <p className="text-gray-600 text-sm mb-8">{cert.desc}</p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <button className="flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors group/btn">
                  <Download size={16} className="mr-2 group-hover/btn:-translate-y-1 transition-transform" />
                  Download PDF
                </button>
                <Link href={`/lab/${cert.slug}`} className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-800 transition-colors group/btn2">
                  <Eye size={16} className="mr-2 group-hover/btn2:scale-110 transition-transform" />
                  View Certification
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Comprehensive Lab Reports Viewer */}
      <section className="container mx-auto px-6 max-w-5xl mb-24">
        <motion.div 
          variants={revealVariants} 
          initial="initial" 
          whileInView="whileInView" 
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Lab Reports</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10">
              Our comprehensive testing docket, methodology, and raw spectrometer data.
            </p>
            
            {/* Embedded PDF/Image Placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-8 flex flex-col items-center justify-center min-h-[500px] relative">
               <FileText size={48} className="text-gold mb-4" />
               <h3 className="text-xl text-white font-medium mb-2">Comprehensive Report Pending</h3>
               <p className="text-gray-400 max-w-sm mb-6">The full multi-page lab report document will be embedded here for direct viewing.</p>
               
               <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gold hover:text-white transition-colors flex items-center mx-auto shadow-lg">
                 <Download size={18} className="mr-2" /> Download Full Docket
               </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
