import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];
const spinner = "/images/rsvp-spinner.svg";

export default function RsvpButtons({
  initialStatus = "idle",
  onRespond,
  attendLabel = "I'll attend",
  declineLabel = "Can't make it",
  processingLabel = "Confirming…",
  confirmedLabel = "You're confirmed",
  declinedLabel = "Response recorded",
  hostNotifiedLabel = "The host has received your response.",
  calendarLabel = "Add to calendar",
  onCalendarAdd,
  changeResponseLabel = "Change response",
  errorTitle = "Couldn't save your response.",
  errorSubtitle = "Please try again.",
  retryLabel = "Try again",
  className = "",
}) {
  const [status, setStatus] = useState(initialStatus);
  const [pendingChoice, setPendingChoice] = useState(null);

  const respond = async (choice) => {
    setPendingChoice(choice);
    setStatus("processing");
    try {
      await onRespond?.(choice);
      setStatus(choice);
    } catch {
      setStatus("error");
    }
  };

  if (status === "confirmed" || status === "declined") {
    const isConfirmed = status === "confirmed";
    return (
      <div className={`flex w-full max-w-[254px] flex-col items-start gap-2 ${className}`}>
        <div
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-[10px] text-sm font-semibold ${
            isConfirmed ? "border-[1.5px] border-[#219657] bg-black text-white" : "border border-line text-muted"
          }`}
        >
          <span>✓</span>
          <span>{isConfirmed ? confirmedLabel : declinedLabel}</span>
        </div>
        <div className="flex w-full flex-col items-start gap-3 pt-1 text-center">
          <p className="w-full text-xs text-muted">{hostNotifiedLabel}</p>
          {isConfirmed && (
            <button
              type="button"
              onClick={onCalendarAdd}
              className="w-full text-[13px] font-medium text-ink-soft underline decoration-from-font [text-underline-position:from-font]"
            >
              {calendarLabel}
            </button>
          )}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="w-full cursor-pointer text-xs text-muted"
          >
            {changeResponseLabel}
          </button>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={`flex w-full max-w-[254px] flex-col items-start gap-2 ${className}`}>
        <div className="flex w-full flex-col items-center gap-1 pb-2">
          <div className="flex items-center justify-center gap-1.5">
            <span className="flex size-[18px] items-center justify-center rounded-full border-[1.5px] border-red-600 text-[13px] font-semibold text-red-600">
              !
            </span>
            <p className="text-[13px] font-semibold text-red-600">{errorTitle}</p>
          </div>
          <p className="text-center text-xs text-muted">{errorSubtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => respond(pendingChoice)}
          className="flex h-11 w-full items-center justify-center rounded-[10px] bg-black text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
        >
          {retryLabel}
        </button>
      </div>
    );
  }

  const isProcessing = status === "processing";

  return (
    <div className={`flex w-full max-w-[254px] items-start gap-3 ${className}`}>
      <motion.button
        type="button"
        disabled={isProcessing}
        onClick={() => respond("confirmed")}
        whileTap={isProcessing ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.1, ease: EASE }}
        className="flex h-11 flex-1 items-center justify-center gap-2 rounded-[10px] bg-black text-sm font-semibold text-white transition-colors hover:bg-ink-soft disabled:opacity-70"
      >
        {isProcessing && pendingChoice === "confirmed" ? (
          <>
            <img src={spinner} alt="" className="size-4 animate-spin" />
            {processingLabel}
          </>
        ) : (
          attendLabel
        )}
      </motion.button>
      <motion.button
        type="button"
        disabled={isProcessing}
        onClick={() => respond("declined")}
        whileTap={isProcessing ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.1, ease: EASE }}
        className={`flex h-11 flex-1 items-center justify-center rounded-[10px] border border-line text-sm font-medium text-muted transition-colors hover:border-black hover:bg-black hover:text-white ${
          isProcessing && pendingChoice === "confirmed" ? "opacity-0" : ""
        }`}
      >
        {isProcessing && pendingChoice === "declined" ? (
          <span className="flex items-center gap-2">
            <img src={spinner} alt="" className="size-4 animate-spin" />
            {processingLabel}
          </span>
        ) : (
          declineLabel
        )}
      </motion.button>
    </div>
  );
}
