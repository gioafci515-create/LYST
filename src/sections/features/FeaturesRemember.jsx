import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CameraIcon, ClockIcon, MicIcon } from "./icons";
import Reveal from "../../components/Reveal";

const FEATURES = [
  { icon: CameraIcon, to: "/features/shared-gallery" },
  { icon: ClockIcon, to: "/features/message-for-later" },
  { icon: ClockIcon, to: "/features/time-capsule" },
  { icon: MicIcon, to: "/features/video-messages" },
  { icon: ClockIcon, to: "/features/event-archive" },
];

export default function FeaturesRemember() {
  const { t } = useTranslation("features");
  const cards = t("remember.cards", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center bg-white py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-12 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-[720px] max-w-full flex-col items-start gap-4">
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">C - REMEMBER</p>
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-[1.1] text-black max-lg:text-4xl">
            {t("remember.title")}
          </h2>
          <p className="self-stretch text-base leading-[1.6] text-muted">{t("remember.description")}</p>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, to }, i) => {
            const card = cards[i];
            return (
              <Reveal key={to} direction="up" delay={Math.min(i * 0.08, 0.4)} className="h-full">
                <motion.div whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="h-full">
                  <Link
                    to={to}
                    className="flex h-full flex-col items-start gap-6 rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-black"
                  >
                    <div className="flex w-full items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-extrabold text-black">{card.name}</h3>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
                        <Icon />
                      </span>
                    </div>
                    <p className="self-stretch text-sm leading-[1.5] text-muted">{card.description}</p>
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
