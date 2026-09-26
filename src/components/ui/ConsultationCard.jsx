import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Single-tier "book a consultation" card — distinct from the 3-tier
 * PricingTiers grid. All copy comes in via props so callers can localize it.
 */
export default function ConsultationCard({
  eyebrow,
  title,
  features = [],
  ctaLabel,
  ctaHref = "#",
  featured = false,
  disabled = false,
  className = "",
}) {
  return (
    <motion.div
      whileHover={disabled ? undefined : { y: -2 }}
      transition={{ duration: 0.24, ease: EASE }}
      className={`group relative flex w-[320px] max-w-full flex-col items-start gap-6 rounded-xl border p-8 transition-colors ${
        disabled
          ? "border-line bg-white opacity-40"
          : featured
          ? "border-[1.5px] border-muted bg-surface"
          : "border-line bg-white hover:border-[#c7c7c4] hover:shadow-[0_-2px_6px_rgba(0,0,0,0.04)] focus-within:border-2 focus-within:border-dashed focus-within:border-black"
      } ${className}`}
    >
      <p className="self-stretch text-[22px] font-semibold text-black">{eyebrow}</p>
      <p className="self-stretch text-xl font-bold text-black">{title}</p>

      <div className="h-px w-full bg-line" />

      <ul className="flex flex-col items-start gap-4 self-stretch">
        {features.map((feature) => (
          <li key={feature} className="text-sm text-muted">
            ✓ {feature}
          </li>
        ))}
      </ul>

      <a
        href={disabled ? undefined : ctaHref}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={`flex w-full items-center justify-center rounded-lg bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors ${
          disabled ? "pointer-events-none" : "hover:bg-ink-soft"
        }`}
      >
        {ctaLabel}
      </a>
    </motion.div>
  );
}
