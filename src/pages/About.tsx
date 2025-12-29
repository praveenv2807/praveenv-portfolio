import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Code2, color: "primary", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
  { name: "Backend", icon: Database, color: "secondary", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
  { name: "Design", icon: Palette, color: "accent", items: ["Figma", "Adobe XD", "UI/UX", "Motion Design"] },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
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
              About Me
            </motion.span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Crafting Digital</span>
              <br />
              <span className="text-foreground">Experiences</span>
            </h1>
          </motion.div>

          {/* Bio Section */}
          <div className="max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <GlassCard className="h-full">
                <h2 className="font-display text-2xl font-bold mb-4 text-primary">
                  The Journey
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi, I'm Praveen V — a Computer Science and Engineering student with a 
                    deep passion for building innovative digital solutions and exploring 
                    cutting-edge technologies.
                  </p>
                  <p>
                    My journey in tech is driven by curiosity and a love for problem-solving. 
                    I enjoy creating experiences that are not only visually stunning but also 
                    highly functional and user-friendly.
                  </p>
                  <p>
                    I'm always eager to learn and grow, and I believe in turning ideas into 
                    reality through code. Currently seeking opportunities to contribute to 
                    impactful projects and collaborate with talented teams.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="group h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-lg bg-${skill.color}/10 group-hover:bg-${skill.color}/20 transition-colors`}
                      >
                        <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                      </motion.div>
                      <h3 className="font-display text-xl font-semibold">{skill.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <motion.span
                          key={item}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item}
                        </motion.span>
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

export default About;
