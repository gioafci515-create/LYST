import { useCallback, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { EASE, DURATION, TIMING } from "../lib/motion";
import Step1EventType, { isStep1Valid } from "../sections/create-wizard/Step1EventType";
import Step2Template, { isStep2Valid } from "../sections/create-wizard/Step2Template";
import Step3Details, { isStep3Valid } from "../sections/create-wizard/Step3Details";
import Step4Guests from "../sections/create-wizard/Step4Guests";
import Step5Features from "../sections/create-wizard/Step5Features";
import Step6Preview from "../sections/create-wizard/Step6Preview";
import Step7Publish from "../sections/create-wizard/Step7Publish";
import { CheckIcon } from "../sections/create-wizard/icons";

const STEP_IDS = ["type", "style", "details", "guests", "features", "preview", "finish"];
const TOTAL_STEPS = STEP_IDS.length;

function initialData() {
  return {
    eventType: null,
    template: null,
    templateFilter: "digital",
    details: {
      eventName: "",
      eventNameAuto: true,
      date: "",
      time: "",
      location: "",
      dressCode: "",
      description: "",
      additionalDetails: "",
    },
    guestsSettings: {
      maxGuests: 150,
      allowPlusOne: true,
      rsvpDeadline: "",
      autoReminders: false,
    },
    features: {
      eventCamera: true,
      voiceGuestbook: true,
      hiddenMoments: false,
      lettersFromRoom: false,
      timeCapsule: false,
      sharedGallery: true,
      messageForLater: false,
    },
  };
}

function StepChip({ index, currentStep, labelKey, onClick, clickable, t }) {
  const isDone = index < currentStep;
  const isActive = index === currentStep;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      className={`flex items-center gap-2 whitespace-nowrap ${clickable ? "cursor-pointer" : "cursor-default"}`}
    >
      <span
        className={`flex size-5 items-center justify-center rounded-full text-[11px] font-bold ${
          isActive ? "bg-black text-white" : isDone ? "bg-green-bg text-green-text" : "bg-surface text-muted"
        }`}
      >
        {isDone ? <CheckIcon /> : index}
      </span>
      <span className={`text-[13px] ${isActive ? "font-semibold text-black" : "text-muted"}`}>
        {t(`nav.steps.${labelKey}`)}
      </span>
    </button>
  );
}

