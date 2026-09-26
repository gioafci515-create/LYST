import { motion, useReducedMotion } from "framer-motion";
import { EASE, DURATION } from "../lib/motion";

const OFFSET = 16; // spec: Y 12-20px

// Pattern A — opacity + vertical reveal (the default, used for text/content blocks)
const PATTERN_A = {
  up: { hidden: { opacity: 0, y: OFFSET }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -OFFSET }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: OFFSET }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -OFFSET }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
};

const REDUCED_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Pattern A reveal — fades/slides children into view once, on scroll.
 * Wraps a motion.div; pass layout classes via `className`.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = DURATION.editorial,
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
      variants={prefersReducedMotion ? REDUCED_VARIANTS : PATTERN_A[direction] ?? PATTERN_A.up}
      transition={{
        duration: prefersReducedMotion ? 0.2 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Pattern B — image mask reveal (clip-path expansion). Use for hero/feature
 * photography instead of Reveal when the element is a photo.
 */
export function RevealImage({ children, delay = 0, duration = DURATION.editorial, amount = 0.15, className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ clipPath: prefersReducedMotion ? "inset(0 0 0 0)" : "inset(0 0 100% 0)", opacity: prefersReducedMotion ? 0 : 1 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: prefersReducedMotion ? 0.2 : duration, delay: prefersReducedMotion ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Pattern C — editorial line/divider expansion (0% -> 100% width).
 */
export function RevealDivider({ delay = 0, duration = 0.35, amount = 0.4, className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ scaleX: prefersReducedMotion ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount }}
      style={{ transformOrigin: "left" }}
      transition={{ duration: prefersReducedMotion ? 0 : duration, delay: prefersReducedMotion ? 0 : delay, ease: EASE }}
    />
  );
}
