import { useLanguage } from '../hooks/useLanguage'
import { UI_STRINGS } from '../data/site-info'
import { formatPrice } from '../utils/format'
import { TagBadge } from './TagBadge'
import type { MenuItem } from '../types/menu'

interface Props {
  item: MenuItem
  onOpen: (id: string) => void
}

function imagePath(name: string) {
  return `./images/${name}`
}

export function MenuCard({ item, onOpen }: Props) {
  const { lang } = useLanguage()
  const ui = UI_STRINGS[lang]

  const renderPrice = () => {
    if (item.price.length === 1 && !item.price[0].label) {
      return <span className="font-semibold text-ink">{formatPrice(item.price[0].value, lang)}</span>
    }
    return item.price.map((p, idx) => (
      <span key={idx}>
        {idx > 0 && <span className="mx-[6px] text-ink-mute">·</span>}
        <span className="text-ink-soft">{p.label?.[lang] ?? ''}</span>{' '}
        <span className="font-semibold text-ink">{formatPrice(p.value, lang)}</span>
      </span>
    ))
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(item.id)}
      className={`flex w-full items-center gap-3 rounded-card border-0 bg-white p-3 text-left text-inherit shadow-card transition-transform duration-100 active:scale-[.99] ${
        item.soldOut ? 'opacity-55' : ''
      }`}
      style={{ fontFamily: 'inherit' }}
    >
      <div
        className={`relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-paper-2 text-[30px] ${
          item.soldOut ? 'grayscale-[.6]' : ''
        }`}
      >
        {item.image ? (
          <img
            src={imagePath(item.image)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{item.emoji || '🍽️'}</span>
        )}
        {item.soldOut && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] whitespace-nowrap rounded-[3px] border-[1.5px] border-white bg-[rgba(193,47,47,.92)] px-[5px] py-[2px] text-[9px] font-extrabold uppercase tracking-[.14em] text-white">
            {ui.soldOut}
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
        <h3 className="m-0 text-[15px] font-bold leading-[1.3] text-ink">{item.names[lang]}</h3>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {item.tags.map((t) => (
              <TagBadge key={t} code={t} />
            ))}
          </div>
        )}
        <div
          className={`text-[13px] font-medium leading-[1.4] text-ink-soft ${
            item.soldOut ? '[&_.font-semibold]:text-ink-mute [&_.font-semibold]:line-through' : ''
          }`}
        >
          {renderPrice()}
        </div>
      </div>
    </button>
  )
}
