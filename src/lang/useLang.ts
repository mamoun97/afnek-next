
import { useTranslation } from "react-i18next";
import { contents } from "./contents";
import en from "./en"
import { i18n } from "i18next";

type LangType="en"|"fr"|"ar"
type ReturnProps={
    t:typeof en,
    lang:LangType,
    i18n:i18n
}
export default function useLang(lang?: LangType):ReturnProps {
    const { i18n } = useTranslation();
    const t = contents[lang ?? i18n.language]
    
    return { t,i18n, lang: (lang ?? i18n.language)as LangType }
}