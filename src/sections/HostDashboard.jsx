import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import { EASE, TIMING } from "../lib/motion";

function StatusPill({ status, tone }) {
  const toneClasses =
    tone === "green" ? "bg-green-bg text-green-text" : "bg-amber-bg text-amber-text";
  return <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${toneClasses}`}>{status}</span>;
}

export default function HostDashboard() {
  const { t } = useTranslation("home");
  const stats = t("hostDashboard.stats", { returnObjects: true });
  const responses = t("hostDashboard.responses", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center bg-white py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-8 px-20 max-lg:px-6">
        <Reveal direction="left" className="flex w-[515px] max-w-full flex-col items-start gap-8">
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">
            {t("hostDashboard.eyebrow")}
          </p>
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-black max-lg:text-4xl">
            {t("hostDashboard.title")}
          </h2>
          <p className="self-stretch text-base leading-7 text-muted">{t("hostDashboard.body")}</p>
        </Reveal>

        <Reveal
          direction="right"
          delay={0.1}
          className="flex w-[733px] max-w-full flex-col items-start gap-6 rounded-xl border border-line bg-surface p-8"
        >
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-lg font-bold text-black">{t("hostDashboard.panel.title")}</h3>
              <p className="text-xs text-muted">{t("hostDashboard.panel.subtitle")}</p>
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02, transition: { duration: TIMING.buttonSecondaryHover, ease: EASE } }}
              whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
              className="rounded-md border border-line bg-white px-3 py-2 text-xs font-semibold text-black"
            >
              {t("hostDashboard.panel.export")}
            </motion.button>
          </div>

          <div className="flex w-full flex-wrap items-start gap-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                direction="up"
                delay={0.15 + i * 0.1}
                className="flex flex-1 min-w-[140px] flex-col items-start gap-2 rounded-lg border border-line bg-white p-4"
              >
                <p className="text-xs font-semibold text-muted">{stat.label}</p>
                <p className="font-display text-3xl font-extrabold text-black">{stat.value}</p>
              </Reveal>
            ))}
          </div>

          <div className="flex w-full flex-col items-start gap-3">
            <p className="text-xs font-bold uppercase text-muted-2">{t("hostDashboard.panel.responsesLabel")}</p>
            {responses.map((r) => (
              <div
                key={r.name}
                className="flex w-full flex-wrap items-center justify-between gap-2 border-b border-line py-3 last:border-b-0 max-lg:flex-col max-lg:items-start max-lg:gap-1"
              >
                <div className="flex w-[180px] max-w-full flex-col gap-0.5 max-lg:w-full">
                  <p className="text-sm font-semibold text-black">{r.name}</p>
                  <p className="text-[11px] text-muted">{r.meta}</p>
                </div>
                <p className="w-[100px] max-w-full text-xs text-muted max-lg:w-full">{r.style}</p>
                <div className="flex w-[150px] max-w-full justify-end max-lg:w-full max-lg:justify-start">
                  <StatusPill status={r.status} tone={r.tone} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
