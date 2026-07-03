import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "", delay = 0 }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
