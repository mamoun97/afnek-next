
import { useTranslation } from "react-i18next";
import { contents } from "./contents";
import en from "./en"

type LangType="en"|"fr"|"ar"
type ReturnProps={
    t:typeof en,
    lang:LangType
}
export default function useLang(lang?: LangType):ReturnProps {
    const { i18n } = useTranslation();
    const t = contents[lang ?? i18n.language]
    return { t, lang: (lang ?? i18n.language)as LangType }
}