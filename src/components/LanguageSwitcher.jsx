import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../i18n";

export default function LanguageSwitcher({ className = "", layoutId = "active-language-pill" }) {
  const { i18n } = useTranslation();

  return (
    <div className={`relative flex items-center gap-1 rounded-full border border-line bg-surface p-1 ${className}`}>
      {SUPPORTED_LANGUAGES.map(({ code, label }) => {
        const isActive = i18n.resolvedLanguage === code || i18n.language === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={isActive}
            aria-label={`Switch language to ${label}`}
            onClick={() => i18n.changeLanguage(code)}
            className="relative rounded-full px-2.5 py-1 text-xs font-semibold"
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
                className="absolute inset-0 rounded-full bg-black"
              />
            )}
            <motion.span
              whileHover={isActive ? undefined : { scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className={`relative z-10 block transition-colors duration-200 ${
                isActive ? "text-white" : "text-muted hover:text-black"
              }`}
            >
              {label}
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
