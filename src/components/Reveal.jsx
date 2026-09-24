import { motion, useReducedMotion } from "framer-motion";

const OFFSET = 32;

const VARIANTS = {
  up: {
    hidden: { opacity: 0, y: OFFSET, scale: 0.98, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  down: {
    hidden: { opacity: 0, y: -OFFSET, scale: 0.98, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: OFFSET, scale: 0.98, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: -OFFSET, scale: 0.98, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  },
  fade: {
    hidden: { opacity: 0, filter: "blur(6px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(6px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
};

const REDUCED_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Fades/slides/blurs children into view once, on scroll, with a soft spring
 * settle. Wraps a motion.div — pass layout classes via `className` since the
 * wrapper wants to stay a plain div.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.15,
  className = "",
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={prefersReducedMotion ? REDUCED_VARIANTS : VARIANTS[direction] ?? VARIANTS.up}
      transition={{
        duration: prefersReducedMotion ? 0.2 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
