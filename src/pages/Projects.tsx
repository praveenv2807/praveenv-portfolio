import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, AI-powered recommendations, and seamless checkout experience.",
    image: "linear-gradient(135deg, #00d4ff20, #8b5cf620)",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description: "Interactive data visualization platform with machine learning insights and predictive analytics capabilities.",
    image: "linear-gradient(135deg, #8b5cf620, #ec489920)",
    tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "social-app",
    title: "Social Media App",
    description: "Real-time social platform with video chat, stories, and community features built for scale.",
    image: "linear-gradient(135deg, #ec489920, #00d4ff20)",
    tags: ["React Native", "Firebase", "WebRTC", "Redis"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    description: "Drag-and-drop portfolio creation tool with customizable themes and one-click deployment.",
    image: "linear-gradient(135deg, #00d4ff20, #ec489920)",
    tags: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "Comprehensive fitness application with workout planning, progress tracking, and social challenges.",
    image: "linear-gradient(135deg, #8b5cf620, #00d4ff20)",
    tags: ["Flutter", "Dart", "Firebase", "HealthKit"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet",
    description: "Secure multi-chain cryptocurrency wallet with DeFi integrations and NFT support.",
    image: "linear-gradient(135deg, #ec489920, #8b5cf620)",
    tags: ["React", "Web3.js", "Solidity", "Ethereum"],
    link: "#",
    github: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full glass-card text-sm font-accent uppercase tracking-wider text-primary mb-4"
            >
              Portfolio
            </motion.span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Featured</span>
              <br />
              <span className="text-foreground">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A collection of projects that showcase my expertise in building modern, 
              scalable, and user-centric applications.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-20">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                <GlassCard className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Project Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="aspect-video lg:aspect-auto rounded-xl overflow-hidden"
                      style={{ background: project.image }}
                    >
                      <div className="w-full h-full min-h-[300px] flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                          className="font-display text-6xl font-bold text-foreground/20"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Project Info */}
                    <div className="flex flex-col justify-center p-4 lg:p-8">
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                        className="text-primary font-accent text-sm uppercase tracking-wider mb-2"
                      >
                        Featured Project
                      </motion.span>
                      <h2 className="font-display text-3xl font-bold mb-4">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + tagIndex * 0.1, duration: 0.3 }}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4">
                        <GlowButton variant="primary" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </GlowButton>
                        <GlowButton variant="ghost" size="sm">
                          <Github className="w-4 h-4 mr-2" />
                          Source
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold mb-8 text-center">
              <span className="gradient-text">More Projects</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="h-full group">
                    {/* Mini preview */}
                    <div 
                      className="aspect-video rounded-lg mb-4 overflow-hidden"
                      style={{ background: project.image }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="w-full h-full flex items-center justify-center bg-background/50 backdrop-blur-sm"
                      >
                        <ArrowRight className="w-8 h-8 text-primary" />
                      </motion.div>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
