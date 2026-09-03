<script setup lang="ts">
const info = useSiteInfo()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__brand">
        <img
          src="/images/common/logo.jpg"
          :alt="`${info.shopNameFull} ロゴ`"
          width="140"
          height="56"
          class="site-footer__logo"
        />
        <p class="site-footer__address">{{ info.address }}</p>
      </div>

      <div class="site-footer__contact">
        <p class="site-footer__lead">テイクアウトのご注文はぜひお電話で！</p>
        <a :href="info.phoneHref" class="btn site-footer__phone">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
            <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />
          </svg>
          {{ info.phone }}
        </a>
      </div>

      <nav class="site-footer__nav" aria-label="フッターナビゲーション">
        <ul>
          <li v-for="link in info.nav" :key="link.to">
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
          <li>
            <a :href="info.mapUrl" target="_blank" rel="noopener">MAP</a>
          </li>
        </ul>
      </nav>
    </div>

    <p class="site-footer__copy">© {{ year }} うまい めんくい亭</p>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-brand-darker);
  color: var(--on-dark);
}

.site-footer__inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: var(--space-6);
  padding: clamp(var(--space-7), 6vw, var(--space-8)) 0;
}

.site-footer__logo {
  width: 140px; /* ロゴの表示幅（固定） */
  height: auto;
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-4);
}

.site-footer__address {
  margin: 0;
  font-size: var(--fs-sm);
  color: var(--on-dark-dim);
}

.site-footer__lead {
  margin: 0 0 var(--space-3);
  font-weight: var(--fw-bold);
}

/* 主要ボタン(.btn)を継承し、電話番号として大きめに見せるための差分だけ指定 */
.site-footer__phone {
  padding: var(--space-3) var(--space-6);
  font-size: var(--fs-lg);
  letter-spacing: var(--tracking-xs);
}

.site-footer__nav ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.site-footer__nav a {
  color: var(--on-dark);
  text-decoration: none;
  font-weight: var(--fw-medium);
}

.site-footer__nav a:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

.site-footer__copy {
  margin: 0;
  padding: var(--space-5) 0;
  text-align: center;
  font-size: var(--fs-xs);
  color: var(--on-dark-dim);
  border-top: var(--border-hairline) solid var(--on-dark-faint);
}

/* --bp-md: フッターを1カラムに */
@media (max-width: 780px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    text-align: center;
  }

  .site-footer__nav ul {
    align-items: center;
  }
}
</style>
