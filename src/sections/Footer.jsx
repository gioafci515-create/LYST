import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../i18n";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const columns = ["product", "features", "invitations", "about"].map((key) => ({
    key,
    title: t(`footer.columns.${key}.title`),
    items: t(`footer.columns.${key}.items`, { returnObjects: true }),
  }));

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
