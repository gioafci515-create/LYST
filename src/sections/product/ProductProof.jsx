import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

export default function ProductProof() {
  const { t } = useTranslation("product");

  return (
    <section className="flex w-full flex-col items-center border-t border-line bg-surface-2 py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-16 px-20 max-lg:px-6">
        <Reveal direction="right" className="flex flex-1 min-w-[320px] flex-col items-start gap-5">
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">{t("proof.eyebrow")}</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-black max-lg:text-3xl">
            {t("proof.title")}
          </h2>
          <p className="max-w-[440px] text-base leading-7 text-muted">{t("proof.body")}</p>
          <motion.a
            href="https://dataketi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="rounded-[10px] bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            {t("proof.cta")} →
          </motion.a>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="w-[480px] max-w-full flex-1 min-w-[300px]">
          <motion.a
            href="https://dataketi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.01 }}
            className="block overflow-hidden rounded-2xl border border-line shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="size-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-muted">
                dataketi.vercel.app
              </span>
            </div>
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-black px-6 text-center">
              <p className="font-display text-3xl font-extrabold text-white">დათა &amp; ქეთი</p>
              <div className="h-px w-10 bg-white/30" />
              <p className="text-sm font-medium tracking-wide text-white/70">02.09.2026</p>
            </div>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
