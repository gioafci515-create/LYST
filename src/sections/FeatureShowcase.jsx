import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

const MotionLink = motion(Link);

function MicIcon() {
  return (
    <span className="flex size-10 items-center justify-center rounded-full bg-black">
      <span className="block size-3.5 rounded-sm border-2 border-white" />
    </span>
  );
}

function Waveform() {
  const bars = [40, 60, 90, 30, 75, 100, 25, 55, 80, 40, 20, 45];
  return (
    <div className="flex h-8 flex-1 items-center gap-1">
      {bars.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full ${i < 5 ? "bg-black" : "bg-faint"}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export default function FeatureShowcase() {
  const { t } = useTranslation("home");
  const pills = t("featureShowcase.pills", { returnObjects: true });
  const voiceNotes = t("featureShowcase.voiceNotes", { returnObjects: true });

  const [activePill, setActivePill] = useState(1);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <section className="flex w-full flex-col items-center bg-white py-28 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-16 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-full flex-wrap items-start justify-between gap-8">
          <div className="flex w-[624px] max-w-full flex-col items-start gap-4">
            <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">
              {t("featureShowcase.eyebrow")}
            </p>
            <h2 className="self-stretch font-display text-[56px] font-extrabold leading-tight text-black max-lg:text-4xl">
              {t("featureShowcase.title")}
            </h2>
          </div>
          <div className="flex w-[515px] max-w-full flex-col items-start gap-4 pt-6">
            <p className="text-base leading-7 text-muted">{t("featureShowcase.body")}</p>
            <MotionLink
              to="/features"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="text-[15px] font-semibold text-black"
            >
              {t("featureShowcase.link")}
            </MotionLink>
          </div>
        </Reveal>

        <Reveal direction="fade" delay={0.1} className="flex flex-wrap items-start gap-3">
          {pills.map((pill, i) => (
            <motion.button
              key={pill}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActivePill(i)}
              aria-pressed={activePill === i}
              className={`rounded-full border border-line-soft px-5 py-3 text-[13px] font-bold transition-colors ${
                activePill === i ? "bg-black text-white" : "bg-white text-ink-soft"
              }`}
            >
              {pill}
            </motion.button>
          ))}
        </Reveal>

        <div className="flex w-full flex-wrap items-center gap-12">
          <Reveal direction="left" delay={0.1} className="flex w-[733px] max-w-full flex-col items-start gap-5">
            {voiceNotes.map((note, i) => (
              <motion.div
                key={note.name}
                whileHover={{ scale: 1.01 }}
                className="flex w-full flex-wrap items-center gap-6 rounded-[10px] border border-line bg-surface p-6"
              >
                <MicIcon />
                <div className="flex flex-1 min-w-[160px] flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-black">{note.name}</p>
                    <p className="text-[11px] text-muted-2">{note.time}</p>
                  </div>
                  <Waveform />
                </div>
                <p className="text-xs font-semibold text-muted">{note.duration}</p>
              </motion.div>
            ))}
          </Reveal>

          <Reveal
            direction="right"
            delay={0.2}
            className="flex flex-1 min-w-[320px] flex-col items-center gap-8 rounded-xl bg-black p-12"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-muted-2">
              {t("featureShowcase.record.label")}
            </p>
            <motion.button
              type="button"
              onClick={() => setIsRecording((prev) => !prev)}
              aria-pressed={isRecording}
              whileTap={{ scale: 0.95 }}
              animate={isRecording ? { scale: [1, 1.06, 1] } : { scale: 1 }}
              transition={
                isRecording
                  ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
              className="flex size-24 items-center justify-center rounded-full outline outline-2 -outline-offset-2 outline-ink-soft"
            >
              <span className="flex size-[72px] items-center justify-center rounded-full bg-[#FF3B30]">
                <span
                  className={`block border-2 border-white transition-all ${
                    isRecording ? "h-3.5 w-3.5 rounded-[3px]" : "h-5 w-3.5 rounded-sm"
                  }`}
                />
              </span>
            </motion.button>
            <div className="flex flex-col items-center gap-2 self-stretch">
              <p className="font-display text-xl font-bold text-white">
                {isRecording ? t("featureShowcase.record.headingActive") : t("featureShowcase.record.heading")}
              </p>
              <p className="text-center text-[13px] text-muted-2">{t("featureShowcase.record.body")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
