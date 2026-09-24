import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0" aria-hidden="true">
      <path d="M0 6H12M6 12L12 6L6 0" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function WhatWeChange() {
  const { t } = useTranslation("about");
  const comparisons = t("transformation.comparisons", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center bg-surface py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-12 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex flex-col items-start gap-4 self-stretch">
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">{t("transformation.eyebrow")}</p>
          <h2 className="font-display text-4xl font-extrabold text-black">{t("transformation.heading")}</h2>
        </Reveal>
        <div className="flex flex-wrap items-start gap-8 self-stretch">
          {comparisons.map((item, index) => (
            <Reveal
              key={item.before}
              direction="up"
              delay={index * 0.1}
              className="flex min-w-[260px] flex-1 flex-col items-start gap-5 rounded-xl border border-line bg-white p-8"
            >
              <div className="flex flex-wrap items-center gap-2 self-stretch">
                <p className="text-[13px] text-muted-2">{item.before}</p>
                <ArrowRightIcon />
                <p className="flex-1 text-sm font-bold text-black">{item.after}</p>
              </div>
              <p className="self-stretch text-sm leading-[1.5] text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
