import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

const MotionLink = motion(Link);

export default function Hero() {
  const { t } = useTranslation("home");

  return (
    <section className="flex w-full flex-col items-center py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-start gap-8 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-[624px] max-w-full flex-col items-start justify-center gap-12">
          <div className="flex flex-col items-start gap-6 self-stretch">
            <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">{t("hero.eyebrow")}</p>
            <h1 className="self-stretch font-display text-[72px] font-extrabold leading-[1.1] text-black max-lg:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="self-stretch text-lg leading-8 text-muted">{t("hero.body")}</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <MotionLink
              to="/create"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="rounded-[10px] bg-black px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              {t("hero.ctaPrimary")}
            </MotionLink>
            <MotionLink
              to="/how-it-works"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group flex items-center gap-2 text-[15px] font-semibold text-black"
            >
              {t("hero.ctaSecondary")}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </MotionLink>
          </div>
        </Reveal>
        <Reveal direction="fade" delay={0.15}>
          <img
            src="/images/Frame_624x560.png"
            alt={t("hero.imageAlt")}
            className="h-[560px] w-[624px] max-w-full rounded-xl object-cover max-lg:h-[320px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
