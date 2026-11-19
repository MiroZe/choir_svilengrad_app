
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import bgTranslation from './locales/bg/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      bg: { translation: bgTranslation },
      en: { translation: enTranslation }
    },
    lng: localStorage.getItem('language') || 'bg',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

