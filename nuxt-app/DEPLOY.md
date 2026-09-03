# デプロイ手順 — https://umai-menkuitei.com/

## 結論

このサイトは **静的サイト生成（SSG）** なので、`pnpm generate` が吐き出す
`.output/public/` の中身は **ただの HTML / CSS / JS / 画像ファイル**。
今のレンタルサーバー上の HTML/CSS サイトと**まったく同じ方法**（FTP でアップロード）で公開できる。
サーバー側に Node.js は不要。

---

## 手順

### 1. 手元でビルドする

```bash
cd nuxt-app
pnpm install          # 初回だけ
pnpm generate
```

→ `nuxt-app/.output/public/` に完成品ができる。中身の例：

```
.output/public/
├─ index.html                 … トップページ
├─ news/index.html            … /news/
├─ menu/index.html            … /menu/
├─ quality/index.html         … /quality/
├─ information/index.html     … /information/
├─ 200.html  404.html
├─ favicon.ico  apple-touch-icon.png  android-touch-icon.png
├─ _nuxt/…                    … CSS / JS（ハッシュ付き）
└─ images/…                   … 画像一式
```

URL 構造は今と同じ（`https://umai-menkuitei.com/menu/` など）。

### 2. サーバーにアップロードする

FTP / SFTP クライアント（FileZinla など）またはレンタルサーバーのファイルマネージャで、
ドメインの**公開ディレクトリ**（`public_html/` や `www/`、`htdocs/` など。契約により名称が違う）に

- **`.output/public/` の“中身”** をアップロードする（`public` フォルダごとではなく、中のファイル群を直下に置く）
- 既存の `index.html` や `menu/` などは上書き・置き換え

> ⚠️ `node_modules/`・`.nuxt/`・ソースコード（`.vue` など）はアップロードしない。`.output/public/` の中身だけ。

### 3. 切り替え後の後片付け（任意）

旧サイトの以下は不要になる（消してよい。残っていても表示に影響はないが、混乱の元）：

- ルートの旧 `index.html`（新 `index.html` で上書きされる）
- `toppage/` `menu/img/` `quality/img/` `information/img/` `common/` `*.css` `*.css.map` などの旧アセット
  （新サイトの画像は `/images/…` にまとまっているため）

---

## 補足・注意

- **ビルドは必ず手元（またはCI）で行う。** レンタルサーバーには Node がないので `pnpm generate` はサーバー上では走らせない。
- **`.htaccess`**：基本は不要。トップに `sitemap.xml` を置きたい場合は別途用意する（現行は手書きの `sitemap.xml` がルートにある）。存在しない URL を綺麗に見せたいなら `ErrorDocument 404 /404.html` を `.htaccess` に足す程度。
- **Google Analytics**（G-LK9N8FP195）はページに埋め込み済み。サーバー側の設定は不要。
- **キャッシュ**：`_nuxt/` 配下のファイル名にはハッシュが付くので、更新時に古いキャッシュが残る心配は少ない。ブラウザで確認して古い場合はスーパーリロード。
- **もっと自動化したい場合**：SSH/FTP が使えるなら `rsync` や `lftp` で「`.output/public/` をまるごと同期」する 1 行スクリプトにできる。あるいは Netlify / Cloudflare Pages / Vercel に `nuxt-app/` を繋いで自動ビルド＆公開し、ドメイン `umai-menkuitei.com` の DNS をそちらへ向ける方法もある（レンタルサーバー不要になる）。まずは「generate → FTP アップロード」が最小変更で確実。

---

## デプロイ チェックリスト

- [ ] `git pull` して最新のソースにする
- [ ] `cd nuxt-app && pnpm install`
- [ ] `pnpm generate` が成功
- [ ] `pnpm preview` で 5 ページ・メニュー絞り込み・スマホ表示を確認
- [ ] `.output/public/` の中身を公開ディレクトリへアップロード（上書き）
- [ ] 本番 URL でトップ / メニュー / こだわり / 店舗情報 / お知らせ を確認
- [ ] スマホ実機でヘッダー（ハンバーガー）・電話リンクを確認
