import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

export default function PricingHero() {
  const { t } = useTranslation("pricing");

  return (
    <section className="flex w-full flex-col items-center pb-16 pt-24 max-lg:pt-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-6 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-full flex-col items-center gap-6">
          <p className="text-center text-[13px] font-bold uppercase tracking-wide text-muted-2">
            {t("hero.eyebrow")}
          </p>
          <h1 className="max-w-[800px] text-center font-display text-[56px] font-extrabold leading-[1.1] text-black max-lg:text-4xl">
            {t("hero.heading")}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
