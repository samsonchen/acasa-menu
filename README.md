# 阿卡莎義大利廚房 · A-casa meet

手機版多語言線上菜單(繁中 / English / 日本語 / 한국어)。

React 18 + TypeScript + Vite + Tailwind CSS。靜態網站,部署於 GitHub Pages。

## 本地開發

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 產出至 dist/
npm run preview  # 預覽 build 結果
npm run typecheck
```

## 編輯菜單

1. 修改 `src/data/menu-raw.ts`(店家可讀的純中文格式)
2. 將四語言版本同步寫入 `src/data/menu-i18n.ts`(實際渲染用)
3. 店家資訊改 `src/data/site-info.ts`、分類改 `src/data/categories.ts`、標記改 `src/data/tags.ts`
4. 品項照片放入 `public/images/`,然後在 `menu-i18n.ts` 對應品項的 `image` 欄位填入檔名

## 部署到 GitHub Pages

1. 推到 `main` 分支
2. Repository → **Settings** → **Pages** → **Source** 選 **GitHub Actions**
3. workflow 自動執行,完成後可在 `https://<username>.github.io/<repo>/` 看到

`vite.config.ts` 設 `base: './'`,同一份 `dist/` 也可用於自訂網域與本地 `npm run preview`,不需重 build。

## 結構

```
public/images/         # 形象與品項照片
src/
  data/                # 菜單、店家資訊、分類、標記
  components/          # UI 元件
  hooks/               # useLanguage、useScrollLock
  types/menu.ts        # 共用型別
  utils/format.ts      # 價格格式化
.github/workflows/     # GitHub Pages 部署
```
