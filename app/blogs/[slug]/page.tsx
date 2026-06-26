"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BLOGS } from "@/lib/constants";
import { revealVariants } from "@/lib/animations";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const blog = BLOGS.find((b) => b.slug === slug) || BLOGS[0];

  const related = BLOGS.filter(b => b.slug !== slug).slice(0, 2);

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/blogs" className="inline-flex items-center text-gray-500 hover:text-gold transition-colors mb-10 font-medium">
          <ArrowLeft size={16} className="mr-2" /> Back to Journal
        </Link>

        {/* Hero */}
        <motion.div variants={revealVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="mb-12">
          <span className="eyebrow block mb-4">{blog.tag}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{blog.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-6 border-y border-gray-100 py-4">
            <span className="flex items-center"><Calendar size={16} className="mr-2" /> {blog.date}</span>
            <span className="flex items-center"><Clock size={16} className="mr-2" /> {blog.readTime}</span>
            <span className="flex items-center">By <span className="text-gray-900 font-medium ml-1">Flow Up Team</span></span>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`w-full aspect-video md:aspect-[21/9] rounded-[2rem] mb-16 relative overflow-hidden ${blog.image}`}
        >
          <div className="absolute inset-0 bg-black/5" />
        </motion.div>

        {/* Content */}
        <motion.div 
          variants={revealVariants} 
          initial="initial" 
          whileInView="whileInView" 
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-gray-600 prose-headings:font-serif prose-headings:font-medium prose-headings:text-gray-900 prose-p:font-light prose-p:leading-loose mb-24"
        >
          <p className="text-xl md:text-2xl font-serif text-gray-900 mb-8 italic">
            {blog.excerpt}
          </p>
          
          <p>
            {blog.content}
          </p>
          
          {/* Mock rich text content to make it look like a full blog post */}
          <h2 className="mt-12">The Impact on Daily Life</h2>
          <p>
            When we zoom out and look at the broader implications, the choices we make about what we drink from 
            are just as important as what we drink. The materials interacting with your water over a 24-hour period 
            can fundamentally alter its composition.
          </p>
          <p>
            In our next phase of research, we plan to continue pushing the boundaries of what is possible with 
            food-grade materials, ensuring that Flow Up remains at the absolute cutting edge of hydration technology.
          </p>
        </motion.div>

        {/* Related Posts */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl mb-10">More from the Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((b, i) => (
              <Link href={`/blogs/${b.slug}`} key={i} className="group">
                <div className={`aspect-video rounded-2xl mb-4 overflow-hidden relative ${b.image}`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="text-xl font-serif group-hover:text-gold transition-colors mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
