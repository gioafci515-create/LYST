import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { EASE, DURATION, TIMING } from "../../lib/motion";
import { CheckCircleIcon, LinkIcon } from "./icons";

function formatDateShort(dateStr, lang) {
  if (!dateStr) return "—";
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  return new Date(y, m - 1, d).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" });
}

export default function Step7Publish({ data, publishing, published, uniqueUrl }) {
  const { t, i18n } = useTranslation("createWizard");
  const { details, eventType, guestsSettings } = data;
  const [copied, setCopied] = useState(false);

  const eventTypeLabel = eventType ? t(`step1.types.${eventType}`) : "—";
  const activeFeatureLabels = ["step5.core.invite.title", "step5.core.rsvp.title"]
    .map((key) => t(key));
  const optionalOn = Object.entries(data.features)
    .filter(([, on]) => on)
    .map(([key]) => t(`step5.optional.${key}.title`));
  const featuresLine = [...activeFeatureLabels, ...optionalOn].join(", ");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(uniqueUrl);
    } catch {
      // clipboard not available (e.g. insecure context) — ignore silently
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: details.eventName, url: uniqueUrl });
        return;
      } catch {
        // user cancelled or share failed — fall back to copy
      }
    }
    handleCopy();
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[13px] font-bold text-muted-2">{t("step7.eyebrow")}</p>
      <h1 className="font-display text-4xl font-extrabold text-black md:text-[40px]">{t("step7.title")}</h1>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-6 rounded-xl border border-line bg-surface p-8">
            <p className="text-xl font-bold text-black">{t("step7.package.title")}</p>
            <div className="flex flex-col gap-2">
              <p className="text-base text-muted">{t("step7.package.name", { type: eventTypeLabel })}</p>
              <p className="text-[13px] text-muted">{t("step7.package.price")}</p>
            </div>
            <div className="h-px w-full bg-line" />
            <div className="flex flex-col gap-3">
              <p className="text-[13px] text-muted">✓ {t("step7.package.perk1")}</p>
              <p className="text-[13px] text-muted">✓ {t("step7.package.perk2")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold text-black">{t("step7.paymentMethod.title")}</p>
            <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-line bg-white p-5">
              <input type="radio" name="payment-method" checked readOnly className="size-5 accent-black" />
              <span className="text-[15px] font-semibold text-black">{t("step7.paymentMethod.card")}</span>
            </label>
          </div>

          <div className="flex flex-col gap-6 rounded-xl border border-line bg-white p-8">
            <p className="text-lg font-bold text-black">{t("step7.summary.title")}</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted">{t("step7.summary.event")}</span>
                <span className="text-black">{eventTypeLabel}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted">{t("step7.summary.date")}</span>
                <span className="text-black">{formatDateShort(details.date, i18n.language)}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted">{t("step7.summary.location")}</span>
                <span className="text-black">{details.location || "—"}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted">{t("step7.summary.guests")}</span>
                <span className="text-black">
                  {guestsSettings.maxGuests} {t("step7.summary.guestsUnit")}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 text-[13px]">
                <span className="shrink-0 text-muted">{t("step7.summary.features")}</span>
                <span className="text-right text-black">{featuresLine}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          {!published ? (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-line bg-surface p-8 text-center">
              {publishing ? (
                <>
                  <div className="size-8 animate-spin rounded-full border-2 border-line border-t-black" />
                  <p className="text-sm font-semibold text-black">{t("step7.publishing")}</p>
                </>
              ) : (
                <>
                  <p className="text-base font-bold text-black">{t("step7.before.title")}</p>
                  <p className="max-w-[320px] text-sm text-muted">{t("step7.before.description")}</p>
                </>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.standard, ease: EASE }}
              className="flex flex-col gap-8 rounded-xl border border-line bg-white p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-bg text-green-text">
                  <CheckCircleIcon />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-black">{t("step7.success.title")}</p>
                  <p className="text-[13px] text-muted">{t("step7.success.subtitle")}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[13px] text-muted">{t("step7.success.urlLabel")}</p>
                <div className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-4 sm:flex-row sm:items-center">
                  <span className="flex-1 break-all text-[13px] text-black">{uniqueUrl}</span>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02, transition: { duration: TIMING.buttonSecondaryHover, ease: EASE } }}
                    whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                    onClick={handleCopy}
                    className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-semibold text-muted transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    <LinkIcon />
                    {copied ? t("step7.success.copied") : t("step7.success.copy")}
                  </motion.button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02, transition: { duration: TIMING.buttonPrimaryHover, ease: EASE } }}
                    whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                    onClick={handleShare}
                    className="flex-1 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white"
                  >
                    {t("step7.success.share")}
                  </motion.button>
                  <motion.a
                    href={uniqueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, transition: { duration: TIMING.buttonSecondaryHover, ease: EASE } }}
                    whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                    className="flex-1 rounded-lg border border-line px-4 py-3 text-center text-sm font-semibold text-muted transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    {t("step7.success.open")}
                  </motion.a>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.01, transition: { duration: TIMING.buttonSecondaryHover, ease: EASE } }}
                  whileTap={{ scale: 0.98, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                  className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-black hover:bg-black hover:text-white"
                >
                  {t("step7.success.dashboard")}
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
