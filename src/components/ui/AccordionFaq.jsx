import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];
const chevron = "/images/accordion-chevron-collapsed.svg";

export default function AccordionFaq({ items, defaultOpenIndex = -1, className = "" }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={`flex w-full flex-col items-stretch gap-4 ${className}`}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i} className="rounded-lg border border-line p-6">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-base font-bold text-black">{item.question}</span>
              <motion.img
                src={chevron}
                alt=""
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.22, ease: EASE }}
                className="size-4 shrink-0"
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-sm leading-[1.5] text-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
