import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";
import { EASE, DURATION, TIMING } from "../../lib/motion";

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M2.91602 7H11.0836M6.99982 11.0838L11.0836 7L6.99982 2.9162"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MoreInvitations({ templates, currentSlug }) {
  const { t } = useTranslation("invitations");
  const others = templates.filter((template) => template.slug !== currentSlug).slice(0, 3);

  if (others.length === 0) return null;

  return (
    <section className="flex w-full flex-col items-center border-t border-line bg-surface py-20 max-lg:py-14">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-10 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-full flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-4xl font-extrabold text-black max-lg:text-3xl">
            {t("detail.moreHeading")}
          </h2>
          <Link to="/invitations" className="text-sm font-semibold text-black hover:underline">
            {t("detail.moreViewAll")}
          </Link>
        </Reveal>

        <div className="grid w-full grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {others.map((template, index) => (
            <motion.div
              key={template.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: TIMING.invitationCardHover, ease: EASE, delay: index * 0.05 },
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -4,
                scale: 1.01,
                transition: { duration: TIMING.invitationCardHover, ease: EASE },
              }}
              whileTap={{ scale: 0.98, transition: { duration: DURATION.instant, ease: EASE } }}
              className="flex w-full flex-col items-start gap-4 rounded-xl border border-line bg-white p-4"
            >
              <img
                src={template.image}
                alt={template.name}
                className="h-[220px] w-full self-stretch rounded-lg object-cover"
              />
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-extrabold text-black">{template.name}</h3>
                  <span className="shrink-0 rounded-md border border-line bg-surface px-2 py-1 text-[11px] font-semibold text-muted">
                    {template.tag}
                  </span>
                </div>
                <p className="self-stretch text-sm leading-relaxed text-muted">{template.description}</p>
              </div>
              <Link
                to={`/invitations/${template.slug}`}
                className="flex w-full items-center gap-2 border-t border-line pt-3 text-sm font-semibold text-black"
              >
                {t("cta.viewEdit")}
                <ArrowRightIcon />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
