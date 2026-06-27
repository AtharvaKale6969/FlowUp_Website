// Framer Motion Animation Specs

// Section reveal on scroll
export const revealVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, margin: "-20px" }
};

// Card hover
export const cardHoverVariants = {
  whileHover: { y: -6, transition: { duration: 0.2 } }
};

// Mobile menu overlay
export const mobileMenuVariants = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: { type: "spring", stiffness: 300, damping: 30 }
};

// Mobile menu stagger items container
export const staggerContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

// Mobile menu individual link
export const staggerItemVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 }
};

// Top bar hamburger -> X
export const topBarVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: 45, translateY: 8 }
};

// Mid bar hamburger -> X
export const midBarVariants = {
  closed: { opacity: 1, scaleX: 1 },
  open: { opacity: 0, scaleX: 0 }
};

// Bot bar hamburger -> X
export const botBarVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: -45, translateY: -8 }
};
