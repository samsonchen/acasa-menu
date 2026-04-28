import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import type { Category } from '../types/menu'

interface Props {
  categories: Category[]
}

export function CategoryNav({ categories }: Props) {
  const { lang } = useLanguage()
  const [active, setActive] = useState<string>(categories[0]?.code ?? '')
  const tabsRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    if (!categories.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const code = entry.target.id.replace('sec-', '')
            setActive(code)
          }
        }
      },
      { rootMargin: '-100px 0px -65% 0px', threshold: 0 },
    )
    const sections = categories
      .map((c) => document.getElementById(`sec-${c.code}`))
      .filter((el): el is HTMLElement => !!el)
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [categories])

  useEffect(() => {
    const tabsEl = tabsRef.current
    const btn = buttonRefs.current[active]
    if (!tabsEl || !btn) return
    const left = btn.offsetLeft - tabsEl.clientWidth / 2 + btn.clientWidth / 2
    tabsEl.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  function handleClick(code: string) {
    const target = document.getElementById(`sec-${code}`)
    if (!target) return
    const y = target.getBoundingClientRect().top + window.pageYOffset - 100
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <nav
      ref={tabsRef}
      className="sticky top-[46px] z-40 overflow-x-auto whitespace-nowrap border-b border-line bg-paper pt-[10px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="inline-flex gap-1 px-4">
        {categories.map((c) => {
          const isActive = c.code === active
          return (
            <button
              key={c.code}
              ref={(el) => {
                buttonRefs.current[c.code] = el
              }}
              type="button"
              onClick={() => handleClick(c.code)}
              className={`relative flex-shrink-0 px-[10px] pb-3 pt-2 text-[14px] font-semibold transition-colors duration-150 ${
                isActive ? 'text-ink' : 'text-ink-soft'
              }`}
            >
              {c.names[lang]}
              {isActive && (
                <span className="absolute bottom-1 left-[10px] right-[10px] h-[3px] rounded-[2px] bg-brand" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
