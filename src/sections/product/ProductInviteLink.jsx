import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";
import { EASE, TIMING } from "../../lib/motion";

export default function ProductInviteLink() {
  const { t } = useTranslation("product");
  const features = t("inviteLink.features", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center border-t border-line bg-white py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-16 px-20 max-lg:px-6">
        <Reveal direction="right" className="flex w-[515px] max-w-full flex-col items-start gap-6">
          <p className="font-display text-base font-bold uppercase tracking-wide text-faint">
            {t("inviteLink.eyebrow")}
          </p>
          <h2 className="self-stretch font-display text-5xl font-extrabold leading-tight text-black max-lg:text-3xl">
            {t("inviteLink.title")}
          </h2>
          <p className="self-stretch text-base leading-7 text-muted">{t("inviteLink.description")}</p>
        </Reveal>

        <Reveal
          direction="left"
          whileHover={{ scale: 1.02, transition: { duration: TIMING.invitationCardHover, ease: EASE } }}
          className="flex w-[733px] max-w-full flex-col gap-4 rounded-xl border border-line bg-white p-6"
        >
          {features.map((feature) => (
            <div key={feature.label} className="flex flex-col items-start gap-3">
              <p className="text-xs font-semibold text-muted">{feature.label}</p>
              <p className="self-stretch text-sm leading-[21px] text-muted">{feature.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
