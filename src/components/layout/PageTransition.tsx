import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
    },
  },
};

const slideVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
    },
  },
};

const curtainVariants = {
  initial: {
    scaleY: 1,
  },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
    },
  },
};

export const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <>
      {/* Curtain overlay for dramatic effect */}
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={curtainVariants}
        className="fixed inset-0 z-50 origin-top bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm pointer-events-none"
        style={{ transformOrigin: "top" }}
      />
      
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className={`min-h-screen ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};

export const SlideTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={slideVariants}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Child animation variants for staggered content
export const childVariants = {
  initial: { opacity: 0, y: 30 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9] as const,
    },
  },
};

export const staggerContainer = {
  enter: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
