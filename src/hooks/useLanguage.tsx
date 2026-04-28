import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from '../types/menu'

const STORAGE_KEY = 'lang'
const VALID: Lang[] = ['zh', 'en', 'ja', 'ko']

function readInitial(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && (VALID as string[]).includes(stored)) return stored as Lang
  return 'zh'
}

interface LanguageCtx {
  lang: Lang
  setLang: (lang: Lang) => void
}

const Ctx = createContext<LanguageCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitial)

  useEffect(() => {
    document.body.setAttribute('data-lang', lang)
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLanguage(): LanguageCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
