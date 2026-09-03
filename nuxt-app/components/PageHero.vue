<script setup lang="ts">
const props = defineProps<{
  eyebrow?: string
  title: string
  /** 文字列、または行ごとに分けた配列（配列の要素間で改行される） */
  lead?: string | string[]
}>()

const leadLines = computed<string[]>(() => [props.lead ?? []].flat())
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <p v-if="eyebrow" class="page-hero__eyebrow">{{ eyebrow }}</p>
      <h1 class="page-hero__title">{{ title }}</h1>
      <p v-if="leadLines.length" class="page-hero__lead">
        <template v-for="(line, i) in leadLines" :key="i"
          ><br v-if="i" />{{ line }}</template
        >
      </p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  background: var(--color-surface-warm);
  padding-block: clamp(var(--space-7), 6vw, var(--space-8));
  border-bottom: var(--border-hairline) solid var(--color-line);
  text-align: center;
}

.page-hero__eyebrow {
  margin: 0 0 var(--space-3);
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  letter-spacing: var(--tracking-widest);
  color: var(--color-accent-dark);
}

.page-hero__title {
  margin: 0;
  font-size: var(--fs-page);
  position: relative;
  display: inline-block;
  padding-bottom: var(--space-3);
}

.page-hero__title::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: var(--space-8);
  height: var(--rule-h);
  border-radius: var(--rule-h);
  background: var(--color-brand);
}

.page-hero__lead {
  max-width: var(--measure-text);
  margin: var(--space-5) auto 0;
  color: var(--color-ink-soft);
}
</style>
