import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Reveal from "../components/Reveal";
import { EASE, TIMING } from "../lib/motion";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

export default function Login() {
  const { t } = useTranslation("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = {};
    if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = t("emailInvalid");
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      nextErrors.password = t("passwordInvalid");
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 800);
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white">
      <header className="flex w-full flex-col items-center border-b border-line bg-white">
        <div className="flex h-20 w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-20 max-lg:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <img src="/images/Lyst-logo_112x40.png" alt="Lyst" className="h-10 w-28" />
            <span className="rounded border border-line bg-surface px-2 py-0.5 text-[9px] font-semibold text-muted">
              {t("badge")}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-semibold text-black">
              {t("backToWebsite")}
            </Link>
            <button
              type="button"
              className="rounded-[10px] bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              {t("cta")}
            </button>
          </div>
        </div>
      </header>

      <div className="flex w-full flex-1 flex-col items-center">
        <div className="flex min-h-[820px] w-full flex-wrap items-stretch max-lg:min-h-0 max-lg:flex-col-reverse">
          <div className="flex flex-1 basis-[500px] flex-col items-center justify-center px-[120px] py-20 max-lg:px-6 max-lg:py-10">
            <Reveal
              direction="left"
              duration={0.55}
              className="flex w-full flex-col items-center gap-10 max-lg:gap-8"
            >
              <div className="flex w-full flex-col items-center gap-6">
                <img src="/images/login-logo.png" alt="Lyst" className="h-[50px] w-[140px]" />
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="font-display text-[28px] font-extrabold text-black">{t("heading")}</h1>
                  <p className="text-sm leading-6 text-muted">{t("subtitle")}</p>
                </div>
              </div>

              {success ? (
                <div className="flex w-[400px] max-w-full flex-col items-center gap-2 rounded-lg border border-line bg-surface p-6 text-center">
                  <p className="text-sm font-semibold text-black">{t("successMessage")}</p>
                </div>
              ) : (
                <form
                  noValidate
                  onSubmit={handleSubmit}
                  className="flex w-[400px] max-w-full flex-col items-start gap-5"
                >
                  <label className="flex w-full flex-col items-start gap-2">
                    <span className="text-[13px] font-semibold text-ink-soft">{t("emailLabel")}</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder={t("emailPlaceholder")}
                      className={`w-full rounded-lg border bg-surface p-4 text-sm text-black placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-black ${
                        errors.email ? "border-red-600" : "border-line"
                      }`}
                    />
                    {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
                  </label>

                  <label className="flex w-full flex-col items-start gap-2">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-[13px] font-semibold text-ink-soft">{t("passwordLabel")}</span>
                      <a href="#" className="text-xs text-muted hover:text-black">
                        {t("forgotPassword")}
                      </a>
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                      }}
                      placeholder={t("passwordPlaceholder")}
                      className={`w-full rounded-lg border bg-surface p-4 text-sm text-black placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-black ${
                        errors.password ? "border-red-600" : "border-line"
                      }`}
                    />
                    {errors.password && <span className="text-xs text-red-600">{errors.password}</span>}
                  </label>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={
                      submitting
                        ? undefined
                        : { scale: 1.02, transition: { duration: TIMING.buttonPrimaryHover, ease: EASE } }
                    }
                    whileTap={
                      submitting
                        ? undefined
                        : { scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }
                    }
                    className="w-full rounded-lg bg-black p-4 text-center text-sm font-semibold text-white transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? t("submitting") : t("submit")}
                  </motion.button>

                  <div className="h-px w-full bg-line" />

                  <div className="flex w-full items-center justify-center gap-2">
                    <span className="text-sm text-muted">{t("noAccount")}</span>
                    <a href="#" className="text-sm font-bold text-black">
                      {t("signUp")}
                    </a>
                  </div>
                </form>
              )}
            </Reveal>
          </div>

          <Reveal
            direction="right"
            duration={0.55}
            delay={0.1}
            className="flex flex-1 basis-[500px] items-start self-stretch overflow-hidden bg-surface max-lg:h-[280px] max-lg:flex-none max-sm:h-[220px]"
          >
            <img
              src="/images/login-visual.png"
              alt=""
              className="h-full w-full flex-1 self-stretch object-cover"
            />
          </Reveal>
        </div>

        <footer className="flex w-full flex-col items-center border-t border-line bg-white">
          <div className="flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-20 py-6 max-lg:px-6">
            <p className="text-[13px] text-muted">{t("rights")}</p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.tiktok.com/@lystinvites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-muted hover:text-black"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/lystinvites/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-muted hover:text-black"
              >
                {t("instagram")}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
