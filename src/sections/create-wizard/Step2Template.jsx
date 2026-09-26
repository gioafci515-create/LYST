import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { EASE, DURATION, TIMING } from "../../lib/motion";
import { XCircleIcon } from "./icons";

const TEMPLATE_IDS = ["modernBrowser", "minimalBrowser", "classicBrowser", "modernArchive"];
const FILTERS = ["digital", "interactive"];

function TemplatePreview({ t, kicker }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-surface p-3">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-green-bg px-3 py-1 text-[10px] font-semibold text-green-text">
          {kicker}
        </span>
        <span className="flex size-6 items-center justify-center rounded-full border border-line bg-white text-muted">
          <XCircleIcon />
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-line bg-white">
        <div className="flex items-center gap-3 bg-surface px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#FF5F57]" />
            <span className="size-2 rounded-full bg-[#FEBC2E]" />
            <span className="size-2 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[11px] font-semibold text-muted">{t("step2.mock.url")}</span>
        </div>
        <div className="flex flex-col gap-2.5 p-3">
          <div className="flex h-[92px] items-center justify-center rounded-[10px] bg-green-bg px-2 text-center">
            <p className="font-semibold text-green-text">{t("step2.mock.eventName")}</p>
          </div>
          <div className="flex flex-col gap-2 text-[13px]">
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("step2.mock.dateLabel")}</span>
              <span className="font-semibold text-black">{t("step2.mock.dateValue")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("step2.mock.timeLabel")}</span>
              <span className="font-semibold text-black">{t("step2.mock.timeValue")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("step2.mock.locationLabel")}</span>
              <span className="font-semibold text-black">{t("step2.mock.locationValue")}</span>
            </div>
          </div>
          <div className="flex h-9 items-center justify-center rounded-lg bg-black">
            <span className="text-[13px] font-semibold text-white">{t("step2.mock.rsvp")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Step2Template({ data, updateData }) {
  const { t } = useTranslation("createWizard");
  const kicker = data.templateFilter === "interactive" ? t("step2.kickerInteractive") : t("step2.kickerDigital");

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[13px] font-bold text-muted-2">{t("step2.eyebrow")}</p>
      <h1 className="font-display text-4xl font-extrabold text-black md:text-[40px]">{t("step2.title")}</h1>

      <div className="mt-6 flex flex-col gap-6">
        <div className="flex w-fit max-w-full flex-wrap gap-1 rounded-lg bg-surface p-1">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => updateData({ templateFilter: filter })}
              className={`rounded-md px-4 py-2 text-[13px] font-semibold transition-colors ${
                data.templateFilter === filter ? "bg-white text-black shadow-sm" : "text-muted hover:text-black"
              }`}
            >
              {t(`step2.filters.${filter}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEMPLATE_IDS.map((id) => {
            const selected = data.template === id;
            return (
              <motion.button
                key={id}
                type="button"
                whileHover={{ scale: 1.012, transition: { duration: TIMING.invitationCardHover, ease: EASE } }}
                whileTap={{ scale: 0.98, transition: { duration: DURATION.instant, ease: EASE } }}
                onClick={() => updateData({ template: id })}
                aria-pressed={selected}
                className={`flex flex-col gap-4 rounded-xl border p-3 text-left transition-colors ${
                  selected ? "border-2 border-black" : "border-line hover:border-ink-soft"
                }`}
              >
                <TemplatePreview t={t} kicker={kicker} />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-muted">{kicker}</span>
                  <span className="text-base font-bold text-black">{t(`step2.templates.${id}`)}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function isStep2Valid(data) {
  return Boolean(data.template);
}
