import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  stagger = 0.03,
}: AnimatedTextProps) => {
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-2 inline-block"
          style={{ perspective: "1000px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface AnimatedLettersProps {
  children: string;
  className?: string;
  delay?: number;
}

export const AnimatedLetters = ({
  children,
  className = "",
  delay = 0,
}: AnimatedLettersProps) => {
  const letters = children.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface TypewriterTextProps {
  children: string;
  className?: string;
  delay?: number;
  cursor?: boolean;
}

export const TypewriterText = ({
  children,
  className = "",
  delay = 0,
  cursor = true,
}: TypewriterTextProps) => {
  const letters = children.split("");

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.05,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="ml-1 inline-block h-[1em] w-[3px] bg-primary align-middle"
        />
      )}
    </span>
  );
};
