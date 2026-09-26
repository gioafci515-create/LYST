import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Badge({ tone = "surface", children }) {
  const tones = {
    surface: "border-line bg-surface text-muted",
    required: "border-line-soft bg-green-bg text-green-text",
  };
  return (
    <span className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}

function Field({ label, hint, badge, badgeTone, children }) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <p className="text-[13px] font-semibold text-ink-soft">{label}</p>
        {hint && <p className="text-[13px] text-muted-2">{hint}</p>}
      </div>
      <div className="group flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-ink-soft group-focus-within:text-black">{label}</span>
          {badge && <Badge tone={badgeTone}>{badge}</Badge>}
        </div>
        {children}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-black placeholder:text-faint transition-colors hover:border-[#bfbfbd] focus:border-2 focus:border-black focus:bg-white focus:outline-none";

export default function Step3Details({ data, updateDetails }) {
  const { t } = useTranslation("createWizard");
  const { details, eventType } = data;

  useEffect(() => {
    if (details.eventNameAuto) {
      const autoName = t(`step3.autoNames.${eventType || "other"}`);
      if (details.eventName !== autoName) updateDetails({ eventName: autoName });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventType, t]);

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[13px] font-bold text-muted-2">{t("step3.eyebrow")}</p>
      <h1 className="font-display text-4xl font-extrabold text-black md:text-[40px]">{t("step3.title")}</h1>

      <div className="mt-6 flex flex-col gap-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <Field
            label={t("step3.name.label")}
            hint={t("step3.name.hint")}
            badge={details.eventNameAuto ? t("step3.name.badge") : null}
          >
            <input
              type="text"
              value={details.eventName}
              onChange={(e) => updateDetails({ eventName: e.target.value, eventNameAuto: false })}
              className={inputClass}
            />
          </Field>

          <div className="flex flex-1 flex-col gap-1.5">
            <p className="text-[13px] font-semibold text-ink-soft">{t("step3.schedule.label")}</p>
            <p className="text-[13px] text-muted-2">{t("step3.schedule.hint")}</p>
            <div className="mt-2.5 flex flex-col gap-4 sm:flex-row">
              <div className="group flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-ink-soft group-focus-within:text-black">{t("step3.date.label")}</span>
                  <Badge tone="required">{t("step3.date.badge")}</Badge>
                </div>
                <input
                  type="date"
                  value={details.date}
                  onChange={(e) => updateDetails({ date: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="group flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-ink-soft group-focus-within:text-black">{t("step3.time.label")}</span>
                  <Badge tone="required">{t("step3.time.badge")}</Badge>
                </div>
                <input
                  type="time"
                  value={details.time}
                  onChange={(e) => updateDetails({ time: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <Field
            label={t("step3.location.label")}
            hint={t("step3.location.hint")}
            badge={t("step3.location.badge")}
            badgeTone="required"
          >
            <input
              type="text"
              value={details.location}
              onChange={(e) => updateDetails({ location: e.target.value })}
              placeholder={t("step3.location.placeholder")}
              className={inputClass}
            />
          </Field>
          <Field
            label={t("step3.dressCode.label")}
            hint={t("step3.dressCode.hint")}
            badge={t("step3.dressCode.badge")}
            badgeTone="required"
          >
            <input
              type="text"
              value={details.dressCode}
              onChange={(e) => updateDetails({ dressCode: e.target.value })}
              placeholder={t("step3.dressCode.placeholder")}
              className={inputClass}
            />
          </Field>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <Field
            label={t("step3.description.label")}
            hint={t("step3.description.hint")}
            badge={t("step3.description.badge")}
          >
            <textarea
              value={details.description}
              onChange={(e) => updateDetails({ description: e.target.value })}
              placeholder={t("step3.description.placeholder")}
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </Field>
          <Field
            label={t("step3.additional.label")}
            hint={t("step3.additional.hint")}
            badge={t("step3.additional.badge")}
          >
            <textarea
              value={details.additionalDetails}
              onChange={(e) => updateDetails({ additionalDetails: e.target.value })}
              placeholder={t("step3.additional.placeholder")}
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </Field>
        </div>
      </div>
    </div>
  );
}

export function isStep3Valid(data) {
  const { date, time, location, dressCode } = data.details;
  return Boolean(date && time && location.trim() && dressCode.trim());
}
