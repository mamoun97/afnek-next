
"use client"

import { useEffect } from "react"
import useLang from "./useLang"
import { useTranslation } from "react-i18next"



export default function LangView() {
  const { lang } = useLang()
  const { i18n } = useTranslation()
  useEffect(() => {
    var l = localStorage.getItem("local")
    var d = l == "fr" && "fr" || l == "ar" && "ar" || "en"
    i18n.changeLanguage(d)
    document.body.dir = d == "ar" ? "rtl" : "ltr"

  }, [lang])
  return null
}