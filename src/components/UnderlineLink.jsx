import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const underline = { rest: { scaleX: 0 }, hover: { scaleX: 1 } };
const arrow = { rest: { x: 0 }, hover: { x: 4 } };

export default function UnderlineLink({ to, label, className = "" }) {
  return (
    <MotionLink
      to={to}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center gap-2 text-[15px] font-semibold text-black ${className}`}
    >
      <span className="relative">
        {label}
        <motion.span
          variants={underline}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-black"
        />
      </span>
      <motion.span variants={arrow} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
        →
      </motion.span>
    </MotionLink>
  );
}
