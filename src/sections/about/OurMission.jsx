import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

export default function OurMission() {
  const { t } = useTranslation("about");

  return (
    <section className="flex w-full flex-col items-center py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-20 px-20 max-lg:gap-8 max-lg:px-6">
        <Reveal direction="right" className="flex min-w-[320px] flex-1 flex-col items-start gap-6">
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">{t("mission.eyebrow")}</p>
          <h2 className="self-stretch font-display text-4xl font-extrabold text-black">{t("mission.heading")}</h2>
          <p className="self-stretch text-base leading-8 text-muted">{t("mission.body")}</p>
        </Reveal>
        <Reveal direction="left" delay={0.1} className="h-[400px] w-[560px] max-w-full">
          <img
            src="/images/about-1.png"
            alt={t("mission.imageAlt")}
            className="h-full w-full rounded-xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
