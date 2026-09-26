import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { EASE, TIMING, DURATION } from "../lib/motion";

function NavItem({ to, label }) {
  const { pathname } = useLocation();
  const isActive = pathname === to || pathname.startsWith(`${to}/`);

  return (
    <Link to={to} className="flex flex-col items-center justify-center gap-1">
      <motion.span
        initial="rest"
        animate={isActive ? "active" : "rest"}
        whileHover="hover"
        className={`text-sm ${isActive ? "font-bold text-black" : "font-bold text-muted"}`}
      >
        {label}
      </motion.span>
      <motion.span
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 },
          active: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: TIMING.navLinkHover, ease: EASE }}
        style={{ originX: 0.5 }}
        className="h-[1.5px] w-full max-w-[80px] rounded-full bg-black"
      />
    </Link>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t("nav.product"), to: "/product" },
    { label: t("nav.invitations"), to: "/invitations" },
    { label: t("nav.experiences"), to: "/experiences" },
    { label: t("nav.howItWorks"), to: "/how-it-works" },
    { label: t("nav.pricing"), to: "/pricing" },
    { label: t("nav.about"), to: "/about" },
  ];

  return (
    <header className="relative flex w-full flex-col items-center border-b border-line bg-white">
      <div className="flex h-20 w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-20 max-lg:px-6">
        <Link to="/" className="flex flex-wrap items-center gap-2" onClick={() => setMenuOpen(false)}>
          <img src="/images/Lyst-logo_112x40.png" alt="Lyst" className="h-10 w-28" />
          <span className="rounded border border-line bg-surface px-2 py-0.5 text-[9px] font-semibold text-muted">
            {t("badge")}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-10 max-lg:hidden">
          {navLinks.map(({ label, to }) => (
            <NavItem key={to} to={to} label={label} />
          ))}
        </nav>

        <div className="flex items-center gap-4 max-lg:hidden">
          <LanguageSwitcher layoutId="lang-pill-desktop" />
          <Link to="/login" className="text-sm font-semibold text-black">
            {t("login")}
          </Link>
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: TIMING.buttonPrimaryHover, ease: EASE } }}
            whileTap={{ scale: 0.97, transition: { duration: TIMING.buttonPrimaryPressed, ease: EASE } }}
          >
            <Link
              to="/create"
              className="block rounded-[10px] bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              {t("cta")}
            </Link>
          </motion.div>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.9, transition: { duration: DURATION.instant, ease: EASE } }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-line max-lg:flex"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: TIMING.buttonSecondaryHover, ease: EASE }}
            className="h-0.5 w-5 rounded-full bg-black"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: DURATION.instant, ease: EASE }}
            className="h-0.5 w-5 rounded-full bg-black"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: TIMING.buttonSecondaryHover, ease: EASE }}
            className="h-0.5 w-5 rounded-full bg-black"
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: TIMING.modalOpen, ease: EASE }}
            className="absolute left-0 top-20 z-40 hidden w-full flex-col items-start gap-6 border-b border-line bg-white px-6 py-6 max-lg:flex overflow-hidden"
          >
            <nav className="flex w-full flex-col items-start gap-4">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-bold text-ink-soft"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="h-px w-full bg-line" />
            <LanguageSwitcher layoutId="lang-pill-mobile" />
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-black"
            >
              {t("login")}
            </Link>
            <Link
              to="/create"
              onClick={() => setMenuOpen(false)}
              className="w-full rounded-[10px] bg-black px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {t("cta")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
