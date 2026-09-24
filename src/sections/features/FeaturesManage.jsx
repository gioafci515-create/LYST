import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, BellIcon, CalendarIcon, LinkIcon, ShareIcon } from "./icons";
import Reveal from "../../components/Reveal";

// Confirmed state is presentational data (drives badge styling), kept in JS and
// matched by index against the translated guest list.
const GUEST_CONFIRMED = [true, true, false, true];

function StatBox({ label, value, muted }) {
  return (
    <div className="flex flex-1 min-w-[140px] flex-col items-start gap-2 rounded-lg border border-line bg-white p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className={`font-display text-[28px] font-extrabold ${muted ? "text-muted" : "text-black"}`}>{value}</p>
    </div>
  );
}

function GuestRow({ name, status, confirmed }) {
  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-line bg-white p-3">
      <p className="text-sm font-semibold text-black">{name}</p>
      <span
        className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
          confirmed ? "bg-green-bg text-green-text" : "border border-line bg-surface text-muted"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function InfoRow({ icon, title, subtitle }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-lg border border-line bg-white p-4">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-black">
        {icon}
      </span>
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-sm font-medium text-black">{title}</p>
        <p className="text-xs text-muted">{subtitle}</p>
      </div>
    </div>
  );
}

export default function FeaturesManage() {
  const { t } = useTranslation("features");

  const guests = t("manage.guestList.guests", { returnObjects: true });
  const reminderItems = t("manage.reminders.items", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center bg-surface-2 py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-16 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-[720px] max-w-full flex-col items-start gap-4">
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">A - MANAGE</p>
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-[1.1] text-black max-lg:text-4xl">
            {t("manage.title")}
          </h2>
          <p className="self-stretch text-base leading-[1.6] text-muted">{t("manage.description")}</p>
        </Reveal>

        {/* RSVP */}
        <div className="flex w-full flex-wrap items-start gap-10">
          <Reveal direction="left" className="flex flex-1 min-w-[320px] flex-col items-start gap-6">
            <h3 className="font-display text-[32px] font-extrabold leading-[1.15] text-black">RSVP</h3>
            <p className="self-stretch text-base leading-[1.6] text-muted">{t("manage.rsvp.description")}</p>
            <Link to="/features/rsvp" className="flex items-center gap-2 text-sm font-semibold text-black">
              {t("manage.rsvp.cta")}
              <ArrowRightIcon />
            </Link>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.1}
            className="flex flex-1 min-w-[320px] flex-col items-start gap-6 rounded-2xl border border-line bg-surface p-6"
          >
            <div className="flex w-full flex-wrap items-start justify-between gap-2">
              <p className="text-sm font-bold text-black">{t("manage.rsvp.statsTitle")}</p>
              <p className="text-xs text-muted">{t("manage.rsvp.updatedAt")}</p>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-wrap items-start gap-4">
                <StatBox label={t("manage.rsvp.confirmedLabel")} value={t("manage.rsvp.confirmedValue")} />
                <StatBox label={t("manage.rsvp.pendingLabel")} value={t("manage.rsvp.pendingValue")} muted />
              </div>
              <div className="flex w-full flex-wrap items-start gap-4">
                <StatBox label={t("manage.rsvp.plusGuestsLabel")} value={t("manage.rsvp.plusGuestsValue")} />
                <StatBox label={t("manage.rsvp.dietaryLabel")} value={t("manage.rsvp.dietaryValue")} muted />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Guest list (intentionally reversed: card first, text second) */}
        <div className="flex w-full flex-wrap items-start gap-10">
          <Reveal
            direction="left"
            className="flex flex-1 min-w-[320px] flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-6"
          >
            <p className="text-[13px] font-bold text-muted-2">{t("manage.guestList.badge")}</p>
            <div className="flex w-full flex-col items-start gap-3">
              {guests.map((guest, i) => (
                <GuestRow key={guest.name} name={guest.name} status={guest.status} confirmed={GUEST_CONFIRMED[i]} />
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="flex flex-1 min-w-[320px] flex-col items-start gap-6">
            <h3 className="font-display text-[32px] font-extrabold leading-[1.15] text-black">
              {t("manage.guestList.title")}
            </h3>
            <p className="self-stretch text-base leading-[1.6] text-muted">{t("manage.guestList.description")}</p>
            <Link to="/features/guest-list" className="flex items-center gap-2 text-sm font-semibold text-black">
              {t("manage.guestList.cta")}
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>

        {/* Location, time & dress code */}
        <div className="flex w-full flex-wrap items-start gap-10">
          <Reveal direction="left" className="flex flex-1 min-w-[320px] flex-col items-start gap-6">
            <h3 className="font-display text-[32px] font-extrabold leading-[1.15] text-black">
              {t("manage.location.title")}
            </h3>
            <p className="self-stretch text-base leading-[1.6] text-muted">{t("manage.location.description")}</p>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.1}
            className="flex flex-1 min-w-[320px] flex-col items-start gap-6 rounded-2xl border border-line bg-surface p-6"
          >
            <div className="flex w-full flex-wrap items-start gap-6">
              <div className="flex flex-1 min-w-[140px] flex-col items-start gap-2">
                <p className="text-xs text-muted">{t("manage.location.whereLabel")}</p>
                <p className="self-stretch font-display text-xl font-extrabold text-black">
                  {t("manage.location.whereValue")}
                </p>
                <p className="text-[13px] text-muted">{t("manage.location.dateTime")}</p>
              </div>
              <div className="flex flex-1 min-w-[140px] flex-col items-start gap-2">
                <p className="text-xs text-muted">{t("manage.location.dressCodeLabel")}</p>
                <span className="rounded-md border border-line bg-white px-3 py-2 text-[13px] font-semibold text-black">
                  {t("manage.location.dressCodeValue")}
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <p className="text-xs text-muted">{t("manage.location.calendarLinkLabel")}</p>
              <InfoRow
                icon={<CalendarIcon className="size-4" />}
                title={t("manage.location.calendarTitle")}
                subtitle={t("manage.location.calendarSubtitle")}
              />
            </div>
          </Reveal>
        </div>

        {/* Automatic reminders */}
        <div className="flex w-full flex-wrap items-start gap-10">
          <Reveal direction="left" className="flex flex-1 min-w-[320px] flex-col items-start gap-6">
            <h3 className="font-display text-[32px] font-extrabold leading-[1.15] text-black">
              {t("manage.reminders.title")}
            </h3>
            <p className="self-stretch text-base leading-[1.6] text-muted">{t("manage.reminders.description")}</p>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.1}
            className="flex flex-1 min-w-[320px] flex-col items-start gap-6 rounded-2xl border border-line bg-surface p-6"
          >
            <p className="text-sm font-bold text-black">{t("manage.reminders.scheduleTitle")}</p>
            <div className="flex w-full flex-col items-start gap-4">
              {reminderItems.map((item) => (
                <div key={item.label} className="flex w-full items-center justify-between">
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="text-sm font-medium text-black">{item.value}</p>
                </div>
              ))}
            </div>
            <InfoRow
              icon={<BellIcon className="size-4" />}
              title={t("manage.reminders.infoTitle")}
              subtitle={t("manage.reminders.infoSubtitle")}
            />
          </Reveal>
        </div>

        {/* Custom URL */}
        <div className="flex w-full flex-wrap items-start gap-10">
          <Reveal direction="left" className="flex flex-1 min-w-[320px] flex-col items-start gap-6">
            <h3 className="font-display text-[32px] font-extrabold leading-[1.15] text-black">Custom URL</h3>
            <p className="self-stretch text-base leading-[1.6] text-muted">{t("manage.customUrl.description")}</p>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.1}
            className="flex flex-1 min-w-[320px] flex-col items-start gap-6 rounded-2xl border border-line bg-surface p-6"
          >
            <p className="text-sm font-bold text-black">{t("manage.customUrl.linkTitle")}</p>
            <div className="flex w-full flex-col items-start gap-4">
              <InfoRow
                icon={<LinkIcon className="size-4" />}
                title={t("manage.customUrl.urlTitle")}
                subtitle={t("manage.customUrl.urlSubtitle")}
              />
              <InfoRow
                icon={<ShareIcon className="size-4" />}
                title={t("manage.customUrl.shareTitle")}
                subtitle={t("manage.customUrl.shareSubtitle")}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
