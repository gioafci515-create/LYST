import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function InvitationCard({
  title,
  subtitle,
  image,
  imageAlt = "",
  disabled = false,
  className = "",
  onClick,
  children,
}) {
  return (
    <motion.div
      role={onClick ? "button" : undefined}
      tabIndex={disabled || !onClick ? undefined : 0}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? undefined : { y: -3 }}
      transition={{ duration: 0.24, ease: EASE }}
      className={`flex w-[320px] max-w-full flex-col items-start gap-4 rounded-xl border p-4 ${
        disabled
          ? "border-line opacity-40"
          : "border-line bg-white hover:border-[#c7c7c4] hover:shadow-[0px_-2px_4px_rgba(0,0,0,0.04)]"
      } ${onClick && !disabled ? "cursor-pointer" : ""} ${className}`}
    >
      <div className="h-[180px] w-full shrink-0 overflow-hidden rounded-lg bg-surface-2">
        {image && <img src={image} alt={imageAlt} className="h-full w-full object-cover" />}
      </div>
      <div className="flex w-full flex-col items-start gap-2">
        {title && <p className="text-lg font-semibold text-black">{title}</p>}
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      </div>
      {children}
    </motion.div>
  );
}
