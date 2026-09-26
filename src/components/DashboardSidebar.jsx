import { useTranslation } from "react-i18next";
import {
  UserIcon,
  CalendarIcon,
  UsersIcon,
  MailIcon,
  ImageIcon,
  MicIcon,
  LockIcon,
  MessageSquareIcon,
  SettingsIcon,
} from "./dashboardIcons";

export const NAV_ITEMS = [
  { id: "account", icon: UserIcon, labelKey: "nav.account" },
  { id: "events", icon: CalendarIcon, labelKey: "nav.events" },
  { id: "guests", icon: UsersIcon, labelKey: "nav.guests" },
  { id: "rsvp", icon: MailIcon, labelKey: "nav.rsvp" },
  { id: "photos", icon: ImageIcon, labelKey: "nav.photos" },
  { id: "voice", icon: MicIcon, labelKey: "nav.voice" },
  { id: "hidden", icon: LockIcon, labelKey: "nav.hidden" },
  { id: "letters", icon: MessageSquareIcon, labelKey: "nav.letters" },
  { id: "settings", icon: SettingsIcon, labelKey: "nav.settings" },
];

export default function DashboardSidebar({ activeSection, onSelect }) {
  const { t } = useTranslation("dashboardHost");

  return (
    <aside className="flex h-full w-[240px] shrink-0 flex-col justify-between border-r border-line bg-white">
      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-3">
          <img src="/images/Lyst-logo_112x40.png" alt="Lyst" className="h-7 w-auto" />
          <span className="rounded border border-line bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-muted">
            {t("badge")}
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ id, icon: Icon, labelKey }) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelect(id)}
                aria-current={active ? "page" : undefined}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  active ? "bg-black text-white font-semibold" : "text-ink-soft hover:bg-surface"
                }`}
              >
                <Icon size={18} className={active ? "text-white" : "text-muted"} />
                <span className="flex-1">{t(labelKey)}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3 border-t border-line p-4">
        <img
          src="/images/avatar-frame_40x40.png"
          alt=""
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
        <div className="flex min-w-0 flex-col">
          <p className="truncate text-sm font-semibold text-ink-soft">{t("profile.name")}</p>
          <p className="truncate text-[11px] text-muted">{t("profile.role")}</p>
        </div>
      </div>
    </aside>
  );
}
