import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";
import kuTranslation from "./locales/ku.json";
import trTranslation from "./locales/tr.json";

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      ku: { translation: kuTranslation },
      tr: { translation: trTranslation },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already escapes
    },
  });

export default i18n;
