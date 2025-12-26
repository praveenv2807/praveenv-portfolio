import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticElement } from "@/components/ui/MagneticElement";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "@developer",
    stats: { repos: 120, contributions: "2.5k", followers: "1.2k" },
    color: "#00d4ff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    link: "https://github.com",
  },
  {
    name: "LeetCode",
    username: "@coder",
    stats: { solved: 450, ranking: "Top 5%", streak: "120 days" },
    color: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.120 1.632l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 2.065-.076L21.823 19.5a1.374 1.374 0 0 0-.076-2.065l-3.854-4.126-5.406-5.788a5.266 5.266 0 0 0-1.209-2.104 5.35 5.35 0 0 0-.513-.125 5.527 5.527 0 0 0-2.362.062 5.83 5.83 0 0 0-1.017.349 5.938 5.938 0 0 0-1.632 1.120L3.9 8.956l5.406-5.788A1.374 1.374 0 0 0 13.483 0z"/>
      </svg>
    ),
    link: "https://leetcode.com",
  },
  {
    name: "CodeChef",
    username: "@chef_coder",
    stats: { rating: "2100+", stars: "5★", solved: 300 },
    color: "#ec4899",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
        <path d="M11.999 1.575c-.548 0-1.097.065-1.633.196l.186.473c.073.186.127.377.165.571.548-.095 1.107-.143 1.67-.143.563 0 1.122.048 1.67.143.038-.194.092-.385.165-.571l.186-.473a9.342 9.342 0 0 0-2.409-.196zM9.01 2.592a9.403 9.403 0 0 0-4.085 2.393l.363.32c.145.127.28.264.406.408a8.225 8.225 0 0 1 3.561-2.086c.022-.198.065-.393.128-.581l-.373-.454zm5.98 0l-.373.454c.063.188.106.383.128.581a8.225 8.225 0 0 1 3.561 2.086c.126-.144.261-.281.406-.408l.363-.32a9.403 9.403 0 0 0-4.085-2.393zM12 4.407c-4.194 0-7.593 3.4-7.593 7.593S7.806 19.593 12 19.593s7.593-3.4 7.593-7.593S16.194 4.407 12 4.407z"/>
      </svg>
    ),
    link: "https://codechef.com",
  },
  {
    name: "HackerRank",
    username: "@hacker",
    stats: { badges: 25, rank: "Gold", score: "1500+" },
    color: "#00d4ff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.896c-.071-.04-.157-.04-.228 0L7.42 6.429c-.073.045-.122.127-.122.221 0 .143.115.258.258.258h.703v10.035c0 .141.115.254.258.254h6.969c.143 0 .258-.115.258-.258V6.908h.699c.143 0 .258-.115.258-.258a.259.259 0 0 0-.122-.221L15.002 4.896a.226.226 0 0 0-.228 0l-1.578 1.533a.259.259 0 0 0-.123.221c0 .143.115.258.258.258h.703v3.875h-4.074V6.908h.699c.141 0 .254-.115.254-.258 0-.094-.049-.176-.122-.221l-1.573-1.533a.226.226 0 0 0-.228 0z"/>
      </svg>
    ),
    link: "https://hackerrank.com",
  },
];

const CodingProfiles = () => {
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
              Coding Profiles
            </motion.span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Competitive</span>
              <br />
              <span className="text-foreground">Programming</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Check out my coding journey across different platforms and see my problem-solving stats.
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              >
                <MagneticElement strength={0.3}>
                  <a href={profile.link} target="_blank" rel="noopener noreferrer">
                    <GlassCard className="group h-full overflow-hidden">
                      {/* Background glow */}
                      <motion.div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{ backgroundColor: profile.color }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              style={{ color: profile.color }}
                              className="group-hover:drop-shadow-[0_0_20px_currentColor] transition-all"
                            >
                              {profile.icon}
                            </motion.div>
                            <div>
                              <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                                {profile.name}
                              </h3>
                              <p className="text-muted-foreground font-accent">
                                {profile.username}
                              </p>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="p-2 rounded-lg bg-muted group-hover:bg-primary/20 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </motion.div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(profile.stats).map(([key, value], statIndex) => (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + index * 0.15 + statIndex * 0.1, duration: 0.4 }}
                              className="text-center p-3 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors"
                            >
                              <div 
                                className="font-display text-xl font-bold mb-1"
                                style={{ color: profile.color }}
                              >
                                {value}
                              </div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wider font-accent">
                                {key}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </a>
                </MagneticElement>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CodingProfiles;
