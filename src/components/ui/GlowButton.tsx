import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

const variants = {
  primary: "bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 hover:border-primary text-foreground",
  secondary: "bg-gradient-to-r from-secondary/20 to-accent/20 border-secondary/50 hover:border-secondary text-foreground",
  accent: "bg-gradient-to-r from-accent/20 to-primary/20 border-accent/50 hover:border-accent text-foreground",
  ghost: "bg-transparent border-foreground/20 hover:border-foreground/50 text-foreground",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const glowColors = {
  primary: "hover:shadow-neon-cyan",
  secondary: "hover:shadow-neon-purple",
  accent: "hover:shadow-neon-magenta",
  ghost: "",
};

export const GlowButton = ({
  children,
  variant = "primary",
  size = "md",
  glow = true,
  className,
  ...props
}: GlowButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        "relative overflow-hidden rounded-lg border font-display font-semibold uppercase tracking-wider",
        "transition-all duration-300",
        variants[variant],
        sizes[size],
        glow && glowColors[variant],
        className
      )}
      {...props}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        animate={{ x: ["0%", "200%"] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
          repeatDelay: 1,
        }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Glow background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: `radial-gradient(circle at center, hsl(var(--${variant === "ghost" ? "primary" : variant}) / 0.3), transparent 70%)`,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};
