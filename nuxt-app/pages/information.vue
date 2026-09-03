<script setup lang="ts">
const info = useSiteInfo()

useHead({
  title: '店舗情報・採用情報',
  link: [{ rel: 'canonical', href: 'https://umai-menkuitei.com/information/' }],
  meta: [
    {
      name: 'description',
      content:
        '茨城県日立市にあるラーメン店の老舗です。営業時間やお支払い方法などの店舗詳細のほか、採用情報も掲載しております。',
    },
  ],
})

const seats = [
  { label: 'カウンター', value: '7席' },
  { label: 'テーブル席', value: '7席' },
  { label: 'お座敷', value: '3席（最大18名）' },
]
</script>

<template>
  <div>
    <PageHero eyebrow="INFORMATION" title="店舗情報" />

    <section class="section">
      <div class="container info-body">
        <!-- 外観 -->
        <div class="info-block">
          <h2 class="block-title">赤い看板が目印です！</h2>
          <p class="info-block__text">
            日立北インター（6号出口）を降りて、北に5分のところにあります。「十王駅入口」の交差点近く、国道6号沿いの赤い看板が目印です！
          </p>
          <img class="info-block__img" src="/images/common/exterior.jpg" alt="うまい めんくい亭 外観" loading="lazy" />
        </div>

        <!-- 内装 -->
        <div class="info-block">
          <h2 class="block-title">座席を完備！</h2>
          <p class="info-block__text">
            ご家族でも、ご夫婦でも、職場の仲間とも、もちろんお一人様でも。お客様のニーズにお応えできるよう多くの席をご用意しております。美味しいラーメンとおくつろぎいただける空間で、皆様のご来店をお待ちしております！
          </p>
          <ul class="seat-list">
            <li v-for="s in seats" :key="s.label">
              <span>{{ s.label }}</span>
              <strong>{{ s.value }}</strong>
            </li>
          </ul>
          <div class="interior-grid">
            <figure>
              <img src="/images/information/interior.jpg" alt="店内の様子1" loading="lazy" />
              <figcaption>「清潔」で「明るい」空間をご用意しています！</figcaption>
            </figure>
            <figure>
              <img src="/images/information/interior2.jpg" alt="店内の様子2" loading="lazy" />
              <figcaption>小さいお子様をお連れでも安心のお座敷席</figcaption>
            </figure>
          </div>
        </div>

        <!-- 店舗詳細 -->
        <div class="info-block">
          <h2 class="block-title">店舗詳細</h2>
          <table class="data-table">
            <tbody>
              <tr>
                <th>店名</th>
                <td>うまいめんくい亭 日立川尻店</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>{{ info.address }}</td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td><a :href="info.phoneHref">{{ info.phone }}</a></td>
              </tr>
              <tr>
                <th>営業時間<br />店休日</th>
                <td>
                  <p>年中休まず営業しております。<br />※大晦日は11:00〜15:00までの営業となります。</p>
                  <p>11:00〜22:00（ラストオーダー 22:00）</p>
                  <p class="hours-note">※まん延防止・緊急事態宣言が発令されている場合</p>
                  <p>11:00〜20:00（ラストオーダー 20:00）</p>
                </td>
              </tr>
              <tr>
                <th>支払い方法</th>
                <td>
                  <span class="pay">
                    現金
                    <img src="/images/information/paypay-payment.webp" alt="PayPay" />
                  </span>
                </td>
              </tr>
              <tr>
                <th>予約の可否</th>
                <td>
                  テイクアウトのご予約は電話・店舗の両方で承っております。<br />
                  お席の予約はご遠慮いただいております。
                </td>
              </tr>
              <tr>
                <th>駐車場</th>
                <td>有<br />共有無料25台</td>
              </tr>
              <tr>
                <th>喫煙</th>
                <td>不可<br />※入口外に灰皿がございますので、ご利用ください。</td>
              </tr>
              <tr>
                <th>アクセス</th>
                <td>
                  <ul>
                    <li>国道6号沿いの赤い看板が目印です！</li>
                    <li>JR常磐線 十王駅より車で8分</li>
                    <li>常磐自動車道 日立北I.C.（6号）より北へ車5分</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="info-map">
            <iframe
              :src="info.mapEmbedUrl"
              title="うまい めんくい亭 地図"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 採用情報 -->
    <section class="section section--warm">
      <div class="container info-body">
        <div class="section-head">
          <span class="section-head__eyebrow">RECRUIT</span>
          <h2 class="section-title">採用情報</h2>
          <p class="section-lead">
            経験者・未経験者問わず、やる気のある方でしたら大歓迎いたします！未経験の場合でも丁寧に教えますのでご安心ください。お客様に美味しい一杯を届けたい・作りたい！という方、私たちと一緒に働きませんか？スタッフ一同、皆様のご応募をお待ちしております！
          </p>
        </div>

        <table class="data-table">
          <tbody>
            <tr>
              <th>仕事内容</th>
              <td>［ホール］お客様への接客、オーダー、レジ<br />［厨房］調理補助、料理、仕込み</td>
            </tr>
            <tr>
              <th>雇用形態</th>
              <td>正社員<br />パート・アルバイト</td>
            </tr>
            <tr>
              <th>応募資格</th>
              <td>
                <ul>
                  <li>16歳以上（高校生可）</li>
                  <li>週3日からOK！土・日どちらか出来る方でも歓迎！</li>
                  <li>未経験者OK！・経験者優遇！</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>勤務時間</th>
              <td>10:00〜23:00の間からシフト制です！詳しくは店舗までご連絡ください。</td>
            </tr>
            <tr>
              <th>給与</th>
              <td>
                <ul>
                  <li>［社員］20万円〜</li>
                  <li>［パート］時給960円〜</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>待遇</th>
              <td>パート・社員ともに社割と賄い有り！</td>
            </tr>
            <tr>
              <th>応募方法</th>
              <td>
                店舗に直接お問い合わせください！<br />※ホームページの募集要項を見たとお伝えください。
                <ul>
                  <li>連絡先：<a :href="info.recruitPhoneHref">{{ info.recruitPhone }}</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.info-body {
  max-width: var(--measure-wide);
}

.info-block {
  margin-bottom: clamp(var(--space-7), 7vw, var(--space-8));
}

.info-block:last-child {
  margin-bottom: 0;
}

.info-block__text {
  margin: 0 0 var(--space-5);
  color: var(--color-ink-soft);
}

.hours-note {
  color: var(--color-ink-soft);
  font-size: var(--fs-sm);
}

.info-block__img {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.seat-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.seat-list li {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--color-surface);
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius-pill);
  font-size: var(--fs-sm);
}

.seat-list strong {
  color: var(--color-brand);
}

.interior-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  align-items: start;
}

.interior-grid figure {
  margin: 0;
}

/* 画像は切り抜かず、比率を保ったまま枠幅に収める */
.interior-grid img {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.interior-grid figcaption {
  margin-top: var(--space-2);
  font-size: var(--fs-sm);
  color: var(--color-ink-soft);
}

.pay {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.pay img {
  height: var(--space-6); /* PayPay ロゴの表示高さ */
  width: auto;
  display: inline-block;
}

.info-map {
  position: relative;
  margin-top: var(--space-5);
  aspect-ratio: 16 / 9;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.info-map iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* --bp-sm: 内装ギャラリーを1カラムに */
@media (max-width: 640px) {
  .interior-grid {
    grid-template-columns: 1fr;
  }
}
</style>
