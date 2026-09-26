import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);
const MotionAnchor = motion.a;
const MotionButton = motion.button;

const underline = { rest: { scaleX: 0 }, hover: { scaleX: 1 } };

export default function TextLinkUnderline({ to, href, onClick, label, className = "" }) {
  const Component = to ? MotionLink : href ? MotionAnchor : MotionButton;
  const navProps = to ? { to } : href ? { href } : { type: "button" };

  return (
    <Component
      {...navProps}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      className={`relative inline-block text-sm font-medium text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-black focus-visible:outline-offset-2 disabled:opacity-40 ${className}`}
    >
      {label}
      <motion.span
        variants={underline}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute -bottom-0.5 left-0 h-px w-full bg-black"
      />
    </Component>
  );
}
