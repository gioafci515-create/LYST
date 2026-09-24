import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

export default function HowHero() {
  const { t } = useTranslation("howItWorks");

  return (
    <>
      <section className="flex w-full flex-col items-center bg-white pb-20 pt-[120px] max-lg:pb-10 max-lg:pt-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 px-20 max-lg:gap-4 max-lg:px-6">
          <Reveal direction="up" className="flex w-full flex-col items-start gap-6">
            <p className="text-sm font-bold text-muted-2">{t("hero.eyebrow")}</p>
            <h1 className="w-[960px] max-w-full font-display text-[64px] font-extrabold leading-[1.1] text-black max-lg:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="w-[720px] max-w-full text-lg leading-8 text-muted">
              {t("hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>
      <div className="h-px w-full bg-line" />
    </>
  );
}
