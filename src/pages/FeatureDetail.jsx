import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import { EASE, TIMING } from "../lib/motion";
import ComingSoon from "./ComingSoon";
import {
  CameraIcon,
  MicIcon,
  EnvelopeIcon,
  ClockIcon,
  CalendarIcon,
  BellIcon,
  GalleryIcon,
} from "../sections/features/icons";

const MotionLink = motion(Link);

const CONTENT = {
  "event-camera": { key: "eventCamera", image: "/images/how-it-works-2.png", Icon: CameraIcon },
  "voice-guestbook": { key: "voiceGuestbook", image: "/images/how-it-works-3.png", Icon: MicIcon },
  "letters-from-the-room": { key: "lettersFromTheRoom", image: "/images/invitations-3.png", Icon: EnvelopeIcon },
  "disposable-camera": { key: "disposableCamera", image: "/images/disposable-camera-toast.png", Icon: CameraIcon },
  "hidden-moments": { key: "hiddenMoments", image: "/images/hidden-moments-embrace.png", Icon: ClockIcon },
  "live-polls": { key: "livePolls", image: "/images/live-polls-celebration.png", Icon: BellIcon },
  "shared-gallery": { key: "sharedGallery", image: "/images/shared-gallery-crowd.png", Icon: GalleryIcon },
  "message-for-later": { key: "messageForLater", image: "/images/message-for-later-card.png", Icon: EnvelopeIcon },
  "time-capsule": { key: "timeCapsule", image: "/images/time-capsule-silhouette.png", Icon: CalendarIcon },
  "video-messages": { key: "videoMessages", image: "/images/video-messages-devices.png", Icon: MicIcon },
  "event-archive": { key: "eventArchive", image: "/images/event-archive-table.png", Icon: ClockIcon },
};

export default function FeatureDetail() {
  const { slug } = useParams();
  const { t } = useTranslation("featureDetail");
  const entry = CONTENT[slug];

  if (!entry) return <ComingSoon titleKey="featureDetail" />;

  const { key, image, Icon } = entry;

  return (
    <>
      <section className="flex w-full flex-col items-center bg-white pb-16 pt-20 max-lg:pt-12">
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-16 px-20 max-lg:px-6">
          <Reveal direction="right" className="flex flex-1 min-w-[320px] flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-black text-white">
                <Icon />
              </span>
              <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">
                {t(`${key}.category`)}
              </p>
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.1] text-black max-lg:text-4xl">
              {t(`${key}.title`)}
            </h1>
            <p className="text-lg font-medium text-ink-soft">{t(`${key}.tagline`)}</p>
            <p className="max-w-[520px] text-base leading-7 text-muted">{t(`${key}.description`)}</p>
            <MotionLink
              to="/create"
              whileHover={{ scale: 1.03, transition: { duration: TIMING.buttonPrimaryHover, ease: EASE } }}
              whileTap={{ scale: 0.96, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
              className="rounded-[10px] bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              {t("cta")}
            </MotionLink>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="w-[480px] max-w-full flex-1 min-w-[300px]">
            <img
              src={image}
              alt={t(`${key}.imageAlt`)}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="flex w-full flex-col items-center border-t border-line bg-surface py-20 max-lg:py-12">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-8 px-20 max-lg:px-6">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {t(`${key}.highlights`, { returnObjects: true }).map((item, i) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={i * 0.1}
                className="flex h-full flex-col items-start gap-3 rounded-2xl border border-line bg-white p-6"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-bold text-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Link to="/features" className="text-sm font-semibold text-black hover:underline">
            ← {t("backToFeatures")}
          </Link>
        </div>
      </section>
    </>
  );
}
