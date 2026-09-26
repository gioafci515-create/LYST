import { useTranslation } from "react-i18next";
import Toggle from "./Toggle";

const CORE_IDS = ["invite", "info", "rsvp"];
const OPTIONAL_IDS = [
  "eventCamera",
  "voiceGuestbook",
  "hiddenMoments",
  "lettersFromRoom",
  "timeCapsule",
  "sharedGallery",
  "messageForLater",
];

export default function Step5Features({ data, updateFeature }) {
  const { t } = useTranslation("createWizard");

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[13px] font-bold text-muted-2">{t("step5.eyebrow")}</p>
      <h1 className="font-display text-4xl font-extrabold text-black md:text-[40px]">{t("step5.title")}</h1>

      <div className="mt-6 flex flex-col gap-4">
        <p className="text-sm text-muted">{t("step5.coreNote")}</p>
        {CORE_IDS.map((id) => (
          <div
            key={id}
            className="flex flex-col items-start justify-between gap-4 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-center"
          >
            <div className="flex flex-col gap-1">
              <p className="text-base font-bold text-black">{t(`step5.core.${id}.title`)}</p>
              <p className="text-sm text-muted">{t(`step5.core.${id}.description`)}</p>
            </div>
            <span className="shrink-0 rounded-full bg-green-bg px-3 py-1 text-[9px] font-semibold uppercase tracking-wide text-green-text">
              {t("step5.coreTag")}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <p className="text-base font-bold text-black">{t("step5.optionalTitle")}</p>
          <p className="text-sm text-muted">{t("step5.optionalHint")}</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-line">
          {OPTIONAL_IDS.map((id, i) => (
            <div
              key={id}
              className={`flex flex-col items-start justify-between gap-4 border-line bg-surface p-6 sm:flex-row sm:items-center ${
                i > 0 ? "border-t" : ""
              }`}
            >
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-black">{t(`step5.optional.${id}.title`)}</p>
                <p className="text-sm text-muted">{t(`step5.optional.${id}.description`)}</p>
              </div>
              <Toggle
                checked={Boolean(data.features[id])}
                onChange={(v) => updateFeature(id, v)}
                label={t(`step5.optional.${id}.title`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
