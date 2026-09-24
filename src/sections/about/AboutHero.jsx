import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

export default function AboutHero() {
  const { t } = useTranslation("about");

  return (
    <section className="flex w-full flex-col items-center bg-surface pb-24 pt-[120px] max-lg:pb-16 max-lg:pt-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-8 px-20 max-lg:px-6">
        <p className="text-center text-[13px] font-bold uppercase tracking-wide text-muted-2">{t("hero.eyebrow")}</p>
        <Reveal direction="up" delay={0.1}>
          <h1 className="w-[1000px] max-w-full text-center font-display text-[56px] font-extrabold leading-[1.1] text-black max-lg:text-4xl">
            {t("hero.heading")}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
