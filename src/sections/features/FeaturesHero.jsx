import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "./icons";
import Reveal from "../../components/Reveal";

const CATEGORIES = [
  { letter: "A", title: "MANAGE", key: "manage", to: "/features/manage" },
  { letter: "B", title: "EXPERIENCE", key: "experience", to: "/features/experience" },
  { letter: "C", title: "REMEMBER", key: "remember", to: "/features/remember" },
];

export default function FeaturesHero() {
  const { t } = useTranslation("features");

  return (
    <section className="flex w-full flex-col items-center bg-white py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-10 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-[960px] max-w-full flex-col items-start gap-4">
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">{t("hero.eyebrow")}</p>
          <h1 className="self-stretch font-display text-5xl font-extrabold leading-[1.1] text-black max-lg:text-4xl">
            {t("hero.title")}
          </h1>
          <p className="w-[760px] max-w-full text-base leading-[1.6] text-muted">{t("hero.description")}</p>
        </Reveal>

        <div className="flex w-full flex-wrap items-stretch gap-6">
          {CATEGORIES.map((category, i) => (
            <Reveal
              key={category.key}
              direction="up"
              delay={i * 0.08}
              className="flex flex-1 min-w-[280px]"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full"
              >
                <Link
                  to={category.to}
                  className="flex h-full w-full flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-black"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-black text-[9px] font-semibold text-white">
                      {category.letter}
                    </span>
                    <h2 className="font-display text-xl font-extrabold text-black">{category.title}</h2>
                  </div>
                  <p className="self-stretch text-sm leading-[1.5] text-muted">
                    {t(`hero.categories.${category.key}`)}
                  </p>
                  <span className="flex items-center gap-2 text-sm font-semibold text-black">
                    {t("hero.viewCategory")}
                    <ArrowRightIcon />
                  </span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
