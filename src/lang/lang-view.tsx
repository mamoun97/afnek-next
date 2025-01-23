
"use client"

import { useEffect } from "react"
import useLang from "./useLang"



export default function LangView() {
    const {lang}=useLang()
    useEffect(() => {
        // process.env.REACT_APP_API_KEY;
        document.body.dir = lang == "ar" ? "rtl" : "ltr"
    
      }, [lang])
    return null
}