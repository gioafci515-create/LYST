import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

export default function ClosingMoments() {
  const { t } = useTranslation("home");
  const moments = t("closingMoments.moments", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center bg-black py-32 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-16 px-20 max-lg:px-6">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 border-b-0 pb-0">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-semibold text-muted-2">{t("closingMoments.archiveLabel")}</span>
            <span className="h-px w-10 bg-white/15" />
            <span className="text-sm font-medium text-white">{t("closingMoments.archiveLabel")}</span>
          </div>
          <span className="text-xs text-muted-2">{t("closingMoments.brand")}</span>
        </div>

        <div className="flex w-full flex-wrap items-start gap-20">
          <div className="flex w-[515px] max-w-full flex-col items-start gap-16">
            <Reveal direction="up" className="flex flex-col items-start gap-4 self-stretch">
              <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-white max-lg:text-4xl">
                {t("closingMoments.titleLine1")}
              </h2>
              <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-faint max-lg:text-4xl">
                {t("closingMoments.titleLine2")}
              </h2>
            </Reveal>
            <ul className="flex flex-col items-start gap-6 self-stretch">
              {moments.map((moment, i) => (
                <motion.li
                  key={moment}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex w-full items-center gap-4"
                >
                  <span className="h-px w-2 shrink-0 bg-white" />
                  <span className="flex-1 text-base leading-7 text-white">{moment}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <Reveal direction="fade" delay={0.15} className="h-[600px] flex-1 min-w-[280px] max-lg:h-[360px]">
            <img
              src="/images/Frame_685x600.png"
              alt={t("closingMoments.imageAlt")}
              className="h-full w-full rounded-xl object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
