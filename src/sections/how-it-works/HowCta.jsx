import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

const MotionLink = motion(Link);

export default function HowCta() {
  const { t } = useTranslation("howItWorks");

  return (
    <section className="flex w-full flex-col items-center bg-surface py-[140px] max-lg:py-20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-10 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-full flex-col items-center gap-10">
          <div className="flex w-[843px] max-w-full flex-col items-center gap-4 text-center">
            <h2 className="font-display text-5xl font-extrabold leading-[1.1] text-black max-lg:text-3xl">
              {t("cta.title")}
            </h2>
            <p className="w-[624px] max-w-full text-base leading-8 text-muted">
              {t("cta.subtitle")}
            </p>
          </div>
          <MotionLink
            to="/create"
            whileTap={{ scale: 0.97 }}
            className="rounded-[10px] bg-black px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            {t("cta.button")}
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
