import type { Category } from '../types/menu'

export const CATEGORIES: Category[] = [
  {
    code: 'chef',
    names: {
      zh: '主廚大推',
      en: "Chef's Picks",
      ja: 'シェフのおすすめ',
      ko: '셰프 추천',
    },
  },
  {
    code: 'light_pasta',
    names: {
      zh: '清炒派 義大利麵',
      en: 'Light Pasta',
      ja: '軽めパスタ',
      ko: '라이트 파스타',
    },
  },
  {
    code: 'rich_pasta',
    names: {
      zh: '濃郁派 義大利麵',
      en: 'Rich Pasta',
      ja: '濃厚パスタ',
      ko: '리치 파스타',
    },
  },
  {
    code: 'veggie',
    names: {
      zh: '要吃鮮蔬',
      en: 'Fresh Veggies',
      ja: '新鮮野菜',
      ko: '신선 채소',
    },
  },
  {
    code: 'soup',
    names: {
      zh: '想喝湯',
      en: 'Soup',
      ja: 'スープ',
      ko: '수프',
    },
  },
  {
    code: 'single',
    names: {
      zh: '我愛單品',
      en: 'À La Carte',
      ja: '一品料理',
      ko: '단품',
    },
  },
  {
    code: 'dessert',
    names: {
      zh: '點給另一個胃',
      en: 'Desserts',
      ja: 'デザート',
      ko: '디저트',
    },
  },
]
