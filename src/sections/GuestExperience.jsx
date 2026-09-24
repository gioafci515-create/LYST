import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

const MotionLink = motion(Link);

function PhoneMockup() {
  const { t } = useTranslation("home");
  const [rsvp, setRsvp] = useState("attend");

  return (
    <div className="flex w-[310px] max-w-full flex-col gap-4 rounded-[40px] bg-black p-2 shadow-[0_16px_32px_rgba(0,0,0,0.10)]">
      <div className="flex flex-1 flex-col gap-4 rounded-[32px] bg-white px-5 pb-5 pt-6">
        <div className="flex items-center justify-between text-xs font-semibold text-black">
          <span>9:41</span>
          <span className="text-[10px] text-muted">●●●</span>
        </div>
        <img
          src="/images/Frame_254x140.png"
          alt={t("guestExperience.mockup.eventImageAlt")}
          className="h-[140px] w-full rounded-xl object-cover"
        />
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-2xl font-extrabold leading-tight text-black">
            {t("guestExperience.mockup.eventTitle")}
          </h3>
          <p className="text-xs text-muted">{t("guestExperience.mockup.hosts")}</p>
          <div className="h-px w-full border-t border-line" />
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-medium text-ink-soft">{t("guestExperience.mockup.dateTime")}</p>
            <p className="text-[13px] font-medium text-ink-soft">{t("guestExperience.mockup.location")}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-muted">
              {t("guestExperience.mockup.dressCodeLabel")}
            </span>
            <span className="rounded-md border border-line bg-surface px-2 py-1 text-[11px] font-semibold text-black">
              {t("guestExperience.mockup.dressCodeValue")}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3">
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={() => setRsvp("attend")}
            aria-pressed={rsvp === "attend"}
            className={`h-11 rounded-[10px] text-sm font-semibold transition-colors ${
              rsvp === "attend" ? "bg-black text-white" : "border border-line text-muted"
            }`}
          >
            {t("guestExperience.mockup.attend")}
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={() => setRsvp("decline")}
            aria-pressed={rsvp === "decline"}
            className={`h-11 rounded-[10px] text-sm font-semibold transition-colors ${
              rsvp === "decline" ? "bg-black text-white" : "border border-line text-muted font-medium"
            }`}
          >
            {t("guestExperience.mockup.decline")}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default function GuestExperience() {
  const { t } = useTranslation("home");

  return (
    <section className="flex w-full flex-col items-center bg-surface py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-center gap-8 px-20 max-lg:px-6">
        <Reveal direction="left" className="flex w-[515px] max-w-full justify-center">
          <PhoneMockup />
        </Reveal>
        <Reveal
          direction="right"
          delay={0.1}
          className="flex w-[733px] max-w-full flex-col items-start gap-8"
        >
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">
            {t("guestExperience.eyebrow")}
          </p>
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-black max-lg:text-4xl">
            {t("guestExperience.title")}
          </h2>
          <p className="self-stretch text-base leading-7 text-muted">{t("guestExperience.body")}</p>
          <MotionLink
            to="/how-it-works"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group flex items-center gap-2 text-[15px] font-semibold text-black"
          >
            {t("guestExperience.cta")}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
