<script setup lang="ts">
useHead({
  title: 'めんくい亭のこだわり',
  link: [{ rel: 'canonical', href: 'https://umai-menkuitei.com/quality/' }],
  meta: [
    {
      name: 'description',
      content:
        '「こだわりの食材」「手作り」「感謝の心」。この三つのこだわりで、お客様に美味しい料理を提供します。',
    },
  ],
})

const ramen = [
  {
    title: '麺',
    img: '/images/quality/concept-noodle.jpg',
    text: '2種類の小麦粉を独自の配合でブレンドしています。モチモチな麺にスープが絡むことで、麺の旨さが更に際立ちます！',
  },
  {
    title: 'スープ',
    img: '/images/quality/soup.jpg',
    text: '鶏ガラ、だし、野菜を半日煮込むことで、さっぱりとしたスープに仕上げました。',
  },
  {
    title: '味噌',
    img: '/images/quality/make-miso.jpg',
    text: '本場北海道の厳選された味噌を使用！野菜や高級醤油とともに熟成させることで、繊細ながらも深みのある味を出しています。',
  },
]

const gyoza = [
  {
    title: '餃子の餡から手作りしています',
    img: '/images/quality/make-gyoza.jpg',
    text: '当店では、餃子の具材から手作り。ひき肉を粘り気が出るまで練ることで、食感の良い餃子になります。',
  },
  {
    title: '全ての餃子を手で握っています',
    img: '/images/quality/grip-gyoza.jpg',
    text: '機械を使わず一つ一つ丁寧に握る。このこだわりは他の店舗には負けませんし、このこだわりこそがお客様から絶大な支持を得ている秘訣です。',
  },
  {
    title: 'モチモチでジューシーな餃子',
    img: '/images/quality/bake-gyoza.jpg',
    text: '餃子を一口運べば、皮のモチモチと具材のジューシーさ・旨さが口一杯に広がること間違いなしです。',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="QUALITY"
      title="こだわり"
      :lead="[
        '「こだわりの食材」「手作り」「感謝の心」',
        'この三つのこだわりで、お客様に美味しい料理をお届けします。',
      ]"
    />

    <!-- ラーメンのこだわり -->
    <section class="section">
      <div
        class="quality-banner"
        style="background-image: url('/images/quality/miso-ramen.jpg')"
      >
        <h2 class="quality-banner__title">美味しい商品は素材から</h2>
      </div>
      <div class="container concept-grid">
        <article v-for="c in ramen" :key="c.title" class="concept-card">
          <img :src="c.img" :alt="c.title" loading="lazy" />
          <h3>{{ c.title }}</h3>
          <p>{{ c.text }}</p>
        </article>
      </div>
    </section>

    <!-- 餃子のこだわり -->
    <section class="section section--warm">
      <div
        class="quality-banner"
        style="background-image: url('/images/quality/concept-gyoza.jpg')"
      >
        <h2 class="quality-banner__title">自慢の一品 手作り餃子</h2>
      </div>
      <div class="container concept-grid">
        <article v-for="c in gyoza" :key="c.title" class="concept-card">
          <img :src="c.img" :alt="c.title" loading="lazy" />
          <h3>{{ c.title }}</h3>
          <p>{{ c.text }}</p>
        </article>
      </div>
    </section>

    <!-- 厳選された食材 -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-head__eyebrow">INGREDIENTS</span>
          <h2 class="section-title">厳選された食材</h2>
        </div>
        <div class="food">
          <div class="food__text">
            <p>
              お客様に安心して食事をしていただくには、食材を厳選することが必要不可欠です。そのため、当店では豚肉・米・野菜すべてにおいて国産のものを使用しています。また、手作りにこだわることで美味しい商品をお客様に提供させていただいています。
            </p>
            <p>
              豚肉はローズポークを使用しており、茨城県の県花「バラ」にちなんで名付けられた銘柄豚です。弾力があり、きめが細かく、柔らかい肉質が特徴です。
            </p>
            <p>
              米は地元ブランド米・常陸太田産のコシヒカリを使用しています。粘り・柔らかさ・香り・甘味のバランスが良いことが特徴です。
            </p>
          </div>
          <img
            class="food__img"
            src="/images/quality/concept-food.jpg"
            alt="厳選された食材"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.quality-banner {
  position: relative;
  display: grid;
  place-items: center;
  min-height: min(46vh, 380px);
  background-size: cover;
  background-position: center;
  margin-bottom: clamp(var(--space-6), 6vw, var(--space-8));
}

.quality-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--overlay-banner);
}

.quality-banner__title {
  position: relative;
  margin: 0;
  padding: 0 var(--space-5);
  text-align: center;
  color: var(--color-white);
  font-family: var(--font-serif);
  font-size: var(--fs-page);
  text-shadow: var(--text-glow-banner);
}

.concept-grid {
  display: grid;
  /* 260px = カード最小幅 */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-6);
  align-items: start;
}

.concept-card {
  text-align: center;
}

/* 画像は切り抜かず、比率を保ったまま枠内に収める（340px = 画像の最大高さ） */
.concept-card img {
  max-width: 100%;
  max-height: 340px;
  width: auto;
  height: auto;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.concept-card h3 {
  margin: var(--space-5) 0 var(--space-2);
  font-size: var(--fs-lg);
  color: var(--color-accent-dark);
}

.concept-card p {
  margin: 0;
  color: var(--color-ink-soft);
  text-align: justify;
}

.food {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(var(--space-5), 5vw, var(--space-7));
  align-items: center;
}

.food__text p {
  margin: 0 0 var(--space-5);
  color: var(--color-ink-soft);
  text-align: justify;
}

.food__text p:last-child {
  margin-bottom: 0;
}

.food__img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* --bp-md: こだわり本文を1カラムに */
@media (max-width: 780px) {
  .food {
    grid-template-columns: 1fr;
  }
}
</style>
