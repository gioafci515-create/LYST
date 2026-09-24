import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

export default function ComingSoon({ titleKey }) {
  const { t } = useTranslation("common");
  return (
    <Reveal
      direction="fade"
      className="flex w-full flex-col items-center gap-4 px-20 py-32 max-lg:px-6"
    >
      <p className="text-[13px] font-bold uppercase tracking-wide text-muted-2">LYST</p>
      <h1 className="font-display text-4xl font-extrabold text-black">{t(`comingSoon.${titleKey}`)}</h1>
      <p className="text-muted">{t("comingSoon.message")}</p>
    </Reveal>
  );
}
