import { useMemo, useState } from 'react'
import { LanguageProvider, useLanguage } from './hooks/useLanguage'
import { Header } from './components/Header'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { CategoryNav } from './components/CategoryNav'
import { MenuSection } from './components/MenuSection'
import { ItemDetailModal } from './components/ItemDetailModal'
import { CATEGORIES } from './data/categories'
import { menuItems } from './data/menu-i18n'
import { STORE_INFO } from './data/site-info'

function MenuApp() {
  const { lang } = useLanguage()
  const [openId, setOpenId] = useState<string | null>(null)

  const inUseCategories = useMemo(
    () => CATEGORIES.filter((c) => menuItems.some((it) => it.category === c.code)),
    [],
  )

  const openItem = openId ? menuItems.find((it) => it.id === openId) ?? null : null

  return (
    <div className="relative min-h-screen w-full max-w-[375px] overflow-x-hidden bg-paper pb-10 sm:w-[375px]">
      <Header />
      <LanguageSwitcher />
      <CategoryNav categories={inUseCategories} />

      <main>
        {inUseCategories.map((cat) => (
          <MenuSection
            key={cat.code}
            category={cat}
            items={menuItems.filter((it) => it.category === cat.code)}
            onOpenItem={setOpenId}
          />
        ))}
      </main>

      <footer className="mx-5 mt-6 border-t border-line pt-4 text-center text-[11px] leading-[1.6] tracking-[.04em] text-ink-mute">
        <strong className="font-bold text-ink-soft">{STORE_INFO.shopName[lang]}</strong> · A-casa meet
        <br />
        Hsinchu · Italian Kitchen
      </footer>

      <ItemDetailModal item={openItem} onClose={() => setOpenId(null)} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <MenuApp />
    </LanguageProvider>
  )
}
