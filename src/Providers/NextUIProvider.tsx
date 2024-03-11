// app/providers.tsx
'use client'

import {NextUIProvider as P} from '@nextui-org/react'

export function NextUIProvider({children}: { children: React.ReactNode }) {
  return (
    <P>
      {children}
    </P>
  )
}