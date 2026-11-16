import { motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

export default function Reveal({ children, delay = 0, className = "" }) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 800 }}
      initial={{ opacity: 0, y: 32, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}