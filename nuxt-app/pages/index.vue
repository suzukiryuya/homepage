<script setup lang="ts">
const info = useSiteInfo()
const news = useNews()
const latestNews = news.slice(0, 3)

useHead({
  link: [{ rel: 'canonical', href: 'https://umai-menkuitei.com/' }],
})
</script>

<template>
  <div>
    <!-- ヒーロー -->
    <section class="hero">
      <img class="hero__img" src="/images/common/exterior.jpg" :alt="info.shopNameFull" />
      <div class="hero__overlay">
        <div class="container hero__content">
          <p class="hero__eyebrow">日立川尻・国道6号沿いの老舗ラーメン店</p>
          <h1 class="hero__title">{{ info.catchcopy }}</h1>
          <div class="hero__actions">
            <NuxtLink to="/information" class="btn">店舗情報はこちら</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- お知らせ（最新3件） -->
    <section id="news" class="section section--warm">
      <div class="container">
        <div class="section-head">
          <span class="section-head__eyebrow">NEWS</span>
          <h2 class="section-title">お知らせ</h2>
        </div>
        <div class="news-list">
          <NewsCard v-for="n in latestNews" :key="n.date + n.title" :item="n" />
        </div>
        <p class="news-more">
          <NuxtLink to="/news" class="btn btn--outline">お知らせ一覧を見る</NuxtLink>
        </p>
      </div>
    </section>

    <!-- 人気No.1 -->
    <section class="feature">
      <img class="feature__img" src="/images/toppage/spicy.jpg" alt="辛ネギ味噌ラーメン" />
      <div class="feature__overlay">
        <div class="container feature__content">
          <p class="feature__label">人気No.1</p>
          <h2 class="feature__title">辛ネギ味噌ラーメン</h2>
          <p class="feature__text">
            本場北海道の味噌を高級食材とともに手ごねで熟成。奥行きのある味わいを、ぜひ一度。
          </p>
          <NuxtLink to="/quality" class="btn">当店のこだわり</NuxtLink>
        </div>
      </div>
    </section>

    <!-- テイクアウト -->
    <section class="section">
      <div class="container takeout">
        <div class="takeout__text">
          <div class="section-head section-head--left">
            <span class="section-head__eyebrow">TAKEOUT</span>
            <h2 class="section-title">テイクアウト実施中！</h2>
          </div>
          <p>
            サイドメニューのお持ち帰りに加えて、弁当と丼のテイクアウトも行っております！
            電話でも店舗でもご注文を受け付けております。ぜひご賞味ください！
          </p>
          <NuxtLink to="/menu#takeout" class="btn btn--outline">メニューはこちら</NuxtLink>
        </div>
        <div class="takeout__pics">
          <img src="/images/toppage/takeout-menu.jpg" alt="テイクアウトメニュー" loading="lazy" />
          <img src="/images/toppage/gyoza-box.jpg" alt="餃子弁当" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- ポイントカード -->
    <section class="section section--warm">
      <div class="container point">
        <div class="point__text">
          <div class="section-head section-head--left">
            <span class="section-head__eyebrow">POINT CARD</span>
            <h2 class="section-title">ポイントカードで餃子をお得に！</h2>
          </div>
          <p>
            とってもお得なめんくい亭のポイントカードをご存知ですか？
            当店のポイントカードは5回のご来店で
            <span class="emphasis">餃子が一枚無料！</span>
            期限はないので、いつでもご利用いただけます！
          </p>
        </div>
        <img class="point__img" src="/images/toppage/point-card.jpg" alt="ポイントカード" loading="lazy" />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- ヒーロー ---- */
.hero {
  position: relative;
  display: flex;
  min-height: min(72vh, 600px);
}

.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 62%;
}

.hero__overlay {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  /* 明るい外観写真の上でも読めるよう、テキスト側をほんのり白く起こす */
  background: var(--overlay-hero);
}

.hero__content {
  color: var(--color-ink);
  max-width: 46rem;
  padding-block: var(--space-7);
}

.hero__eyebrow {
  margin: 0 0 var(--space-4);
  font-weight: var(--fw-black);
  letter-spacing: var(--tracking-wider);
  font-size: var(--fs-sm);
  color: var(--color-brand-dark);
  text-shadow: var(--text-glow-light-sm);
}

.hero__title {
  margin: 0;
  font-family: var(--font-serif);
  font-size: var(--fs-hero);
  line-height: var(--lh-snug);
  color: var(--color-ink);
  text-shadow: var(--text-glow-light);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

/* ---- お知らせ ---- */
.news-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 52rem;
  margin: 0 auto;
}

.news-more {
  margin: var(--space-6) 0 0;
  text-align: center;
}

/* ---- 人気No.1 ---- */
.feature {
  position: relative;
  display: flex;
  min-height: min(58vh, 460px);
}

.feature__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature__overlay {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--overlay-feature);
}

.feature__content {
  color: var(--color-white);
  text-align: center;
  max-width: 40rem;
  margin-inline: auto;
}

/* ボタンと誤認されないよう、背景なしのラベル表現にする */
.feature__label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0 0 var(--space-3);
  color: var(--color-accent);
  font-weight: var(--fw-black);
  font-size: var(--fs-sm);
  letter-spacing: var(--tracking-wide);
}

.feature__label::before {
  content: "";
  width: var(--space-5);
  height: 2px;
  background: currentColor;
}

.feature__title {
  margin: 0;
  font-family: var(--font-serif);
  font-size: var(--fs-page);
  text-shadow: var(--text-shadow-dark);
}

.feature__text {
  margin: var(--space-4) auto var(--space-6);
  color: var(--color-white);
  text-shadow: var(--text-shadow-dark-sm);
}

/* ---- テイクアウト / ポイント ---- */
.takeout,
.point {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(var(--space-5), 5vw, var(--space-8));
  align-items: center;
}

.takeout__text p,
.point__text p {
  color: var(--color-ink-soft);
  margin: 0 0 var(--space-6);
}

.takeout__pics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  align-items: start;
}

.takeout__pics img {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.point__img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* --bp-md: 本文2カラムを1カラムに */
@media (max-width: 780px) {
  .takeout,
  .point {
    grid-template-columns: 1fr;
  }

  .point__text {
    order: -1;
  }
}
</style>
