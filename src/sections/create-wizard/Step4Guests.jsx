import { useTranslation } from "react-i18next";
import Toggle from "./Toggle";

function SettingRow({ title, description, children }) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-[10px] border border-line bg-surface p-6 sm:flex-row sm:items-center">
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold text-black">{title}</p>
        <p className="text-[13px] text-muted">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default function Step4Guests({ data, updateGuestsSettings }) {
  const { t } = useTranslation("createWizard");
  const s = data.guestsSettings;

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[13px] font-bold text-muted-2">{t("step4.eyebrow")}</p>
      <h1 className="font-display text-4xl font-extrabold text-black md:text-[40px]">{t("step4.title")}</h1>

      <div className="mt-6 flex flex-col gap-4">
        <SettingRow title={t("step4.maxGuests.title")} description={t("step4.maxGuests.description")}>
          <div className="flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2">
            <input
              type="number"
              min={1}
              value={s.maxGuests}
              onChange={(e) => updateGuestsSettings({ maxGuests: Math.max(1, Number(e.target.value) || 0) })}
              className="w-16 bg-transparent text-sm font-semibold text-black focus:outline-none"
            />
            <span className="text-xs text-muted">{t("step4.guestsUnit")}</span>
          </div>
        </SettingRow>

        <SettingRow title={t("step4.plusOne.title")} description={t("step4.plusOne.description")}>
          <Toggle checked={s.allowPlusOne} onChange={(v) => updateGuestsSettings({ allowPlusOne: v })} label={t("step4.plusOne.title")} />
        </SettingRow>

        <SettingRow title={t("step4.rsvpDeadline.title")} description={t("step4.rsvpDeadline.description")}>
          <input
            type="date"
            value={s.rsvpDeadline}
            onChange={(e) => updateGuestsSettings({ rsvpDeadline: e.target.value })}
            className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </SettingRow>

        <SettingRow title={t("step4.autoReminders.title")} description={t("step4.autoReminders.description")}>
          <Toggle
            checked={s.autoReminders}
            onChange={(v) => updateGuestsSettings({ autoReminders: v })}
            label={t("step4.autoReminders.title")}
          />
        </SettingRow>
      </div>
    </div>
  );
}
