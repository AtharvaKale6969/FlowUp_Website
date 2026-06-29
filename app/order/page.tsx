"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { revealVariants } from "@/lib/animations";
import { FAQS } from "@/lib/constants";
import { ChevronDown, ExternalLink, Leaf, ShieldCheck, Droplets, Info, ShoppingCart, Package, Tag, Gift, Truck } from "lucide-react";

export default function Order() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openSpecIndex, setOpenSpecIndex] = useState<number | null>(0); // First accordion open by default
  const [activeTab, setActiveTab] = useState<"500ml" | "1L">("500ml");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const products = {
    "500ml": {
      title: "Flow Up 500ml",
      pack: "Pack of 24",
      price: "₹170",
      description: "Perfect for on-the-go hydration. Our 500ml bottles come in a convenient pack of 24, ensuring you stay refreshed whether you're at the gym, in the office, or running errands.",
      images: [
        "/images/500ml 24bottles.jpeg",
        "/images/bottle.png",
        "/images/Shop_1.jpg",
        "/images/Shop_3.jpg",
        "/images/Flow_up_shop_5.png"
      ]
    },
    "1L": {
      title: "Flow Up 1 Litre",
      pack: "Pack of 12",
      price: "₹140",
      description: "Ideal for daily home use or long road trips. Our 1 Litre bottles come in a pack of 12, offering exceptional value and pure, crystal clear hydration for the whole family.",
      images: [
        "/images/1L 12bottles.png",
        "/images/bottle.png",
        "/images/Shop_1.jpg",
        "/images/Shop_3.jpg",
        "/images/Flow_up_shop_5.png"
      ]
    }
  };

  const specs = [
    {
      title: "Product Details",
      content: "Flow Up offers the purest mineral water sourced directly from pristine natural springs. Packaged in a beautifully designed, 100% recyclable, transparent plastic bottle."
    },
    {
      title: "Mineral Composition",
      content: "Naturally infused with essential minerals including Calcium, Magnesium, and Potassium. Our proprietary filtration process ensures absolute purity while retaining these life-enhancing minerals."
    },
    {
      title: "Shipping & Delivery",
      content: "Orders placed through our partner platforms (Amazon, Flipkart, Meesho) are fulfilled by their premium delivery networks, ensuring fast, safe, and trackable shipping directly to your doorstep."
    }
  ];

  const currentProduct = products[activeTab];

  return (
    <div className="bg-transparent min-h-screen pb-24">
      {/* Hero Intro - Cinematic Dark Theme */}
      <section className="relative pt-32 pb-24 mb-16 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold rounded-full blur-[120px] opacity-20 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] opacity-20 translate-y-1/4 pointer-events-none" />
        
        {/* Theme Doodles */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]">
          <ShoppingCart className="absolute top-[15%] left-[10%] w-12 h-12 text-white -rotate-12" />
          <Package className="absolute top-[25%] right-[20%] w-14 h-14 text-white rotate-12" />
          <Tag className="absolute top-[60%] left-[15%] w-10 h-10 text-white rotate-45" />
          <Gift className="absolute bottom-[20%] right-[10%] w-16 h-16 text-white -rotate-12" />
          <Truck className="absolute bottom-[10%] left-[30%] w-14 h-14 text-white rotate-12" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow block mb-4 text-gold">Direct to Doorstep</span>
            <h1 className="mb-6 relative inline-block text-white">
              Order Flow Up
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold origin-left rounded-full"
              />
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl font-light mt-2">
              Experience the purest hydration delivered directly to your home or office.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* E-commerce Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-32 items-start">
          {/* Image Gallery Column (Sticky) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:sticky lg:top-32">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-[2rem] p-12 flex items-center justify-center relative aspect-square overflow-hidden group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-12"
                >
                  <Image 
                    src={currentProduct.images[activeImageIndex]} 
                    alt={`Flow Up Product View ${activeImageIndex + 1}`} 
                    fill 
                    className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Thumbnails */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 overflow-x-auto pb-4 snap-x hide-scrollbar"
            >
              {currentProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 snap-center cursor-pointer ${
                    activeImageIndex === idx ? "border-gold shadow-sm scale-100" : "border-transparent bg-gray-50 hover:border-gray-200 opacity-70 hover:opacity-100 scale-95 hover:scale-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-contain p-3" />
                </button>
              ))}
            </motion.div>
          </div>

          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <span className="eyebrow block mb-4 text-gray-500">Premium Hydration</span>
            
            {/* Dynamic Content Header */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mb-8"
              >
                <h1 className="mb-2 text-4xl md:text-5xl font-sans tracking-tight">{currentProduct.title}</h1>
                <p className="text-3xl font-medium text-gray-900 mt-4 mb-2">{currentProduct.price}</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{currentProduct.pack}</p>
              </motion.div>
            </AnimatePresence>

            {/* Tabs for Size Variant Selection */}
            <div className="mb-8">
              <span className="block text-sm font-semibold mb-3 text-gray-900">Select Size Variant</span>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setActiveTab("500ml")}
                  className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border-2 ${activeTab === "500ml" ? "border-gold bg-gold/5 text-gold shadow-sm" : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-white"}`}
                >
                  500ml
                </button>
                <button 
                  onClick={() => setActiveTab("1L")}
                  className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border-2 ${activeTab === "1L" ? "border-gold bg-gold/5 text-gold shadow-sm" : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-white"}`}
                >
                  1 Litre
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-gray-100">
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Leaf className="text-gold" size={20} />
                </div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">100% Recyclable</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-gold" size={20} />
                </div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">BPA Free</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Droplets className="text-gold" size={20} />
                </div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Mineral Infused</span>
              </div>
            </div>

            {/* Dynamic Description Snippet */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab + "-desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-10"
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  {currentProduct.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Vendor CTA Buttons */}
            <div className="bg-gray-50 p-6 rounded-3xl mb-10 border border-gray-100">
              <span className="block text-sm font-semibold mb-4 text-gray-900 text-center uppercase tracking-widest">Available exclusively on</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="flex-1 px-4 py-4 bg-white text-[#FF9900] border border-gray-200 shadow-sm rounded-xl font-bold text-center hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition-all flex items-center justify-center">
                  Amazon <ExternalLink size={14} className="ml-2 opacity-70" />
                </a>
                <a href="#" className="flex-1 px-4 py-4 bg-white text-[#047BD5] border border-gray-200 shadow-sm rounded-xl font-bold text-center hover:bg-[#047BD5] hover:text-white hover:border-[#047BD5] transition-all flex items-center justify-center">
                  Flipkart <ExternalLink size={14} className="ml-2 opacity-70" />
                </a>
                <a href="#" className="flex-1 px-4 py-4 bg-white text-[#F43397] border border-gray-200 shadow-sm rounded-xl font-bold text-center hover:bg-[#F43397] hover:text-white hover:border-[#F43397] transition-all flex items-center justify-center">
                  Meesho <ExternalLink size={14} className="ml-2 opacity-70" />
                </a>
              </div>
            </div>

            {/* Product Specifications Accordion */}
            <div className="space-y-3">
              {specs.map((spec, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-sm transition-shadow">
                  <button
                    onClick={() => setOpenSpecIndex(openSpecIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className="font-semibold text-gray-900 flex items-center">
                      <Info size={16} className="text-gray-400 mr-3" />
                      {spec.title}
                    </span>
                    <motion.div
                      animate={{ rotate: openSpecIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4 text-gray-400"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openSpecIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2 pt-4">
                          {spec.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Mineral Composition Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-24 pt-20 border-t border-gray-100"
        >
          <div className="text-center mb-12">
            <span className="eyebrow block mb-4 text-gold">Purity in Every Drop</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Mineral Composition</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our natural spring water is carefully filtered to preserve essential life-enhancing minerals, ensuring perfect balance and taste.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="py-6 px-8 font-serif font-semibold text-gray-900 text-lg w-2/3">Parameter</th>
                  <th className="py-6 px-8 font-serif font-semibold text-gray-900 text-lg text-right w-1/3">Typical Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-gray-50/80 transition-colors group">
                  <td className="py-5 px-8 text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Energy</td>
                  <td className="py-5 px-8 text-gray-900 font-semibold text-right">0 Kcal</td>
                </tr>
                <tr className="hover:bg-gray-50/80 transition-colors group">
                  <td className="py-5 px-8 text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Carbohydrates</td>
                  <td className="py-5 px-8 text-gray-900 font-semibold text-right">0 g</td>
                </tr>
                <tr className="hover:bg-gray-50/80 transition-colors group">
                  <td className="py-5 px-8 text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Calcium</td>
                  <td className="py-5 px-8 text-gray-900 font-semibold text-right">1.0 mg</td>
                </tr>
                <tr className="hover:bg-gray-50/80 transition-colors group">
                  <td className="py-5 px-8 text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Sodium</td>
                  <td className="py-5 px-8 text-gray-900 font-semibold text-right">1.0 mg</td>
                </tr>
                <tr className="hover:bg-gray-50/80 transition-colors group">
                  <td className="py-5 px-8 text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Magnesium</td>
                  <td className="py-5 px-8 text-gray-900 font-semibold text-right">0.5 mg</td>
                </tr>
                <tr className="hover:bg-gray-50/80 transition-colors group">
                  <td className="py-5 px-8 text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Total Dissolved Solids (TDS)</td>
                  <td className="py-5 px-8 text-gray-900 font-semibold text-right">~ 75 mg/L</td>
                </tr>
                <tr className="hover:bg-gray-50/80 transition-colors group">
                  <td className="py-5 px-8 text-gray-600 font-medium group-hover:text-gray-900 transition-colors">pH Value</td>
                  <td className="py-5 px-8 text-gray-900 font-semibold text-right">7.4 ± 0.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="max-w-3xl mx-auto pt-20 border-t border-gray-100">
          <div className="text-center mb-12">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-sm transition-shadow">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-serif font-medium text-lg text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4 text-gold"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-gray-600 text-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
