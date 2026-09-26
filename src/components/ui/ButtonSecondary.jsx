import { motion } from "framer-motion";

export default function ButtonSecondary({ label, onClick, type = "button", disabled = false, className = "" }) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={`flex h-12 items-center justify-center rounded-[10px] border border-line px-7 text-sm font-medium text-muted transition-colors duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-black focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-35 ${className}`}
    >
      {label}
    </motion.button>
  );
}
