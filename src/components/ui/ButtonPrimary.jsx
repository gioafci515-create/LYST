import { motion } from "framer-motion";

const spinner = "/images/button-primary-spinner.svg";

export default function ButtonPrimary({
  children,
  type = "button",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      whileHover={disabled || loading ? undefined : { scale: 1.02 }}
      whileTap={disabled || loading ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] bg-black px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}
      {...props}
    >
      <span className={loading ? "opacity-0" : ""}>{children}</span>
      {loading && (
        <img src={spinner} alt="" className="size-[18px] shrink-0 animate-spin" />
      )}
    </motion.button>
  );
}
