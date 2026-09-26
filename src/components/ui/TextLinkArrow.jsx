import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);
const MotionAnchor = motion.a;
const MotionButton = motion.button;

const arrow = { rest: { x: 0 }, hover: { x: 4 } };

export default function TextLinkArrow({ to, href, onClick, label, className = "" }) {
  const Component = to ? MotionLink : href ? MotionAnchor : MotionButton;
  const navProps = to ? { to } : href ? { href } : { type: "button" };

  return (
    <Component
      {...navProps}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 text-[15px] font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-black focus-visible:outline-offset-2 disabled:opacity-40 ${className}`}
    >
      {label}
      <motion.img
        src="/images/text-link-arrow_16x16.svg"
        alt=""
        variants={arrow}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="size-4"
      />
    </Component>
  );
}
