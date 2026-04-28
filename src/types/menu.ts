export type Lang = 'zh' | 'en' | 'ja' | 'ko'

export type I18nText = Record<Lang, string>

export type TagCode = 'R' | '1' | '2' | '3' | 'P' | 'B' | 'L' | 'V' | 'V5' | 'H'

export type PriceValue = number | 'market'

export interface PriceOption {
  label: I18nText | null
  value: PriceValue
}

export interface MenuItem {
  id: string
  category: string
  names: I18nText
  price: PriceOption[]
  image: string | null
  emoji: string
  tags: TagCode[]
  desc: I18nText
  note: I18nText
  soldOut?: boolean
}

export interface Category {
  code: string
  names: I18nText
}

export interface TagDef {
  icon: string
  names: I18nText
}

export interface LangOption {
  code: Lang
  label: string
  fullLabel: string
}
