// import LangProvider from '@/Providers/lang-provider'
import React from 'react'
// import "@/lang/i18n"
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        // <LangProvider>
            {children}
        // </LangProvider> 
    )
}
