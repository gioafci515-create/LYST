import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

export default function ProductArchive() {
  const { t } = useTranslation("product");

  return (
    <section className="flex w-full flex-col items-center border-t border-line bg-surface py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-16 px-20 max-lg:px-6">
        <Reveal direction="right" className="flex w-[515px] max-w-full flex-col items-start gap-6">
          <p className="font-display text-base font-bold uppercase tracking-wide text-faint">
            {t("archive.eyebrow")}
          </p>
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-black max-lg:text-3xl">
            {t("archive.title")}
          </h2>
          <p className="self-stretch text-base leading-7 text-muted">{t("archive.description")}</p>
        </Reveal>

        <Reveal direction="left" className="flex w-[733px] max-w-full flex-col items-start gap-4">
          <div className="flex w-full flex-wrap items-start gap-4">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/images/product-gallery-1.png"
              alt={t("archive.imageAlt")}
              className="h-[340px] min-w-[240px] flex-1 rounded-lg object-cover"
            />
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/images/product-gallery-2.png"
              alt={t("archive.imageAlt")}
              className="h-[340px] min-w-[240px] flex-1 rounded-lg object-cover"
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex w-full flex-col items-start gap-4 rounded-xl border border-line bg-white p-6"
          >
            <p className="font-display text-lg font-bold text-black">{t("archive.card.title")}</p>
            <p className="self-stretch text-sm leading-[21px] text-muted">{t("archive.card.body")}</p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
