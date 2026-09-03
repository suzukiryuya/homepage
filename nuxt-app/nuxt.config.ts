// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 静的サイト生成（SSG）: `npm run generate` で .output/public に書き出す
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/menu', '/quality', '/information', '/news'],
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'うまい めんくい亭 公式サイト',
      meta: [
        {
          name: 'description',
          content:
            '茨城県日立市の老舗ラーメン店「うまい めんくい亭」の公式サイト。食材からこだわり尽くした自慢の味噌ラーメンと、一つ一つ手握りの餃子。こだわり・メニュー・店舗/採用情報をご覧いただけます。',
        },
        { name: 'theme-color', content: '#c0182a' },
      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'icon', type: 'image/png', href: '/android-touch-icon.png', sizes: '192x192' },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-LK9N8FP195',
          async: true,
        },
        {
          innerHTML:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-LK9N8FP195');",
        },
      ],
    },
  },
})
