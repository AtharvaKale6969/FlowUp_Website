"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParallaxLayer } from "@/lib/parallax";
import { revealVariants } from "@/lib/animations";
import { ShieldCheck, Leaf, Eye, Star, Droplets, HeartHandshake, Lightbulb, CheckCircle, Heart, Target, Compass, Activity } from "lucide-react";
import CountUpNumber from "@/components/ui/CountUpNumber";

export default function About() {
  const heroBgY = useParallaxLayer(-0.10);
  const frontImgY = useParallaxLayer(-0.20);
  const backImgY = useParallaxLayer(-0.12);
  const bannerBgY = useParallaxLayer(-0.14);
  const numbersBgY = useParallaxLayer(-0.08);

  return (
    <div className="overflow-hidden bg-transparent">
      {/* Hero Intro - Cinematic Dark Theme */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center pt-32 pb-16 overflow-hidden bg-[#0a0a0a]">
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
            <Leaf className="absolute top-[10%] left-[15%] w-12 h-12 text-white -rotate-12" />
            <Droplets className="absolute top-[20%] right-[25%] w-10 h-10 text-white rotate-12" />
            <Compass className="absolute top-[50%] left-[10%] w-16 h-16 text-white rotate-45" />
            <Heart className="absolute bottom-[20%] left-[25%] w-14 h-14 text-white -rotate-12" />
            <Star className="absolute bottom-[30%] right-[15%] w-12 h-12 text-white rotate-12" />
            <Activity className="absolute bottom-[10%] right-[35%] w-10 h-10 text-white -rotate-6" />
            <Lightbulb className="absolute top-[60%] right-[8%] w-12 h-12 text-white rotate-45" />
          </div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow block mb-4 text-gold">Our Heritage</span>
            <h1 className="mb-6 relative inline-block text-white">
              Hydration, <span className="text-gold italic font-serif">Elevated.</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left rounded-full"
              />
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              We believe pure water deserves a pure vessel. No compromises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div className="relative h-[450px] md:h-[600px] flex items-center justify-center mt-8 md:mt-0">
            <motion.div 
              style={{ y: backImgY }} 
              className="absolute top-0 right-0 md:top-10 md:right-10 w-[65%] md:w-[300px] aspect-[3/4] md:aspect-auto md:h-[400px] bg-gray-100 rounded-3xl parallax-container shadow-xl rotate-6 md:rotate-6 overflow-hidden"
            >
              <Image 
                src="/images/Picture2.jpg"
                alt="Flow Up Production"
                fill
                className="object-contain p-4"
              />
            </motion.div>
            <motion.div 
              style={{ y: frontImgY }} 
              className="absolute bottom-0 left-0 md:bottom-10 md:left-10 w-[70%] md:w-[320px] aspect-[3/4] md:aspect-auto md:h-[420px] rounded-3xl parallax-container shadow-2xl -rotate-3 z-10 overflow-hidden"
            >
              <Image 
                src="/images/About_us_bottle_consuming.png"
                alt="Consuming Flow Up"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              viewport={{ once: true }}
              className="absolute top-[65%] md:top-[70%] left-1/2 z-20 bg-white/90 backdrop-blur-md shadow-2xl border border-white/50 p-5 md:p-8 rounded-2xl text-center w-[90%] max-w-[320px] md:max-w-sm"
            >
              <p className="font-serif italic text-lg md:text-2xl font-medium text-gray-900 leading-snug">
                "Hydration is not a habit.<br />It's a lifestyle."
              </p>
            </motion.div>
          </div>

          {/* Story Text */}
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView">
            <h2 className="mb-8">The Flow Up Journey</h2>
            <div className="space-y-6 text-gray-600 text-body">
              <p>
                Every great brand begins with a simple idea. Flow Up was born when two passionate entrepreneurs noticed a growing need for high-quality, trustworthy bottled water that people could rely on every day.
              </p>
              <p>
                While the bottled water market was expanding rapidly, they saw an opportunity to create a brand that focused not only on hydration but also on purity, quality, and customer trust.
              </p>
              <p>
                Driven by a shared vision, they embarked on a journey to understand consumer needs, industry standards, and the importance of delivering a consistently refreshing experience. Countless hours were spent researching water quality, packaging, branding, and customer expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aayuneer Enterprises Vision */}
      <section className="py-24 bg-[#151512] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/20 via-[#151512] to-[#151512] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div variants={revealVariants} initial="initial" whileInView="whileInView">
            <span className="eyebrow block mb-4 text-gold">Our Foundation</span>
            <h2 className="mb-8">Under the banner of Aayuneer Enterprises</h2>
            <div className="space-y-6 text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                What started as a conversation soon evolved into a mission—to build a bottled water brand that people would choose with absolute confidence. Flow Up became the very first step toward that grand vision.
              </p>
              <p>
                Every bottle was designed to represent freshness, reliability, and an unwavering commitment to excellence. We believe that hydration is essential to everyday life, and our product exists to support healthier, more active lifestyles for everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Values */}
      {/* Vision & Mission */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: -100, borderColor: "transparent" }}
              whileInView={{ opacity: 1, x: 0, borderColor: "rgba(201, 169, 110, 0.3)" }}
              transition={{ 
                opacity: { duration: 0.8 }, 
                x: { duration: 0.8, ease: "easeOut" },
                borderColor: { delay: 0.8, duration: 1 } 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#151512] text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border-2 border-transparent"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-gold/20 transition-all duration-700" />
              <Compass className="w-12 h-12 text-gold mb-8 relative z-10" />
              <h2 className="text-3xl text-white mb-6 relative z-10 font-serif">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-light">
                To become the most trusted and leading FMCG brand delivering superior-quality products that enhance everyday lives while setting benchmarks for excellence, innovation, and customer satisfaction across every market we serve.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: 100, borderColor: "transparent" }}
              whileInView={{ opacity: 1, x: 0, borderColor: "rgba(59, 130, 246, 0.3)" }}
              transition={{ 
                opacity: { duration: 0.8 }, 
                x: { duration: 0.8, ease: "easeOut" },
                borderColor: { delay: 0.8, duration: 1 } 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#151512] text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border-2 border-transparent"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 group-hover:bg-blue-500/20 transition-all duration-700" />
              <Target className="w-12 h-12 text-blue-400 mb-8 relative z-10" />
              <h2 className="text-3xl text-white mb-6 relative z-10 font-serif">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-light">
                To establish ourselves as the foremost FMCG brand renowned for delivering exceptional quality products, creating customer trust, and delivering sustainable growth through innovation and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2>Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Purity First", icon: <Droplets className="w-8 h-8 text-blue-500" />, desc: "Committed to delivering clean, safe, and refreshing hydration that meets the highest quality standards." },
              { title: "Quality Excellence", icon: <ShieldCheck className="w-8 h-8 text-gold" />, desc: "Crafted with attention to detail, ensuring consistency, reliability, and customer satisfaction." },
              { title: "Customer Trust", icon: <HeartHandshake className="w-8 h-8 text-emerald-500" />, desc: "Trust is our foundation. We build lasting relationships through transparency and dependable products." },
              { title: "Innovation & Growth", icon: <Lightbulb className="w-8 h-8 text-purple-500" />, desc: "Continuously seeking better solutions, improved processes, and new opportunities to enhance our offerings." },
              { title: "Sustainability", icon: <Leaf className="w-8 h-8 text-green-600" />, desc: "Responsible business practices that support environmental awareness and a better future." },
              { title: "Integrity", icon: <CheckCircle className="w-8 h-8 text-indigo-500" />, desc: "Conducting our business with honesty, accountability, and respect for our customers and communities." },
              { title: "Wellness & Hydration", icon: <Activity className="w-8 h-8 text-rose-500" />, desc: "Promoting healthy lifestyles by making quality hydration accessible and enjoyable for everyone." },
              { title: "Passion for Excellence", icon: <Star className="w-8 h-8 text-orange-500" />, desc: "Driven by a passion to exceed expectations and create products that people can trust every day." }
            ].map((val, i) => (
              <motion.div 
                key={i}
                variants={revealVariants} initial="initial" whileInView="whileInView"
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-xl mb-3">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
