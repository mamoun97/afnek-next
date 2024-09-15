"use client"
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { contents } from './contents';


const detect_lang=()=>{
  let l:string=navigator.language
  return ["ar","fr","en"].find(el=>l.includes(el))??"ar"
}
i18next
  .use(initReactI18next)
  .init({
    resources:contents,
    lng: detect_lang(),
    fallbackLng: detect_lang(),
    
    interpolation: {
      escapeValue: false, 
    },
  });