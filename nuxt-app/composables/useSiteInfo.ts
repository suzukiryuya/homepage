export interface NavLink {
  label: string
  to: string
}

export interface SiteInfo {
  shopNameFull: string
  catchcopy: string
  phone: string
  phoneHref: string
  recruitPhone: string
  recruitPhoneHref: string
  address: string
  mapUrl: string
  mapEmbedUrl: string
  copyrightYear: number
  nav: NavLink[]
}

const info: SiteInfo = {
  shopNameFull: 'うまいめんくい亭 日立川尻店',
  catchcopy: 'みなさまに笑顔が生まれるラーメンをお届けします',
  phone: '0294-43-6040',
  phoneHref: 'tel:0294436040',
  recruitPhone: '0294-43-7077',
  recruitPhoneHref: 'tel:0294437077',
  address: '茨城県日立市川尻町4丁目28-30',
  mapUrl: 'https://goo.gl/maps/vRHfuubfNqmzExJA8',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.80531331156!2d140.69554731542956!3d36.6551339799788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602178b8d910b7c7%3A0xa8cc8a9905167369!2z44GG44G-44GE44KB44KT44GP44GE5Lqt5pel56uL5bed5bC75bqX!5e0!3m2!1sja!2sjp!4v1631489402015!5m2!1sja!2sjp',
  copyrightYear: 2021,
  nav: [
    { label: 'ホーム', to: '/' },
    { label: 'お知らせ', to: '/news' },
    { label: 'メニュー', to: '/menu' },
    { label: 'こだわり', to: '/quality' },
    { label: '店舗・採用情報', to: '/information' },
  ],
}

export const useSiteInfo = () => info
