import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product catalog, shopping cart, secure checkout, and order management for seamless online shopping experience.",
    image: "linear-gradient(135deg, #00d4ff20, #8b5cf620)",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    id: "fitness-website",
    title: "Fitness Website",
    description: "Comprehensive fitness platform with workout planning, exercise tutorials, progress tracking, and personalized health recommendations.",
    image: "linear-gradient(135deg, #8b5cf620, #ec489920)",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#",
    github: "#",
  },
  {
    id: "house-rental",
    title: "House Rental Website",
    description: "Modern property rental platform with listings, search filters, booking system, and user reviews for finding the perfect rental home.",
    image: "linear-gradient(135deg, #ec489920, #00d4ff20)",
    tags: ["React", "Node.js", "MongoDB", "Maps API"],
    link: "#",
    github: "#",
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              >
                <GlassCard className="h-full group overflow-hidden">
                  {/* Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="aspect-video rounded-xl overflow-hidden mb-6"
                    style={{ background: project.image }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                        className="font-display text-5xl font-bold text-foreground/20"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                    className="text-primary font-accent text-sm uppercase tracking-wider mb-2 block"
                  >
                    Featured Project
                  </motion.span>
                  <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
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
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <GlowButton variant="primary" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </GlowButton>
                    <GlowButton variant="ghost" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </GlowButton>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
