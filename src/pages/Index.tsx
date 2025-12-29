import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Briefcase, Mail } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { FloatingElements } from "@/components/3d/FloatingElements";
import { GlowButton } from "@/components/ui/GlowButton";
import { MagneticElement } from "@/components/ui/MagneticElement";
import { AnimatedLetters, TypewriterText } from "@/components/ui/AnimatedText";

const Hero = () => {
  return (
    <PageTransition>
      <ParticleBackground />
      <FloatingElements />
      
      <div className="relative min-h-screen flex flex-col">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        
        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-6 pt-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400"
              />
              <span className="text-sm font-accent text-muted-foreground">
                CSE Student • Open to Opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <AnimatedLetters delay={0.5} className="gradient-text">
                  PRAVEEN V
                </AnimatedLetters>
                <br />
                <span className="text-foreground">
                  <AnimatedLetters delay={0.8}>
                    DEVELOPER
                  </AnimatedLetters>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle with typewriter effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                <TypewriterText delay={1.4}>
                  Computer Science & Engineering Student
                </TypewriterText>
                <br />
                <TypewriterText delay={1.8}>
                  Passionate Developer
                </TypewriterText>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <MagneticElement strength={0.4}>
                <Link to="/projects">
                  <GlowButton variant="primary" size="lg">
                    View Projects
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </GlowButton>
                </Link>
              </MagneticElement>

              <MagneticElement strength={0.4}>
                <Link to="/contact">
                  <GlowButton variant="ghost" size="lg">
                    Get in Touch
                  </GlowButton>
                </Link>
              </MagneticElement>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs font-accent uppercase tracking-widest text-muted-foreground">
                  Scroll to explore
                </span>
                <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>

        {/* Stats section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="relative py-16 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[
                { icon: Code2, value: "3", label: "Projects Completed" },
                { icon: Briefcase, value: "CSE", label: "Engineering Student" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-accent">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Hero;
