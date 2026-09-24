import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`shrink-0 transition-transform ${open ? "rotate-90" : ""}`}
    >
      <path d="M0 16L16 8L0 0" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function PricingFaq() {
  const { t } = useTranslation("pricing");
  const faqs = t("faq.items", { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="flex w-full flex-col items-center py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-12 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-full flex-col items-center gap-12">
          <h2 className="self-stretch text-center font-display text-[36px] font-extrabold text-black">
            {t("faq.heading")}
          </h2>

          <div className="flex w-full max-w-[800px] flex-col items-stretch gap-4">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={i} className="rounded-lg border border-line p-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base font-bold text-black">{faq.question}</span>
                    <ChevronIcon open={open} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-[1.5] text-muted">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
