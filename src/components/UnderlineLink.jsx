import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, TIMING } from "../lib/motion";

const MotionLink = motion(Link);

const underline = { rest: { scaleX: 0 }, hover: { scaleX: 1 } };
const arrow = { rest: { x: 0 }, hover: { x: 4 } };

export default function UnderlineLink({ to, label, className = "" }) {
  return (
    <MotionLink
      to={to}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      transition={{ duration: TIMING.textLinkUnderlineHover, ease: EASE }}
      className={`inline-flex items-center gap-2 text-[15px] font-semibold text-black ${className}`}
    >
      <span className="relative">
        {label}
        <motion.span
          variants={underline}
          transition={{ duration: TIMING.textLinkUnderlineHover, ease: EASE }}
          style={{ originX: 0 }}
          className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-black"
        />
      </span>
      <motion.span variants={arrow} transition={{ duration: TIMING.textLinkArrowHover, ease: EASE }}>
        →
      </motion.span>
    </MotionLink>
  );
}
