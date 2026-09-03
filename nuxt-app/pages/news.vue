<script setup lang="ts">
const news = useNews()

useHead({
  title: 'お知らせ',
  link: [{ rel: 'canonical', href: 'https://umai-menkuitei.com/news/' }],
  meta: [
    {
      name: 'description',
      content: '「うまい めんくい亭」からのお知らせ一覧。価格改定・季節メニュー・お支払い方法などの最新情報を掲載しています。',
    },
  ],
})
</script>

<template>
  <div>
    <PageHero eyebrow="NEWS" title="お知らせ" />

    <section class="section">
      <div class="container">
        <div class="news-list">
          <NewsCard v-for="n in news" :key="n.date + n.title" :item="n" />
        </div>
        <p class="news-back">
          <NuxtLink to="/" class="btn btn--outline">トップページへ戻る</NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 52rem;
  margin: 0 auto;
}

.news-back {
  margin: var(--space-7) 0 0;
  text-align: center;
}
</style>
