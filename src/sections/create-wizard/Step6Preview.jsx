import { useTranslation } from "react-i18next";
import { ClockIcon, MapPinIcon } from "./icons";

const FEATURE_TO_CHIP = {
  eventCamera: "photos",
  voiceGuestbook: "voiceMessages",
  hiddenMoments: "hiddenMoments",
  lettersFromRoom: "letters",
  timeCapsule: "timeCapsule",
  sharedGallery: "sharedGallery",
  messageForLater: "messageForLater",
};

function formatDate(dateStr, lang) {
  if (!dateStr) return "—";
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  return new Date(y, m - 1, d).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" });
}

function InfoCard({ title, value }) {
  return (
    <div className="flex flex-1 flex-col gap-1.5 rounded-xl border border-line bg-surface p-4">
      <p className="text-sm font-semibold text-muted">{title}</p>
      <p className="text-sm text-black">{value}</p>
    </div>
  );
}

export default function Step6Preview({ data }) {
  const { t, i18n } = useTranslation("createWizard");
  const { details, guestsSettings, features } = data;

  const dateLabel = formatDate(details.date, i18n.language);
  const activeOptionalFeatures = Object.entries(features)
    .filter(([, on]) => on)
    .map(([key]) => key);
  const experienceLine = activeOptionalFeatures.length
    ? activeOptionalFeatures.map((key) => t(`step5.optional.${key}.title`)).join(", ")
    : t("step6.guestSees.experience.value");
  const plusOneNote = guestsSettings.allowPlusOne
    ? t("step6.overview.plusOneAllowed")
    : t("step6.overview.plusOneNotAllowed");

  const chips = [
    t("step6.activated.mobileInvite"),
    ...activeOptionalFeatures.map((key) => t(`step6.activated.${FEATURE_TO_CHIP[key]}`)),
  ];

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[13px] font-bold text-muted-2">{t("step6.eyebrow")}</p>
      <h1 className="font-display text-4xl font-extrabold text-black md:text-[40px]">{t("step6.title")}</h1>

      <div className="mt-6 flex flex-col items-start gap-12 lg:flex-row">
        <div className="mx-auto flex w-[280px] shrink-0 flex-col rounded-[40px] bg-black p-2 shadow-[0_24px_48px_rgba(0,0,0,0.16)] lg:mx-0">
          <div className="flex flex-1 flex-col gap-4 rounded-[32px] bg-white px-5 pb-6 pt-5">
            <div className="flex items-center justify-between text-xs font-semibold text-black">
              <span>9:41</span>
              <span className="text-[10px] text-muted">●●●</span>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-xl font-extrabold leading-tight text-black">
                  {details.eventName || "—"}
                </h3>
                <p className="text-xs text-muted">
                  {t("step6.phone.hostsPrefix")}
                  {details.eventName || "—"}
                </p>
              </div>
              <div className="h-px w-full bg-line" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[13px] text-black">
                  <ClockIcon className="text-faint" />
                  <span>
                    {dateLabel}
                    {details.time ? `, ${details.time}` : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-black">
                  <MapPinIcon className="text-faint" />
                  <span>{details.location || "—"}</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-2 flex h-10 items-center justify-center rounded-[10px] bg-black text-[13px] font-semibold text-white"
              >
                {t("step6.phone.rsvpButton")}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-bold text-black">{t("step6.guestSees.title")}</p>
              <p className="text-sm text-muted">{t("step6.guestSees.description")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <InfoCard title={t("step6.guestSees.address.title")} value={t("step6.guestSees.address.value")} />
              <InfoCard title={t("step6.guestSees.reception.title")} value={t("step6.guestSees.reception.value")} />
              <InfoCard title={t("step6.guestSees.experience.title")} value={experienceLine} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-bold text-black">{t("step6.overview.title")}</p>
              <p className="text-sm text-muted">{t("step6.overview.description")}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <InfoCard title={t("step6.overview.event")} value={details.eventName || "—"} />
                <InfoCard title={t("step6.overview.dateTime")} value={`${dateLabel}${details.time ? `, ${details.time}` : ""}`} />
                <InfoCard title={t("step6.overview.location")} value={details.location || "—"} />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <InfoCard
                  title={t("step6.overview.guestLimit")}
                  value={`${guestsSettings.maxGuests} ${t("step4.guestsUnit")} ${plusOneNote}`}
                />
                <InfoCard title={t("step6.overview.reception")} value={t("step6.guestSees.address.value")} />
                <InfoCard title={t("step6.overview.experience")} value={experienceLine} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-base font-bold text-black">{t("step6.activated.title")}</p>
              <p className="text-sm text-muted">{t("step6.activated.description")}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="rounded-md border border-line bg-surface px-3 py-2 text-[13px] text-black">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
