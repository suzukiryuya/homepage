# うまい めんくい亭 — 公式サイト (Nuxt 3)

リポジトリ直下の静的 HTML/CSS 版を Vue 3 + Nuxt 3 に置き換えたプロジェクトです。
静的サイト生成 (SSG) でビルドし、生成物 (`.output/public`) をそのままホスティングに配置できます。

## 必要環境

- Node.js 20 以上 (Volta 利用時は `package.json` の指定で自動選択)
- パッケージマネージャは pnpm を使用 (`pnpm-lock.yaml` をコミット)

## セットアップ

```bash
cd nuxt-app
pnpm install
```

## 開発サーバー

```bash
pnpm dev
# http://localhost:3000
```

## 静的サイト生成 (本番ビルド)

```bash
pnpm generate
```

`.output/public/` に完全な静的ファイルが出力されます。ここを既存サイトのルートに配置すれば置き換え完了です。
`pnpm preview` で生成結果をローカル確認できます。

## ドキュメント

- **[STYLEGUIDE.md](./STYLEGUIDE.md)** — 実装の決めごと（CSS はトークン必須、ボタンは2種類、共通クラス流用 など）。CSS を書く前に読むこと。
- **[DEPLOY.md](./DEPLOY.md)** — レンタルサーバー (https://umai-menkuitei.com/) への公開手順。
- `../.claude/skills/menkuitei-frontend/` — 上記ルールを Claude がスキルとして読み込むための定義。

## ディレクトリ構成

```
nuxt-app/
├─ app.vue                 … ルートコンポーネント
├─ nuxt.config.ts          … Nuxt 設定 (SSG / <head> / GA)
├─ assets/css/main.css     … デザインシステム (CSS 変数・共通クラス)
├─ layouts/default.vue     … ヘッダー + フッターの共通レイアウト
├─ components/
│  ├─ SiteHeader.vue       … 追従ヘッダー (モバイルメニュー対応)
│  ├─ SiteFooter.vue
│  ├─ PageHero.vue         … 下層ページ共通の見出しブロック
│  ├─ NewsCard.vue         … お知らせ (開閉式)
│  └─ MenuSection.vue      … メニューのカテゴリ表示
├─ composables/            … コンテンツデータ (自動 import)
│  ├─ useSiteInfo.ts       … 店名・電話番号・地図・ナビ
│  ├─ useNews.ts           … お知らせ一覧
│  └─ useMenu.ts           … メニュー全カテゴリ・全商品・価格
├─ pages/
│  ├─ index.vue            … トップpage (お知らせは最新3件のみ表示)
│  ├─ news.vue             … お知らせ一覧
│  ├─ menu.vue             … メニュー (カテゴリ絞り込み)
│  ├─ quality.vue          … こだわり
│  └─ information.vue      … 店舗・採用情報
└─ public/
   ├─ images/              … 旧サイトの画像を移設 (common/toppage/menu/quality/information)
   └─ favicon 一式
```

## 元サイトからの主な変更点

- ページ間で重複していたヘッダー / フッターを 1 か所に集約
- メニューの絞り込みを CSS ラジオボタンハックから Vue のリアクティブ state に変更
- 文言・価格・画像は元サイトの内容を維持しつつ、デザインを刷新
- Google Analytics (G-LK9N8FP195) は `nuxt.config.ts` で読み込み
