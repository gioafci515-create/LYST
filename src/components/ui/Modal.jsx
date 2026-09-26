import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  onConfirm,
  children,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.24, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="flex w-[360px] max-w-full flex-col items-start gap-5 rounded-xl bg-white p-8 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]"
          >
            {title && <p className="text-xl font-semibold text-black">{title}</p>}
            {description && <p className="text-sm text-muted">{description}</p>}
            {children}
            {(onConfirm || onClose) && (
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-line px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-black hover:text-black"
                >
                  {cancelLabel}
                </button>
                {onConfirm && (
                  <button
                    type="button"
                    onClick={onConfirm}
                    className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
                  >
                    {confirmLabel}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
