"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Droplets, Snowflake, ShieldCheck, Leaf, Star, Send, MessageCircle, MousePointer2, Quote, Heart, ThumbsUp, Sparkles, Smile, Briefcase, Building2, Globe, Activity, Award } from "lucide-react";
import { useParallaxLayer } from "@/lib/parallax";
import { revealVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import HeroCinematic from "@/components/ui/HeroCinematic";
import SecondParallaxSection from "@/components/ui/SecondParallaxSection";
import BrandStatsDashboard from "@/components/ui/BrandStatsDashboard";
import SecondBrandStatsDashboard from "@/components/ui/SecondBrandStatsDashboard";

export default function Home() {

  return (
    <div className="overflow-hidden">
      <HeroCinematic />

      {/* Second Parallax Info Section */}
      <SecondParallaxSection />

      {/* Brand Info & Stats Dashboard */}
      <BrandStatsDashboard />

      {/* Second Brand Info & Stats Dashboard (For Plastroots/Upcoming Changes) */}
      <SecondBrandStatsDashboard />

      {/* Mini Benefits Preview */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" className="text-center mb-16">
            <h2 className="mb-4">Why Choose Flow Up</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A superior bottle design that stands above the rest.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainerVariants} 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Crush-Resistant Build", desc: "Thicker, premium PET plastic that doesn't easily crumple in your hands.", icon: <ShieldCheck className="text-gold w-6 h-6" /> },
              { title: "Crystal Clear Quality", desc: "High-grade, BPA-free material showcasing unmatched water purity.", icon: <Droplets className="text-gold w-6 h-6" /> },
              { title: "Double-Sealed Cap", desc: "Advanced tamper-evident lock ensuring 100% safety and zero leaks.", icon: <Snowflake className="text-gold w-6 h-6" /> },
              { title: "Ergonomic Grip", desc: "Specially engineered contours for a comfortable, slip-free hold on the go.", icon: <Star className="text-gold w-6 h-6" /> },
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                variants={staggerItemVariants} 
                whileHover={{ y: -8, scale: 1.02 }} 
                className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] -z-10 group-hover:bg-gold/10 transition-colors duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-sans font-bold text-xl mb-3 text-gray-900 group-hover:text-gold transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/benefits" className="text-gold font-medium hover:text-gold-light inline-flex items-center">
              See All Benefits <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>



      {/* Testimonials - Premium Infinite Marquee */}
      <section className="py-24 md:py-32 bg-[#151512] relative overflow-hidden">
        {/* Cinematic Lighting Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3 opacity-20 pointer-events-none" />

        {/* Scattered White Doodles Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]">
          {/* Top Row Doodles */}
          <Star className="absolute top-[8%] left-[12%] w-12 h-12 text-white -rotate-12" />
          <Quote className="absolute top-[12%] left-[40%] w-10 h-10 text-white rotate-6" />
          <MessageCircle className="absolute top-[15%] right-[20%] w-16 h-16 text-white rotate-12" />
          <Sparkles className="absolute top-[5%] right-[5%] w-14 h-14 text-white rotate-45" />
          
          {/* Middle Row Doodles */}
          <Send className="absolute top-[45%] left-[8%] w-14 h-14 text-white -rotate-45" />
          <Heart className="absolute top-[35%] left-[65%] w-12 h-12 text-white -rotate-12" />
          <Droplets className="absolute top-[50%] left-[30%] w-10 h-10 text-white rotate-12" />
          <MousePointer2 className="absolute top-[48%] right-[12%] w-10 h-10 text-white rotate-45" />
          <Star className="absolute top-[60%] left-[48%] w-8 h-8 text-white rotate-90" />

          {/* Bottom Row Doodles */}
          <Smile className="absolute bottom-[25%] left-[8%] w-12 h-12 text-white -rotate-12" />
          <MessageCircle className="absolute bottom-[15%] left-[35%] w-12 h-12 text-white rotate-6" />
          <ThumbsUp className="absolute bottom-[20%] right-[40%] w-12 h-12 text-white -rotate-6" />
          <Send className="absolute bottom-[10%] right-[15%] w-14 h-14 text-white rotate-12" />
          <Sparkles className="absolute bottom-[5%] left-[55%] w-10 h-10 text-white rotate-12" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" className="text-center">
            <span className="eyebrow block mb-4 text-gold">Real Experiences</span>
            <h2 className="text-white">Loved by thousands</h2>
          </motion.div>
        </div>

        {/* Funky Marquee Setup */}
        <div className="relative z-10 flex flex-col gap-6 transform -rotate-2 scale-105 hover-pause">
          
          {/* Row 1 (Moving Left) */}
          <div className="animate-marquee hover-pause group">
            {/* We duplicate the array 4 times to ensure it covers the screen continuously */}
            {[...Array(4)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-6 pr-6">
                {[
                  { name: "Rahul S.", loc: "Mumbai", text: "The purest tasting water I've ever had. And the transparent bottle is beautiful." },
                  { name: "Priya M.", loc: "Bangalore", text: "Finally a plastic bottle that looks premium. The zero-leak seal is real." },
                  { name: "Ananya K.", loc: "Delhi", text: "I love the transparency of the brand. Knowing exactly where the water is sourced gives me peace of mind." }
                ].map((testi, i) => (
                  <div 
                    key={i}
                    className="w-[320px] md:w-[400px] flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex text-gold mb-4">
                      {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-300 italic mb-6 text-sm md:text-base leading-relaxed">"{testi.text}"</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center font-bold text-gold">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-white">{testi.name}</p>
                        <p className="text-xs text-gray-400">{testi.loc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2 (Moving Right) */}
          <div className="animate-marquee-reverse hover-pause group -ml-[200px]">
            {[...Array(4)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-6 pr-6">
                {[
                  { name: "Vikram R.", loc: "Pune", text: "I carry Flow Up everywhere. The ergonomic grip actually makes a difference during workouts." },
                  { name: "Neha D.", loc: "Chennai", text: "You can literally taste the minerals. Best packaged drinking water I have purchased so far." },
                  { name: "Arjun T.", loc: "Hyderabad", text: "The crush-resistant plastic feels so much better than the flimsy bottles other brands use." }
                ].map((testi, i) => (
                  <div 
                    key={i}
                    className="w-[320px] md:w-[400px] flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex text-gold mb-4">
                      {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-300 italic mb-6 text-sm md:text-base leading-relaxed">"{testi.text}"</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center font-bold text-gold">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-white">{testi.name}</p>
                        <p className="text-xs text-gray-400">{testi.loc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Our Clients - Ticker Tape Edge Fade */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-12">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" className="text-center">
            <span className="eyebrow block mb-4 text-gray-500">Trusted By</span>
            <h2 className="text-gray-900">Our Clients</h2>
          </motion.div>
        </div>

        {/* Ticker Container with CSS Gradient Mask for edge fading */}
        <div 
          className="relative w-full overflow-hidden flex hover-pause"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <div className="animate-marquee-reverse group flex items-center space-x-16 px-8">
            {[...Array(4)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center space-x-16 flex-shrink-0">
                {[
                  { name: "AquaCorp Inc.", icon: <Building2 className="w-16 h-16 mb-6" /> },
                  { name: "PureLife Hotels", icon: <Briefcase className="w-16 h-16 mb-6" /> },
                  { name: "Global Hydration", icon: <Globe className="w-16 h-16 mb-6" /> },
                  { name: "FitZone Gyms", icon: <Activity className="w-16 h-16 mb-6" /> },
                  { name: "Prime Resorts", icon: <Award className="w-16 h-16 mb-6" /> },
                ].map((client, i) => (
                  <div 
                    key={i} 
                    className="w-[280px] h-[220px] flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl shadow-sm text-gray-400 hover:text-gold hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 cursor-default"
                  >
                    {client.icon}
                    <span className="font-serif font-bold text-2xl text-center px-4">{client.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strategic Partners - 3D Perspective Dual Scroll */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden" style={{ perspective: '1200px' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-[#0a0a0a] to-[#0a0a0a]" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" className="text-center">
            <span className="eyebrow block mb-4 text-emerald-500">Collaborations</span>
            <h2 className="text-white">Our Strategic Partners</h2>
          </motion.div>
        </div>

        {/* 3D Scrolling Track - Single Row */}
        <div className="relative z-10 flex flex-col gap-8 transform rotate-x-[15deg] scale-105 hover-pause mt-10">
          
          <div className="animate-marquee hover-pause group flex" style={{ animationDuration: '40s' }}>
            {/* Duplicated for seamless infinite scroll */}
            {[...Array(4)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-8 pr-8">
                {[
                  { name: "Plastroots Waste Management & Solutions Pvt. Ltd.", role: "Sustainability Partner", logo: "/images/Clients%20&%20Strategic%20Partners/PWMSPL_LOGO-removebg-preview.png", desc: "Pioneering recycling solutions and ensuring zero-waste lifecycle management." },
                  { name: "Plastroots Foundation", role: "Community Outreach", logo: "/images/Clients%20&%20Strategic%20Partners/PF_LOGO_HD.png", desc: "Driving CSR initiatives and environmental awareness across local communities." },
                  { name: "Geoclaim Energy Pvt. Ltd.", role: "Energy Partner", logo: "/images/Clients%20&%20Strategic%20Partners/Geoclaim_1.png", desc: "Providing sustainable energy solutions to minimize our carbon footprint." },
                  { name: "Shetahit Farm Solutions Pvt. Ltd.", role: "Sourcing Partner", logo: "/images/Clients%20&%20Strategic%20Partners/Shetahit.webp", desc: "Supporting local ecosystems and agricultural sustainability programs." },
                ].map((partner, i) => (
                  <div key={i} className="w-[320px] h-[450px] flex flex-col items-center justify-start text-center flex-shrink-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors shadow-2xl">
                    <div className="relative w-24 h-24 mb-6 drop-shadow-2xl flex items-center justify-center flex-shrink-0">
                      <Image 
                        src={partner.logo} 
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3">{partner.role}</span>
                    <h3 className="text-xl text-white font-serif mb-3 line-clamp-3">{partner.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{partner.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0a0a0a] text-white py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6 text-white"
          >
            Ready to <span className="italic text-gold">Flow Up?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto"
          >
            Join the community of thousands who have upgraded their daily hydration. Experience pure, crisp taste and premium transparent design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/order" className="bg-gold text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,169,110,0.4)] transition-all inline-block">
              Order Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
