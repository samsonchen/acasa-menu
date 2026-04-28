import { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollLock } from '../hooks/useScrollLock'
import { UI_STRINGS } from '../data/site-info'
import { formatPrice } from '../utils/format'
import { TagBadge } from './TagBadge'
import type { MenuItem } from '../types/menu'

interface Props {
  item: MenuItem | null
  onClose: () => void
}

export function ItemDetailModal({ item, onClose }: Props) {
  const { lang } = useLanguage()
  const ui = UI_STRINGS[lang]
  const open = !!item

  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!item) return null

  const desc = item.desc[lang]
  const note = item.note[lang]

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 z-[100] flex animate-fadeIn items-end justify-center bg-black/50"
    >
      <div
        className={`relative flex max-h-[92vh] w-[375px] max-w-[100vw] animate-slideUp flex-col overflow-hidden rounded-t-[18px] bg-paper ${
          item.soldOut ? '[&_.modal-price]:text-ink-mute [&_.modal-price]:line-through' : ''
        }`}
        style={{ touchAction: 'pinch-zoom' }}
      >
        <div
          className="relative flex aspect-[4/3] w-full flex-shrink-0 items-center justify-center overflow-auto bg-paper-2 text-[110px]"
          style={{ touchAction: 'pinch-zoom' }}
        >
          {item.image ? (
            <img src={`./images/${item.image}`} alt="" className="h-full w-full object-cover" />
          ) : (
            <span>{item.emoji || '🍽️'}</span>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label={ui.close}
          className="absolute right-[14px] top-[14px] z-10 flex h-9 w-9 items-center justify-center rounded-full border-0 bg-white/95 text-ink shadow-[0_2px_8px_rgba(0,0,0,.2)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="h-4 w-4">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="overflow-y-auto px-5 pb-6 pt-[18px] [-webkit-overflow-scrolling:touch]">
          <h2 className="m-0 text-[21px] font-extrabold leading-[1.25] tracking-[-0.005em] text-ink">
            {item.names[lang]}
            {item.soldOut && (
              <span className="ml-2 inline-block rounded-[4px] bg-[rgba(193,47,47,.92)] px-[7px] py-[2px] align-middle text-[10px] font-extrabold tracking-[.12em] text-white">
                {ui.soldOut}
              </span>
            )}
          </h2>

          {item.tags.length > 0 && (
            <div className="mt-[10px] flex flex-wrap gap-[6px]">
              {item.tags.map((t) => (
                <TagBadge key={t} code={t} size="md" />
              ))}
            </div>
          )}

          <div className="mt-[14px] rounded-[10px] bg-paper-2 px-[14px] py-3">
            {item.price.map((p, idx) => (
              <div
                key={idx}
                className={`flex items-baseline justify-between py-[5px] ${
                  idx > 0 ? 'border-t border-dashed border-line' : ''
                }`}
              >
                <span className="text-[13px] font-medium text-ink-soft">
                  {p.label?.[lang] ?? item.names[lang]}
                </span>
                <span className="modal-price text-[17px] font-extrabold text-brand-deep">
                  {formatPrice(p.value, lang)}
                </span>
              </div>
            ))}
          </div>

          {desc && (
            <div className="mt-[14px]">
              <h4 className="m-0 mb-[5px] text-[11px] font-bold uppercase tracking-[.12em] text-ink-mute">
                {ui.description}
              </h4>
              <p className="m-0 text-[13.5px] leading-[1.6] text-ink-soft">{desc}</p>
            </div>
          )}

          {note && (
            <div className="mt-[14px]">
              <h4 className="m-0 mb-[5px] text-[11px] font-bold uppercase tracking-[.12em] text-ink-mute">
                {ui.note}
              </h4>
              <p className="m-0 text-[13.5px] leading-[1.6] text-ink-soft">{note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
