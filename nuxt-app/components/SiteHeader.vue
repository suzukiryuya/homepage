<script setup lang="ts">
const info = useSiteInfo()
const route = useRoute()
const open = ref(false)

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner container">
      <NuxtLink to="/" class="brand" @click="open = false">
        <img
          src="/images/common/logo.jpg"
          :alt="`${info.shopNameFull} ロゴ`"
          width="250"
          height="150"
          class="brand__logo"
        />
      </NuxtLink>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        @click="open = !open"
      >
        <span class="visually-hidden">メニューを開閉</span>
        <span class="nav-toggle__bar" :class="{ 'is-open': open }" />
      </button>

      <nav id="site-nav" class="site-nav" :class="{ 'is-open': open }">
        <ul class="site-nav__list">
          <li v-for="link in info.nav" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="site-nav__link"
              active-class="is-active"
              :exact-active-class="link.to === '/' ? 'is-active' : undefined"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="site-nav__cta">
          <a :href="info.phoneHref" class="btn">
            <IconPhone />
            電話する
          </a>
          <a :href="info.mapUrl" class="btn btn--outline btn--on-dark" target="_blank" rel="noopener">
            MAP
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-brand-darker); /* フッターと同じ濃い赤 */
  border-bottom: var(--border-hairline) solid var(--on-dark-faint);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--header-h);
  gap: var(--space-4);
}

.brand {
  display: inline-flex;
}

.brand__logo {
  height: 52px; /* ロゴの表示高さ（ヘッダー高 --header-h に対する固定値） */
  width: auto;
  display: block;
  padding: var(--space-1) var(--space-2);
  background: var(--color-white);
  border-radius: var(--radius-sm);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.site-nav__list {
  display: flex;
  align-items: center;
  gap: var(--space-5);
}

.site-nav__link {
  color: var(--color-white);
  text-decoration: none;
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  padding: var(--space-1) 0;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.site-nav__link:hover,
.site-nav__link.is-active {
  color: var(--color-link-hover);
  border-color: currentColor;
}

.site-nav__cta {
  display: flex;
  gap: var(--space-2);
}

.site-nav__cta .btn {
  padding: var(--space-2) var(--space-4);
}

.nav-toggle {
  display: none;
  position: relative;
  width: var(--tap-target);
  height: var(--tap-target);
  border: var(--border-hairline) solid var(--border-on-dark);
  border-radius: var(--radius-md);
  background: transparent;
  cursor: pointer;
}

/* ハンバーガーアイコンの作図値（デザイントークンではなくアイコン固有の寸法） */
.nav-toggle__bar,
.nav-toggle__bar::before,
.nav-toggle__bar::after {
  position: absolute;
  left: 50%;
  width: 20px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav-toggle__bar {
  top: 50%;
  transform: translate(-50%, -50%);
}

.nav-toggle__bar::before,
.nav-toggle__bar::after {
  content: "";
  transform: translateX(-50%);
}

.nav-toggle__bar::before {
  top: -6px;
}

.nav-toggle__bar::after {
  top: 6px;
}

.nav-toggle__bar.is-open {
  background: transparent;
}

.nav-toggle__bar.is-open::before {
  top: 0;
  transform: translateX(-50%) rotate(45deg);
}

.nav-toggle__bar.is-open::after {
  top: 0;
  transform: translateX(-50%) rotate(-45deg);
}

/* --bp-lg: ヘッダーをハンバーガーメニューに切替 */
@media (max-width: 860px) {
  .nav-toggle {
    display: block;
  }

  .site-nav {
    position: absolute;
    inset: var(--header-h) 0 auto;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-5);
    padding: var(--space-5) var(--space-5) var(--space-6);
    background: var(--color-brand-darker);
    border-bottom: var(--border-hairline) solid var(--on-dark-faint);
    box-shadow: var(--shadow-md);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .site-nav.is-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .site-nav__list {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-1);
  }

  .site-nav__link {
    padding: var(--space-3) var(--space-1);
    border-bottom: var(--border-hairline) solid var(--border-on-dark-soft);
  }

  .site-nav__cta {
    justify-content: center;
  }
}
</style>
