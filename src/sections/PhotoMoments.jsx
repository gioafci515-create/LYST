import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

const PHOTOS = [
  { src: "/images/about-1.png", top: "2%", left: "4%", w: "52%", rotate: -7, z: 10 },
  { src: "/images/invitations-2.png", top: "0%", left: "42%", w: "56%", rotate: 5, z: 20 },
  { src: "/images/about-4.png", top: "40%", left: "0%", w: "48%", rotate: 4, z: 15 },
  { src: "/images/product-gallery-1.png", top: "36%", left: "44%", w: "54%", rotate: -4, z: 25 },
];

export default function PhotoMoments() {
  const { t } = useTranslation("home");

  return (
    <section className="flex w-full flex-col items-center bg-surface-2 py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-16 px-20 max-lg:px-6">
        <Reveal
          direction="right"
          className="relative aspect-[5/4] w-[480px] max-w-full flex-1 min-w-[320px]"
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.9, rotate: photo.rotate }}
              whileInView={{ opacity: 1, scale: 1, rotate: photo.rotate }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 40 }}
              style={{ top: photo.top, left: photo.left, width: photo.w, zIndex: photo.z }}
              className="absolute aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border-4 border-white shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
            >
              <img src={photo.src} alt="" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </Reveal>

        <Reveal direction="left" delay={0.1} className="flex flex-1 min-w-[320px] flex-col items-start gap-4">
          <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">{t("photoMoments.eyebrow")}</p>
          <h2 className="font-display text-5xl font-extrabold leading-tight text-black max-lg:text-4xl">
            {t("photoMoments.title")}
          </h2>
          <p className="max-w-[480px] text-base leading-7 text-muted">{t("photoMoments.body")}</p>
        </Reveal>
      </div>
    </section>
  );
}
