# うまい めんくい亭 サイト — 実装スタイルガイド

`nuxt-app/` を編集するときの決めごと。**新しい CSS を書く前に必ず読むこと。**

---

## 0. 環境・コマンド

| 項目 | 内容 |
|---|---|
| フレームワーク | Nuxt 3（SSG。`ssr: true` + `nitro.prerender`） |
| パッケージマネージャ | **pnpm**（Volta 経由 / Node 20）。`npm` はこの環境で `edgesOut` エラーになるので使わない |
| 依存インストール | `pnpm install` |
| 開発サーバー | `pnpm dev` → http://localhost:3000 |
| 本番ビルド | `pnpm generate` → `.output/public/`（完全な静的ファイル） |
| ビルド確認 | `pnpm preview` |
| esbuild | `pnpm-workspace.yaml` の `allowBuilds: esbuild: true` が必要（消さない） |

---

## 1. 最重要ルール：値は必ずトークンを使う

**色・余白・文字サイズ・角丸・影・行間・字間は、直値で書かない。**
すべて `assets/css/main.css` の `:root` に定義されたカスタムプロパティ（トークン）を参照する。
値を変えたいときは `main.css` の `:root` だけを編集する。

```css
/* NG */
color: #ee0000;
padding: 16px 24px;
gap: 1.5rem;
box-shadow: 0 2px 8px rgba(0,0,0,.1);

/* OK */
color: var(--color-brand);
padding: var(--space-4) var(--space-5);
gap: var(--space-5);
box-shadow: var(--shadow-sm);
```

### 直値で書いてよい例外（マジックナンバーではないもの）

- **メディアクエリの px**：CSS の `@media` 内では `var()` が使えない。`:root` の `--bp-sm/md/lg`（640 / 780 / 860）を直接書き、直前に `/* --bp-md: … */` のコメントを付ける。
- **ビューポート相対の高さ上限**：`min-height: min(72vh, 600px)` のような「上限だけ px」。
- **グリッドのトラック最小幅**：`minmax(220px, 1fr)`。直前に `/* 220px = カード最小幅 */` を付ける。
- **画像の最大サイズ制約**：`max-height: 340px` など、1 箇所限定の制約。コメントを付ける。
- **アイコンの作図値**：ハンバーガーの `20px / 2px / ±6px` など。
- **線幅の `1px` / `2px`**：`--border-hairline`（1px）があるので罫線・下線はそれを使う。`2px` の枠線は直値可。
- **`transform: translateY(-2px)` などの微小トランスフォーム**。

---

## 2. トークン一覧（`assets/css/main.css` `:root`）

### 色
- ブランド：`--color-brand` / `--color-brand-dark` / `--color-brand-darker`
- アクセント：`--color-accent` / `--color-accent-dark`
- テキスト：`--color-ink` / `--color-ink-soft` / `--color-white` / `--color-on-brand` / `--color-link-hover`
- 面：`--color-bg` / `--color-surface` / `--color-surface-warm` / `--color-line`
- メニューの味カテゴリ：`--color-miso` / `--color-chuka` / `--color-syouyu` / `--color-solt`

### 半透明（rgba を作るとき）
- ベース RGB：`--rgb-white` / `--rgb-black` / `--rgb-accent` / `--rgb-hero-wash` / `--rgb-dark-scrim` / `--rgb-shadow`
  → `rgba(var(--rgb-white), 0.5)` のように使う
- 濃色面向けの用意済みトークン：`--on-dark` / `--on-dark-dim` / `--on-dark-faint` / `--border-on-dark` / `--border-on-dark-soft`
- 写真オーバーレイ：`--overlay-hero` / `--overlay-feature` / `--overlay-banner`
- 写真上の文字影：`--text-glow-light` / `--text-glow-light-sm` / `--text-shadow-dark` / `--text-shadow-dark-sm` / `--text-glow-banner`

### 文字
- サイズ：`--fs-2xs / xs / sm / base / md / lg / xl / 2xl`、レスポンシブは `--fs-title` / `--fs-page` / `--fs-hero`
- 太さ：`--fw-normal(400) / medium(600) / bold(700) / black(800)`
- 行間：`--lh-tight(1.35) / snug(1.5) / body(1.8)`
- 字間：`--tracking-xs / tight / wide / wider / widest`

