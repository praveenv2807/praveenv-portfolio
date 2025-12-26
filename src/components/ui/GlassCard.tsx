import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  tilt?: boolean;
  glow?: boolean;
  borderGlow?: boolean;
}

export const GlassCard = ({
  children,
  tilt = true,
  glow = false,
  borderGlow = true,
  className,
  ...props
}: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tilt) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * -10;
    const rotateYValue = (mouseX / (rect.width / 2)) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    // Update glow position
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: tilt
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : undefined,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass-card relative overflow-hidden rounded-2xl p-6",
        glow && "pulse-glow",
        className
      )}
      {...props}
    >
      {/* Animated border gradient */}
      {borderGlow && (
        <div
          className="absolute inset-0 rounded-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, hsl(var(--primary) / 0.3), transparent 50%)`,
          }}
        />
      )}

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none"
        animate={{
          top: ["0%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content with 3D transform */}
      <div style={{ transform: "translateZ(40px)" }}>{children}</div>
    </motion.div>
  );
};
