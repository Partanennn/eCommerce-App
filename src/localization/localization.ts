import { initReactI18next } from 'react-i18next';
import en from './resources/en.json';
import fi from './resources/fi.json';

import i18n from 'i18next';

const resources = {
  en: {
    translation: en,
  },
  fi: {
    translation: fi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fi',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
