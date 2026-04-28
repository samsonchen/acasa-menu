import type { I18nText, Lang, LangOption } from '../types/menu'

export const STORE_INFO: {
  shopName: I18nText
  shopTagline: I18nText
  address: I18nText
  phone: string
  hours: Record<Lang, string[]>
  closed: I18nText
} = {
  shopName: {
    zh: '阿卡莎義大利廚房',
    en: 'A-casa meet',
    ja: 'アカサ・イタリアンキッチン',
    ko: '아카사 이탈리안 키친',
  },
  shopTagline: {
    zh: 'A-casa meet · 義大利麵與簡餐',
    en: 'Italian Kitchen · Pasta & Plates',
    ja: 'イタリアンキッチン · パスタ&プレート',
    ko: '이탈리안 키친 · 파스타와 플레이트',
  },
  address: {
    zh: '300 新竹市北區西門街 131 號',
    en: 'No. 131, Ximen St., North Dist., Hsinchu City 300, Taiwan',
    ja: '台湾 新竹市北区西門街131号 (300)',
    ko: '대만 신주시 북구 시먼가 131호 (300)',
  },
  phone: '03-528-2131',
  hours: {
    zh: ['11:30–14:00', '17:30–20:00'],
    en: ['11:30 AM – 2:00 PM', '5:30 PM – 8:00 PM'],
    ja: ['11:30〜14:00', '17:30〜20:00'],
    ko: ['11:30–14:00', '17:30–20:00'],
  },
  closed: {
    zh: '週一、週二公休',
    en: 'Closed on Mon & Tue',
    ja: '月・火曜定休',
    ko: '월, 화 정기휴무',
  },
}

export const UI_STRINGS: Record<
  Lang,
  {
    addressLabel: string
    phoneLabel: string
    hoursLabel: string
    closedLabel: string
    soldOut: string
    market: string
    notice: string
    close: string
    description: string
    note: string
    tagsLabel: string
  }
> = {
  zh: {
    addressLabel: '地址',
    phoneLabel: '電話',
    hoursLabel: '營業時間',
    closedLabel: '公休',
    soldOut: '完售',
    market: '時價',
    notice: '甜點與主廚大推每日限量,售完為止',
    close: '關閉',
    description: '說明',
    note: '備註',
    tagsLabel: '標記',
  },
  en: {
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    hoursLabel: 'Hours',
    closedLabel: 'Closed',
    soldOut: 'Sold Out',
    market: 'Market Price',
    notice: 'Desserts and Chef’s Pick are limited daily',
    close: 'Close',
    description: 'Description',
    note: 'Note',
    tagsLabel: 'Tags',
  },
  ja: {
    addressLabel: '住所',
    phoneLabel: '電話',
    hoursLabel: '営業時間',
    closedLabel: '定休日',
    soldOut: '完売',
    market: '時価',
    notice: 'デザートとシェフのおすすめは毎日数量限定',
    close: '閉じる',
    description: '説明',
    note: '備考',
    tagsLabel: 'タグ',
  },
  ko: {
    addressLabel: '주소',
    phoneLabel: '전화',
    hoursLabel: '영업시간',
    closedLabel: '정기휴무',
    soldOut: '품절',
    market: '시가',
    notice: '디저트와 셰프 추천은 매일 한정 수량',
    close: '닫기',
    description: '설명',
    note: '비고',
    tagsLabel: '태그',
  },
}

export const LANGS: LangOption[] = [
  { code: 'zh', label: '中', fullLabel: '中文' },
  { code: 'en', label: 'EN', fullLabel: 'EN' },
  { code: 'ja', label: '日', fullLabel: '日本語' },
  { code: 'ko', label: '한', fullLabel: '한국어' },
]
