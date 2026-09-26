import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

// Stable, non-translated category ids — order matches the "categories" arrays
// in every locale file so filtering never depends on the displayed label.
const CATEGORY_IDS = [
  "all",
  "wedding",
  "birthday",
  "private-event",
  "corporate",
  "minimalist",
  "classic",
  "modern",
];

// Data-only fields (slug/image/categoryId) live in code; display text (name/tag/
// description) is merged in from the "invitations" namespace at render time.
export const TEMPLATES_META = [
  { slug: "mtvaris-shuki", image: "/images/invitations-1.png", categoryId: "wedding" },
  { slug: "okros-purtslebi", image: "/images/invitations-2.png", categoryId: "birthday" },
  { slug: "minimalisti", image: "/images/invitations-3.png", categoryId: "corporate" },
  { slug: "baghis-tsveuleba", image: "/images/invitations-1.png", categoryId: "private-event" },
  { slug: "klasikuri-eleganti", image: "/images/invitations-2.png", categoryId: "wedding" },
  { slug: "tanamedrove", image: "/images/invitations-3.png", categoryId: "modern" },
];

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

export default function InvitationsCatalog() {
  const { t } = useTranslation("invitations");
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryLabels = t("categories", { returnObjects: true });
  const translatedTemplates = t("templates", { returnObjects: true });

  const templates = useMemo(() => {
    const bySlug = new Map(translatedTemplates.map((item) => [item.slug, item]));
    return TEMPLATES_META.map((meta) => ({ ...meta, ...bySlug.get(meta.slug) }));
  }, [translatedTemplates]);

  const filteredTemplates = useMemo(
    () =>
      activeCategory === "all"
        ? templates
        : templates.filter((template) => template.categoryId === activeCategory),
    [templates, activeCategory]
  );

  return (
    <>
      <section className="flex w-full flex-col items-center pt-16 pb-12 max-lg:pt-10 max-lg:pb-8">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 px-20 max-lg:px-6">
          <Reveal direction="up" className="flex w-[800px] max-w-full flex-col items-start gap-4">
            <h1 className="self-stretch font-display text-[56px] font-extrabold leading-[1.1] text-black max-lg:text-4xl">
              {t("hero.heading")}
            </h1>
            <p className="self-stretch text-lg leading-8 text-muted">{t("hero.subtitle")}</p>
          </Reveal>
        </div>
      </section>

      <section className="flex w-full flex-col items-center py-10 max-lg:py-6">
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-20 max-lg:px-6">
          <Reveal direction="up" delay={0.1} className="flex flex-wrap items-start gap-2">
            {CATEGORY_IDS.map((categoryId, index) => {
              const isActive = categoryId === activeCategory;
              return (
                <button
                  key={categoryId}
                  type="button"
                  onClick={() => setActiveCategory(categoryId)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-line bg-surface text-ink-soft hover:border-black"
                  }`}
                >
                  {categoryLabels[index]}
                </button>
              );
            })}
          </Reveal>
        </div>
      </section>

      <div className="flex w-full justify-center px-20 max-lg:px-6">
        <div className="h-px w-full max-w-[1600px] bg-line" />
      </div>

      <section className="flex w-full flex-col items-center pt-12 pb-24 max-lg:pt-8 max-lg:pb-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-10 px-20 max-lg:px-6">
          <div className="grid w-full grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <AnimatePresence mode="popLayout">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.slug}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex w-full flex-col items-start gap-4 rounded-xl border border-line bg-white p-4"
                >
                  <img
                    src={template.image}
                    alt={template.name}
                    className="h-[280px] w-full self-stretch rounded-lg object-cover"
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
            </AnimatePresence>
          </div>
          {filteredTemplates.length === 0 && (
            <p className="w-full text-center text-sm text-muted">{t("noResults")}</p>
          )}
        </div>
      </section>
    </>
  );
}
