<script setup lang="ts">
import type { MenuSection } from '~/composables/useMenu'

defineProps<{ section: MenuSection }>()
</script>

<template>
  <section class="menu-section" :data-accent="section.accent ?? 'neutral'">
    <header class="menu-section__head">
      <h2 class="menu-section__title">{{ section.title }}</h2>
      <p v-if="section.concept" class="menu-section__concept">{{ section.concept }}</p>
    </header>

    <ul v-if="section.compact" class="menu-list">
      <li v-for="item in section.items" :key="item.name" class="menu-list__row">
        <span class="menu-list__name">{{ item.name }}</span>
        <span class="menu-list__dots" aria-hidden="true" />
        <span class="menu-list__price">{{ item.price }}</span>
      </li>
    </ul>

    <ul v-else class="menu-grid">
      <li
        v-for="item in section.items"
        :key="item.name"
        class="menu-card"
        :class="{ 'menu-card--full': !item.img }"
      >
        <div v-if="item.img" class="menu-card__media">
          <img :src="item.img" :alt="item.name" loading="lazy" />
          <span v-if="item.badge" class="menu-card__badge">{{ item.badge }}</span>
        </div>
        <div class="menu-card__body">
          <p class="menu-card__name">{{ item.name }}</p>
          <p v-if="item.price" class="menu-card__price">{{ item.price }}</p>
          <p v-if="item.note" class="menu-card__note">{{ item.note }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.menu-section {
  --accent-color: var(--color-brand);
}
.menu-section[data-accent='miso'] { --accent-color: var(--color-miso); }
.menu-section[data-accent='chuka'] { --accent-color: var(--color-chuka); }
.menu-section[data-accent='syouyu'] { --accent-color: var(--color-syouyu); }
.menu-section[data-accent='solt'] { --accent-color: var(--color-solt); }

.menu-section__head {
  margin-bottom: var(--space-6);
}

.menu-section__title {
  margin: 0;
  font-size: var(--fs-xl);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.menu-section__title::before {
  content: "";
  flex: none;
  width: var(--accent-bar-w);
  height: 1.4em;
  border-radius: var(--radius-xs);
  background: var(--accent-color);
}

.menu-section__concept {
  margin: var(--space-3) 0 0;
  color: var(--color-ink-soft);
  font-weight: var(--fw-bold);
  max-width: 46rem;
}

.menu-grid {
  display: grid;
  /* 220px = カード最小幅 */
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-5);
}

.menu-card {
  background: var(--color-surface);
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.menu-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

/* 画像のないメニューは1行使い切りで表示（画像ありカードと縦位置がずれないように） */
.menu-card--full {
  grid-column: 1 / -1;
}

.menu-card--full .menu-card__body {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: var(--space-4);
}

.menu-card--full .menu-card__name {
  min-height: 0;
}

.menu-card--full .menu-card__price {
  margin: 0 0 0 auto;
}

.menu-card--full .menu-card__note {
  flex-basis: 100%;
}

.menu-card__media {
  position: relative;
  overflow: hidden;
  background: var(--color-surface-warm);
  /* すべてのカードで画像枠の高さを揃える（本文の開始位置を揃えるため） */
  aspect-ratio: 23 / 19;
}

/* 画像は切り抜かず、中央寄せで枠内に収める */
.menu-card__media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.menu-card__badge {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  background: var(--color-brand);
  color: var(--color-white);
  font-size: var(--fs-2xs);
  font-weight: var(--fw-bold);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-sm);
}

.menu-card__body {
  padding: var(--space-4) var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  flex: 1;
}

.menu-card__name {
  margin: 0;
  font-weight: var(--fw-bold);
  font-size: var(--fs-base);
  line-height: var(--lh-snug);
  /* 1行/2行で高さが変わっても価格の位置が揃うように（1.5行 × 2行分） */
  min-height: calc(1em * var(--lh-snug) * 2);
}

.menu-card__price {
  margin: auto 0 0;
  font-size: var(--fs-lg);
  font-weight: var(--fw-black);
  color: var(--color-ink);
  font-variant-numeric: tabular-nums;
}

.menu-card__note {
  margin: var(--space-1) 0 0;
  font-size: var(--fs-sm);
  color: var(--color-ink-soft);
}

/* ドリンクなど画像のないカテゴリのコンパクト表示 */
.menu-list {
  display: grid;
  /* 260px = 1項目の最小幅 */
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-2) var(--space-6);
  background: var(--color-surface);
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius);
  padding: var(--space-5);
  box-shadow: var(--shadow-sm);
}

.menu-list__row {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  padding: var(--space-1) 0;
}

.menu-list__name {
  font-weight: var(--fw-bold);
}

.menu-list__dots {
  flex: 1;
  border-bottom: var(--border-hairline) dotted var(--color-line);
  transform: translateY(calc(-1 * var(--space-1)));
}

.menu-list__price {
  font-weight: var(--fw-black);
  color: var(--color-ink);
  font-variant-numeric: tabular-nums;
}
</style>
