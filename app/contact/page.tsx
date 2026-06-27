"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Headphones, Globe } from "lucide-react";

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XLogo = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);
import { revealVariants } from "@/lib/animations";
import { useParallaxLayer } from "@/lib/parallax";

export default function Contact() {
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
            <Headphones className="absolute top-[12%] left-[15%] w-12 h-12 text-white -rotate-12" />
            <MapPin className="absolute top-[25%] right-[22%] w-14 h-14 text-white rotate-12" />
            <MessageCircle className="absolute top-[60%] left-[8%] w-16 h-16 text-white rotate-45" />
            <Mail className="absolute bottom-[20%] left-[25%] w-12 h-12 text-white -rotate-12" />
            <Send className="absolute bottom-[10%] right-[15%] w-14 h-14 text-white rotate-12" />
            <Globe className="absolute top-[40%] right-[5%] w-12 h-12 text-white -rotate-6" />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow block mb-4 text-gold">Get in Touch</span>
            <h1 className="mb-6 relative inline-block text-white">
              We're here to <span className="text-gold italic font-serif">help.</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left rounded-full"
              />
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl font-light">
              Whether you have a question about our products, need support with an order, or are interested in wholesale, our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Introductory Content */}
        <div className="max-w-3xl mx-auto mb-16 lg:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Let's start a conversation.</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                At Flow Up, we believe that great hydration starts with great relationships. Whether you're a retail partner looking to stock premium mineral water, an organization interested in our sustainability initiatives, or simply someone who wants to learn more about our proprietary filtration process, we're always here to listen.
              </p>
              <p>
                Operating proudly out of our Nagpur headquarters, we are committed to delivering the highest quality hydration across our dedicated 200KM service area. Reach out to our team using the details below, and let's explore how we can flow up together.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div 
            variants={revealVariants} 
            initial="initial" 
            animate="whileInView" 
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-2xl mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center text-gold flex-shrink-0 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg mb-1 font-medium text-gray-900">Email</h3>
                  <a href="mailto:sales@flowupdrinks.com" className="text-gray-900 font-medium hover:text-gold transition-colors">sales@flowupdrinks.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center text-gold flex-shrink-0 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg mb-1 font-medium text-gray-900">Contact</h3>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919763562944" className="text-gray-900 font-medium hover:text-gold transition-colors">+91 9763562944</a>
                    <a href="tel:+917123100024" className="text-gray-900 font-medium hover:text-gold transition-colors">+91 7123100024</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center text-gold flex-shrink-0 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg mb-1 font-medium text-gray-900">Register Office</h3>
                  <address className="text-gray-900 font-medium not-italic leading-relaxed">
                    Plot no 12A, 1st Floor, Smruti Nagar Rd,<br />
                    Smruti Nagar, Koradi, Bokara,<br />
                    Nagpur, Maharashtra 441111
                  </address>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg mb-4 font-medium text-gray-900">Connect with us on social media</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 hover:text-white hover:bg-gold transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 hover:text-white hover:bg-gold transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 hover:text-white hover:bg-gold transition-colors" aria-label="X (Twitter)">
                    <XLogo size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 bg-gray-50 rounded-[2rem] p-4 md:p-8 border border-gray-100 overflow-hidden"
          >
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-inner relative">
              {/* Google Maps Embed */}
              <iframe
                src="https://maps.google.com/maps?q=Plastroots+Waste+Management+Solutions+Nagpur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[20%] contrast-125"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
