import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

export default function TechEmotion() {
  const { t } = useTranslation("home");
  const features = t("techEmotion.features", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center bg-surface py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-16 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-full flex-wrap items-start gap-8 self-stretch">
          <div className="flex w-[624px] max-w-full flex-col items-start gap-2">
            <h2 className="font-display text-[56px] font-extrabold leading-tight text-black max-lg:text-4xl">
              {t("techEmotion.titleLine1")}
            </h2>
            <h2 className="font-display text-[56px] font-extrabold leading-tight text-black max-lg:text-4xl">
              {t("techEmotion.titleLine2")}
            </h2>
          </div>
          <p className="flex w-[624px] max-w-full items-center text-xl leading-8 text-ink-soft">
            {t("techEmotion.body")}
          </p>
        </Reveal>

        <div className="h-px w-full border-t border-line" />

        <div className="flex w-full flex-wrap items-start gap-8">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              direction="up"
              delay={i * 0.1}
              className={`flex flex-1 min-w-[240px] flex-col items-start gap-6 pr-6 ${
                i < features.length - 1 ? "border-r border-line max-lg:border-r-0" : ""
              }`}
            >
              <p className="text-xs font-bold text-muted-2">{feature.index}</p>
              <h3 className="font-display text-[28px] font-bold text-black">{feature.title}</h3>
              <p className="self-stretch text-[15px] leading-6 text-muted">{feature.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
