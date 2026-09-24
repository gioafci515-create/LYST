import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonKa from "./locales/ka/common.json";
import commonEn from "./locales/en/common.json";
import commonRu from "./locales/ru/common.json";

import homeKa from "./locales/ka/home.json";
import homeEn from "./locales/en/home.json";
import homeRu from "./locales/ru/home.json";

import loginKa from "./locales/ka/login.json";
import loginEn from "./locales/en/login.json";
import loginRu from "./locales/ru/login.json";

import productKa from "./locales/ka/product.json";
import productEn from "./locales/en/product.json";
import productRu from "./locales/ru/product.json";

import featuresKa from "./locales/ka/features.json";
import featuresEn from "./locales/en/features.json";
import featuresRu from "./locales/ru/features.json";

import pricingKa from "./locales/ka/pricing.json";
import pricingEn from "./locales/en/pricing.json";
import pricingRu from "./locales/ru/pricing.json";

import aboutKa from "./locales/ka/about.json";
import aboutEn from "./locales/en/about.json";
import aboutRu from "./locales/ru/about.json";

import howItWorksKa from "./locales/ka/howItWorks.json";
import howItWorksEn from "./locales/en/howItWorks.json";
import howItWorksRu from "./locales/ru/howItWorks.json";

import invitationsKa from "./locales/ka/invitations.json";
import invitationsEn from "./locales/en/invitations.json";
import invitationsRu from "./locales/ru/invitations.json";

export const SUPPORTED_LANGUAGES = [
  { code: "ka", label: "ქა" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const NAMESPACES = [
  "common",
  "home",
  "login",
  "product",
  "features",
  "pricing",
  "about",
  "howItWorks",
  "invitations",
];

const STORAGE_KEY = "lyst-language";

function getInitialLanguage() {
  if (typeof window === "undefined") return "ka";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGES.some((lang) => lang.code === stored)) return stored;
  return "ka";
}

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      common: commonKa,
      home: homeKa,
      login: loginKa,
      product: productKa,
      features: featuresKa,
      pricing: pricingKa,
      about: aboutKa,
      howItWorks: howItWorksKa,
      invitations: invitationsKa,
    },
    en: {
      common: commonEn,
      home: homeEn,
      login: loginEn,
      product: productEn,
      features: featuresEn,
      pricing: pricingEn,
      about: aboutEn,
      howItWorks: howItWorksEn,
      invitations: invitationsEn,
    },
    ru: {
      common: commonRu,
      home: homeRu,
      login: loginRu,
      product: productRu,
      features: featuresRu,
      pricing: pricingRu,
      about: aboutRu,
      howItWorks: howItWorksRu,
      invitations: invitationsRu,
    },
  },
  lng: getInitialLanguage(),
  fallbackLng: "ka",
  defaultNS: "common",
  ns: NAMESPACES,
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
