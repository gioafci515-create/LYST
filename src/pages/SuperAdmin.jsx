import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------------------------------------------------------- */
/* Inline icons — simple Feather/Lucide-style line icons, stroke=currentColor */
/* ---------------------------------------------------------------------- */

function IconBase({ className = "", size = 18, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </IconBase>
  );
}

function ShoppingBagIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </IconBase>
  );
}

function UsersIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
  );
}

function CalendarIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </IconBase>
  );
}

function BarChart2Icon(props) {
  return (
    <IconBase {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </IconBase>
  );
}

function DollarSignIcon(props) {
  return (
    <IconBase {...props}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </IconBase>
  );
}

function UserCheckIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </IconBase>
  );
}

function SettingsIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </IconBase>
  );
}

function CreditCardIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </IconBase>
  );
}

function ActivityIcon(props) {
  return (
    <IconBase {...props}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </IconBase>
  );
}

function RotateCwIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <polyline points="21 3 21 9 15 9" />
    </IconBase>
  );
}

function SearchIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </IconBase>
  );
}

function BellIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6.8 15a1.65 1.65 0 0 1-1.28-1.82C5.9 12.14 7 10.62 7 9a5 5 0 0 1 10 0c0 1.62 1.1 3.14 1.47 4.18A1.65 1.65 0 0 1 17.2 15z" />
      <path d="M9.5 18a2.5 2.5 0 0 0 5 0" />
    </IconBase>
  );
}

function ChevronUpDownIcon(props) {
  return (
    <IconBase {...props}>
      <polyline points="8 9 12 5 16 9" />
      <polyline points="8 15 12 19 16 15" />
    </IconBase>
  );
}

/* ---------------------------------------------------------------------- */
/* Static config                                                           */
/* ---------------------------------------------------------------------- */

const NAV_ITEMS = [
  { key: "home", Icon: HomeIcon },
  { key: "orders", Icon: ShoppingBagIcon },
  { key: "clients", Icon: UsersIcon },
  { key: "events", Icon: CalendarIcon },
  { key: "analytics", Icon: BarChart2Icon },
  { key: "finance", Icon: DollarSignIcon },
  { key: "team", Icon: UserCheckIcon },
  { key: "settings", Icon: SettingsIcon },
];

const STAT_KEYS = [
  { key: "revenue", Icon: CreditCardIcon },
  { key: "activePlans", Icon: ActivityIcon },
  { key: "publishedEvents", Icon: UsersIcon },
  { key: "activeEvents", Icon: CalendarIcon },
];

const CHART_MONTHS = [
  { key: "jun", value: 34000 },
  { key: "jul", value: 41000 },
  { key: "aug", value: 38000 },
  { key: "sep", value: 47850 },
];
const MAX_CHART_VALUE = Math.max(...CHART_MONTHS.map((m) => m.value));

const STATUS_TONE = {
  confirmed: "bg-green-bg text-green-text",
  processing: "bg-amber-bg text-amber-text",
  completed: "bg-[#E3F2FD] text-[#1565C0]",
};

/* ---------------------------------------------------------------------- */
/* Small building blocks                                                   */
/* ---------------------------------------------------------------------- */