export default function CreateWizard() {
  const { t } = useTranslation("createWizard");

  const [step, setStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1);
  const [data, setData] = useState(initialData);
  const [draftSaved, setDraftSaved] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const draftTimeout = useRef(null);
  const [uniqueUrl] = useState(
    () => `https://lyst.ge/invitation/${Math.random().toString(36).slice(2, 10)}`
  );

  const updateData = useCallback((patch) => {
    setData((prev) => ({ ...prev, ...patch }));
  }, []);

  const updateDetails = useCallback((patch) => {
    setData((prev) => ({ ...prev, details: { ...prev.details, ...patch } }));
  }, []);

  const updateGuestsSettings = useCallback((patch) => {
    setData((prev) => ({ ...prev, guestsSettings: { ...prev.guestsSettings, ...patch } }));
  }, []);

  const updateFeature = useCallback((key, value) => {
    setData((prev) => ({ ...prev, features: { ...prev.features, [key]: value } }));
  }, []);

  const canProceed = useMemo(() => {
    if (step === 1) return isStep1Valid(data);
    if (step === 2) return isStep2Valid(data);
    if (step === 3) return isStep3Valid(data);
    return true;
  }, [step, data]);

  function goToStep(n) {
    if (n === step) return;
    if (n > maxStepReached) return;
    setStep(n);
  }

  function handleNext() {
    if (!canProceed || step >= TOTAL_STEPS) return;
    const next = step + 1;
    setMaxStepReached((prev) => Math.max(prev, next));
    setStep(next);
  }

  function handleBack() {
    setStep((prev) => Math.max(1, prev - 1));
  }

  function handleSaveDraft() {
    setDraftSaved(true);
    if (draftTimeout.current) clearTimeout(draftTimeout.current);
    draftTimeout.current = setTimeout(() => setDraftSaved(false), 2500);
  }

  function handlePublish() {
    if (publishing || published) return;
    setPublishing(true);
    setTimeout(() => {
      setPublishing(false);
      setPublished(true);
    }, 1000);
  }

  const stepProps = { data, updateData, updateDetails, updateGuestsSettings, updateFeature };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <header className="flex w-full flex-col items-center border-b border-line bg-white">
        <div className="flex h-20 w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-20 max-lg:px-6">
          <div className="flex shrink-0 items-center gap-2">
            <img src="/images/Lyst-logo_112x40.png" alt="Lyst" className="h-9 w-24" />
            <span className="rounded border border-line bg-surface px-2 py-0.5 text-[9px] font-semibold text-muted">
              {t("nav.badge")}
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-4 max-xl:hidden">
            {STEP_IDS.map((labelKey, i) => {
              const index = i + 1;
              return (
                <div key={labelKey} className="flex items-center gap-4">
                  <StepChip
                    index={index}
                    currentStep={step}
                    labelKey={labelKey}
                    clickable={index <= maxStepReached}
                    onClick={() => goToStep(index)}
                    t={t}
                  />
                  {index < TOTAL_STEPS && <span className="text-xs text-muted">/</span>}
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <AnimatePresence>
              {draftSaved && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: DURATION.instant, ease: EASE }}
                  className="rounded-full bg-green-bg px-3 py-1 text-[9px] font-semibold uppercase tracking-wide text-green-text"
                >
                  {t("nav.draftSaved")}
                </motion.span>
              )}
            </AnimatePresence>
            <Link to="/" className="text-[13px] font-medium text-muted hover:text-black">
              {t("nav.saveExit")}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center py-12">
        <div className="w-full max-w-[1600px] px-20 max-lg:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: DURATION.standard, ease: EASE }}
            >
              {step === 1 && <Step1EventType {...stepProps} />}
              {step === 2 && <Step2Template {...stepProps} />}
              {step === 3 && <Step3Details {...stepProps} />}
              {step === 4 && <Step4Guests {...stepProps} />}
              {step === 5 && <Step5Features {...stepProps} />}
              {step === 6 && <Step6Preview data={data} />}
              {step === 7 && (
                <Step7Publish data={data} publishing={publishing} published={published} uniqueUrl={uniqueUrl} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {!published && (
        <footer className="flex w-full flex-col items-center border-t border-line bg-white">
          <div className="flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-20 py-6 max-lg:px-6">
            <motion.button
              type="button"
              whileHover={step > 1 ? { scale: 1.03, transition: { duration: TIMING.buttonSecondaryHover, ease: EASE } } : undefined}
              whileTap={step > 1 ? { scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } } : undefined}
              onClick={handleBack}
              disabled={step === 1}
              className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-muted disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("nav.back")}
            </motion.button>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="text-sm font-medium text-muted hover:text-black"
              >
                {t("nav.saveDraft")}
              </button>

              {step < TOTAL_STEPS ? (
                <motion.button
                  type="button"
                  whileHover={canProceed ? { scale: 1.03, transition: { duration: TIMING.buttonPrimaryHover, ease: EASE } } : undefined}
                  whileTap={canProceed ? { scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } } : undefined}
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="rounded-[10px] bg-black px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {t("nav.next")}
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  whileHover={!publishing ? { scale: 1.03, transition: { duration: TIMING.buttonPrimaryHover, ease: EASE } } : undefined}
                  whileTap={!publishing ? { scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } } : undefined}
                  onClick={handlePublish}
                  disabled={publishing}
                  className="rounded-[10px] bg-black px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {publishing ? t("step7.publishing") : t("nav.publish")}
                </motion.button>
              )}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
