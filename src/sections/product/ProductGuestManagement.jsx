import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";
import { EASE, TIMING } from "../../lib/motion";

// Tone is a visual/status token, not translatable text, so it's kept here in
// code and matched by index to the guests list coming from the "product"
// namespace (see i18n/locales/*/product.json -> guestManagement.card.guests).
const GUEST_TONES = ["green", "green", "amber"];

function StatusBadge({ tone, children }) {
  const toneClasses =
    tone === "green" ? "bg-green-bg text-green-text" : "bg-amber-bg text-amber-text";
  return (
    <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${toneClasses}`}>{children}</span>
  );
}

export default function ProductGuestManagement() {
  const { t } = useTranslation("product");
  const stats = t("guestManagement.card.stats", { returnObjects: true });
  const guests = t("guestManagement.card.guests", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center border-t border-line bg-surface py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-16 px-20 max-lg:px-6">
        <Reveal direction="right" className="flex w-[515px] max-w-full flex-col items-start gap-6">
          <p className="font-display text-base font-bold uppercase tracking-wide text-faint">
            {t("guestManagement.eyebrow")}
          </p>
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-black max-lg:text-3xl">
            {t("guestManagement.title")}
          </h2>
          <p className="self-stretch text-base leading-7 text-muted">{t("guestManagement.description")}</p>
        </Reveal>

        <Reveal
          direction="left"
          whileHover={{ scale: 1.02, transition: { duration: TIMING.invitationCardHover, ease: EASE } }}
          className="flex w-[733px] max-w-full flex-col gap-6 rounded-xl border border-line bg-white p-8 shadow-[0_8px_16px_rgba(0,0,0,0.02)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-display text-lg font-bold text-black">{t("guestManagement.card.title")}</p>
            <span className="rounded-md border border-line bg-surface px-3 py-2 text-[13px] font-semibold text-black">
              {t("guestManagement.card.badge")}
            </span>
          </div>

          <div className="flex flex-wrap items-start gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-[180px] flex-1 flex-col items-start gap-2 rounded-lg border border-line bg-surface p-4"
              >
                <p className="text-[13px] font-semibold text-muted">{stat.label}</p>
                <p className="font-display text-[32px] font-extrabold leading-[1.15] text-black">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3">
            {guests.map((guest, index) => (
              <div
                key={guest.name}
                className="flex w-full flex-wrap items-center justify-between gap-3 border-b border-line py-3 last:border-b-0"
              >
                <div className="flex flex-col items-start gap-0.5">
                  <p className="text-sm font-semibold text-black">{guest.name}</p>
                  <p className="text-[11px] text-muted">{guest.note}</p>
                </div>
                <StatusBadge tone={GUEST_TONES[index]}>{guest.status}</StatusBadge>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
