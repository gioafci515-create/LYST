import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import UnderlineLink from "../components/UnderlineLink";

const PHOTOS = ["/images/Frame_254x140.png", "/images/how-it-works-1.png", "/images/about-3.png"];

function HeartIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s-7.5-4.7-10-9.3C.4 8.3 2 4.8 5.4 4.1c2-.4 3.9.5 5 2.1 1.1-1.6 3-2.5 5-2.1 3.4.7 5 4.2 3.4 7.6C19.5 16.3 12 21 12 21z" />
    </svg>
  );
}

function PhoneMockup() {
  const { t } = useTranslation("home");
  const [rsvp, setRsvp] = useState("attend");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const lastTap = useRef(0);

  function goTo(i) {
    setPhotoIndex((i + PHOTOS.length) % PHOTOS.length);
  }

  function handleDragEnd(_, info) {
    if (info.offset.x < -40) goTo(photoIndex + 1);
    else if (info.offset.x > 40) goTo(photoIndex - 1);
  }

  function handleTap() {
    const now = Date.now();
    if (now - lastTap.current < 350) {
      setLiked(true);
      setTimeout(() => setLiked(false), 700);
    }
    lastTap.current = now;
  }

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="flex w-[310px] max-w-full flex-col gap-4 rounded-[40px] bg-black p-2 shadow-[0_24px_48px_rgba(0,0,0,0.16)]"
    >
      <div className="flex flex-1 flex-col gap-4 rounded-[32px] bg-white px-5 pb-5 pt-6">
        <div className="flex items-center justify-between text-xs font-semibold text-black">
          <span>9:41</span>
          <span className="text-[10px] text-muted">●●●</span>
        </div>

        <div className="relative h-[140px] w-full overflow-hidden rounded-xl bg-surface">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            onTap={handleTap}
            className="h-full w-full cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={photoIndex}
                src={PHOTOS[photoIndex]}
                alt={t("guestExperience.mockup.eventImageAlt")}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="h-full w-full select-none object-cover"
                draggable={false}
              />
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {liked && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1.15 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center drop-shadow-lg"
              >
                <HeartIcon />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
            {PHOTOS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === photoIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

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
    </motion.div>
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
          <UnderlineLink to="/how-it-works" label={t("guestExperience.cta")} />
        </Reveal>
      </div>
    </section>
  );
}
