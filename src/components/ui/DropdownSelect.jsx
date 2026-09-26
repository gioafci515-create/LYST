import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DropdownSelect({
  options = [],
  value,
  onChange,
  placeholder = "აირჩიეთ ტიპი",
  disabled = false,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const selected = options.find((option) => option.value === value);

  return (
    <div
      ref={rootRef}
      className={`relative flex w-full flex-col items-start ${disabled ? "pointer-events-none opacity-40" : ""} ${className}`}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className={`flex w-full items-center gap-2 rounded-lg border bg-surface px-3.5 py-3 text-left text-sm outline-none transition-colors duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-ink focus-visible:outline-offset-2 ${
          open ? "border-2 border-ink" : "border-line"
        }`}
      >
        <span className={`flex-1 truncate ${selected ? "text-ink-soft" : "text-muted"}`}>
          {selected ? selected.label : placeholder}
        </span>
        <img
          src="/images/dropdown-chevron.svg"
          alt=""
          className={`size-[13.5px] shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+4px)] z-10 w-full overflow-hidden rounded-lg border border-line bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.06)]"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange?.(option.value);
                  setOpen(false);
                }}
                className="block w-full px-3.5 py-2.5 text-left text-sm text-ink-soft transition-colors hover:bg-surface"
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