### 余白（4px 刻み）
`--space-1`(4) `--space-2`(8) `--space-3`(12) `--space-4`(16) `--space-5`(24) `--space-6`(32) `--space-7`(48) `--space-8`(64)
セクション上下は `--section-y`、コンテナ左右は `--page-gutter`

### レイアウト
`--container` / `--radius-xs(3) / sm(8) / md(12) / (16) / lg(24) / pill` / `--border-hairline` / `--tap-target(44)` / `--header-h(72)`
影：`--shadow-sm` / `--shadow-md`
装飾：`--accent-bar-w`（見出し左バー幅）/ `--rule-h`（見出し下線太さ）

### ブレークポイント（`@media` では値を直書き）
`--bp-sm: 640px`（内装ギャラリー等を1カラム）/ `--bp-md: 780px`（本文2カラム→1カラム）/ `--bp-lg: 860px`（ヘッダーをハンバーガーに）

---

## 3. 共通クラス（`main.css`）— 再実装せず流用する

| クラス | 用途 |
|---|---|
| `.container` | 中央寄せ＋左右ガター |
| `.section` / `.section--warm` / `.section--brand` | セクションの余白・背景 |
| `.section-head` / `.section-head__eyebrow` / `.section-title` / `.section-lead` | セクション見出し（英字ラベル＋日本語＋下線バー）。左寄せは `.section-head--left` |
| `.block-title` | ページ内の小見出し（左に赤いアクセントバー＋太字）。`.menu-section__title` や `.info-block__title` と同じパターン |
| `.btn` / `.btn--outline` / `.btn--on-dark` | ボタン（下記 4 章） |
| `.chip` / `.chip--notice` / `.chip--campaign` | タグ |
| `.data-table` | 店舗情報・採用情報などの表 |
| `.emphasis` | 本文中の赤強調 |
| `.visually-hidden` | スクリーンリーダー専用テキスト |

---

## 4. ボタンは 2 種類だけ

新しいボタンを足すときは必ずこのどちらか。独自の色・形を作らない。

| クラス | 見た目 | 使う場面 |
|---|---|---|
| `.btn` | 塗り（アクセントのアンバー＋濃色文字） | セクションの主要 CTA、ヘッダーの「電話する」 |
| `.btn--outline` | 線（標準はブランド赤の線・文字） | 副次アクション（「一覧を見る」「戻る」など） |
| `.btn--outline .btn--on-dark` | 線（白） | 赤ヘッダー・写真オーバーレイなど**濃色面**に置く線ボタン |

---

## 5. コンポーネント／ファイルの決めごと

- **スタイルは `<style scoped>`** に書く。グローバルに足すのは `main.css` の共通クラスだけ。
- **コンテンツ（文言・価格・画像パス・営業時間など）は `composables/` にデータとして持つ**。テンプレートに直書きしない。
  - `useSiteInfo.ts`（店名・電話・住所・地図・ナビ）／`useNews.ts`（お知らせ）／`useMenu.ts`（メニュー全カテゴリ）
  - ヘッダー・フッターのナビは `useSiteInfo().nav` 一本。ここを足すと両方に反映される。
- **画像は切り抜かない**。`object-fit: cover` は原則使わず、`width:100%; height:auto`（比率維持）か、揃えたいときは固定枠＋`object-fit: contain`（中央寄せ・レターボックス可）。`main.css` の `img` 既定が `max-width:100%; height:auto`。
  - 例外：ヒーロー／人気No.1／こだわりバナーの全面背景画像だけは `cover` 可。
- **お知らせはトップに最新3件**（`news.slice(0, 3)`）、全件は `/news`。
- **新しいページを足したら** `nuxt.config.ts` の `nitro.prerender.routes` に追加。
- **GA タグ**（G-LK9N8FP195）は `nuxt.config.ts` の `app.head` で読み込み済み。個別ページに足さない。
- **`useHead`** で各ページの `title`（テンプレートは `app.vue`）・`meta description`・`canonical` を設定する。

---

## 6. 変更後の確認

1. `pnpm generate` が成功する
2. `assets/`・`components/`・`pages/`・`layouts/` に **素の hex / rgba / rem が無い**こと（`grep -rnE '#[0-9a-fA-F]{3}|rgba?\(|[0-9.]+rem' components pages layouts assets/css/main.css | grep -v 'var(--'` で `:root` 定義以外に出ないか確認）
3. `pnpm preview` で 5 ページ（`/` `/news` `/menu` `/quality` `/information`）の表示・メニューの絞り込み・レスポンシブを確認
