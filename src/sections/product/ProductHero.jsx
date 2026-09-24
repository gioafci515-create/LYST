import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

const MotionLink = motion.create(Link);

export default function ProductHero() {
  const { t } = useTranslation("product");

  return (
    <section className="flex w-full flex-col items-center py-28 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-12 px-20 text-center max-lg:px-6">
        <Reveal direction="up" className="flex w-[843px] max-w-full flex-col items-center gap-6">
          <h1 className="self-stretch font-display text-[80px] font-extrabold leading-[1.05] text-black max-lg:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="w-[680px] max-w-full text-xl leading-8 text-muted max-lg:text-base max-lg:leading-7">
            {t("hero.description")}
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.15} className="flex flex-wrap items-center justify-center gap-6">
          <MotionLink
            to="/create"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-[10px] bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            {t("hero.ctaPrimary")}
          </MotionLink>
          <Link to="/how-it-works" className="group flex items-center gap-2 text-[15px] font-semibold text-black">
            {t("hero.ctaSecondary")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
