import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";
import { EASE, TIMING } from "../../lib/motion";

export default function BrandPhotos() {
  const { t } = useTranslation("about");
  const alts = t("brandPhotos.alts", { returnObjects: true });
  const photos = [
    { src: "/images/about-3.png", alt: alts[0] },
    { src: "/images/about-4.png", alt: alts[1] },
    { src: "/images/about-5.png", alt: alts[2] },
  ];

  return (
    <section className="flex w-full flex-col items-center pb-[120px] pt-10 max-lg:pb-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-8 px-20 max-lg:px-6">
        <Reveal direction="up">
          <h2 className="font-display text-[32px] font-extrabold leading-[1.15] text-black">
            {t("brandPhotos.heading")}
          </h2>
        </Reveal>
        <div className="flex w-full flex-wrap items-start gap-6 max-lg:flex-col">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.src}
              direction="up"
              delay={index * 0.1}
              className="h-[360px] flex-1 min-w-[260px] overflow-hidden rounded-lg max-lg:h-[240px] max-lg:w-full"
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: TIMING.invitationCardHover, ease: EASE }}
                className="h-full w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
