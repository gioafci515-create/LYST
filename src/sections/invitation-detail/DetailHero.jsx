import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";
import { EASE, TIMING } from "../../lib/motion";

const MotionLink = motion.create(Link);

function CheckIcon({ className = "" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className={className}>
      <path
        d="M2.5 7.5L5.5 10.5L11.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DetailHero({ template }) {
  const { t } = useTranslation("invitations");
  const features = t("detail.features", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center pb-24 pt-8 max-lg:pb-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-10 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-[720px] max-w-full flex-col items-start gap-4">
          <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
            {t("detail.eyebrow")}
          </span>
          <h1 className="font-display text-5xl font-extrabold leading-tight text-ink-soft max-lg:text-4xl">
            {template.name}
          </h1>
          <p className="max-w-[640px] text-base leading-7 text-muted">{template.description}</p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="rounded-md border border-line bg-surface px-3 py-1 text-xs font-semibold text-muted">
              {template.tag}
            </span>
            <span className="rounded-md border border-line bg-surface px-3 py-1 text-xs font-semibold text-muted">
              {t("detail.digitalFormat")}
            </span>
          </div>
        </Reveal>

        <div className="flex w-full flex-wrap items-start gap-8">
          <Reveal direction="right" className="flex min-w-[320px] flex-1 flex-col items-start gap-3">
            <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">
              {t("detail.previewLabel")}
            </p>
            <img
              src={template.image}
              alt={template.name}
              className="aspect-[4/5] w-full max-w-[420px] rounded-2xl border border-line object-cover shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            />
            <p className="max-w-[420px] text-sm leading-relaxed text-muted">{t("detail.previewNote")}</p>
          </Reveal>

          <Reveal
            direction="left"
            delay={0.1}
            className="flex min-w-[320px] flex-1 flex-col items-start gap-6 rounded-2xl border border-line bg-white p-8"
          >
            <p className="font-display text-lg font-bold text-black">{t("detail.featuresTitle")}</p>
            <div className="flex w-full flex-col items-start gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex w-full items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <CheckIcon />
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-wrap items-center gap-3 border-t border-line pt-6">
              <MotionLink
                to="/create"
                whileHover={{ scale: 1.02, transition: { duration: TIMING.buttonPrimaryHover, ease: EASE } }}
                whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                className="rounded-[10px] bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
              >
                {t("detail.ctaPrimary")}
              </MotionLink>
              <motion.a
                href={template.image}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, transition: { duration: TIMING.buttonSecondaryHover, ease: EASE } }}
                whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                className="rounded-[10px] border border-line px-6 py-3 text-sm font-semibold text-black transition-colors hover:border-black"
              >
                {t("detail.ctaSecondary")}
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
