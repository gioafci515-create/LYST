import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BellIcon, CameraIcon, EnvelopeIcon, ShareIcon } from "../sections/features/icons";

/* ---------------------------------------------------------------------- */
/* Icons — simple Feather/Lucide-style inline SVGs matching icons.jsx     */
/* (stroke=currentColor, rounded caps, no fill)                           */
/* ---------------------------------------------------------------------- */

function HomeIcon({ className = "" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M2.25 8.25 9 2.5l6.75 5.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.75 7.25v6.75c0 .414.336.75.75.75h2.75v-4.5h3.5v4.5h2.75a.75.75 0 00.75-.75V7.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon({ className = "" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M1.5 15v-.75a3.75 3.75 0 013.75-3.75h2a3.75 3.75 0 013.75 3.75V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.25" cy="5.75" r="2.75" stroke="currentColor" strokeWidth="2" />
      <path d="M12.25 10.6a3.75 3.75 0 012.75 3.65V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 2.85a2.75 2.75 0 010 5.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ImageIcon({ className = "" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <rect x="2" y="3.5" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="6.25" cy="7.25" r="1.25" stroke="currentColor" strokeWidth="2" />
      <path d="M16 11.5l-3.9-3.9a1.5 1.5 0 00-2.12 0L4 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageCircleIcon({ className = "" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path
        d="M15.75 8.6c0 3.17-3.02 5.74-6.75 5.74-.86 0-1.68-.14-2.44-.38L3 15l1.02-2.8A5.6 5.6 0 012.25 8.6c0-3.17 3.02-5.74 6.75-5.74s6.75 2.57 6.75 5.74z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon({ className = "" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <rect x="3.5" y="8" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M5.75 8V5.5a3.25 3.25 0 016.5 0V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SparklesIcon({ className = "" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path
        d="M8.5 2l1.1 3.15L12.75 6.5l-3.15 1.35L8.5 11l-1.1-3.15L4.25 6.5l3.15-1.35L8.5 2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 10.5l.55 1.45 1.45.55-1.45.55-.55 1.45-.55-1.45-1.45-.55 1.45-.55.55-1.45z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon({ className = "" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <circle cx="9" cy="9" r="2.25" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9 2.5v2M9 13.5v2M15.5 9h-2M4.5 9h-2M13.66 4.34l-1.42 1.42M5.76 12.24l-1.42 1.42M13.66 13.66l-1.42-1.42M5.76 5.76L4.34 4.34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyeIcon({ className = "" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M1 8s2.4-4.5 7-4.5S15 8 15 8s-2.4 4.5-7 4.5S1 8 1 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Static config                                                          */
/* ---------------------------------------------------------------------- */

const NAV_ITEMS = [
  { key: "overview", Icon: HomeIcon },
  { key: "guests", Icon: UsersIcon },
  { key: "rsvp", Icon: EnvelopeIcon },
  { key: "eventCamera", Icon: CameraIcon },
  { key: "gallery", Icon: ImageIcon },
  { key: "voiceMessages", Icon: MessageCircleIcon },
  { key: "hiddenMoments", Icon: LockIcon },
  { key: "letters", Icon: EnvelopeIcon },
  { key: "experiences", Icon: SparklesIcon },
  { key: "settings", Icon: SettingsIcon },
];

const INITIAL_EXPERIENCE_STATE = {
  eventCamera: true,
  gallery: true,
  voiceMessages: true,
  hiddenMoments: true,
  letters: false,
  experiences: false,
};

/* ---------------------------------------------------------------------- */
/* Small shared pieces                                                    */
/* ---------------------------------------------------------------------- */

function StatusPill({ tone = "neutral", children, className = "" }) {
  const toneClasses =
    tone === "green"
      ? "bg-green-bg text-green-text"
      : tone === "amber"
        ? "bg-amber-bg text-amber-text"
        : "bg-surface text-muted";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${toneClasses} ${className}`}>
      {children}
    </span>
  );
}

function StatCard({ label, value, meta }) {
  return (
    <div className="flex flex-1 min-w-[180px] flex-col gap-2 rounded-xl border border-line bg-white p-5">
      <p className="text-xs font-semibold text-muted">{label}</p>
      <p className="font-display text-3xl font-extrabold text-black">{value}</p>
      <p className="text-[11px] text-muted">{meta}</p>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Overview content (matches the reference screenshot)                    */
/* ---------------------------------------------------------------------- */

function OverviewContent({ t, experienceState, onToggleExperience }) {
  const experienceItems = t("summary.experiences.items", { returnObjects: true });
  const guestRows = t("guestsPanel.rows", { returnObjects: true });
  const activityItems = t("activityPanel.items", { returnObjects: true });

  return (
    <div className="flex flex-col gap-6">
      {/* Stats row */}
      <div className="flex flex-wrap gap-4">
        <StatCard label={t("stats.activeEvent.label")} value={t("stats.activeEvent.value")} meta={t("stats.activeEvent.meta")} />
        <StatCard label={t("stats.invitedGuests.label")} value={t("stats.invitedGuests.value")} meta={t("stats.invitedGuests.meta")} />
        <StatCard label={t("stats.rsvp.label")} value={t("stats.rsvp.value")} meta={t("stats.rsvp.meta")} />
        <StatCard label={t("stats.activeExperiences.label")} value={String(Object.values(experienceState).filter(Boolean).length)} meta={t("stats.activeExperiences.meta")} />
      </div>

      {/* Workspace summary */}
      <div className="flex flex-col gap-6 rounded-xl border border-line bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-xl font-bold text-black">{t("summary.title")}</h2>
            <p className="text-[13px] text-muted">{t("summary.subtitle")}</p>
          </div>
          <StatusPill tone="green">
            <span className="h-1.5 w-1.5 rounded-full bg-green-text" />
            {t("summary.status")}
          </StatusPill>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Event details */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">{t("summary.details.date.label")}</p>
              <p className="text-sm font-semibold text-black">{t("summary.details.date.value")}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">{t("summary.details.location.label")}</p>
              <p className="text-sm font-semibold text-black">{t("summary.details.location.value")}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">{t("summary.details.guests.label")}</p>
              <p className="text-sm font-semibold text-black">{t("summary.details.guests.value")}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">{t("summary.details.readiness.label")}</p>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-extrabold text-black">{t("summary.details.readiness.value")}</span>
                <span className="text-xs text-muted">{t("summary.details.readiness.caption")}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                <div className="h-full rounded-full bg-black" style={{ width: t("summary.details.readiness.value") }} />
              </div>
            </div>
          </div>

          {/* Active experiences */}
          <div className="flex flex-col gap-4 rounded-lg border border-line bg-surface p-5">
            <p className="text-sm font-bold text-black">{t("summary.experiences.title")}</p>
            <ul className="flex flex-col gap-3.5">
              {experienceItems.map((item) => {
                const enabled = experienceState[item.key];
                return (
                  <li key={item.key} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-[13px] font-medium text-ink-soft">
                      <span className={`h-1.5 w-1.5 rounded-full ${enabled ? "bg-green-text" : "bg-faint"}`} />
                      {item.label}
                    </span>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onToggleExperience(item.key)}
                      aria-pressed={enabled}
                    >
                      <StatusPill tone={enabled ? "green" : "neutral"}>
                        {enabled ? t("summary.experiences.enabled") : t("summary.experiences.disabled")}
                      </StatusPill>
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom grid: guests table + activity feed */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-black">{t("guestsPanel.title")}</h3>
            <StatusPill tone="green">{t("guestsPanel.confirmedPill")}</StatusPill>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="whitespace-nowrap py-2.5 pr-3 text-xs font-semibold text-muted-2">{t("guestsPanel.table.guest")}</th>
                  <th className="whitespace-nowrap py-2.5 pr-3 text-xs font-semibold text-muted-2">{t("guestsPanel.table.response")}</th>
                  <th className="whitespace-nowrap py-2.5 pr-3 text-xs font-semibold text-muted-2">{t("guestsPanel.table.plusOnes")}</th>
                  <th className="whitespace-nowrap py-2.5 text-xs font-semibold text-muted-2">{t("guestsPanel.table.activity")}</th>
                </tr>
              </thead>
              <tbody>
                {guestRows.map((row) => (
                  <tr key={row.name} className="border-b border-line last:border-b-0">
                    <td className="whitespace-nowrap py-3 pr-3 text-sm font-semibold text-black">{row.name}</td>
                    <td className="whitespace-nowrap py-3 pr-3">
                      <StatusPill tone={row.tone}>{row.status}</StatusPill>
                    </td>
                    <td className="whitespace-nowrap py-3 pr-3 text-sm text-muted">{row.plusOnes}</td>
                    <td className="py-3 text-sm text-muted">{row.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-black">{t("activityPanel.title")}</h3>
            <StatusPill tone="neutral">{t("activityPanel.pill")}</StatusPill>
          </div>
          <ul className="flex flex-col">
            {activityItems.map((item, i) => (
              <li key={item.text} className={`flex items-start gap-3 py-3 ${i > 0 ? "border-t border-line" : ""}`}>
                <span
                  className={`mt-1.5 h-2 w-2 shrink-0 rounded-[3px] ${
                    item.tone === "green" ? "bg-green-text" : "bg-amber-text"
                  }`}
                />
                <div className="flex flex-col gap-0.5">
                  <p className="text-[13px] font-medium leading-snug text-ink-soft">{item.text}</p>
                  <p className="text-[11px] text-muted">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Placeholder content for sections not covered by the reference screen   */
/* ---------------------------------------------------------------------- */

function PlaceholderContent({ t, sectionKey, Icon, onBack }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl border border-line bg-white px-6 py-20 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-ink-soft">
        <Icon className="h-6 w-6" />
      </span>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-wide text-muted-2">{t("placeholders.eyebrow")}</p>
        <h2 className="font-display text-2xl font-bold text-black">{t(`sidebar.nav.${sectionKey}`)}</h2>
        <p className="max-w-md text-sm leading-6 text-muted">{t(`placeholders.${sectionKey}`)}</p>
      </div>
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onBack}
        className="rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-surface"
      >
        {t("placeholders.backToOverview")}
      </motion.button>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Page                                                                    */
/* ---------------------------------------------------------------------- */

export default function EventWorkspace() {
  const { t } = useTranslation("eventWorkspace");
  const [activeSection, setActiveSection] = useState("overview");
  const [experienceState, setExperienceState] = useState(INITIAL_EXPERIENCE_STATE);
  const [notifOpen, setNotifOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  function toggleExperience(key) {
    setExperienceState((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function handleShare() {
    setShareCopied(true);
    window.setTimeout(() => setShareCopied(false), 1800);
  }

  const activeNavItem = NAV_ITEMS.find((item) => item.key === activeSection) ?? NAV_ITEMS[0];

  return (
    <div className="flex min-h-screen w-full bg-surface">
      {/* Sidebar */}
      <aside className="flex w-[248px] shrink-0 flex-col justify-between border-r border-line bg-white px-5 py-8 max-lg:hidden">
        <div className="flex flex-col gap-7">
          <img src="/images/Lyst-logo_84x30.png" alt="Lyst" className="h-[30px] w-[84px]" />

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-muted">{t("sidebar.label")}</p>
              <h1 className="font-display text-lg font-bold leading-tight text-black">{t("sidebar.eventName")}</h1>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-line bg-surface p-4">
              <div className="flex items-center justify-between gap-2">
                <StatusPill tone="green">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-text" />
                  {t("sidebar.status.active")}
                </StatusPill>
                <span className="text-xs text-muted">{t("sidebar.status.date")}</span>
              </div>
              <p className="text-xs leading-5 text-muted">{t("sidebar.status.venueGuests")}</p>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ key, Icon }) => {
              const active = activeSection === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSection(key)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                    active ? "bg-black text-white" : "text-ink-soft hover:bg-surface"
                  }`}
                >
                  <Icon className="shrink-0" />
                  {t(`sidebar.nav.${key}`)}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 border-t border-line pt-5">
          <img src="/images/avatar-frame_40x40.png" alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />
          <div className="flex flex-col overflow-hidden">
            <p className="truncate text-[13px] font-semibold text-black">{t("sidebar.user.name")}</p>
            <p className="text-xs text-muted">{t("sidebar.user.profile")}</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto px-10 py-8 max-lg:px-6">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="font-display text-2xl font-extrabold text-black">{t("topBar.title")}</h1>
              <p className="text-sm text-muted">{t("topBar.subtitle")}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setNotifOpen((open) => !open)}
                  aria-label={t("topBar.notificationsLabel")}
                  aria-expanded={notifOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-black"
                >
                  <BellIcon />
                </motion.button>
                <AnimatePresence>
                  {notifOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-12 z-10 w-56 rounded-lg border border-line bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
                    >
                      <p className="text-xs text-muted">{t("topBar.notificationsEmpty")}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleShare}
                className="flex items-center gap-2 rounded-[10px] bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
              >
                <ShareIcon />
                {shareCopied ? t("topBar.shareInvitationCopied") : t("topBar.shareInvitation")}
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-[10px] border border-line bg-white px-4 py-2.5 text-sm font-semibold text-black"
              >
                <EyeIcon />
                {t("topBar.openInvitation")}
              </motion.button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {activeSection === "overview" ? (
                <OverviewContent t={t} experienceState={experienceState} onToggleExperience={toggleExperience} />
              ) : (
                <PlaceholderContent
                  t={t}
                  sectionKey={activeSection}
                  Icon={activeNavItem.Icon}
                  onBack={() => setActiveSection("overview")}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
