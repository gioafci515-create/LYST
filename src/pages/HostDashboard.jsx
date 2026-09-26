import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import DashboardSidebar, { NAV_ITEMS } from "../components/DashboardSidebar";
import { CalendarIcon, MapPinIcon, UsersIcon, XIcon } from "../components/dashboardIcons";
import Reveal from "../components/Reveal";

const STAT_KEYS = ["active", "upcoming", "planned", "guests"];

const STATUS_TONE = {
  active: "green",
  inProgress: "amber",
  planned: "neutral",
};

const RSVP_TONE_CLASSES = {
  green: "bg-green-bg text-green-text",
  amber: "bg-amber-bg text-amber-text",
  red: "bg-[#FDF2F2] text-[#9F3A3A]",
};

const STAT_PILL_TONE_CLASSES = {
  active: "bg-green-bg text-green-text",
  upcoming: "bg-amber-bg text-amber-text",
  planned: "bg-surface text-muted",
  guests: "bg-green-bg text-green-text",
};

function StatCard({ statKey, label, value, pill }) {
  return (
    <Reveal
      direction="up"
      className="flex flex-1 min-w-[220px] flex-col gap-2 rounded-xl border border-line bg-surface p-5"
    >
      <p className="text-[13px] font-semibold text-muted">{label}</p>
      <p className="font-display text-[32px] font-extrabold leading-[1.15] text-black">{value}</p>
      <span
        className={`w-fit rounded px-2 py-0.5 text-[11px] font-semibold ${STAT_PILL_TONE_CLASSES[statKey]}`}
      >
        {pill}
      </span>
    </Reveal>
  );
}

function EventStatusPill({ status, labels }) {
  const tone = STATUS_TONE[status] ?? "neutral";
  const toneClasses =
    tone === "green"
      ? "bg-green-bg text-green-text"
      : tone === "amber"
        ? "bg-amber-bg text-amber-text"
        : "bg-surface text-muted";
  const label =
    status === "active" ? labels.statusActive : status === "inProgress" ? labels.statusInProgress : labels.statusPlanned;
  return <span className={`rounded px-2.5 py-1 text-xs font-semibold ${toneClasses}`}>{label}</span>;
}

function EventCard({ event, labels }) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-line bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="font-display text-base font-bold text-black">{event.title}</h4>
          <p className="text-sm text-muted">{event.subtitle}</p>
        </div>
        <EventStatusPill status={event.status} labels={labels} />
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted">
        <span className="flex items-center gap-1.5">
          <CalendarIcon size={16} className="text-muted" />
          {event.date}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPinIcon size={16} className="text-muted" />
          {event.location}
        </span>
        <span className="flex items-center gap-1.5">
          <UsersIcon size={16} className="text-muted" />
          {event.guests}
        </span>
      </div>
    </div>
  );
}

function RsvpFeedItem({ item }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-line py-4 last:border-b-0">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold text-black">{item.name}</p>
        <p className="text-xs text-muted">{item.action}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="text-[11px] text-muted">{item.time}</span>
        <span
          className={`rounded-md px-2.5 py-1 text-[10px] font-semibold ${RSVP_TONE_CLASSES[item.tone]}`}
        >
          {item.tag}
        </span>
      </div>
    </div>
  );
}

function AccountOverview() {
  const { t } = useTranslation("dashboardHost");
  const [showNewEventModal, setShowNewEventModal] = useState(false);

  const events = t("overview.events.items", { returnObjects: true });
  const rsvpItems = t("overview.rsvp.items", { returnObjects: true });
  const activeEvents = events.filter((e) => e.status === "active");
  const upcomingEvents = events.filter((e) => e.status !== "active");

  const statusLabels = {
    statusActive: t("overview.events.statusActive"),
    statusInProgress: t("overview.events.statusInProgress"),
    statusPlanned: t("overview.events.statusPlanned"),
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-[32px] font-extrabold leading-[1.15] text-black">
            {t("overview.title")}
          </h1>
          <p className="max-w-[600px] text-sm leading-[1.5] text-muted">{t("overview.subtitle")}</p>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowNewEventModal(true)}
          className="flex items-center gap-2 rounded-[10px] bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
        >
          {t("overview.newEvent")}
        </motion.button>
      </div>

      <div className="flex flex-wrap gap-4">
        {STAT_KEYS.map((key) => (
          <StatCard
            key={key}
            statKey={key}
            label={t(`overview.stats.${key}.label`)}
            value={t(`overview.stats.${key}.value`)}
            pill={t(`overview.stats.${key}.pill`)}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-start gap-6">
        <div className="flex min-w-[400px] flex-1 flex-col gap-4 rounded-xl border border-line bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-extrabold text-black">{t("overview.events.title")}</h2>
            <span className="text-sm text-muted">{t("overview.events.count")}</span>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-semibold text-muted">{t("overview.events.activeLabel")}</p>
            {activeEvents.map((event) => (
              <EventCard key={event.title} event={event} labels={statusLabels} />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-semibold text-muted">{t("overview.events.upcomingLabel")}</p>
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} event={event} labels={statusLabels} />
            ))}
          </div>
        </div>

        <div className="flex w-[340px] max-w-full flex-col gap-1 rounded-xl border border-line bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-extrabold text-black">{t("overview.rsvp.title")}</h2>
          </div>
          <p className="pb-2 text-sm text-muted">{t("overview.rsvp.subtitle")}</p>
          <div className="flex flex-col">
            {rsvpItems.map((item) => (
              <RsvpFeedItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showNewEventModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
            onClick={() => setShowNewEventModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="flex w-[420px] max-w-full flex-col gap-4 rounded-xl bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-bold text-black">{t("newEventModal.title")}</h3>
                <button
                  type="button"
                  onClick={() => setShowNewEventModal(false)}
                  aria-label={t("newEventModal.close")}
                  className="text-muted hover:text-black"
                >
                  <XIcon size={18} />
                </button>
              </div>
              <p className="text-sm leading-6 text-muted">{t("newEventModal.body")}</p>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowNewEventModal(false)}
                className="self-start rounded-lg border border-line px-4 py-2 text-sm font-semibold text-black hover:bg-surface"
              >
                {t("newEventModal.close")}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionPlaceholder({ heading }) {
  const { t } = useTranslation("dashboardHost");
  return (
    <Reveal direction="up" className="flex w-full flex-col gap-3">
      <h1 className="font-display text-[32px] font-extrabold leading-[1.15] text-black">{heading}</h1>
      <p className="max-w-[520px] text-sm leading-[1.5] text-muted">{t("placeholder.body")}</p>
    </Reveal>
  );
}

export default function HostDashboard() {
  const { t } = useTranslation("dashboardHost");
  const [activeSection, setActiveSection] = useState("account");

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      <DashboardSidebar activeSection={activeSection} onSelect={setActiveSection} />
      <main className="flex-1 overflow-y-auto bg-white px-10 py-10 max-lg:px-6">
        {activeSection === "account" ? (
          <AccountOverview />
        ) : (
          <SectionPlaceholder
            heading={t(NAV_ITEMS.find((item) => item.id === activeSection)?.labelKey ?? "nav.account")}
          />
        )}
      </main>
    </div>
  );
}
