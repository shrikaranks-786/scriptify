"use client"
import * as React from "react"
import { ThemeProvider as NextThemeProviders} from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({children,...props} : ThemeProviderProps){
    return(
        <NextThemeProviders {...props}>
            {children}
        </NextThemeProviders>
    )
}