function StatCard({ Icon, label, value, trend, trendCompare }) {
  return (
    <div className="flex flex-1 min-w-[220px] flex-col gap-4 rounded-xl border border-line bg-white p-5">
      <div className="flex w-full items-center justify-between gap-2">
        <p className="text-[13px] font-semibold text-muted">{label}</p>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-ink-soft">
          <Icon size={16} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-display text-[28px] font-extrabold leading-none text-black">{value}</p>
        {trend && (
          <p className="text-xs">
            <span className="font-semibold text-green-text">{trend}</span>{" "}
            <span className="text-faint">{trendCompare}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status, children }) {
  return (
    <span className={`inline-flex rounded-md px-2.5 py-1 text-[11px] font-bold ${STATUS_TONE[status] || ""}`}>
      {children}
    </span>
  );
}

function PlaceholderSection({ sectionKey, Icon, t }) {
  return (
    <motion.div
      key={sectionKey}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-line bg-white px-6 py-24 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-ink-soft">
        <Icon size={24} />
      </div>
      <h2 className="font-display text-xl font-bold text-black">
        {t("placeholder.title", { section: t(`sidebar.nav.${sectionKey}`) })}
      </h2>
      <p className="max-w-[360px] text-sm leading-6 text-muted">{t("placeholder.body")}</p>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------- */
/* Page                                                                     */
/* ---------------------------------------------------------------------- */

export default function SuperAdmin() {
  const { t } = useTranslation("dashboardAdmin");

  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDir, setSortDir] = useState(null); // null | "asc" | "desc"
  const [selectedMonth, setSelectedMonth] = useState("sep");
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const activeNav = NAV_ITEMS.find((item) => item.key === activeSection) ?? NAV_ITEMS[0];

  const rows = t("table.rows", { returnObjects: true });
  const activityItems = t("activity.items", { returnObjects: true });

  const visibleRows = useMemo(() => {
    let list = Array.isArray(rows) ? rows : [];
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (row) => row.client.toLowerCase().includes(q) || row.event.toLowerCase().includes(q)
      );
    }
    if (sortDir) {
      list = [...list].sort((a, b) => {
        const av = parseFloat(a.amount.replace(/[^0-9.]/g, ""));
        const bv = parseFloat(b.amount.replace(/[^0-9.]/g, ""));
        return sortDir === "asc" ? av - bv : bv - av;
      });
    }
    return list;
  }, [rows, searchQuery, sortDir]);

  function toggleAmountSort() {
    setSortDir((prev) => (prev === null ? "desc" : prev === "desc" ? "asc" : null));
  }

  function handleRefresh() {
    if (isRefreshing) return;
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 700);
  }

  return (
    <div className="flex min-h-screen w-full bg-surface font-sans">
      {/* --------------------------------------------------------------- */}
      {/* Sidebar */}
      {/* --------------------------------------------------------------- */}
      <aside className="flex w-[240px] shrink-0 flex-col justify-between bg-ink-soft px-6 py-6">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-lg font-extrabold text-black">
              L
            </div>
            <span className="font-display text-base font-bold text-white">{t("sidebar.wordmark")}</span>
            <span className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/70">
              {t("sidebar.badge")}
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ key, Icon }) => {
              const isActive = activeSection === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSection(key)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                    isActive ? "bg-white text-black" : "text-white/65 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {t(`sidebar.nav.${key}`)}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 border-t border-white/10 pt-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
            {t("sidebar.user.name").slice(0, 1)}
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-semibold text-white">{t("sidebar.user.name")}</span>
            <span className="truncate text-xs text-white/50">{t("sidebar.user.role")}</span>
          </div>
        </div>
      </aside>

      {/* --------------------------------------------------------------- */}
      {/* Main content */}
      {/* --------------------------------------------------------------- */}
      <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-8 px-10 py-10 max-lg:px-6">
          {/* Top bar */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="font-display text-3xl font-extrabold text-black">{t("topbar.title")}</h1>
              <p className="max-w-[560px] text-sm leading-6 text-muted">{t("topbar.subtitle")}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <SearchIcon
                  size={16}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("topbar.searchPlaceholder")}
                  className="w-[190px] rounded-lg border border-line bg-white py-2.5 pl-9 pr-3 text-sm text-black placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm font-semibold text-ink-soft">
                <CalendarIcon size={16} />
                {t("topbar.dateLabel")}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsNotifOpen((v) => !v)}
                  aria-expanded={isNotifOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white transition-colors hover:bg-ink-soft"
                >
                  <BellIcon size={16} />
                </button>
                <AnimatePresence>
                  {isNotifOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-12 z-20 w-72 overflow-hidden rounded-xl border border-line bg-white shadow-lg"
                    >
                      <p className="border-b border-line px-4 py-3 text-xs font-bold uppercase tracking-wide text-muted-2">
                        {t("notifications.title")}
                      </p>
                      <div className="flex max-h-64 flex-col overflow-y-auto">
                        {activityItems.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex flex-col gap-0.5 border-b border-line px-4 py-3 last:border-b-0">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-semibold text-black">{item.name}</p>
                              <p className="shrink-0 text-[11px] text-faint">{item.time}</p>
                            </div>
                            <p className="text-xs text-muted">{item.action}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Section content */}
          <AnimatePresence mode="wait">
            {activeSection === "home" ? (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-8"
              >
                {/* Stats row */}
                <div className="flex flex-wrap gap-4">
                  {STAT_KEYS.map(({ key, Icon }) => (
                    <StatCard
                      key={key}
                      Icon={Icon}
                      label={t(`stats.${key}.label`)}
                      value={t(`stats.${key}.value`)}
                      trend={key !== "activeEvents" ? t(`stats.${key}.trend`) : null}
                      trendCompare={t("stats.trendCompare")}
                    />
                  ))}
                </div>

                {/* Chart + activity row */}
                <div className="flex flex-wrap items-stretch gap-6">
                  <div className="flex min-w-[380px] flex-[1.4] flex-col gap-6 rounded-xl border border-line bg-white p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-display text-lg font-bold text-black">{t("chart.title")}</h3>
                        <p className="text-xs text-muted">{t("chart.subtitle")}</p>
                      </div>
                      <span className="rounded-md bg-green-bg px-2.5 py-1 text-xs font-bold text-green-text">
                        {t("chart.badge")}
                      </span>
                    </div>

                    <div className="flex w-full items-end justify-between gap-4 px-2 pt-6">
                      {CHART_MONTHS.map((month) => {
                        const heightPct = Math.max((month.value / MAX_CHART_VALUE) * 100, 8);
                        const isSelected = selectedMonth === month.key;
                        return (
                          <button
                            key={month.key}
                            type="button"
                            onClick={() => setSelectedMonth(month.key)}
                            className="flex flex-1 flex-col items-center gap-2"
                          >
                            <span className="text-xs font-semibold text-black">
                              ₾{month.value.toLocaleString("en-US")}
                            </span>
                            <div className="flex h-[160px] w-full items-end">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${heightPct}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`w-full rounded-md transition-colors ${
                                  isSelected ? "bg-black" : "bg-ink-soft/80 hover:bg-black"
                                }`}
                              />
                            </div>
                            <span className={`text-xs font-semibold ${isSelected ? "text-black" : "text-muted"}`}>
                              {t(`chart.months.${month.key}`)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex min-w-[300px] flex-1 flex-col gap-4 rounded-xl border border-line bg-white p-6">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-black">{t("activity.title")}</h3>
                      <button
                        type="button"
                        onClick={handleRefresh}
                        aria-label="refresh"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-black"
                      >
                        <RotateCwIcon size={16} className={isRefreshing ? "animate-spin" : ""} />
                      </button>
                    </div>
                    <div className="flex flex-col">
                      {activityItems.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col gap-0.5 border-b border-line py-3 first:pt-0 last:border-b-0 last:pb-0"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-semibold text-black">{item.name}</p>
                            <p className="shrink-0 text-[11px] text-faint">{item.time}</p>
                          </div>
                          <p className="text-xs text-muted">{item.action}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Table card */}
                <div className="flex flex-col gap-5 rounded-xl border border-line bg-white p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-black">{t("table.title")}</h3>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActiveSection("orders")}
                      className="rounded-md border border-line bg-white px-3 py-2 text-xs font-semibold text-black hover:bg-surface"
                    >
                      {t("table.viewAll")}
                    </motion.button>
                  </div>

                  <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-line text-xs font-semibold uppercase tracking-wide text-muted-2">
                          <th className="py-3 pr-3 font-semibold">{t("table.headers.id")}</th>
                          <th className="py-3 pr-3 font-semibold">{t("table.headers.client")}</th>
                          <th className="py-3 pr-3 font-semibold">{t("table.headers.event")}</th>
                          <th className="py-3 pr-3 font-semibold">{t("table.headers.date")}</th>
                          <th className="py-3 pr-3 font-semibold">
                            <button
                              type="button"
                              onClick={toggleAmountSort}
                              className="flex items-center gap-1 uppercase tracking-wide text-muted-2 hover:text-black"
                            >
                              {t("table.headers.amount")}
                              <ChevronUpDownIcon size={12} />
                            </button>
                          </th>
                          <th className="py-3 pr-3 font-semibold">{t("table.headers.status")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visibleRows.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="py-8 text-center text-sm text-muted">
                              {t("table.noResults")}
                            </td>
                          </tr>
                        ) : (
                          visibleRows.map((row) => (
                            <tr
                              key={row.id}
                              onClick={() => setSelectedRowId((prev) => (prev === row.id ? null : row.id))}
                              className={`cursor-pointer border-b border-line-soft text-sm transition-colors last:border-b-0 ${
                                selectedRowId === row.id ? "bg-surface" : "hover:bg-surface"
                              }`}
                            >
                              <td className="py-3.5 pr-3 font-semibold text-black">{row.id}</td>
                              <td className="py-3.5 pr-3 text-black">{row.client}</td>
                              <td className="py-3.5 pr-3 text-muted">{row.event}</td>
                              <td className="py-3.5 pr-3 text-muted">{row.date}</td>
                              <td className="py-3.5 pr-3 font-semibold text-black">{row.amount}</td>
                              <td className="py-3.5 pr-3">
                                <StatusBadge status={row.status}>{t(`table.status.${row.status}`)}</StatusBadge>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ) : (
              <PlaceholderSection sectionKey={activeSection} Icon={activeNav.Icon} t={t} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
