import type { Lang, PriceValue } from '../types/menu'
import { UI_STRINGS } from '../data/site-info'

export function formatPrice(value: PriceValue, lang: Lang): string {
  if (value === 'market') return UI_STRINGS[lang].market
  return `NT$${value}`
}
