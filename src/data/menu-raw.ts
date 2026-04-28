// ═══════════════════════════════════════════════════════════════════════════
//  菜單原始資料 — 餐廳業者在此編輯
//
//  欄位說明:
//    category  分類代碼(對照 src/data/categories.ts)
//    name      品項中文名稱
//    options   價格選項,字串陣列:
//                不分規格 → ['250']
//                分規格   → ['烤雞腿 270', '牛肉 340', '蔬食 250']
//                分大小   → ['大 510', '小 270']
//                時價     → ['時價']
//    tags      標記代碼陣列(見 src/data/tags.ts),無標記填 []
//    image     圖片檔名(放在 public/images/ 資料夾),尚無圖片填 null
//    emoji     無圖片時顯示的替代圖示
//    note      中文備註,不需要時填 ''
//    soldOut   完售時填 true,否則省略此欄位
//
//  ★ 新增品項時,複製一個 { } 區塊,改掉內容即可
// ═══════════════════════════════════════════════════════════════════════════

export interface MenuRawItem {
  category: string
  name: string
  options: string[]
  tags: string[]
  image: string | null
  emoji: string
  note: string
  soldOut?: boolean
}

const PASTA_NOTE = '可選直麵或筆管;每份主餐皆隨餐附小杯飲料'

export const menuRaw: MenuRawItem[] = [
  // ─── 主廚大推 ───
  {
    category: 'chef',
    name: '匈牙利牛肉飯',
    options: ['250'],
    tags: ['R', 'B'],
    image: null,
    emoji: '🍛',
    note: '每日限量',
  },

  // ─── 清炒派 ───
  {
    category: 'light_pasta',
    name: '清爽蔬食義大利麵',
    options: ['190'],
    tags: [],
    image: null,
    emoji: '🌿',
    note: '直麵',
  },
  {
    category: 'light_pasta',
    name: '蒜香蛤蜊義大利麵',
    options: ['230'],
    tags: [],
    image: null,
    emoji: '🐚',
    note: '直麵',
  },
  {
    category: 'light_pasta',
    name: '蒜香鮮蝦義大利麵',
    options: ['240'],
    tags: [],
    image: null,
    emoji: '🍤',
    note: '直麵',
  },

  // ─── 濃郁派 ───
  {
    category: 'rich_pasta',
    name: '波隆那肉醬義大利麵',
    options: ['190'],
    tags: ['B', 'P'],
    image: null,
    emoji: '🍝',
    note: PASTA_NOTE,
  },
  {
    category: 'rich_pasta',
    name: '白醬培根義大利麵',
    options: ['190'],
    tags: ['P'],
    image: null,
    emoji: '🥓',
    note: PASTA_NOTE,
  },
  {
    category: 'rich_pasta',
    name: '白醬野菇義大利麵',
    options: ['190'],
    tags: [],
    image: null,
    emoji: '🍄',
    note: PASTA_NOTE,
  },
  {
    category: 'rich_pasta',
    name: '白醬雞肉義大利麵',
    options: ['230'],
    tags: [],
    image: null,
    emoji: '🍗',
    note: PASTA_NOTE,
  },
  {
    category: 'rich_pasta',
    name: '白醬蛤蜊義大利麵',
    options: ['230'],
    tags: [],
    image: null,
    emoji: '🐚',
    note: PASTA_NOTE,
    soldOut: true,
  },
  {
    category: 'rich_pasta',
    name: '青醬雞肉義大利麵',
    options: ['230'],
    tags: [],
    image: null,
    emoji: '🌿',
    note: PASTA_NOTE,
  },
  {
    category: 'rich_pasta',
    name: '青醬海鮮義大利麵',
    options: ['250'],
    tags: [],
    image: null,
    emoji: '🦐',
    note: PASTA_NOTE,
  },

  // ─── 要吃鮮蔬 ───
  {
    category: 'veggie',
    name: '烤沙拉',
    options: ['70'],
    tags: [],
    image: null,
    emoji: '🥗',
    note: '現烤約 10–15 分鐘製作',
  },

  // ─── 想喝湯 ───
  {
    category: 'soup',
    name: '每日湯品',
    options: ['60'],
    tags: [],
    image: null,
    emoji: '🍲',
    note: '採用當季新鮮食材',
  },

  // ─── 我愛單品 ───
  {
    category: 'single',
    name: '酥炸雞塊',
    options: ['80'],
    tags: [],
    image: null,
    emoji: '🍗',
    note: '',
  },
  {
    category: 'single',
    name: '酥炸薯條',
    options: ['60'],
    tags: [],
    image: null,
    emoji: '🍟',
    note: '',
  },
  {
    category: 'single',
    name: '酥炸洋蔥圈',
    options: ['60'],
    tags: [],
    image: null,
    emoji: '🧅',
    note: '',
  },
  {
    category: 'single',
    name: '冰心伯爵茶',
    options: ['40'],
    tags: [],
    image: null,
    emoji: '🧊',
    note: '無冰塊',
  },
  {
    category: 'single',
    name: '溫暖伯爵茶',
    options: ['50'],
    tags: [],
    image: null,
    emoji: '🍵',
    note: '',
  },
  {
    category: 'single',
    name: '溫暖蘋果茶',
    options: ['60'],
    tags: [],
    image: null,
    emoji: '🍎',
    note: '',
  },

  // ─── 點給另一個胃 ───
  {
    category: 'dessert',
    name: '義式奶酪',
    options: ['65'],
    tags: [],
    image: null,
    emoji: '🍮',
    note: '每日限量',
  },
  {
    category: 'dessert',
    name: '巴斯克蛋糕',
    options: ['100'],
    tags: [],
    image: null,
    emoji: '🍰',
    note: '每日限量',
  },
]
