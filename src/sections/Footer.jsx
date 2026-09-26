import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../i18n";
import { EASE, TIMING } from "../lib/motion";

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 3c.3 2.1 1.6 3.5 3.8 3.7v3.1c-1.3.1-2.6-.3-3.8-1.1v6.6c0 3.3-2.4 5.7-5.6 5.7-3.2 0-5.6-2.4-5.6-5.6 0-3.2 2.5-5.7 5.6-5.7.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.6 0 1.4 1.1 2.5 2.5 2.5 1.5 0 2.6-1.1 2.6-2.6V3h3z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

const SOCIALS = [
  { label: "TikTok", href: "https://www.tiktok.com/@lystinvites", Icon: TikTokIcon },
  { label: "Instagram", href: "https://www.instagram.com/lystinvites/", Icon: InstagramIcon },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const columns = ["product", "features", "invitations", "about"].map((key) => ({
    key,
    title: t(`footer.columns.${key}.title`),
    items: t(`footer.columns.${key}.items`, { returnObjects: true }),
  }));
  const quickLinks = [
    { label: t("nav.howItWorks"), to: "/how-it-works" },
    { label: t("nav.pricing"), to: "/pricing" },
    { label: t("login"), to: "/login" },
  ];

  return (
    <footer className="flex w-full flex-col items-center bg-black">
      <div className="flex w-full max-w-[1600px] flex-col items-start gap-12 px-20 py-20 max-lg:px-6 max-lg:py-12">
      <div className="flex w-full flex-wrap items-start justify-between gap-12">
        <div className="flex w-[405px] max-w-full flex-col items-start gap-6">
          <img src="/images/Lyst-logo_84x30.png" alt="Lyst" className="h-[30px] w-[84px]" />
          <p className="self-stretch text-sm leading-6 text-muted-2">{t("footer.tagline")}</p>
        </div>

        <div className="flex flex-wrap items-start gap-12">
          {columns.map((col) => (
            <div key={col.key} className="flex w-[140px] flex-col items-start gap-5">
              <p className="text-xs font-semibold text-white">{col.title}</p>
              <div className="flex flex-col items-start gap-3">
                {col.items.map((item) => (
                  <a key={item} href="#" className="text-[13px] text-muted-2 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="flex w-[140px] flex-col items-start gap-5">
            <p className="text-xs font-semibold text-white">{t("footer.quickLinks.title")}</p>
            <div className="flex flex-col items-start gap-3">
              {quickLinks.map(({ label, to }) => (
                <Link key={to} to={to} className="text-[13px] text-muted-2 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-1 min-w-[200px] flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs font-semibold text-white">{t("footer.language")}</p>
            <p className="flex items-center gap-1 text-[13px]">
              {SUPPORTED_LANGUAGES.map(({ code, label }, idx) => {
                const isActive = i18n.resolvedLanguage === code || i18n.language === code;
                return (
                  <span key={code} className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => i18n.changeLanguage(code)}
                      className={isActive ? "text-white" : "text-faint hover:text-white"}
                    >
                      {label === "ქა" ? "ქართული" : label === "EN" ? "English" : "Русский"}
                    </button>
                    {idx < SUPPORTED_LANGUAGES.length - 1 && <span className="text-faint">/</span>}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs font-semibold text-white">{t("footer.contact")}</p>
            <p className="text-[13px] text-muted-2">hello@lyst.app</p>
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.08, y: -2, transition: { duration: TIMING.buttonSecondaryHover, ease: EASE } }}
                whileTap={{ scale: 0.95, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-6">
        <div className="h-px w-full bg-white/15" />
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <p className="text-[11px] text-muted-2">{t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-muted-2 hover:text-white">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-[11px] text-muted-2 hover:text-white">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
