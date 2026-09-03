<script setup lang="ts">
import type { NewsItem } from '~/composables/useNews'

defineProps<{ item: NewsItem }>()
</script>

<template>
  <details class="news-card">
    <summary class="news-card__summary">
      <span class="news-card__meta">
        <time class="news-card__date">{{ item.date }}</time>
        <span class="chip" :class="`chip--${item.tag}`">{{ item.tagLabel }}</span>
      </span>
      <span class="news-card__title">{{ item.title }}</span>
      <span class="news-card__toggle" aria-hidden="true">＋</span>
    </summary>
    <div class="news-card__body">
      <p v-for="(p, i) in item.body" :key="i">{{ p }}</p>
    </div>
  </details>
</template>

<style scoped>
.news-card {
  background: var(--color-surface);
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.news-card__summary {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  cursor: pointer;
  list-style: none;
  flex-wrap: wrap;
}

.news-card__summary::-webkit-details-marker {
  display: none;
}

.news-card__meta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

.news-card__date {
  font-size: var(--fs-sm);
  color: var(--color-ink-soft);
  font-variant-numeric: tabular-nums;
}

.news-card__title {
  font-weight: var(--fw-bold);
  font-size: var(--fs-base);
  flex: 1;
  min-width: 12rem;
}

.news-card__toggle {
  margin-left: auto;
  font-size: var(--fs-md);
  color: var(--color-brand);
  transition: transform 0.2s ease;
}

.news-card[open] .news-card__toggle {
  transform: rotate(45deg);
}

.news-card__body {
  padding: 0 var(--space-5) var(--space-5);
  border-top: var(--border-hairline) solid var(--color-line);
}

.news-card__body p {
  margin: var(--space-3) 0 0;
  color: var(--color-ink-soft);
  font-size: var(--fs-sm);
}
</style>
