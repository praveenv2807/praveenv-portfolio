import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { MagneticElement } from "@/components/ui/MagneticElement";
import { Download, FileText, Eye, ArrowRight } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // In a real app, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    // link.click();
    alert('Resume download would start here!');
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full glass-card text-sm font-accent uppercase tracking-wider text-primary mb-4"
            >
              Resume
            </motion.span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">My Professional</span>
              <br />
              <span className="text-foreground">Journey</span>
            </h1>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <GlassCard className="relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              
              <div className="relative z-10 p-8">
                {/* Resume Preview */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="aspect-[8.5/11] max-w-md mx-auto mb-8 rounded-lg bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden relative"
                >
                  {/* Simulated resume content */}
                  <div className="absolute inset-0 p-6 space-y-4">
                    <div className="h-8 w-32 bg-primary/20 rounded" />
                    <div className="h-4 w-48 bg-muted-foreground/20 rounded" />
                    <div className="h-3 w-36 bg-muted-foreground/10 rounded" />
                    <div className="mt-6 space-y-2">
                      <div className="h-3 w-full bg-muted-foreground/10 rounded" />
                      <div className="h-3 w-5/6 bg-muted-foreground/10 rounded" />
                      <div className="h-3 w-4/6 bg-muted-foreground/10 rounded" />
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="h-4 w-24 bg-secondary/20 rounded" />
                      <div className="h-3 w-full bg-muted-foreground/10 rounded" />
                      <div className="h-3 w-5/6 bg-muted-foreground/10 rounded" />
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="h-4 w-20 bg-accent/20 rounded" />
                      <div className="h-3 w-full bg-muted-foreground/10 rounded" />
                      <div className="h-3 w-4/6 bg-muted-foreground/10 rounded" />
                    </div>
                  </div>

                  {/* Overlay with icon */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                      <span className="text-foreground font-accent">Click to preview</span>
                    </div>
                  </motion.div>

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <MagneticElement strength={0.3}>
                    <GlowButton
                      variant="primary"
                      size="lg"
                      onClick={handleDownload}
                      className="group"
                    >
                      <motion.span
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        Download Resume
                      </motion.span>
                    </GlowButton>
                  </MagneticElement>

                  <MagneticElement strength={0.3}>
                    <GlowButton variant="ghost" size="lg" className="group">
                      <Eye className="w-5 h-5 mr-2" />
                      Preview Online
                    </GlowButton>
                  </MagneticElement>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Want to know more about my work?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/projects" className="group inline-flex items-center gap-2 text-primary hover:underline">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="group inline-flex items-center gap-2 text-primary hover:underline">
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
