import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

export default function FinalCta() {
  const { t } = useTranslation("home");

  return (
    <section className="flex w-full flex-col items-center bg-surface py-40 max-lg:py-20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-12 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-[843px] max-w-full flex-col items-center gap-6 text-center">
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-black max-lg:text-3xl">
            {t("finalCta.title")}
          </h2>
          <p className="w-[624px] max-w-full text-base leading-7 text-muted">{t("finalCta.body")}</p>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black px-10 py-5 text-sm font-semibold text-white hover:bg-ink-soft"
          >
            {t("finalCta.cta")}
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}
