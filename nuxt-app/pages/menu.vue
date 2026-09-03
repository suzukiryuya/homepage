<script setup lang="ts">
// useMenu / menuFilters は composables/ から自動 import される
import type { MenuFilter } from '~/composables/useMenu'

const sections = useMenu()
const route = useRoute()

const active = ref<MenuFilter['value']>('all')

// ホームの「テイクアウトはこちら」(/menu#takeout) からの遷移に対応
onMounted(() => {
  const hash = route.hash.replace('#', '')
  if (hash && menuFilters.some((f) => f.value === hash)) {
    active.value = hash as MenuFilter['value']
  }
})

const visibleSections = computed(() =>
  active.value === 'all'
    ? sections
    : sections.filter((s) => s.group === active.value),
)

useHead({
  title: 'メニューを見る',
  link: [{ rel: 'canonical', href: 'https://umai-menkuitei.com/menu/' }],
  meta: [
    {
      name: 'description',
      content:
        '多種多彩なメニューを取り揃えています。人気No.1 辛ネギ味噌ラーメン、店内手作り餃子。値段はすべて税込表示です。',
    },
  ],
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="MENU"
      title="メニュー"
      lead="値段はすべて税込で表示しています。"
    />

    <div class="menu-tabs">
      <div class="container menu-tabs__inner">
        <button
          v-for="f in menuFilters"
          :key="f.value"
          type="button"
          class="menu-tab"
          :class="{ 'is-active': active === f.value }"
          @click="active = f.value"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <section class="section">
      <div class="container menu-sections">
        <MenuSection v-for="s in visibleSections" :key="s.id" :section="s" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.menu-tabs {
  position: sticky;
  top: var(--header-h);
  z-index: 40;
  background: var(--color-bg);
  border-bottom: var(--border-hairline) solid var(--color-line);
}

.menu-tabs__inner {
  display: flex;
  gap: var(--space-2);
  overflow-x: auto;
  padding: var(--space-3) var(--space-5);
  scrollbar-width: none;
}

.menu-tabs__inner::-webkit-scrollbar {
  display: none;
}

.menu-tab {
  flex-shrink: 0;
  border: var(--border-hairline) solid var(--color-line);
  background: var(--color-surface);
  color: var(--color-ink-soft);
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
}

.menu-tab:hover {
  color: var(--color-brand);
  border-color: var(--color-accent);
}

.menu-tab.is-active {
  background: var(--color-brand);
  border-color: var(--color-brand);
  color: var(--color-white);
}

.menu-sections {
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-7), 6vw, var(--space-8));
}
</style>
