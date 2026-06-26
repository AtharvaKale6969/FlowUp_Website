"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  topBarVariants,
  midBarVariants,
  botBarVariants,
  mobileMenuVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/order" },
  { name: "Benefits", href: "/benefits" },
  { name: "Lab & Certs", href: "/lab" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-[18px] shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className={`text-2xl font-serif font-bold tracking-tight z-50 relative ${isScrolled || isOpen ? "text-gray-900" : "text-white"}`}>
            Flow <span className="text-gold italic">Up</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold relative group ${
                  pathname === link.href ? (isScrolled || isOpen ? "text-gray-900" : "text-white") : (isScrolled || isOpen ? "text-gray-600" : "text-gray-300")
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/order"
              className={`${isScrolled || isOpen ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-gold hover:text-white hover:shadow-lg hover:-translate-y-0.5 inline-block`}
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.span
              variants={topBarVariants}
              animate={isOpen ? "open" : "closed"}
              className={`w-6 h-[2px] block rounded-full ${isScrolled || isOpen ? "bg-gray-900" : "bg-white"}`}
            />
            <motion.span
              variants={midBarVariants}
              animate={isOpen ? "open" : "closed"}
              className={`w-6 h-[2px] block rounded-full ${isScrolled || isOpen ? "bg-gray-900" : "bg-white"}`}
            />
            <motion.span
              variants={botBarVariants}
              animate={isOpen ? "open" : "closed"}
              className={`w-6 h-[2px] block rounded-full ${isScrolled || isOpen ? "bg-gray-900" : "bg-white"}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <motion.div
              variants={staggerContainerVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col space-y-6"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={staggerItemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-serif font-medium tracking-tight block ${
                      pathname === link.href ? "text-gold" : "text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={staggerItemVariants} className="pt-8">
                <Link
                  href="/order"
                  onClick={() => setIsOpen(false)}
                  className="bg-gold text-white px-8 py-4 rounded-full text-lg font-medium w-full block text-center shadow-lg"
                >
                  Order Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
