"use client"
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { contents } from './contents';


const detect_lang = () => {
  var k = localStorage?.getItem("local")
  var d = k == "fr" && "fr" || k == "ar" && "ar" || "en"
  return d
}
i18next
  .use(initReactI18next)
  .init({
    resources: contents,
    lng: detect_lang(),
    fallbackLng: detect_lang(),

    interpolation: {
      escapeValue: false,
    },
  });
  export default i18next;