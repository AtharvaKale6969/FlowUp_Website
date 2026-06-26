"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookOpen, PenTool, MessageSquare, Glasses, Bookmark, Sparkles, Feather } from "lucide-react";
import { revealVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { useParallaxLayer } from "@/lib/parallax";
import { BLOGS } from "@/lib/constants";

export default function Blogs() {
  const heroBgY = useParallaxLayer(-0.10);

  return (
    <div className="bg-transparent min-h-screen pb-24">
      
      {/* Hero Intro - Cinematic Dark Theme */}
      <section className="relative pt-32 pb-24 mb-16 overflow-hidden bg-[#0a0a0a]">
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
            <BookOpen className="absolute top-[12%] left-[18%] w-12 h-12 text-white -rotate-12" />
            <PenTool className="absolute top-[25%] right-[22%] w-14 h-14 text-white rotate-12" />
            <MessageSquare className="absolute top-[60%] left-[10%] w-10 h-10 text-white rotate-45" />
            <Glasses className="absolute bottom-[15%] right-[12%] w-16 h-16 text-white -rotate-12" />
            <Bookmark className="absolute bottom-[10%] left-[35%] w-10 h-10 text-white rotate-12" />
            <Sparkles className="absolute top-[45%] right-[5%] w-12 h-12 text-white rotate-45" />
            <Feather className="absolute top-[5%] right-[40%] w-14 h-14 text-white -rotate-6" />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow block mb-4 text-gold">Flow Up Journal</span>
            <h1 className="mb-6 relative inline-block text-white">
              Insights & <span className="text-gold italic font-serif">Stories</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left rounded-full"
              />
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl font-light">
              Deep dives into material science, hydration wellness, and the journey of building Flow Up.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl">

        <motion.div 
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {BLOGS.map((blog, i) => (
            <motion.div key={i} variants={staggerItemVariants} className="group flex flex-col h-full">
              <Link href={`/blogs/${blog.slug}`} className={`block rounded-[2rem] aspect-video mb-6 overflow-hidden relative ${blog.image}`}>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 shadow-sm z-10">
                  {blog.tag}
                </div>
              </Link>
              
              <div className="flex-grow flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {blog.date}</span>
                  <span className="flex items-center"><Clock size={12} className="mr-1" /> {blog.readTime}</span>
                </div>
                
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="text-2xl mb-3 group-hover:text-gold transition-colors font-serif leading-tight">{blog.title}</h3>
                </Link>
                
                <p className="text-gray-600 text-body mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link href={`/blogs/${blog.slug}`} className="text-sm font-medium text-gray-900 hover:text-gold inline-flex items-center transition-colors">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
