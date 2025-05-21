import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import pt from './locales/pt-BR/translation.json';
import es from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      'pt-BR': { translation: pt },
      es: { translation: es },
    },
    lng: navigator.language || 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: { escapeValue: false },
  });

export default i18n;