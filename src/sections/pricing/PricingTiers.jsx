import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";
import { DURATION, EASE, TIMING } from "../../lib/motion";

function CheckIcon({ className = "" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`shrink-0 ${className}`}
    >
      <path d="M14 0L4.375 14L0 7.63636" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Structural/behavioral metadata per tier (not translatable text), aligned by
// index with the "tiers" array in the pricing namespace.
const TIER_META = [
  { featured: false, ctaVariant: "solid" },
  { featured: true, ctaVariant: "solid" },
  { featured: false, ctaVariant: "outline" },
];

export default function PricingTiers() {
  const { t } = useTranslation("pricing");
  const tiers = t("tiers", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center pb-24">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-stretch gap-8 px-20 max-lg:px-6 lg:flex-row lg:items-stretch">
        {tiers.map((tier, index) => {
          const meta = TIER_META[index] ?? TIER_META[0];
          return (
            <Reveal key={index} direction="up" delay={index * 0.1} className="flex flex-1">
              <motion.div
                whileHover={{ y: -4, scale: 1.01, transition: { duration: TIMING.invitationCardHover, ease: EASE } }}
                whileTap={{ scale: 0.98, transition: { duration: DURATION.instant, ease: EASE } }}
                className={`relative flex flex-1 flex-col items-start gap-10 rounded-xl border p-10 max-lg:p-6 ${
                  meta.featured ? "border-[1.5px] border-black bg-surface" : "border-line bg-white"
                }`}
              >
                {meta.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-black px-2.5 py-1 text-[11px] font-bold text-white">
                    {t("featuredBadge")}
                  </span>
                )}

                <div className="flex flex-col items-start gap-4 self-stretch">
                  <h3 className="font-display text-[28px] font-bold text-black">{tier.name}</h3>
                  <p className="self-stretch text-sm leading-[1.5] text-muted">{tier.description}</p>
                </div>

                <p className="font-display text-[32px] font-extrabold leading-[1.1] text-black">{tier.price}</p>

                <div className="h-px w-full bg-line" />

                <ul className="flex flex-col items-start gap-4 self-stretch">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 self-stretch text-sm leading-[1.5] ${
                        meta.featured ? "font-semibold text-black" : "font-normal text-ink-soft"
                      }`}
                    >
                      <CheckIcon className={meta.featured ? "text-black" : "text-ink-soft"} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {meta.ctaVariant === "solid" ? (
                  <motion.div
                    whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                    className="w-full"
                  >
                    <Link
                      to="/create"
                      className="flex h-12 w-full items-center justify-center rounded-[10px] bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
                    >
                      {tier.cta}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                    className="w-full"
                  >
                    <a
                      href="#"
                      className="flex h-12 w-full items-center justify-center rounded-lg border border-black px-6 text-sm font-semibold text-black transition-colors hover:bg-surface"
                    >
                      {tier.cta}
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
