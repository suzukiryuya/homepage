<script setup lang="ts">
useHead({
  titleTemplate: (title) =>
    title && title !== 'うまい めんくい亭 公式サイト'
      ? `${title} | うまい めんくい亭`
      : 'うまい めんくい亭 公式サイト',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
