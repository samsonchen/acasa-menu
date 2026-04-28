import { useLanguage } from '../hooks/useLanguage'
import { TAG_DEFS } from '../data/tags'
import type { TagCode } from '../types/menu'

interface Props {
  code: TagCode
  size?: 'sm' | 'md'
}

export function TagBadge({ code, size = 'sm' }: Props) {
  const { lang } = useLanguage()
  const def = TAG_DEFS[code]
  if (!def) return null

  const isRecommend = code === 'R'
  const sizeClass = size === 'md' ? 'text-[11.5px] px-[9px] py-[3px]' : 'text-[10.5px] px-[7px] py-[2px]'
  const tone = isRecommend
    ? 'bg-brand-soft text-brand-deep'
    : 'bg-paper-2 text-ink-soft'

  return (
    <span
      className={`inline-flex items-center gap-[3px] font-semibold rounded-[4px] leading-[1.5] ${sizeClass} ${tone}`}
    >
      <span>{def.icon}</span>
      <span>{def.names[lang]}</span>
    </span>
  )
}
