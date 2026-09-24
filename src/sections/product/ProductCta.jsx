import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

const MotionLink = motion.create(Link);

export default function ProductCta() {
  const { t } = useTranslation("product");

  return (
    <section className="flex w-full flex-col items-center bg-surface py-40 max-lg:py-20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-10 px-20 text-center max-lg:px-6">
        <Reveal direction="up" className="flex w-[843px] max-w-full flex-col items-center gap-4">
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-black max-lg:text-3xl">
            {t("cta.title")}
          </h2>
          <p className="w-[624px] max-w-full text-base leading-7 text-muted">{t("cta.description")}</p>
        </Reveal>
        <Reveal direction="up" delay={0.15}>
          <MotionLink
            to="/create"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-[10px] bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            {t("cta.button")}
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
