import { useLanguage } from '../hooks/useLanguage'
import { MenuCard } from './MenuCard'
import type { Category, MenuItem } from '../types/menu'

interface Props {
  category: Category
  items: MenuItem[]
  onOpenItem: (id: string) => void
}

export function MenuSection({ category, items, onOpenItem }: Props) {
  const { lang } = useLanguage()

  return (
    <section
      id={`sec-${category.code}`}
      className="px-4 pb-1 pt-4 [scroll-margin-top:100px]"
    >
      <div className="flex items-baseline gap-2 px-1 pb-[10px]">
        <h2 className="m-0 text-[17px] font-extrabold tracking-[-0.005em] text-ink">
          {category.names[lang]}
        </h2>
        <span className="text-[12px] font-semibold text-ink-mute">{items.length}</span>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((it) => (
          <MenuCard key={it.id} item={it} onOpen={onOpenItem} />
        ))}
      </div>
    </section>
  )
}
