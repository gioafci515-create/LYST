import { motion } from "framer-motion";

export default function FilterPill({ label, active = false, onClick, className = "" }) {
  return (
    <motion.button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-black focus-visible:outline-offset-2 disabled:opacity-40 ${
        active
          ? "border-black bg-black font-semibold text-white"
          : "border-line bg-surface text-muted hover:border-[#d1d1cf] hover:bg-surface-2 hover:text-ink-soft"
      } ${className}`}
    >
      {label}
    </motion.button>
  );
}
