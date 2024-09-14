
import { useTranslation } from "react-i18next";
import { contents } from "./contents";


export default function useLang( lang?:string) {
    const {  i18n } = useTranslation();
    const t = contents[lang??i18n.language]
    return { t, lang: lang??i18n.language }
}