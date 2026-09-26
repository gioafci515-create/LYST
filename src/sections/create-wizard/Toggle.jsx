import { motion } from "framer-motion";

export default function Toggle({ checked, onChange, label, disabled = false }) {
  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      onClick={() => !disabled && onChange(!checked)}
      className={`flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 outline-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-black focus-visible:outline-offset-2 ${
        checked ? "justify-end bg-black" : "justify-start bg-line"
      } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="size-5 rounded-full bg-white shadow"
      />
    </motion.button>
  );
}
