import { useLanguage } from '../hooks/useLanguage'
import { LANGS } from '../data/site-info'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="sticky top-0 z-50 bg-paper px-5 pt-[10px] pb-2">
      <div className="flex gap-[6px]" role="tablist">
        {LANGS.map((l) => {
          const active = l.code === lang
          return (
            <button
              key={l.code}
              type="button"
              role="tab"
              aria-pressed={active}
              onClick={() => setLang(l.code)}
              className={`min-w-[56px] rounded-full px-[18px] py-[6px] text-[13px] font-semibold transition-all duration-150 ${
                active ? 'bg-brand text-white' : 'bg-transparent text-ink-soft'
              }`}
            >
              {l.fullLabel}
            </button>
          )
        })}
      </div>
    </div>
  )
}
