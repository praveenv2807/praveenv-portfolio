import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/coding-profiles", label: "Profiles" },
  { path: "/resume", label: "Resume" },
  { path: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="glass-card flex items-center justify-between px-6 py-4">
            <Link to="/" className="group flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent p-[2px]"
              >
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-background font-display text-lg font-bold text-primary">
                  P
                </div>
              </motion.div>
              <span className="font-display text-lg font-semibold tracking-wider gradient-text">
                PORTFOLIO
              </span>
            </Link>

            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="relative px-4 py-2 font-accent text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
                  >
                    <span className={location.pathname === link.path ? "text-primary" : "text-foreground/70"}>
                      {link.label}
                    </span>
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link to="/social">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="glow-button text-sm"
              >
                Connect
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="mx-4 my-4">
          <div className="glass-card flex items-center justify-between px-4 py-3">
            <Link to="/" className="font-display text-lg font-bold gradient-text">
              PORTFOLIO
            </Link>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 text-foreground"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-2xl font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                      location.pathname === link.path ? "gradient-text" : "text-foreground/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link to="/social" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glow-button mt-4"
                  >
                    Connect With Me
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
