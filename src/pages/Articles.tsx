import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { GlassCard } from "@/components/ui/GlassCard";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    id: "building-scalable-react",
    title: "Building Scalable React Applications in 2024",
    excerpt: "Discover the best practices and patterns for creating maintainable React applications that can grow with your business needs.",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    category: "React",
    color: "#00d4ff",
  },
  {
    id: "mastering-typescript",
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt: "Deep dive into advanced TypeScript patterns including generics, conditional types, and mapped types for better code quality.",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    category: "TypeScript",
    color: "#8b5cf6",
  },
  {
    id: "web-performance",
    title: "Web Performance Optimization Techniques",
    excerpt: "Learn how to optimize your web applications for speed and user experience with modern performance techniques.",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    category: "Performance",
    color: "#ec4899",
  },
  {
    id: "ai-integration",
    title: "Integrating AI into Web Applications",
    excerpt: "A comprehensive guide to adding AI-powered features to your web applications using modern APIs and frameworks.",
    date: "Dec 5, 2024",
    readTime: "15 min read",
    category: "AI/ML",
    color: "#00d4ff",
  },
  {
    id: "design-systems",
    title: "Creating Design Systems That Scale",
    excerpt: "How to build and maintain design systems that enable teams to ship consistent, high-quality products faster.",
    date: "Nov 28, 2024",
    readTime: "11 min read",
    category: "Design",
    color: "#8b5cf6",
  },
];

const Articles = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
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
              Blog
            </motion.span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Featured</span>
              <br />
              <span className="text-foreground">Articles</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Thoughts, tutorials, and insights about web development, design, and technology.
            </p>
          </motion.div>

          {/* Articles List */}
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Link to={`/articles/${article.id}`}>
                  <GlassCard className="group">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Category Badge */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="shrink-0"
                      >
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-accent uppercase tracking-wider"
                          style={{ 
                            backgroundColor: `${article.color}20`,
                            color: article.color,
                          }}
                        >
                          {article.category}
                        </span>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{article.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 10 }}
                        className="shrink-0"
                      >
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.div>
                    </div>

                    {/* Reading Progress Bar (decorative) */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;
