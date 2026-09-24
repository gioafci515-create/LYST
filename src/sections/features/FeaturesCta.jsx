import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

export default function FeaturesCta() {
  const { t } = useTranslation("features");

  return (
    <section className="flex w-full flex-col items-center bg-surface py-32 max-lg:py-20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-10 px-20 text-center max-lg:px-6">
        <Reveal direction="up" className="flex w-[843px] max-w-full flex-col items-center gap-4">
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-[1.1] text-black max-lg:text-3xl">
            {t("cta.title")}
          </h2>
          <p className="w-[624px] max-w-full text-base leading-[1.6] text-muted">{t("cta.description")}</p>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/create"
              className="rounded-[10px] bg-black px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              {t("cta.button")}
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
